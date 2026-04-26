/**
 * Democracia Real - JavaScript Principal
 * Funcionalidad mínima y accesible
 */

(function() {
    'use strict';
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ==========================================================================
    // Navegación móvil
    // ==========================================================================
    
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const nav = document.querySelector('.nav');
    const mainContent = document.querySelector('main');

    if (mainContent && !mainContent.id) mainContent.id = 'main-content';
    if (mainContent && !document.querySelector('.skip-link')) {
        var skip = document.createElement('a');
        skip.className = 'skip-link';
        skip.href = '#' + (mainContent.id || 'main-content');
        skip.textContent = 'Saltar al contenido principal';
        document.body.insertBefore(skip, document.body.firstChild);
    }
    if (nav && !nav.getAttribute('role')) nav.setAttribute('role', 'navigation');
    if (nav && !nav.getAttribute('aria-label')) nav.setAttribute('aria-label', 'Navegación principal');

    function closeNavMenu() {
        if (!navToggle || !navMenu) return;
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
    }

    if (navToggle && navMenu) {
        if (!navMenu.id) navMenu.id = 'main-menu';
        navToggle.setAttribute('aria-controls', navMenu.id);
        navToggle.addEventListener('click', function() {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');
        });

        // Cerrar menú al hacer click en un enlace
        navMenu.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                closeNavMenu();
            });
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') closeNavMenu();
        });

        document.addEventListener('click', function(e) {
            if (!navMenu.classList.contains('active')) return;
            if (navMenu.contains(e.target) || navToggle.contains(e.target)) return;
            closeNavMenu();
        });
        window.addEventListener('resize', function() {
            if (window.innerWidth > 1100) closeNavMenu();
        });
    }

    // ==========================================================================
    // Scroll suave para enlaces internos
    // ==========================================================================
    
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const navHeight = nav ? nav.offsetHeight : 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: prefersReducedMotion ? 'auto' : 'smooth'
                });

                targetElement.setAttribute('tabindex', '-1');
                targetElement.focus({ preventScroll: true });
            }
        });
    });

    // ==========================================================================
    // Navbar transparente al scroll
    // ==========================================================================
    
    let lastScrollY = window.scrollY;

    function updateNav() {
        if (!nav) return;
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            nav.style.background = 'rgba(10, 10, 10, 0.95)';
        } else {
            nav.style.background = 'rgba(10, 10, 10, 0.9)';
        }
        
        lastScrollY = currentScrollY;
    }

    window.addEventListener('scroll', updateNav, { passive: true });

    // ==========================================================================
    // Animación de entrada para elementos
    // ==========================================================================
    
    // Solo si el navegador soporta IntersectionObserver
    if ('IntersectionObserver' in window) {
        var observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        var animatableElements = document.querySelectorAll('.problem-card, .pillar-card');
        animatableElements.forEach(function(el) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(el);
        });

        // Data dashboard: staggered reveal + count-up animation
        var dataGroups = document.querySelectorAll('.data-group');
        var dataObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    animateCounters(entry.target);
                    dataObserver.unobserve(entry.target);
                }
            });
        }, { root: null, rootMargin: '0px', threshold: 0.2 });

        dataGroups.forEach(function(group, i) {
            group.style.transitionDelay = (i * 0.15) + 's';
            dataObserver.observe(group);
        });
    }

    function animateCounters(container) {
        var values = container.querySelectorAll('.data-value[data-count]');
        values.forEach(function(el) {
            var target = parseFloat(el.getAttribute('data-count'));
            var suffix = el.getAttribute('data-suffix') || '';
            var decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
            var duration = 1200;
            var start = null;
            var originalText = el.textContent;

            if (target === 0) return;

            function step(timestamp) {
                if (!start) start = timestamp;
                var progress = Math.min((timestamp - start) / duration, 1);
                var eased = 1 - Math.pow(1 - progress, 3);
                var current = eased * target;

                if (decimals > 0) {
                    el.textContent = current.toFixed(decimals).replace('.', ',') + suffix;
                } else if (target >= 1000) {
                    el.textContent = Math.floor(current).toLocaleString('es-ES') + suffix;
                } else {
                    el.textContent = Math.floor(current) + suffix;
                }

                if (progress < 1) {
                    requestAnimationFrame(step);
                } else {
                    el.textContent = originalText;
                }
            }

            requestAnimationFrame(step);
        });
    }

    // ==========================================================================
    // Masa crítica: termómetro + formulario
    // ==========================================================================

    var interestForm = document.getElementById('interestForm');
    var interestStatus = document.getElementById('interestStatus');
    var interestTotal = document.getElementById('interestTotal');
    var interestTarget = document.getElementById('interestTarget');
    var interestProgress = document.getElementById('interestProgress');
    var interestMeter = document.getElementById('interestMeter');
    var interestTopProvince = document.getElementById('interestTopProvince');
    var interestTopHelp = document.getElementById('interestTopHelp');
    var API_BASE = 'https://democracia-chat-function.azurewebsites.net/api';

    var helpTypeLabels = {
        difusion: 'Difusión',
        revision: 'Revisión',
        legal: 'Legal',
        organizacion: 'Organización',
        seguir_avances: 'Seguir avances',
        otro: 'Otro'
    };

    function formatNumber(value) {
        return Number(value || 0).toLocaleString('es-ES');
    }

    function getTopKey(map) {
        var entries = Object.keys(map || {}).map(function(key) {
            return { key: key, value: map[key] };
        });
        entries.sort(function(a, b) { return b.value - a.value; });
        return entries.length ? entries[0].key : '--';
    }

    function updateInterestUi(stats) {
        if (!interestTotal || !interestTarget || !interestProgress || !interestMeter) return;

        var total = Number(stats.total || 0);
        var target = Number(stats.target || 1000);
        var progress = Math.min(100, target > 0 ? (total / target) * 100 : 0);

        interestTotal.textContent = formatNumber(total);
        interestTarget.textContent = formatNumber(target);
        interestProgress.textContent = progress.toFixed(progress >= 10 ? 0 : 1).replace('.', ',') + '%';
        interestMeter.style.width = Math.max(0.8, progress) + '%';

        var topProvince = getTopKey(stats.byProvince || {});
        var topHelp = getTopKey(stats.byHelpType || {});

        if (interestTopProvince) interestTopProvince.textContent = topProvince;
        if (interestTopHelp) interestTopHelp.textContent = helpTypeLabels[topHelp] || topHelp;
    }

    function setInterestStatus(message, type) {
        if (!interestStatus) return;
        interestStatus.textContent = message || '';
        interestStatus.className = 'mass-status' + (type ? ' ' + type : '');
    }

    function loadInterestStats() {
        if (!interestMeter) return;

        fetch(API_BASE + '/interest-stats', {
            method: 'GET',
            headers: { 'Accept': 'application/json' }
        })
            .then(function(response) { return response.json(); })
            .then(updateInterestUi)
            .catch(function() {
                // La sección funciona aunque las stats no estén disponibles.
            });
    }

    if (interestForm) {
        loadInterestStats();

        interestForm.addEventListener('submit', function(e) {
            e.preventDefault();

            var submit = interestForm.querySelector('button[type="submit"]');
            var data = new FormData(interestForm);
            var payload = {
                email: data.get('email'),
                province: data.get('province'),
                helpType: data.get('helpType'),
                consent: data.get('consent') === 'on',
                website: data.get('website'),
                source: 'home'
            };

            if (!payload.email || !payload.province || !payload.helpType || !payload.consent) {
                setInterestStatus('Completa email, provincia, tipo de ayuda y consentimiento.', 'error');
                return;
            }

            if (submit) {
                submit.disabled = true;
                submit.textContent = 'Registrando...';
            }
            setInterestStatus('', '');

            fetch(API_BASE + '/interest-signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(payload)
            })
                .then(function(response) {
                    return response.json().then(function(body) {
                        if (!response.ok) throw new Error(body.error || 'No se ha podido registrar.');
                        return body;
                    });
                })
                .then(function(body) {
                    updateInterestUi(body);
                    if (body.alreadyRegistered) {
                        setInterestStatus('Ya estabas en la lista. Hemos actualizado el contador.', 'success');
                    } else {
                        setInterestStatus('Listo. Eres la persona nº ' + formatNumber(body.total) + ' en apuntarte.', 'success');
                    }
                    interestForm.reset();
                })
                .catch(function(error) {
                    setInterestStatus(error.message || 'No se ha podido registrar ahora mismo.', 'error');
                })
                .finally(function() {
                    if (submit) {
                        submit.disabled = false;
                        submit.textContent = 'Apuntarme a la lista';
                    }
                });
        });
    }

    var privacyLink = document.getElementById('interestPrivacyLink');
    var privacyModal = document.getElementById('privacyModal');
    var privacyCloseButtons = document.querySelectorAll('[data-privacy-close]');
    var lastPrivacyFocus = null;

    function openPrivacyModal() {
        if (!privacyModal) return;
        lastPrivacyFocus = document.activeElement;
        privacyModal.classList.add('privacy-modal-open');
        privacyModal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
        var close = privacyModal.querySelector('.privacy-modal-close');
        if (close) close.focus();
    }

    function closePrivacyModal() {
        if (!privacyModal) return;
        privacyModal.classList.remove('privacy-modal-open');
        privacyModal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
        if (lastPrivacyFocus && typeof lastPrivacyFocus.focus === 'function') {
            lastPrivacyFocus.focus();
        }
    }

    if (privacyLink && privacyModal) {
        privacyLink.addEventListener('click', function(e) {
            e.preventDefault();
            openPrivacyModal();
        });

        privacyCloseButtons.forEach(function(button) {
            button.addEventListener('click', closePrivacyModal);
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && privacyModal.classList.contains('privacy-modal-open')) {
                closePrivacyModal();
            }
        });
    }

})();
