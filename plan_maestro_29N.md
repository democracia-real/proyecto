# Plan Maestro 29N — La campaña que se puede auditar

*Creado: 6 octubre 2026 · Elecciones generales: domingo 29 de noviembre de 2026*

> **Orden y prioridades: [`RUTA.md`](RUTA.md).** Este documento es el detalle de la campaña.
>
> **Actualización 11 oct.** Una revisión encontró cinco cifras erróneas en la web, ya corregidas. Desde hoy, ninguna pieza de campaña usa una cifra que no esté en el [registro de cifras](web/data/cifras.json) como verificada.
>
> **Decisión 11 oct: cuatro productos, no trece.** Una persona no puede construir y revisar 13 cosas sin cometer errores. Se quedan:
> 1. **Lo que vale tu voto**
> 2. **Las reglas del juego, partido a partido** (nuevo; absorbe el checklist de reglas)
> 3. **Decretómetro**
> 4. **Promesómetro reducido**
>
> El resto queda **aplazado** y solo se retoma si los cuatro están publicados y verificados. Ver [Ideas.md](Ideas.md).

---

## La idea en una frase

**No nos presentamos el 29N. Usamos la campaña para que la gente descubra el proyecto.** La auditoría (datos, BOE, decretos, programas) es el **gancho**: piezas que otros comparten y que llevan a democraciareal.es. El **destino** es otra cosa: el diagnóstico, las propuestas en GitHub y el vídeo de nueve minutos que explica por qué las reglas hay que rediseñarlas.

> *No pedimos tu voto. Te enseñamos lo que vale — y qué proponemos cambiar.*

No buscamos escaños en noviembre. Buscamos **remover conciencias y captar gente** (lista de email, colaboradores, conversaciones) mientras todo el país habla de política. Sin audiencia previa, mandar diez preguntas a los partidos no sirve de nada; lo que sí sirve es publicar cosas que **cualquier ciudadano** puede usar sin que nadie nos conteste.

---

## Embudo (29N → proyecto)

```
Reply / dato / BOE / debate
        ↓
democraciareal.es → vídeo YouTube (9 min) + 3 propuestas concretas
        ↓
Documentación (GitHub) + chat
        ↓
Email «Avisadme» (sin pedir afiliación ni voto)
```

Cada producto electoral debe terminar en **una URL nuestra** y, cuando encaje, en **«mira el vídeo»** o **«lee la propuesta X»** (reforma electoral, CGPJ, decretos). La lista de espera es el KPI de captación; las visualizaciones del vídeo en web, el de profundidad.

---

## Punto de partida (sin maquillaje)

| Hecho | Consecuencia |
|-------|--------------|
| Democracia Real **no está inscrita** en el Registro de Partidos | No puede presentar listas. El plazo de candidaturas cierra el 26 de octubre. |
| Cuenta de X con ~2 seguidores, lista de espera casi vacía | El contenido propio no llega a nadie. Hace falta **piezas que otros quieran usar**. |
| Meta y Google **no aceptan publicidad política en la UE** desde octubre de 2025 (Reglamento UE 2024/900) | No hay atajo pagado. Todo es orgánico. |
| Hay infraestructura: web, chat con RAG, `news-watcher`, `x-target-watcher`, borradores por Telegram | Se amplía lo que existe. No se empieza de cero. |
| Una persona, poco tiempo | La IA tiene que hacer el 90 % del trabajo pesado. El humano, el 100 % de las decisiones. |

---

## Calendario oficial

Fuente: Real Decreto 806/2026 (BOE 6 oct) y calendario de la Junta Electoral Central.

