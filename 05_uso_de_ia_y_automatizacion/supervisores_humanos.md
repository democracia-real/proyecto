# Supervisores Humanos de la IA

## Resumen

**Principio rector:** La IA **no manda**. **Asiste**. Siempre con supervisión humana. Ninguna decisión que afecte derechos o bienes de las personas puede ser tomada exclusivamente por un algoritmo.

Este documento desarrolla los **roles, mecanismos y criterios** para garantizar que los sistemas de IA en gobernanza estén bajo control humano efectivo.

> *"La IA no tiene intereses, no es corrupta, pero debe estar supervisada."* — Readme del proyecto

## Principio Fundamental

| Formulación | Fuente |
|-------------|--------|
| "IA con humano en el bucle" | [etica_y_supervision_humana.md](etica_y_supervision_humana.md) |
| "La IA no manda. Asiste. Siempre con supervisión humana." | Readme, módulo 05 |
| "Ninguna decisión final solo por algoritmo" | etica_y_supervision_humana.md |

### Implicación Práctica

```
IA informa / sugiere / alerta  →  HUMANO decide / valida / responde
```

La IA puede **procesar**, **detectar**, **recomendar**. El humano **interpreta**, **decide** y **asume responsabilidad**.

## Roles de Supervisión

| Rol | Función | Independencia |
|-----|---------|---------------|
| **Auditores** | Revisar que los sistemas de IA funcionen según especificación; detectar sesgos y errores | Externos al equipo que desarrolla/mantiene la IA |
| **Comités de ética** | Supervisar uso de IA en administración y justicia; resolver conflictos | No vinculados a la dirección operativa |
| **Supervisores ciudadanos** | Órganos de participación que revisan impacto de IA en derechos | Representación ciudadana; mandato limitado |
| **Validadores operativos** | Humanos que aprueban o rechazan recomendaciones de IA en cada caso | En la cadena de decisión; no pueden ser bypassed |
| **Recurso humano** | Cualquier persona afectada puede apelar ante un humano | Derecho garantizado por diseño |

### Composición Recomendada (Mecanismo de Decisión)

| Órgano | Criterios de composición |
|--------|--------------------------|
| Comité de Ética IA | 7-11 miembros con perfiles multidisciplinares: juristas especializados en derechos fundamentales, expertos en IA/ML, representantes de sociedad civil, un filósofo/eticista y un representante de colectivos afectados. Elegidos por concurso público de méritos con mandato de 4 años no renovable, ratificados por el Parlamento. Referencia: Recomendación UNESCO sobre Ética de la IA (2021) y modelo del Grupo de Expertos de Alto Nivel de la UE |
| Auditoría externa | Periodicidad anual para sistemas de alto riesgo (según clasificación del EU AI Act); semestral si afectan a derechos fundamentales; continua (monitorización automatizada) para sistemas críticos. Auditor independiente sin vínculo contractual con el desarrollador; rotación cada 3 años |
| Supervisores ciudadanos | Referentes internacionales: Taiwán (vTaiwan) integra ciudadanos en deliberaciones sobre tecnología; la UE incluye representación de sociedad civil en el AI Board del AI Act; la iniciativa CIVICAi (Cataluña) propone un protocolo de "Inteligencia Cívica" con participación ciudadana directa en gobernanza de IA; Estonia colaboró con Open Loop para operacionalizar supervisión humana. Modelo propuesto: panel ciudadano de 15-20 personas seleccionadas por sorteo cívico, con mandato rotatorio de 2 años |

## Cuándo la IA Puede Decidir vs. Recomendar

Según [etica_y_supervision_humana.md](etica_y_supervision_humana.md):

| Nivel | Descripción | Supervisión |
|-------|-------------|-------------|
| **1-2** | IA informa o sugiere → humano decide | La mayoría de casos |
| **3-4** | IA actúa con validación humana explícita | Flujos muy acotados |
| **5** | Autonomía total | Solo tareas sin impacto en derechos (ej. clasificación interna de documentos) |

### Criterio de Clasificación

| Pregunta | Si respuesta es SÍ → Supervisión obligatoria |
|----------|---------------------------------------------|
| ¿Afecta a derechos fundamentales? | Siempre humano |
| ¿Afecta a bienes o intereses patrimoniales? | Siempre humano |
| ¿Puede causar daño a personas? | Siempre humano |
| ¿Es reversible sin consecuencias? | Evaluar según contexto |
| ¿Es tarea puramente interna (clasificación, etiquetado)? | Puede ser autónoma con auditoría |

