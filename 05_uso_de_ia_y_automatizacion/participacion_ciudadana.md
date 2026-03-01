# Participación Ciudadana Digital

## Resumen

Mecanismos **digitales** para que la ciudadanía participe en la vida pública **más allá del voto electoral**: iniciativas legislativas, consultas, presupuestos participativos, deliberación y co-creación de políticas. Este documento define tipos, principios y criterios de diseño, no soluciones técnicas concretas.

> *"La participación no es un favor que hace la administración; es un derecho y una necesidad de la democracia."*

## Tipos de Participación Ciudadana

| Tipo | Descripción | Ejemplo | Marco legal España |
|------|-------------|---------|-------------------|
| **Iniciativa Legislativa Popular (ILP)** | Ciudadanos proponen ley; requiere firmas y tramitación parlamentaria | 143 presentadas desde 1982, solo **4 aprobadas** (2,8%); solo 19 llegaron a debate (Maldita.es/Civio, 2024) | Art. 87 CE; Ley Orgánica 3/1984 |
| **Consulta / Referéndum** | Pregunta directa a la ciudadanía | Consultas sobre ordenación urbana | Art. 92 CE (referéndum nacional); estatutos autonómicos |
| **Presupuestos participativos** | Ciudadanos deciden parte del gasto municipal | ~5-10% de municipios según FEMP; concentrados en ciudades >50.000 hab. (Barcelona, Madrid, Valencia, Zaragoza) | Sin marco estatal; iniciativas locales |
| **Deliberación** | Foros, asambleas, paneles ciudadanos para debatir antes de decidir | Jurados ciudadanos, conferencias de consenso | Asamblea Ciudadana para el Clima (2022, 100 participantes); paneles en Barcelona, Bilbao; marco general en Ley 39/2015 (audiencia pública) |
| **Propuestas y peticiones** | Recogida de ideas; priorización por votación | Decidim, Consul | Depende del nivel que lo implemente |
| **Audiencia pública** | Información y alegaciones en procedimientos administrativos | EIA, planes urbanísticos | Ley 39/2015, procedimiento administrativo |

### Datos de Contexto

| Indicador | Valor | Fuente |
|-----------|-------|--------|
| Umbral firmas ILP estatal | 500.000 | Ley Orgánica 3/1984 |
| Plazo recogida firmas ILP | 9 meses (prorrogable por causa mayor) | LO 3/1984 (vigente, modificada 2006) |
| ILP presentadas (total histórico) | **143** (1982–2023) | Civio / Maldita.es |
| ILP que llegan a debate parlamentario | **19** (~13,3%) | Congreso |
| ILP aprobadas | **4** (~2,8%) | Congreso |
| Municipios con presupuesto participativo | ~5-10% del total (estimación); sin registro centralizado | FEMP / investigación académica |

## Modelos de Referencia Internacional

### Suiza

| Elemento | Descripción |
|---------|-------------|
| **Iniciativa popular** | 100.000 firmas para proponer reforma constitucional; 50.000 para referéndum sobre ley |
| **Referéndum facultativo** | Cualquier ley puede ser sometida a referéndum si se recogen firmas |
| **Referéndum obligatorio** | Cambios constitucionales, adhesión a organizaciones internacionales |
| **Frecuencia** | **3-4 votaciones federales/año** en fechas fijas (domingos); en 2024 se celebraron 4 jornadas con múltiples temas cada una |
| **Lección** | Participación como cultura institucional; alta confianza en el proceso |

### Estonia

| Elemento | Descripción |
|---------|-------------|
| **e-Governance** | Identidad digital (e-ID) desde 2002; voto electrónico desde 2005 |
| **Participación digital** | Propuestas ciudadanas online; umbral 1.000 firmas para debate parlamentario |
| **Rahvaalgatus** | Plataforma de iniciativas ciudadanas |
| **Cobertura** | e-ID: ~98% de la población adulta; i-voting: **51,1%** de los votos en elecciones legislativas 2023 (récord histórico); evolución: 1,9% (2005) → 31,7% (2017) → 51,1% (2023) |
| **Lección** | Infraestructura digital como base; participación integrada en flujos administrativos |

### Comparativa Breve

