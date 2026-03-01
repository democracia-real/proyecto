# Democracia Líquida

## Resumen

La **democracia líquida** es un modelo de participación que permite a los ciudadanos **delegar su voto** en personas de confianza o expertos en temas concretos, o **ejercerlo directamente** cuando lo deseen. Combina elementos de democracia representativa (delegación) y directa (voto propio), con la flexibilidad de cambiar de delegado en cualquier momento.

> *"No votas a una persona. Validas una solución. O delegas en quien mejor la conozca."*

## Concepto y Funcionamiento

### Definición

| Elemento | Descripción |
|----------|-------------|
| **Voto directo** | El ciudadano vota personalmente en cada decisión |
| **Delegación** | El ciudadano asigna su voto a otra persona para un tema o ámbito |
| **Delegación transitiva** | El delegado puede a su vez delegar (cadena de confianza) |
| **Revocación** | La delegación puede retirarse en cualquier momento |
| **Especialización** | Delegar por áreas: energía, sanidad, educación, etc. |

### Flujo de Decisión

```
PROPUESTA → Deliberación → Votación
                ↓
    Ciudadano A: vota directamente
    Ciudadano B: delega en experto X (temas energía)
    Ciudadano C: delega en experto Y (temas sanidad)
    Ciudadano D: delega en B (que a su vez delega en X para energía)
                ↓
    Conteo ponderado según delegaciones
                ↓
    RESULTADO verificable
```

## Comparativa con Otros Modelos

| Modelo | Cómo se decide | Ventajas | Limitaciones |
|--------|----------------|----------|--------------|
| **Representativa** | Elegimos representantes que deciden todo | Eficiencia, especialización | Desconexión, disciplina de partido |
| **Directa** | Todos votan todo | Soberanía real | Sobrecarga, complejidad técnica |
| **Líquida** | Voto directo o delegado, por tema | Flexibilidad, expertise, participación escalable | Requiere plataformas, brecha digital |

### Principio Diferencial

En democracia líquida, **la delegación es granular y revocable**. No se delega "todo" en una persona por 4 años, sino que se puede delegar solo en temas de energía, votar directamente en sanidad, y cambiar de delegado mañana si no te convence.

## Herramientas y Plataformas

| Plataforma | Origen | Uso principal | Estado |
|------------|--------|---------------|--------|
| **Liquid Feedback** | Partido Pirata alemán | Votaciones, delegación, propuestas | Versión 4.x con soporte para blockchain, OAuth 2.0 y PWA. Usado en partidos piratas de Alemania, Austria, Italia, Suiza y Brasil. Sin adopción institucional significativa en España (Fuente: liquidfeedback.com; Wikipedia) |
| **Decidim** | Barcelona, código abierto | Participación ciudadana, presupuestos | Usado en ayuntamientos |
| **Pol.is** | MIT / Taiwan | Mapeo de opiniones, consenso | Usado en Taiwán (vTaiwan, 28+ casos, 80% con acción gubernamental), Reino Unido, Finlandia, España y Canadá. En 2023 se usó con OpenAI para deliberación sobre gobernanza de IA con ~1.000 participantes (Fuente: Pol.is – Wikipedia; GIGAZINE 2026) |
| **Consul** | Madrid | Propuestas, votaciones, presupuestos | Usado en Madrid |
| **Blockchain-based** | Varios | Votaciones verificables, inmutabilidad | En fase piloto institucional: Perú aprobó voto con blockchain (Ley 32270, 2025) para residentes en el exterior; Ecuador probó en elecciones 2025. La UE dispone de EBSI (red permisionada soberana desde 2018). Estonia tardó ~20 años en consolidar su voto digital. Tecnología prometedora pero requiere marcos legales y culturales maduros (Fuentes: beincrypto.com; gobiernodigital.pe; EBSI) |

### Criterios de Selección (Mecanismo de Decisión)

Antes de elegir una herramienta concreta, el proyecto debe definir:

| Criterio | Pregunta a resolver |
|----------|---------------------|
| **Accesibilidad** | ¿Funciona sin smartphone? ¿Cumple WCAG? |
| **Verificabilidad** | ¿El ciudadano puede comprobar que su voto se contó? |
| **Privacidad** | ¿Se puede votar sin revelar identidad a terceros? |
| **Auditabilidad** | ¿Un tercero puede verificar la integridad del proceso? |
| **Soberanía** | ¿Los datos y el código están bajo control europeo? |
| **Coste de mantenimiento** | Desde ~1.000€/año (plan básico cloud, hasta 2.000 usuarios) hasta ~30.000€/año (soporte profesional con servidores propios, ej. Decidim en Diputación de Girona). Costes variables según escala, personalización y nivel de soporte técnico (Fuente: participa.cloud; licitación Diputación de Girona 2025) |

## Experiencia del Partido Pirata

Según [tematicas_emergentes_y_modelos_programaticos.md](../08_investigacion_abierta/tematicas_emergentes_y_modelos_programaticos.md):

| Aspecto | Lección del Partido Pirata |
|---------|----------------------------|
| **Método** | Programa colaborativo, votaciones telemáticas, gran peso de las bases. "El método es el mensaje." |
| **Estructura** | Capítulos temáticos; legitimar el programa con participación real de la militancia |
| **Herramienta** | Liquid Feedback como referencia para democracia líquida interna |

