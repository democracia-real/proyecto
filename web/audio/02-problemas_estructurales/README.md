# Audio – Problemas Estructurales (Módulo 02)

## MP3

Coloca aquí los archivos MP3 de cada canción. La web espera estas rutas:

| Archivo | Canción |
|---------|---------|
| `01-EL EMBUDO DEL SUELO.mp3` | El Embudo del Suelo (Vivienda y Suelo) |
| `02-LA CUOTA DEL AIRE.mp3` | La Cuota del Aire (Energía) |

Las URLs en la web serán: `/audio/02-problemas_estructurales/01-EL EMBUDO DEL SUELO.mp3`, etc.

## Letras y rutas de audio (única fuente)

El archivo **`lyrics.json`** es la fuente única para letras y rutas de audio en la web. Estructura:

- **`audioPath`**: ruta base del álbum, p. ej. `"/audio/02-problemas_estructurales/"`.
- **`tracks`**: array de objetos con `id`, `title`, `theme`, `style`, **`audioFile`** (nombre del MP3), y **`lyrics`** (texto plano; si está vacío se muestra "(Letra pendiente)").

La URL final del audio es `audioPath + audioFile`. La página principal y la documentación leen este JSON para reproductores y letras.
