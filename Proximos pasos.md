# Próximos Pasos del Proyecto

*Última actualización: 1 de febrero 2026*

## Resumen de Estado Actual

### Completado ✅

| Área | Estado | Notas |
|------|--------|-------|
| **Documentación base** | ✅ | 8 módulos con 80+ documentos |
| **Web estática (SWA)** | ✅ | Desplegada en democraciareal.es |
| **Dominio personalizado** | ✅ | democraciareal.es (DNS en Cloudflare) |
| **Chatbot IA** | ✅ | Azure Function + Foundry Agent funcionando |
| **Indexación RAG** | ✅ | Documentos indexados en Azure AI Search |
| **i18n básico** | ✅ | ES, CA, EU, GL, EN (landing page) |
| **SEO básico** | ✅ | robots.txt, sitemap.xml, meta tags |
| **Álbum de Diagnóstico** | ✅ | 5 canciones con letras, reproductor web, compartir |
| **Filosofía "Diagnóstico + Principios + Mecanismo"** | ✅ | Todos los documentos revisados y alineados |
| **Documentos pendientes creados** | ✅ | 20+ documentos esqueleto con contenido base |
| **Datos reales módulo 02** | ✅ | Educación, sanidad, energía, seguridad, vivienda, inmigración, fondos europeos con datos verificados |
| **Gobernanza y consenso** | ✅ | Afiliados, donaciones, forks, democracia líquida |
| **Visión estratégica (Dalio)** | ✅ | Dashboard indicadores, disciplina fiscal, líneas de investigación |

### Sesión anterior ✅

| Acción | Estado |
|--------|--------|
| **Contrapesos democráticos** — Sección en `gobernanza_consenso_afiliacion.md` con 5 mecanismos (delegación experta, visión/ejecución, academia ciudadanía, simulador IA, presupuesto intergeneracional) | ✅ |
| **Informe de impacto IA** — Añadido en `planificacion_largo_plazo.md` como requisito previo a votaciones | ✅ |
| **Academia de Ciudadanía** — Añadida en `participacion_ciudadana.md` como contexto técnico antes de votar | ✅ |
| **Visor Markdown universal** — `viewer.html` + `viewer.js` que renderiza cualquier `.md` del repo sin duplicar contenido | ✅ |
| **Actualización web docs** — 8 módulos con todos los documentos listados en sidebar, links al viewer | ✅ |
| **CSP actualizado** — Permite `marked.js` (CDN) y `raw.githubusercontent.com` para cargar `.md` | ✅ |
| **Limpieza** — Eliminadas 69 subpáginas HTML stub (ya no necesarias gracias al viewer) | ✅ |

### Sesión actual ✅

| Acción | Estado |
|--------|--------|
| **Auditoría Fondos Europeos** — Nuevo documento `auditoria_fondos_europeos.md` con diagnóstico completo, indicadores de opacidad y mecanismo propuesto | ✅ |
| **Inmigración e Integración** — Nuevo documento `inmigracion_e_integracion.md` con datos demográficos, ausencia de modelo, comparativa internacional (Canadá, Alemania, Dinamarca) y mecanismo (Consejo independiente) | ✅ |
| **Rendición de cuentas en catástrofes** — Nueva sección en `corrupcion_e_impunidad.md` con patrón de impunidad (DANA, La Palma, COVID, Santiago), mecanismos de mando único automático y comisión independiente | ✅ |
| **Team Mirai y partidos IA** — Añadidos en `tematicas_emergentes_y_modelos_programaticos.md`: Team Mirai (Japón, 11 escaños), Shinsei no Michi, relevancia para nuestro proyecto | ✅ |
| **Web actualizada** — Nuevo documento de inmigración añadido a navegación (`docs-nav.js`) y labels (`viewer.js`) | ✅ |
| **Temas parciales cumplimentados (módulo 02)** — Nuevos documentos: `despoblacion_rural_y_equilibrio_territorial.md`, `salud_mental_y_soledad_no_deseada.md`, `innovacion_y_ciencia_fuga_de_cerebros.md`, `turismo_vs_industria.md`, `justicia_lenta_y_analogica.md` + navegación y README actualizados | ✅ |
| **Agenda 08 actualizada** — Se añaden líneas de investigación en `preguntas_abiertas.md` y `tematicas_emergentes_y_modelos_programaticos.md` para soberanía estratégica, natalidad/conciliación, justicia intergeneracional y simplificación normativa | ✅ |

### Infraestructura Web: Hecha

