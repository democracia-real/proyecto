# Ideas para Democracia Real

*11 octubre 2026 · Documento de trabajo, no aprobado. Las afirmaciones marcadas con (verificar) no están comprobadas.*

---

## 1. Lo que ha pasado esta semana, y por qué es una oportunidad

Una comparación con democracia21 encontró tres cifras mal en la Radiografía, y al revisarlas aparecieron dos más:

- el ~85% de legislación por decreto-ley no tenía fuente (el dato real ronda el 50%);
- el índice de corrupción era el de 2022 etiquetado como 2024;
- el CGPJ tiene 20 vocales, no "12 de 12";
- la abstención media era del 28%, no del 43%;
- el número de decretos-ley de la XIV legislatura era el de la XII.

Todas las cifras revisadas estaban mal. Es cierto que se revisaron porque parecían dudosas, pero basta para tratar el resto como no verificado hasta comprobarlo.

La causa no es la IA en sí. Lo que falló es que **nadie comprobó las cifras contra la fuente**. Un sistema de agentes con revisión humana lo habría reducido mucho, pero solo si los agentes están obligados a descargar la fuente y dejar rastro. Varios agentes del mismo modelo opinando entre sí pueden coincidir en el mismo error.

La oportunidad: casi ningún partido ni medio enseña **cómo verifica**. Si Democracia Real lo hace visible, el error de esta semana se convierte en la prueba de que el sistema funciona. Publicar la fe de erratas da más credibilidad que no haberse equivocado nunca, porque eso no lo cree nadie.

---

## 2. Qué es Democracia Real: una propuesta

Hoy el README dice "crear un partido", la hoja de ruta acaba en elecciones y en la práctica es una persona que no va a presentarse. Conviene elegir y escribirlo.

**Propuesta: un estándar abierto y un observatorio, con el partido como opción futura.** *(Aceptada el 11 oct y aplicada en el README, la portada y el módulo 04.)*

| | Partido | Estándar abierto + observatorio |
|---|---------|------------------------------|
| Qué hace | Compite por votos | Define reglas de integridad y mide a todos con ellas |
| Necesita | Promotores, estatutos, notario, campaña, dinero | Rigor, constancia y una fuente pública por cada dato |
| Encaja con una persona e IA | Mal | Bien: la IA es fuerte leyendo y comparando documentos a escala |
| Frente a democracia21 | Rival pequeño con nombre parecido | Árbitro que también les evalúa a ellos |
| Neutralidad | Difícil de creer | Se demuestra aplicando la misma vara |
| La pregunta "¿con quién pactaríais?" | Sin respuesta | Se convierte en "¿qué partidos adoptan el estándar?" |

Un partido podría nacer después, adoptando el estándar como estatutos. El orden importa: primero demostrar que las reglas funcionan y luego pedir el voto.

**Una forma legal mínima: una asociación** (Ley Orgánica 1/2002). Da un responsable identificable para el tratamiento de datos, una cuenta bancaria y un CIF, y es más barata y rápida que un partido (verificar: plazos y coste en el registro autonómico o nacional que corresponda).

---

## 3. Idea estrella: "Las reglas del juego, partido a partido"

### Qué es

Una matriz visual con los **partidos en filas y los estándares de integridad en columnas**. Cada celda tiene un color y, al pulsarla, se ve **la cláusula literal del estatuto o del código ético**, con enlace al PDF, página, fecha de consulta y quién lo verificó.

Es la primera capa, "lo que dicen frente a sus propias reglas". Solo usa documentos públicos que los partidos ya tienen: estatutos y códigos éticos. Se puede hacer antes de la campaña y no depende de que nadie responda.

### Estándares (primera versión, 12)

