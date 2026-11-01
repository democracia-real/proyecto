# Revisión humana: 5 circunscripciones contra el dato oficial

*Preparada el 1 nov 2026 por IA (Claude Code). Pendiente de revisar por una persona.*

El script ya contrasta las 52 provincias con el BOE de forma automática. Esta revisión sirve para que **una persona, sin fiarse del script**, compruebe a mano que los números de la página salen del dato oficial. Se eligieron cinco casos distintos:

| Provincia | Por qué |
|-----------|---------|
| **Soria** | La frase «Soria vale 6 veces Madrid» que corregimos |
| **Teruel** | La que menos votos necesitó por escaño |
| **Madrid** | La que más necesitó, y la otra mitad de la comparación |
| **Barcelona** | Muchas candidaturas: el D'Hondt más largo |
| **Ceuta** | Un solo escaño: regla de mayoría, sin barrera |

## Dónde mirar

Fuente: **Junta Electoral Central, BOE núm. 209, 1 sep 2023** → [PDF](https://www.boe.es/boe/dias/2023/09/01/pdfs/BOE-A-2023-18907.pdf) (copia en [`fuente/BOE-A-2023-18907.pdf`](fuente/BOE-A-2023-18907.pdf)).

- **Cuadro I** (pág. 122202): votos válidos y en blanco de cada provincia.
- **Cuadro II** (págs. 122203-122207): votos y escaños de las candidaturas que sacaron escaño en alguna provincia. Ojo: aparecen también con **0 escaños** en las provincias donde no sacaron ninguno; esos votos también son «sin escaño».
- **Cuadro III** (págs. 122208-122213): votos de las candidaturas que no sacaron ningún escaño.

Alternativa: el [Excel del Ministerio del Interior](https://infoelectoral.interior.gob.es/estaticos/docxl/PROV_02_202307_1.zip), que es de donde parte el cálculo.

## Qué comprobar en cada provincia

1. Los **escaños de cada candidatura** coinciden con el cuadro II.
2. Los **votos válidos** coinciden con el cuadro I.
3. **Votos sin escaño** = suma de los votos de la provincia con 0 escaños en el cuadro II + todos los del cuadro III.
4. **Votos por escaño** = votos válidos / escaños (con la calculadora del móvil).
5. Abrir la ficha en la web (`/voto#soria`, etc.) y ver que dice lo mismo.

### Soria · 2 escaños

- Con escaño: PP 18.895 (1), PSOE 14.966 (1)
- Sin escaño (8): SY 9.697, VOX 4.978, SUMAR 1.711, PACMA 94, FO 68, PCTE 43, PUM+J 23, RECORTES CERO 9
- Votos válidos: 50.769 · en blanco: 285
- **Votos sin escaño: 16.623 (32,7% de los válidos)**
- **Votos por escaño: 50.769 / 2 = 25.385**
- D'Hondt a mano: los cocientes mayores son PP 18.895 y PSOE 14.966; el siguiente, SY 9.697, no entra. Correcto: 1 y 1.

- [ ] Coincide con el BOE · revisado por: ______ · fecha: ______

### Teruel · 3 escaños

- Con escaño: PP 26.586 (2), PSOE 22.226 (1)
- Sin escaño (11): EXISTE 11.348, VOX 9.932, SUMAR 4.126, PAR 711, PACMA 172, ESCAÑOS EN BLANCO 135, FO 94, PCTE 60, RECORTES CERO 49, PUM+J 36, F.I.A. 28
- Votos válidos: 75.913 · en blanco: 410
- **Votos sin escaño: 26.691 (35,2%)**
- **Votos por escaño: 75.913 / 3 = 25.304**
- D'Hondt a mano: PP 26.586, PSOE 22.226, PP/2 13.293 → tres escaños. El siguiente cociente, EXISTE 11.348, no entra. Correcto: 2 y 1.

- [ ] Coincide con el BOE · revisado por: ______ · fecha: ______

### Madrid · 37 escaños

- Con escaño: PP 1.463.183 (16), PSOE 1.004.599 (10), SUMAR 557.780 (6), VOX 506.164 (5)
- Sin escaño (7): PACMA 21.742, FO 7.652, PUM+J 6.749, RECORTES CERO 3.784, PCTE 3.407, PH 2.902, FE de las JONS 1.751
- Votos válidos: 3.608.673 · en blanco: 28.960
- **Votos sin escaño: 47.987 (1,3%)**
- **Votos por escaño: 3.608.673 / 37 = 97.532**

- [ ] Coincide con el BOE · revisado por: ______ · fecha: ______

### Barcelona · 32 escaños

- Con escaño: PSOE 952.347 (13), SUMAR 405.993 (5), PP 367.519 (5), ERC 328.697 (4), JxCAT-JUNTS 258.159 (3), VOX 201.775 (2)
- Sin escaño (6): CUP-PR 67.266, PACMA 28.201, PDeCAT-E-CiU 24.452, FO 6.048, RECORTES CERO 3.104, PCTE 2.858
- Votos válidos: 2.667.478 · en blanco: 21.059
- **Votos sin escaño: 131.929 (4,9%)**
- **Votos por escaño: 2.667.478 / 32 = 83.359**
- Ojo: en el BOE los 952.347 votos del PSOE aparecen como **PSC** (Partit dels Socialistes de Catalunya); el Excel del Ministerio los agrupa en la columna PSOE.

- [ ] Coincide con el BOE · revisado por: ______ · fecha: ______

### Ceuta · 1 escaño

- Con escaño: PP 12.918 (1). Regla de mayoría (LOREG, art. 163.2): gana la más votada, sin barrera
- Sin escaño (7): PSOE 11.332, VOX 7.752, SUMAR 821, FO 53, LB 53, RECORTES CERO 33, PUM+J 31
- Votos válidos: 33.321 · en blanco: 328
- **Votos sin escaño: 20.075 (60,2%)**
- **Votos por escaño: 33.321**

- [ ] Coincide con el BOE · revisado por: ______ · fecha: ______

## Cifras nacionales de la página

Comprobar también en el cuadro I (fila «Total estatal») y con la calculadora:

- [ ] Votos válidos de España 24.688.087 / 350 = **70.537** votos por escaño
- [ ] Soria frente a Madrid: 97.532 / 25.385 = **3,84** (página: «3,8 veces»)
- [ ] El total de votos sin escaño (**1.930.424**) es la suma de la columna `votos_sin_escano` de [`voto-2023.csv`](../../web/data/voto-2023.csv) (en una hoja de cálculo, `=SUMA(...)`)

## Al terminar

1. Si algo no coincide: no publicar. Anotarlo aquí y abrir un issue.
2. Si todo coincide: poner tu nombre o alias y la fecha en `revision_humana` de las cifras `voto-2023-*` de [`web/data/cifras.json`](../../web/data/cifras.json). La página mostrará «revisada por» en vez de «revisión humana pendiente».