- **DNS/SSL**: No volver a tocar. Cloudflare + HTTPS forzado y redirecciones limpias operativos.
- **robots.txt y sitemap.xml**: Configurados; Google rastreando.

---

## Siguiente Paso Inmediato

### 1. Contrapesos democráticos: reforzar el modelo de gobernanza

La pregunta "¿no se corre el riesgo de que el pueblo no sepa gestionar a largo plazo?" ya tiene respuesta parcial en el repo (paneles de expertos, evaluación de impacto, planificación a largo plazo), pero conviene consolidarla en un solo lugar. Tareas:

| Tarea | Dónde | Qué hacer |
|-------|-------|-----------|
| **Delegación por expertiz** | `gobernanza_consenso_afiliacion.md` | Ya existe la sección de "delegación revocable". Reforzar con el concepto de democracia líquida donde el ciudadano puede delegar en un experto y recuperar su voto en cualquier momento. |
| **Impacto a largo plazo** | `planificacion_largo_plazo.md` | Ya existe. Añadir que la IA debe publicar informe de impacto a 5/10/20 años **antes** de cualquier votación popular sobre temas estructurales. |
| **Separación visión/ejecución** | `gobernanza_consenso_afiliacion.md` | Clarificar: el pueblo elige la **dirección** ("queremos soberanía energética"), los expertos diseñan la **ejecución** (qué mix, qué almacenamiento). |
| **Presupuesto intergeneracional** | `disciplina_fiscal_y_deuda.md` | Ya creado con la "factura intergeneracional". Reforzar que es un contrapeso contra el populismo de deuda. |

**Qué modelo usar**: Cursor (este asistente) — son ediciones en documentos existentes.

### 2. Investigación profunda: rellenar [PENDIENTE] restantes

Los módulos 03-08 todavía tienen campos `[PENDIENTE]` en muchos documentos. Priorizar:

| Prioridad | Documentos | Tipo de datos |
|-----------|-----------|---------------|
| **Alta** | `reforma_administrativa.md`, `reforma_fiscal.md` | Datos de eficiencia, comparativa UE |
| **Alta** | `estatutos_base.md`, `democracia_interna.md` | Contenido legal, modelos de partidos |
| **Media** | `soberania_ia_europa.md` | Datos de dependencia tecnológica |
| **Media** | `portal_transparencia.md`, `participacion_online.md` | Especificaciones técnicas |
| **Baja** | `colaboradores.md`, `fuentes_datos.md` | Catálogos de referencia |

**Qué modelo usar**: **Gemini con Deep Research** o **ChatGPT 5.2 con Investigación avanzada** para datos y fuentes reales. Cursor para integrarlos en los documentos.

### 3. Comprobar nombre en Registro de Partidos (legal)

**Antes de constituir**: Verificar en el **Registro de Partidos Políticos del Ministerio del Interior** si el nombre "Democracia Real" (o la variante que vayas a usar) está ya registrado.

**Qué modelo usar**: **Gemini con Deep Research** para buscar en fuentes oficiales.

---

## Líneas de Investigación Estratégica (nuevas, de Dalio)

Estas líneas están documentadas en `08_investigacion_abierta/vision_estrategica_largo_plazo.md`:

| Línea | Urgencia | Documentación actual |
|-------|----------|---------------------|
| Soberanía tecnológica (IA, semiconductores) | Alta | Parcial (`soberania_ia_europa.md`) |
| Educación como motor de ascenso | Alta | Parcial (`educacion.md`) |
| Riesgo demográfico | Alta | Buena (`sistema_pensiones.md`, `inmigracion_e_integracion.md`) |
| Cohesión social / prevención populismo | Alta | Parcial (varios docs, `inmigracion_e_integracion.md`) |
| Transición energética como ventaja competitiva | Media-Alta | Buena (`energia.md`) |
| Empleo post-IA | Media | Inicial (`tematicas_emergentes.md`) |
| Proyección internacional (Hispanidad) | Media | Inexistente — por crear |
| Soberanía estratégica y resiliencia | Alta | En evaluación (`preguntas_abiertas.md` 13.5) |
| Natalidad y conciliación | Alta | En evaluación (`preguntas_abiertas.md` 13.6) |
| Justicia intergeneracional y deuda | Alta | En evaluación (`preguntas_abiertas.md` 13.7) |
| Simplificación normativa y unidad de mercado | Alta | En evaluación (`preguntas_abiertas.md` 13.8) |

---

## Fases del Proyecto

