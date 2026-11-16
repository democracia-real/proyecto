"""Vídeo vertical (1080x1920) de la calculadora del autónomo para Shorts, Reels y TikTok.

Las cifras salen del modelo publicado (web/js/autonomo-modelo.js) para 2.000 € al mes de rendimiento
(ingresos menos gastos), sin hijos, sin otras rentas y cotizando por la base mínima de su tramo, 2026.
Parámetros en el registro: cuota-autonomos-2026, rendimiento-computable-reta, irpf-dificil-justificacion,
irpf-escala-minimo. Sale sin música: pásalo por musica.py.
Uso: python video_autonomo.py salida.mp4 logo.png
"""
import subprocess
import sys

from PIL import Image, ImageDraw, ImageFont

OUT, LOGO = sys.argv[1], sys.argv[2]
W, H, FPS = 1080, 1920, 30
F = "C:/Windows/Fonts/"
BG = (10, 10, 10)
FG = (240, 240, 240)
MUTED = (160, 160, 160)
GREEN = (16, 185, 129)
ORANGE = (251, 146, 60)
RED = (248, 113, 113)
PURPLE = (168, 85, 247)

# Modelo publicado, 2.000 €/mes de rendimiento (AutonomoModelo.calcular(2000))
MES, ANUAL = 2000, 24000
CUOTA_MES, CUOTA, IRPF, QUEDA = 360.29, 4323.48, 2809, 16867.52
BASE = 1143.79
# Asalariado cuyo puesto cuesta 24.000 € a la empresa (mismo modelo que /nomina)
ASAL_BRUTO, ASAL_NETO, ASAL_BASE = 18161, 15869, 1513.42

fonts = {}


def font(name, size):
    key = (name, size)
    if key not in fonts:
        fonts[key] = ImageFont.truetype(F + name, size)
    return fonts[key]


def eur(n):
    return f"{round(n):,}".replace(",", ".") + " €"


def mix(c, a):
    return tuple(round(BG[i] + (c[i] - BG[i]) * a) for i in range(3))


def ease(x):
    x = max(0.0, min(1.0, x))
    return 1 - (1 - x) ** 3


def fade(t, start, dur=0.5):
    return ease((t - start) / dur)


def centered(d, y, text, f, color):
    w = d.textlength(text, font=f)
    d.text(((W - w) / 2, y), text, font=f, fill=color)


logo = Image.open(LOGO).convert("RGBA")
logo = logo.resize((int(logo.width * 70 / logo.height), 70), Image.LANCZOS)

ESCENAS = [3.0, 4.0, 5.0, 5.5, 3.5]  # segundos
INICIO = [sum(ESCENAS[:i]) for i in range(len(ESCENAS))]
TOTAL = sum(ESCENAS)