**Datos de la experiencia Pirata:** El Partido Pirata alemán creció de 11.500 miembros (2009) a más de 20.000 (2012), con su mayor éxito electoral en Berlín (8,9%, 10 escaños, 2011). LiquidFeedback se usó para preparar convenciones nacionales, pero generó críticas: los votos son públicos (sin confidencialidad), y algunos miembros señalaron que el sistema podía crear estructuras de poder y no protegía adecuadamente los intereses de las minorías. No hay datos públicos detallados sobre tasas de participación o delegaciones activas (Fuente: Wikipedia – Partido Pirata de Alemania; Wikipedia – Liquid Feedback)

## Riesgos Identificados

| Riesgo | Descripción | Mitigación propuesta |
|--------|-------------|----------------------|
| **Manipulación** | Grupos organizados concentran delegaciones para dominar | Límites a delegación transitiva; transparencia de quién delega en quién |
| **Brecha digital** | Excluye a quienes no usan tecnología | Canales presenciales alternativos; puntos de acceso en espacios públicos |
| **Tiranía de los activos** | Quien más participa acapara delegaciones | Un estudio de Stanford (2024) analizó +250.000 votantes en 18 DAOs: el 17% de los tokens se delegaban, con alta concentración en los delegados más populares. Estudios teóricos (Kahng et al., 2021) demostraron que pocos votantes pueden acumular influencia excesiva. Mitigación: límites a delegaciones transitivas y mecanismos de distribución (Fuente: Stanford GSB Working Papers; arXiv:2107.11868) |
| **Falsificación** | Manipulación técnica de votos | Registro inmutable; auditorías independientes |
| **Complejidad** | Los ciudadanos no entienden el sistema | Formación, interfaz clara, explicaciones accesibles |
| **Deshumanización** | La política se reduce a clics | Combinar con deliberación presencial; foros de debate |

### Datos sobre Brecha Digital en España

| Indicador | Valor | Fuente |
|-----------|-------|--------|
| Hogares con Internet | 96,8% de hogares con banda ancha (2024) | INE |
| Personas que nunca han usado Internet | 4,2% de 16-74 años; brecha significativa en mayores de 65 | INE |
| Uso de administración electrónica | 79,7% interactuaron con la administración online (2024; media UE: 70%) | Eurostat |

## Encaje con los Objetivos del Proyecto

| Objetivo del proyecto | Cómo contribuye la democracia líquida |
|-----------------------|--------------------------------------|
| **Soberanía ciudadana** | El poder reside en el voto, no en cúpulas; delegación revocable |
| **Transparencia radical** | Votaciones y delegaciones auditablemente registradas |
| **Meritocracia** | Delegar en quien demuestra expertise, no en lealtad partidista |
| **Datos sobre opiniones** | Las propuestas se priorizan por votación, no por pactos de pasillo |
| **Colaboración ciudadana** | Cualquiera puede proponer; la comunidad valida |

### Fases de Implementación (Mecanismo de Decisión)

| Fase | Alcance | Criterio de avance |
|------|---------|---------------------|
| **1. Interna** | Democracia líquida solo para afiliados del partido | Plataforma operativa; Meta: ≥30% de afiliados participando en la primera votación interna |
| **2. Piloto** | Prueba en municipio o barrio afín | Evaluación de usabilidad y riesgos |
| **3. Propuesta legislativa** | Iniciativa para reconocer democracia líquida en procesos públicos | España carece de ley específica de voto electrónico. La LOREG (Ley Orgánica 5/1985) regula el sufragio presencial y por correo. El Congreso aprobó regular el voto telemático en Ayuntamientos (2024). El Reglamento UE 2024/1183 establece el marco europeo de identidad digital (eIDAS 2), base para futuras soluciones de votación. Se requeriría reforma de la LOREG para reconocer mecanismos de democracia líquida |

## Principios de Diseño

| Principio | Aplicación |
|-----------|------------|
| **Opt-in por tema** | Nadie está obligado a delegar; puede votar directamente en todo |
| **Transparencia de delegaciones** | Público quién delega en quién (o agregado anonimizado si hay privacidad) |
| **Revocación inmediata** | Sin plazos ni trámites para retirar delegación |
| **Sin delegación obligatoria** | Si no votas ni delegas, tu voto no cuenta; no se asume delegación por defecto |
| **Deliberación antes de votación** | Período de debate con acceso a información antes de votar |

## Relación con Otros Documentos

| Documento | Vínculo |
|-----------|---------|
| [README.md](README.md) del módulo 05 | Democracia líquida como aplicación de IA y participación |
| [participacion_ciudadana.md](participacion_ciudadana.md) | Mecanismos complementarios (consultas, presupuestos) |
| [integridad_digital.md](integridad_digital.md) | Verificabilidad de votos; registro inmutable |
| [blockchain_casos_uso.md](blockchain_casos_uso.md) | Trazabilidad de votaciones |
| [gobernanza_consenso_afiliacion.md](../04_modelo_organizativo_partido/gobernanza_consenso_afiliacion.md) | Democracia interna del partido |

---

*Documento en desarrollo. Prioridad: definir criterios de selección de herramienta antes que solución técnica concreta.*
