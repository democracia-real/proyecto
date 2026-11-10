# Herramientas

Scripts para generar las piezas de difusión. Las cifras que usan salen del [registro](../web/data/cifras.json): si cambia una cifra, hay que cambiarla también aquí y volver a generar la pieza.

Necesitan Python con Pillow, `ffmpeg` y las fuentes de Windows (Segoe UI y Consolas).

| Script | Qué genera | Uso |
|--------|------------|-----|
| `og_images.py` | Imágenes de vista previa (1200×630) de la portada y las calculadoras | `python herramientas/og_images.py web/imagenes/og web/imagenes/icons/logotransparente.png` |
| `video_nomina.py` | Vídeo vertical de la calculadora de nómina (22 s) | `python herramientas/video_nomina.py internal/lanzamiento_calculadoras/nomina_vertical.mp4 web/imagenes/icons/logotransparente.png` |
| `video_voto.py` | Vídeo vertical de *Lo que vale tu voto* (21,5 s) | `python herramientas/video_voto.py internal/lanzamiento_calculadoras/voto_vertical.mp4 web/imagenes/icons/logotransparente.png` |
| `imagen_smi.py` | Imagen (1080×1350) para X e Instagram: lo que cuesta a la empresa un sueldo del SMI | `python herramientas/imagen_smi.py internal/semana_2026-11-02/smi_empresa.png web/imagenes/icons/logotransparente.png` |
| `imagen_soria.py` | Imagen (1080×1350) para X e Instagram: un voto en Soria pesa 3,8 veces uno de Madrid, no «casi 6» | `python herramientas/imagen_soria.py internal/dia_2026-11-09/soria_madrid.png web/imagenes/icons/logotransparente.png` |
| `imagen_ia_empresas.py` | Imagen (1080×1350) para X e Instagram: el 33,6% de las empresas de 10 o más empleados ya usa IA | `python herramientas/imagen_ia_empresas.py internal/dia_2026-11-11/ia_empresas.png web/imagenes/icons/logotransparente.png` |
| `imagen_erratas.py` | Imagen (1080×1350) para X e Instagram: cuatro cifras nuestras que estaban mal y lo que dice la fuente | `python herramientas/imagen_erratas.py internal/semana_2026-11-09/erratas.png web/imagenes/icons/logotransparente.png` |
| `imagen_provincia.py` | Imagen (1080×1350) para X e Instagram: votos válidos por diputado de una provincia frente a la media (2023). Los valores salen de `web/data/voto-2023.json`; cada provincia necesita su cifra en el registro | `python herramientas/imagen_provincia.py internal/semana_2026-11-09/zamora.png web/imagenes/icons/logotransparente.png Zamora "Titular" "Frase de abajo" [--con-madrid]` |
| `video_pensiones.py` | Vídeo vertical de pensiones: el censo y la riqueza por edad (19,5 s) | `python herramientas/video_pensiones.py internal/semana_2026-11-02/pensiones_vertical.mp4 web/imagenes/icons/logotransparente.png` |
| `musica.py` | Compone una base instrumental sin derechos de terceros y se la pone a un vídeo | `python herramientas/musica.py entrada.mp4 salida.mp4 --semilla 3` (cambia la semilla para variar la progresión) |
| `clip_cancion.py` | Clip vertical de una canción del proyecto: la letra se ilumina línea a línea y unas barras siguen el sonido, con el audio de la canción. Cada clip se describe en un JSON de `clips/` (tramo, letra con sus tiempos y cierre) | `python herramientas/clip_cancion.py herramientas/clips/la_factura.json internal/semana_2026-11-02/factura_vertical.mp4 web/imagenes/icons/logotransparente.png` |

Para sacar los tiempos de la letra, sirven los subtítulos automáticos del vídeo de la canción en YouTube. Los clips de canciones no usan la imagen del vídeo original, que puede llevar cifras inventadas, y llevan su propio audio, así que no pasan por `musica.py`.

**Todo vídeo lleva música:** en TikTok y Reels, un vídeo sin sonido retiene menos. Después de generar un vídeo, pásalo por `musica.py`.

Los vídeos van a `internal/`, que no se publica: los sube la persona responsable desde las cuentas del proyecto.
