# Financiación de Partidos Políticos

## Resumen

Marco legal de la **financiación** de partidos políticos en España y cómo este proyecto lo aborda con principios de **transparencia radical**, **sin donaciones empresariales** y **micro-donaciones** ciudadanas.

> *"La coherencia entre lo que decimos y lo que hacemos es la base de nuestra credibilidad."* — [codigo_etico.md](../04_modelo_organizativo_partido/codigo_etico.md)

## Marco Legal Actual

| Norma | Contenido |
|-------|-----------|
| **LO 8/2007** | Ley de Financiación de Partidos Políticos |
| **LO 5/2012** | Reforma de la LO 8/2007 |
| **LO 3/2015** | Control de actividad económico-financiera; modifica LO 8/2007 |
| **LOREG (LO 5/1985)** | Financiación electoral |
| **LO 2/1982** | Tribunal de Cuentas (control) |

## Tipos de Financiación

### Pública

| Fuente | Condiciones |
|--------|------------|
| **Subvención estatal** | Por votos y escaños obtenidos en elecciones al Congreso; cuantía fijada anualmente en PGE (~65-80 M€/año total para todos los partidos) |
| **Subvención electoral** | Por gastos de campaña; reintegro según resultados |
| **Subvenciones autonómicas** | Según normativa de cada CCAA |
| **Límite** | Subvenciones >12 M€/año requieren acuerdo del Consejo de Ministros |

### Privada

| Fuente | Límites / Condiciones |
|--------|------------------------|
| **Cuotas de afiliados** | Sin límite legal |
| **Donaciones de personas físicas** | Máximo **50.000 €/año** por donante; nominativas, irrevocables y no finalistas; si >25.000€ se notifica al Tribunal de Cuentas (LO 8/2007 mod. LO 3/2015) |
| **Donaciones de personas jurídicas** | Prohibidas desde 2012 (LO 5/2012) |
| **Herencia y legados** | Sin límite legal expreso; sujetos a las obligaciones generales de contabilidad y declaración ante el Tribunal de Cuentas |
| **Rendimientos de actividades** | Actividades propias del partido |
| **Créditos** | Solo entidades financieras que operan legalmente en España; sin límite cuantitativo legal, pero condiciones deben ser de mercado; declaración obligatoria al Tribunal de Cuentas |

### Prohibiciones

| Prohibido | Norma |
|-----------|-------|
| Donaciones de empresas, fundaciones, sindicatos | LO 5/2012 |
| Donaciones anónimas | Todas las donaciones deben ser nominativas; las anónimas están prohibidas (LO 8/2007, art. 5) |
| Donaciones de gobiernos extranjeros | LO 8/2007 |
| Financiación ilegal | Sanciones; posible ilegalización |

## Obligaciones de Transparencia (LO 8/2007, LO 3/2015)

| Obligación | Plazo / Detalle |
|------------|-----------------|
| **Cuentas anuales al Tribunal de Cuentas** | Antes del 30 de junio del año siguiente |
| **Publicación en web** | Balance, cuenta de resultados, memoria |
| **Donaciones >25.000€** | Identidad del donante pública |
| **Créditos pendientes** | Entidad, importe, tipo de interés, plazo |
| **Subvenciones recibidas** | Cuantía y origen |
| **Estadillos de gastos electorales** | Según LOREG |

## Cómo el Proyecto se Diferencia

### Principios del Proyecto

| Principio | Aplicación |
|-----------|------------|
| **Transparencia radical** | Publicar todo lo que la ley permite y más; gastos en tiempo real |
| **Sin donaciones empresariales** | Ya prohibidas por ley; el proyecto las rechaza explícitamente |
| **Micro-donaciones ciudadanas** | Priorizar muchas donaciones pequeñas sobre pocas grandes |
| **Límite por donante** | Límite interno propuesto: **5.000 €/año** (10x inferior al legal de 50.000€); priorizar base amplia de micro-donaciones |
| **Presupuestos versionados** | Como commits de Git: trazables, auditable |
| **Portal de transparencia** | Dashboard público de ingresos y gastos |

### Comparativa

