# Portal de Transparencia

## Resumen Ejecutivo

El portal de transparencia del proyecto Democracia Real materializa el principio de **transparencia radical**: todo es público por defecto, y las excepciones deben estar justificadas legalmente. Este documento define qué publicar, en qué formatos y cómo superar los estándares actuales de transparencia de los partidos políticos en España.

---

## Índice

- [Principios Rectores](#principios-rectores)
- [Qué Publicar](#qué-publicar)
- [Cómo Publicar](#cómo-publicar)
- [Comparativa con Estándares Actuales](#comparativa-con-estándares-actuales)
- [Excepciones y Justificación](#excepciones-y-justificación)
- [Referencias](#referencias)

---

## Principios Rectores

### Todo Público por Defecto

| Principio | Significado |
|-----------|-------------|
| **Presunción de apertura** | Si no hay razón legal para ocultar, se publica |
| **Proactividad** | No esperar a que se solicite; publicar antes de que pregunten |
| **Excepciones justificadas** | Cada dato no publicado debe tener base legal y documentada |
| **Revisión periódica** | Revisar si excepciones siguen siendo necesarias |

### Inspiración Normativa

- **Ley 19/2013** de transparencia, acceso a la información pública y buen gobierno (mínimo legal)
- **Ley 2/2023** de protección de las personas que informen sobre infracciones normativas
- **Directiva UE 2019/1937** (whistleblowing)
- Estándares de Open Government Partnership

---

## Qué Publicar

### 1. Finanzas

| Dato | Frecuencia | Formato |
|------|------------|---------|
| Presupuesto anual | Anual (y revisiones) | JSON, CSV, PDF |
| Cuentas anuales auditadas | Anual | PDF, datos estructurados |
| Ingresos por fuente | Trimestral (con acumulado mensual interno) | JSON, CSV |
| Gastos por categoría | Trimestral (con desglose mensual disponible bajo demanda) | JSON, CSV |
| Subvenciones recibidas | Inmediato al recibir | JSON, CSV |
| Donaciones (con límite de anonimato legal) | Trimestral, según art. 14 de la LO 8/2007 (LOFPP); donaciones >25.000 € publicadas individualmente en 15 días desde su recepción | JSON, CSV |
| Préstamos y garantías | Inmediato | JSON, CSV |

### 2. Decisiones y Votaciones

| Dato | Descripción | Formato |
|------|-------------|---------|
| Actas de reuniones | Órganos de dirección, asambleas | PDF, Markdown |
| Votaciones nominales | Cómo votó cada miembro en cada decisión | JSON, CSV |
| Abstenciones y ausencias | Registro completo | JSON, CSV |
| Propuestas rechazadas | Con motivación del rechazo | Markdown, JSON |
| Acuerdos adoptados | Resoluciones, mandatos | Markdown, JSON |

### 3. Contratos y Proveedores

| Dato | Descripción | Formato |
|------|-------------|---------|
| Contratos firmados | Objeto, importe, plazo, proveedor | JSON, CSV |
| Procedimientos de contratación | Criterios, adjudicación | PDF, Markdown |
| Proveedores recurrentes | Historial de relaciones | JSON, CSV |
| Umbral de publicación | Los partidos no están sujetos a la Ley 9/2017 de Contratos del Sector Público, pero nuestro compromiso es publicar **todo contrato ≥500 €** (importe acumulado anual por proveedor). Contratos <500 € se publican de forma agregada trimestralmente | JSON, CSV |

### 4. Estructura y Cargos

| Dato | Descripción | Formato |
|------|-------------|---------|
| Órganos y composición | Quién forma parte de cada órgano | JSON, Markdown |
| Declaraciones de bienes | De todos los cargos con responsabilidad | PDF (anonimización si procede) |
| Retribuciones | Sueldos, dietas, gastos de representación | JSON, CSV |
| Incompatibilidades | Declaraciones de actividades | Markdown |
| Agenda pública de cargos | Reuniones, eventos oficiales | JSON, iCal |

### 5. Documentación Interna

| Dato | Descripción | Formato |
|------|-------------|---------|
| Estatutos | Versión vigente y histórico | Markdown, PDF |
| Reglamentos | Normativa interna | Markdown, PDF |
| Código ético | Compromisos y procedimientos | Markdown |
| Informes de auditoría | Internos y externos | PDF |

---

## Cómo Publicar

### Formatos de Datos Abiertos

| Formato | Uso | Ejemplo |
|---------|-----|---------|
| **JSON** | API, consumo programático | `finanzas/2026/ingresos.json` |
| **CSV** | Análisis en hojas de cálculo, periodismo de datos | `finanzas/2026/gastos.csv` |
| **PDF** | Lectura humana, documentos legales | Actas, informes auditados |
| **Markdown** | Documentación versionada, editable | Estatutos, actas en texto |

### API Pública

| Endpoint | Descripción |
|----------|-------------|
| `/api/finanzas` | Ingresos, gastos, presupuesto |
| `/api/votaciones` | Resultados de votaciones con detalle nominal |
| `/api/contratos` | Contratos y proveedores |
| `/api/organos` | Composición de órganos |
| `/api/docs` | Especificación OpenAPI 3.1 (Swagger) autogenerada desde esquemas JSON en el repositorio. Documentación interactiva servida como HTML estático generado con [Redoc](https://github.com/Redocly/redoc) en cada build |

### Actualización en Tiempo Real

| Dato | Latencia máxima |
|------|-----------------|
| Votaciones | Publicación en las 24 horas |
| Contratos firmados | 7 días desde firma |
| Actas | 15 días desde la reunión |
| Finanzas agregadas | Publicación trimestral con un máximo de 30 días de retraso tras cierre de trimestre. En fases avanzadas, actualización mensual automatizada |

### Versionado

- Cada publicación con fecha y hash (commit) de origen
- Historial accesible; no se borra, se sustituye con versión nueva
- Trazabilidad: quién publicó, cuándo, desde qué fuente

---

## Comparativa con Estándares Actuales

### Lo que Exige la Ley 19/2013 a los Partidos

| Obligación | Alcance |
|------------|---------|
| Información institucional | Estructura, funciones, normativa |
| Información económica | Presupuestos, cuentas anuales, subvenciones |
| Información jurídica | Estatutos, convenios, contratos |
| Información de actividades | Actividades, eventos |

### Lo que No Exige (y Nosotros Sí)

| Dato | Situación habitual | Nuestro compromiso |
|------|-------------------|-------------------|
| Votaciones nominales | No publicadas por partidos | Publicar todas |
| Actas completas | Resúmenes o no publicadas | Texto completo |
| Gastos desglosados | Agregados anuales | Desglose por categoría y periodo |
| Contratos antes de umbral | Solo los obligatorios | Todos los que tengan impacto significativo |
| Datos en formato reutilizable | PDF escaneado | JSON, CSV, API |
| Tiempo real | Publicación anual o con retraso | Actualización continua |

### Referencia: Portales de Transparencia Existentes

| Entidad | Fortalezas | Debilidades |
|---------|------------|-------------|
| Portal Transparencia Gobierno | Datos de contratación, subvenciones | Formato poco amigable; sin API unificada |
| Congreso (votaciones) | Votaciones nominales públicas | Histórico limitado; formato inconsistente |
| Partidos políticos españoles (Informe CTBG 2025) | PSOE: 83,1 % de cumplimiento ICIO; Podemos: 74 %; IU: 50,5 %. PP y Vox retrocedieron respecto a 2024. Ningún partido publica retribuciones de dirigentes ni organigramas completos | Formatos mayoritariamente PDF estáticos; sin APIs de datos abiertos; información fragmentada y difícil de reutilizar |
| Decidim (Barcelona) | Participación, propuestas | Enfoque municipal |
| Consul (Madrid) | Presupuestos participativos; código abierto (AGPLv3); adoptado por ~50 ciudades; Premio ONU 2018; accesibilidad WCAG AA; escalable a grandes poblaciones | Implementación compleja para organizaciones pequeñas; participación ciudadana históricamente baja; desarrollo personalizado costoso; orientado a administraciones públicas más que a partidos |

---

## Excepciones y Justificación

### Datos que Pueden No Publicarse

| Categoría | Razón | Alternativa |
|-----------|-------|-------------|
| Datos personales | RGPD; protección de privacidad | Anonimización o agregación |
| Seguridad | Riesgo para personas (amenazas, acoso) | Publicación diferida o redactada |
| Negociación en curso | Secreto comercial o estratégico legítimo | Publicar una vez cerrada |
| Menores | Protección de menores | Exclusión total |

### Proceso de Excepción

1. **Solicitud**: Cualquier responsable puede solicitar no publicar un dato
2. **Justificación**: Base legal (artículo de ley) o riesgo documentado
3. **Revisión**: Comité de transparencia o equivalente valida
4. **Registro**: Toda excepción queda registrada y es auditable
5. **Revisión periódica**: Revalorar cada 12 meses si la excepción sigue aplicando

### Transparencia sobre la Opacidad

- Publicar un índice de "datos no publicados" con motivo
- No ocultar que algo no se publica; explicar por qué

---

## Referencias

- [Ley 19/2013 de transparencia](https://www.boe.es/buscar/act.php?id=BOE-A-2013-12887)
- [Ley 2/2023 de protección del informante](https://www.boe.es/buscar/act.php?id=BOE-A-2023-4513)
- [Open Government Partnership - España](https://www.opengovpartnership.org/members/spain/)
- [datos.gob.es - Portal de datos abiertos](https://datos.gob.es/)
- [arquitectura_web.md](arquitectura_web.md)
- [especificaciones_tecnicas.md](especificaciones_tecnicas.md)

---

*Última actualización: Febrero 2026*