| # | Estándar | Pregunta que responde |
|---|----------|----------------------|
| 1 | Límite de mandatos | ¿Cuántas veces puede repetir alguien en la dirección o como cargo electo? |
| 2 | Alcance de las primarias | ¿Qué puestos se eligen por primarias: solo la cabeza o toda la lista? |
| 3 | Tope salarial | ¿Hay un máximo de retribución para cargos? ¿Cuánto? |
| 4 | Declaraciones de bienes públicas | ¿Se publican o solo se "custodian"? |
| 5 | Qué pasa si te investigan | ¿Qué hecho objetivo obliga a dimitir: investigación, juicio oral o condena firme? |
| 6 | Puertas giratorias | ¿Cuántos años de espera antes de ir al sector que regulabas? |
| 7 | Cuentas publicadas | ¿Se publican en la web con detalle o solo se envían al Tribunal de Cuentas? |
| 8 | Disciplina de voto | ¿Hay multas o sanciones por votar distinto del grupo? ¿De cuánto? |
| 9 | Crítica interna | ¿Se puede sancionar a un afiliado por criticar en público? |
| 10 | Órgano de garantías | ¿Quién nombra a quien juzga a los afiliados? |
| 11 | Revocación | ¿Pueden los afiliados destituir a la dirección? ¿Con qué porcentaje? |
| 12 | Quién aprueba qué | ¿Puede la dirección cambiar estatutos o reglamentos sin la asamblea? |

### Escala

**Sí, con cláusula** · **Parcial** (existe con excepciones o sin concretar) · **No** · **No consta** (no aparece en los documentos públicos).

"No consta" no es "no". Esa distinción protege frente a reclamaciones y es más honesta.

### Qué partidos

Todos los que tuvieron grupo propio en la legislatura que acaba, más democracia21 por ser el lanzamiento más reciente. Todos a la vez: si se empieza solo por democracia21, parecerá un ataque a un rival.

**Y Democracia Real en la primera fila, evaluada con la misma regla.** Según sus documentos, saldría así:

| Estándar | Democracia Real |
|----------|-----------------|
| Límite de mandatos | Sí (2-3 mandatos según el cargo, en `democracia_interna.md`) |
| Tope salarial | Parcial: dice "X veces el SMI", sin concretar |
| Puertas giratorias | Parcial: el código ético dice "X años", el README dice 5 |
| Qué pasa si te investigan | Sí: dimisión por imputación por corrupción. Más estricto que la mayoría, pero conviene definir el hecho procesal exacto |
| Órgano de garantías | No consta: no hay ninguno constituido |
| Cuentas publicadas | No aplica todavía: no hay entidad legal ni cuentas |
| Responsable identificable | No: hoy no hay nadie con nombre |

Enseñar dónde falla uno mismo es lo que hace creíble todo lo demás.

### Diseño visual

- La matriz entera en una pantalla, con colores sobrios (no rojo y verde de semáforo, que se lee como opinión) y un texto corto en cada celda: "2 mandatos", "juicio oral", "no consta".
- Al pulsar una celda: cita literal, artículo, enlace al PDF, fecha de consulta, verificado por, y "¿somos injustos? Pide una rectificación".
- Filtros: "solo los partidos de mi comunidad" o "comparar dos partidos".
- **Historial de cada celda**, como en Git: si un partido cambia sus estatutos, se ve qué cambió y cuándo.
- Ficha descargable por partido para periodistas, con licencia abierta.

### Gancho para el 29N

*"Antes de votar a un partido, mira sus reglas internas. Esta es la cláusula. Compruébala tú."* Es neutral, no pide el voto y cualquiera puede verificarla.

### Precauciones

- **Derecho de réplica**: enviar a cada partido su fila antes de publicar, con un plazo, y publicar la respuesta literal.
- **Solo documentos, nunca personas**: se evalúan reglas, no a gente concreta. Sin adjetivos.
- **Consulta legal** sobre el riesgo de vulnerar el derecho al honor antes de publicar.
- Los estatutos están en el Registro de Partidos del Ministerio del Interior, y la Ley 19/2013 de transparencia obliga a los partidos a publicar cierta información (verificar: alcance exacto para estatutos y códigos éticos).

---

## 4. Segunda capa: lo que prometen frente a lo que hacen

Es más pesada y tiene más riesgo de error, así que va después de la matriz.

- **Antes de construir, mirar qué existe.** Un estudio académico midió el cumplimiento del pacto PSOE-Unidas Podemos con la herramienta Verba de Civio y lo comparó con Newtral (verificar la referencia). Maldita y Newtral también hacen seguimiento. Hay que encontrar el hueco y no repetir trabajo.
- **Hueco posible:** compromisos verificables con prueba primaria (BOE, Congreso), con el mismo método para todos y con la verificación visible.
- **Alcance:** 20-30 compromisos por partido con grupo, no todas las promesas.
- **Estados:** cumplido · en curso · parcial · bloqueado (por ejemplo, decreto derogado) · incumplido · no evaluable. Lo binario cumple/no cumple engaña.
- **Prueba por estado:** cada cambio de estado enlaza a la norma, la votación o el documento que lo justifica.