| Aspecto | Marco legal | Proyecto Democracia Real |
|---------|-------------|--------------------------|
| Donaciones empresas | Prohibidas | Rechazo explícito; principio en estatutos |
| Transparencia mínima | Cuentas anuales; donaciones >25.000€ | Todo público; tiempo real |
| Límite donaciones | 50.000 €/año (LO 8/2007) | Límite interno: 5.000 €/año |
| Auditoría | Tribunal de Cuentas | + Auditoría interna; posible IA para detección anomalías |
| Cuotas afiliados | Sin regulación específica | Cuotas accesibles; posible escala por ingresos |

## Mecanismos de Decisión (No Técnicos)

| Decisión | Criterio |
|----------|----------|
| Aceptar o rechazar donación | Si supera X€ o proviene de fuente dudosa, rechazar |
| Publicar gastos | Todo gasto >X€ con justificación pública |
| Uso de subvenciones públicas | Solo para fines estatutarios; rendición de cuentas |
| Cuota de afiliados | Propuesta: escala progresiva de **5-30 €/mes** según ingresos declarados; exención para desempleados y estudiantes; cuota solidaria de 1€/mes para simpatizantes |

## Relación con Código Ético

Según [codigo_etico.md](../04_modelo_organizativo_partido/codigo_etico.md):

| Compromiso | Aplicación a financiación |
|------------|---------------------------|
| **Integridad** | No ocultar ingresos; no mentir sobre origen de fondos |
| **Transparencia** | Publicar toda información no protegida por ley |
| **Responsabilidad** | Asumir consecuencias de mal uso de fondos |
| **Servicio público** | El dinero del partido es para el proyecto, no beneficio personal |
| **Para cargos públicos** | Aportación % del salario al partido; límite salarial |

### Prohibiciones del Código

| Conducta | Consecuencia |
|----------|--------------|
| Uso de fondos para fines personales | Expulsión y acciones legales |
| Participar en financiación ilegal | Expulsión inmediata |
| No declarar conflictos de interés | Sanción grave |

## Riesgos

| Riesgo | Mitigación |
|--------|------------|
| Dependencia de pocos donantes | Límite por donante; diversificar base |
| Presión de donantes | Principio: donaciones sin condiciones |
| Incumplimiento de plazos | Procesos internos; alertas; responsable económico dedicado |
| Errores contables | Formación; asesoría; posible auditoría algorítmica |

## Indicadores

| Indicador | Objetivo |
|-----------|----------|
| % ingresos de cuotas vs. donaciones | Objetivo: **≥60% de cuotas** sobre ingresos privados totales; maximizar autonomía respecto a donantes individuales |
| Número de donantes únicos | Maximizar |
| Tiempo entre gasto y publicación | **≤7 días** para gastos >500€; resumen mensual para menores |
| Incidencias con Tribunal de Cuentas | 0 |

## Relación con Otros Documentos

| Documento | Vínculo |
|-----------|---------|
| [codigo_etico.md](../04_modelo_organizativo_partido/codigo_etico.md) | Principios de conducta; prohibiciones |
| [ley_organica_6_2002.md](ley_organica_6_2002.md) | Obligaciones de organización y contabilidad |
| [requisitos_inscripcion.md](requisitos_inscripcion.md) | Responsable económico desde inscripción |
| [timeline_constitucion.md](timeline_constitucion.md) | Cuenta bancaria, CIF en Fase 1-2 |
| [portal_transparencia.md](../07_web_publica_y_transparencia/portal_transparencia.md) | Publicación de finanzas |
| [ia_supervisada_presupuestos.md](../05_uso_de_ia_y_automatizacion/ia_supervisada_presupuestos.md) | Auditoría de gastos |

## Referencias Normativas

| Norma | Enlace |
|-------|--------|
| LO 8/2007 | [BOE](https://www.boe.es/buscar/act.php?id=BOE-A-2007-12364) |
| LO 3/2015 | [BOE](https://www.boe.es/buscar/act.php?id=BOE-A-2015-3650) |
| LO 5/2012 | [BOE](https://www.boe.es/buscar/act.php?id=BOE-A-2012-13028) |

---

*Documento en desarrollo. Límites legales y política interna de donaciones completados (feb. 2026). Contribuciones bienvenidas.*
