"""Vídeo vertical (1080x1920) de «Lo que vale tu voto» para Shorts, Reels y TikTok.

Cifras del registro (voto-2023-*), resultados oficiales de 2023.
Uso: python video_voto.py salida.mp4 logo.png
"""
import subprocess
import sys

from PIL import Image, ImageDraw, ImageFont

OUT, LOGO = sys.argv[1], sys.argv[2]
W, H, FPS = 1080, 1920, 30
F = "C:/Windows/Fonts/"
BG, FG, MUTED = (10, 10, 10), (240, 240, 240), (160, 160, 160)
BLUE, GREEN, AMBER, RED = (56, 189, 248), (16, 185, 129), (245, 158, 11), (248, 113, 113)

TERUEL, MADRID, SIN_ESCANO = 25304, 97532, 1930424

fonts = {}


def font(name, size):
    if (name, size) not in fonts:
        fonts[(name, size)] = ImageFont.truetype(F + name, size)
    return fonts[(name, size)]


def num(n):
    return f"{round(n):,}".replace(",", ".")


def mix(c, a):
    return tuple(round(BG[i] + (c[i] - BG[i]) * a) for i in range(3))


def ease(x):
    x = max(0.0, min(1.0, x))
    return 1 - (1 - x) ** 3


def fade(t, start, dur=0.5):
    return ease((t - start) / dur)


def centered(d, y, text, f, color):
    d.text(((W - d.textlength(text, font=f)) / 2, y), text, font=f, fill=color)


logo = Image.open(LOGO).convert("RGBA")
logo = logo.resize((int(logo.width * 70 / logo.height), 70), Image.LANCZOS)

ESCENAS = [3.0, 3.5, 4.0, 4.0, 3.5, 3.5]
INICIO = [sum(ESCENAS[:i]) for i in range(len(ESCENAS))]
TOTAL = sum(ESCENAS)


def frame(t):
    im = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(im)
    d.rectangle([0, 0, 16, H], fill=BLUE)
    e = max(i for i, s in enumerate(INICIO) if t >= s)
    lt = t - INICIO[e]

    if e == 0:
        centered(d, 520, "GENERALES DE 2023", font("consolab.ttf", 44), mix(BLUE, fade(lt, 0.1)))
        centered(d, 690, "Un escaño en Teruel", font("segoeuib.ttf", 92), mix(FG, fade(lt, 0.1)))
        centered(d, 800, "costó", font("segoeuib.ttf", 92), mix(FG, fade(lt, 0.1)))
        centered(d, 950, num(TERUEL * ease((lt - 0.5) / 1.2)), font("segoeuib.ttf", 200), GREEN)
        centered(d, 1180, "votos", font("segoeui.ttf", 72), mix(MUTED, fade(lt, 0.8)))
    elif e == 1:
        centered(d, 690, "Uno en Madrid,", font("segoeuib.ttf", 92), mix(FG, fade(lt, 0)))
        centered(d, 950, num(TERUEL + (MADRID - TERUEL) * ease((lt - 0.3) / 1.6)), font("segoeuib.ttf", 200), RED)
        centered(d, 1180, "votos", font("segoeui.ttf", 72), mix(MUTED, fade(lt, 0.6)))
    elif e == 2:
        centered(d, 360, "Votos por escaño", font("segoeuib.ttf", 80), FG)
        crecer = ease(lt / 1.6)
        x0, x1 = 90, W - 90
        for i, (nombre, v, c) in enumerate([("Teruel", TERUEL, GREEN), ("Madrid", MADRID, RED)]):
            y = 560 + i * 260
            d.text((x0, y), nombre, font=font("segoeuib.ttf", 60), fill=FG)
            ancho = (x1 - x0) * v / MADRID * crecer
            d.rectangle([x0, y + 90, x0 + ancho, y + 170], fill=c)
            d.text((x0, y + 180), num(v), font=font("consolab.ttf", 50), fill=c)
        a = fade(lt, 1.8)
        centered(d, 1160, "Un voto en Teruel pesó", font("segoeui.ttf", 64), mix(FG, a))
        centered(d, 1240, "3,85 veces uno de Madrid", font("segoeuib.ttf", 72), mix(AMBER, a))
    elif e == 3:
        centered(d, 600, num(SIN_ESCANO * ease(lt / 1.4)), font("segoeuib.ttf", 170), mix(AMBER, fade(lt, 0)))
        centered(d, 820, "votos no eligieron", font("segoeuib.ttf", 84), mix(FG, fade(lt, 0)))
        centered(d, 920, "a nadie", font("segoeuib.ttf", 84), mix(FG, fade(lt, 0)))
        a = fade(lt, 1.4)
        centered(d, 1080, "El 7,8% de los votos válidos fue a", font("segoeui.ttf", 54), mix(MUTED, a))
        centered(d, 1150, "candidaturas sin escaño en su provincia", font("segoeui.ttf", 54), mix(MUTED, a))
    elif e == 4:
        centered(d, 620, "350 de 350", font("segoeuib.ttf", 190), mix(GREEN, fade(lt, 0)))
        centered(d, 860, "escaños reproducidos con", font("segoeui.ttf", 66), mix(FG, fade(lt, 0.4)))
        centered(d, 940, "la fórmula de la ley", font("segoeui.ttf", 66), mix(FG, fade(lt, 0.4)))
        centered(d, 1100, "El cálculo es público: compruébalo", font("segoeui.ttf", 54), mix(MUTED, fade(lt, 1.0)))
    else:
        centered(d, 560, "¿Y en tu", font("segoeuib.ttf", 150), mix(FG, fade(lt, 0)))
        centered(d, 720, "provincia?", font("segoeuib.ttf", 150), mix(FG, fade(lt, 0)))
        centered(d, 960, "democraciareal.es/voto", font("consolab.ttf", 70), mix(BLUE, fade(lt, 0.6)))
        if lt > 0.6:
            im.paste(logo, ((W - logo.width) // 2, 1120), logo)

    centered(d, 1440, "Resultados oficiales de 2023 (BOE). Hecho con IA. No pedimos el voto.", font("segoeui.ttf", 32), (110, 110, 110))
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
