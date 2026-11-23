# Ruta

*Actualizada: 23 noviembre 2026 · Es el único documento que dice **qué hacer y en qué orden**. Los demás son detalle.*

---

## Revisión del 23 de noviembre (cuarta semanal)

- Hecho: Valencia (17), Zamora (18) y Cádiz (19) en su día; el autónomo (20) y las listas desbloqueadas (21) en su día; el presupuesto trazable, un día tarde (23); la primera celda de la matriz (23). El 17 no salió la pieza de pensiones, como se decidió.
- Va tarde: la revisión de las 11 cifras de la matriz, que vencían el 20 y se hizo hoy, tres días tarde. Las citas de cinco partidos (EH Bildu, Junts, Sumar, Vox y ERC) siguen literales en los documentos descargados hoy, igual que las dos nuestras y el recuento de la matriz; la del PSOE no se pudo repetir (psoe.es bloquea la descarga) y se reintenta el 30 nov.
- Cambios del plan: los 24-27 salen dos celdas de nuestra propia fila (24 y 26), cinco cifras públicas (25) y el cierre (27). La pieza del 25 ya no dice «que no salen en los debates», porque no lo hemos medido. El 28 y el 29, nada. La del 30 (*Lo que vale tu voto* con los resultados) depende de los resultados y se prepara la noche del 29.
- Piezas del 24 al 27 listas en `internal/semana_2026-11-23/`.
- Decidido con la persona (23 nov), tras la primera medición: el calendario sigue hasta el 29N y el 30N cambia el modelo (ver Fase D).

## Revisión del 16 de noviembre (tercera semanal)

- Hecho: la matriz *Las reglas del juego*, publicada el 12 nov, un día antes de lo previsto, con correos a Civio y cinco verificadores. Piezas del 10, el 11 y Teruel publicadas; el anuncio de la matriz salió el 14 en vez del 13.
- Va tarde: las piezas que dependen de que la persona esté. El anuncio de la matriz salió un día tarde y Teruel dos. No es un problema de preparación: todas estaban listas a tiempo.
- No se incorporaron respuestas de los partidos (11-12 nov) porque no hubo ninguna: se marca como hecho.
- Cambios del plan: no sale la pieza de pensiones en los programas del 17 (comparar programas es el Promesómetro, aplazado al 30N). El jue 19 sale Cádiz. Las fechas de las dos próximas semanas no cambian.
- Pendiente con fecha: las 11 cifras de la matriz vencen el 20 nov y hay que revisarlas antes.
- Piezas del 19 al 22 nov listas en `internal/semana_2026-11-16/`; las del 17 y el 18, en `internal/semana_2026-11-09/`.

## Revisión del 10 de noviembre (segunda semanal)

- Hecho: las piezas del 3 al 9 nov salieron en su día, menos el vídeo largo del 8, cancelado porque tenía tres cifras ya corregidas (fe de erratas en la portada y en YouTube). Web dada de alta en Search Console.
- No va nada tarde. Hoy acaba el plazo de réplica de la matriz; incorporar las respuestas (11-12 nov) depende de que la persona mire la bandeja del proyecto.
- Sin cambios de fechas para las dos próximas semanas. Dos ajustes de piezas: la fe de erratas del 12 enseña cuatro errores con su fuente en vez de «más de 40», que no tiene lista que lo respalde; y los datos provinciales salen como imagen en X e Instagram, una provincia por pieza con su cifra en el registro.
- La prueba de X Premium (13-27 nov) es gasto: sin el visto bueno de la persona antes del 13, no se hace.
- Piezas del 12, 14, 15 y 16 nov listas en `internal/semana_2026-11-09/`; las del 10 y el 11, en `internal/dia_2026-11-10/` y `internal/dia_2026-11-11/`.

## Revisión del 2 de noviembre (primera semanal)

