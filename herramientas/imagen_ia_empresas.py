"""Imagen (1080x1350) para X e Instagram: el 33,6% de las empresas de 10 o más empleados ya usa IA.

Cifras del registro: adopcion-ia-empresas (33,6%) e ia-por-tamano-empresa (21,4% en las de menos
de 10 empleados con conexión a Internet). INE, uso de TIC en las empresas, primer trimestre de 2026.
Uso: python imagen_ia_empresas.py salida.png logo.png
"""
import sys

from PIL import Image, ImageDraw, ImageFont

OUT, LOGO = sys.argv[1], sys.argv[2]
W, H = 1080, 1350
F = "C:/Windows/Fonts/"
BG, FG, MUTED, GREEN, AMBER, TRACK = (10, 10, 10), (240, 240, 240), (160, 160, 160), (16, 185, 129), (245, 158, 11), (40, 40, 40)


def font(name, size):
    return ImageFont.truetype(F + name, size)


im = Image.new("RGB", (W, H), BG)
d = ImageDraw.Draw(im)
d.rectangle([0, 0, 16, H], fill=GREEN)
x = 90

d.text((x, 110), "INE · PRIMER TRIMESTRE DE 2026", font=font("consolab.ttf", 40), fill=GREEN)
d.multiline_text((x, 190), "El 33,6% de las empresas\nde 10 o más empleados\nya usa IA.", font=font("segoeuib.ttf", 70), fill=FG, spacing=12)

d.text((x, 500), "Empresas que usaron IA, por tamaño", font=font("segoeui.ttf", 36), fill=MUTED)
barra_max = W - 2 * x
y = 580
for nombre, valor, texto, color in [("10 o más empleados", 33.6, "33,6%", GREEN),
                                    ("Menos de 10 (con Internet)", 21.4, "21,4%", AMBER)]:
    d.text((x, y), nombre, font=font("segoeuib.ttf", 42), fill=FG)
    d.text((W - x, y), texto, font=font("segoeuib.ttf", 42), fill=color, anchor="ra")
    d.rectangle([x, y + 70, x + barra_max, y + 110], fill=TRACK)
    d.rectangle([x, y + 70, x + int(barra_max * valor / 100), y + 110], fill=color)
    y += 170

d.multiline_text((x, 940), "¿Y tu puesto? Un simulador calcula qué dejarían\nde ingresar Hacienda y la Seguridad Social si\nuna IA hiciera tu trabajo y nadie lo ocupara.",
                 font=font("segoeui.ttf", 36), fill=FG, spacing=10)
d.text((x, 1110), "Es un escenario, no una predicción.", font=font("segoeuib.ttf", 34), fill=MUTED)

logo = Image.open(LOGO).convert("RGBA")
logo = logo.resize((int(logo.width * 56 / logo.height), 56), Image.LANCZOS)
im.paste(logo, (x, 1230), logo)
d.text((W - x, 1240), "INE, uso de TIC en empresas · Hecho con IA", font=font("segoeui.ttf", 30), fill=(110, 110, 110), anchor="ra")
im.save(OUT, optimize=True)
print("ok", OUT)
