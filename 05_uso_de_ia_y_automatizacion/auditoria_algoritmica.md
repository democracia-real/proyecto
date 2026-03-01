# Auditoría Algorítmica: IA contra la Corrupción

## Objetivo

Utilizar la Inteligencia Artificial como **auditor incansable y neutral** de la gestión pública, detectando patrones de corrupción, fraude e ineficiencia de manera preventiva.

## El Problema que Resuelve

| Auditoría Tradicional | Auditoría con IA |
|----------------------|------------------|
| Posterior al hecho | Preventiva y en tiempo real |
| Muestral | Exhaustiva (100% de transacciones) |
| Lenta | Instantánea |
| Costosa en RRHH | Escalable |
| Subjetiva | Objetiva y reproducible |
| Fácil de eludir | Detecta patrones ocultos |

## Aplicaciones Concretas

### 1. Monitorización de Contratación Pública

#### Detección de Colusión

| Patrón | Indicador | Alerta |
|--------|-----------|--------|
| Rotación de ganadores | Mismas empresas ganan en turnos | Posible acuerdo |
| Ofertas coordinadas | Diferencias de precio sospechosamente regulares | Bid rigging |
| Retiradas estratégicas | Empresas se retiran para que gane otra | Colusión |
| Subcontratación circular | El perdedor subcontratado por ganador | Fraude |

#### Detección de Licitaciones a Medida

| Patrón | Indicador |
|--------|-----------|
| Requisitos únicos | Solo una empresa puede cumplirlos |
| Plazos imposibles | Solo quien ya tiene el trabajo puede presentarse |
| Especificaciones marca | Se pide producto de marca específica |
| Experiencia previa excesiva | Requisitos que solo cumple el incumbente |

#### Detección de Conflictos de Interés

| Cruce de Datos | Alerta |
|----------------|--------|
| Funcionario decisor - Empresa adjudicataria | Vínculos familiares, societarios |
| Político - Contrato posterior | Puerta giratoria potencial |
| Modificaciones de contrato | Benefician sistemáticamente a misma empresa |

### 2. Auditoría de Gasto Público

#### Análisis de Facturas

| Anomalía | Detección |
|----------|-----------|
| Duplicidad | Misma factura pagada dos veces |
| Fraccionamiento | Dividir para evitar controles |
| Sobreprecio | Comparar con precios de mercado |
| Proveedores fantasma | Empresas sin actividad real |
| Pagos a cuentas extranjeras | Sin justificación |

#### Análisis de Subvenciones

| Anomalía | Detección |
|----------|-----------|
| Beneficiarios ficticios | Personas sin actividad real |
| Duplicidad de ayudas | Misma persona/empresa, múltiples ayudas |
| Incumplimiento requisitos | Comparar declarado vs real |
| Desvío de fondos | Uso diferente al declarado |

### 3. Integridad de Comunicaciones

#### Preservación de Pruebas

| Problema | Solución IA |
|----------|-------------|
| Borrado de WhatsApp | Registro inmutable de metadatos |
| Destrucción de emails | Archivo automático en blockchain |
| Manipulación de documentos | Hash y timestamping |
| Versiones alteradas | Comparación automática |

## Caso de Referencia: Sistema SALER

### Qué es SALER

El **Sistema de Alertas Tempranas** de la Agencia Valenciana Antifraude:

| Característica | Descripción |
|----------------|-------------|
| Función | Detectar riesgos de corrupción en contratación |
| Datos | Cruza información de múltiples fuentes |
| Alertas | Señala conflictos de interés antes del daño |
| Alcance | Contratación pública valenciana |
| Tecnología | Big data y algoritmos de detección |

### Resultados

- **Alertas y denuncias:** En 2023, la Agencia Valenciana Antifraude (AVAF) recibió 556 denuncias (+22,73% respecto a 2022). El 90% se presentaron a través del buzón de denuncias; el 40% versaron sobre recursos humanos (procesos selectivos) y el 56% se concentraron en la administración local (Fuente: Resumen Ejecutivo Memoria AVAF 2023)
- **Casos detectados e investigados:** Del total de denuncias, el 16% derivaron en investigación formal. Se dictaron 65 resoluciones finales de investigación que finalizaron 93 expedientes, y 21 resoluciones de incumplimiento a 22 administraciones. La Agencia fue designada perito judicial en 8 procedimientos (Fuente: Memoria AVAF 2023)
- **Ahorro estimado:** El importe total recuperable en 2023 ascendió a **5.145.193 euros**, demostrando el retorno económico de la prevención y detección de fraude (Fuente: Memoria AVAF 2023)