- *Lo que vale tu voto* está publicada desde el 1 nov (democraciareal.es/voto), una semana antes de lo previsto. La ruta seguía diciendo «falta publicarla»: corregido.
- No va nada tarde: lo siguiente con fecha es mover la calculadora de la nómina (3-4 nov), que depende de la persona.
- Sin cambios de fechas para las dos próximas semanas. Piezas del 6 y el 7 nov listas en `internal/semana_2026-11-02/`.

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
2. **Lo que sale fuera de la web lo aprueba una persona.** En la web propia, la IA publica lo que pasa dos comprobaciones independientes y el check, y lo dice. Reglas completas en [`GOBIERNO.md`](GOBIERNO.md).
3. **Máximo tres tareas abiertas a la vez.** Si entra una nueva, sale otra.

---

## Los productos, revisados el 1 de noviembre

| # | Producto | Fecha | Estado |
|---|----------|-------|--------|
| 1 | **Calculadora de la nómina** | Publicada el 1 nov | Cifras con dos comprobaciones de IA. Vídeo en Shorts, TikTok y Reels desde el 3 nov |
| 2 | **Lo que vale tu voto** (calculadora por provincia) | Publicada el 1 nov | Comprobada contra el BOE por dos IA. Falta moverla: vídeo listo para el 5 nov |
| 3 | **Las reglas del juego, reducida**: 6 estándares × partidos con grupo propio | 13 nov | **Publicada el 12 nov** en /reglas, un día antes de lo anunciado. Hecha el 1 nov con dos lecturas de IA; réplica hasta el 10 nov, sin respuestas |
| 4 | **Calculadora de pensiones** | Publicada el 1 nov | Reescrita sin el enfoque generacional; cifras con dos comprobaciones |
| 5 | **Simulador de IA y empleo** | Publicado el 1 nov | Rehecho como escenario, no como predicción |
| 6 | **Calculadora del autónomo** | Publicada el 1 nov | Cuota de 2026, IRPF y comparación con un asalariado; coincide con el simulador de la Seguridad Social |
| — | Decretómetro | Diciembre | Aplazado. Como mucho, una pieza sobre la convalidación de los decretos de vivienda |
| — | Promesómetro | 30 nov, solo electos | Aplazado. Sin tiempo para revisar 20-30 fichas por partido en campaña |

---

## La ruta, por fases

### Fase A · 1-8 nov — Publicar lo que ya hay y construir el producto estrella

