# Audio – Uso de IA y Automatización (Módulo 05)

## MP3

Coloca aquí los archivos MP3 de cada canción del módulo 05.

Ruta esperada en web:

- `/audio/05-uso_de_ia_y_automatizacion/01-EL CÓDIGO DEL HONOR.mp3`

Puedes mantener este nombre exacto o usar convención numerada (`01-...mp3`, `02-...mp3`, etc.).

## Letras y rutas de audio (única fuente)

El archivo **`lyrics.json`** es la fuente única para letras y rutas de audio en la web.

Estructura:

- **`audioPath`**: ruta base del álbum, p. ej. `"/audio/05-uso_de_ia_y_automatizacion/"`.
- **`tracks`**: array con `id`, `title`, `theme`, `style`, **`audioFile`** y **`lyrics`**.

La URL final del audio es `audioPath + audioFile`.
