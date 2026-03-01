# Participación Online

## Resumen Ejecutivo

Este documento define cómo los ciudadanos participan en el proyecto Democracia Real a través de canales digitales. La participación no es decorativa: las propuestas fluyen desde la ciudadanía hasta la toma de decisiones mediante un proceso estructurado de revisión, deliberación y votación. Los canales incluyen GitHub (contribuciones técnicas y documentales), foro web y plataforma de votación.

---

## Índice

- [Canales de Participación](#canales-de-participación)
- [Flujo de Propuestas](#flujo-de-propuestas)
- [Control de Calidad](#control-de-calidad)
- [Accesibilidad](#accesibilidad)
- [Referencias](#referencias)

---

## Canales de Participación

### 1. GitHub (Contribuciones y Propuestas Técnicas)

| Uso | Descripción |
|-----|-------------|
| **Issues** | Reportar problemas, sugerir mejoras, proponer temas de investigación |
| **Pull Requests** | Contribuir directamente a documentación, código o contenido |
| **Discussions** | Debates abiertos sin vinculación a un commit concreto |
| **Wiki** | No habilitada; la documentación se gestiona directamente en el repositorio (archivos .md) para mantener trazabilidad vía Git |

**Ventajas**: Versionado, trazabilidad, integración con CI/CD, comunidad técnica existente.

**Limitación**: Requiere cuenta GitHub; puede ser barrera para perfiles no técnicos. Por eso existen canales complementarios.

### 2. Foro Web

| Característica | Descripción |
|----------------|-------------|
| **Propósito** | Debate deliberativo; propuestas en lenguaje natural |
| **Estructura** | Temas por área (economía, justicia, administración, etc.) |
| **Moderación** | Reglas claras; moderadores elegidos o rotativos |
| **Síntesis** | Uso de IA para resumir hilos largos (>50 mensajes), con supervisión humana obligatoria antes de publicar resumen |
| **Integración** | Propuestas que alcanzan umbral pueden migrar a GitHub o plataforma de votación |

**Estado**: Pendiente de decisión técnica. Candidatos: Discourse (código abierto, comunidad activa), GitHub Discussions (integrado con repo), o sección integrada en el portal web

### 3. Plataforma de Votación

| Característica | Descripción |
|----------------|-------------|
| **Quién vota** | Afiliados verificados (según estatutos) |
| **Qué se vota** | Propuestas, candidaturas, posicionamientos |
| **Autenticación** | Sistema progresivo en dos fases: **Fase inicial**: registro con correo electrónico + verificación de identidad manual (envío de DNI/NIE cifrado, validado por responsables del partido). **Fase avanzada**: integración con Cl@ve (sistema de identidad digital del Gobierno de España) para autenticación fuerte; el certificado digital (FNMT) se acepta como alternativa. No se desarrolla sistema propio de identidad para evitar riesgos de seguridad |
| **Verificabilidad** | Cada votante puede comprobar que su voto se registró |
| **Anonimato** | Voto secreto cuando proceda (estatutos, candidaturas) |
| **Delegación** | Posibilidad de democracia líquida (delegar voto a otro) |

**Estado**: Se recomienda **Decidim** como plataforma base por las siguientes razones: código abierto (AGPLv3), comunidad activa con soporte institucional (Generalitat de Catalunya, Ajuntament de Barcelona), módulos de propuestas, debates y votaciones integrados, soporte para democracia líquida mediante plugins, y documentación en español. Liquid Feedback queda como referencia para el módulo de delegación de voto. Desarrollo propio descartado en fase inicial por coste y complejidad; se valorará si Decidim no cubre necesidades específicas en el futuro

### Resumen de Canales

| Canal | Público | Tipo de participación |
|-------|---------|------------------------|
| GitHub | Cualquiera con cuenta | Contribución directa, propuestas técnicas |
| Foro | Cualquiera (registro ligero) | Debate, propuestas en texto |
| Votación | Afiliados | Decisión formal |

---

## Flujo de Propuestas

### Diagrama del Proceso

```
                    CIUDADANO / AFILIADO
                            │
                            ▼
              ┌─────────────────────────────┐
              │  ENVÍO DE PROPUESTA         │
              │  (Foro, GitHub Issue, form)  │
              └─────────────────────────────┘
                            │
                            ▼
              ┌─────────────────────────────┐
              │  MODERACIÓN BÁSICA          │
              │  (Spam, duplicados, formato) │
              └─────────────────────────────┘
                            │
                            ▼
              ┌─────────────────────────────┐
              │  PUBLICACIÓN Y DEBATE       │
              │  Comentarios, mejoras       │
              └─────────────────────────────┘
                            │
                            ▼
              ┌─────────────────────────────┐
              │  APOYO (votos de otros)     │
              │  Umbral: 5% de afiliados   │
              └─────────────────────────────┘
                            │
              ┌─────────────┴─────────────┐
              │ ¿Alcanza umbral?          │
              └─────────────┬─────────────┘
                   No │         │ Sí
                      │         ▼
                      │  ┌─────────────────────────────┐
                      │  │  VALORACIÓN ÓRGANO          │
                      │  │  Competente (comisión, etc.)│
                      │  └─────────────────────────────┘
                      │         │
                      │         ▼
                      │  ┌─────────────────────────────┐
                      │  │  RESPUESTA MOTIVADA         │
                      │  │  Acepta / Rechaza / Modifica│
                      │  └─────────────────────────────┘
                      │         │
                      │         ▼
                      │  ┌─────────────────────────────┐
                      │  │  Si acepta: integración     │
                      │  │  en programa o acción       │
                      │  └─────────────────────────────┘
                      │
                      ▼
              ┌─────────────────────────────┐
              │  Archivo / Cierre           │
              │  (con explicación si aplica)│
              └─────────────────────────────┘
```

### Tiempos Orientativos

| Fase | Plazo |
|------|-------|
| Moderación inicial | 48-72 horas |
| Período de debate | 2 semanas para propuestas ordinarias; 4 semanas para propuestas que afecten a estatutos, programa electoral o posicionamientos estratégicos |
| Valoración por órgano | 2-4 semanas |
| Respuesta motivada | Publicada en 7 días desde decisión |

---

## Control de Calidad

### Revisión por Pares

| Momento | Quién revisa | Qué se valida |
|---------|--------------|---------------|
| **Pre-publicación** | Moderador | Formato, duplicados, contenido inadmisible |
| **Durante debate** | Comunidad | Coherencia, datos, fuentes |
| **Pre-valoración** | Revisores asignados | Viabilidad, encaje con programa, evidencias |
| **Post-decisión** | Cualquiera | Que la respuesta sea coherente con la decisión |

### Criterios de Calidad para Propuestas

| Criterio | Descripción |
|----------|-------------|
| **Problema definido** | ¿Qué problema concreto se aborda? |
| **Evidencia** | ¿Hay datos o fuentes que lo respalden? |
| **Propuesta concreta** | ¿Qué se propone hacer exactamente? |
| **Viabilidad** | ¿Es implementable? ¿Coste estimado? |
| **Impacto** | ¿A quién afecta? ¿Cuál es el beneficio esperado? |

### Evitar Captura

- No permitir que un mismo usuario acumule múltiples identidades para inflar apoyos
- **Mecanismos anti-sybil**: para votaciones formales se requiere verificación de identidad real (DNI/NIE validado o autenticación Cl@ve). Cada persona física solo puede tener una cuenta de afiliado. Se implementa detección de patrones sospechosos (múltiples cuentas desde misma IP, registros masivos simultáneos) con revisión humana. Los apoyos a propuestas en fase de debate pueden ser con cuenta verificada por email, pero el voto formal exige identidad verificada
- Transparencia: listado de apoyos públicos (con opción de anonimato si se define)

---

## Accesibilidad

### Barreras a Reducir

| Barrera | Mitigación |
|---------|------------|
| **Técnica** | GitHub puede ser intimidante → Foro con interfaz más sencilla |
| **Idioma** | Contenidos en castellano como lengua principal. Traducción a lenguas cooficiales (catalán, euskera, gallego, valenciano) priorizada para: 1) Documentos estatutarios y programa; 2) Interfaz de la plataforma de participación. Se valorará traducción comunitaria colaborativa y uso de herramientas de IA con revisión humana según disponibilidad de voluntarios en cada territorio |
| **Discapacidad** | WCAG 2.1 AA en toda la plataforma |
| **Brecha digital** | Canales offline complementarios (reuniones presenciales, formularios en papel) |
| **Conocimiento político** | Glosario, lectura fácil para conceptos clave |

### Múltiples Puntos de Entrada

- Propuesta por formulario web (sin necesidad de cuenta para enviar)
- Propuesta por email (con procesamiento manual inicial)
- Propuesta en reunión presencial (transcrita por voluntarios)

---

## Referencias

- [CONTRIBUTING.md](../CONTRIBUTING.md) - Guía de contribución al repositorio
- [portal_transparencia.md](portal_transparencia.md) - Publicación de decisiones
- [arquitectura_web.md](arquitectura_web.md) - Infraestructura técnica
- [Decidim](https://decidim.org/) - Plataforma de participación
- [Liquid Feedback](https://liquidfeedback.org/) - Democracia líquida
- [Consul](https://github.com/consul/consul) - Participación ciudadana

---

*Última actualización: Febrero 2026*
