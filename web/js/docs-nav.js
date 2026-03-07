/**
 * Sidebar unificado para toda la documentación.
 * Fuente única de verdad: editar aquí actualiza TODOS los sidebars.
 */
(function () {
    'use strict';

    var DOCS_NAV = [
        { title: 'Inicio', href: '/docs/' },
        { title: '\u25C6 Radiograf\u00eda de Espa\u00f1a', href: '/docs/radiografia.html', highlight: true },
        {
            title: '01. Diagn\u00f3stico del Sistema',
            href: '/docs/01-diagnostico/',
            matchPath: '/docs/01-diagnostico',
            matchDoc: '01_diagnostico_del_sistema/',
            children: [
                { title: 'Partitocracia', href: '/docs/viewer.html?doc=01_diagnostico_del_sistema/partitocracia.md' },
                { title: 'Separaci\u00f3n de Poderes', href: '/docs/viewer.html?doc=01_diagnostico_del_sistema/separacion_poderes.md' },
                { title: 'Sistema Electoral', href: '/docs/viewer.html?doc=01_diagnostico_del_sistema/sistema_electoral.md' },
                { title: 'Comparativa Internacional', href: '/docs/viewer.html?doc=01_diagnostico_del_sistema/comparativa_internacional.md' },
                { title: 'Indicadores de Potencia Nacional', href: '/docs/viewer.html?doc=01_diagnostico_del_sistema/indicadores_potencia_nacional.md' },
                { title: '\u00c1lbum de Diagn\u00f3stico', href: '/docs/01-diagnostico/#album' }
            ]
        },
        {
            title: '02. Problemas Estructurales',
            href: '/docs/02-problemas/',
            matchPath: '/docs/02-problemas',
            matchDoc: '02_problemas_estructurales/',
            children: [
                { title: 'Corrupci\u00f3n e Impunidad', href: '/docs/viewer.html?doc=02_problemas_estructurales/corrupcion_e_impunidad.md' },
                { title: 'Justicia Lenta y Anal\u00f3gica', href: '/docs/viewer.html?doc=02_problemas_estructurales/justicia_lenta_y_analogica.md' },
                { title: 'Puertas Giratorias', href: '/docs/viewer.html?doc=02_problemas_estructurales/puertas_giratorias.md' },
                { title: 'Coste Pol\u00edtico Vitalicio', href: '/docs/viewer.html?doc=02_problemas_estructurales/coste_politico_vitalicio.md' },
                { title: 'Burocracia y Eficiencia', href: '/docs/viewer.html?doc=02_problemas_estructurales/burocracia_y_eficiencia.md' },
                { title: 'Funcionariado', href: '/docs/viewer.html?doc=02_problemas_estructurales/funcionariado.md' },
                { title: 'Fondos Europeos', href: '/docs/viewer.html?doc=02_problemas_estructurales/fondos_europeos.md' },
                { title: 'Prioridad Gasto P\u00fablico', href: '/docs/viewer.html?doc=02_problemas_estructurales/prioridad_gasto_publico.md' },
                { title: 'Aut\u00f3nomos', href: '/docs/viewer.html?doc=02_problemas_estructurales/autonomos_y_emprendimiento.md' },
                { title: 'Justicia Fiscal', href: '/docs/viewer.html?doc=02_problemas_estructurales/justicia_fiscal_autonomos.md' },
                { title: 'Compra P\u00fablica Nacional', href: '/docs/viewer.html?doc=02_problemas_estructurales/compra_publica_producto_nacional.md' },
                { title: 'Turismo vs Industria', href: '/docs/viewer.html?doc=02_problemas_estructurales/turismo_vs_industria.md' },
                { title: 'Sanidad', href: '/docs/viewer.html?doc=02_problemas_estructurales/sanidad.md' },
                { title: 'Salud Mental y Soledad', href: '/docs/viewer.html?doc=02_problemas_estructurales/salud_mental_y_soledad_no_deseada.md' },
                { title: 'Educaci\u00f3n', href: '/docs/viewer.html?doc=02_problemas_estructurales/educacion.md' },
                { title: 'Innovaci\u00f3n y Ciencia', href: '/docs/viewer.html?doc=02_problemas_estructurales/innovacion_y_ciencia_fuga_de_cerebros.md' },
                { title: 'Pensiones', href: '/docs/viewer.html?doc=02_problemas_estructurales/sistema_pensiones.md' },
                { title: 'Seguridad Ciudadana', href: '/docs/viewer.html?doc=02_problemas_estructurales/seguridad_ciudadana_e_impunidad.md' },
                { title: 'Vivienda', href: '/docs/viewer.html?doc=02_problemas_estructurales/vivienda.md' },
                { title: 'Vivienda y Suelo', href: '/docs/viewer.html?doc=02_problemas_estructurales/vivienda_y_suelo.md' },
                { title: 'Despoblaci\u00f3n Rural', href: '/docs/viewer.html?doc=02_problemas_estructurales/despoblacion_rural_y_equilibrio_territorial.md' },
                { title: 'Energ\u00eda', href: '/docs/viewer.html?doc=02_problemas_estructurales/energia.md' },
                { title: 'Zonas Bajas Emisiones', href: '/docs/viewer.html?doc=02_problemas_estructurales/zonas_bajas_emisiones.md' },
                { title: 'Inmigraci\u00f3n e Integraci\u00f3n', href: '/docs/viewer.html?doc=02_problemas_estructurales/inmigracion_e_integracion.md' },
                { title: 'Anexo · Auditor\u00eda Fondos', href: '/docs/viewer.html?doc=02_problemas_estructurales/auditoria_fondos_europeos.md' },
                { title: 'Anexo · Mapa Puertas Giratorias', href: '/docs/viewer.html?doc=02_problemas_estructurales/mapa_puertas_giratorias.md' },
                { title: '\u00c1lbum Problemas Estructurales', href: '/docs/02-problemas/#album' }
            ]
        },
        {
            title: '03. Propuestas Institucionales',
            href: '/docs/03-propuestas/',
            matchPath: '/docs/03-propuestas',
            matchDoc: '03_propuestas_institucionales/',
            children: [
                { title: 'Reforma Electoral', href: '/docs/viewer.html?doc=03_propuestas_institucionales/reforma_electoral.md' },
                { title: 'Reforma Judicial', href: '/docs/viewer.html?doc=03_propuestas_institucionales/reforma_judicial.md' },
                { title: 'Reforma Administrativa', href: '/docs/viewer.html?doc=03_propuestas_institucionales/reforma_administrativa.md' },
                { title: 'Reforma Fiscal', href: '/docs/viewer.html?doc=03_propuestas_institucionales/reforma_fiscal.md' },
                { title: 'Disciplina Fiscal y Deuda', href: '/docs/viewer.html?doc=03_propuestas_institucionales/disciplina_fiscal_y_deuda.md' },
                { title: 'Planificaci\u00f3n Largo Plazo', href: '/docs/viewer.html?doc=03_propuestas_institucionales/planificacion_largo_plazo.md' },
                { title: 'Reforma de Pensiones', href: '/docs/viewer.html?doc=03_propuestas_institucionales/reforma_pensiones.md' },
                { title: 'Ley Anti Decretos-Ley', href: '/docs/viewer.html?doc=03_propuestas_institucionales/ley_anti_decretos.md' },
                { title: 'Reforma Funcionariado', href: '/docs/viewer.html?doc=03_propuestas_institucionales/reforma_funcionariado_eficiente.md' },
                { title: 'Independencia Digital Justicia', href: '/docs/viewer.html?doc=03_propuestas_institucionales/independencia_digital_justicia.md' },
                { title: 'Plantilla de Redacci\u00f3n', href: '/docs/viewer.html?doc=03_propuestas_institucionales/plantilla_redaccion_propuestas.md' }
            ]
        },
        {
            title: '04. Modelo Organizativo',
            href: '/docs/04-organizacion/',
            matchPath: '/docs/04-organizacion',
            matchDoc: '04_modelo_organizativo_partido/',
            children: [
                { title: 'Gobernanza, Consenso y Afiliaci\u00f3n', href: '/docs/viewer.html?doc=04_modelo_organizativo_partido/gobernanza_consenso_afiliacion.md' },
                { title: 'C\u00f3digo \u00c9tico', href: '/docs/viewer.html?doc=04_modelo_organizativo_partido/codigo_etico.md' },
                { title: 'Estatutos Base', href: '/docs/viewer.html?doc=04_modelo_organizativo_partido/estatutos_base.md' },
                { title: 'Democracia Interna', href: '/docs/viewer.html?doc=04_modelo_organizativo_partido/democracia_interna.md' },
                { title: 'Estructura Territorial', href: '/docs/viewer.html?doc=04_modelo_organizativo_partido/estructura_territorial.md' }
            ]
        },
        {
            title: '05. IA y Automatizaci\u00f3n',
            href: '/docs/05-ia/',
            matchPath: '/docs/05-ia',
            matchDoc: '05_uso_de_ia_y_automatizacion/',
            children: [
                { title: 'Auditor\u00eda Algor\u00edtmica', href: '/docs/viewer.html?doc=05_uso_de_ia_y_automatizacion/auditoria_algoritmica.md' },
                { title: 'Democracia L\u00edquida', href: '/docs/viewer.html?doc=05_uso_de_ia_y_automatizacion/democracia_liquida.md' },
                { title: 'Participaci\u00f3n Ciudadana', href: '/docs/viewer.html?doc=05_uso_de_ia_y_automatizacion/participacion_ciudadana.md' },
                { title: 'Soberan\u00eda IA Europa', href: '/docs/viewer.html?doc=05_uso_de_ia_y_automatizacion/soberania_ia_europa.md' },
                { title: 'Blockchain', href: '/docs/viewer.html?doc=05_uso_de_ia_y_automatizacion/blockchain_casos_uso.md' },
                { title: 'IA en Presupuestos', href: '/docs/viewer.html?doc=05_uso_de_ia_y_automatizacion/ia_supervisada_presupuestos.md' },
                { title: 'Automatizaci\u00f3n Burocr\u00e1tica', href: '/docs/viewer.html?doc=05_uso_de_ia_y_automatizacion/automatizacion_burocratica.md' },
                { title: '\u00c9tica y Supervisi\u00f3n', href: '/docs/viewer.html?doc=05_uso_de_ia_y_automatizacion/etica_y_supervision_humana.md' },
                { title: 'Integridad Digital', href: '/docs/viewer.html?doc=05_uso_de_ia_y_automatizacion/integridad_digital.md' },
                { title: 'Supervisores Humanos', href: '/docs/viewer.html?doc=05_uso_de_ia_y_automatizacion/supervisores_humanos.md' }
            ]
        },
        {
            title: '06. Hoja de Ruta Legal',
            href: '/docs/06-legal/',
            matchPath: '/docs/06-legal',
            matchDoc: '06_hoja_de_ruta_legal/',
            children: [
                { title: 'Requisitos de Inscripci\u00f3n', href: '/docs/viewer.html?doc=06_hoja_de_ruta_legal/requisitos_inscripcion.md' },
                { title: 'Timeline de Constituci\u00f3n', href: '/docs/viewer.html?doc=06_hoja_de_ruta_legal/timeline_constitucion.md' },
                { title: 'Ley Org\u00e1nica 6/2002', href: '/docs/viewer.html?doc=06_hoja_de_ruta_legal/ley_organica_6_2002.md' },
                { title: 'Financiaci\u00f3n de Partidos', href: '/docs/viewer.html?doc=06_hoja_de_ruta_legal/financiacion_partidos.md' }
            ]
        },
        {
            title: '07. Web y Transparencia',
            href: '/docs/07-web/',
            matchPath: '/docs/07-web',
            matchDoc: '07_web_publica_y_transparencia/',
            children: [
                { title: 'Arquitectura Web', href: '/docs/viewer.html?doc=07_web_publica_y_transparencia/arquitectura_web.md' },
                { title: 'Portal de Transparencia', href: '/docs/viewer.html?doc=07_web_publica_y_transparencia/portal_transparencia.md' },
                { title: 'Participaci\u00f3n Online', href: '/docs/viewer.html?doc=07_web_publica_y_transparencia/participacion_online.md' },
                { title: 'Especificaciones T\u00e9cnicas', href: '/docs/viewer.html?doc=07_web_publica_y_transparencia/especificaciones_tecnicas.md' }
            ]
        },
        {
            title: '08. Investigaci\u00f3n Abierta',
            href: '/docs/08-investigacion/',
            matchPath: '/docs/08-investigacion',
            matchDoc: '08_investigacion_abierta/',
            children: [
                { title: 'Preguntas Abiertas', href: '/docs/viewer.html?doc=08_investigacion_abierta/preguntas_abiertas.md' },
                { title: 'Metodolog\u00eda', href: '/docs/viewer.html?doc=08_investigacion_abierta/metodologia_investigacion.md' },
                { title: 'Fuentes de Datos', href: '/docs/viewer.html?doc=08_investigacion_abierta/fuentes_datos.md' },
                { title: 'Colaboradores', href: '/docs/viewer.html?doc=08_investigacion_abierta/colaboradores.md' },
                { title: 'Tem\u00e1ticas Emergentes', href: '/docs/viewer.html?doc=08_investigacion_abierta/tematicas_emergentes_y_modelos_programaticos.md' },
                { title: 'Visi\u00f3n Estrat\u00e9gica', href: '/docs/viewer.html?doc=08_investigacion_abierta/vision_estrategica_largo_plazo.md' },
                { title: 'Demograf\u00eda y Automatizaci\u00f3n', href: '/docs/viewer.html?doc=08_investigacion_abierta/demografia_automatizacion_y_estado_del_bienestar.md' },
                { title: 'Mensaje Juventud', href: '/docs/viewer.html?doc=08_investigacion_abierta/mensaje_inclusivo_juventud.md' },
                { title: 'Metodolog\u00eda IA', href: '/docs/viewer.html?doc=08_investigacion_abierta/metodologia_ia.md' },
                { title: 'Participaci\u00f3n Entretenida', href: '/docs/viewer.html?doc=08_investigacion_abierta/participacion_e_informacion_entretenida.md' },
                { title: '\u00c1lbum Investigaci\u00f3n Abierta', href: '/docs/08-investigacion/#album' }
            ]
        }
    ];

    function getDocParam() {
        var match = window.location.search.match(/[?&]doc=([^&]+)/);
        return match ? decodeURIComponent(match[1]) : '';
    }

    function isActive(item) {
        var path = window.location.pathname;
        var search = window.location.search;
        var full = path + search;

        if (item.href === '/docs/' && (path === '/docs/' || path === '/docs/index.html')) {
            return !search;
        }

        if (item.href.indexOf('viewer.html?doc=') !== -1) {
            return full.indexOf(item.href.split('?')[1]) !== -1;
        }

        if (item.matchPath && path.indexOf(item.matchPath) === 0) {
            return true;
        }

        if (path === item.href || path === item.href.replace(/\/$/, '/index.html')) {
            return true;
        }

        if (item.href.indexOf('#') !== -1 && path + (window.location.hash || '') === item.href) {
            return true;
        }

        return false;
    }

    function isModuleActive(item) {
        var path = window.location.pathname;
        var docParam = getDocParam();

        if (item.matchPath && path.indexOf(item.matchPath) === 0) {
            return true;
        }

        if (item.matchDoc && docParam && docParam.indexOf(item.matchDoc) === 0) {
            return true;
        }

        return false;
    }

    function renderSidebar() {
        var container = document.getElementById('docsSidebar');
        if (!container) return;

        var html = '<p class="docs-sidebar-title">Documentaci\u00f3n</p>';
        html += '<nav class="docs-nav">';

        DOCS_NAV.forEach(function (item) {
            var active = isActive(item);
            var moduleActive = item.children && isModuleActive(item);
            var cls = 'docs-nav-item';

            if (item.children) cls += ' section';
            if (active || moduleActive) cls += ' active';

            var style = '';
            if (item.highlight) {
                style = ' style="color: var(--accent); font-weight: 600;"';
            }

            html += '<a href="' + item.href + '" class="' + cls + '"' + style + '>' + item.title + '</a>';

            if (item.children && moduleActive) {
                item.children.forEach(function (child) {
                    var childActive = isActive(child);
                    var childCls = 'docs-nav-item';
                    if (childActive) childCls += ' active';
                    html += '<a href="' + child.href + '" class="' + childCls + '">' + child.title + '</a>';
                });
            }
        });

        html += '</nav>';
        html += '<p class="docs-sidebar-title">Contribuir</p>';
        html += '<nav class="docs-nav">';
        html += '<a href="https://github.com/democracia-real/web" class="docs-nav-item" target="_blank">GitHub</a>';
        html += '</nav>';

        container.innerHTML = html;
    }

    function detectModuleId() {
        var path = window.location.pathname;
        var pathMatch = path.match(/\/docs\/(0[1-8])-[^/]+\/?/);
        if (pathMatch) return pathMatch[1];

        if (path.indexOf('/docs/viewer.html') === 0) {
            var doc = getDocParam();
            var docMatch = doc.match(/^(0[1-8])_/);
            if (docMatch) return docMatch[1];
        }

        return null;
    }

    function initDocsMiniPlayer() {
        var moduleId = detectModuleId();
        if (!moduleId) return;
        if (document.getElementById('docsMiniPlayer')) return;

        var ALBUMS = {
            '01': { title: '01. Diagnóstico', slug: '01-diagnostico', json: '/audio/01-diagnostico/lyrics.json' },
            '02': { title: '02. Problemas Estructurales', slug: '02-problemas_estructurales', json: '/audio/02-problemas_estructurales/lyrics.json' },
            '03': { title: '03. Propuestas Institucionales', slug: '03-propuestas_institucionales', json: '/audio/03-propuestas_institucionales/lyrics.json' },
            '04': { title: '04. Organización', slug: '04-modelo_organizativo_partido', json: '/audio/04-modelo_organizativo_partido/lyrics.json' },
            '05': { title: '05. IA y Automatización', slug: '05-uso_de_ia_y_automatizacion', json: '/audio/05-uso_de_ia_y_automatizacion/lyrics.json' },
            '06': { title: '06. Hoja de Ruta Legal', slug: '06-hoja_de_ruta_legal', json: '/audio/06-hoja_de_ruta_legal/lyrics.json' },
            '07': { title: '07. Web y Transparencia', slug: '07-web_publica_y_transparencia', json: '/audio/07-web_publica_y_transparencia/lyrics.json' },
            '08': { title: '08. Investigación Abierta', slug: '08-investigacion_abierta', json: '/audio/08-investigacion_abierta/lyrics.json' }
        };

        var album = ALBUMS[moduleId];
        if (!album) return;

        var mini = document.createElement('div');
        mini.id = 'docsMiniPlayer';
        mini.className = 'docs-mini-player';
        mini.innerHTML =
            '<img class="docs-mini-player-cover" src="/imagenes/portadas/albums/' + album.slug + '.png" alt="Portada ' + album.title + '">' +
            '<div class="docs-mini-player-main">' +
                '<p class="docs-mini-player-album">' + album.title + '</p>' +
                '<p class="docs-mini-player-track" id="docsMiniTrack">Cargando pistas…</p>' +
                '<div class="docs-mini-player-controls">' +
                    '<button type="button" class="docs-mini-btn" id="docsMiniPrev" aria-label="Anterior">⏮</button>' +
                    '<button type="button" class="docs-mini-btn docs-mini-btn-primary" id="docsMiniPlay" aria-label="Reproducir o pausar">▶</button>' +
                    '<button type="button" class="docs-mini-btn" id="docsMiniNext" aria-label="Siguiente">⏭</button>' +
                    '<input type="range" id="docsMiniProgress" min="0" max="100" value="0" aria-label="Progreso">' +
                    '<span class="docs-mini-time" id="docsMiniTime">0:00 / 0:00</span>' +
                '</div>' +
            '</div>' +
            '<audio id="docsMiniAudio" preload="metadata"></audio>';

        var navEl = document.querySelector('.nav');
        if (navEl && navEl.parentNode) {
            navEl.parentNode.insertBefore(mini, navEl.nextSibling);
        } else {
            document.body.insertBefore(mini, document.body.firstChild);
        }
        document.body.classList.add('has-docs-mini-player');

        var trackEl = document.getElementById('docsMiniTrack');
        var prevBtn = document.getElementById('docsMiniPrev');
        var playBtn = document.getElementById('docsMiniPlay');
        var nextBtn = document.getElementById('docsMiniNext');
        var progressEl = document.getElementById('docsMiniProgress');
        var timeEl = document.getElementById('docsMiniTime');
        var audio = document.getElementById('docsMiniAudio');

        var tracks = [];
        var currentIdx = 0;
        var audioPath = '';

        function formatTime(seconds) {
            if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
            var mins = Math.floor(seconds / 60);
            var secs = Math.floor(seconds % 60);
            return mins + ':' + String(secs).padStart(2, '0');
        }

        function updateTimeUi() {
            var current = Number.isFinite(audio.currentTime) ? audio.currentTime : 0;
            var duration = Number.isFinite(audio.duration) ? audio.duration : 0;
            var pct = duration > 0 ? (current / duration) * 100 : 0;
            progressEl.value = String(Math.max(0, Math.min(100, pct)));
            timeEl.textContent = formatTime(current) + ' / ' + formatTime(duration);
        }

        function setPlayLabel() {
            playBtn.textContent = audio.paused ? '▶' : '⏸';
        }

        function setTrack(index, autoPlay) {
            if (!tracks.length || index < 0 || index >= tracks.length) return;
            currentIdx = index;
            var t = tracks[index];
            if (trackEl) trackEl.textContent = (index + 1) + '. ' + (t.title || 'Pista');
            if (t.audioFile) {
                audio.src = audioPath + encodeURIComponent(t.audioFile);
                if (autoPlay === true) audio.play().catch(function() {});
            }
            updateTimeUi();
            setPlayLabel();
        }

        fetch(album.json)
            .then(function(r) { return r.ok ? r.json() : null; })
            .then(function(data) {
                if (!data || !Array.isArray(data.tracks) || !data.tracks.length) {
                    trackEl.textContent = 'No hay pistas disponibles';
                    return;
                }
                tracks = data.tracks;
                audioPath = data.audioPath || '';
                setTrack(0, false);
            })
            .catch(function() {
                trackEl.textContent = 'Error al cargar álbum';
            });

        prevBtn.addEventListener('click', function() {
            if (!tracks.length) return;
            if (currentIdx > 0) setTrack(currentIdx - 1, true);
            else { audio.currentTime = 0; audio.play().catch(function() {}); }
        });

        playBtn.addEventListener('click', function() {
            if (!audio.src && tracks.length) setTrack(currentIdx, false);
            if (!audio.src) return;
            if (audio.paused) audio.play().catch(function() {});
            else audio.pause();
        });

        nextBtn.addEventListener('click', function() {
            if (!tracks.length) return;
            if (currentIdx + 1 < tracks.length) setTrack(currentIdx + 1, true);
        });

        progressEl.addEventListener('input', function() {
            var duration = Number.isFinite(audio.duration) ? audio.duration : 0;
            if (!duration) return;
            audio.currentTime = (parseFloat(progressEl.value) / 100) * duration;
        });

        audio.addEventListener('timeupdate', updateTimeUi);
        audio.addEventListener('loadedmetadata', updateTimeUi);
        audio.addEventListener('durationchange', updateTimeUi);
        audio.addEventListener('play', setPlayLabel);
        audio.addEventListener('pause', setPlayLabel);
        audio.addEventListener('ended', function() {
            if (currentIdx + 1 < tracks.length) setTrack(currentIdx + 1, true);
            else setPlayLabel();
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            renderSidebar();
            initDocsMiniPlayer();
        });
    } else {
        renderSidebar();
        initDocsMiniPlayer();
    }
})();
