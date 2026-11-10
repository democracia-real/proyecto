"""Imagen (1080x1350) para X e Instagram: votos válidos por escaño de una provincia frente a la media (2023).

Los valores salen de web/data/voto-2023.json, que reproduce el BOE-A-2023-18907. Cada provincia que se
publique tiene que tener su cifra en el registro (web/data/cifras.json) como verificada:
  media y extremos: voto-2023-votos-por-escano, voto-2023-rango-votos-por-escano;
  otras provincias: voto-2023-<provincia> (por ejemplo voto-2023-zamora).
El titular y la frase de abajo se pasan como argumentos; usa \\n para partir líneas.

Uso: python imagen_provincia.py salida.png logo.png "Zamora" "Titular" "Frase de abajo" [--con-madrid]
"""
import json
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

OUT, LOGO, PROV, TITULAR, NOTA = sys.argv[1:6]
CON_MADRID = "--con-madrid" in sys.argv
DATOS = json.loads((Path(__file__).resolve().parent.parent / "web/data/voto-2023.json").read_text(encoding="utf-8"))

W, H = 1080, 1350
F = "C:/Windows/Fonts/"
BG, FG, MUTED, GREEN, AMBER = (10, 10, 10), (240, 240, 240), (160, 160, 160), (16, 185, 129), (245, 158, 11)


def font(name, size):
    return ImageFont.truetype(F + name, size)


def num(n):
    return f"{round(n):,}".replace(",", ".")


def circ(nombre):
    for c in DATOS["circunscripciones"]:
        if c["provincia"] == nombre or c["provincia"].split("/")[-1] == nombre:
            return c
    sys.exit(f"No encuentro la provincia {nombre}")


p = circ(PROV)
nombre = p["provincia"].split("/")[-1]
filas = [(nombre, p["votos_por_escano"], AMBER), ("Media de España", DATOS["nacional"]["votos_por_escano"], FG)]
if CON_MADRID and nombre != "Madrid":
    filas.append(("Madrid", circ("Madrid")["votos_por_escano"], MUTED))
maximo = max(v for _, v, _ in filas)

im = Image.new("RGB", (W, H), BG)
d = ImageDraw.Draw(im)
d.rectangle([0, 0, 16, H], fill=GREEN)
x = 90

d.text((x, 110), "LO QUE VALE TU VOTO · 2023", font=font("consolab.ttf", 40), fill=GREEN)
d.multiline_text((x, 190), TITULAR.replace("\\n", "\n"), font=font("segoeuib.ttf", 66), fill=FG, spacing=12)

y = 520
d.text((x, y), "Votos válidos por cada diputado elegido", font=font("segoeui.ttf", 36), fill=MUTED)
y += 80
barra_max = W - 2 * x
for etiqueta, valor, color in filas:
    d.text((x, y), etiqueta, font=font("segoeuib.ttf", 44), fill=FG)
    d.text((W - x, y), num(valor), font=font("segoeuib.ttf", 44), fill=color, anchor="ra")
    d.rectangle([x, y + 70, x + int(barra_max * valor / maximo), y + 110], fill=color)
    y += 160

d.multiline_text((x, max(y + 20, 1000)), NOTA.replace("\\n", "\n"), font=font("segoeui.ttf", 34), fill=FG, spacing=10)

logo = Image.open(LOGO).convert("RGBA")
logo = logo.resize((int(logo.width * 56 / logo.height), 56), Image.LANCZOS)
im.paste(logo, (x, 1230), logo)
d.text((W - x, 1240), "Junta Electoral Central (BOE) · Hecho con IA", font=font("segoeui.ttf", 30), fill=(110, 110, 110), anchor="ra")
im.save(OUT, optimize=True)
print("ok", OUT)
