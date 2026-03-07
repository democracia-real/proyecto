# Audio – DEMOCRACIA REAL (El Manifiesto Sonoro)

## MP3

Coloca aquí los archivos MP3 del álbum principal.

Ruta esperada en web:

- `/audio/00-manifiesto_sonoro/01-EL DIAGNÓSTICO (The Wake-Up Call).mp3`
- `/audio/00-manifiesto_sonoro/02-CÓDIGO Y CUNA (The Vision).mp3`
- `/audio/00-manifiesto_sonoro/03-CIF NACIMIENTO (The Action).mp3`
- `/audio/00-manifiesto_sonoro/04-EL DASHBOARD (The Cleanse).mp3`
- `/audio/00-manifiesto_sonoro/05-LA PRÓXIMA OLA (The Anthem Z).mp3`
- `/audio/00-manifiesto_sonoro/06-MECANISMO (Himno Final).mp3`

## Letras y rutas de audio (única fuente)

El archivo **`lyrics.json`** es la fuente única para letras y rutas de audio en la web.

Estructura:

- **`audioPath`**: ruta base del álbum, p. ej. `"/audio/00-manifiesto_sonoro/"`.
- **`tracks`**: array con `id`, `title`, `theme`, `style`, **`audioFile`** y **`lyrics`**.

La URL final del audio es `audioPath + audioFile`.
