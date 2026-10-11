# Próximos Pasos del Proyecto

*Última actualización: 11 octubre 2026*

> **¿Qué hago hoy?** Mira [`RUTA.md`](RUTA.md). Este documento es la lista larga de pendientes; la ruta y las prioridades están allí.

---

## Dónde estamos

- **Elecciones generales el 29 de noviembre.** No nos presentamos. El plan de campaña está en [plan_maestro_29N.md](plan_maestro_29N.md): usar la campaña para que la gente descubra el proyecto.
- **Una auditoría externa encontró datos mal en la web.** Al comparar Democracia Real con democracia21 ([informe](Democracia%20Real%20y%20democracia21%20comparación,%20lagunas%20y%20mejoras.md)) salieron tres cifras erróneas. Al revisarlas aparecieron dos más. Las cinco están corregidas.
- **La lección.** Los documentos se generaron con IA y nadie verificó las cifras contra la fuente. Generar es barato y verificar es lo escaso. Por eso la verificación pasa a ser el producto: es lo que nos diferencia y lo que demuestra para qué sirve la IA.
- **El proyecto lo sostiene una persona.** Hay que decirlo en la web. Es transparencia, no debilidad.

---

## Decisiones

| Decisión | Estado |
|----------|--------|
| No presentarse el 29N | Tomada |
| Nada se publica sin aprobación humana | Tomada |
| Ninguna cifra sin fuente primaria, fecha de consulta y estado de verificación | Tomada hoy |
| **Qué es Democracia Real** | Tomada (11 oct): estándar abierto y observatorio. El partido queda como opción, a decidir con datos a partir de enero. Aplicado en el README, la portada y el módulo 04 |
| Mensaje sobre la IA | Tomado (11 oct): *"La IA no decide y no es neutral. Por eso la obligamos a dejar rastro"*. Sustituye a "La IA no tiene intereses" |
| Constituir una asociación para tener un responsable legal de datos y una cuenta | Pendiente. Ver [Ideas.md](Ideas.md) |
| Cómo se llama todo esto frente a "Democracia 21" y "Democracia Real Ya" | Pendiente |

---

## Semana 1 (11-18 oct): integridad de datos — PRIORIDAD 0

Sin esto no tiene sentido nada de lo demás. En campaña, un dato mal publicado nos hunde.

### Hecho hoy

| Cifra | Antes | Ahora | Fuente |
|-------|-------|-------|--------|
| Legislación por decreto-ley | ~85% (sin fuente) | ~50% de las normas con rango de ley (2019-2026). XIV: 97 de 216 | Congreso y BOE, recuentos de Electomanía (2 oct 2026) y El Día (9 oct 2026) |
| Índice de Percepción de la Corrupción | 60/100 "CPI 2024", puesto 35 | 55/100, puesto 49 de 182, 17 de 27 en la UE (IPC 2025). Media UE 62, Dinamarca 89 | Transparency International, 10 feb 2026 |
| Vocales del CGPJ | "12 de 12" | 20 de 20, todos elegidos por Congreso y Senado | LOPJ, LO 3/2024 |
| Abstención media en generales | 43% | 28% (1977-2023), con máximos del 33-34% en 2016, 2019 y 2023 | Ministerio del Interior |
| Decretos-ley de la XIV legislatura | 65 frente a 83 leyes | 97 de 216 normas (65 era la XII) | Estadísticas del Congreso |

Ficheros tocados: `web/index.html`, `web/docs/radiografia.html`, `web/docs/01-diagnostico/index.html`, `web/docs/03-propuestas/index.html`, `web/i18n/es.json`, `01_diagnostico_del_sistema/` (README, separacion_poderes, indicadores_potencia_nacional), `03_propuestas_institucionales/ley_anti_decretos.md`, `08_investigacion_abierta/preguntas_abiertas.md`.

La Radiografía tiene ahora un aviso de revisión con la fe de erratas.

### Pendiente esta semana

- [ ] **Publicar las correcciones** (`git push`). La web no cambia hasta entonces.
- [ ] **Inventario de cifras.** Revisar todas las cifras de la portada, la Radiografía y los documentos que se usan en redes. Las que ya se ven sospechosas:

| Cifra | Dónde | Duda |
|-------|-------|------|
| 50.000 M€ / 4-5% del PIB en corrupción, "según Tribunal de Cuentas y Comisión Europea" | Portada, Radiografía, diagnóstico | No se encuentra ese estudio. Probablemente mezcla el sobrecoste de la contratación pública de la CNMC (2015) con otros estudios. Hay que buscar el original |
| 9 leyes de educación | Radiografía, diagnóstico web | El README del módulo 01 dice 8. Unificar y explicar el criterio (¿cuenta la LGE de 1970?) |
| "Soria vale 6 veces Madrid" | Redes, sistema_electoral.md | Ya marcada en el plan 29N. Recalcular con los datos de 2023 |
| 83,7% del sueldo para alquilar | Redes, vídeo | Falta fuente, año y colectivo exacto (¿jóvenes? ¿salario medio?) |
| 31.000 € de deuda por español, 104% del PIB | Portada, Radiografía | Actualizar con el último dato del Banco de España |
| 12 días para abrir empresa frente a 3 en Estonia | Portada, i18n | Fuente "Doing Business", que el Banco Mundial dejó de publicar en 2021 |
| 3,4 sobre 10 a los políticos según el CIS | Portada, vídeo | Localizar el barómetro exacto y la pregunta |
| Resto de tarjetas de la Radiografía (tasas, I+D, PISA, fibra, renovables...) | Radiografía | Sin verificar |

- [ ] **No usar en redes ni en el plan 29N ninguna cifra que no esté verificada.** Esto bloquea también los hilos previstos con "83,7%", "Soria 6x" y "8 leyes educativas" hasta que estén comprobados.
- [x] **Aviso en los documentos.** `viewer.html` muestra en todos los .md que son borradores con ayuda de IA y enlaza al registro de cifras.
- [x] **Sección "Quién hay detrás"** en la portada: una persona, sin partido ni candidatura, textos con IA, cómo se verifica y cómo se corrige.
- [ ] **RGPD antes de captar emails.** El plan 29N usa la lista de espera como KPI. La política de privacidad debe nombrar a un responsable identificable (una persona o una asociación) y explicar que apuntarse a un proyecto político puede revelar opiniones políticas. Mejor resolverlo antes de que crezca la lista.

---

## Semanas 2-3 (19 oct-1 nov): sistema de verificación v1

El objetivo es que una cifra sin verificar no pueda llegar a la web. Diseño completo en [Ideas.md](Ideas.md).

- [x] **Registro de cifras** [`web/data/cifras.json`](web/data/cifras.json): 6 cifras (5 verificadas por IA con fuente descargada y 1 pendiente, el coste de la corrupción). Cada una con fuente, fragmento literal, fecha de consulta, estado, fecha de revisión y los ficheros donde aparece.
- [ ] **Firmar la revisión humana** de las 5 cifras verificadas: leer la fuente y rellenar `revision_humana` con tu nombre o alias. Hasta entonces la web lo indica.
- [x] **La Radiografía lee del registro.** Cada tarjeta muestra "Verificada con fuente" o "Pendiente de verificar", y arriba hay un contador (hoy, 4 de 20).
- [ ] La portada, igual que la Radiografía.
- [x] **Script** [`scripts/check_cifras.py`](scripts/check_cifras.py): falla si una cifra verificada no tiene fuente o fragmento, o si el texto de la web no coincide con el registro (alguien cambió el número sin pasar por él). Avisa de enlaces caídos, revisiones vencidas y firmas humanas pendientes.
- [x] **GitHub Action** [`verificar-cifras.yml`](.github/workflows/verificar-cifras.yml) que lo ejecuta en cada push y pull request.
- [ ] Añadir al registro, una a una, el resto de cifras de la portada y la Radiografía a medida que se verifiquen.
- [ ] **Agentes.** Un extractor saca las afirmaciones. Un verificador descarga la fuente en esa ejecución y devuelve valor, enlace y fragmento, sin responder de memoria. Un segundo verificador, con otro modelo y sin ver el resultado del primero, repite la comprobación. Si no coinciden, pasa a revisión humana.
- [ ] **Revisión humana con firma.** El humano revisa las discrepancias, las cifras de titular y una muestra al azar. Su nombre o alias y la fecha quedan en el commit.
- [ ] **Página pública de erratas**, enlazada desde el pie de la web.

---

## Campaña 29N: qué mantener y qué recortar

**Decidido el 11 oct:** cuatro productos activos y el resto aplazado. El [plan maestro](plan_maestro_29N.md) ya está actualizado con fechas, agentes y cadencia.

| Prioridad | Producto | Por qué |
|-----------|----------|---------|
| 1 | **Lo que vale tu voto** (13 oct) | Es aritmética comprobable. Pasa por el registro de cifras antes de publicar |
| 2 | **Las reglas del juego, partido a partido** (nuevo, antes del 13 nov) | Matriz de partidos por estándares de integridad, con la cláusula exacta de cada estatuto. Solo usa documentos públicos, aplica la misma vara a todos y empieza por evaluarnos a nosotros. Ver [Ideas.md](Ideas.md) |
| 3 | **Decretómetro** | Aprovecha los datos verificados hoy. Se critica el mecanismo, no el contenido de cada decreto |
| 4 | **Promesómetro reducido** | 20-30 compromisos por partido con grupo propio, no todas las promesas. Antes, ver qué hacen ya Civio, Newtral y Maldita |
| Aplazar | Presentador IA, verificación de debates en directo, 52 notas de prensa local, fichas "Tu lista" | Mucho trabajo y mucho riesgo de error con una sola persona. Retomar si sobra tiempo |