---

## 5. El sistema de verificación (agentes + humano)

### Principio

**Verificar contra la fuente, no contra otra opinión.** Un agente que "está de acuerdo" no aporta nada. Uno que descarga la fuente y copia el fragmento donde aparece la cifra, sí.

### Flujo

1. **Extractor.** Saca afirmaciones atómicas: valor, unidad, año, ámbito y fuente citada.
2. **Verificador A.** Descarga la fuente primaria en esa ejecución (INE, Eurostat, BOE, Congreso, Transparency International). Devuelve valor encontrado, URL, fecha y fragmento literal. Prohibido responder de memoria: sin fragmento, la cifra queda "pendiente".
3. **Verificador B.** Otro prompt y, si se puede, otro modelo. Repite la comprobación sin ver el resultado de A. Si discrepan, pasa a humano.
4. **Reglas automáticas.** Detectan ediciones antiguas (como el IPC de 2022 etiquetado 2024), unidades que no cuadran, fuentes que no contienen la cifra, enlaces rotos y fechas de consulta caducadas.
5. **Humano.** No lo lee todo. Revisa las discrepancias, todas las cifras de titular y una muestra al azar del 10%. Firma en el commit.
6. **Re-verificación periódica.** Cada cifra tiene una fecha de revisión según su fuente: el IPC cada febrero, la EPA cada trimestre, PISA cada tres años.

### Formato del registro

```json
{
  "id": "ipc-espana",
  "afirmacion": "España obtiene 55/100 en el Índice de Percepción de la Corrupción",
  "valor": 55,
  "unidad": "puntos sobre 100",
  "periodo": "IPC 2025",
  "fuente": "Transparency International",
  "url": "https://transparencia.org.es/actualidad/indice-de-percepcion-de-la-corrupcion-2025/",
  "fragmento": "siendo su puntuación de 55/100",
  "consultado": "2026-10-11",
  "estado": "verificado",
  "verificado_por": ["agente-a", "agente-b", "humano:alias"],
  "revisar_en": "2027-02-15",
  "usado_en": ["web/docs/radiografia.html", "01_diagnostico_del_sistema/README.md"]
}
```

### Lo que se ve en público

- **Etiqueta en cada tarjeta:** verificado (con fecha), pendiente, discutido u obsoleto.
- **Contador en la portada:** "Cifras verificadas: 9 de 31". Ningún partido se atreve a mostrar eso, y es justo lo que da confianza. Además obliga a seguir verificando.
- **"Historial de un dato":** al pulsar una cifra se ve su historia: cuándo entró, quién la cambió y por qué. Es el historial de Git hecho visual, el equivalente a `git blame`.
- **Página de erratas** con todo lo corregido, incluida esta semana.

### Integración continua

El repo ya tiene GitHub Actions. Un paso más en cada push: comprobar que las cifras de la portada están en el registro como verificadas y que sus enlaces responden. Si falla, no se despliega.

---

## 6. Otras ideas visuales

| Idea | Qué enseña | Esfuerzo |
|------|-----------|----------|
| **Diff de estatutos** | Cómo cambian los estatutos de un partido entre congresos, con el formato de cambios de GitHub: líneas en verde y en rojo | Medio: hace falta conseguir versiones antiguas |
| **Decretómetro en línea temporal** | Cada decreto-ley como un punto: convalidado, derogado, reaprobado. Por legislatura y por presidente | Bajo: los datos ya están casi listos |
| **Lo que vale tu voto, en mapa** | Votos por escaño en cada provincia y votos que no eligieron a nadie | Bajo: ya está en el plan 29N |
| **Las "X" pendientes** | Contador público de los huecos sin concretar en nuestro propio código ético. Se ponen a cero en público | Muy bajo |
| **¿Quién eligió a quién?** | Grafo de quién nombra a quién: CGPJ, Tribunal Constitucional, Fiscalía, RTVE, reguladores | Medio |

---

## 7. Liderazgo sin caudillo

La ley obliga a tener representante legal y responsable económico. Eso no obliga a concentrar poder. La distinción útil es **representación legal frente a poder de decisión**:

