# Lo que vale tu voto: metodología

*Datos: elecciones al Congreso del 23 de julio de 2023 · Cálculo: 1 de noviembre de 2026 · Página: [democraciareal.es/voto](https://democraciareal.es/voto)*

> **Cálculo hecho con IA** (Claude, en Claude Code) con un script que cualquiera puede ejecutar. **Revisión humana: pendiente.** Hasta que una persona firme la revisión en el [registro de cifras](../../web/data/cifras.json), las cifras llevan esa etiqueta en la web.

## La pregunta

En cada una de las 52 circunscripciones, en las generales de 2023:

1. **¿Cuántos votos hubo por cada escaño?**
2. **¿Cuántos votos no eligieron a nadie?** Es decir, votos a candidaturas que no sacaron ningún escaño en esa provincia.

Es aritmética sobre resultados oficiales. No es una encuesta ni una previsión, y no dice a quién votar.

## Fuentes

Todas oficiales, descargadas el 1 nov 2026 y guardadas sin tocar en [`fuente/`](fuente/), con su URL exacta y su hash en [`fuente/FUENTES.md`](fuente/FUENTES.md).

| Para qué | Fuente |
|----------|--------|
| **Datos de partida** | Ministerio del Interior, resultados del Congreso de julio de 2023 por circunscripción ([Excel](https://infoelectoral.interior.gob.es/estaticos/docxl/PROV_02_202307_1.zip)) |
| Contraste 1 | Junta Electoral Central, resumen de resultados según las actas de escrutinio ([BOE-A-2023-18907](https://www.boe.es/boe/dias/2023/09/01/pdfs/BOE-A-2023-18907.pdf), 1 sep 2023). Es el resultado con valor legal |
| Contraste 2 | Real Decreto 400/2023 de convocatoria: diputados por provincia ([BOE-A-2023-12663](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2023-12663)) |
| Contraste 3 | Real Decreto 1037/2022: población oficial a 1 de enero de 2022 ([BOE-A-2022-21724](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2022-21724)) |
| Reglas del reparto | LOREG, arts. 162 y 163 ([BOE](https://www.boe.es/buscar/act.php?id=BOE-A-1985-11672)) |
| Escaños del 29N | Real Decreto 806/2026 de convocatoria ([BOE-A-2026-20742](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-20742)) |

## Cómo se calcula

El script es [`calcular.py`](calcular.py). Solo usa la biblioteca estándar de Python y no descarga nada.

1. **Lee el Excel del Ministerio** y comprueba que su hash es el del fichero descargado.
2. **Lo contrasta con las otras fuentes oficiales**, provincia a provincia. Si algo no cuadra, se para y no escribe nada:
   - votos y escaños de **cada candidatura** frente a los cuadros II y III de la JEC (550 pares candidatura-provincia);
   - censo, votantes, votos válidos, a candidaturas, en blanco y nulos frente al cuadro I de la JEC;
   - escaños de cada provincia frente al anexo del RD 400/2023;
   - población frente al RD 1037/2022;
   - cuadres internos: candidaturas + blanco = válidos; válidos + nulos = votantes; la suma de provincias = la fila nacional; 350 escaños.
3. **Recalcula el reparto** con la regla de la LOREG (art. 163):
   - fuera las candidaturas con menos del 3% de los votos válidos de la circunscripción;
   - D'Hondt: se dividen los votos de cada una entre 1, 2, 3... y los escaños van a los cocientes mayores;
   - a igual cociente, gana la candidatura con más votos (art. 163.1.d); si hubiera empate exacto el script se para, porque la ley lo resuelve por sorteo;
   - en Ceuta y Melilla (un escaño) gana la candidatura más votada (art. 163.2).
4. **Comprueba que el reparto da los diputados oficiales** en las 52 circunscripciones. Si una sola candidatura en una sola provincia no coincide, se para y avisa.
5. **Calcula** las medidas de abajo y escribe el dataset.

### Resultado de las comprobaciones

- El reparto recalculado **reproduce los 350 escaños oficiales en las 52 circunscripciones**.
- El Excel del Ministerio **coincide cifra a cifra** con la publicación de la JEC en el BOE, con el RD 400/2023 y con el RD 1037/2022.
- El script se probó también al revés: con un solo voto cambiado en Soria, o con 10 habitantes de más, se para; y con la fórmula de Sainte-Laguë en vez de D'Hondt no reproduce los escaños.
- Observación: en 2023 **la barrera del 3% no cambió ningún escaño**. Sin ella, el reparto habría sido el mismo (campo `escanos_que_cambiaria_sin_barrera`).

## Qué mide cada cifra

| Campo | Cálculo | Qué mide |
|-------|---------|----------|
| `votos_por_escano` | votos válidos / escaños de 2023 | **La cifra principal.** Cuántos votos hubo por escaño en 2023. Votos válidos = a candidaturas + en blanco, la misma base que usa la ley para la barrera del 3% |
| `electores_por_escano` | censo electoral total (residentes y en el extranjero) / escaños | El peso del voto antes de votar: cuántos electores comparten un escaño. No depende de la participación |
| `habitantes_por_escano` | población oficial a 1 ene 2022 / escaños | Cómo reparte la ley los escaños (art. 162: dos fijos por provincia y el resto por población). Cuenta a menores y extranjeros, que no votan |
| `peso_frente_media` | (votos válidos de España / 350) / votos por escaño de la provincia | Cuántas veces pesó un voto de esa provincia el voto medio de España. Más de 1: pesó más que la media |
| `votos_sin_escano` | suma de votos de las candidaturas con 0 escaños en esa provincia | Votos que no eligieron a nadie **en su circunscripción**. No incluye blancos ni nulos, que se dan aparte |
| `pct_sin_escano` | votos sin escaño / votos válidos × 100 | Lo mismo, en porcentaje de los votos válidos |
| `cociente_ultimo_escano` | cociente D'Hondt con el que entró el último escaño | El «precio» del último escaño. Depende de cómo se reparta el voto entre candidaturas, así que **no sirve** para comparar el peso del voto entre provincias |
| `escanos_2026` | anexo del RD 806/2026 | Escaños de cada provincia el 29 de noviembre de 2026 |

Redondeo: el dataset guarda un decimal en las medidas por escaño y dos en los porcentajes y cocientes, con los empates hacia arriba (25.384,5 → 25.385 en la web).

«Pesó X veces» se refiere solo a esto: **cuántos votos hacen falta para un escaño**. No mide la influencia de un voto en quién gobierna, que depende de mucho más.

## Resultados principales (2023)

| | Cifra |
|-|-------|
| Votos válidos por escaño, media de España | **70.537** (24.688.087 / 350) |
| Menos votos por escaño | **Teruel: 25.304** (75.913 / 3) |
| Más votos por escaño | **Madrid: 97.532** (3.608.673 / 37) |
| Votos a candidaturas sin escaño en su provincia | **1.930.424**, el **7,8%** de los votos válidos |
| Votos en blanco (aparte) | 200.673 |

## «Soria vale 6 veces Madrid»: no

[`sistema_electoral.md`](../../01_diagnostico_del_sistema/sistema_electoral.md) decía que un voto en Soria «vale» casi 6 veces uno de Madrid, con Soria a «14.700 – 18.600 votos» por escaño y Madrid a «~95.000». Con los datos oficiales de 2023:

| Medida | Soria (2 escaños) | Madrid (37 escaños) | Madrid / Soria |
|--------|-------------------|---------------------|----------------|
| Votos válidos por escaño | 25.385 | 97.532 | **3,84** |
| Electores por escaño | 37.884 | 141.204 | **3,73** |
| Habitantes por escaño | 44.189 | 182.442 | **4,13** |
| Cociente del último escaño | 14.966 | 91.449 | 6,11 |

**La cifra correcta es «casi 4 veces»:** con los votos de 2023, un voto en Soria pesó 3,8 veces uno de Madrid. Por electores sale 3,7 y por habitantes, 4,1.

**De dónde salía el 6:** los 14.700-18.600 de Soria se parecen a los votos de las dos candidaturas que sacaron escaño allí (14.966 y 18.895), y los 95.000 de Madrid, a los votos por escaño de toda la provincia. Se comparaba una medida de partido con una medida de provincia. Comparando lo mismo en las dos (el cociente del último escaño) también sale cerca de 6, pero esa medida depende de cómo se repartan los votos entre candidaturas, no de lo que pesa cada voto.

Además, en 2023 Soria no fue la provincia con menos votos por escaño: fue **Teruel** (25.304), por muy poco.

## Limitaciones

- **Son datos de 2023.** El 29 de noviembre de 2026 Madrid elige 38 diputados (37 en 2023) y Cádiz 8 (9 en 2023); el resto, igual. Con los resultados de 2026 se recalcula todo con el mismo script.
- **«Votos sin escaño» no es lo mismo que «votos perdidos».** Esos votos cuentan para la barrera del 3%, para la financiación electoral y como expresión política. Lo que no hicieron es elegir a nadie en su provincia.
- Solo el **Congreso**. El Senado tiene otro sistema (listas abiertas, mayoritario).
- La población es la oficial a 1 de enero de 2022, la que usó el reparto de escaños de 2023.

## Ficheros

- [`web/data/voto-2023.json`](../../web/data/voto-2023.json): todo, con el reparto de cada provincia y las definiciones.
- [`web/data/voto-2023.csv`](../../web/data/voto-2023.csv): una fila por circunscripción.
- [`web/data/voto-2023-candidaturas.csv`](../../web/data/voto-2023-candidaturas.csv): una fila por candidatura y provincia, con los escaños oficiales y los calculados.

Licencia: CC BY-SA 4.0. Los datos de origen son del Ministerio del Interior y del BOE.

## Reproducirlo

```bash
python -I data/voto-2023/calcular.py          # recalcula y escribe el dataset
python -I data/voto-2023/calcular.py --check  # comprueba que el dataset publicado está al día
```

## Revisión humana

Una persona compara 5 circunscripciones con el dato oficial: ver [`REVISION_HUMANA.md`](REVISION_HUMANA.md). Cuando lo haga, firma `revision_humana` en las cifras `voto-2023-*` del [registro](../../web/data/cifras.json).

Si encuentras un error, [abre un issue](https://github.com/democracia-real/proyecto/issues).
