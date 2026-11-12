"""Imagen (1080x1350) para X e Instagram: anuncio de «Las reglas del juego».

Las seis preguntas y la cuadrícula de la matriz, sin nombres de partido: cada fila es un partido (la primera, la nuestra)
y cada columna una de las preguntas. Los colores salen de web/data/reglas.json; los recuentos, del registro
(reglas-matriz-resumen y reglas-matriz-valores).
Uso: python imagen_reglas.py salida.png logo.png
"""
import json
import pathlib
import sys

from PIL import Image, ImageDraw, ImageFont

OUT, LOGO = sys.argv[1], sys.argv[2]
RAIZ = pathlib.Path(__file__).resolve().parent.parent
W, H = 1080, 1350
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
assert resumen["celdas"] == 54 and len(orden) == 9, "la matriz ha cambiado: revisa el registro y esta imagen"


def font(name, size):
    return ImageFont.truetype(F + name, size)


im = Image.new("RGB", (W, H), BG)
d = ImageDraw.Draw(im)
d.rectangle([0, 0, 16, H], fill=GREEN)
x = 90

d.text((x, 100), "LAS REGLAS DEL JUEGO", font=font("consolab.ttf", 40), fill=GREEN)
d.multiline_text((x, 165), "Seis reglas internas\nde cada partido, leídas\nen sus estatutos.",
                 font=font("segoeuib.ttf", 64), fill=FG, spacing=10)

# Preguntas a la izquierda, cuadrícula a la derecha: columna n = pregunta n
y0 = 470
celda, hueco = 40, 8
gx = W - x - 6 * celda - 5 * hueco
for i, p in enumerate(PREGUNTAS):
    y = y0 + i * 62
    d.text((x, y + 5), f"{i + 1}", font=font("consolab.ttf", 30), fill=GREEN)
    d.text((x + 40, y - 3), p, font=font("segoeui.ttf", 32), fill=FG)
d.text((gx + (6 * celda + 5 * hueco) / 2, y0 - 88), "pregunta", font=font("segoeui.ttf", 24), fill=MUTED, anchor="ma")
for j in range(6):
    cx = gx + j * (celda + hueco) + celda / 2
    d.text((cx, y0 - 50), f"{j + 1}", font=font("consolab.ttf", 26), fill=GREEN, anchor="ma")
for i, partido in enumerate(orden):
    for j in range(6):
        cx = gx + j * (celda + hueco)
        cy = y0 + i * (celda + hueco)
        d.rounded_rectangle([cx, cy, cx + celda, cy + celda], radius=6, fill=COLOR[valor[(partido, j + 1)]])
d.text((gx + (6 * celda + 5 * hueco) / 2, y0 + 9 * (celda + hueco) + 8), "8 partidos y nosotros",
       font=font("segoeui.ttf", 24), fill=MUTED, anchor="ma")

# Leyenda con los recuentos del registro
y = 980
lx = x
for k in ("sí", "parcial", "no", "no consta"):
    d.rounded_rectangle([lx, y + 6, lx + 26, y + 32], radius=5, fill=COLOR[k])
    t = f"{k} {resumen[k]}"
    d.text((lx + 38, y), t, font=font("segoeui.ttf", 30), fill=FG)
    lx += 38 + d.textlength(t, font=font("segoeui.ttf", 30)) + 44

d.multiline_text((x, 1060), "Cada celda, con la cita literal, el artículo\ny la página. Empezamos por las nuestras.",
                 font=font("segoeui.ttf", 34), fill=FG, spacing=10)

logo = Image.open(LOGO).convert("RGBA")
logo = logo.resize((int(logo.width * 56 / logo.height), 56), Image.LANCZOS)
im.paste(logo, (x, 1230), logo)
d.text((W - x, 1240), "Estatutos de cada partido · Hecho con IA", font=font("segoeui.ttf", 28), fill=DIM, anchor="ra")
im.save(OUT, optimize=True)
print("ok", OUT)