- Cargos legales con funciones tasadas por escrito: firman, representan y rinden cuentas, pero no deciden la línea política.
- Rotación y límite de mandatos (ya están en `democracia_interna.md`).
- La asamblea aprueba su propio reglamento y su orden del día. Es justo lo que democracia21 deja en manos de su dirección.
- Ninguna reforma de estatutos sin la asamblea.
- Con pocas personas, valorar el sorteo entre voluntarios para algunos cargos de garantía.

---

## 8. La IA en el discurso

El README dice: *"La IA no tiene intereses, no es corrupta"*. Es discutible: los modelos los entrena una empresa con unos datos y los configura quien los opera, y esta semana ha demostrado que se equivocan con seguridad.

Propuesta de cambio:

> *"La IA no decide y no es neutral. Por eso la obligamos a dejar rastro: cada dato con su fuente, su fecha y quién lo comprobó."*

Es más honesto y más difícil de atacar, y convierte la crítica en el argumento. *(Aplicado el 11 oct en el README, la portada, el módulo 05 y la página web de IA.)*

---

## 9. Riesgos

| Riesgo | Respuesta |
|--------|-----------|
| Derecho al honor al evaluar partidos | Solo documentos, cita literal, réplica previa y consulta legal |
| "Sois de X" | Misma vara para todos a la vez, registro de equilibrio y Democracia Real evaluada la primera |
| Datos personales (RGPD) | Responsable identificable antes de captar emails. Las opiniones políticas son datos de categoría especial |
| Sesgo del modelo | Segundo verificador con otro modelo, fuente obligatoria y muestra humana al azar |
| Agotamiento de una persona | Hacer menos y bien. La matriz y el registro valen más que diez productos a medias |
| Confusión con democracia21 | Decidir el nombre y explicarlo. Evaluarles con respeto, nunca atacarles |

---

## 10. Aparcado, con motivo

| Idea | Por qué se aparca |
|------|-------------------|
| Voto electrónico y democracia líquida a gran escala | Riesgo de seguridad y de concentración de delegaciones. Primero, un piloto pequeño y auditado |
| Alertas de corrupción que señalen a personas | Falsos positivos y presunción de inocencia. Solo patrones sobre contratos y normas, nunca nombres |
| Presentador IA diario | Mucho trabajo y poca credibilidad sin una cara humana detrás. Si se hace, siempre etiquetado |
| Programa completo de gobierno | No es el papel de un estándar. Sí, propuestas con coste en vivienda y territorio |

---

## 11. democraciareal.es como auditor y espacio colaborativo

*Añadido el 11 oct. Idea del autor, desarrollada aquí. No aprobada.*

### Cuatro zonas

| Zona | Qué responde | Contenido | Estado |
|------|--------------|-----------|--------|
| **1. Reglas** | ¿Qué dice cada partido de sí mismo? | La matriz «Las reglas del juego, partido a partido» (sección 3) | Es el producto 4 del plan 29N |
| **2. Vigilar** | ¿Qué hacen? | Decretómetro, votaciones, promesas y su estado. Todo con fuente primaria y misma vara para todos | Productos 2 y 3 del plan 29N, como semilla |
| **3. Consecuencias** | ¿Qué pasó tras decidir, o tras no decidir? | Fichas de medida (ver abajo) | Después del 29N |
| **4. Propuestas** | ¿Qué propone la gente? | Espacio colaborativo (ver abajo) | Después del 29N, empezando por GitHub |

Las zonas 1 y 2 ya están en el plan. Lo nuevo son la 3 y la 4, y son las que más riesgo tienen.

### Zona 3: consecuencias de medidas tomadas y no tomadas

Es lo más potente y lo más peligroso: atribuir un efecto a una decisión es el terreno donde más se miente en política.

**Ficha de medida**, con campos fijos:

1. Qué se decidió o se dejó de decidir, quién y cuándo, con enlace al BOE, la votación o el documento.
2. Qué objetivo declaró la medida.
3. Indicador oficial elegido **antes** de mirar el resultado, y su valor antes y después, con fuente.
4. Qué más pasó en ese periodo (otras medidas, contexto económico).
5. Conclusión con una escala honesta: *se cumplió el objetivo · no se cumplió · no se puede saber · demasiado pronto*. Nunca «esta medida causó X» salvo que haya evidencia que lo sostenga (estudio, evaluación oficial).

