# Integridad Digital

## Resumen

Garantizar que las **comunicaciones y registros digitales** de interés público sean **inalterables, trazables y verificables**, evitando la destrucción de pruebas, la manipulación de expedientes y la impunidad derivada de la pérdida o borrado de evidencias.

> *"Lo que no está registrado de forma inmutable, puede desaparecer cuando convenga."*

## El Problema

### Síntomas Observables

| Problema | Descripción | Casos |
|----------|-------------|-------|
| **Borrado de WhatsApp** | Mensajes oficiales en canales borrables; destrucción sin consecuencias | [Múltiples investigaciones judiciales] |
| **Expedientes perdidos** | Documentos que "desaparecen" o no se encuentran | Destrucción del archivo de la Prisión de Carabanchel denunciada por el historiador Luis Antonio Ruiz (2023, Ministerio de Interior); destrucción de archivos policiales del franquismo (Martín Villa/Suárez); pérdidas documentales recurrentes denunciadas por SEDIC (Fuente: El Confidencial; SEDIC) |
| **Modificación de registros** | Alteración de actas, contratos o comunicaciones sin trazabilidad | El informe CORA (2014, 237 propuestas) identificó problemas de acreditación de identidad, validez de registros electrónicos y trazabilidad de transmisiones de datos. El Plan de Digitalización de las AA.PP. 2021-2025 reconoce que la relación digital sigue siendo "transaccional y atomizada" (Fuente: Informe CORA; Plan de Digitalización AA.PP. 2021-2025) |
| **Falta de autenticidad** | Imposibilidad de probar que un documento es el original y no ha sido alterado | Peritajes costosos y no siempre concluyentes |
| **Custodia en servidores privados** | Datos en manos de empresas fuera de jurisdicción española | WhatsApp, correo corporativo en la nube |

### Causa Raíz

```
AUSENCIA DE OBLIGACIÓN LEGAL
        ↓
Comunicaciones oficiales en canales no auditable
        ↓
Sin registro inmutable ni trazabilidad
        ↓
IMPUNIDAD ANTE DESTRUCCIÓN DE PRUEBAS
```

Véase [corrupcion_e_impunidad.md](../02_problemas_estructurales/corrupcion_e_impunidad.md) y [independencia_digital_justicia.md](../03_propuestas_institucionales/independencia_digital_justicia.md).

## Principios

| Principio | Significado |
|-----------|-------------|
| **Inmutabilidad** | Una vez registrado, no puede modificarse ni borrarse sin dejar huella |
| **Transparencia** | El registro de existencia (no necesariamente el contenido) es verificable |
| **Trazabilidad** | Se puede demostrar cuándo se creó, quién lo creó y si ha sido alterado |
| **Autenticidad** | El documento o comunicación es el que dice ser |
| **Custodia adecuada** | Bajo control de la administración o sistema auditable, no en dispositivos personales |

## Tecnologías y Enfoques (Opciones, No Prescripción)

El proyecto propone **mecanismos de decisión** para elegir tecnologías, no una solución técnica única.

| Enfoque | Función | Ventajas | Limitaciones |
|---------|---------|----------|--------------|
| **Firma digital** | Autenticidad e integridad del documento | Estándar legal; ampliamente usado | No evita borrado si no hay copia en sistema oficial |
| **Registro distribuido / blockchain** | Huella inmutable; prueba de existencia en momento T | No se puede alterar sin dejar rastro | Coste variable según tipo de red: redes permisionadas como EBSI (Infraestructura Blockchain Europea, 27 Estados + Noruega/Liechtenstein) ofrecen soberanía europea y costes compartidos. Complejidad de integración con sistemas legacy de la administración. En 2024 se creó EUROPEUM-EDIC (9 Estados) para reforzar cooperación. Coste por transacción significativamente menor en redes permisionadas vs. públicas (Fuente: EBSI; Comisión Europea) |
| **Sello de tiempo (RFC 3161)** | Prueba de que el documento existía en una fecha | Estándar; interoperable | Requiere autoridad de sellado de tiempo |
| **Hash + almacenamiento oficial** | Copia automática en sistema auditable | Más simple que blockchain | Depende de que el almacenamiento sea fiable |
| **Canal oficial obligatorio** | Comunicaciones de interés público solo por medios que registran | Cambio de cultura y procedimiento | Requiere normativa y formación |

### Criterio de Selección

| Criterio | Pregunta |
|----------|----------|
| **Requisito legal** | ¿La tecnología cumple con la normativa de firma electrónica (eIDAS)? |
| **Coste** | ¿Cuál es el coste por documento/comunicación registrada? |
| **Soberanía** | ¿Los datos o el sistema están bajo jurisdicción europea? |
| **Interoperabilidad** | ¿Funciona con sistemas existentes de la administración? |
| **Auditabilidad** | ¿Un tercero independiente puede verificar la integridad? |

