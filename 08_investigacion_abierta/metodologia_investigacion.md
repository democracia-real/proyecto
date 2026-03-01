# Metodología de Investigación

## Resumen Ejecutivo

Este documento define cómo se realiza la investigación en el proyecto Democracia Real. La investigación es **basada en evidencia**, **revisada por pares** y **abierta**: metodología explícita, fuentes citadas, incertidumbre reconocida. Incluye el uso de herramientas de IA (Gemini Deep Research, ChatGPT research, Azure AI Search) como apoyo, nunca como sustituto del juicio humano.

---

## Índice

- [Principios](#principios)
- [Proceso de Investigación](#proceso-de-investigación)
- [Estándares de Calidad](#estándares-de-calidad)
- [Herramientas de Apoyo](#herramientas-de-apoyo)
- [Referencias](#referencias)

---

## Principios

### 1. Basada en Evidencia

| Principio | Significado |
|-----------|-------------|
| **Datos antes que opiniones** | Las afirmaciones se apoyan en fuentes verificables |
| **Metodología explícita** | Se explica cómo se llegó a las conclusiones |
| **Reproducibilidad** | Otro investigador podría replicar el análisis |
| **Fuentes primarias** | Preferencia por datos originales sobre interpretaciones de terceros |

### 2. Revisada por Pares

| Momento | Quién | Qué valida |
|---------|-------|------------|
| **Pre-publicación** | Al menos 1 revisor | Coherencia, fuentes, metodología |
| **Post-publicación** | Cualquier colaborador | Correcciones, ampliaciones vía PR |
| **Controversia** | Múltiples revisores | Cuando hay desacuerdo sobre conclusiones |

### 3. Abierta

| Aspecto | Compromiso |
|---------|------------|
| **Proceso visible** | Documentos en repositorio público |
| **Fuentes accesibles** | Enlaces o referencias a fuentes cuando sea posible |
| **Contribuciones** | Cualquiera puede proponer temas, aportar datos o revisar |
| **Corrección** | Errores se corrigen y se documenta el cambio |

---

## Proceso de Investigación

### Ciclo Estándar

```
1. PREGUNTA
   │  Definir pregunta concreta y respondible
   │  Ejemplo: "¿Cuál es el tiempo medio de resolución de
   │  trámites X en España vs. media UE?"
   ▼
2. FUENTES
   │  Identificar fuentes potenciales (INE, Eurostat, informes)
   │  Ver catálogo en [fuentes_datos.md](fuentes_datos.md)
   ▼
3. ANÁLISIS
   │  Recopilar datos, procesar, analizar
   │  Usar herramientas de apoyo si aplica (ver sección)
   ▼
4. DOCUMENTACIÓN
   │  Redactar hallazgos con estructura estándar
   │  Citar fuentes; distinguir hechos de opiniones
   ▼
5. REVISIÓN
   │  Revisión por pares antes de integrar en repo
   │  Incorporar feedback
   ▼
6. PUBLICACIÓN Y ACTUALIZACIÓN
   │  Merge a main; fecha de última revisión visible
   │  Actualizar cuando haya nueva evidencia
```

### Tipos de Investigación

| Tipo | Descripción | Ejemplo |
|------|-------------|---------|
| **Revisión documental** | Análisis de fuentes existentes | Leyes, informes, estadísticas oficiales |
| **Análisis de datos** | Procesamiento de datos públicos | Open data, APIs, bases descargables |
| **Comparativa** | Análisis entre países, regiones o periodos | España vs. UE en indicador X |
| **Casos de estudio** | Análisis en profundidad de un caso | Reforma electoral en país Y |
| **Síntesis** | Agregar múltiples fuentes en un marco coherente | Estado del arte sobre tema Z |

---

## Estándares de Calidad

### Citar Fuentes

| Requisito | Formato |
|-----------|---------|
| **En texto** | (Fuente, año) o [1] con referencia al final |
| **Lista de referencias** | Autor, título, año, URL o DOI cuando exista |
| **Datos numéricos** | Siempre con fuente; si es cálculo propio, explicar fórmula |

### Distinguir Hechos de Opiniones

| Tipo | Cómo señalarlo |
|------|----------------|
| **Hecho** | Afirmación con fuente verificable |
| **Interpretación** | "Según X...", "Los datos sugieren..." |
| **Opinión** | "Consideramos que...", "En nuestra valoración..." |
| **Incertidumbre** | "Los datos disponibles no permiten concluir...", "[PENDIENTE]" |

### Reconocer Incertidumbre

| Situación | Cómo proceder |
|-----------|---------------|
| **Datos incompletos** | Indicar limitación; no extrapolar sin aviso |
| **Fuentes contradictorias** | Presentar ambas; explicar criterio de preferencia |
| **Metodología limitada** | Declarar limitaciones en el documento |
| **Datos antiguos** | Señalar fecha; [PENDIENTE] si se necesita actualización |

### Plantilla de Documento de Investigación

```markdown
# Título

## Resumen Ejecutivo
2-3 párrafos con hallazgos principales

## Pregunta de Investigación
Qué se quería averiguar

## Metodología
Cómo se investigó (fuentes, criterios, herramientas)

## Hallazgos
Datos y análisis; tablas cuando aplique

## Limitaciones
Qué no se pudo determinar; incertidumbre restante

## Conclusiones
Implicaciones para el proyecto

## Referencias
Lista numerada de fuentes

## Historial
| Fecha | Autor | Cambio |
```

---

## Herramientas de Apoyo

### Uso de IA en Investigación

La IA **asiste**, no sustituye. Todo hallazgo debe ser verificado por humanos.

| Herramienta | Uso | Limitaciones |
|-------------|-----|--------------|
| **Gemini Deep Research** | Exploración inicial de temas; síntesis de literatura | Verificar fuentes; puede alucinar referencias |
| **ChatGPT (modo research)** | Búsqueda y resumen de información reciente | Contrastar con fuentes primarias |
| **Azure AI Search** | Búsqueda semántica en corpus propio (BOE, documentos) | Requiere índice preparado; resultados a validar |

### Reglas para Uso de IA

| Regla | Aplicación |
|-------|------------|
| **Verificación obligatoria** | Ningún dato de IA se publica sin contrastar con fuente original |
| **Transparencia** | Si la IA ayudó en una sección, indicarlo en metodología |
| **No delegar juicio** | La decisión sobre relevancia, calidad de fuentes y conclusiones es humana |
| **Reproducibilidad** | Documentar prompts o parámetros si son relevantes para el resultado |

### Otras Herramientas

| Herramienta | Uso |
|-------------|-----|
| **Hojas de cálculo** | Análisis de datos tabulares |
| **Python/R** | Análisis estadístico cuando se requiera |
| **Zotero/Mendeley** | Gestión de referencias |
| **Git** | Versionado de documentos y datos |

---

## Referencias

- [fuentes_datos.md](fuentes_datos.md) - Catálogo de fuentes
- [colaboradores.md](colaboradores.md) - Cómo contribuir
- [metodologia_ia.md](metodologia_ia.md) - Uso de IA en auditoría y presupuestos
- [CONTRIBUTING.md](../CONTRIBUTING.md) - Guía general de contribución
- [README.md](README.md) - Módulo de investigación abierta

---

*Última actualización: Febrero 2026*