Regla añadida al agente `red-team`: si la pieza contiene una cifra que no está en el registro como verificada, sale en rojo.

---

## Después del 29N (diciembre-enero)

- [ ] **«Qué propone cada partido y cómo lo haríamos nosotros»** (ver [Ideas.md](Ideas.md), sección 12): antes del 29N solo las capas «qué dice» y «qué se puede comprobar», que salen del Promesómetro. La capa de diseño propio (borrador con IA, con etiqueta) llega en diciembre como piloto con un solo tema, vivienda.
- [ ] **Web como auditor y espacio colaborativo** (ver [Ideas.md](Ideas.md), sección 11): zona «Consecuencias» (fichas de medida, con el método publicado antes) en diciembre, y zona «Propuestas» en GitHub Discussions en enero, con reglas de moderación escritas. Antes, las zonas «Reglas» y «Vigilar» (productos activos del plan 29N).
- [ ] Seguimiento de compromisos de los electos desde la sesión constitutiva (23 dic).
- [ ] **Decidir la identidad en enero** con datos: métricas, contactos, lista de espera y si alguien quiere sumarse.
- [ ] Si se decide, constituir una asociación (más barata y rápida que un partido) para tener personalidad jurídica.
- [ ] **Concretar las "X" del código ético propio**: tope salarial (X veces el SMI), años sin puertas giratorias (el README dice 5) y porcentaje de aportación. Mientras estén en blanco, en nuestra propia matriz salimos "sin concretar".
- [ ] Separar en los estatutos base la representación legal (que la ley exige) del poder de decisión: cargos con poder acotado, rotación y límite de mandatos, y decisiones en manos de los afiliados.
- [ ] Licencia de software (AGPL o similar) para el código, y mantener CC BY-SA para los textos.
- [ ] `GOVERNANCE.md`: quién fusiona cambios, cómo se resuelven desacuerdos y cómo se corrige un dato.
- [ ] Propuestas completas, con coste, de vivienda y modelo territorial.
- [ ] Verificar el nombre en el Registro de Partidos (no esperar a la constitución legal).

---

## Pendiente de la etapa anterior (visibilidad)

- [ ] Fijar el vídeo largo como destacado en YouTube Studio.
- [ ] Perfiles en X e Instagram y enlaces en `index.html` (parte ya cubierta por el plan 29N).
- [ ] Contactos (Rubén Gisbert, Democracia Real Ya, democraciareal.com). Antes de escribir a nadie, que las cifras que vean estén verificadas.
- [ ] Hilos con datos del vídeo: **bloqueados** hasta verificar cada cifra.

## Pendiente técnico (no urgente)

| Tarea | Prioridad |
|-------|-----------|
| Re-indexar en Azure AI Search los documentos corregidos (el chat sigue usando las cifras viejas) | **Alta**, tras el push |
| Completar `[PENDIENTE]` en módulos 03-08 | Media |
| Subir podcasts a Azure Blob y configurar `media.democraciareal.es` | Media |
| Revisar letras del álbum con cifras antiguas ("65 veces", "puesto 46") | Baja: son obras grabadas; basta una nota en la web |
| Modo karaoke-lite en el reproductor | Baja |
| Imágenes representativas por sección | Baja |

## Pendiente legal

- [ ] Consulta a la Junta Electoral o a un abogado electoral antes del 13 nov (ver plan 29N).
- [ ] Consulta sobre el riesgo de vulnerar el derecho al honor al evaluar a partidos y cargos, antes de publicar la matriz.
- [ ] Responsable de datos identificable (ver semana 1).
- [ ] Fase de partido (solo si se decide en enero): promotores, estatutos definitivos (LO 6/2002), acta notarial e inscripción.

---

## Infraestructura activa

| Servicio | Recurso | Estado |
|----------|---------|--------|
| Azure SWA | witty-pebble... | ✅ |
| Azure Function | democracia-chat-function | ✅ |
| Azure AI Foundry | agentedemocracia | ✅ |
| Azure AI Search | democracia-docs | ✅ |
| Cloudflare | DNS democraciareal.es | ✅ |
| GitHub | democracia-real/proyecto | ✅ |

---

## Comandos útiles

```bash
# Re-indexar documentos
cd scripts
python index_to_azure_search.py

# Desplegar Azure Function
cd function-app
func azure functionapp publish democracia-chat-function

# Lanzar en local
npx serve web -p 3000
```
