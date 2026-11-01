# Las reglas del juego, partido a partido: metodología

*1 noviembre 2026 · Versión reducida: 6 estándares. Hecha y comprobada por IA.*

> **Estado:** se publican primero estos criterios, antes que cualquier resultado. Cada partido recibe su fila por correo con 7 días para responder. La matriz completa, con las respuestas y la verificación, se publica el **13 de noviembre de 2026**.

---

## Reglas de publicación

1. **Los criterios van antes que los resultados.** Lo que cuenta como «sí», «parcial», «no» o «no consta» en cada estándar está escrito abajo y se publica antes que cualquier celda. Se aplica igual a todos, empezando por Democracia Real.
2. **Cada celda lleva su prueba:** la cláusula literal, el artículo, la página, el enlace al PDF y la fecha de consulta. Sin cláusula no hay color: «no consta».
3. **Sin adjetivos ni intenciones** atribuidas a ningún partido, **sin nombres de personas** y **sin logotipos**: solo los nombres de los partidos.
4. **Réplica:** cada partido recibe su fila por correo con 7 días para responder. Su respuesta se publica literal.
5. **Correcciones:** un error se corrige en público en menos de 24 horas y queda anotado en la página, con la fecha y lo que cambió.

## Qué mide

Lo que dicen las **reglas escritas** de cada partido: sus estatutos y su código ético. No mide si las cumplen, ni a ninguna persona, ni la calidad de un partido. Una celda dice qué está escrito y dónde.

## Qué partidos

Los ocho partidos que encabezaron un grupo parlamentario propio en el Congreso en la XV legislatura (2023-2026), más **Democracia Real en la primera fila**, medida con las mismas reglas:

| Grupo parlamentario | Partido cuyos documentos se miden |
|---------------------|-----------------------------------|
| Popular | Partido Popular (PP) |
| Socialista | Partido Socialista Obrero Español (PSOE), documentos federales |
| VOX | VOX |
| Plurinacional SUMAR | Movimiento Sumar. El grupo era una coalición; se miden los documentos del partido que le dio nombre |
| Republicano | Esquerra Republicana de Catalunya (ERC) |
| Junts per Catalunya | Junts per Catalunya |
| Euskal Herria Bildu | EH Bildu (federación de partidos) |
| Vasco (EAJ-PNV) | Euzko Alderdi Jeltzalea-Partido Nacionalista Vasco |

Democracia Real **no es un partido inscrito**: no tiene afiliados, ni asamblea, ni órganos constituidos. Sus documentos (`04_modelo_organizativo_partido/`) son borradores que no ha aprobado nadie. Se miden igual que los demás, con esa advertencia en cada celda.

No se mide el Grupo Mixto ni a los partidos sin grupo propio.

## Qué documentos

Los estatutos y el código ético vigentes, descargados de la web oficial de cada partido el 1 de noviembre de 2026. Lista, URL y huella SHA-256 en [`fuente/FUENTES.md`](fuente/FUENTES.md). El Registro de Partidos Políticos del Ministerio del Interior no publica los estatutos en línea: solo se pueden consultar en persona, con cita previa.

Cuando el partido publica un reglamento que desarrolla los estatutos en el mismo sitio, también se lee (PSOE, PP). **«No consta» quiere decir «no aparece en los documentos descargados»**, no «el partido no lo tiene».

## Por qué estos 6 de los 12 estándares

El plan tiene 12 estándares ([`Ideas.md`](../../Ideas.md), sección 3). Para la versión reducida se eligen los que cumplen tres condiciones: (1) los estatutos o el código ético tienen que decir algo sobre ello, porque la ley de partidos lo pide o es habitual; (2) la respuesta se puede leer en una cláusula, sin datos externos; y (3) se puede decidir «sí», «parcial» o «no» con una regla escrita de antemano, sin opinar.