| Fecha | Hito | Qué hacemos |
|-------|------|-------------|
| **6 oct** | Disolución y convocatoria. El Gobierno reaprueba los decretos de vivienda | Arranque del plan |
| 16 oct | Último día para comunicar coaliciones | — |
| 18 oct | — | Estatutos de todos los partidos descargados (matriz) |
| 21–26 oct | Presentación de candidaturas | — |
| 28 oct | BOE publica las candidaturas presentadas | («Tu lista», aplazado) |
| 2 nov | Proclamación de candidaturas | — |
| 3 nov | BOE publica las candidaturas proclamadas | Envío de la réplica a cada partido (matriz) |
| **10 nov** | — | Publicación de «Las reglas del juego, partido a partido» |
| Sin fecha | La Diputación Permanente convalida o deroga los nuevos decretos (30 días desde su publicación) | Decretómetro |
| **13–27 nov** | Campaña electoral | Cadencia diaria (ver más abajo) |
| **24–28 nov** | Prohibido publicar o difundir sondeos | Ni encuestas propias ni compartir ajenas |
| **28 nov** | Jornada de reflexión | Silencio total |
| **29 nov** | Votación | Noche electoral: «el otro Congreso» |
| 23 dic | Sesión constitutiva de las Cortes | Arranca el seguimiento de promesas de los electos |

---

## Líneas rojas

Esto no es opcional. Es lo que nos diferencia de la propaganda y lo que nos protege.

| No haremos nunca | Por qué |
|------------------|---------|
| Cuentas falsas, perfiles que se hagan pasar por personas, granjas de bots | Es astroturfing. Viola las normas de X y destruye la credibilidad del proyecto entero. |
| Respuestas automáticas no solicitadas a terceros | Las reglas de automatización de X lo prohíben. Toda respuesta la publica un humano. |
| Deepfakes o voces clonadas de personas reales | Engaño. Además, el Reglamento europeo de IA (art. 50, aplicable desde agosto de 2026) obliga a etiquetar el contenido sintético. |
| Pedir el voto para o contra ninguna candidatura | No somos candidatura. Hacemos información y propuesta institucional, no captación de votos. |
| Publicar o compartir sondeos del 24 al 28 de noviembre | Prohibido por la LOREG en el calendario de la JEC. |
| Publicar nada el 28 de noviembre | Jornada de reflexión. |
| Microsegmentar con datos personales | Lo prohíbe el Reglamento UE 2024/900. Tampoco lo necesitamos. |
| Una cifra sin fuente primaria enlazable | Regla de siempre. En campaña, un error nos hunde. |
| Nombres de víctimas o de particulares | Regla de siempre (caso Maricarmen). |
| Publicar algo que no haya aprobado un humano | Es el corazón del proyecto: [etica_y_supervision_humana.md](05_uso_de_ia_y_automatizacion/etica_y_supervision_humana.md). |

**Consulta legal antes del 13 de noviembre:** confirmar con un abogado electoral, o por escrito a la Junta Electoral Central, que la actividad de un proyecto no candidato (información, verificación, comparativa de programas) no se considera campaña. Guardar la respuesta en `06_hoja_de_ruta_legal/`.

---

## Qué hace la IA mejor que lo que se hace hoy

| Hoy | Con nuestros agentes |
|-----|----------------------|
| Nadie lee los programas: cientos de páginas, publicados tarde | Cada promesa extraída, clasificada y comparada con el programa anterior el mismo día |
| Una verificación de debate tarda horas o días | Afirmación verificada, con fuente, en 10–15 minutos tras decirla |
| La campaña es nacional; 52 provincias, ninguna mirada | 52 fichas provinciales y 52 notas de prensa local personalizadas |
| Las promesas se olvidan el lunes 30 | Base abierta de promesas que se sigue toda la legislatura |
| «Tu voto vale lo mismo» se da por hecho | Cálculo provincia a provincia de cuántos votos cuesta un escaño |
| Las listas las hace el partido y nadie mira quién va | Lectura automática del BOE: quién repite, desde cuándo, en qué puesto |
| La disciplina de voto se intuye | Medida con las votaciones nominales de la legislatura |

---

## Los productos

Cada producto tiene que funcionar solo. Un periodista o un creador debe poder usarlo sin conocernos. Así se gana el alcance que no tenemos.

