# Verificación: 5 circunscripciones contra el BOE

*1 de noviembre de 2026.*

## Quién verificó qué

| Paso | Quién | Resultado |
|------|-------|-----------|
| Cálculo y contraste automático de las 52 circunscripciones con el BOE, el RD 400/2023 y el RD 1037/2022 | IA: Claude Opus 5.5 (Claude Code), con el script [`calcular.py`](calcular.py) | Coincide en las 52 |
| Comprobación de que esta hoja y la página usan los mismos números que el dataset | IA: Claude Opus 5.5 | 148 comprobaciones, 0 fallos |
| **Verificación independiente** de 5 circunscripciones y de las cifras nacionales | IA: **Claude Sonnet 5.5**, otro modelo, sin acceso al script, a la metodología ni a los ficheros que usó el cálculo. Leyó directamente el PDF del BOE | **Coincide todo** |
| **Verificación independiente** de los escaños de 2026 | IA: Claude Sonnet 5.5, sin acceso al script. Leyó los anexos de los RD 400/2023 y 806/2026 | **Coincide**: los dos suman 350 y solo cambian Madrid (37 → 38) y Cádiz (9 → 8). Las copias guardadas son idénticas a las páginas del BOE |
| Revisión humana | Nadie | No hecha |

**Ninguna persona ha revisado estas cifras.** El proyecto ha decidido probar si dos IA independientes, con el método publicado, bastan para dar una cifra por verificada. Si encuentras un error, [abre un issue](https://github.com/democracia-real/proyecto/issues): se corrige y se dice.

## Fuente

**Junta Electoral Central, BOE núm. 209, 1 sep 2023** → [PDF](https://www.boe.es/boe/dias/2023/09/01/pdfs/BOE-A-2023-18907.pdf) (copia en [`fuente/BOE-A-2023-18907.pdf`](fuente/BOE-A-2023-18907.pdf)).

- **Cuadro I** (pág. 122202): censo, votantes, votos válidos, en blanco y nulos de cada provincia.
- **Cuadro II** (págs. 122203-122208): votos y escaños de las candidaturas que sacaron escaño en alguna provincia. Aparecen también con **0 escaños** en las provincias donde no sacaron ninguno: esos votos también son «sin escaño».
- **Cuadro III** (págs. 122208-122225): votos de las candidaturas que no sacaron ningún escaño.

## Cómo verificó la segunda IA

- `pdftotext` pierde las celdas vacías de las tablas. Por eso leyó la posición de cada número en el PDF y lo asignó a su columna por la posición de las cabeceras.
- Comprobó esa lectura con los totales del propio BOE:
  - para las 47 candidaturas del cuadro III y las 12 del cuadro II, la suma de las 52 provincias da la fila «Total estatal»;
  - en cada provincia, los votos de todas las candidaturas suman los «Votos a Candidaturas» del cuadro I;
  - los escaños suman 350.
- Volvió a calcular el reparto a mano (barrera del 3% y D'Hondt; mayoría en Ceuta) para las 5 provincias.
- Sumó los votos sin escaño de las **52** provincias desde el PDF: 1.930.424, igual que el dataset, provincia a provincia.

## Las 5 circunscripciones

Elegidas por ser casos distintos: Soria (la cifra que corregimos), Teruel (la que menos votos necesitó por escaño), Madrid (la que más), Barcelona (el reparto más largo) y Ceuta (un escaño, regla de mayoría).

### Soria · 2 escaños · COINCIDE

- Con escaño: PP 18.895 (1), PSOE 14.966 (1)
- Sin escaño (8): SY 9.697, VOX 4.978, SUMAR 1.711, PACMA 94, FO 68, PCTE 43, PUM+J 23, RECORTES CERO 9
- Votos válidos: 50.769 · en blanco: 285
- **Votos sin escaño: 16.623 (32,7% de los válidos)**
- **Votos por escaño: 50.769 / 2 = 25.385**
- Reparto: los cocientes mayores son PP 18.895 y PSOE 14.966; el siguiente, SY 9.697, no entra.

### Teruel · 3 escaños · COINCIDE

- Con escaño: PP 26.586 (2), PSOE 22.226 (1)
- Sin escaño (11): EXISTE 11.348, VOX 9.932, SUMAR 4.126, PAR 711, PACMA 172, ESCAÑOS EN BLANCO 135, FO 94, PCTE 60, RECORTES CERO 49, PUM+J 36, F.I.A. 28
- Votos válidos: 75.913 · en blanco: 410
- **Votos sin escaño: 26.691 (35,2%)**
- **Votos por escaño: 75.913 / 3 = 25.304**
- Reparto: PP 26.586, PSOE 22.226 y PP/2 13.293 se llevan los tres escaños; el siguiente cociente, EXISTE 11.348, no entra.

### Madrid · 37 escaños · COINCIDE

- Con escaño: PP 1.463.183 (16), PSOE 1.004.599 (10), SUMAR 557.780 (6), VOX 506.164 (5)
- Sin escaño (7): PACMA 21.742, FO 7.652, PUM+J 6.749, RECORTES CERO 3.784, PCTE 3.407, PH 2.902, FE de las JONS 1.751
- Votos válidos: 3.608.673 · en blanco: 28.960
- **Votos sin escaño: 47.987 (1,3%)**
- **Votos por escaño: 3.608.673 / 37 = 97.532**
- Reparto: el último escaño entra con 91.448,9 (PP/16); el siguiente cociente es 91.327,2 (PSOE/11).

### Barcelona · 32 escaños · COINCIDE

- Con escaño: PSOE 952.347 (13), SUMAR 405.993 (5), PP 367.519 (5), ERC 328.697 (4), JxCAT-JUNTS 258.159 (3), VOX 201.775 (2)
- Sin escaño (6): CUP-PR 67.266, PACMA 28.201, PDeCAT-E-CiU 24.452, FO 6.048, RECORTES CERO 3.104, PCTE 2.858
- Votos válidos: 2.667.478 · en blanco: 21.059
- **Votos sin escaño: 131.929 (4,9%)**
- **Votos por escaño: 2.667.478 / 32 = 83.359**
- En el BOE los 952.347 votos del PSOE figuran como **PSC**; el Excel del Ministerio los pone en la columna PSOE. La barrera del 3% está en 80.025 votos: la CUP (2,5%) se queda fuera.

### Ceuta · 1 escaño · COINCIDE

- Con escaño: PP 12.918 (1). Gana la más votada, sin barrera (LOREG, art. 163.2)
- Sin escaño (7): PSOE 11.332, VOX 7.752, SUMAR 821, FO 53, LB 53, RECORTES CERO 33, PUM+J 31
- Votos válidos: 33.321 · en blanco: 328
- **Votos sin escaño: 20.075 (60,2%)**
- **Votos por escaño: 33.321**

## Cifras nacionales de la página · COINCIDEN

- Votos válidos de España (cuadro I, Total estatal): 24.688.087 / 350 = **70.537** votos por escaño
- Soria frente a Madrid: 97.532 / 25.385 = **3,84** (en la página, «3,8 veces»)
- Votos sin escaño: **1.930.424**, tanto sumando la columna `votos_sin_escano` de [`voto-2023.csv`](../../web/data/voto-2023.csv) como sumando las 52 provincias desde el PDF

## Repetirlo

Cualquiera puede repetir la comprobación con el PDF y una calculadora. Las páginas de arriba dicen dónde está cada número. Si algo no coincide, [abre un issue](https://github.com/democracia-real/proyecto/issues).
