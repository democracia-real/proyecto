# Ruta

*Actualizada: 1 noviembre 2026 · Es el único documento que dice **qué hacer y en qué orden**. Los demás son detalle.*

---

## Revisión del 1 de noviembre: dónde estamos

- **Ninguno de los cuatro productos del 11 de octubre está publicado.** En su lugar se hicieron tres calculadoras (nómina, IA y empleo, pensiones), que no estaban en la ruta.
- **El problema real es que no nos ve nadie:** 2 seguidores en X tras seis meses y 125 publicaciones. Hay contenido de sobra (8 módulos, 62 canciones, vídeo, chat); falta distribución.
- **La intuición de las calculadoras es buena.** Una herramienta en la que metes tu sueldo o tu provincia y te da tu resultado es lo que más se comparte. Pero una calculadora que se comparte también se comprueba: si una cifra falla, la desmonta un verificador y perdemos lo único que nos distingue.
- **La regla «hasta que haya un producto publicado, no se escribe a nadie» se convirtió en una trampa:** sin producto y sin contactos, tres semanas en silencio. Cambia: se escribe en cuanto una calculadora tenga todas sus cifras en el registro.
- La portada mostraba cifras sin verificar, incluido el «50.000 M€ de corrupción» que el propio registro decía no usar. Corregido hoy, y el check ahora falla si vuelve a pasar.

**Decisión:** con 28 días hasta el 29N, las calculadoras pasan a ser **el formato** de los productos, no un proyecto aparte. El producto estrella es *Lo que vale tu voto* hecho calculadora.

---

## Qué hacemos hasta enero

Democracia Real es un **estándar abierto y un observatorio**: mide a todos los partidos con la misma vara, empezando por nosotros, y enseña cómo verifica cada dato.

Hasta enero hay un solo objetivo: **que la gente descubra el proyecto con herramientas que pueda usar y comprobar.** En enero se decide con datos si seguir, y en qué forma (asociación, partido, solo observatorio).

## Tres reglas

1. **Sin cifra verificada, no se publica.** Una cifra es verificada si está en [`web/data/cifras.json`](web/data/cifras.json). Una previsión o un supuesto se puede publicar, pero etiquetado como tal y con su fuente.
2. **Nada sale sin que una persona lo apruebe.**
3. **Máximo tres tareas abiertas a la vez.** Si entra una nueva, sale otra.

---

## Los productos, revisados el 1 de noviembre

| # | Producto | Fecha | Estado |
|---|----------|-------|--------|
| 1 | **Calculadora de la nómina** | Ya | Cifras verificadas el 1 nov. Falta tu firma en el registro y publicar |
| 2 | **Lo que vale tu voto** (calculadora por provincia) | 8 nov, antes de la campaña | Por construir. Es aritmética sobre datos oficiales de 2023 |
| 3 | **Las reglas del juego, reducida**: 6 estándares × partidos con grupo propio | 20 nov | Por empezar. Necesita la consulta legal y 7 días de réplica |
| 4 | **Calculadora de pensiones** | Tras tu revisión | Reescrita el 1 nov sin el enfoque generacional; cifras en el registro |
| 5 | **Simulador de IA y empleo** | Tras tu revisión | Rehecho como escenario, no como predicción |
| — | Decretómetro | Diciembre | Aplazado. Como mucho, una pieza sobre la convalidación de los decretos de vivienda |
| — | Promesómetro | 30 nov, solo electos | Aplazado. Sin tiempo para revisar 20-30 fichas por partido en campaña |

---

## La ruta, por fases

### Fase A · 1-8 nov — Publicar lo que ya hay y construir el producto estrella