| Estado | Productos |
|--------|-----------|
| **Activos** | 1. Lo que vale tu voto · 3. Decretómetro · 5. Promesómetro reducido · 6. Las reglas del juego, partido a partido |
| **Aplazados** | 2. Disciplina de voto · 4. Tu lista · 7. Verificación de debates · 8. Pregúntale a los programas · 9. Presentador IA · 10. El otro Congreso |

Los aplazados se mantienen descritos abajo para retomarlos después del 29N o si sobra tiempo. *El otro Congreso* es el primero en la cola, porque reutiliza el cálculo de *Lo que vale tu voto*.

### 1. Lo que vale tu voto (ACTIVO · listo antes del 13 de octubre)

- **Qué es:** por cada provincia, cuántos votos hicieron falta por escaño en 2023 y cuántos votos no eligieron a nadie.
- **Datos:** resultados oficiales de 2023 (infoelectoral.interior.gob.es) y reparto de escaños del RD 806/2026.
- **IA:** calcula D'Hondt, genera la ficha y el texto. Un humano revisa una muestra de 5 provincias contra el dato oficial.
- **Por qué levanta ampollas:** es aritmética, no opinión, y se puede comprobar. Revisar con este cálculo la cifra «Soria vale 6 Madrid» de [sistema_electoral.md](01_diagnostico_del_sistema/sistema_electoral.md) antes de volver a usarla.

### 2. Disciplina de voto (APLAZADO)

- **Qué es:** de los diputados de la legislatura que acaba, cuántos votaron alguna vez distinto de su grupo.
- **Datos:** votaciones nominales en datos abiertos del Congreso.
- **IA:** descarga, cruza diputado y grupo, calcula. Un humano valida la metodología y la publica en GitHub antes que el resultado.
- **Gancho:** «Elegiste una lista. ¿Cuántas veces votó alguien de esa lista distinto de lo que mandaba el partido?»

### 3. Decretómetro (ACTIVO · desde el 15 de octubre)

- **Qué es:** reales decretos-ley de la legislatura: aprobados, convalidados, derogados y reaprobados tras la disolución.
- **Caso de arranque:** el viernes 2 de octubre el Congreso tumbó los dos decretos de vivienda (178–172 y 184–166). El 6 de octubre se reaprobaron para la Diputación Permanente.
- **Enlaza con:** [ley_anti_decretos.md](03_propuestas_institucionales/ley_anti_decretos.md).
- **Regla:** se critica el mecanismo, no la vivienda. Vale igual para cualquier Gobierno.
- **Datos de partida (verificados el 11 oct):** XIV legislatura, 97 decretos-ley de 216 normas con rango de ley; XV, más de la mitad y 11 derogados; 747 decretos-ley desde 1977. Ver `decretos-ley-*` en el registro de cifras. Pendiente: recuento propio sobre el BOE, que es justo lo que alimenta este producto.

### 4. Tu lista (APLAZADO)

- **Qué es:** una ficha por provincia con las candidaturas publicadas en el BOE. Quién repite, desde qué legislatura y en qué puesto.
- **IA:** lee el BOE, normaliza nombres y los cruza con los diputados de legislaturas anteriores.
- **Humano:** revisa cada ficha antes de publicarla. Solo datos públicos y sin adjetivos sobre personas.
- **Gancho:** «Tu papeleta del Congreso ya viene ordenada. Esta es la lista y esto es lo que puedes cambiar: nada.»
- **Complemento:** «En el Senado sí eliges personas, hasta tres y de partidos distintos.» Explicación neutral de cómo funciona.

### 5. Promesómetro reducido (ACTIVO · desde que salgan los programas, aprox. 3–12 nov)

