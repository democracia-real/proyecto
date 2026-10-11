# Ruta

*Actualizada: 11 octubre 2026 · Es el único documento que dice **qué hacer y en qué orden**. Los demás son detalle.*

---

## Qué hacemos hasta enero

Democracia Real es un **estándar abierto y un observatorio**: mide a todos los partidos con la misma vara, empezando por nosotros, y enseña cómo verifica cada dato.

Hasta enero hay un solo objetivo: **demostrar con cuatro productos y un sistema de verificación que el método funciona.** En enero se decide con datos si seguir, y en qué forma (asociación, partido, solo observatorio).

## Tres reglas

1. **Sin cifra verificada, no se publica.** Una cifra es verificada si está en [`web/data/cifras.json`](web/data/cifras.json).
2. **Nada sale sin que una persona lo apruebe.**
3. **Máximo tres tareas abiertas a la vez.** Si entra una nueva, sale otra.

---

## Los cuatro productos

| # | Producto | Fecha | Depende de |
|---|----------|-------|------------|
| 1 | **Lo que vale tu voto** | 13 oct (puede deslizarse a 16; nunca sin verificar) | Cifras en el registro |
| 2 | **Decretómetro** | 15 oct | Recuento propio sobre el BOE |
| 3 | **Las reglas del juego, partido a partido** (matriz) | 10 nov | Estatutos de todos los partidos |
| 4 | **Promesómetro reducido** (20-30 compromisos por partido) | desde que salgan los programas, 3-12 nov | Programas electorales |

---

## La ruta, por fases

### Fase 0 · 11-13 oct — Cimientos

- [ ] `git push` (hay dos commits locales) y reindexar el chat: `python scripts/index_to_azure_search.py`
- [ ] **Firmar la revisión humana** de las 5 cifras del registro (leer la fuente, poner tu nombre o alias)
- [ ] Publicar **Lo que vale tu voto**
- [ ] Regla del registro de cifras en el `red-team` (`function-app/shared/editorial-prompts.js`)

### Fase 1 · 13-18 oct — Datos y base de la matriz