**Medidas no tomadas**, empezando por casos con plazo objetivo y comprobable. Ejemplo ya verificado: la LO 3/2024 mandó al CGPJ proponer en seis meses un nuevo sistema de elección de vocales. En febrero de 2025 el CGPJ no logró mayoría de tres quintos y remitió dos propuestas distintas. Hay un mandato legal, un plazo y un resultado, sin opinión de por medio.

**Casos de arranque con datos ya reunidos:** los decretos de vivienda derogados el 2 de octubre y los 11 derogados en la XV legislatura (qué pasó con lo que regulaban tras la derogación).

**Reglas del método, publicadas antes que ningún resultado:**
- Misma plantilla para Gobierno central, autonomías y oposición donde gobierne.
- El indicador se fija y se publica antes de medir. Si no, es elegir la cifra que gusta.
- Cada ficha pasa por el registro de cifras y su verificación.
- Réplica previa al afectado, igual que en la matriz.
- Fichas sobre medidas, no sobre personas.

### Zona 4: espacio colaborativo

**Empezar sin construir nada.** El repo ya tiene Issues, Discussions y la plantilla [`plantilla_redaccion_propuestas.md`](03_propuestas_institucionales/plantilla_redaccion_propuestas.md). Una plataforma propia (Decidim, Consul) tiene sentido solo cuando haya gente que la use, y trae moderación, RGPD y responsabilidad por contenido ajeno.

**Cada propuesta, con los mismos campos que pide el pilar 2:** problema, datos con fuente, coste, impacto esperado y cómo se mediría. Una propuesta sin esos campos queda como «idea», no como «propuesta».

**Dos tipos de aportación:**
- *Propuestas de reforma*: entran en los módulos 03 y 04 por pull request, con revisión pública.
- *Correcciones y datos*: un error, una fuente mejor, un estatuto nuevo. Son lo más útil y lo más barato de moderar. Reciben crédito visible.

**Lo que no haría al principio:**

| No | Por qué |
|----|---------|
| Votos o «apoyos» a propuestas | Sin verificación de identidad se manipulan con cuentas falsas, y una persona no puede detectarlo. Un ranking manipulado sería peor que no tenerlo |
| Comentarios abiertos sin moderar | Una persona no modera ni la mitad. Spam, insultos y acusaciones sobre personas reales caen bajo tu responsabilidad |
| Lista de «las mejores propuestas» | Parecería que el proyecto adopta posiciones. El README dice «mecanismo, no contenido» |
| Que la gente señale corrupción de personas concretas | Falsos positivos y presunción de inocencia |

**Reglas de moderación escritas desde el primer día:** qué se admite, qué se borra y por qué, y un registro público de lo borrado. Lo mismo que se exige a los partidos.

### Orden realista

| Cuándo | Qué |
|--------|-----|
| Hasta el 10 nov | Zonas 1 y 2 con los productos ya planificados. Reorganizar la web con esas dos entradas |
| Diciembre | Plantilla de ficha de medida y 3-5 fichas de prueba (CGPJ, decretos de vivienda...). Publicar el método primero |
| Enero | Abrir la zona 4 en GitHub Discussions con la plantilla y las reglas de moderación. Medir si alguien participa antes de construir nada |
| Después | Plataforma propia solo si hay uso real y alguien más que modere |

### Riesgos específicos

- **Dispersión.** Cuatro zonas son un proyecto de varias personas. Con una, la 3 y la 4 no deben empezar antes de que las dos primeras estén publicadas y verificadas.
- **Sesgo percibido.** La zona 3 es la más expuesta a «sois de X». Defensa: método y plantilla publicados antes, misma vara y réplica previa.
- **Legal.** Honor y rectificación en la zona 3. Responsabilidad por contenido de terceros en la 4 (LSSI). Durante la campaña, que nada de esto parezca pedir el voto. Entra en la consulta legal pendiente.
- **Responsable identificable.** Cuanto más participación, más urgente un responsable con nombre o una asociación.

---

## 12. «Qué propone cada partido y cómo lo haríamos nosotros»

*Añadido el 11 oct. Idea del autor, desarrollada aquí. No aprobada.*

### Por qué es buena