- **Alcance reducido:** 20-30 compromisos por partido con grupo propio, elegidos con un criterio público (los que el propio partido destaca en su resumen o portada del programa), no todas las promesas.
- **Antes de construir (esta semana):** revisar qué hacen ya Civio, Newtral y Maldita, para ocupar el hueco y no repetir trabajo.
- **Qué es:** base abierta con esos compromisos. No juzga si una promesa es buena: mide si se puede auditar.
- **Ficha de cada promesa:** texto literal y página; si tiene coste, financiación, plazo, responsable e indicador; si estaba ya en el programa de 2023.
- **IA:** extrae y clasifica. Un segundo agente comprueba cada extracción contra la página original.
- **Humano:** con 20-30 por partido, revisa **todas** las fichas, no una muestra.
- **Gancho:** «¿Cuántas promesas traen coste, plazo y responsable?» y «Esta promesa ya estaba en 2023».
- **Formato:** JSON y CSV en GitHub con licencia abierta, más una página web filtrable.

### 6. Las reglas del juego, partido a partido (ACTIVO · nuevo · publicar antes del 13 nov)

Sustituye al checklist de reglas. Detalle completo en [Ideas.md](Ideas.md), sección 3.

- **Qué es:** matriz con los partidos en filas y 12 estándares de integridad en columnas: límite de mandatos, alcance de las primarias, tope salarial, declaraciones de bienes públicas, qué pasa si te investigan, puertas giratorias, cuentas publicadas, disciplina de voto, crítica interna, órgano de garantías, revocación y quién aprueba qué.
- **Cada celda:** sí / parcial / no / no consta, con la cita literal del estatuto o código ético, enlace al PDF, página, fecha de consulta y quién lo verificó.
- **Partidos:** todos los que tuvieron grupo propio en la legislatura que acaba, más democracia21. **Democracia Real en la primera fila**, con sus fallos (tope salarial y puertas giratorias sin concretar, sin órgano de garantías, sin responsable identificable).
- **Por qué es activo:** solo usa documentos públicos que ya existen, no depende de que salgan los programas ni de que nadie responda, y aplica la misma vara a todos.
- **IA:** descarga estatutos y códigos, extrae la cláusula de cada estándar con página y cita. Un segundo agente, con otro modelo, comprueba cada cita contra el PDF.
- **Humano:** revisa todas las celdas (unas 150). Sin cita literal no hay color: queda «no consta».
- **Réplica:** cada partido recibe su fila por email 7 días antes de publicar. Si contesta, se publica literal; si corrige un error, se corrige y se dice.
- **Gancho:** «Antes de votar, mira las reglas internas de tu partido. Esta es la cláusula. Compruébala tú.»
- **Complemento del checklist anterior:** cuando salgan los programas, añadir una columna «¿el programa dice algo sobre listas, CGPJ, decretos...?», con cita.

| Hito | Fecha |
|------|-------|
| Descargar estatutos y códigos éticos de todos los partidos | 18 oct |
| Extracción y doble verificación de citas | 25 oct |
| Revisión humana de todas las celdas | 1 nov |
| Envío de la fila a cada partido (réplica, 7 días) | 3 nov |
| Consulta legal (derecho al honor) | antes del 6 nov |
| Publicación | 10 nov |

### 7. Verificación de debates (APLAZADO)

- **Flujo:** audio, transcripción y extracción de afirmaciones verificables. Contraste con INE, Eurostat, BOE, AIReF y Banco de España; borrador con fuente a Telegram; humano aprueba y publica.
- **Objetivo:** 3–5 verificaciones por debate, publicadas antes de que acabe.
- **Equilibrio:** el mismo número de verificaciones por participante, o explicar por qué no.
- **Formato:** cita literal, minuto, dato oficial con enlace y veredicto («Correcto», «Incompleto», «No consta», «Falso»).

### 8. Pregúntale a los programas (APLAZADO)

- **Qué es:** el chat actual con los programas de 2026 indexados junto a los documentos de DR.
- **Respuesta:** qué dice cada programa sobre X, con cita y página. Sin recomendar a quién votar.
- **Salvaguarda:** instrucción explícita en el prompt: si alguien pregunta «a quién voto», se niega y explica por qué.

### 9. Presentador IA declarado (APLAZADO)