### Lecciones

1. Es posible implementar en España
2. Requiere voluntad política
3. Complementa, no sustituye, a la investigación humana
4. Efecto disuasorio: saber que se vigila reduce fraude

## Arquitectura Técnica Propuesta

### Fuentes de Datos

```
┌─────────────────────────────────────────────────┐
│                 FUENTES DE DATOS                │
├─────────────────────────────────────────────────┤
│ • Plataforma de Contratación del Estado         │
│ • Registro Mercantil                            │
│ • Base de Datos Nacional de Subvenciones        │
│ • Catastro                                      │
│ • Declaraciones de bienes                       │
│ • Agencia Tributaria (con autorización)         │
│ • Registros de propiedad                        │
│ • BOE y boletines oficiales                     │
│ • Redes sociales (públicas)                     │
└─────────────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────────────┐
│            MOTOR DE ANÁLISIS (IA)               │
├─────────────────────────────────────────────────┤
│ • Cruce de datos                                │
│ • Detección de patrones                         │
│ • Análisis de redes (grafos)                    │
│ • Scoring de riesgo                             │
│ • Machine learning para nuevos patrones         │
└─────────────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────────────┐
│               ALERTAS Y ACCIÓN                  │
├─────────────────────────────────────────────────┤
│ • Dashboard de riesgos                          │
│ • Alertas a órganos de control                  │
│ • Informes para Fiscalía                        │
│ • Publicación de indicadores                    │
└─────────────────────────────────────────────────┘
```

### Algoritmos Clave

| Tipo | Aplicación |
|------|------------|
| **Análisis de grafos** | Detectar redes de relaciones ocultas |
| **Clustering** | Agrupar comportamientos similares |
| **Detección de anomalías** | Identificar outliers sospechosos |
| **NLP** | Analizar pliegos y contratos |
| **Time series** | Detectar cambios de patrón |
| **Reglas de negocio** | Verificar cumplimiento normativo |

## Implementación Propuesta

### Fase 1: Piloto Sectorial

| Elemento | Propuesta |
|----------|-----------|
| Ámbito | Una comunidad autónoma o ministerio |
| Foco | Contratación pública |
| Duración | 12 meses |
| Evaluación | Alertas generadas, casos confirmados |

### Fase 2: Expansión Nacional

| Elemento | Propuesta |
|----------|-----------|
| Ámbito | Administración General del Estado |
| Foco | Contratación + subvenciones |
| Integración | Con Tribunal de Cuentas, Fiscalía |

### Fase 3: Sistema Integral

| Elemento | Propuesta |
|----------|-----------|
| Ámbito | Todas las administraciones |
| Foco | Toda la gestión pública |
| Interoperabilidad | Conexión entre sistemas autonómicos |

## Gobernanza del Sistema

### Órgano de Supervisión

| Elemento | Propuesta |
|----------|-----------|
| Independencia | No dependiente del ejecutivo |
| Composición | Técnicos, juristas, sociedad civil |
| Función | Supervisar uso y evitar abusos |
| Rendición | Al Parlamento |

### Garantías

| Garantía | Mecanismo |
|----------|-----------|
| Privacidad | Solo datos necesarios, anonimización |
| Debido proceso | Alerta ≠ acusación |
| Transparencia | Metodología pública |
| Recurso | Posibilidad de impugnar alertas falsas |
| Auditoría | Del propio sistema de auditoría |

## Riesgos y Mitigaciones

| Riesgo | Mitigación |
|--------|------------|
| Falsos positivos | Validación humana obligatoria |
| Uso político | Independencia del órgano gestor |
| Elusión sofisticada | Actualización continua de algoritmos |
| Resistencia institucional | Apoyo político al máximo nivel |
| Privacidad | Minimización de datos, GDPR |

## Indicadores de Éxito

| Indicador | Medición |
|-----------|----------|
| Alertas generadas | Número y categoría |
| Alertas confirmadas | % que deriva en investigación |
| Casos judicializados | A partir de alertas |
| Ahorro estimado | Por fraude evitado |
| Efecto disuasorio | Reducción de patrones de riesgo |
| Percepción ciudadana | Encuestas de confianza |

## Referencias

- Agencia Valenciana Antifraude - SALER
- OECD - AI in fighting corruption
- Open Contracting Partnership
- Transparency International - Open Data
- Comisión Europea - Control de fondos

---

*Documento en desarrollo. Contribuciones bienvenidas.*
