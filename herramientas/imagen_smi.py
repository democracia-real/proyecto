"""Imagen (1080x1350) para X e Instagram: lo que paga la empresa por un sueldo del SMI.

Cifras del registro: salarios-referencia (SMI 2026) y cotizaciones-2026. El coste
para la empresa es el de web/js/nomina-modelo.js con 17.094 € (32,15% a cargo de la empresa).
Uso: python imagen_smi.py salida.png logo.png
"""
import sys

from PIL import Image, ImageDraw, ImageFont

OUT, LOGO = sys.argv[1], sys.argv[2]
W, H = 1080, 1350
F = "C:/Windows/Fonts/"
BG, FG, MUTED, GREEN, AMBER = (10, 10, 10), (240, 240, 240), (160, 160, 160), (16, 185, 129), (245, 158, 11)

BRUTO, COTIZA_EMPRESA, COSTE = 17094, 5496, 22590


def font(name, size):
    return ImageFont.truetype(F + name, size)


def num(n):
    return f"{n:,}".replace(",", ".") + " €"


im = Image.new("RGB", (W, H), BG)
d = ImageDraw.Draw(im)
d.rectangle([0, 0, 16, H], fill=GREEN)
x = 90

d.text((x, 110), "SALARIO MÍNIMO 2026", font=font("consolab.ttf", 40), fill=GREEN)
d.multiline_text((x, 190), "Cobras el SMI.\n¿Cuánto paga tu empresa?", font=font("segoeuib.ttf", 70), fill=FG, spacing=12)

filas = [("Tu sueldo bruto (14 pagas de 1.221 €)", BRUTO, FG),
         ("Cotización de la empresa (32,15%)", COTIZA_EMPRESA, AMBER)]
y = 470
for texto, valor, color in filas:
    d.text((x, y), texto, font=font("segoeui.ttf", 40), fill=MUTED)
    d.text((x, y + 55), num(valor), font=font("segoeuib.ttf", 76), fill=color)
    y += 190

d.line([x, y + 10, W - x, y + 10], fill=(60, 60, 60), width=3)
d.text((x, y + 40), "Lo que cuestas a tu empresa", font=font("segoeui.ttf", 44), fill=FG)
d.text((x, y + 100), num(COSTE), font=font("segoeuib.ttf", 130), fill=GREEN)

d.multiline_text((x, 1135), "Contrato indefinido de oficina. La cotización de la\nempresa sale al pie de la nómina, no en lo que cobras.",
                 font=font("segoeui.ttf", 32), fill=MUTED, spacing=8)

logo = Image.open(LOGO).convert("RGBA")
logo = logo.resize((int(logo.width * 56 / logo.height), 56), Image.LANCZOS)
im.paste(logo, (x, 1230), logo)
d.text((W - x, 1240), "BOE y Seguridad Social · Hecho con IA", font=font("segoeui.ttf", 30), fill=(110, 110, 110), anchor="ra")
im.save(OUT, optimize=True)
print("ok", OUT)