- **Qué es:** un avatar sintético que presenta un vídeo diario de 45–60 s: la promesa del día, la verificación del día o el dato provincial del día.
- **Etiquetado:** siempre en pantalla y en la descripción: *«Presentador generado con IA. Guion verificado y aprobado por una persona de Democracia Real.»* Marca C2PA si la herramienta lo permite.
- **Prohibido:** que se parezca a alguien real o que imite a un político.
- **Por qué:** el formato en sí ya es noticia. Es un presentador IA que dice que es IA y explica cómo se comprueba lo que dice.
- **Mejor aún:** alternar con vídeos en los que aparezca una persona real del proyecto. La cara humana da confianza.

### 10. El otro Congreso (APLAZADO · primero en la cola si sobra tiempo)

- **Qué es:** con los resultados oficiales, publicar en menos de una hora:
  - votos que no eligieron a nadie, en total y por provincia;
  - votos por escaño de cada candidatura;
  - el reparto con circunscripción única, como ejercicio de comparación declarado.
- **Ensayo:** correr todo el flujo con los datos de 2023 antes del 20 de noviembre.
- **Por qué:** esa noche todo el mundo mira los números, y somos los únicos con otra lectura lista.

---

## Los agentes

Todo borrador llega por Telegram. Nada se publica sin el visto bueno de una persona.

| Agente | Estado | Entrada | Salida | Cadencia | Puerta humana |
|--------|--------|---------|--------|----------|---------------|
| `x-target-watcher` (existe) | Activo | Posts de cabezas de lista proclamadas | Borrador de reply con encaje | Cada 2 h | Humano publica |
| `news-watcher` (existe) | Activo | Prensa, filtrada por temas DR | Borrador de pieza | 3 veces al día | Humano publica |
| `estatutos-extract` | **Nuevo** | PDF de estatutos y código ético de cada partido | Cláusula por estándar, con página y cita | Una vez, y al detectar cambios | Revisión de todas las celdas |
| `estatutos-check` | **Nuevo** | Cita extraída y PDF original | Coincide / no coincide (otro modelo, sin ver el resultado anterior) | Tras la extracción | Revisión de discrepancias |
| `decretometro` | Activo | BOE y agenda de la Diputación Permanente | Tabla actualizada y alerta | Diaria | Humano publica |
| `programa-ingest` | Activo | PDF de cada programa | Texto por página | Al publicarse cada programa | — |
| `promesas-extract` | Activo | Texto del programa | 20-30 fichas de compromiso por partido | Al publicarse cada programa | Revisión de todas |
| `promesas-check` | Activo | Ficha y página original | Coincide / no coincide | Tras la extracción | Revisión de discrepancias |
| `red-team` | Activo | Cualquier borrador | Semáforo y motivo | Antes de cada publicación | El humano lo lee antes de publicar |
| `equilibrio` | Activo | Todo lo publicado | Registro por partido | Semanal | Se publica tal cual |
| `metricas` | Activo | Analítica de X, web y lista | Informe de lo que funciona | Semanal | — |
| `boe-candidaturas` | Aplazado | BOE del 28 oct y del 3 nov | 52 fichas «Tu lista» | — | — |
| `congreso-votaciones` | Aplazado | Datos abiertos del Congreso | Dataset de disciplina de voto | — | — |
| `debate-live` | Aplazado | Audio del debate | Afirmaciones con dato y fuente | — | — |
| `prensa-local` | Aplazado | Ficha provincial | 52 notas de prensa | — | — |
| `avatar-guion` | Aplazado | Pieza del día | Guion de 45 s | — | — |

### El agente `red-team`

Antes de que llegue a Telegram, cada borrador pasa estas preguntas:

1. ¿Cada cifra está en una fuente primaria enlazada y en el [registro de cifras](web/data/cifras.json) como verificada? Si no, rojo.
2. ¿Responde a lo que dice el post o el texto real, o se inventa otra cosa?
3. ¿Pide el voto, aunque sea de forma implícita?
4. ¿Nombra a un particular o a una víctima?
5. ¿Es plantilla («quién decide», «el futuro», «máquina o salario»)?
6. ¿Esta semana estamos dando más caña a un partido que a otro sin motivo?
7. ¿Hay fecha de sondeos o de reflexión que lo bloquee?