| # | Estándar | Por qué entra |
|---|----------|---------------|
| 1 | Límite de mandatos | Es una cifra en una cláusula, o no está |
| 2 | Alcance de las primarias | Los estatutos dicen quién elige las candidaturas |
| 3 | Qué pasa si te investigan | La Ley Orgánica 6/2002 (art. 3.2.s) obliga a regularlo en los estatutos; cambia el hecho procesal y los delitos |
| 4 | Declaraciones de bienes públicas | Suele estar en el código ético; la diferencia entre publicar y entregar al partido es literal |
| 5 | Órgano de garantías | La ley obliga a tener un órgano de defensa del afiliado (art. 3.2.r); los estatutos dicen quién lo elige |
| 6 | Revocación | Si existe, los estatutos fijan quién la inicia y con qué porcentaje |

**Fuera, de momento:**

| Estándar | Por qué no entra en la versión reducida |
|----------|------------------------------------------|
| Tope salarial | Casi nunca está en los estatutos; cuando existe, suele estar en acuerdos internos o del grupo parlamentario |
| Puertas giratorias | Lo regula sobre todo la Ley 3/2015 para altos cargos; las cláusulas de partido son escasas y difíciles de comparar |
| Cuentas publicadas | Lo obliga la ley a todos (LO 8/2007, art. 14). Medirlo exige comprobar webs y cuentas, no cláusulas |
| Disciplina de voto | Está en los reglamentos de los grupos parlamentarios, que no siempre son públicos |
| Crítica interna | Las cláusulas («deslealtad», «menoscabo de la imagen») exigen interpretar, y eso es opinar |
| Quién aprueba qué | Exige cruzar muchos artículos; demasiado margen de error para la primera versión |

## La escala

| Valor | Quiere decir |
|-------|--------------|
| **sí** | Hay una cláusula que cumple la definición del estándar |
| **parcial** | Hay una cláusula, pero con excepciones, sin concretar o solo en parte |
| **no** | Hay una cláusula que dice lo contrario |
| **no consta** | No aparece en los documentos descargados, o las dos comprobaciones no coinciden |

**Sin cita literal no hay valor:** la celda queda «no consta». Y «no consta» no es «no».

## Cómo se decide cada estándar

Se mira el ámbito estatal o nacional del partido. Si una regla depende de una excepción que puede conceder un órgano, cuenta como excepción.

### 1. Límite de mandatos

*¿Cuántas veces puede repetir alguien en el cargo máximo del partido o en un cargo público electo?*

- **sí**: una cláusula fija un número máximo de mandatos (o de años) para el cargo máximo de dirección del partido (presidencia, secretaría general o equivalente) **o** para los cargos públicos electos, sin que un órgano pueda dispensarlo.
- **parcial**: el límite existe pero solo para otros cargos; o un órgano puede dispensarlo; o es una recomendación.
- **no**: una cláusula permite expresamente la reelección sin límite.
- La incompatibilidad entre cargos (no acumular dos a la vez) no es un límite de mandatos.

### 2. Alcance de las primarias

*¿Qué candidaturas eligen las personas afiliadas con su voto directo?*

Se mira la candidatura a las Cortes Generales (cabeza de lista, candidatura a la Presidencia del Gobierno, resto de la lista). Si los estatutos no distinguen el tipo de elección, la regla general para candidaturas.

- **sí**: las personas afiliadas (o inscritas) eligen por voto directo la cabeza de lista **y** el resto de la lista o su orden, de forma obligatoria.
- **parcial**: el voto directo es obligatorio solo para la cabeza de lista o la candidatura a la Presidencia; o es opcional, a decisión de un órgano; o las personas afiliadas solo ratifican una lista que propone un órgano.
- **no**: una cláusula atribuye la elección de las candidaturas a un órgano (comité, ejecutiva, asamblea de delegados) sin voto directo de las personas afiliadas.

### 3. Qué pasa si te investigan

*¿Qué hecho procesal suspende la afiliación u obliga a dejar el cargo?*

- **sí**: una cláusula fija un hecho procesal concreto (investigación o imputación, procesamiento, apertura de juicio oral o condena) que suspende de forma automática la afiliación u obliga a dejar el cargo, sin depender de la decisión de un órgano.
- **parcial**: hay consecuencia, pero depende de que un órgano la decida o la valore; o no se concreta el hecho procesal.
- **no**: una cláusula dice que un proceso judicial no tiene consecuencias internas.
- El texto corto de la celda dice el **primer** hecho procesal con consecuencia automática y para qué delitos. La Ley Orgánica 6/2002 exige como mínimo la suspensión cautelar automática con el auto de apertura de juicio oral por delitos relacionados con la corrupción.

