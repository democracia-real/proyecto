# Audio – Álbum de Diagnóstico (Módulo 01)

## MP3

Coloca aquí los archivos MP3 de cada canción. La web espera estas rutas:

| Archivo | Canción |
|---------|---------|
| `01-el-dueño-del-boligrafo.mp3` | El Dueño del Bolígrafo (Partitocracia) |
| `02-el-juez-de-guardia.mp3` | El Juez de Guardia (Separación de Poderes) |
| `03-mi-diputado-no-existe.mp3` | Mi Diputado No Existe (Sistema Electoral) |
| `04-fuera-de-aqui.mp3` | Fuera de Aquí (Comparativa Internacional) |
| `05-el-diagnostico.mp3` | El Diagnóstico (General) |

Las URLs en la web serán: `/audio/01-diagnostico/01-el-dueño-del-boligrafo.mp3`, etc.

## Letras y rutas de audio (única fuente)

El archivo **`lyrics.json`** es la fuente única para letras y rutas de audio en la web. Estructura:

- **`audioPath`**: ruta base del álbum, p. ej. `"/audio/01-diagnostico/"`. Así se puede crecer a otros módulos (p. ej. `"/audio/02-problemas/"`) con su propio `lyrics.json`.
- **`tracks`**: array de objetos con `id`, `title`, `theme`, `style`, **`audioFile`** (nombre del MP3, p. ej. `"01-el-dueño-del-boligrafo.mp3"`), y **`lyrics`** (texto plano, saltos con `\n`; si está vacío se muestra "(Letra pendiente)").

La URL final del audio es `audioPath + audioFile`. La página principal y la documentación leen este JSON para reproductores y letras.