def frame(t):
    im = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(im)
    d.rectangle([0, 0, 16, H], fill=GREEN)
    escena = max(i for i, s in enumerate(INICIO) if t >= s)
    lt = t - INICIO[escena]

    if escena == 0:
        a = fade(lt, 0.1)
        centered(d, 520, "CALCULADORA DEL AUTÓNOMO", font("consolab.ttf", 44), mix(GREEN, a))
        centered(d, 700, "Gano", font("segoeuib.ttf", 110), mix(FG, a))
        centered(d, 850, eur(MES), font("segoeuib.ttf", 170), mix(FG, fade(lt, 0.5)))
        centered(d, 1060, "al mes, ingresos menos gastos", font("segoeui.ttf", 62), mix(MUTED, fade(lt, 0.9)))
    elif escena == 1:
        centered(d, 560, "Mi cuota de", font("segoeuib.ttf", 100), mix(FG, fade(lt, 0)))
        centered(d, 690, "autónomos", font("segoeuib.ttf", 100), mix(FG, fade(lt, 0)))
        valor = CUOTA_MES * ease((lt - 0.4) / 1.4)
        centered(d, 860, eur(valor) + "/mes", font("segoeuib.ttf", 150), ORANGE)
        a = fade(lt, 1.9)
        centered(d, 1080, f"{eur(CUOTA)} al año, el 31,50%", font("segoeui.ttf", 54), mix(MUTED, a))
        centered(d, 1155, f"de una base de {eur(BASE)} al mes", font("segoeui.ttf", 54), mix(MUTED, a))
    elif escena == 2:
        centered(d, 330, f"Adónde van mis {eur(ANUAL)}", font("segoeuib.ttf", 76), FG)
        partes = [("Cuota de autónomos", CUOTA, ORANGE), ("IRPF (estimado)", IRPF, RED),
                  ("Lo que me queda", QUEDA, GREEN)]
        x0, x1, y0, y1 = 90, W - 90, 520, 640
        crecer = ease(lt / 1.8)
        x = x0
        for _, v, c in partes:
            ancho = (x1 - x0) * v / ANUAL * crecer
            d.rectangle([x, y0, x + ancho, y1], fill=c)
            x += ancho
        for i, (nombre, v, c) in enumerate(partes):
            a = fade(lt, 1.2 + i * 0.5)
            y = 780 + i * 190
            d.rectangle([90, y + 12, 140, y + 62], fill=mix(c, a))
            d.text((170, y), nombre, font=font("segoeui.ttf", 56), fill=mix(FG, a))
            d.text((170, y + 70), f"{eur(v)}  ·  {round(v / ANUAL * 100)}%", font=font("consolab.ttf", 50), fill=mix(c, a))
    elif escena == 3:
        a = fade(lt, 0)
        centered(d, 330, "Un asalariado cuyo puesto", font("segoeuib.ttf", 66), mix(FG, a))
        centered(d, 410, f"cuesta {eur(ANUAL)} a su empresa", font("segoeuib.ttf", 66), mix(FG, a))
        filas = [("Le queda", eur(ASAL_NETO), eur(QUEDA), GREEN),
                 ("Cotiza por una base de", eur(ASAL_BASE) + "/mes", eur(BASE) + "/mes", PURPLE)]
        for i, (nombre, asal, yo, c) in enumerate(filas):
            b = fade(lt, 0.6 + i * 1.4)
            y = 620 + i * 340
            d.text((90, y), nombre, font=font("segoeui.ttf", 56), fill=mix(MUTED, b))
            d.text((90, y + 80), asal, font=font("segoeuib.ttf", 90), fill=mix(c, b))
            d.text((90, y + 195), f"Yo, autónomo: {yo}", font=font("segoeui.ttf", 52), fill=mix(FG, b))
        e = fade(lt, 3.3)
        centered(d, 1330, "De esa base salen la pensión,", font("segoeui.ttf", 54), mix(FG, e))
        centered(d, 1400, "la baja y el paro o cese de actividad", font("segoeui.ttf", 54), mix(FG, e))
    else:
        centered(d, 560, "¿Y tú?", font("segoeuib.ttf", 170), mix(FG, fade(lt, 0)))
        centered(d, 820, "Haz tu cuenta, con la", font("segoeui.ttf", 64), mix(FG, fade(lt, 0.4)))
        centered(d, 900, "fuente de cada cifra", font("segoeui.ttf", 64), mix(FG, fade(lt, 0.4)))
        centered(d, 1060, "democraciareal.es/autonomo", font("consolab.ttf", 62), mix(GREEN, fade(lt, 0.8)))
        if lt > 0.8:
            im.paste(logo, ((W - logo.width) // 2, 1220), logo)

    nota1 = "Sin hijos ni otras rentas, base mínima del tramo,"
    nota2 = "parámetros de 2026. Hecho con IA."
    y = 1560 if escena == 3 else 1440
    centered(d, y, nota1, font("segoeui.ttf", 34), (110, 110, 110))
    centered(d, y + 45, nota2, font("segoeui.ttf", 34), (110, 110, 110))
    return im


cmd = ["ffmpeg", "-y", "-loglevel", "error", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}",
       "-r", str(FPS), "-i", "-", "-f", "lavfi", "-i", "anullsrc=r=44100:cl=stereo", "-shortest",
       "-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", "20", "-preset", "medium",
       "-c:a", "aac", "-movflags", "+faststart", OUT]
proc = subprocess.Popen(cmd, stdin=subprocess.PIPE)
for n in range(int(TOTAL * FPS)):
    proc.stdin.write(frame(n / FPS).tobytes())
proc.stdin.close()
proc.wait()
print("ok", OUT, f"{TOTAL:.1f}s")
