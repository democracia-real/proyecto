"""Genera las imágenes de vista previa (1200x630) de la portada y las calculadoras."""
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

OUT = Path(sys.argv[1])
LOGO = Path(sys.argv[2])
OUT.mkdir(parents=True, exist_ok=True)

FONTS = "C:/Windows/Fonts/"
BG, FG, MUTED, ACCENT = "#0a0a0a", "#f0f0f0", "#a0a0a0", "#10b981"

IMAGENES = {
    "portada.png": ("Las reglas del juego,\ncon datos que puedes comprobar", "Proyecto ciudadano, sin partido. Cada cifra con su fuente.", None, ACCENT),
    "nomina.png": ("¿Cuánto cuesta de verdad\ntu nómina?", "Lo que paga tu empresa, lo que te llega y adónde va cada euro.", "CALCULADORA", ACCENT),
    "ia-empleo.png": ("¿Y si una IA hiciera\nparte de tu trabajo?", "Un escenario con tu sueldo y tu sector. No es una predicción.", "SIMULADOR", "#ef4444"),
    "pensiones.png": ("Pensiones:\nlos números antes del 29N", "Cuánto aportas, quién vota por edades, quién tiene el patrimonio.", "CALCULADORA", "#f59e0b"),
    "autonomo.png": ("¿Cuánto paga de verdad\nun autónomo?","Tu cuota de 2026, tu IRPF y lo que te queda. Con la fuente de cada cifra.", "CALCULADORA", "#fb923c"),
    "voto.png": ("¿Cuánto vale tu voto\nen tu provincia?", "Votos por escaño y votos que no eligieron a nadie. Datos de 2023.", "CALCULADORA", "#38bdf8"),
}


def fuente(nombre, tam):
    return ImageFont.truetype(FONTS + nombre, tam)


logo = Image.open(LOGO).convert("RGBA")
logo = logo.resize((int(logo.width * 52 / logo.height), 52), Image.LANCZOS)

for fichero, (titulo, sub, etiqueta, color) in IMAGENES.items():
    im = Image.new("RGB", (1200, 630), BG)
    d = ImageDraw.Draw(im)
    d.rectangle([0, 0, 14, 630], fill=color)
    y = 96
    if etiqueta:
        d.text((90, y), etiqueta, font=fuente("consolab.ttf", 30), fill=color)
        y += 60
    d.multiline_text((90, y), titulo, font=fuente("segoeuib.ttf", 72), fill=FG, spacing=14)
    alto = d.multiline_textbbox((90, y), titulo, font=fuente("segoeuib.ttf", 72), spacing=14)[3]
    d.text((90, alto + 34), sub, font=fuente("segoeui.ttf", 34), fill=MUTED)
    im.paste(logo, (90, 520), logo)
    d.text((1110, 532), "democraciareal.es", font=fuente("consola.ttf", 30), fill=MUTED, anchor="ra")
    im.save(OUT / fichero, optimize=True)
    print(fichero, (OUT / fichero).stat().st_size // 1024, "KB")