- [x] Segunda comprobación independiente de las cifras nuevas (sustituye a la firma humana, que no se inventa) y `git push`
- [x] Publicar la calculadora de la nómina
- [x] Moverla: vídeo en Shorts, TikTok y Reels (3 nov). El post de Reddit lo retiraron los moderadores (ver [Distribución](#distribución-dónde-está-la-gente))
- [x] **Lo que vale tu voto** como calculadora: publicada el 1 nov
- [x] Privacidad: lista de email cerrada (tenía 0 inscritos) hasta que haya un responsable con nombre
- [x] Análisis legal de la matriz (1 nov): no hace falta abogado previo si se cumplen las seis condiciones de `DECISIONES.md`; solo si un partido amenaza con acciones legales
- [x] Descargar estatutos y códigos éticos, construir la matriz y publicar sus criterios (1 nov)
- [x] Enviar a cada partido su fila: 8 correos enviados el 1 nov; plazo hasta el 10

### Fase B · 9-20 nov — Matriz y campaña

- [x] Extraer las 6 cláusulas por partido con dos lecturas independientes. Sin cita literal, «no consta»
- [x] 11-12 nov: incorporar las respuestas literales y corregir lo que señalen (no hubo ninguna)
- [x] **Publicar la matriz**: publicada el 12 nov, la víspera de la campaña. Correos a verificadores y Civio, el mismo día
- [x] Desde el 13 nov, una pieza al día: provincias (16-19), autónomo, listas y presupuesto (20-23); una celda de la matriz el 23. Del 24 al 27, listas
- [x] Revisar las 11 cifras de la matriz, que vencían el 20 nov: hecho el 23 (la del PSOE, pendiente de repetir el 30)

### Fase C · 21-29 nov — Cierre de campaña

- 24-28 nov: ni encuestas propias ni ajenas · **28 nov: silencio total**
- 29 nov: con los resultados, actualizar *Lo que vale tu voto* con 2026 (sustituye a «El otro Congreso»)

### Fase D · 30 nov-enero — Después

- **30 nov: se deja la pieza diaria en todas las redes.** En tres semanas trajo unas 80 visitas a la web en 30 días y casi ningún seguidor. Se mantienen la web y las cifras al día y se elige una sola vía de difusión con los datos de la campaña (candidatas: llevar la matriz a periodistas, o YouTube). Criterio: si a final de diciembre la web no llega a 100 visitas reales por semana, se cierra la difusión y se publica un informe final del experimento
- 30 nov: compromisos de quienes obtengan escaño (Promesómetro reducido)
- **Candidata a vía única (propuesta de la persona, 23 nov): auditar al Gobierno que salga del 29N decisión a decisión.** Une el Promesómetro, el Decretómetro y la contrapropuesta en una sola ficha por decisión, con tres columnas: lo que hace (BOE y referencias del Consejo de Ministros), lo que prometió (programa, con cita literal y página, como en la matriz) y lo que habríamos hecho nosotros. Condiciones: las dos primeras columnas se verifican como cualquier cifra; la tercera va marcada como propuesta propia y solo donde haya una trabajada, porque nuestros documentos son borradores; no se audita todo, solo los reales decretos-ley, las leyes y lo que toque una promesa del programa. Hasta que haya Gobierno nuevo, solo el Promesómetro de quienes gobiernen. Forma (la persona, 23 nov): una página muy visual, de un vistazo, y el detalle para quien quiera verlo. Arriba, un marcador por partido: el Gobierno, con sus promesas cumplidas, en marcha, parciales, incumplidas y sin empezar; cada partido de la oposición, con sus votos en el Congreso frente a lo que dice su programa (datos abiertos de votaciones del Congreso). Debajo, las decisiones por fecha y tema; al pulsar una, la ficha de tres columnas con su fuente y cómo votó cada grupo. Cada estado (cumplida, parcial…) necesita criterios escritos antes de empezar, como la escala de la matriz. No se llamará «barómetro»: en España es la palabra de las encuestas del CIS, y esto no mide opinión sino hechos documentados. La persona dio por bueno el boceto como base el 23 nov; está en `internal/marcador/boceto.html`, con datos inventados
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
| | Rubén Gisbert como contacto prioritario (1 nov): postura política muy marcada y enfrentado con periodistas y verificadores, que son a quienes el proyecto necesita convencer |

**Ángulo nuevo** para prensa y creadores: *«Un proyecto ciudadano compara las reglas internas de todos los partidos, cláusula a cláusula y empezando por las suyas, y publica cómo verifica cada dato.»*

### Distribución: dónde está la gente

Con 2 seguidores, lo que publicamos en nuestras cuentas no lo ve nadie. El alcance hay que pedirlo prestado: sitios donde alguien sin seguidores puede llegar a miles de personas si lo que trae sirve. Una herramienta que la gente usa con sus propios datos es justo eso.

| Canal | Qué llevar | Cómo |
|-------|------------|------|
| **TikTok, Shorts, Reels** | Grabación de pantalla de una calculadora con un caso concreto: «Cobro 28.000 €. Esto es lo que cuesto a mi empresa» | El algoritmo reparte por interés, no por seguidores. Es el canal con más potencial partiendo de cero |
| **Menéame** (en pausa) | Una herramienta por envío, con titular descriptivo y sin adjetivos | Mismo riesgo que Reddit con una cuenta nueva que solo sube lo suyo. Solo si alguien con historial lo envía por su cuenta |
| ~~Reddit~~ | **Descartado el 4 nov.** r/SpainPolitics retiró el post de la nómina y vetó la cuenta para siempre; dos comentarios lo llamaron «AI slop» y «post de vibecoders» | En los foros españoles de política, enlazar lo propio y decir que está hecho con IA se castiga. No se vuelve a publicar ahí; si alguien enlaza la web por su cuenta, bien |
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
- Descripción: *«Música, letra y vídeo hechos con IA.»* Activar la etiqueta de contenido sintético de cada plataforma. Es una línea roja del plan, y el reglamento europeo de IA lo exige desde agosto de 2026.
- Enlace en la biografía a la web o al vídeo largo. Ni «vota» ni «no votes».

**Ritmo:** un lote semanal (por ejemplo, el domingo) de unos 3 clips, y se publica uno cada dos o tres días en YouTube Shorts, TikTok e Instagram Reels a la vez. Mejor poco y constante que veinte clips de golpe.

**Tema semanal:** además de los clips, un tema por semana con vídeo corto propio. Cada tema tiene carpeta en [`enseñar/`](enseñar/README.md) (borrador, `verificacion.md`, guion). Antes de grabar, [`GUIA_VIDEOS.md`](enseñar/GUIA_VIDEOS.md): hacer pensar, sin politizar. Primer tema: [`futuroIA/`](enseñar/futuroIA/).

**Más adelante,** cada producto da su propio clip: una celda de la matriz, un decreto en el Decretómetro, un dato provincial. Eso sí lleva cifras verificadas.

**Cómo saber si sirve:** a las cuatro semanas, qué clips tuvieron más visualizaciones, seguidores nuevos y visitas a la web (Cloudflare). Se repite lo que funciona y se deja lo demás.

**Hecho:** la cuenta de TikTok está abierta (@democraciareal26) y las canciones se pueden publicar: se generaron con la cuenta de pago de Suno, que da la propiedad de las canciones a quien las crea (3 nov).

---

## Qué te toca a ti (solo tú puedes)

| Tarea | Cuándo |
|-------|--------|
| Publicar cada día la pieza del calendario (`internal/calendario_29N.md`), unos 5 minutos | Desde el 2 nov |
| Si un partido responde a la réplica de la matriz con una amenaza legal, consultar con un abogado antes de publicar | Si ocurre |
| Decidir qué es Democracia Real y si se mantiene el nombre | Enero |

---

## Mapa de documentos

| Documento | Para qué | Cuándo mirarlo |
|-----------|----------|----------------|
| **RUTA.md** (este) | Qué hacer y en qué orden | Cada día |
| [`GOBIERNO.md`](GOBIERNO.md) | Qué decide la IA, qué aprueba la persona y cómo se mide | Antes de decidir algo nuevo |
| [`DECISIONES.md`](DECISIONES.md) | Registro de cada decisión y métricas semanales | Cada lunes |
| [`plan_maestro_29N.md`](plan_maestro_29N.md) | Detalle de los productos, agentes y cadencia de campaña | Al construir un producto |
| [`Proximos pasos.md`](Proximos%20pasos.md) | Lista larga de pendientes y cifras sospechosas | Para elegir la siguiente tarea |
| [`Ideas.md`](Ideas.md) | Ideas con su análisis (matriz, verificación, consecuencias, contrapropuestas) | Al decidir qué construir después |
| [`estrategia_visibilidad.md`](estrategia_visibilidad.md) | Canales y tácticas de difusión (parte retirada) | Antes de difundir |
| [`internal/estilo_mensajes_redes.md`](internal/estilo_mensajes_redes.md) | Cómo escribir un tuit | Al redactar un mensaje |
| [`Democracia Real y democracia21 comparación, lagunas y mejoras.md`](Democracia%20Real%20y%20democracia21%20comparación,%20lagunas%20y%20mejoras.md) | Origen de todo. Informe externo | Solo como referencia |

**Si un documento contradice a este, manda este.** Los cambios de prioridad se hacen aquí primero.

*Revisar cada lunes hasta el 30 de noviembre.*