### Fase 1: Documentación Base ✅
- [x] Definir visión y principios
- [x] Estructurar repositorio (8 módulos, 80+ documentos)
- [x] Diagnóstico del sistema político (módulo 01)
- [x] Problemas estructurales con datos (módulo 02)
- [x] Reformas institucionales base (módulo 03)
- [x] Modelo organizativo (módulo 04)
- [x] IA y automatización (módulo 05)
- [x] Web con álbum de diagnóstico
- [x] Dashboard de indicadores de potencia nacional (Dalio)
- [x] Disciplina fiscal y deuda pública
- [x] Visión estratégica a largo plazo

### Fase 2: Profundización (ACTUAL)
- [x] Datos reales en módulo 01 (diagnóstico)
- [x] Datos reales en módulo 02 (problemas estructurales — parcial)
- [ ] Completar [PENDIENTE] en módulos 03-08
- [x] Reforzar contrapesos democráticos en gobernanza
- [x] Visor Markdown universal en la web (viewer.html, sin duplicar contenido)
- [x] Actualizar sidebars web de los 8 módulos con todos los documentos
- [x] Líneas estratégicas Dalio — estructura y preguntas definidas en `vision_estrategica_largo_plazo.md`
- [ ] Investigar con datos reales las 7 líneas estratégicas (requiere Deep Research)
- [ ] pensar que mas temas puedes ser relevantes importantes.
- [ ] crear imágenes de cada sección (mirar el apuntex.txt)
- [ ] crear video para cada canción
- [ ] crear podcast de cada sección?
- [ ] quizás debería de hacer un lanzamiento con una canción con todo? que estilo seria el mas rompedor?

### Fase 3: Constitución Legal
- [ ] Verificar nombre en Registro de Partidos
- [ ] Reunir promotores (mínimo 3)
- [ ] Redactar estatutos definitivos (LO 6/2002)
- [ ] Acta notarial
- [ ] Inscripción

### Fase 4: Comunicación
- [ ] Crear perfiles en redes sociales (X, Telegram, YouTube)
- [ ] Primeros hilos explicativos
- [ ] Vídeos cortos divulgativos
- [ ] Canciones del álbum como contenido viral
- [ ] Crear contenido multimedia como imagenes representativas de cada tema.

### Fase 5: Lanzamiento Público
- [ ] Afiliación abierta
- [ ] Expansión territorial
- [ ] Procesos electorales

---

## Infraestructura Técnica

| Servicio | Recurso | Estado |
|----------|---------|--------|
| **Azure SWA** | witty-pebble... | ✅ Activo |
| **Azure Function** | democracia-chat-function | ✅ Activo |
| **Azure AI Foundry** | agentedemocracia | ✅ Activo |
| **Azure AI Search** | democracia-docs | ✅ Activo |
| **Cloudflare** | DNS democraciareal.es | ✅ Activo |
| **GitHub** | democracia-real/web | ✅ Activo |

---

## Comandos Útiles

### Re-indexar documentos (tras añadir/modificar .md)
```bash
cd scripts
/c/Users/javie/AppData/Local/Programs/Python/Python312/python.exe index_to_azure_search.py

python index_to_azure_search.py
```

### Desplegar Azure Function (tras modificar function-app/)
```bash
cd function-app
func azure functionapp publish democracia-chat-function
```


### Lanzar en local 
```bash
npx serve web -p 3000
```

---

## Qué Modelo Usar para Cada Tarea

| Tarea | Modelo recomendado | Por qué |
|-------|--------------------|--------|
| **Investigación profunda** (datos, fuentes, comparativas) | **Gemini con Deep Research** o **ChatGPT 5.2 con Investigación avanzada** | Buscan en la web, contrastan fuentes, datos actualizados |
| **Comprobar nombre en Registro de Partidos** | **Gemini Deep Research** | Búsqueda en fuentes oficiales |
| **Tareas técnicas** (código, configuración, edición de docs) | **Cursor** | Cambios en repo sin necesidad de búsqueda externa |
| **Estrategia y redacción** (textos, estructura) | **ChatGPT 5.2 thinking** o **Cursor** | Razonamiento paso a paso |

---

## Acciones Sugeridas para Próxima Sesión

1. **Re-indexar** — Ejecutar script para que el chatbot tenga los nuevos documentos de módulo 02 y agenda 08.
2. **Promoción 08 -> 02 -> 03** — Investigar con Deep Research los temas 13.5–13.8 y decidir cuáles suben a diagnóstico y cuáles a propuestas.
3. **Derechos digitales** — Crear documento-eje que unifique privacidad, neutralidad de red, acceso universal y alfabetización digital (vacío identificado en temáticas emergentes).
4. **Legal** — Comprobar "Democracia Real" en Registro de Partidos.
