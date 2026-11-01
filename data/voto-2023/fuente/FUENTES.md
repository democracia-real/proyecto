# Fuentes de «Lo que vale tu voto» (2023)

Ficheros oficiales descargados el **1 de noviembre de 2026** y guardados sin tocar. El script [`../calcular.py`](../calcular.py) trabaja solo con ellos y comprueba el hash del Excel antes de empezar.

| Fichero | Qué es | URL exacta | SHA-256 |
|---------|--------|------------|---------|
| `PROV_02_202307_1.zip` | **Fuente principal.** Ministerio del Interior, Congreso, julio de 2023, resultados por circunscripción (Excel dentro del zip, fechado el 21 nov 2023). Población, censo, votantes, votos válidos, a candidaturas, en blanco, nulos, y votos y diputados de cada candidatura en cada provincia | https://infoelectoral.interior.gob.es/estaticos/docxl/PROV_02_202307_1.zip | `b2eeed9c63527aec4fb7ffbc1896e935b6628eb6f21b00954762e62a3ed720a0` |
| `infoelectoral-archivos-excel-provincial.json` | Listado del área de descargas de infoelectoral que da la URL anterior («Julio 2023», tipo 2 = Congreso) | https://infoelectoral.interior.gob.es/min/archivos/excel?scope=provincial | `ae71f5308b1a87f657ba6ccd25a837b860fce9323cfdd989c24cc63a0cbfe0c1` |
| `BOE-A-2023-18907.pdf` | Junta Electoral Central, resumen de los resultados de las generales de 2023 según las actas de escrutinio y proclamación (BOE núm. 209, 1 sep 2023). Es el resultado con valor legal | https://www.boe.es/boe/dias/2023/09/01/pdfs/BOE-A-2023-18907.pdf | `f2146cfbf00d2b6eb6f8dd0dcdebc1e10298019589b2254e244e0ebc513d2f8a` |
| `BOE-A-2023-18907.html` | La misma resolución en HTML: cuadros II y III (votos y escaños por candidatura y provincia) | https://www.boe.es/diario_boe/txt.php?id=BOE-A-2023-18907 | `ee46741c741a71dc0f5aedcf129d058e777de09b607e98c7116a5669cfaa695a` |
| `BOE-A-2023-18907-cuadro-I.txt` | Cuadro I del PDF (censo, votantes, válidos, a candidaturas, blancos y nulos por provincia), que en el HTML no viene como tabla. Extraído con `pdftotext -raw -enc UTF-8 -f 2 -l 2 BOE-A-2023-18907.pdf` (Poppler 4.00, en Windows: finales de línea CRLF; en Linux sale el mismo texto con LF y otro hash) | (del PDF anterior, página 2) | `03fbeb789950f581bd222c926cb5b533237193b089a59cd9aba4c12704f3ee30` |
| `BOE-A-2023-12663.html` | Real Decreto 400/2023 de convocatoria: anexo con los diputados de cada circunscripción en 2023 | https://www.boe.es/diario_boe/txt.php?id=BOE-A-2023-12663 | `62e9f5d72af343ac43a06d2b7f79ef4aca21b641a4ab084fa2da78d966a624ff` |
| `BOE-A-2026-20742.html` | Real Decreto 806/2026 de convocatoria: diputados de cada circunscripción el 29 de noviembre de 2026 | https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-20742 | `1bd94d7c7b0c265e12e655906e8b9ccff1ffa5b88a2bd13d55b8b28a6d9f5e27` |
| `BOE-A-2022-21724.html` | Real Decreto 1037/2022: población oficial de cada provincia a 1 de enero de 2022 (la que trae el Excel del Ministerio) | https://www.boe.es/diario_boe/txt.php?id=BOE-A-2022-21724 | `1e67d9b385171d2f02e441b55eca87c7f03bc147b01cf13c355209cc7bc9cf00` |
| `LOREG-art162.xml` | LOREG, art. 162: 350 diputados, mínimo de dos por provincia, uno en Ceuta y otro en Melilla | https://www.boe.es/datosabiertos/api/legislacion-consolidada/id/BOE-A-1985-11672/texto/bloque/acientosesentaydos | `a5c0a72d2c801d8bc70c643c3ab5792f9a3c36a25df4be552f17e14b848fecba` |
| `LOREG-art163.xml` | LOREG, art. 163: barrera del 3%, D'Hondt, desempates y mayoría en Ceuta y Melilla | https://www.boe.es/datosabiertos/api/legislacion-consolidada/id/BOE-A-1985-11672/texto/bloque/acientosesentaytres | `ab69652f27e0add18f6a9c9ed6935661566f228481a28ed24403dcabafaf3848` |

## Notas

- El área de descargas de infoelectoral ofrece también los ficheros de texto `02202307_TOTA.zip`, `_MUNI.zip` y `_MESA.zip` (ruta `/estaticos/docxl/apliextr/`). El 1 nov 2026 esa ruta devolvía una página de comprobación anti-bots de Cloudflare a las descargas automáticas, así que se usó el Excel provincial, que es del mismo Ministerio y trae los mismos totales.
- La JEC publicó una corrección de errores (BOE-A-2023-19537, 16 sep 2023) que solo afecta a un candidato al **Senado** en Madrid. No toca ninguna cifra del Congreso.
- Para comprobar un fichero: `sha256sum fichero` (Linux, Git Bash) o `Get-FileHash fichero` (PowerShell). El `.gitattributes` de esta carpeta impide que Git cambie los finales de línea, para que los hashes sigan valiendo en cualquier sistema.
