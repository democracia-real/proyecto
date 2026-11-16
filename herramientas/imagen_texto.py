"""Imagen de texto para X, Instagram o vídeo vertical: una etiqueta, un titular y párrafos cortos.

Sirve para piezas sin cifras (propuestas, avisos). Si un texto lleva una cifra, tiene que estar
verificada en el registro (web/data/cifras.json). El contenido va en un JSON:
  {"etiqueta": "...", "titular": "línea\nlínea", "parrafos": ["...", "..."], "pie": "..."}
Uso: python imagen_texto.py pieza.json salida.png logo.png [--vertical]
  sin --vertical: 1080x1350 (X e Instagram); con --vertical: 1080x1920 (fotograma de vídeo)
"""
import json
import sys
import textwrap

from PIL import Image, ImageDraw, ImageFont

SPEC, OUT, LOGO = sys.argv[1:4]
VERTICAL = "--vertical" in sys.argv
P = json.loads(open(SPEC, encoding="utf-8").read())

W, H = (1080, 1920) if VERTICAL else (1080, 1350)
F = "C:/Windows/Fonts/"
BG, FG, MUTED, GREEN = (10, 10, 10), (240, 240, 240), (170, 170, 170), (16, 185, 129)


def font(name, size):
    return ImageFont.truetype(F + name, size)


def ajustar(d, texto, f, ancho):
    lineas = []
    for parrafo in texto.split("\n"):
        palabras, actual = parrafo.split(), ""
        for p in palabras:
            prueba = (actual + " " + p).strip()
            if d.textlength(prueba, font=f) <= ancho:
                actual = prueba
            else:
                lineas.append(actual)
                actual = p
        lineas.append(actual)
    return lineas


im = Image.new("RGB", (W, H), BG)
d = ImageDraw.Draw(im)
d.rectangle([0, 0, 16, H], fill=GREEN)
x, ancho = 90, W - 180
y = 300 if VERTICAL else 110

if P.get("etiqueta"):
    d.text((x, y), P["etiqueta"], font=font("consolab.ttf", 38), fill=GREEN)
    y += 80
ft = font("segoeuib.ttf", P.get("tam_titular", 72))
for linea in ajustar(d, P["titular"], ft, ancho):
    d.text((x, y), linea, font=ft, fill=FG)
    y += ft.size + 14
y += 50
fp = font("segoeui.ttf", P.get("tam_parrafo", 42))
for i, parrafo in enumerate(P.get("parrafos", [])):
    color = FG if i in P.get("destacar", []) else MUTED
    for linea in ajustar(d, parrafo, fp, ancho):
        d.text((x, y), linea, font=fp, fill=color)
        y += fp.size + 12
    y += 34

if P.get("direccion"):
    d.text((x, y + 10), P["direccion"], font=font("consolab.ttf", 50), fill=GREEN)

logo = Image.open(LOGO).convert("RGBA")
logo = logo.resize((int(logo.width * 56 / logo.height), 56), Image.LANCZOS)
pie_y = H - 150 if not VERTICAL else 1540
im.paste(logo, (x, pie_y), logo)
d.text((x, pie_y + 80), P.get("pie", "Hecho con IA"), font=font("segoeui.ttf", 30), fill=(110, 110, 110))
im.save(OUT, optimize=True)
print("ok", OUT, "hasta y =", y)