- [ ] **Decretómetro**, empezando por el recuento propio sobre el BOE (15 oct)
- [ ] Verificar las cifras sospechosas de la portada, en este orden: coste de la corrupción (50.000 M€), «Soria vale 6 veces Madrid», 9 u 8 leyes de educación, 83,7% del sueldo para alquilar
- [ ] **Responsable en la política de privacidad** (tu nombre o el de una asociación), antes de que crezca la lista de email
- [ ] Revisar qué hacen ya Civio, Newtral y Maldita y fijar el criterio de selección del Promesómetro
- [ ] Descargar estatutos y códigos éticos de todos los partidos (18 oct)
- [ ] **Primer lote de 3 clips cortos** de canciones sin cifras (ver [Contenido corto](#contenido-corto-shorts-tiktok-reels)), y repetir cada semana

### Fase 2 · 18 oct-1 nov — Matriz

- [ ] Extracción de cláusulas y segunda comprobación con otro modelo (25 oct)
- [ ] **Tu revisión de todas las celdas** (1 nov). Sin cita literal, la celda es «no consta»

### Fase 3 · 1-10 nov — Réplica, legal y publicación

- [ ] 3 nov: enviar a cada partido su fila, con 7 días para responder
- [ ] Antes del 6 nov: **consulta legal** (derecho al honor, y que informar no cuente como campaña)
- [ ] 2 nov: ingerir programas y extraer compromisos
- [ ] **10 nov: publicar la matriz**

### Fase 4 · 13-27 nov — Campaña

- Una pieza principal al día, unos 60-75 minutos de trabajo humano ([cadencia](plan_maestro_29N.md))
- Rotar entre: una celda de la matriz, un decreto, un compromiso, un dato provincial
- 24-28 nov: ni encuestas propias ni ajenas · **28 nov: silencio total**

### Fase 5 · 30 nov-enero — Después

- 30 nov: dataset de promesas de quienes obtengan escaño
- Diciembre: fichas de medida (consecuencias), piloto de «qué propone cada partido y cómo lo haríamos» con **un** tema (vivienda), retomar lo aplazado que siga valiendo
- 23 dic: empieza el seguimiento de los electos
- **Enero: decidir** con datos (métricas, lista de espera, colaboradores) qué es Democracia Real a partir de ahí

---

## Qué no hacemos

**Nunca** (líneas rojas del [plan 29N](plan_maestro_29N.md)): cuentas falsas, respuestas automáticas, deepfakes, pedir el voto, publicar sondeos del 24 al 28, nombrar a víctimas o particulares, publicar algo sin aprobar.

**Aplazado** (solo si los cuatro productos están publicados y verificados):

| Aplazado | Cuándo se reconsidera |
|----------|-----------------------|
| El otro Congreso (primero en la cola, reutiliza Lo que vale tu voto) | Si sobra tiempo antes del 20 nov |
| Disciplina de voto, «Tu lista», verificación de debates | Diciembre |
| Presentador IA, 52 notas de prensa, programas en el chat | Diciembre o nunca |
| Zona de consecuencias y espacio colaborativo | Diciembre y enero |
| Plataforma propia de participación | Solo con uso real |

---

## Visibilidad

[`estrategia_visibilidad.md`](estrategia_visibilidad.md) se escribió en marzo, antes de todo esto. Lo que sigue valiendo y lo que no:

| Sigue valiendo | Retirado |
|----------------|----------|
| Replies con encaje a cuentas con alcance, con el estilo de [`internal/estilo_mensajes_redes.md`](internal/estilo_mensajes_redes.md) | El ángulo «el primer partido con el programa en GitHub»: ya no somos partido |
| Contactar creadores y periodistas **cuando exista un producto publicado** | Los textos de lanzamiento con cifras sin verificar (83,7%, Soria 6x, 8 leyes, 87.000...) |
| Un post en Reddit, reescrito | La afirmación «publica las nóminas de sus cargos» (hoy no hay cargos ni nóminas) |

**Ángulo nuevo** para prensa y creadores: *«Un proyecto ciudadano compara las reglas internas de todos los partidos, cláusula a cláusula y empezando por las suyas, y publica cómo verifica cada dato.»*

Hasta que haya un producto publicado, **no se escribe a nadie**: la primera impresión no se repite.

### Contenido corto: Shorts, TikTok, Reels

Sin audiencia, la auditoría no sirve de nada. Esto es lo que da a conocer el proyecto, y **empieza ya**, porque el alcance se construye en semanas y la campaña dura siete. Pero es una **tarea de fondo**, no un proyecto: se hace por lotes, sin competir con los cuatro productos.

**Material:** 62 canciones con vídeo ya exportado en `youtube_exports/`.

**Regla que condiciona todo:** 52 de las 62 letras contienen cifras (algunas ya corregidas esta semana, como «65 veces» o «puesto 46»). Un clip difunde esa cifra, así que:

1. **Primero, las 10 canciones sin cifras:** *El Rastro del Bit, Dinero de Papel, Cerebros de Embalaje, Autor Desconocido, Código Abierto (Democracia Líquida), Ejemplaridad, Nodos, Meritocracia, La Factura* y *Código y Cuna* (módulo 08).
2. **De las demás, solo el trozo sin números**, normalmente un estribillo. Si un clip lleva una cifra, tiene que estar en el [registro](web/data/cifras.json) como verificada.
3. **Revisar la letra del clip** antes de publicar: que no nombre a un partido ni pida el voto.

**Formato:**
- Vertical 9:16, 20-45 segundos, el estribillo o la mejor imagen.
- Una frase en pantalla que funcione sin sonido (la primera, el gancho).
- Descripción: *«Música y letra generadas con IA. Texto revisado por una persona.»* Activar la etiqueta de contenido sintético de cada plataforma. Es una línea roja del plan, y el reglamento europeo de IA lo exige desde agosto de 2026.
- Enlace en la biografía a la web o al vídeo largo. Ni «vota» ni «no votes».

**Ritmo:** un lote semanal (por ejemplo, el domingo) de unos 3 clips, y se publica uno cada dos o tres días en YouTube Shorts, TikTok e Instagram Reels a la vez. Mejor poco y constante que veinte clips de golpe.

**Más adelante,** cada producto da su propio clip: una celda de la matriz, un decreto en el Decretómetro, un dato provincial. Eso sí lleva cifras verificadas.

**Cómo saber si sirve:** a las cuatro semanas, qué clips tuvieron más visualizaciones, seguidores nuevos y visitas a la web (Cloudflare). Se repite lo que funciona y se deja lo demás.

**Pendiente:** abrir cuenta de TikTok (la única que falta) y confirmar si las canciones se pueden publicar tal cual según las condiciones de la herramienta con que se generaron.

---

## Qué te toca a ti (solo tú puedes)

| Tarea | Cuándo |
|-------|--------|
| `git push` y reindexar el chat | Hoy |
| Firmar las 5 cifras del registro | Antes del 13 oct |
| Nombre o asociación como responsable de datos | Antes de seguir captando emails |
| Revisar todas las celdas de la matriz | 1 nov |
| Abrir TikTok y confirmar que puedes publicar las canciones | Esta semana |
| Consulta con un abogado | Antes del 6 nov |
| Decidir qué es Democracia Real | Enero |

---

## Mapa de documentos

| Documento | Para qué | Cuándo mirarlo |
|-----------|----------|----------------|
| **RUTA.md** (este) | Qué hacer y en qué orden | Cada día |
| [`plan_maestro_29N.md`](plan_maestro_29N.md) | Detalle de los productos, agentes y cadencia de campaña | Al construir un producto |
| [`Proximos pasos.md`](Proximos%20pasos.md) | Lista larga de pendientes y cifras sospechosas | Para elegir la siguiente tarea |
| [`Ideas.md`](Ideas.md) | Ideas con su análisis (matriz, verificación, consecuencias, contrapropuestas) | Al decidir qué construir después |
| [`estrategia_visibilidad.md`](estrategia_visibilidad.md) | Canales y tácticas de difusión (parte retirada) | Antes de difundir |
| [`internal/estilo_mensajes_redes.md`](internal/estilo_mensajes_redes.md) | Cómo escribir un tuit | Al redactar un mensaje |
| [`Democracia Real y democracia21 comparación, lagunas y mejoras.md`](Democracia%20Real%20y%20democracia21%20comparación,%20lagunas%20y%20mejoras.md) | Origen de todo. Informe externo | Solo como referencia |

**Si un documento contradice a este, manda este.** Los cambios de prioridad se hacen aquí primero.

*Revisar cada lunes hasta el 30 de noviembre.*
