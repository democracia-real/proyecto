"""Imagen (1080x1350) para X e Instagram: cuatro cifras nuestras que estaban mal y lo que dice la fuente.

Cifras del registro: voto-2023-soria-madrid (3,8), paro-juvenil (22,8%), emigracion-titulados (22.665 en 2021). El «coste de la corrupción» se retiró el 1 nov por no tener fuente.
Uso: python imagen_erratas.py salida.png logo.png
"""
import sys

from PIL import Image, ImageDraw, ImageFont

OUT, LOGO = sys.argv[1], sys.argv[2]
W, H = 1080, 1350
F = "C:/Windows/Fonts/"
BG, FG, MUTED, GREEN, RED = (10, 10, 10), (240, 240, 240), (160, 160, 160), (16, 185, 129), (239, 68, 68)

FILAS = [
    ("Un voto en Soria vale casi 6 de Madrid", "3,8 veces (2023)"),
    ("Paro juvenil del 26,6%", "22,8% (sept. 2026)"),
    ("87.000 titulados se van cada año", "22.665 en 2021"),
    ("La corrupción cuesta 50.000 M€", "Retirada: sin fuente"),
]


def font(name, size):
    return ImageFont.truetype(F + name, size)


im = Image.new("RGB", (W, H), BG)
d = ImageDraw.Draw(im)
d.rectangle([0, 0, 16, H], fill=GREEN)
x = 90

d.text((x, 110), "FE DE ERRATAS", font=font("consolab.ttf", 40), fill=GREEN)
d.multiline_text((x, 180), "Revisamos nuestras\npropias cifras.", font=font("segoeuib.ttf", 70), fill=FG, spacing=12)

y = 400
d.text((x, y), "Decíamos", font=font("segoeui.ttf", 32), fill=MUTED)
d.text((W - x, y), "Dice la fuente", font=font("segoeui.ttf", 32), fill=MUTED, anchor="ra")
y += 60
for antes, ahora in FILAS:
    d.line([x, y, W - x, y], fill=(50, 50, 50), width=2)
    d.text((x, y + 22), antes, font=font("segoeui.ttf", 34), fill=RED)
    d.text((W - x, y + 82), ahora, font=font("segoeuib.ttf", 38), fill=GREEN, anchor="ra")
    y += 150

d.multiline_text((x, y + 30), "Ahora cada cifra se comprueba dos veces\ncontra su fuente, y el registro es público.",
                 font=font("segoeui.ttf", 34), fill=FG, spacing=10)

logo = Image.open(LOGO).convert("RGBA")
logo = logo.resize((int(logo.width * 56 / logo.height), 56), Image.LANCZOS)
im.paste(logo, (x, 1230), logo)
d.text((W - x, 1240), "BOE · Eurostat · INE · Hecho con IA", font=font("segoeui.ttf", 30), fill=(110, 110, 110), anchor="ra")
im.save(OUT, optimize=True)
print("ok", OUT)
