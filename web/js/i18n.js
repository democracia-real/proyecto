/**
 * Sistema de internacionalización (i18n)
 * Carga traducciones desde archivos JSON
 */

(function() {
    'use strict';

    const SUPPORTED_LANGS = ['es', 'ca', 'eu', 'gl', 'en'];
    const DEFAULT_LANG = 'es';
    const STORAGE_KEY = 'democracia-real-lang';

    let currentLang = DEFAULT_LANG;
    let translations = {};

    // Detectar idioma preferido
    function detectLanguage() {
        // 1. Comprobar localStorage
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored && SUPPORTED_LANGS.includes(stored)) {
            return stored;
        }

        // 2. Comprobar URL param
        const urlParams = new URLSearchParams(window.location.search);
        const urlLang = urlParams.get('lang');
        if (urlLang && SUPPORTED_LANGS.includes(urlLang)) {
            return urlLang;
        }

        // 3. Comprobar idioma del navegador
        const browserLang = navigator.language.split('-')[0];
        if (SUPPORTED_LANGS.includes(browserLang)) {
            return browserLang;
        }

        return DEFAULT_LANG;
    }

    // Cargar archivo de traducción
    async function loadTranslation(lang) {
        try {
            const response = await fetch(`/i18n/${lang}.json`);
            if (!response.ok) throw new Error('Not found');
            return await response.json();
        } catch (e) {
            console.warn(`Could not load ${lang}.json, falling back to ${DEFAULT_LANG}`);
            if (lang !== DEFAULT_LANG) {
                return loadTranslation(DEFAULT_LANG);
            }
            return null;
        }
    }

    // Obtener valor anidado de un objeto
    function getNestedValue(obj, path) {
        return path.split('.').reduce((current, key) => 
            current && current[key] !== undefined ? current[key] : null, obj);
    }

    // Aplicar traducciones al DOM
    function applyTranslations(trans) {
        // Actualizar elementos con data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const value = getNestedValue(trans, key);
            if (value) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = value;
                } else {
                    el.innerHTML = value;
                }
            }
        });

        // Actualizar atributos con data-i18n-attr
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            const value = getNestedValue(trans, key);
            if (value) el.title = value;
        });

        // Actualizar meta tags
        if (trans.meta) {
            const titleEl = document.querySelector('title');
            if (titleEl && trans.meta.title) titleEl.textContent = trans.meta.title;
            
            const descEl = document.querySelector('meta[name="description"]');
            if (descEl && trans.meta.description) descEl.content = trans.meta.description;
        }

        // Actualizar html lang
        document.documentElement.lang = trans.lang || DEFAULT_LANG;

        // Actualizar selector de idioma
        updateLanguageSelector(trans);

        // Mostrar aviso si traducción no disponible
        if (trans.available === false && trans.coming_soon) {
            showTranslationNotice(trans);
        }
    }

    // Actualizar el selector de idioma
    function updateLanguageSelector(trans) {
        const currentBtn = document.querySelector('.lang-current');
        if (currentBtn && trans.language_selector) {
            currentBtn.textContent = trans.language_selector.current || trans.lang.toUpperCase();
        }
    }

    // Mostrar aviso de traducción pendiente
    function showTranslationNotice(trans) {
        // Buscar si ya existe
        let notice = document.querySelector('.translation-notice');
        if (!notice) {
            notice = document.createElement('div');
            notice.className = 'translation-notice';
            document.body.insertBefore(notice, document.body.firstChild);
        }
        
        notice.innerHTML = `
            <span>${trans.coming_soon} (${trans.lang_name})</span>
            <button onclick="window.i18n.setLanguage('es')" aria-label="Cerrar">
                Ver en Español
            </button>
        `;
        notice.style.display = 'flex';
    }

    // Ocultar aviso
    function hideTranslationNotice() {
        const notice = document.querySelector('.translation-notice');
        if (notice) notice.style.display = 'none';
    }

    // Cambiar idioma
    async function setLanguage(lang) {
        if (!SUPPORTED_LANGS.includes(lang)) lang = DEFAULT_LANG;
        
        const trans = await loadTranslation(lang);
        if (trans) {
            currentLang = lang;
            translations = trans;
            localStorage.setItem(STORAGE_KEY, lang);
            
            if (trans.available !== false) {
                hideTranslationNotice();
            }
            
            applyTranslations(trans);
            
            // Actualizar clases activas en selector
            document.querySelectorAll('.lang-option').forEach(opt => {
                opt.classList.toggle('active', opt.dataset.lang === lang);
            });
        }
    }

    // Inicializar
    async function init() {
        currentLang = detectLanguage();
        
        // Cargar traducción por defecto siempre (para fallback)
        const defaultTrans = await loadTranslation(DEFAULT_LANG);
        
        if (currentLang !== DEFAULT_LANG) {
            const trans = await loadTranslation(currentLang);
            // Merge con default para cubrir keys faltantes
            translations = { ...defaultTrans, ...trans };
        } else {
            translations = defaultTrans;
        }
        
        if (translations) {
            applyTranslations(translations);
        }

        // Event listeners para selector
        document.querySelectorAll('.lang-option').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                setLanguage(btn.dataset.lang);
            });
        });
    }

    // Exponer API global
    window.i18n = {
        init,
        setLanguage,
        getCurrentLang: () => currentLang,
        getTranslation: (key) => getNestedValue(translations, key),
        SUPPORTED_LANGS
    };

    // Auto-init cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