### Ejemplos

| Caso | Nivel | Justificación |
|------|-------|---------------|
| IA detecta anomalía en licitación | 1-2 | Alerta; humano investiga y decide |
| IA sugiere denegación de subvención | 1-2 | Humano revisa y firma |
| IA clasifica documentos por tipo | 5 | Sin impacto en derechos; auditoría muestral |
| IA automatiza triaje de solicitudes | 3-4 | Validación humana en casos límite |
| IA recomienda sentencia | 1-2 | Juez decide; IA solo asistencia |

## Responsabilidad y Rendición de Cuentas

| Principio | Aplicación |
|-----------|------------|
| **Responsabilidad humana** | Quien firma o aprueba es responsable, no el algoritmo |
| **Trazabilidad** | Registro de qué recomendó la IA, qué decidió el humano y por qué |
| **Explicabilidad** | Cuando la IA recomienda, el criterio debe ser explicable (a un juez, al ciudadano) |
| **Derecho a recurso** | Cualquier decisión apoyada en IA puede ser recurrida ante un humano |
| **Sanciones** | Por uso indebido de IA o por omitir supervisión cuando era obligatoria |

### Mecanismo de Recurso

```
CIUDADANO AFECTADO
    ↓
Solicita revisión humana
    ↓
Órgano competente (no el que tomó la decisión inicial)
    ↓
Revisión con acceso a: recomendación IA, criterios, decisión humana
    ↓
Resolución motivada
    ↓
Posible recurso administrativo/judicial
```

## Salvaguardas Específicas

| Salvaguarda | Descripción |
|-------------|-------------|
| **No bypass** | No debe ser posible "saltarse" la validación humana en flujos que la requieren |
| **Registro de decisiones** | Quién validó, cuándo, con qué información |
| **Auditoría periódica** | Revisión de sistemas de IA (sesgos, falsos positivos, impacto) |
| **Formación** | Supervisores deben entender limitaciones de la IA |
| **Alertas de confianza** | Si la IA indica baja confianza, escalar siempre a humano |

## Encaje con el Proyecto

| Objetivo | Cómo contribuyen los supervisores humanos |
|----------|-------------------------------------------|
| **Transparencia radical** | Decisiones trazables; criterios explicables |
| **Rendición de cuentas** | Responsabilidad humana clara |
| **Datos sobre opiniones** | La IA aporta datos; el humano interpreta en contexto |
| **Soberanía ciudadana** | El poder de decisión sigue en personas, no en sistemas |
| **Evidencia** | La IA ayuda a detectar; el humano valida antes de actuar |

## Relación con Otros Documentos

| Documento | Vínculo |
|-----------|---------|
| [etica_y_supervision_humana.md](etica_y_supervision_humana.md) | Protocolo "IA con humano en el bucle"; niveles de autonomía |
| [auditoria_algoritmica.md](auditoria_algoritmica.md) | Alertas que requieren validación humana |
| [README.md](README.md) módulo 05 | Papel del supervisor humano; riesgos y salvaguardas |
| [codigo_etico.md](../04_modelo_organizativo_partido/codigo_etico.md) | Responsabilidad y transparencia de cargos |
| [ia_supervisada_presupuestos.md](ia_supervisada_presupuestos.md) | IA que detecta; humanos que actúan |

## Indicadores de Cumplimiento

| Indicador | Objetivo |
|-----------|----------|
| % decisiones con impacto en derechos sin validación humana | 0% |
| Tiempo medio de respuesta a recurso humano | Máximo 30 días naturales para resolución (alineado con la Ley 39/2015 que establece plazo medio inferior a 20 días para recursos administrativos; 1 mes para recurso de reposición). Objetivo interno: resolución en ≤15 días hábiles |
| Número de auditorías externas de sistemas IA/año | Mínimo 1 auditoría anual para sistemas de riesgo medio; 2 auditorías anuales para sistemas de alto riesgo (según EU AI Act); monitorización continua automatizada para sistemas críticos que afecten derechos fundamentales |
| Formación en supervisión IA completada por validadores | 100% |

---

*Documento en desarrollo. Desarrolla el principio de [etica_y_supervision_humana.md](etica_y_supervision_humana.md) con roles y mecanismos concretos.*