### 4. Declaraciones de bienes públicas

*¿Se publican las declaraciones de bienes de los cargos, o solo se entregan al partido?*

- **sí**: una cláusula obliga a publicar (en la web del partido o en otro medio de acceso público) la declaración de bienes o patrimonio de los cargos públicos o de dirección.
- **parcial**: obliga a presentarla al partido o a un órgano interno sin que conste que se publique; o obliga a publicar solo rentas, actividades o intereses, no bienes; o solo remite a lo que digan las leyes.
- **no**: una cláusula dice que las declaraciones son reservadas o confidenciales.

### 5. Órgano de garantías

*¿Quién elige al órgano que juzga a las personas afiliadas?*

Se mira el órgano estatal que resuelve los expedientes disciplinarios. Si hay varios, el de la última instancia interna.

- **sí**: lo elige el congreso o la asamblea (personas afiliadas o sus delegados) **y** una cláusula prohíbe que sus miembros formen parte de los órganos ejecutivos de dirección.
- **parcial**: solo se cumple una de las dos condiciones; o lo elige el congreso pero a propuesta de la presidencia o del órgano ejecutivo.
- **no**: lo nombran el órgano ejecutivo de dirección o la persona que preside el partido.

### 6. Revocación

*¿Pueden las personas afiliadas destituir a la dirección?*

- **sí**: una cláusula permite que las personas afiliadas, con un porcentaje o número de firmas fijado, promuevan una votación de todas las personas afiliadas para revocar a quien ocupa el cargo máximo de dirección o al órgano ejecutivo.
- **parcial**: la revocación existe pero la decide un órgano (comité, consejo, asamblea de delegados, moción de censura), no el voto directo de las personas afiliadas; o existe sin fijar porcentaje ni procedimiento.
- **no**: una cláusula la excluye expresamente.

## Cómo se comprueba

1. **Primera extracción** (Claude Opus 5.5): lee los documentos y, para cada celda, anota documento, página del PDF, artículo, cita literal, valor y un texto corto. Un script (`construir.py`, se publica con los resultados) comprueba que cada cita aparece tal cual en el texto del PDF y calcula su página. En Junts, EH Bildu y EAJ-PNV la hizo un subagente Claude Opus 5.5 nuevo, porque quien coordinaba ya había visto la segunda lectura de esos partidos (detalle en `VERIFICACION.md`, que se publica con los resultados).
2. **Segunda comprobación** (Claude Sonnet 5.5, otra IA): lee los mismos PDF **sin ver la primera extracción** y con estos mismos criterios, y hace su propia matriz.
3. **Si no coinciden en el valor, la celda queda «no consta»** y se anota la discrepancia. El resultado se publica con la matriz, en `VERIFICACION.md`.
4. **Ninguna persona ha revisado las celdas.** No se escribe una firma humana que no existe.
5. **Réplica:** antes de publicar, cada partido recibirá su fila con 7 días para responder. Si contesta, se publica su respuesta literal; si señala un error, se corrige y se dice. El envío lo aprueba la persona responsable.

## Páginas y citas

- La **página** es la del fichero PDF (la primera es la 1), no la que lleva impresa el documento.
- La **cita** es literal. Solo se unen las palabras partidas por guiones al final de línea y se juntan los espacios y saltos de línea. Los textos en catalán se citan en catalán, con una traducción orientativa que no es la del partido.

## Límites

- Mide reglas escritas, no su cumplimiento.
- Un partido puede tener reglas en documentos que no publica o que no se han descargado. Por eso «no consta» no es «no».
- La elección de 6 estándares y la definición de cada valor son decisiones propias, publicadas aquí para que se puedan discutir.
- Las versiones de los documentos pueden cambiar. Cada celda lleva la huella del fichero que se leyó.