Es un gancho muy claro y encaja con lo que ya hay: el Promesómetro extrae las propuestas de cada partido y los módulos 02 y 03 ya contienen diagnósticos y reformas. Falta la tercera pieza, la comparación.

### Dos tensiones que hay que resolver antes

1. **Contradice el principio «mecanismo, no contenido».** El README dice que no dictamos qué decidir, solo cómo decidir. Una contrapropuesta a cada medida de cada partido es tomar posición, y si coincide más con un partido que con otro, parecerá campaña. Además, durante la campaña la Ley Electoral (LOREG) y la regla de no pedir el voto hacen esto delicado.
2. **Lo escaso es validar, no generar.** La IA produce una contrapropuesta en segundos, pero con cifras de coste, plazos y efectos que pueden estar mal. Es el mismo error de esta semana, ahora en forma de propuesta.

### Cómo hacerlo sin romper nada: tres capas

Cada tema se presenta en tres capas, siempre en este orden y con distinto estado de confianza:

| Capa | Qué muestra | Confianza |
|------|-------------|-----------|
| **1. Lo que dice cada partido** | Cita literal, página y enlace al programa. Sin adjetivos | Alta: se comprueba contra el PDF |
| **2. Qué se puede comprobar** | ¿Trae coste, financiación, plazo, responsable e indicador? ¿Es competencia de quien lo propone? ¿Qué dice la evidencia oficial disponible? | Media: cada dato pasa por el registro de cifras |
| **3. Un diseño posible, no «la solución»** | Cómo se podría diseñar de forma medible: piloto, indicador, plazo, coste estimado, cláusula de revisión. Con etiqueta visible: **«Borrador generado con IA, sin validar, abierto a crítica»** | Baja, y se dice |

La capa 3 es donde se mantiene el principio: en vez de decir «nuclear sí» o «alquiler con tope sí», describe el mecanismo para decidir y medir. Se puede decir *«cómo se podría comprobar si funciona»* aunque no se diga *«qué hay que hacer»*.

### Por tema, no por partido

En vez de «propuestas del PP» y «propuestas del PSOE», organizarlo por tema: **vivienda, pensiones, justicia, energía...** En cada tema, una tabla con todos los partidos en filas y las tres capas. Es más neutral, porque la comparación es la misma para todos y no parece un ataque ni un apoyo, y es más útil para quien quiere informarse.

### Condiciones

- **El mismo formato para todos, incluidos nosotros.** Nuestra propia propuesta se evalúa en la capa 2 como las demás. Si el estándar dice «sin coste no hay propuesta», lo cumplimos primero.
- **Nada de la capa 3 sale sin revisión humana**, y cada cifra de coste o efecto va al registro con fuente. Una estimación sin fuente se publica como «sin estimar», no como número.
- **Una sola contrapropuesta por tema, abierta a variantes.** Cualquiera puede proponer otro diseño por la zona 4 (sección 11), y se muestran todos con el mismo formato. Así no parece una «línea oficial».
- **Medir el sesgo.** Registro de equilibrio: ¿nuestro diseño se parece más a las propuestas de un partido que a las de otro? Si sí, se dice y se explica.
- **Consulta legal** antes de publicar, junto con la de la matriz y la de consecuencias.

### Cuándo

| Cuándo | Qué |
|--------|-----|
| Hasta el 29N | Solo las capas 1 y 2, que ya salen del Promesómetro: qué dice cada partido y si es auditable. Sin capa 3 durante la campaña |
| Diciembre | Piloto con **un** tema (vivienda es el candidato: ya hay documentos, datos y debate) y los partidos con grupo. 3-4 propuestas por partido con las tres capas |
| Enero | Valorar si se amplía, según el feedback y si alguien revisa conmigo |

### Riesgos

| Riesgo | Respuesta |
|--------|-----------|
| «Sois un partido disfrazado» | Capa 3 con etiqueta de borrador, mecanismo en vez de posición, variantes abiertas y registro de equilibrio |
| La IA inventa costes o efectos | Registro de cifras obligatorio, «sin estimar» cuando no hay fuente, revisión humana de toda la capa 3 |
| Una persona no puede revisar tanto | Un solo tema al principio. Es mejor un tema bien hecho que diez dudosos |
| Un partido reclama por la capa 1 o 2 | Cita literal, réplica previa de 7 días, igual que en la matriz |