## Aplicación a Registros Públicos

| Tipo de registro | Necesidad de integridad | Mecanismo propuesto |
|------------------|-------------------------|---------------------|
| **Comunicaciones de altos cargos** | Alta | Canal oficial; copia automática a sistema inmutable |
| **Contratos públicos** | Alta | Firma + sello de tiempo + hash en registro |
| **Actas de órganos colegiados** | Alta | Firma de acta; versión inmutable publicada |
| **Adjudicaciones y licitaciones** | Alta | Registro de cada versión; trazabilidad de cambios |
| **Expedientes administrativos** | Alta | Integración de comunicaciones relevantes en expediente |
| **Votaciones** | Alta | Ver [democracia_liquida.md](democracia_liquida.md), [blockchain_casos_uso.md](blockchain_casos_uso.md) |

### Relación con Independencia Digital de la Justicia

Según [independencia_digital_justicia.md](../03_propuestas_institucionales/independencia_digital_justicia.md):

| Elemento | Contenido |
|----------|-----------|
| **Canal oficial** | Uso obligatorio de medios que dejen registro inmutable |
| **Integración en expediente** | Comunicaciones relevantes forman parte del expediente |
| **Trazabilidad** | Hash o registro de existencia y momento de cada comunicación |
| **Sanciones** | Destrucción de comunicaciones oficiales como falta grave |

Este documento amplía el marco de **integridad digital** más allá de la justicia, a toda la administración y a los procesos de participación.

## Mecanismos de Decisión (No Técnicos)

| Decisión | Quién decide | Criterio |
|----------|--------------|----------|
| Qué comunicaciones son "oficiales" | Normativa; definición en ley o reglamento | Impacto en derechos o bienes públicos |
| Dónde se almacena el registro | Administración competente | Custodia bajo control público |
| Cuándo aplicar sanciones | Órgano disciplinario / judicial | Gravedad de la destrucción o alteración |
| Excepciones (seguridad nacional, etc.) | Ley; con control judicial | Proporcionalidad; mínimo necesario |

## Riesgos

| Riesgo | Mitigación |
|--------|------------|
| **Sobrecomplejidad** | Empezar por lo esencial: comunicaciones de altos cargos y contratos |
| **Coste excesivo** | Evaluar coste por documento; alternativas más simples primero |
| **Falsa sensación de seguridad** | La tecnología ayuda, pero requiere procedimientos y cultura |
| **Dependencia de proveedor** | Código abierto; estándares; interoperabilidad |
| **Privacidad** | Solo registrar lo necesario; minimización de datos |

## Indicadores de Éxito

| Indicador | Objetivo |
|-----------|----------|
| % comunicaciones oficiales en canal auditable | Meta a 5 años: 100% de comunicaciones de altos cargos y 90% del total de comunicaciones oficiales en canales auditables. Hito intermedio año 2: 100% de contratos y licitaciones; año 3: 100% de actas de órganos colegiados |
| Casos de destrucción de pruebas perseguidos | Aumento de sanciones efectivas |
| Tiempo para verificar autenticidad de documento | Situación actual: peritajes manuales pueden tardar semanas o meses y no siempre son concluyentes. Objetivo: verificación automatizada en ≤5 segundos mediante consulta de hash/sello de tiempo en registro oficial (modelo: verificación de firma electrónica avanzada conforme a eIDAS) |
| Cobertura de contratos públicos con registro inmutable | Línea base actual: ~0% de contratos con registro inmutable automatizado (la Plataforma de Contratación del Estado publica pliegos pero sin garantía de inmutabilidad criptográfica). Meta: 50% de contratos de la AGE en año 2; 100% en año 4; extensión a CC.AA. y entidades locales en año 5 |

## Relación con Otros Documentos

| Documento | Vínculo |
|-----------|---------|
| [independencia_digital_justicia.md](../03_propuestas_institucionales/independencia_digital_justicia.md) | Comunicaciones inalterables en justicia |
| [blockchain_casos_uso.md](blockchain_casos_uso.md) | Trazabilidad con registros distribuidos |
| [corrupcion_e_impunidad.md](../02_problemas_estructurales/corrupcion_e_impunidad.md) | Destrucción de pruebas como síntoma |
| [democracia_liquida.md](democracia_liquida.md) | Integridad de votaciones |
| [seguridad_ciudadana_e_impunidad.md](../02_problemas_estructurales/seguridad_ciudadana_e_impunidad.md) | Registros en contextos de investigación |

---

*Documento en desarrollo. Prioridad: definir alcance mínimo (qué debe ser inmutable) antes que tecnología concreta.*
