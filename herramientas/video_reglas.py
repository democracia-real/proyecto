"""Vídeo vertical (1080x1920) de «Las reglas del juego» para Shorts, Reels y TikTok.

Las seis preguntas y la cuadrícula de la matriz, sin nombres de partido (cada fila es un partido; la primera, la nuestra).
Los colores salen de web/data/reglas.json; los recuentos, del registro (reglas-matriz-resumen y reglas-matriz-valores).
Sale sin música: después, pásalo por musica.py.
Uso: python video_reglas.py salida.mp4 logo.png
"""
import json
import pathlib
import subprocess
import sys

from PIL import Image, ImageDraw, ImageFont

OUT, LOGO = sys.argv[1], sys.argv[2]
RAIZ = pathlib.Path(__file__).resolve().parent.parent
W, H, FPS = 1080, 1920, 30
F = "C:/Windows/Fonts/"
BG, FG, MUTED, DIM = (10, 10, 10), (240, 240, 240), (160, 160, 160), (110, 110, 110)
GREEN = (16, 185, 129)
COLOR = {"sí": (16, 185, 129), "parcial": (245, 158, 11), "no": (239, 68, 68), "no consta": (63, 63, 70)}

PREGUNTAS = [
    "¿Hay límite de mandatos?",
    "¿Qué eligen las primarias?",
    "¿Qué pasa si te investigan?",
    "¿Se publican los bienes?",
    "¿Quién elige a quien juzga?",
    "¿Se puede revocar a la dirección?",
]

datos = json.loads((RAIZ / "web/data/reglas.json").read_text(encoding="utf-8"))
orden = [p["id"] for p in datos["partidos"]]
valor = {(c["partido"], c["estandar"]): c["valor"] for c in datos["celdas"]}
resumen = datos["resumen"]
assert resumen["celdas"] == 54 and len(orden) == 9, "la matriz ha cambiado: revisa el registro y este vídeo"

fonts = {}


def font(name, size):
    if (name, size) not in fonts:
        fonts[(name, size)] = ImageFont.truetype(F + name, size)
    return fonts[(name, size)]


def mix(c, a):
    return tuple(round(BG[i] + (c[i] - BG[i]) * a) for i in range(3))


def ease(x):
    x = max(0.0, min(1.0, x))
    return 1 - (1 - x) ** 3


def fade(t, start, dur=0.5):
    return ease((t - start) / dur)


def centered(d, y, text, f, color):
    d.text(((W - d.textlength(text, font=f)) / 2, y), text, font=f, fill=color)


def cuadricula(d, lt):
    celda, hueco = 70, 12
    ancho = 6 * celda + 5 * hueco
    gx, gy = (W - ancho) / 2, 470
    centered(d, 345, "pregunta", font("segoeui.ttf", 34), MUTED)
    for j in range(6):
        d.text((gx + j * (celda + hueco) + celda / 2, 415), f"{j + 1}", font=font("consolab.ttf", 40), fill=GREEN, anchor="ma")
    for i, partido in enumerate(orden):
        for j in range(6):
            a = fade(lt, 0.3 + (i * 6 + j) * 0.045, 0.25)
            if a <= 0:
                continue
            x0, y0 = gx + j * (celda + hueco), gy + i * (celda + hueco)
            d.rounded_rectangle([x0, y0, x0 + celda, y0 + celda], radius=10, fill=mix(COLOR[valor[(partido, j + 1)]], a))
    centered(d, gy + 9 * (celda + hueco) + 6, "8 partidos y nosotros", font("segoeui.ttf", 36), mix(MUTED, fade(lt, 2.8)))
    # Leyenda con los recuentos
    f = font("segoeui.ttf", 40)
    partes = [f"{k} {resumen[k]}" for k in COLOR]
    total = sum(36 + d.textlength(t, font=f) for t in partes) + 40 * 3
    lx = (W - total) / 2
    a = fade(lt, 3.2)
    for k, t in zip(COLOR, partes):
        d.rounded_rectangle([lx, 1300, lx + 26, 1326], radius=5, fill=mix(COLOR[k], a))
        d.text((lx + 36, 1290), t, font=f, fill=mix(FG, a))
        lx += 36 + d.textlength(t, font=f) + 40


logo = Image.open(LOGO).convert("RGBA")
logo = logo.resize((int(logo.width * 70 / logo.height), 70), Image.LANCZOS)

ESCENAS = [3.0, 6.0, 5.5, 3.5, 3.5]
INICIO = [sum(ESCENAS[:i]) for i in range(len(ESCENAS))]
TOTAL = sum(ESCENAS)


def frame(t):
    im = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(im)
    d.rectangle([0, 0, 16, H], fill=GREEN)
    e = max(i for i, s in enumerate(INICIO) if t >= s)
    lt = t - INICIO[e]

    if e == 0:
        centered(d, 520, "LAS REGLAS DEL JUEGO", font("consolab.ttf", 48), mix(GREEN, fade(lt, 0.1)))
        centered(d, 660, "¿Qué dicen", font("segoeuib.ttf", 110), mix(FG, fade(lt, 0.1)))
        centered(d, 790, "los estatutos", font("segoeuib.ttf", 110), mix(FG, fade(lt, 0.3)))
        centered(d, 920, "de cada partido?", font("segoeuib.ttf", 110), mix(FG, fade(lt, 0.5)))
        centered(d, 1110, "Seis reglas, cláusula a cláusula", font("segoeui.ttf", 50), mix(MUTED, fade(lt, 1.1)))
    elif e == 1:
        centered(d, 330, "Seis preguntas", font("segoeuib.ttf", 84), FG)
        for i, p in enumerate(PREGUNTAS):
            a = fade(lt, 0.4 + i * 0.75)
            y = 520 + i * 125
            d.text((90, y + 6), f"{i + 1}", font=font("consolab.ttf", 46), fill=mix(GREEN, a))
            d.text((150, y), p, font=font("segoeui.ttf", 50), fill=mix(FG, a))
    elif e == 2:
        centered(d, 150, "54 celdas", font("segoeuib.ttf", 96), FG)
        centered(d, 265, "cada una, con su cita y su página", font("segoeui.ttf", 44), MUTED)
        cuadricula(d, lt)
    elif e == 3:
        centered(d, 600, "Empezamos por", font("segoeuib.ttf", 100), mix(FG, fade(lt, 0)))
        centered(d, 725, "las nuestras.", font("segoeuib.ttf", 100), mix(GREEN, fade(lt, 0.2)))
        centered(d, 930, "Son borradores que", font("segoeui.ttf", 60), mix(FG, fade(lt, 0.9)))
        centered(d, 1010, "no ha aprobado nadie,", font("segoeui.ttf", 60), mix(FG, fade(lt, 0.9)))
        centered(d, 1090, "medidos con la misma vara.", font("segoeui.ttf", 60), mix(FG, fade(lt, 1.4)))
    else:
        centered(d, 560, "Compruébalo tú", font("segoeuib.ttf", 100), mix(FG, fade(lt, 0)))
        centered(d, 700, "la cita, el artículo y la página", font("segoeui.ttf", 52), mix(MUTED, fade(lt, 0.3)))
        centered(d, 880, "democraciareal.es/reglas", font("consolab.ttf", 62), mix(GREEN, fade(lt, 0.6)))
        if lt > 0.6:
            im.paste(logo, ((W - logo.width) // 2, 1040), logo)

    centered(d, 1440, "Estatutos y códigos éticos de cada partido.", font("segoeui.ttf", 32), DIM)
    centered(d, 1490, "Hecho con IA. No pedimos el voto.", font("segoeui.ttf", 32), DIM)
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
