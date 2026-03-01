# Metodología IA: Auditoría Normativa y Presupuestos Participativos

Documento de trabajo que define **cómo la IA podría usarse** para auditar el BOE (detección de lobby/beneficios sectoriales) y para verificar la viabilidad técnica de propuestas en presupuestos participativos. Complementa a [05_uso_de_ia_y_automatizacion](../05_uso_de_ia_y_automatizacion/README.md).

---

## 1. Auditoría automática del BOE: detección de leyes que favorecen intereses concretos

### Objetivo

Identificar de forma sistemática **normas que benefician a sectores o empresas concretas** (lobby, captura regulatoria), no por ideología sino por **patrones** que la lectura humana no puede escalar (volumen del BOE, enmiendas, cruce con registros de interés).

### Enfoque metodológico

| Paso | Descripción | Rol de la IA |
|------|-------------|--------------|
| **1. Ingesta del BOE** | Leyes, reales decretos, enmiendas en texto estructurado (XML/HTML oficial o parseado). | Extracción de texto, metadatos (fecha, ministerio, tipo de norma). |
| **2. Análisis de entidades** | Identificar menciones a sectores, actividades económicas, umbrales, excepciones, plazos, beneficiarios tipo. | NER (reconocimiento de entidades), clasificación de artículos por ámbito (fiscal, laboral, sector X). |
| **3. Cruce con registros de interés** | Relacionar normas con registros de lobbies, grupos de presión, informes de impacto. | Cruce con bases de datos públicas (registro de lobbies UE/España, declaraciones de actividades). |
| **4. Detección de anomalías** | Enmiendas de último momento, excepciones muy acotadas, plazos o umbrales que coinciden con peticiones conocidas. | Modelos de anomalía (desviación respecto a borradores, comparación con normas similares en otros países). |
| **5. Alertas y reportes** | Informes periódicos: "normas con posible beneficio sectorial concentrado", con enlace a texto y fuentes. | Síntesis, ranking por nivel de riesgo/evidencia, siempre con **revisión humana** antes de publicar. |

### Requisitos

- **Fuentes**: BOE oficial (API o descargas), registros de transparencia y lobby cuando existan.
- **Supervisión humana**: La IA no "acusa"; señala candidatos a revisión. Un equipo (periodistas, juristas, OSC) valida y contextualiza.
- **Reproducibilidad**: Metodología y criterios documentados; resultados verificables.

### Relación con el proyecto

- Refuerza [auditoria_algoritmica.md](../05_uso_de_ia_y_automatizacion/auditoria_algoritmica.md) (detección de patrones en contratación y subvenciones).
- Alineado con transparencia y lucha contra captura regulatoria (diagnóstico en [01_diagnostico_del_sistema](../01_diagnostico_del_sistema/README.md)).

---

## 2. Presupuestos participativos: IA para verificar viabilidad técnica de propuestas ciudadanas

### Objetivo

En procesos de **presupuestos participativos**, la ciudadanía propone proyectos (obras, equipamientos, programas). La IA no sustituye la decisión política, pero puede **pre-filtrar y valorar viabilidad técnica** (coste, plazos, normativa, duplicidades) para que la administración y la ciudadanía deliberen con mejor información.

### Enfoque metodológico

| Paso | Descripción | Rol de la IA |
|------|-------------|--------------|
| **1. Recepción de propuestas** | Texto libre o formularios semiestructurados (título, descripción, ubicación, tipo de gasto). | Clasificación automática (infraestructura, cultura, deportes, etc.), detección de duplicados o muy similares. |
| **2. Estimación de coste y encaje** | Comparar con proyectos similares ejecutados (open data de contratación, bases de precios). | Estimación de rango de coste a partir de datos históricos; alerta si la propuesta excede presupuesto del proceso. |
| **3. Viabilidad normativa y competencial** | Comprobar si la propuesta cae en competencias del ayuntamiento/administración y si choca con normativa. | Consulta a bases de normativa (leyes, reglamentos) y clasificación competencial; señalar posibles incompatibilidades para revisión jurídica. |
| **4. Informe de viabilidad** | Para cada propuesta: viabilidad baja/media/alta, motivos, recomendaciones (ej. "unificar con propuesta X"). | Síntesis en lenguaje claro para que la ciudadanía y la administración prioricen; **decisión final siempre humana** (votación, comisión). |
| **5. Seguimiento** | Tras la ejecución, comparar coste real vs. estimado y plazos. | Aprendizaje para mejorar futuras estimaciones; transparencia ex post. |

### Requisitos

- **Datos**: Histórico de contratación y ejecución presupuestaria (open data), normativa accesible en formato explotable.
- **Participación**: La IA no elimina ni aprueba propuestas; las ordena y enriquece para que la deliberación sea informada.
- **Ética**: Ver [etica_y_supervision_humana.md](../05_uso_de_ia_y_automatizacion/etica_y_supervision_humana.md); evitar sesgos (p. ej. favorecer barrios con más propuestas mejor redactadas).

### Relación con el proyecto

- Conecta con gobierno abierto y transparencia ([07_web_publica_y_transparencia](../07_web_publica_y_transparencia/README.md)).
- Presupuestos participativos como herramienta de rendición de cuentas y prioridad del gasto ([prioridad_gasto_publico.md](../02_problemas_estructurales/prioridad_gasto_publico.md)).

---

## Próximos pasos

1. **Priorizar**: Decidir si el primer piloto es auditoría BOE o presupuestos participativos (o un subcaso de uno de ellos).
2. **Datos**: Comprobar disponibilidad de BOE en formato machine-readable y de datos de contratación por administración.
3. **Prototipo**: Especificar pipeline (ingesta → modelo → salida) y criterios de éxito antes de implementar.
4. **Revisión legal**: Asegurar que el tratamiento de datos y las alertas cumplen normativa de protección de datos y no constituyen acusación sin base.

---

*Documento de trabajo. Ver también [metodologia_investigacion.md](metodologia_investigacion.md) para estándares generales de investigación.*
