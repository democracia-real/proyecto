# Herramientas

Scripts para generar las piezas de difusión. Las cifras que usan salen del [registro](../web/data/cifras.json): si cambia una cifra, hay que cambiarla también aquí y volver a generar la pieza.

Necesitan Python con Pillow, `ffmpeg` y las fuentes de Windows (Segoe UI y Consolas).

| Script | Qué genera | Uso |
|--------|------------|-----|
| `og_images.py` | Imágenes de vista previa (1200×630) de la portada y las calculadoras | `python herramientas/og_images.py web/imagenes/og web/imagenes/icons/logotransparente.png` |
| `video_nomina.py` | Vídeo vertical de la calculadora de nómina (22 s) | `python herramientas/video_nomina.py internal/lanzamiento_calculadoras/nomina_vertical.mp4 web/imagenes/icons/logotransparente.png` |
| `video_voto.py` | Vídeo vertical de *Lo que vale tu voto* (21,5 s) | `python herramientas/video_voto.py internal/lanzamiento_calculadoras/voto_vertical.mp4 web/imagenes/icons/logotransparente.png` |

Los vídeos van a `internal/`, que no se publica: los sube la persona responsable desde las cuentas del proyecto.