Salida: verde (publicable), ámbar (motivo) o rojo (no se envía). El semáforo no decide: informa.

### Registro de equilibrio

Cada semana se publica cuántas piezas ha tenido cada partido o cabeza de lista y por qué. Si el Gobierno recibe más, se dice que es porque gobierna y aprueba decretos. Ningún partido lo hace. Es el antídoto contra «sois de X».

---

## Cadencia diaria en campaña (13–27 nov)

Tiempo humano: unos 60-75 minutos al día. Sin presentador IA ni debates en directo.

| Hora | Quién | Qué |
|------|-------|-----|
| 07:30 | Agentes | Resumen del día: BOE y decretos, compromisos nuevos, 3 borradores |
| 08:30 | Humano (15 min) | Elegir **una** pieza principal del día y descartar el resto |
| 09:00 | Humano | Publicar la pieza principal en X, en la web y en el canal de Telegram. Rotar: una celda de la matriz, un decreto, un compromiso, un dato provincial |
| 13:00–21:00 | Humano (30 min, repartidos) | Como máximo 2 replies a cabezas de lista. Solo si encajan |
| 22:00 | Agentes | Actualizar datasets, registro de equilibrio y métricas |

Del 24 al 27 de noviembre, el `red-team` bloquea cualquier mención a encuestas. El 28, el sistema no envía borradores.

---

## Distribución: que lo usen otros

Con 2 seguidores, lo que importa no es lo que publicamos, sino quién más lo usa.

| Canal | Táctica | Cuándo |
|-------|---------|--------|
| **Prensa local** | Sin las 52 notas automáticas: escribir a mano a 5-10 medios provinciales con el dato de *Lo que vale tu voto* de su provincia | Cuando esté publicado |
| **Periodistas de datos** | Ofrecer la matriz de reglas, el Promesómetro y el Decretómetro como datos abiertos y citables | En cuanto estén |
| **Creadores** | Paquete de datos por tema, sin pedir mención | Semanal |
| **X** | Replies con encaje (regla número uno) y un hilo semanal con lo mejor | Diario |
| **TikTok / Shorts / Reels** | Solo si hay tiempo: captura de una celda de la matriz o del mapa de votos, sin presentador | Opcional |
| **Canal de Telegram o WhatsApp** | Una pieza al día, sin ruido | Diario |
| **GitHub** | Cada dataset con su metodología: es la prueba de que no inventamos | Siempre |

El ángulo para la prensa: *«Un proyecto ciudadano compara las reglas internas de todos los partidos, cláusula a cláusula y empezando por las suyas, y publica en abierto cómo verifica cada dato.»*

---

## Lo que hay que construir

Orden por impacto y por fecha límite.

| Prioridad | Tarea | Dónde | Fecha límite |
|-----------|-------|-------|--------------|
| 0 | Push de las correcciones de datos y firma humana de las 5 cifras del registro | `web/data/cifras.json` | 13 oct |
| 1 | Lo que vale tu voto: cálculo y 52 fichas, con las cifras en el registro | `scripts/`, `web/29n/` | 13 oct |
| 2 | `red-team` con la regla del registro de cifras y las fechas legales | `function-app/shared/` | 13 oct |
| 3 | Decretómetro, empezando por un recuento propio sobre el BOE | `scripts/`, `web/29n/` | 15 oct |
| 4 | Matriz de reglas: estatutos descargados | `data/estatutos/` | 18 oct |
| 5 | Matriz de reglas: `estatutos-extract` y `estatutos-check` | `scripts/` | 25 oct |
| 6 | Matriz de reglas: revisión humana, réplica, consulta legal y publicación | `web/29n/` | 1 → 10 nov |
| 7 | Promesómetro reducido: revisar Civio, Newtral y Maldita y fijar el criterio de selección | — | 18 oct |
| 8 | `programa-ingest`, `promesas-extract`, `promesas-check` | `scripts/` o `function-app/` | 2 nov |

