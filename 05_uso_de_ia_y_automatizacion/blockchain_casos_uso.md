# Blockchain: Para Qué Usarlo (Casos de Uso Definidos)

## Resumen

Blockchain no es una solución para todo. Debe usarse **solo donde aporte valor claro**: trazabilidad inmutable, no repudio, descentralización de la confianza. Este documento define **para qué sí** y **para qué no** en el ámbito público y del proyecto.

## Principio

No usar blockchain por moda. Usarlo cuando:
- Hace falta **registro inmutable** que nadie (ni la administración) pueda borrar o alterar sin dejar rastro.
- Hace falta **prueba de existencia** o de secuencia en el tiempo.
- Hace falta **descentralizar la confianza** (varios actores que no se fían uno del otro).
- El coste y la complejidad están justificados por el beneficio.

## Casos de Uso Donde SÍ Tiene Sentido

### 1. Trazabilidad de Decisiones y Comunicaciones Oficiales

| Objetivo | Cómo |
|----------|------|
| Evitar "se borraron los WhatsApps" | Hash de comunicaciones oficiales (y de decisiones) registrado en blockchain; el contenido puede estar en sistema tradicional, pero el hash garantiza que no se ha alterado después. |
| Auditoría posterior | Cualquier ciudadano o juez puede comprobar que un documento es el mismo que se registró en una fecha. |
| No repudio | Quien firmó o emitió no puede negar la existencia ni el momento. |

**Relación con corrupción e impunidad**: Ver [corrupcion_e_impunidad](../02_problemas_estructurales/corrupcion_e_impunidad.md). Blockchain como herramienta para preservar pruebas.

### 2. Datos de Salud: Propiedad del Paciente y Portabilidad

| Objetivo | Cómo |
|----------|------|
| **El dueño de los datos es el paciente** | Consentimientos y autorizaciones de acceso registrados de forma inmutable; el paciente puede demostrar qué autorizó y cuándo. |
| Portabilidad | Registro de qué centro/empresa tiene copia de qué datos y con qué permiso; el paciente puede revocar y llevar sus datos a otro proveedor. |
| Auditoría de accesos | Quién accedió a qué dato y cuándo (logs con hash en blockchain para que no se puedan borrar). |

No hace falta meter el historial clínico completo en blockchain (sería caro e ineficiente); sí **metadatos, consentimientos y pruebas de acceso** para que el paciente tenga control y trazabilidad.

Ver [sanidad](../02_problemas_estructurales/sanidad.md): "El dueño de los datos es el paciente".

### 3. Votaciones y Democracia Líquida

| Objetivo | Cómo |
|----------|------|
| Voto verificable sin revelar el voto | Esquemas de compromiso (commitment) o pruebas de conocimiento cero; el votante puede comprobar que su voto se contó sin que nadie sepa a qué opción votó. |
| Actas inmutables | Resultados y agregados registrados de forma que no se puedan manipular después. |
| Delegación de voto | Registro de delegaciones y revocaciones con marca temporal; transparencia del proceso. |

Referencia: [README](README.md) del módulo 05, democracia líquida.

### 4. Registro de Subvenciones y Contratos Públicos

| Objetivo | Cómo |
|----------|------|
| Transparencia | Hashes de resoluciones de adjudicación, contratos y pagos; publicación en blockchain para que cualquiera pueda verificar que no se han alterado. |
| Lucha contra fraude | Cruce con otros datos (IA) para detectar patrones; el registro inmutable da base de prueba. |

### 5. Titularidad y Procedencia (Cuando Aplique)

| Objetivo | Cómo |
|----------|------|
| Títulos académicos o certificados | Emisión con hash en blockchain; el empleador o otra administración puede verificar autenticidad sin depender solo del emisor. |
| Cadena de custodia de pruebas | En procesos judiciales o administrativos, registro de quién tuvo acceso a una prueba y cuándo; reduce manipulación. |

## Casos Donde NO Tiene Sentido (o Hay Alternativas Mejores)

| Caso | Por qué no blockchain |
|------|------------------------|
| Almacenar grandes volúmenes de datos (historias clínicas completas, vídeos) | Caro, lento; mejor bases de datos tradicionales con integridad (firmas, auditoría). |
| Sustituir bases de datos internas que ya funcionan y no requieren no repudio público | Añade complejidad sin beneficio claro. |
| "Blockchain para todo" sin problema concreto | Solución buscando problema. |
| Cuando la ley exige borrado (derecho al olvido) | Blockchain inmutable choca con el borrado; usar solo para metadatos o hashes, no para datos personales borrables. |

## Resumen de Criterios

| Usar blockchain cuando | No usar cuando |
|------------------------|-----------------|
| Hace falta inmutabilidad y prueba ante terceros | Solo se necesita confianza interna |
| Varios actores que no se fían entre sí | Un solo actor controla el sistema |
| Trazabilidad a largo plazo (años) | Datos temporales o que deben borrarse |
| Consentimientos, títulos, actas, hashes de pruebas | Grandes ficheros o datos que cambian a menudo |

## Relación con Otros Documentos

- **Sanidad**: Paciente dueño de datos, consentimientos y accesos → [sanidad.md](../02_problemas_estructurales/sanidad.md).
- **Corrupción e impunidad**: Comunicaciones y decisiones que no se puedan borrar → [corrupcion_e_impunidad](../02_problemas_estructurales/corrupcion_e_impunidad.md).
- **IA y gobernanza**: Integridad digital → [README](README.md) del módulo 05.

---

*Documento vivo: se revisará según avance técnico y normativo (MiCA, eIDAS, etc.).*
