"""Vídeo vertical (1080x1920) de pensiones para Shorts, Reels y TikTok: el censo y la riqueza, por edad.

Cifras del registro: electores-por-edad (INE, censo de 2026) y riqueza-por-edad (Banco de España, EFF 2024).
Uso: python video_pensiones.py salida.mp4 logo.png
"""
import subprocess
import sys

from PIL import Image, ImageDraw, ImageFont

OUT, LOGO = sys.argv[1], sys.argv[2]
W, H, FPS = 1080, 1920, 30
F = "C:/Windows/Fonts/"
BG, FG, MUTED = (10, 10, 10), (240, 240, 240), (160, 160, 160)
BLUE, AMBER = (56, 189, 248), (245, 158, 11)

CENSO = [("De 18 a 34", 20.8), ("De 35 a 64", 50.8), ("65 o más", 28.3)]
RIQUEZA = [("Menos de 35", 2.0), ("65 o más", 41.1)]

fonts = {}


def font(name, size):
    if (name, size) not in fonts:
        fonts[(name, size)] = ImageFont.truetype(F + name, size)
    return fonts[(name, size)]


def pct(v):
    return f"{v:.1f}%".replace(".", ",")


def mix(c, a):
    return tuple(round(BG[i] + (c[i] - BG[i]) * a) for i in range(3))


def ease(x):
    x = max(0.0, min(1.0, x))
    return 1 - (1 - x) ** 3


def fade(t, start, dur=0.5):
    return ease((t - start) / dur)


def centered(d, y, text, f, color):
    d.text(((W - d.textlength(text, font=f)) / 2, y), text, font=f, fill=color)


def barras(d, filas, color, lt, y0):
    crecer = ease(lt / 1.4)
    x0, x1 = 90, W - 90
    for i, (nombre, v) in enumerate(filas):
        y = y0 + i * 230
        d.text((x0, y), nombre, font=font("segoeuib.ttf", 56), fill=FG)
        d.rectangle([x0, y + 80, x0 + (x1 - x0) * v / 55 * crecer, y + 150], fill=color)
        d.text((x0, y + 160), pct(v * crecer), font=font("consolab.ttf", 48), fill=color)


logo = Image.open(LOGO).convert("RGBA")
logo = logo.resize((int(logo.width * 70 / logo.height), 70), Image.LANCZOS)

ESCENAS = [3.0, 4.5, 4.5, 4.0, 3.5]
INICIO = [sum(ESCENAS[:i]) for i in range(len(ESCENAS))]
TOTAL = sum(ESCENAS)


def frame(t):
    im = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(im)
    d.rectangle([0, 0, 16, H], fill=AMBER)
    e = max(i for i, s in enumerate(INICIO) if t >= s)
    lt = t - INICIO[e]

    if e == 0:
        centered(d, 560, "PENSIONES", font("consolab.ttf", 48), mix(AMBER, fade(lt, 0.1)))
        centered(d, 720, "Dos datos", font("segoeuib.ttf", 110), mix(FG, fade(lt, 0.1)))
        centered(d, 850, "antes del 29N", font("segoeuib.ttf", 110), mix(FG, fade(lt, 0.3)))
        centered(d, 1050, "Quién vota y quién tiene el patrimonio, por edad", font("segoeui.ttf", 46), mix(MUTED, fade(lt, 0.9)))
    elif e == 1:
        centered(d, 330, "El censo del 29N", font("segoeuib.ttf", 80), FG)
        centered(d, 430, "% de los electores residentes", font("segoeui.ttf", 44), MUTED)
        barras(d, CENSO, BLUE, lt, 580)
        centered(d, 1300, "La mitad tiene de 35 a 64 años", font("segoeuib.ttf", 58), mix(FG, fade(lt, 2.0)))
    elif e == 2:
        centered(d, 330, "La riqueza neta", font("segoeuib.ttf", 80), FG)
        centered(d, 430, "% del total, por edad de quien encabeza el hogar", font("segoeui.ttf", 40), MUTED)
        barras(d, RIQUEZA, AMBER, lt, 580)
        centered(d, 1100, "El resto, en hogares de 35 a 64", font("segoeui.ttf", 50), mix(MUTED, fade(lt, 1.6)))
    elif e == 3:
        centered(d, 640, "Ojo:", font("segoeuib.ttf", 110), mix(AMBER, fade(lt, 0)))
        centered(d, 820, "el censo cuenta personas;", font("segoeui.ttf", 64), mix(FG, fade(lt, 0.3)))
        centered(d, 910, "la riqueza, hogares.", font("segoeui.ttf", 64), mix(FG, fade(lt, 0.3)))
        centered(d, 1060, "No es la misma unidad.", font("segoeuib.ttf", 64), mix(FG, fade(lt, 1.0)))
    else:
        centered(d, 560, "¿Cuánto de lo que", font("segoeuib.ttf", 90), mix(FG, fade(lt, 0)))
        centered(d, 680, "pagas va a pensiones?", font("segoeuib.ttf", 90), mix(FG, fade(lt, 0)))
        centered(d, 900, "democraciareal.es/pensiones", font("consolab.ttf", 62), mix(AMBER, fade(lt, 0.6)))
        if lt > 0.6:
            im.paste(logo, ((W - logo.width) // 2, 1060), logo)

    centered(d, 1440, "INE (censo 2026) y Banco de España (EFF 2024).", font("segoeui.ttf", 32), (110, 110, 110))
    centered(d, 1490, "Hecho con IA. No pedimos el voto.", font("segoeui.ttf", 32), (110, 110, 110))
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
