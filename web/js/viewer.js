/**
 * Viewer - Renderiza documentos .md del repositorio en la web
 * Carga desde GitHub raw (producción) o ruta relativa (local)
 */
(function () {
    'use strict';

    var GITHUB_RAW = 'https://raw.githubusercontent.com/democracia-real/proyecto/main/';

    var MODULES = {
        '01_diagnostico_del_sistema': { num: '01', short: 'Diagnóstico', path: '01-diagnostico', title: 'Diagnóstico del Sistema' },
        '02_problemas_estructurales': { num: '02', short: 'Problemas', path: '02-problemas', title: 'Problemas Estructurales' },
        '03_propuestas_institucionales': { num: '03', short: 'Propuestas', path: '03-propuestas', title: 'Propuestas Institucionales' },
        '04_modelo_organizativo_partido': { num: '04', short: 'Organización', path: '04-organizacion', title: 'Modelo Organizativo' },
        '05_uso_de_ia_y_automatizacion': { num: '05', short: 'IA', path: '05-ia', title: 'IA y Automatización' },
        '06_hoja_de_ruta_legal': { num: '06', short: 'Legal', path: '06-legal', title: 'Hoja de Ruta Legal' },
        '07_web_publica_y_transparencia': { num: '07', short: 'Web', path: '07-web', title: 'Web y Transparencia' },
        '08_investigacion_abierta': { num: '08', short: 'Investigación', path: '08-investigacion', title: 'Investigación Abierta' }
    };

    var ROOT_DOCS = {
        'CONTRIBUTING.md': {
            label: 'Guía de Contribución',
            section: 'Contribuir',
            description: 'Proyecto abierto y colaborativo',
            githubPath: 'CONTRIBUTING.md'
        },
        'README.md': {
            label: 'README del Proyecto',
            section: 'Documentación general',
            description: 'Visión general y estructura del proyecto',
            githubPath: 'README.md'
        }
    };

    var DOC_LABELS = {
        'partitocracia.md': 'Partitocracia',
        'separacion_poderes.md': 'Separación de Poderes',
        'sistema_electoral.md': 'Sistema Electoral',
        'comparativa_internacional.md': 'Comparativa Internacional',
        'indicadores_potencia_nacional.md': 'Indicadores de Potencia Nacional',
        'corrupcion_e_impunidad.md': 'Corrupción e Impunidad',
        'burocracia_y_eficiencia.md': 'Burocracia y Eficiencia',
        'puertas_giratorias.md': 'Puertas Giratorias',
        'funcionariado.md': 'Funcionariado',
        'vivienda.md': 'Vivienda',
        'vivienda_y_suelo.md': 'Vivienda y Suelo',
        'autonomos_y_emprendimiento.md': 'Autónomos y Emprendimiento',
        'justicia_fiscal_autonomos.md': 'Justicia Fiscal Autónomos',
        'fondos_europeos.md': 'Fondos Europeos',
        'auditoria_fondos_europeos.md': 'Auditoría Fondos Europeos',
        'sistema_pensiones.md': 'Sistema de Pensiones',
        'sanidad.md': 'Sanidad',
        'educacion.md': 'Educación',
        'energia.md': 'Energía',
        'seguridad_ciudadana_e_impunidad.md': 'Seguridad Ciudadana e Impunidad',
        'compra_publica_producto_nacional.md': 'Compra Pública Producto Nacional',
        'zonas_bajas_emisiones.md': 'Zonas de Bajas Emisiones',
        'prioridad_gasto_publico.md': 'Prioridad del Gasto Público',
        'mapa_puertas_giratorias.md': 'Mapa de Puertas Giratorias',
        'coste_politico_vitalicio.md': 'Coste Político Vitalicio',
        'inmigracion_e_integracion.md': 'Inmigración e Integración',
        'reforma_electoral.md': 'Reforma Electoral',
        'reforma_judicial.md': 'Reforma Judicial',
        'reforma_administrativa.md': 'Reforma Administrativa',
        'reforma_fiscal.md': 'Reforma Fiscal',
        'disciplina_fiscal_y_deuda.md': 'Disciplina Fiscal y Deuda',
        'planificacion_largo_plazo.md': 'Planificación a Largo Plazo',
        'reforma_pensiones.md': 'Reforma de Pensiones',
        'ley_anti_decretos.md': 'Ley Anti Decretos-Ley',
        'reforma_funcionariado_eficiente.md': 'Reforma del Funcionariado',
        'independencia_digital_justicia.md': 'Independencia Digital de la Justicia',
        'plantilla_redaccion_propuestas.md': 'Plantilla de Redacción',
        'gobernanza_consenso_afiliacion.md': 'Gobernanza, Consenso y Afiliación',
        'codigo_etico.md': 'Código Ético',
        'estatutos_base.md': 'Estatutos Base',
        'democracia_interna.md': 'Democracia Interna',
        'estructura_territorial.md': 'Estructura Territorial',
        'auditoria_algoritmica.md': 'Auditoría Algorítmica',
        'soberania_ia_europa.md': 'Soberanía IA Europa',
        'blockchain_casos_uso.md': 'Blockchain: Casos de Uso',
        'ia_supervisada_presupuestos.md': 'IA Supervisada en Presupuestos',
        'automatizacion_burocratica.md': 'Automatización Burocrática',
        'etica_y_supervision_humana.md': 'Ética y Supervisión Humana',
        'democracia_liquida.md': 'Democracia Líquida',
        'participacion_ciudadana.md': 'Participación Ciudadana',
        'integridad_digital.md': 'Integridad Digital',
        'supervisores_humanos.md': 'Supervisores Humanos',
        'timeline_constitucion.md': 'Timeline de Constitución',
        'requisitos_inscripcion.md': 'Requisitos de Inscripción',
        'ley_organica_6_2002.md': 'Ley Orgánica 6/2002',
        'financiacion_partidos.md': 'Financiación de Partidos',
        'arquitectura_web.md': 'Arquitectura Web',
        'portal_transparencia.md': 'Portal de Transparencia',
        'participacion_online.md': 'Participación Online',
        'especificaciones_tecnicas.md': 'Especificaciones Técnicas',
        'metodologia_investigacion.md': 'Metodología de Investigación',
        'fuentes_datos.md': 'Fuentes de Datos',
        'preguntas_abiertas.md': 'Preguntas Abiertas',
        'colaboradores.md': 'Colaboradores',
        'tematicas_emergentes_y_modelos_programaticos.md': 'Temáticas Emergentes',
        'vision_estrategica_largo_plazo.md': 'Visión Estratégica a Largo Plazo',
        'mensaje_inclusivo_juventud.md': 'Mensaje Inclusivo Juventud',
        'metodologia_ia.md': 'Metodología IA',
        'participacion_e_informacion_entretenida.md': 'Participación Entretenida'
    };

    function getParams() {
        var params = new URLSearchParams(window.location.search);
        return {
            doc: params.get('doc') || ''
        };
    }

    function parseDocPath(docPath) {
        if (ROOT_DOCS[docPath]) {
            var rootDoc = ROOT_DOCS[docPath];
            return {
                type: 'root',
                filename: docPath,
                label: rootDoc.label,
                rootDoc: rootDoc
            };
        }

        var parts = docPath.split('/');
        if (parts.length < 2) return null;
        var moduleFolder = parts[0];
        var filename = parts[1];
        var mod = MODULES[moduleFolder];
        if (!mod) return null;
        var label = DOC_LABELS[filename] || filename.replace(/_/g, ' ').replace('.md', '');
        return {
            moduleFolder: moduleFolder,
            filename: filename,
            module: mod,
            label: label
        };
    }

    function buildUrl(docPath) {
        return GITHUB_RAW + docPath;
    }

    function extractTitle(md) {
        var match = md.match(/^#\s+(.+)/m);
        return match ? match[1] : '';
    }

    function removeFirstHeading(md) {
        return md.replace(/^#\s+.+\n*/, '');
    }

    function fixRelativeLinks(html, moduleFolder) {
        return html.replace(/href="(?!http|#|\/)(.*?)\.md"/g, function (full, path) {
            if (path.startsWith('../')) {
                var resolved = path.replace('../', '');
                return 'href="/docs/viewer.html?doc=' + resolved + '.md"';
            }
            if (!moduleFolder) {
                return 'href="/docs/viewer.html?doc=' + path + '.md"';
            }
            return 'href="/docs/viewer.html?doc=' + moduleFolder + '/' + path + '.md"';
        });
    }

    function render(md, info) {
        var title = extractTitle(md);
        var body = removeFirstHeading(md);

        document.getElementById('docTitle').textContent = title || info.label;
        document.title = (title || info.label) + ' - Democracia Real';

        var desc = document.getElementById('docDescription');
        if (info.type === 'root') {
            desc.textContent = info.rootDoc.description;
            document.getElementById('breadcrumbModule').innerHTML = '<a href="/docs/">' + info.rootDoc.section + '</a>';
            document.getElementById('breadcrumbDoc').textContent = info.label;
        } else {
            desc.textContent = info.module.num + '. ' + info.module.title;
            document.getElementById('breadcrumbModule').innerHTML =
                '<a href="/docs/' + info.module.path + '/">' + info.module.num + '. ' + info.module.short + '</a>';
            document.getElementById('breadcrumbDoc').textContent = info.label;
        }

        if (typeof marked !== 'undefined') {
            marked.setOptions({
                breaks: true,
                gfm: true
            });
            var html = marked.parse(body);
            html = fixRelativeLinks(html, info.moduleFolder);
            document.getElementById('docBody').innerHTML = html;
        } else {
            document.getElementById('docBody').innerHTML = '<pre>' + body + '</pre>';
        }

        var ghBase = 'https://github.com/democracia-real/proyecto/blob/main/';
        var githubPath = info.type === 'root'
            ? info.rootDoc.githubPath
            : info.moduleFolder + '/' + info.filename;
        document.getElementById('githubLink').href = ghBase + githubPath;
        document.getElementById('editLink').href = ghBase + githubPath + '?plain=1';

        var footer = document.getElementById('navFooter');
        if (info.type === 'root') {
            footer.innerHTML =
                '<a href="/docs/" class="docs-nav-link">' +
                '<span class="docs-nav-link-label">Volver a</span>' +
                '<span class="docs-nav-link-title">← Documentación</span></a>';
        } else {
            footer.innerHTML =
                '<a href="/docs/' + info.module.path + '/" class="docs-nav-link">' +
                '<span class="docs-nav-link-label">Volver a</span>' +
                '<span class="docs-nav-link-title">← ' + info.module.num + '. ' + info.module.short + '</span></a>';
        }

    }

    function showError(msg) {
        document.getElementById('docTitle').textContent = 'Error';
        document.getElementById('docBody').innerHTML =
            '<p class="docs-stub-notice">' + msg + '</p>' +
            '<p><a href="/docs/">← Volver a Documentación</a></p>';
    }

    function init() {
        var p = getParams();
        if (!p.doc) {
            window.location.href = '/docs/';
            return;
        }

        var info = parseDocPath(p.doc);
        if (!info) {
            showError('Documento no reconocido: <code>' + p.doc + '</code>');
            return;
        }

        var url = buildUrl(p.doc);
        fetch(url)
            .then(function (res) {
                if (!res.ok) throw new Error('HTTP ' + res.status);
                return res.text();
            })
            .then(function (md) {
                render(md, info);
            })
            .catch(function (err) {
                showError('No se pudo cargar el documento: <code>' + p.doc + '</code><br>Error: ' + err.message);
            });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
