"""Vídeo vertical (1080x1920) de la calculadora de nómina para Shorts, Reels y TikTok.

Las cifras salen del modelo publicado (web/js/nomina-modelo.js) para 28.000 € brutos.
Uso: python video_nomina.py salida.mp4 logo.png
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
YELLOW = (250, 204, 21)
RED = (248, 113, 113)
AMBER = (245, 158, 11)

# Modelo publicado, 28.000 € brutos (contrato indefinido, sin hijos, 2026)
BRUTO, SS_EMP, SS_TRAB, IRPF, NETO, COSTE = 28000, 9002, 1820, 4365, 21815, 37002
PENSIONES = 4207

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

ESCENAS = [3.0, 4.0, 5.0, 3.5, 3.0, 3.5]  # segundos
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
        centered(d, 520, "CALCULADORA DE NÓMINA", font("consolab.ttf", 44), mix(GREEN, a))
        centered(d, 700, "Cobro", font("segoeuib.ttf", 110), mix(FG, a))
        centered(d, 850, eur(BRUTO), font("segoeuib.ttf", 170), mix(FG, fade(lt, 0.5)))
        centered(d, 1060, "brutos al año", font("segoeui.ttf", 70), mix(MUTED, fade(lt, 0.9)))
    elif escena == 1:
        centered(d, 560, "A mi empresa", font("segoeuib.ttf", 100), mix(FG, fade(lt, 0)))
        centered(d, 690, "le cuesto", font("segoeuib.ttf", 100), mix(FG, fade(lt, 0)))
        valor = BRUTO + (COSTE - BRUTO) * ease((lt - 0.4) / 1.6)
        centered(d, 860, eur(valor), font("segoeuib.ttf", 190), GREEN)
        a = fade(lt, 2.0)
        centered(d, 1110, f"{eur(SS_EMP)} los cotiza la empresa:", font("segoeui.ttf", 54), mix(MUTED, a))
        centered(d, 1185, "salen al pie de la nómina", font("segoeui.ttf", 54), mix(MUTED, a))
    elif escena == 2:
        centered(d, 330, f"Adónde van los {eur(COSTE)}", font("segoeuib.ttf", 76), FG)
        partes = [("Cotización de la empresa", SS_EMP, ORANGE), ("Mi cotización", SS_TRAB, YELLOW),
                  ("IRPF (estimado)", IRPF, RED), ("Lo que me llega", NETO, GREEN)]
        x0, x1, y0, y1 = 90, W - 90, 520, 640
        crecer = ease(lt / 1.8)
        x = x0
        for _, v, c in partes:
            ancho = (x1 - x0) * v / COSTE * crecer
            d.rectangle([x, y0, x + ancho, y1], fill=c)
            x += ancho
        for i, (nombre, v, c) in enumerate(partes):
            a = fade(lt, 1.2 + i * 0.45)
            y = 760 + i * 170
            d.rectangle([90, y + 12, 140, y + 62], fill=mix(c, a))
            d.text((170, y), nombre, font=font("segoeui.ttf", 56), fill=mix(FG, a))
            d.text((170, y + 70), f"{eur(v)}  ·  {round(v / COSTE * 100)}%", font=font("consolab.ttf", 50), fill=mix(c, a))
    elif escena == 3:
        a = fade(lt, 0)
        centered(d, 560, "41%", font("segoeuib.ttf", 300), mix(AMBER, a))
        centered(d, 920, "de lo que cuesto va a", font("segoeui.ttf", 66), mix(FG, a))
        centered(d, 1000, "cotizaciones e IRPF", font("segoeui.ttf", 66), mix(FG, a))
        b = fade(lt, 1.2)
        centered(d, 1160, "La OCDE calcula 41,4%", font("segoeuib.ttf", 60), mix(GREEN, b))
        centered(d, 1240, "para el salario medio", font("segoeui.ttf", 56), mix(MUTED, b))
    elif escena == 4:
        a = fade(lt, 0)
        centered(d, 620, eur(PENSIONES), font("segoeuib.ttf", 200), mix((56, 189, 248), a))
        centered(d, 880, "al año van a pensiones", font("segoeuib.ttf", 76), mix(FG, a))
        b = fade(lt, 0.9)
        centered(d, 1050, "si lo que pago se reparte como", font("segoeui.ttf", 52), mix(MUTED, b))
        centered(d, 1120, "el gasto público (Eurostat 2024)", font("segoeui.ttf", 52), mix(MUTED, b))
    else:
        centered(d, 560, "¿Y tú?", font("segoeuib.ttf", 170), mix(FG, fade(lt, 0)))
        centered(d, 820, "Calcula el tuyo, con la", font("segoeui.ttf", 64), mix(FG, fade(lt, 0.4)))
        centered(d, 900, "fuente de cada cifra", font("segoeui.ttf", 64), mix(FG, fade(lt, 0.4)))
        centered(d, 1060, "democraciareal.es/nomina", font("consolab.ttf", 66), mix(GREEN, fade(lt, 0.8)))
        if lt > 0.8:
            im.paste(logo, ((W - logo.width) // 2, 1220), logo)

    nota = "Contrato indefinido, sin hijos, parámetros de 2026. Hecho con IA."
    centered(d, 1440, nota, font("segoeui.ttf", 34), (110, 110, 110))
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