- [ ] **Firmar** las cifras nuevas del registro (`revision_humana`) y hacer `git push`
- [ ] Publicar la calculadora de la nómina y moverla (ver [Distribución](#distribución-dónde-está-la-gente))
- [ ] **Lo que vale tu voto** como calculadora: elige tu provincia, cuánto vale tu voto frente a otras y cuántos votos no eligieron a nadie en 2023
- [ ] **Responsable en la política de privacidad** (tu nombre o el de una asociación): la lista de email ya está abierta
- [ ] Consulta legal (derecho al honor e informar en campaña), antes de enviar la matriz a los partidos
- [ ] Descargar estatutos y códigos éticos de los partidos con grupo propio

### Fase B · 9-20 nov — Matriz reducida y campaña

- [ ] Extraer y revisar las 6 cláusulas por partido. Sin cita literal, «no consta»
- [ ] Enviar a cada partido su fila con 7 días para responder (antes del 13 nov)
- [ ] **20 nov: publicar la matriz**
- [ ] Desde el 13 nov, una pieza al día: un resultado de la calculadora de una provincia, una celda de la matriz

### Fase C · 21-29 nov — Cierre de campaña

- 24-28 nov: ni encuestas propias ni ajenas · **28 nov: silencio total**
- 29 nov: con los resultados, actualizar *Lo que vale tu voto* con 2026 (sustituye a «El otro Congreso»)

### Fase D · 30 nov-enero — Después

- 30 nov: compromisos de quienes obtengan escaño (Promesómetro reducido)
- Diciembre: Decretómetro, fichas de medida, piloto de contrapropuesta con un tema (vivienda)
- **Enero: decidir** con datos qué es Democracia Real, y si el nombre se mantiene (se confunde con Democracia Real Ya)

---

<details>
<summary>Ruta anterior (11 oct), conservada como registro</summary>

### Fase 0 · 11-18 oct — Cimientos

- [x] `git push` y reindexar el chat: `python scripts/index_to_azure_search.py`
- [x] **Firmar la revisión humana** de las 5 cifras del registro (leer la fuente, poner tu nombre o alias)
- [ ] Publicar **Lo que vale tu voto**
- [x] Regla del registro de cifras en el `red-team` (`function-app/shared/editorial-prompts.js`)

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

</details>

---

## Qué no hacemos

**Nunca** (líneas rojas del [plan 29N](plan_maestro_29N.md)): cuentas falsas, respuestas automáticas, deepfakes, pedir el voto, publicar sondeos del 24 al 28, nombrar a víctimas o particulares, publicar algo sin aprobar.

**Aplazado** (solo si los productos 1-3 están publicados y verificados):

| Aplazado | Cuándo se reconsidera |
|----------|-----------------------|
| El otro Congreso (lo absorbe la actualización de Lo que vale tu voto el 29N) | 29 nov |
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
| | Esperar a tener «el» producto para escribir a nadie (1 nov): basta una calculadora con todas sus cifras en el registro |

**Ángulo nuevo** para prensa y creadores: *«Un proyecto ciudadano compara las reglas internas de todos los partidos, cláusula a cláusula y empezando por las suyas, y publica cómo verifica cada dato.»*

### Distribución: dónde está la gente

Con 2 seguidores, lo que publicamos en nuestras cuentas no lo ve nadie. El alcance hay que pedirlo prestado: sitios donde alguien sin seguidores puede llegar a miles de personas si lo que trae sirve. Una herramienta que la gente usa con sus propios datos es justo eso.

| Canal | Qué llevar | Cómo |
|-------|------------|------|
| **TikTok, Shorts, Reels** | Grabación de pantalla de una calculadora con un caso concreto: «Cobro 28.000 €. Esto es lo que cuesto a mi empresa» | El algoritmo reparte por interés, no por seguidores. Es el canal con más potencial partiendo de cero |
| **Menéame** | Una herramienta por envío, con titular descriptivo y sin adjetivos | Participar también en envíos ajenos: quien solo sube lo suyo acaba marcado como spam |
| **Reddit** (r/spain, r/SpainEconomics) | Post de texto que explique el método y pida que busquen errores | Leer antes las normas de autopromoción de cada subreddit |
| **X** | Tu resultado como respuesta a hilos sobre sueldos, impuestos o pensiones, no solo a políticos | El enlace en la respuesta o en la biografía. Los tuits con enlace externo suelen llegar a menos gente |
| **Prensa local** | *Lo que vale tu voto*: el dato de su provincia | 5-10 correos escritos a mano |
| **WhatsApp** | El botón «Copiar» de cada calculadora | Ya existe |

**Pagar X Premium:** como prueba, un mes del plan más barato que dé impulso a las respuestas, del 13 al 27 nov. Comparar impresiones de las respuestas, visitas al perfil y clics a la web con las dos semanas anteriores; si no mejora, se cancela. No es la palanca principal: el impulso ayuda a que te lean en una conversación, no a que alguien quiera quedarse.

**Cómo saber si sirve:** cada domingo, visitas por página en Cloudflare, usos de cada calculadora y altas en la lista. Se repite lo que trae gente y se deja lo demás.

### Contenido corto: Shorts, TikTok, Reels

Sin audiencia, la auditoría no sirve de nada. Esto es lo que da a conocer el proyecto, y **empieza ya**, porque el alcance se construye en semanas y la campaña dura siete. Pero es una **tarea de fondo**, no un proyecto: se hace por lotes, sin competir con los cuatro productos.

**Material:** las calculadoras (grabación de pantalla con un caso concreto, lo primero que hay que probar) y 62 canciones con vídeo ya exportado en `youtube_exports/`.

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

**Tema semanal:** además de los clips, un tema por semana con vídeo corto propio. Cada tema tiene carpeta en [`enseñar/`](enseñar/README.md) (borrador, `verificacion.md`, guion). Antes de grabar, [`GUIA_VIDEOS.md`](enseñar/GUIA_VIDEOS.md): hacer pensar, sin politizar. Primer tema: [`futuroIA/`](enseñar/futuroIA/).

**Más adelante,** cada producto da su propio clip: una celda de la matriz, un decreto en el Decretómetro, un dato provincial. Eso sí lleva cifras verificadas.

**Cómo saber si sirve:** a las cuatro semanas, qué clips tuvieron más visualizaciones, seguidores nuevos y visitas a la web (Cloudflare). Se repite lo que funciona y se deja lo demás.

**Pendiente:** abrir cuenta de TikTok (la única que falta) y confirmar si las canciones se pueden publicar tal cual según las condiciones de la herramienta con que se generaron.

---

## Qué te toca a ti (solo tú puedes)

| Tarea | Cuándo |
|-------|--------|
| Firmar las cifras nuevas del registro (`revision_humana`) y hacer `git push` | 2-3 nov |
| Revisar y aprobar las calculadoras de pensiones e IA antes de enlazarlas | 2-3 nov |
| Nombre o asociación como responsable de datos | Ya: la lista de email está abierta |
| Consulta con un abogado | Antes de enviar la matriz (8 nov) |
| Abrir TikTok y grabar el primer vídeo de la calculadora | Esta semana |
| Revisar todas las celdas de la matriz | 12 nov |
| Decidir qué es Democracia Real y si se mantiene el nombre | Enero |

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