**Aplazado** (retomar solo con los cuatro productos publicados): disciplina de voto, `boe-candidaturas` y «Tu lista», `prensa-local`, indexar programas en el chat, presentador IA, `debate-live`, El otro Congreso (primero en la cola) y botones de Telegram.

Recuerda: la web solo cambia en producción tras `git push`. Las funciones se despliegan con `func azure functionapp publish democracia-chat-function`.

---

## Cómo sabremos si ha removido algo

Objetivos modestos y comprobables, no vanidad.

| Señal | Objetivo |
|-------|----------|
| Un medio cita un dato o dataset de DR | ≥ 1 nacional o ≥ 3 locales |
| Alguien descarga o reutiliza la matriz, el Promesómetro o el Decretómetro | ≥ 1 periodista o creador |
| Un partido responde a la réplica de la matriz | ≥ 1 |
| Un reply nuestro recibe respuesta de la cuenta original o de un periodista | ≥ 1 |
| Lista de espera | 100 personas (el objetivo ya bajado) |
| Errores publicados sin corregir en 24 h | 0 |

Si no se cumple nada, queda igualmente una base de promesas para auditar la legislatura entera. Ese es el activo.

---

## Riesgos

| Riesgo | Respuesta |
|--------|-----------|
| Un dato mal publicado | Fe de erratas pública en menos de 24 h, en el mismo canal y en GitHub |
| «Sois de X» | Registro de equilibrio publicado cada semana |
| Duda legal sobre hacer campaña sin ser candidatura | Consulta antes del 13 nov; nunca pedir el voto |
| Suspensión de la cuenta por automatización | En X todo lo publica un humano; los bots solo en canales propios |
| Agotamiento | Una pieza al día. El silencio también es una decisión |
| La IA se inventa algo | `promesas-check`, `red-team` y revisión humana. Sin fuente, no sale |
| Los programas salen tarde | El Promesómetro arranca con lo que haya; la matriz y el Decretómetro no dependen de ellos |
| Un partido reclama por su fila de la matriz | Réplica previa de 7 días, cita literal y «no consta» cuando no hay cláusula. Si tienen razón, se corrige y se dice |

---

## Después del 29N

1. **30 nov:** publicar el dataset de promesas de las candidaturas que han obtenido escaño.
2. **23 dic:** con las Cortes constituidas, empieza el seguimiento: cada promesa, su estado y su fuente.
3. **Diciembre:** retomar lo aplazado que siga teniendo sentido (disciplina de voto de la nueva legislatura, por ejemplo).
4. **Enero:** decidir con datos (métricas, contactos, lista de espera) si se inicia la inscripción del partido. Ver [timeline_constitucion.md](06_hoja_de_ruta_legal/timeline_constitucion.md).

---

## Documentos relacionados

| Documento | Para qué |
|-----------|----------|
| [estrategia_visibilidad.md](estrategia_visibilidad.md) | Táctica de replies y canales |
| [internal/estilo_mensajes_redes.md](internal/estilo_mensajes_redes.md) | Regla número uno: investigar, punch, sin plantilla |
| [agente_social_media.md](agente_social_media.md) | Arquitectura actual de borradores |
| [etica_y_supervision_humana.md](05_uso_de_ia_y_automatizacion/etica_y_supervision_humana.md) | Humano en el bucle |
| [sistema_electoral.md](01_diagnostico_del_sistema/sistema_electoral.md) | Listas cerradas, D'Hondt, circunscripción |
| [reforma_electoral.md](03_propuestas_institucionales/reforma_electoral.md) | Lo que proponemos |
| [ley_anti_decretos.md](03_propuestas_institucionales/ley_anti_decretos.md) | Base del Decretómetro |

---

*Plan vivo. Revisar cada lunes hasta el 30 de noviembre.*
