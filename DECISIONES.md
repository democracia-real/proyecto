# Registro de decisiones

*Cada decisión del proyecto, con su motivo y quién la tomó o aprobó. Las reglas están en [`GOBIERNO.md`](GOBIERNO.md). Lo más reciente, arriba.*

**IA** = la decide y la ejecuta la IA. **Persona** = la decide la persona responsable. **IA + Persona** = la propone la IA y la aprueba la persona.

---

## 3 noviembre 2026

| Decisión | Motivo | Quién |
|----------|--------|-------|
| Publicado el vídeo de la nómina en YouTube Shorts (https://youtube.com/shorts/Gx8MFJRrkv8), TikTok e Instagram Reels, con la etiqueta de IA en TikTok e Instagram. Lo sube la IA desde el navegador de la persona, con su visto bueno | Primera pieza de la calculadora en las redes que no dependen de seguidores | IA + Persona |
| En YouTube se responde «No» a la pregunta de uso de IA | Pregunta por personas reales, grabaciones alteradas, escenas realistas o música, y el vídeo es texto animado sin música. La descripción dice que está hecho con IA | IA |
| No compartir el reel en el Facebook personal vinculado a Instagram | Separa el proyecto de la identidad de la persona | IA |
| Los vídeos salieron sin música; los siguientes llevarán música libre de derechos integrada en el vídeo | En TikTok y Reels, un vídeo sin sonido suele retener menos | IA |
| La música la compone un script del proyecto (`herramientas/musica.py`), nota a nota, en vez de sacarla de una biblioteca | No tiene derechos de terceros ni depende de las bibliotecas de cada red, que cambian según la cuenta y el país | IA |
| El reel de Instagram, con 0 reproducciones, se borró y se volvió a subir con música (https://www.instagram.com/reel/DfSrLV5oQo6/) | Era la única red donde rehacerlo no costaba nada | IA + Persona |
| El vídeo de TikTok, con 85 reproducciones, también se borró y se volvió a subir con música. TikTok lo guarda 30 días por si hay que restaurarlo | La IA propuso dejarlo (se pierden esas reproducciones y subir dos veces el mismo vídeo puede contar como duplicado); la persona prefirió rehacerlo | Persona |
| El Short también se volvió a subir con música (https://youtube.com/shorts/1fSoFdIBa6A). El anterior, con 14 visualizaciones, pasa a privado en vez de borrarse | La IA había propuesto dejarlo sin música y la persona pidió que llevara sonido. En YouTube, borrar es definitivo; en privado nadie lo ve y se puede recuperar | Persona |
| En el Short nuevo se vuelve a responder «No» a la pregunta de uso de IA | Ahora pregunta por música «que sea el foco del vídeo», y aquí es de fondo, compuesta por un script, no por un modelo generativo. La descripción sigue diciendo que el vídeo está hecho con IA | IA |

---

## 2 noviembre 2026

| Decisión | Motivo | Quién |
|----------|--------|-------|
| Primera revisión semanal: ninguna cifra con la revisión vencida (la primera vence el 30 nov). Las dos URL de la OCDE que dan error 403 al check responden con un navegador; se volvió a descargar *Taxing Wages 2026* y sigue diciendo 41,4% para España | El servidor de la OCDE rechaza al programa del check, no la página. No cambia ninguna cifra | IA |
| Marcar *Lo que vale tu voto* como publicada el 1 nov en la RUTA | Estaba en línea desde el 1 nov y la ruta decía «falta publicarla» | IA |
| Vídeo de pensiones del 7 nov con los tres tramos de edad del censo, no solo los extremos | La mitad del censo tiene de 35 a 64 años; enseñar solo los extremos volvía al enfoque generacional que se quitó el 1 nov | IA |
| La imagen del SMI del 6 nov solo usa el bruto, la cotización de la empresa y el coste total; ni IRPF ni neto | El IRPF de la calculadora es una estimación y para el SMI no se ha comprobado aparte | IA |

---

## 1 noviembre 2026

| Decisión | Motivo | Quién |
|----------|--------|-------|
| La IA gestiona el proyecto día a día y consulta a la persona solo lo crítico | Es el experimento: comprobar si una IA puede hacer este trabajo mejor que como se hace hoy | Persona |
| Comprobar todas las cifras de la web contra su fuente | Una auditoría externa ya había encontrado cinco errores; al repetirla, fallaban casi todas | IA |
| Retirar el «coste de la corrupción» (50.000 M€), los «87.000 titulados al año» y la «nota del CIS a los políticos» | No tienen fuente o la fuente dice otra cosa | IA |
| Rehacer las tres calculadoras con un modelo común y los parámetros de 2026 | Usaban tipos de 2025, un IVA inventado y porcentajes sin fuente. Ahora la cuña da 41,5% para el salario medio; la OCDE, 41,4% | IA |
| Quitar de la calculadora de pensiones el enfoque generacional («tabú», «boomer») | Las cifras que lo sostenían eran falsas (el 28% del censo tiene 65 o más años, no el 40%) y rompía la regla de medir a todos con la misma vara | IA |
| Presentar el simulador de IA y empleo como escenario, no como predicción | Los porcentajes por sector son supuestos propios; ninguna fuente los respalda | IA |
| Publicar las correcciones (commit `e0d44ab`) | La web en línea mostraba cifras erróneas | IA + Persona |
| No firmar `revision_humana` en nombre de la persona | Firmar algo que nadie ha revisado sería falso. Se sustituye por una segunda comprobación independiente de IA, y la web lo dice | IA |
| Las calculadoras pasan a ser el formato de los productos; *Lo que vale tu voto* se construye como calculadora antes del 8 nov | Es lo que más se comparte y lo que mejor encaja con la campaña | IA |
| Matriz de reglas reducida (6 estándares) para el 20 nov; Decretómetro y Promesómetro, después del 29N | No da tiempo a todo con calidad | IA |
| Canales: TikTok, Shorts y Reels, Menéame y Reddit antes que X | Con 2 seguidores, X no llega a nadie; esos canales no dependen de seguidores | IA |
| X Premium: como mucho, un mes del plan más barato del 13 al 27 nov, midiendo el resultado | El impulso a las respuestas no resuelve la falta de audiencia | IA |
| Cerrar la lista de email hasta que haya un responsable de datos con nombre | El RGPD exige un responsable identificable, y apuntarse a un proyecto político revela opiniones. La lista tenía 0 inscritos | Persona |
| Segunda comprobación de las 23 cifras nuevas con otro modelo, sin ver la primera | Sustituye a la firma humana. Confirmó 21 y corrigió 2: los intereses de 2024 son 38.793 M€ (39.644 era «operaciones de deuda») y el tramo de 35 a 64 años es el 50,8% del censo | IA |
| Cambiar la regla «nada sale sin que una persona lo apruebe» por la de [`GOBIERNO.md`](GOBIERNO.md) y decirlo en la portada | La IA gestiona el proyecto; seguir diciendo lo contrario sería falso | IA + Persona |
| Publicar `GOBIERNO.md` y este registro | Que cualquiera pueda juzgar las decisiones es parte del experimento | IA + Persona |
| La persona sube el vídeo de la nómina a Shorts y Reels y publica en r/spain con su cuenta | Son cuentas suyas; una IA no puede abrir cuentas ni publicar en su nombre sin permiso | Persona |
| *Lo que vale tu voto*: calculada con los resultados oficiales de 2023 y comprobada contra el BOE por una segunda IA | Producto estrella de la campaña | IA |
| Matriz sin consulta legal previa, con seis condiciones: criterios publicados antes que los resultados y aplicados igual a todos; cita literal en cada celda; «no consta» sin cláusula; sin adjetivos, nombres de personas ni logos; réplica de 7 días publicada literal; corrección pública en 24 h. Abogado solo si un partido amenaza con acciones legales | Informar con citas literales de documentos públicos sobre partidos está protegido por la libertad de información, y quien no se presenta ni pide el voto no hace campaña (LOREG, art. 50.4). La persona puede vetarlo | IA |
| Abierta la cuenta de TikTok (@democraciareal26) y enlazada en la web | Es el canal con más potencial sin seguidores | Persona |
| Calendario de una pieza al día hasta el 29N; del plan anterior se descartan las piezas con cifras falsas | `internal/calendario_29N.md` | IA |
| Activada la analítica de Cloudflare, que la política de seguridad de la web bloqueaba: hasta el 1 nov no se contaba ninguna visita | Sin medir no se puede saber qué funciona | IA + Persona |
| Revisión automática cada lunes a las 20:15 (tarea programada en el ordenador de la persona): cifras, métricas, ajuste de la RUTA y piezas de la semana | La IA no recuerda nada entre sesiones; sin esto, nada pasa si nadie abre una sesión. Pasa de las 9:00 a las 20:15 porque es cuando se enciende el ordenador | IA + Persona |
| Parte diario a las 20:00, solo de preparación: deja lista la pieza del día, revisa los avisos de error en GitHub y el estado de la web. No lee el correo, no publica y no corrige sin una persona delante | Que la persona tenga cada día lo que publicar en 15 minutos. La versión que además leía el correo y publicaba correcciones la bloqueó el sistema de permisos; esas dos cosas se hacen en la sesión diaria con la persona | IA + Persona |
| No difundir ni contestar vídeos de líderes de partidos que se presentan el 29N, y quitar a Rubén Gisbert de los contactos prioritarios | Difundir o criticar a un candidato sería hacer campaña; el proyecto necesita la confianza de periodistas y verificadores | IA |
| Pieza del 17 nov: qué prometen los programas sobre pensiones y si dicen cómo pagarlo | Convierte una opinión («no se va a poder pagar») en una pregunta comprobable igual para todos | IA |
| Publicar la calculadora del autónomo (cuota de 2026, IRPF y comparación con un asalariado) | Coincide con el simulador de la Seguridad Social en tres tramos; una segunda IA confirmó 8 de 9 cifras. La tarifa plana queda fuera porque la cifra oficial no cuadra | IA + Persona |
| Matriz: publicar ahora solo los criterios y la lista de fuentes; enviar la réplica el 3 nov (plazo, 10 nov) y publicar la matriz el 13 nov en vez del 20 | Los criterios van antes que los resultados, y el repositorio es público: subir la matriz entera la publicaría antes de que los partidos vieran su fila. El 13 empieza la campaña | IA + Persona |
| Los correos de réplica dicen que ninguna persona ha revisado las celdas y van firmados por «Democracia Real, proyecto ciudadano» | El borrador decía que una persona supervisaba la extracción, y no es cierto | IA |
| Enviar los correos como info@ con Gmail («Enviar como»), no con Cloudflare Email Sending | info@ solo reenvía; el envío de Cloudflare está en beta y exige un plan de pago. Para 8 correos, Gmail es gratis y basta | IA |
| Enviados los 8 correos de réplica el 1 nov (20:48-20:54), uno por partido, desde la cuenta del proyecto («Democracia Real»), con plazo hasta el 10 nov. Cada texto se comprobó con su huella SHA-256 antes de enviarlo | Ya estaban listos y la persona dio el visto bueno; salir antes da más días de plazo | IA + Persona |
| En el correo a Junts, la etiqueta «salvo "lawfare"» pasa a «la Executiva puede declararla improcedente» | La palabra no aparecía en la cita y sonaba a opinión. Antes de publicar el 13, revisar la misma etiqueta en los datos de la matriz | IA |
| El correo del proyecto vive en democraciareal26@gmail.com: info@ reenvía ahí | Separa lo del proyecto del correo personal de la persona responsable | Persona |

---

## Métricas semanales

| Semana | Errores sin corregir en 24 h | Fechas cumplidas | Visitas | Seguidores | Citas | Horas humanas | Gasto |
|--------|------------------------------|------------------|---------|------------|-------|---------------|-------|
| 26 oct-1 nov (punto de partida) | 0 tras la revisión | 0 de 4 productos en fecha | Sin medir | 2 en X | 0 | — | 0 € |
| 2 nov (primera revisión semanal) | 0 (ningún aviso abierto en GitHub) | 1 de 1 vencidas; 2 adelantadas (*Lo que vale tu voto* y la réplica) | La persona | La persona | 0 | — | 0 € |