| País | Fortaleza | Debilidad |
|------|-----------|-----------|
| Suiza | Tradición, legitimidad, frecuencia | Complejidad; posible fatiga de votación |
| Estonia | Tecnología, eficiencia | Dependencia digital; brecha para no nativos digitales |
| España | Marco legal existe (ILP) | Umbral alto; tramitación que diluye; pocos presupuestos participativos |

## Plataformas Existentes

| Plataforma | Uso en España | Características |
|------------|---------------|-----------------|
| **Decidim** | Barcelona, múltiples ayuntamientos | Código abierto; propuestas, asambleas, presupuestos |
| **Consul** | Madrid (Madrid Participa) | Código abierto; propuestas, votaciones, presupuestos |
| **Gobierno Abierto** | Portal estatal (transparencia.gob.es) | Consultas puntuales; ~20-40 consultas públicas/año según portal; participación limitada en la práctica |
| **Change.org / Avaaz** | Peticiones no vinculantes | Alcance global; sin efecto legal directo |

### Criterios de Evaluación (Mecanismo de Decisión)

Antes de adoptar o proponer una plataforma:

| Criterio | Pregunta |
|----------|----------|
| **Interoperabilidad** | ¿Se integra con sistemas de identificación oficial (Cl@ve, etc.)? |
| **Accesibilidad** | ¿Cumple WCAG 2.1? ¿Funciona en móvil? |
| **Privacidad** | ¿Cumple GDPR? ¿Minimización de datos? |
| **Código abierto** | ¿Auditable y reutilizable? |
| **Mantenimiento** | ¿Comunidad activa? ¿Soporte institucional? |

## Accesibilidad y Brecha Digital

### Principio

La participación digital **no puede excluir** a quienes no tienen acceso o habilidades digitales.

| Medida | Descripción |
|--------|-------------|
| **Canales presenciales** | Puntos de recogida de firmas; oficinas de atención; votación en urnas para consultas |
| **Formación** | Alfabetización digital en centros cívicos, bibliotecas |
| **Diseño universal** | Lenguaje claro; soporte multiidioma donde proceda; lectores de pantalla |
| **Identificación** | Alternativas a certificado digital (presencial con DNI, etc.) |
| **Horarios y ubicaciones** | Acceso en horarios amplios; puntos en zonas rurales |

### Datos de Brecha Digital

| Indicador | Valor | Fuente |
|-----------|-------|--------|
| Hogares con acceso a Internet | **96,8%** (2024) | INE, Encuesta TIC Hogares 2024 |
| Hogares sin conexión a Internet | **3,2%** (~530.000 hogares) | INE 2024 |
| Población 16-74 años que usa Internet | **95,8%** (91,5% diariamente) | INE 2024 |
| Personas mayores (75+) que usan Internet semanalmente | **~33%** (1 de cada 3) | ONTSI 2024 |
| Posición España en DESI (Índice Digital UE) | **9º de 27** (57,4 pts en 2021) | Eurostat / España Digital |
| CCAA con mayor uso: Madrid, Cataluña, Baleares | 97,7% / 97,0% / 96,3% | INE 2024 |

## Mitigación de la Brecha Digital

| Estrategia | Mecanismo |
|------------|-----------|
| **Equivalencia funcional** | Mismo resultado por vía digital o presencial |
| **Asistencia en puntos físicos** | Personal que ayuda a participar online en bibliotecas, ayuntamientos |
| **Comunicación inclusiva** | Material en formatos accesibles; vídeos explicativos; pictogramas |
| **Evaluación continua** | Métricas de quién participa; identificar grupos infrarrepresentados |
| **Pilotos con medición** | Antes de escalar, medir tasas de participación por perfil sociodemográfico |

## Contexto Técnico antes de Votar ("Academia de Ciudadanía")

Si vamos a dar poder real al ciudadano, debemos darle **información real**. No se trata de restringir quién vota, sino de empoderar al votante con datos objetivos para que la decisión sea basada en evidencia, no en emociones o promesas vacías.

### Mecanismo

Antes de cualquier votación sobre temas complejos (presupuestos, energía, pensiones, etc.), la plataforma de participación presenta un **módulo de contexto técnico**:

