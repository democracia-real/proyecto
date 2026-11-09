"""Imagen (1080x1350) para X e Instagram: un voto en Soria pesa 3,8 veces uno de Madrid, no «casi 6».

Cifra del registro: voto-2023-soria-madrid (votos válidos por escaño en las generales de 2023,
BOE-A-2023-18907). Soria 50.769 / 2 = 25.385; Madrid 3.608.673 / 37 = 97.532; cociente 3,84.
Uso: python imagen_soria.py salida.png logo.png
"""
import sys

from PIL import Image, ImageDraw, ImageFont

OUT, LOGO = sys.argv[1], sys.argv[2]
W, H = 1080, 1350
F = "C:/Windows/Fonts/"
BG, FG, MUTED, GREEN, AMBER, RED = (10, 10, 10), (240, 240, 240), (160, 160, 160), (16, 185, 129), (245, 158, 11), (239, 68, 68)

SORIA, MADRID = 25385, 97532


def font(name, size):
    return ImageFont.truetype(F + name, size)


def num(n):
    return f"{n:,}".replace(",", ".")


im = Image.new("RGB", (W, H), BG)
d = ImageDraw.Draw(im)
d.rectangle([0, 0, 16, H], fill=GREEN)
x = 90

d.text((x, 110), "CORREGIMOS UNA CIFRA NUESTRA", font=font("consolab.ttf", 40), fill=GREEN)
d.multiline_text((x, 190), "Un voto en Soria pesa\n3,8 veces uno de Madrid.", font=font("segoeuib.ttf", 70), fill=FG, spacing=12)
tachado = "No «casi 6»."
f_t = font("segoeuib.ttf", 70)
d.text((x, 370), tachado, font=f_t, fill=RED)

d.text((x, 520), "Votos válidos por escaño en 2023 (menos, más peso)", font=font("segoeui.ttf", 36), fill=MUTED)
barra_max = W - 2 * x
y = 600
for nombre, valor, color in [("Soria", SORIA, AMBER), ("Madrid", MADRID, FG)]:
    d.text((x, y), nombre, font=font("segoeuib.ttf", 44), fill=FG)
    d.text((W - x, y), num(valor), font=font("segoeuib.ttf", 44), fill=color, anchor="ra")
    largo = int(barra_max * valor / MADRID)
    d.rectangle([x, y + 70, x + largo, y + 110], fill=color)
    y += 170

d.multiline_text((x, 960), "Lo decíamos nosotros, y se repite mucho. El «6»\nmezclaba los votos de las dos candidaturas que\nsacaron escaño en Soria con la media de Madrid.",
                 font=font("segoeui.ttf", 36), fill=FG, spacing=10)

d.text((x, 1135), "Por electores salen 3,7 veces; por habitantes, 4,1.", font=font("segoeui.ttf", 32), fill=MUTED)

logo = Image.open(LOGO).convert("RGBA")
logo = logo.resize((int(logo.width * 56 / logo.height), 56), Image.LANCZOS)
im.paste(logo, (x, 1230), logo)
d.text((W - x, 1240), "Junta Electoral Central (BOE) · Hecho con IA", font=font("segoeui.ttf", 30), fill=(110, 110, 110), anchor="ra")
im.save(OUT, optimize=True)
print("ok", OUT)
