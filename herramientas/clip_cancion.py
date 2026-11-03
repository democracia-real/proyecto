"""Clip vertical (1080x1920) de una canción del proyecto: la letra se ilumina línea a línea
y unas barras siguen el sonido. No usa la imagen del vídeo original, que puede llevar cifras.

El clip se describe en un JSON (ver herramientas/clips/): canción, inicio y fin en segundos,
bloques de letra con el segundo en que empieza cada línea y el texto del cierre.
Uso: python herramientas/clip_cancion.py herramientas/clips/la_factura.json salida.mp4 logo.png
"""
import json
import subprocess
import sys
import tempfile
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFont

CLIP, OUT, LOGO = sys.argv[1], sys.argv[2], sys.argv[3]
W, H, FPS, SR = 1080, 1920, 30, 44100
F = "C:/Windows/Fonts/"
BG = (10, 10, 10)
FG = (240, 240, 240)
MUTED = (160, 160, 160)
GREEN = (16, 185, 129)

cfg = json.loads(Path(CLIP).read_text(encoding="utf-8"))
RAIZ = Path(__file__).resolve().parent.parent
CANCION = RAIZ / cfg["cancion"]
INICIO, FIN = cfg["inicio"], cfg["fin"]
TOTAL = FIN - INICIO

fonts = {}


def font(name, size):
    key = (name, size)
    if key not in fonts:
        fonts[key] = ImageFont.truetype(F + name, size)
    return fonts[key]


def mix(c, a):
    return tuple(round(BG[i] + (c[i] - BG[i]) * a) for i in range(3))


def ease(x):
    x = max(0.0, min(1.0, x))
    return 1 - (1 - x) ** 3


def centered(d, y, text, f, color):
    w = d.textlength(text, font=f)
    d.text(((W - w) / 2, y), text, font=f, fill=color)


# Audio del tramo, con entrada y salida suaves
FUNDIDO = 2.0
tmp = Path(tempfile.mkdtemp())
audio = tmp / "tramo.wav"
subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-ss", str(INICIO), "-t", str(TOTAL), "-i", str(CANCION),
                "-vn", "-af", f"afade=t=in:d=0.3,afade=t=out:st={TOTAL - FUNDIDO}:d={FUNDIDO}",
                "-ar", str(SR), "-ac", "2", str(audio)], check=True)
crudo = subprocess.run(["ffmpeg", "-loglevel", "error", "-i", str(audio), "-f", "f32le", "-ac", "1", "-"],
                       capture_output=True, check=True).stdout
mono = np.frombuffer(crudo, dtype=np.float32)

# Barras: energía por bandas logarítmicas (40 Hz-8 kHz) en cada fotograma
N_BARRAS, VENTANA = 28, 2048
bordes = np.geomspace(40, 8000, N_BARRAS + 1)
frecs = np.fft.rfftfreq(VENTANA, 1 / SR)
n_frames = int(TOTAL * FPS)
energia = np.zeros((n_frames, N_BARRAS))
hann = np.hanning(VENTANA)
for n in range(n_frames):
    c = int(n / FPS * SR)
    trozo = mono[max(0, c - VENTANA // 2): c + VENTANA // 2]
    if len(trozo) < VENTANA:
        trozo = np.pad(trozo, (0, VENTANA - len(trozo)))
    espectro = np.abs(np.fft.rfft(trozo * hann))
    for b in range(N_BARRAS):
        sel = (frecs >= bordes[b]) & (frecs < bordes[b + 1])
        energia[n, b] = espectro[sel].mean() if sel.any() else 0
db = 20 * np.log10(energia + 1e-9)
techo = np.percentile(db, 98, axis=0)
nivel = np.clip((db - (techo - 30)) / 30, 0, 1)
for n in range(1, n_frames):  # sube rápido, baja despacio
    nivel[n] = np.maximum(nivel[n], nivel[n - 1] * 0.85)

logo = Image.open(LOGO).convert("RGBA")
logo = logo.resize((int(logo.width * 70 / logo.height), 70), Image.LANCZOS)

LETRA = font("segoeuib.ttf", 74)
SALTO = 104


def bloque_actual(s):
    for b in cfg["bloques"]:
        if b["desde"] <= s < b["hasta"]:
            return b
    return None


def frame(n):
    t = n / FPS
    s = INICIO + t  # segundo de la canción
    im = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(im)
    d.rectangle([0, 0, 16, H], fill=GREEN)

    b = bloque_actual(s)
    ultimo = cfg["bloques"][-1]["hasta"]
    if b:
        centered(d, 250, cfg["titulo"].upper(), font("consolab.ttf", 46), GREEN)
        lineas = b["lineas"]
        y0 = 860 - (len(lineas) * SALTO) // 2
        aparece = ease((s - b["desde"]) / 0.4)
        for i, (desde, texto) in enumerate(lineas):
            hasta = lineas[i + 1][0] if i + 1 < len(lineas) else b["hasta"]
            if s < desde:
                a = 0.22
            elif s < hasta:
                a = 0.22 + 0.78 * ease((s - desde) / 0.25)
            else:
                a = 0.55
            centered(d, y0 + i * SALTO, texto, LETRA, mix(FG, a * aparece))
    elif s >= ultimo:
        a = ease((s - ultimo) / 0.5)
        centered(d, 700, cfg["cierre"][0], font("segoeuib.ttf", 70), mix(FG, a))
        centered(d, 820, cfg["cierre"][1], font("consolab.ttf", 62), mix(GREEN, ease((s - ultimo - 0.3) / 0.5)))
        if s - ultimo > 0.6:
            im.paste(logo, ((W - logo.width) // 2, 960), logo)
    else:  # instrumental entre bloques
        a = ease((s - max((x["hasta"] for x in cfg["bloques"] if x["hasta"] <= s), default=INICIO)) / 0.6)
        centered(d, 700, cfg["titulo"].upper(), font("segoeuib.ttf", 150), mix(FG, a))
        centered(d, 900, "Democracia Real", font("segoeui.ttf", 56), mix(MUTED, a))

    # Barras
    x0, x1, base, alto = 110, W - 110, 1470, 170
    paso = (x1 - x0) / N_BARRAS
    for i, v in enumerate(nivel[n]):
        h = max(6, v * alto)
        x = x0 + i * paso
        d.rectangle([x + 4, base - h, x + paso - 4, base], fill=mix(GREEN, 0.35 + 0.65 * v))

    centered(d, 1540, "Canción y vídeo hechos con IA", font("segoeui.ttf", 34), (110, 110, 110))
    return im


cmd = ["ffmpeg", "-y", "-loglevel", "error", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}",
       "-r", str(FPS), "-i", "-", "-i", str(audio), "-map", "0:v", "-map", "1:a", "-shortest",
       "-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", "20", "-preset", "medium",
       "-c:a", "aac", "-b:a", "192k", "-movflags", "+faststart", OUT]
proc = subprocess.Popen(cmd, stdin=subprocess.PIPE)
for n in range(n_frames):
    proc.stdin.write(frame(n).tobytes())
proc.stdin.close()
proc.wait()
print("ok", OUT, f"{TOTAL:.1f}s")