| Componente | Descripción |
|------------|-------------|
| **Situación actual** | Datos objetivos procesados por IA: indicadores clave, comparativa internacional, tendencia |
| **Opciones sobre la mesa** | Las alternativas que se votan, explicadas en lenguaje claro |
| **Consecuencias de cada opción** | Informe de impacto a 5, 10 y 20 años generado por IA (ver [Informe de Impacto Obligatorio](../03_propuestas_institucionales/planificacion_largo_plazo.md)) |
| **Argumentos a favor y en contra** | Sin sesgo: las principales razones por las que alguien votaría cada opción |
| **Fuentes** | Todas verificables y públicas; enlazadas a los documentos del repositorio |
| **Preguntas frecuentes** | Resueltas por IA a partir de la base de conocimiento del proyecto |

### Principios

| Principio | Aplicación |
|-----------|------------|
| **No es un examen** | El ciudadano puede votar sin leer el contexto; siempre está disponible, nunca es obligatorio |
| **Sin sesgo** | El módulo presenta datos, no opiniones; auditado por comisión independiente |
| **Lenguaje claro** | Nivel B1 de comprensión lectora; vídeos explicativos para temas complejos |
| **Actualización continua** | Los datos se actualizan en tiempo real; no se vota con información obsoleta |
| **Accesible** | Disponible en todos los idiomas cooficiales; formato accesible (WCAG 2.1) |

### Relación con los Contrapesos Democráticos

Este mecanismo forma parte del sistema de [Contrapesos contra el Cortoplacismo](../04_modelo_organizativo_partido/gobernanza_consenso_afiliacion.md) junto con la delegación por expertiz, el simulador de impacto IA y el presupuesto intergeneracional. Juntos, garantizan que el poder del pueblo no sea un cheque en blanco sino una supervisión informada sobre una infraestructura técnica de alta calidad.

---

## Encaje con el Proyecto

| Objetivo | Cómo contribuye la participación ciudadana digital |
|----------|-----------------------------------------------------|
| **Soberanía ciudadana** | Más canales de influencia real en las decisiones |
| **Transparencia** | Procesos abiertos; propuestas y votaciones públicas |
| **Colaboración** | Co-creación de políticas; validación por la comunidad |
| **Evidencia** | Priorización por datos (qué propuestas tienen más apoyo) |
| **Reforma estructural** | ILP más accesibles; referéndums vinculantes; presupuestos participativos obligatorios |

### Propuestas de Mecanismos (No Técnicas)

| Mecanismo | Descripción |
|-----------|-------------|
| **Bajada del umbral ILP** | Propuesta: reducir de 500.000 a **200.000 firmas** (~0,44% electorado); comparativa: Suiza exige 100.000 (1,2% de 8,7M hab.), Estonia 1.000 firmas para debate parlamentario |
| **Plataforma única de firmas** | Firma digital verificable para ILP y consultas; reducir coste de recogida |
| **Presupuesto participativo obligatorio** | % mínimo del presupuesto municipal decidido por ciudadanos |
| **Audiencia pública ampliada** | Más fases de consulta en normas de gran impacto |
| **Evaluación ex-post de participación** | Medir si las consultas influyeron en la decisión final |

## Riesgos

| Riesgo | Mitigación |
|--------|------------|
| **Participación superficial** | Deliberación antes de votación; información de calidad |
| **Captura por grupos organizados** | Límites; transparencia de quién participa |
| **Fatiga participativa** | No saturar; priorizar consultas relevantes |
| **Legitimidad** | Si participan pocos, el resultado puede no ser representativo |
| **Coste** | Plataformas y procesos tienen coste; evaluar relación coste-impacto |

## Relación con Otros Documentos

| Documento | Vínculo |
|-----------|---------|
| [democracia_liquida.md](democracia_liquida.md) | Delegación de voto como complemento |
| [README.md](README.md) módulo 05 | Participación y síntesis con IA |
| [reforma_electoral.md](../03_propuestas_institucionales/reforma_electoral.md) | Listas abiertas, ILP |
| [planificacion_largo_plazo.md](../03_propuestas_institucionales/planificacion_largo_plazo.md) | Participación en objetivos a largo plazo |
| [portal_transparencia.md](../07_web_publica_y_transparencia/portal_transparencia.md) | Transparencia de datos para participar informadamente |

---

*Documento en desarrollo. Datos de ILP, presupuestos participativos y brecha digital actualizados (feb. 2026). Contribuciones bienvenidas.*
