#!/usr/bin/env python3
"""Lo que vale tu voto: votos por escaño y votos sin escaño en las generales de 2023.

Lee el Excel oficial del Ministerio del Interior con los resultados del Congreso
de julio de 2023 por circunscripción, recalcula el reparto de escaños con la
regla de la LOREG (art. 163: barrera del 3% y D'Hondt; art. 163.2: mayoría en
Ceuta y Melilla) y comprueba que da los diputados oficiales. Si una sola
circunscripción no cuadra, se para con error y no escribe nada.

Antes de calcular, contrasta el Excel con otras tres fuentes oficiales:
  - la publicación de resultados de la Junta Electoral Central en el BOE
    (BOE-A-2023-18907): votos y escaños de cada candidatura, censo, votantes,
    votos válidos, en blanco y nulos de cada provincia;
  - el anexo del Real Decreto 400/2023 de convocatoria: escaños por provincia;
  - el Real Decreto 1037/2022: población oficial a 1 de enero de 2022.
Y lee el anexo del Real Decreto 806/2026 para dar los escaños de cada provincia
el 29 de noviembre de 2026.

Solo usa la biblioteca estándar de Python. No descarga nada: trabaja con los
ficheros guardados en fuente/ (ver fuente/FUENTES.md).

Uso:
  python -I data/voto-2023/calcular.py           # calcula y escribe el dataset
  python -I data/voto-2023/calcular.py --check   # comprueba que el dataset publicado está al día
"""

import argparse
import csv
import hashlib
import html
import io
import json
import re
import sys
import unicodedata
import zipfile
import xml.etree.ElementTree as ET
from decimal import ROUND_HALF_UP, Decimal
from fractions import Fraction
from html.parser import HTMLParser
from pathlib import Path

AQUI = Path(__file__).resolve().parent
REPO = AQUI.parents[1]
FUENTE = AQUI / "fuente"
EXCEL_ZIP = FUENTE / "PROV_02_202307_1.zip"
RD_2023 = FUENTE / "BOE-A-2023-12663.html"
RD_2026 = FUENTE / "BOE-A-2026-20742.html"
RD_POBLACION = FUENTE / "BOE-A-2022-21724.html"
JEC_HTML = FUENTE / "BOE-A-2023-18907.html"
JEC_CUADRO_I = FUENTE / "BOE-A-2023-18907-cuadro-I.txt"
SALIDA_JSON = REPO / "web" / "data" / "voto-2023.json"
SALIDA_CSV = REPO / "web" / "data" / "voto-2023.csv"
SALIDA_CANDIDATURAS = REPO / "web" / "data" / "voto-2023-candidaturas.csv"

URL_EXCEL = "https://infoelectoral.interior.gob.es/estaticos/docxl/PROV_02_202307_1.zip"
URL_RD_2023 = "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2023-12663"
URL_RD_2026 = "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-20742"
URL_LOREG = "https://www.boe.es/buscar/act.php?id=BOE-A-1985-11672"
URL_JEC = "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2023-18907"
URL_JEC_PDF = "https://www.boe.es/boe/dias/2023/09/01/pdfs/BOE-A-2023-18907.pdf"
URL_RD_POBLACION = "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2022-21724"
SHA256_EXCEL = "b2eeed9c63527aec4fb7ffbc1896e935b6628eb6f21b00954762e62a3ed720a0"

ESCANOS_CONGRESO = 350
N_CIRCUNSCRIPCIONES = 52
BARRERA = Fraction(3, 100)

NS = {"m": "http://schemas.openxmlformats.org/spreadsheetml/2006/main"}

# Nombre de cada circunscripción en el anexo de los decretos de convocatoria -> código INE
RD_A_CODIGO = {
    "Albacete": 2, "Alicante/Alacant": 3, "Almería": 4, "Araba/Álava": 1, "Asturias": 33,
    "Ávila": 5, "Badajoz": 6, "Balears (Illes)": 7, "Barcelona": 8, "Bizkaia": 48,
    "Burgos": 9, "Cáceres": 10, "Cádiz": 11, "Cantabria": 39, "Castellón/Castelló": 12,
    "Ciudad Real": 13, "Córdoba": 14, "Coruña (A)": 15, "Cuenca": 16, "Gipuzkoa": 20,
    "Girona": 17, "Granada": 18, "Guadalajara": 19, "Huelva": 21, "Huesca": 22,
    "Jaén": 23, "León": 24, "Lleida": 25, "Lugo": 27, "Madrid": 28, "Málaga": 29,
    "Murcia": 30, "Navarra": 31, "Ourense": 32, "Palencia": 34, "Palmas (Las)": 35,
    "Pontevedra": 36, "Rioja (La)": 26, "Salamanca": 37, "Santa Cruz de Tenerife": 38,
    "Segovia": 40, "Sevilla": 41, "Soria": 42, "Tarragona": 43, "Teruel": 44,
    "Toledo": 45, "Valencia/València": 46, "Valladolid": 47, "Zamora": 49,
    "Zaragoza": 50, "Ceuta": 51, "Melilla": 52,
}
# El BOE escribe igual estas cuatro en unos sitios con paréntesis y en otros con coma
RD_A_CODIGO.update({"Balears, Illes": 7, "Coruña, A": 15, "Palmas, Las": 35, "Rioja, La": 26})

UNIDADES = {
    "uno": 1, "dos": 2, "tres": 3, "cuatro": 4, "cinco": 5, "seis": 6, "siete": 7,
    "ocho": 8, "nueve": 9, "diez": 10, "once": 11, "doce": 12, "trece": 13,
    "catorce": 14, "quince": 15, "dieciséis": 16, "diecisiete": 17, "dieciocho": 18,
    "diecinueve": 19, "veinte": 20, "veintiuno": 21, "veintidós": 22, "veintitrés": 23,
    "veinticuatro": 24, "veinticinco": 25, "veintiséis": 26, "veintisiete": 27,
    "veintiocho": 28, "veintinueve": 29,
}
DECENAS = {"treinta": 30, "cuarenta": 40}


class Descuadre(Exception):
    """Los datos oficiales no cuadran con el cálculo: hay que parar y avisar."""


def redondear(x, decimales=0):
    """Redondeo al más próximo, con los empates hacia arriba (no el bancario de Python)."""
    q = Decimal(1).scaleb(-decimales)
    r = Decimal(str(float(x))).quantize(q, rounding=ROUND_HALF_UP)
    return int(r) if decimales == 0 else float(r)


def sha256(ruta):
    return hashlib.sha256(ruta.read_bytes()).hexdigest()


# --- Lectura del Excel oficial (xlsx = zip con XML; sin dependencias) ---------

def leer_xlsx(contenido):
    z = zipfile.ZipFile(io.BytesIO(contenido))
    compartidas = []
    if "xl/sharedStrings.xml" in z.namelist():
        for si in ET.fromstring(z.read("xl/sharedStrings.xml")).findall("m:si", NS):
            compartidas.append("".join(t.text or "" for t in si.iter("{%s}t" % NS["m"])))
    hoja = ET.fromstring(z.read("xl/worksheets/sheet1.xml"))
    filas = {}
    for fila in hoja.find("m:sheetData", NS):
        celdas = {}
        for c in fila:
            col = re.match(r"[A-Z]+", c.get("r")).group()
            v = c.find("m:v", NS)
            if v is None:
                continue
            celdas[col] = compartidas[int(v.text)] if c.get("t") == "s" else v.text
        filas[int(fila.get("r"))] = celdas
    return filas


def columnas_en_orden(fila):
    def clave(col):
        n = 0
        for ch in col:
            n = n * 26 + ord(ch) - 64
        return n
    return sorted(fila, key=clave)


def leer_resultados():
    if sha256(EXCEL_ZIP) != SHA256_EXCEL:
        raise Descuadre(f"{EXCEL_ZIP.name} no es el fichero descargado el 1 nov 2026 (sha256 distinto)")
    with zipfile.ZipFile(EXCEL_ZIP) as z:
        nombres = [n for n in z.namelist() if n.endswith(".xlsx")]
        if len(nombres) != 1:
            raise Descuadre(f"se esperaba un .xlsx dentro del zip y hay {nombres}")
        filas = leer_xlsx(z.read(nombres[0]))

    n_cab = next(n for n, f in filas.items() if f.get("C") == "Nombre de Provincia")
    cab = filas[n_cab]
    nombres_largos, siglas = filas[n_cab - 2], filas[n_cab - 1]
    campos = {
        "Nombre de Comunidad": "comunidad", "Código de Provincia": "codigo",
        "Nombre de Provincia": "provincia", "Población": "poblacion",
        "Número de mesas": "mesas", "Censo electoral sin CERA": "censo_cer",
        "Censo CERA": "censo_cera", "Total censo electoral": "censo",
        "Total votantes CER": "votantes_cer", "Total votantes CERA": "votantes_cera",
        "Total votantes": "votantes", "Votos válidos": "votos_validos",
        "Votos a candidaturas": "votos_candidaturas", "Votos en blanco": "votos_blanco",
        "Votos nulos": "votos_nulos",
    }
    col_campo = {}
    partidos = []  # (col_votos, col_diputados, siglas, nombre)
    cols = columnas_en_orden(cab)
    for i, col in enumerate(cols):
        etiqueta = cab[col]
        if etiqueta in campos:
            col_campo[col] = campos[etiqueta]
        elif etiqueta == "Votos":
            col_dip = cols[i + 1]
            if cab[col_dip] != "Diputados":
                raise Descuadre(f"la columna {col_dip} debería ser 'Diputados'")
            partidos.append((col, col_dip, siglas[col], nombres_largos[col]))
    if set(col_campo.values()) != set(campos.values()):
        raise Descuadre("faltan columnas en la cabecera del Excel")

    circunscripciones, total = [], None
    for n in sorted(filas):
        if n <= n_cab:
            continue
        f = filas[n]
        if not f:
            continue
        datos = {}
        for col, campo in col_campo.items():
            v = f.get(col)
            datos[campo] = v if campo in ("comunidad", "provincia") else (int(v) if v is not None else None)
        datos["candidaturas"] = []
        for col_v, col_d, sig, nombre in partidos:
            votos, dip = int(f.get(col_v, 0)), int(f.get(col_d, 0))
            if votos or dip:
                datos["candidaturas"].append({"siglas": sig, "nombre": nombre, "votos": votos, "escanos_oficiales": dip})
        if datos["provincia"] == "España":
            total = datos
        else:
            circunscripciones.append(datos)
    if total is None:
        raise Descuadre("no está la fila de total nacional")
    return circunscripciones, total


# --- Anexos de los decretos de convocatoria ----------------------------------

def numero_en_letra(texto):
    t = texto.strip().rstrip(".").lower()
    if t.isdigit():
        return int(t)
    if t in UNIDADES:
        return UNIDADES[t]
    partes = t.split(" y ")
    if len(partes) == 2 and partes[0] in DECENAS and partes[1] in UNIDADES:
        return DECENAS[partes[0]] + UNIDADES[partes[1]]
    if t in DECENAS:
        return DECENAS[t]
    raise Descuadre(f"no sé leer el número '{texto}'")


def lineas_boe(ruta):
    t = ruta.read_text(encoding="utf-8")
    t = html.unescape(re.sub(r"<[^>]+>", "\n", t))
    return [l.strip() for l in t.splitlines() if l.strip()]


def codigo(nombre, ruta):
    nombre = nombre.strip().rstrip(".")
    if nombre not in RD_A_CODIGO:
        raise Descuadre(f"{ruta.name}: circunscripción desconocida '{nombre}'")
    return RD_A_CODIGO[nombre]


def entero(texto):
    """'1.463.183' -> 1463183 (el BOE separa los miles con punto)."""
    if not re.fullmatch(r"\d{1,3}(\.\d{3})*", texto):
        raise Descuadre(f"'{texto}' no es un número del BOE")
    return int(texto.replace(".", ""))


def escanos_decreto(ruta):
    lineas = lineas_boe(ruta)
    i = lineas.index("ANEXO")
    if lineas[i + 1: i + 3] != ["Circunscripción", "Diputados"]:
        raise Descuadre(f"{ruta.name}: el anexo no tiene la forma esperada")
    escanos = {}
    j = i + 3
    while len(escanos) < N_CIRCUNSCRIPCIONES:
        escanos[codigo(lineas[j], ruta)] = numero_en_letra(lineas[j + 1])
        j += 2
    if sum(escanos.values()) != ESCANOS_CONGRESO:
        raise Descuadre(f"{ruta.name}: el anexo suma {sum(escanos.values())} escaños")
    return escanos


def poblacion_decreto(ruta):
    """Anexo I del RD 1037/2022: población oficial por provincia a 1 de enero de 2022."""
    lineas = lineas_boe(ruta)
    i = next(n for n, l in enumerate(lineas) if l.startswith("ANEXO I"))
    poblacion = {}
    j = i + 1
    while len(poblacion) < N_CIRCUNSCRIPCIONES:
        if lineas[j].rstrip(".") in RD_A_CODIGO:
            poblacion[codigo(lineas[j], ruta)] = entero(lineas[j + 1])
            j += 2
        else:
            j += 1  # títulos: «Provincias», «Población», «Ciudades Autónomas»
    return poblacion


# --- Publicación de la Junta Electoral Central (BOE-A-2023-18907) -------------

class _Tablas(HTMLParser):
    def __init__(self):
        super().__init__()
        self.tablas, self.fila, self.celda = [], None, None

    def handle_starttag(self, tag, attrs):
        if tag == "table":
            self.tablas.append([])
        elif tag == "tr":
            self.fila = []
        elif tag in ("td", "th"):
            self.celda = []

    def handle_endtag(self, tag):
        if tag in ("td", "th") and self.celda is not None:
            self.fila.append(" ".join("".join(self.celda).split()))
            self.celda = None
        elif tag == "tr" and self.fila is not None:
            self.tablas[-1].append(self.fila)
            self.fila = None

    def handle_data(self, data):
        if self.celda is not None:
            self.celda.append(data)


def jec_candidaturas():
    """Cuadros II y III: {código: lista ordenada de (votos, escaños)} de cada candidatura."""
    p = _Tablas()
    p.feed(JEC_HTML.read_text(encoding="utf-8"))
    if len(p.tablas) != 13:
        raise Descuadre(f"{JEC_HTML.name}: se esperaban 13 tablas (cuadros II y III) y hay {len(p.tablas)}")
    resultado = {}
    for tabla in p.tablas:
        etiquetas = tabla[1]  # «Votos» / «Escaños» bajo cada candidatura
        con_total = len(tabla[2]) == len(etiquetas) + 2  # cuadro II trae «Total escaños»
        for fila in tabla[2:]:
            if fila[0].startswith("Total estatal"):
                continue
            cod = codigo(fila[0], JEC_HTML)
            celdas = fila[2:] if con_total else fila[1:]
            if len(celdas) != len(etiquetas):
                raise Descuadre(f"{JEC_HTML.name}: fila de {fila[0]} con columnas de más o de menos")
            lista = resultado.setdefault(cod, [])
            k = 0
            while k < len(etiquetas):
                if etiquetas[k] == "Votos" and k + 1 < len(etiquetas) and etiquetas[k + 1] == "Escaños":
                    if celdas[k]:
                        lista.append((entero(celdas[k]), entero(celdas[k + 1])))
                    k += 2
                elif etiquetas[k] == "Votos":
                    if celdas[k]:
                        lista.append((entero(celdas[k]), 0))
                    k += 1
                else:
                    raise Descuadre(f"{JEC_HTML.name}: cabecera inesperada '{etiquetas[k]}'")
    return {cod: sorted(lista) for cod, lista in resultado.items()}


def jec_resumen():
    """Cuadro I (extraído del PDF con pdftotext -raw): electores, votantes, válidos,
    a candidaturas, en blanco y nulos de cada provincia."""
    lineas = [l.strip() for l in JEC_CUADRO_I.read_text(encoding="utf-8").splitlines() if l.strip()]
    i = next(n for n, l in enumerate(lineas) if l.startswith("Electores Votantes"))
    resumen, valores = {}, []
    for linea in lineas[i + 1:]:
        if re.fullmatch(r"[\d. ]+", linea):
            valores += [entero(x) for x in linea.split()]
            continue
        if linea.startswith("Total estatal"):
            # pdftotext parte esta fila en dos líneas y saca los votantes delante: solo se
            # comprueba que están las seis cifras, sin fiarse del orden
            resumen["total"] = sorted(valores)
            break
        if len(valores) != 6:
            raise Descuadre(f"{JEC_CUADRO_I.name}: la fila de {linea} no tiene 6 cifras")
        resumen[codigo(linea, JEC_CUADRO_I)] = valores
        valores = []
    if len(resumen) != N_CIRCUNSCRIPCIONES + 1:
        raise Descuadre(f"{JEC_CUADRO_I.name}: no están las 52 provincias y el total")
    return resumen


# --- Reparto (LOREG, art. 163) -------------------------------------------------

def reparto(candidaturas, escanos, votos_validos, barrera=BARRERA):
    """Devuelve (escaños por siglas, cociente del último escaño, siglas que superan la barrera)."""
    if escanos == 1:
        # Art. 163.2: en Ceuta y Melilla gana la candidatura más votada, sin barrera.
        orden = sorted(candidaturas, key=lambda c: -c["votos"])
        if len(orden) > 1 and orden[0]["votos"] == orden[1]["votos"]:
            raise Descuadre("empate a votos en una circunscripción de un escaño")
        return {orden[0]["siglas"]: 1}, Fraction(orden[0]["votos"]), {c["siglas"] for c in candidaturas}

    # Art. 163.1.a: fuera las que no llegan al 3% de los votos válidos
    validas = [c for c in candidaturas if Fraction(c["votos"]) >= barrera * votos_validos]
    # Art. 163.1.c: dividir por 1, 2, 3... y quedarse con los cocientes mayores
    cocientes = [(Fraction(c["votos"], d), c["votos"], c["siglas"]) for c in validas for d in range(1, escanos + 1)]
    # Art. 163.1.d: a igual cociente, gana quien tenga más votos en total
    cocientes.sort(key=lambda q: (q[0], q[1]), reverse=True)
    elegidos = cocientes[:escanos]
    if len(cocientes) > escanos:
        ultimo, siguiente = cocientes[escanos - 1], cocientes[escanos]
        if ultimo[0] == siguiente[0] and ultimo[1] == siguiente[1]:
            raise Descuadre("empate exacto en el último escaño: el art. 163.1.d lo resuelve por sorteo")
    resultado = {}
    for _, _, sig in elegidos:
        resultado[sig] = resultado.get(sig, 0) + 1
    return resultado, elegidos[-1][0], {c["siglas"] for c in validas}


# --- Cálculo ------------------------------------------------------------------

def calcular():
    circunscripciones, total = leer_resultados()
    escanos_2023 = escanos_decreto(RD_2023)
    escanos_2026 = escanos_decreto(RD_2026)
    poblacion_2022 = poblacion_decreto(RD_POBLACION)
    jec = jec_candidaturas()
    jec_totales = jec_resumen()

    if len(circunscripciones) != N_CIRCUNSCRIPCIONES:
        raise Descuadre(f"hay {len(circunscripciones)} circunscripciones, no 52")

    problemas = []
    filas = []
    cocientes = {}
    for c in circunscripciones:
        nombre = c["provincia"]
        cod = c["codigo"]
        # Contraste con la Junta Electoral Central: mismas candidaturas, votos y escaños
        excel = sorted((x["votos"], x["escanos_oficiales"]) for x in c["candidaturas"])
        if excel != jec.get(cod):
            problemas.append(f"{nombre}: votos y escaños por candidatura no coinciden con el BOE (JEC)")
        propios = [c["censo"], c["votantes"], c["votos_validos"], c["votos_candidaturas"], c["votos_blanco"], c["votos_nulos"]]
        if propios != jec_totales[cod]:
            problemas.append(f"{nombre}: censo, votantes, válidos, blancos o nulos no coinciden con el BOE (JEC): {propios} / {jec_totales[cod]}")
        if c["poblacion"] != poblacion_2022[cod]:
            problemas.append(f"{nombre}: la población del Excel ({c['poblacion']}) no es la del RD 1037/2022 ({poblacion_2022[cod]})")

        # Cuadres internos del fichero oficial
        suma_cand = sum(x["votos"] for x in c["candidaturas"])
        if suma_cand != c["votos_candidaturas"]:
            problemas.append(f"{nombre}: los votos por candidatura suman {suma_cand} y el total dice {c['votos_candidaturas']}")
        if c["votos_candidaturas"] + c["votos_blanco"] != c["votos_validos"]:
            problemas.append(f"{nombre}: candidaturas + blanco != válidos")
        if c["votos_validos"] + c["votos_nulos"] != c["votantes"]:
            problemas.append(f"{nombre}: válidos + nulos != votantes")
        if c["censo_cer"] + c["censo_cera"] != c["censo"]:
            problemas.append(f"{nombre}: censo CER + CERA != censo total")

        escanos = sum(x["escanos_oficiales"] for x in c["candidaturas"])
        if escanos != escanos_2023[c["codigo"]]:
            problemas.append(f"{nombre}: el Excel da {escanos} escaños y el RD 400/2023, {escanos_2023[c['codigo']]}")

        calculado, ultimo_cociente, superan = reparto(c["candidaturas"], escanos, c["votos_validos"])
        for x in c["candidaturas"]:
            x["escanos_calculados"] = calculado.get(x["siglas"], 0)
            x["supera_barrera"] = x["siglas"] in superan
            x["pct_validos"] = redondear(100 * x["votos"] / c["votos_validos"], 2)
            if x["escanos_calculados"] != x["escanos_oficiales"]:
                problemas.append(
                    f"{nombre}: {x['siglas']} tiene {x['escanos_oficiales']} escaños oficiales y el cálculo da {x['escanos_calculados']}"
                )
        c["candidaturas"].sort(key=lambda x: (-x["votos"], x["siglas"]))
        # Ejercicio: el mismo reparto sin la barrera del 3%, para saber si en 2023 cambió algo
        sin_barrera, _, _ = reparto(c["candidaturas"], escanos, c["votos_validos"], barrera=Fraction(0))
        cambia_barrera = sum(abs(sin_barrera.get(x["siglas"], 0) - x["escanos_oficiales"]) for x in c["candidaturas"]) // 2
        cocientes[nombre] = ultimo_cociente

        sin_escano = [x for x in c["candidaturas"] if x["escanos_oficiales"] == 0]
        votos_sin_escano = sum(x["votos"] for x in sin_escano)
        filas.append({
            "codigo": c["codigo"],
            "provincia": nombre,
            "comunidad": c["comunidad"],
            "escanos_2023": escanos,
            "escanos_2026": escanos_2026[c["codigo"]],
            "poblacion": c["poblacion"],
            "censo": c["censo"],
            "censo_cer": c["censo_cer"],
            "censo_cera": c["censo_cera"],
            "votantes": c["votantes"],
            "participacion_pct": redondear(100 * c["votantes"] / c["censo"], 2),
            "votos_validos": c["votos_validos"],
            "votos_candidaturas": c["votos_candidaturas"],
            "votos_blanco": c["votos_blanco"],
            "votos_nulos": c["votos_nulos"],
            "barrera_3pct_votos": -(-3 * c["votos_validos"] // 100) if escanos > 1 else None,
            "candidaturas": len(c["candidaturas"]),
            "candidaturas_con_escano": len(c["candidaturas"]) - len(sin_escano),
            "votos_sin_escano": votos_sin_escano,
            "pct_sin_escano": redondear(100 * votos_sin_escano / c["votos_validos"], 2),
            "votos_por_escano": redondear(c["votos_validos"] / escanos, 1),
            "electores_por_escano": redondear(c["censo"] / escanos, 1),
            "habitantes_por_escano": redondear(c["poblacion"] / escanos, 1),
            "cociente_ultimo_escano": redondear(ultimo_cociente, 1),
            "escanos_que_cambiaria_sin_barrera": cambia_barrera,
            "reparto_reproducido": True,
            "reparto": c["candidaturas"],
        })

    # Totales nacionales: el fichero trae su propia fila; tiene que cuadrar con la suma
    for campo in ("poblacion", "censo", "votantes", "votos_validos", "votos_candidaturas", "votos_blanco", "votos_nulos"):
        suma = sum(c[campo] for c in circunscripciones)
        if suma != total[campo]:
            problemas.append(f"total nacional de {campo}: la fila España dice {total[campo]} y la suma da {suma}")
    if sum(f["escanos_2023"] for f in filas) != ESCANOS_CONGRESO:
        problemas.append("los escaños no suman 350")
    propios = sorted([total["censo"], total["votantes"], total["votos_validos"], total["votos_candidaturas"], total["votos_blanco"], total["votos_nulos"]])
    if propios != jec_totales["total"]:
        problemas.append("el total nacional no coincide con el de la JEC en el BOE")

    if problemas:
        raise Descuadre("\n".join(problemas))

    media = Fraction(total["votos_validos"], ESCANOS_CONGRESO)
    for f in filas:
        # Cuántas veces el voto medio nacional pesa el de esta provincia (votos por escaño)
        f["peso_frente_media"] = redondear(media / Fraction(f["votos_validos"], f["escanos_2023"]), 2)
    filas.sort(key=lambda f: unicodedata.normalize("NFD", f["provincia"]).encode("ascii", "ignore").lower())

    votos_sin_escano = sum(f["votos_sin_escano"] for f in filas)
    por_votos = sorted(filas, key=lambda f: f["votos_validos"] / f["escanos_2023"])
    nacional = {
        "escanos": ESCANOS_CONGRESO,
        "poblacion": total["poblacion"],
        "censo": total["censo"],
        "votantes": total["votantes"],
        "votos_validos": total["votos_validos"],
        "votos_candidaturas": total["votos_candidaturas"],
        "votos_blanco": total["votos_blanco"],
        "votos_nulos": total["votos_nulos"],
        "votos_sin_escano": votos_sin_escano,
        "pct_sin_escano": redondear(100 * votos_sin_escano / total["votos_validos"], 2),
        "votos_por_escano": redondear(media, 1),
        "electores_por_escano": redondear(Fraction(total["censo"], ESCANOS_CONGRESO), 1),
        "habitantes_por_escano": redondear(Fraction(total["poblacion"], ESCANOS_CONGRESO), 1),
        "menos_votos_por_escano": por_votos[0]["provincia"],
        "mas_votos_por_escano": por_votos[-1]["provincia"],
        "circunscripciones_reproducidas": len(filas),
        "escanos_que_cambiaria_sin_barrera": sum(f["escanos_que_cambiaria_sin_barrera"] for f in filas),
        "cambios_escanos_2026": [
            {"provincia": f["provincia"], "escanos_2023": f["escanos_2023"], "escanos_2026": f["escanos_2026"]}
            for f in filas if f["escanos_2023"] != f["escanos_2026"]
        ],
    }
    return filas, nacional, cocientes


def comparar(filas, cocientes, a, b):
    """Cuántas veces la medida por escaño de b es la de a (Soria frente a Madrid)."""
    fa = next(f for f in filas if f["provincia"] == a)
    fb = next(f for f in filas if f["provincia"] == b)
    salida = {}
    for clave, num in (("votos_por_escano", "votos_validos"), ("electores_por_escano", "censo"), ("habitantes_por_escano", "poblacion")):
        ra = Fraction(fa[num], fa["escanos_2023"])
        rb = Fraction(fb[num], fb["escanos_2023"])
        salida[clave] = redondear(rb / ra, 2)
    # No mide el peso del voto: depende de cómo se reparta entre candidaturas (ver METODOLOGIA.md)
    salida["cociente_ultimo_escano"] = redondear(cocientes[b] / cocientes[a], 2)
    return salida


def construir():
    filas, nacional, cocientes = calcular()
    meta = {
        "titulo": "Lo que vale tu voto: votos por escaño y votos sin escaño, elecciones al Congreso de 23 de julio de 2023",
        "fuente": "Ministerio del Interior, resultados del Congreso de julio de 2023 por circunscripción (Excel provincial)",
        "url_fuente": URL_EXCEL,
        "sha256_fuente": SHA256_EXCEL,
        "consultado": "2026-11-01",
        "escanos_2023": "Real Decreto 400/2023, anexo",
        "url_escanos_2023": URL_RD_2023,
        "escanos_2026": "Real Decreto 806/2026, anexo",
        "url_escanos_2026": URL_RD_2026,
        "regla_reparto": "LOREG, art. 163 (barrera del 3% de los votos válidos y D'Hondt; mayoría en Ceuta y Melilla)",
        "url_regla": URL_LOREG,
        "contrastes": [
            {"fuente": "Junta Electoral Central, resumen de resultados (BOE-A-2023-18907), cuadros I, II y III", "url": URL_JEC_PDF,
             "que": "votos y escaños de cada candidatura; censo, votantes, válidos, a candidaturas, en blanco y nulos de cada provincia y del total"},
            {"fuente": "Real Decreto 400/2023, anexo", "url": URL_RD_2023, "que": "escaños de cada provincia en 2023"},
            {"fuente": "Real Decreto 1037/2022, anexo I", "url": URL_RD_POBLACION, "que": "población oficial de cada provincia a 1 de enero de 2022"},
        ],
        "metodologia": "https://github.com/democracia-real/proyecto/blob/main/data/voto-2023/METODOLOGIA.md",
        "script": "https://github.com/democracia-real/proyecto/blob/main/data/voto-2023/calcular.py",
        "calculo": "Hecho con IA (Claude, Claude Code) y un script reproducible. Revisión humana pendiente.",
        "licencia": "CC BY-SA 4.0",
        "definiciones": {
            "votos_por_escano": "votos válidos (a candidaturas + en blanco) / escaños de la circunscripción en 2023",
            "electores_por_escano": "censo electoral total, residentes y CERA / escaños",
            "habitantes_por_escano": "población que trae el fichero del Ministerio / escaños",
            "votos_sin_escano": "votos a candidaturas que no obtuvieron ningún escaño en esa circunscripción (no incluye blancos ni nulos)",
            "pct_sin_escano": "votos_sin_escano / votos válidos x 100",
            "peso_frente_media": "votos por escaño de España (votos válidos / 350) dividido entre los votos por escaño de la provincia",
            "cociente_ultimo_escano": "cociente D'Hondt con el que se adjudicó el último escaño de la circunscripción",
        },
    }
    return {
        "meta": meta,
        "nacional": nacional,
        "soria_madrid": comparar(filas, cocientes, "Soria", "Madrid"),
        "circunscripciones": filas,
    }


COLUMNAS_CSV = [
    "codigo", "provincia", "comunidad", "escanos_2023", "escanos_2026", "poblacion", "censo",
    "censo_cer", "censo_cera", "votantes", "participacion_pct", "votos_validos",
    "votos_candidaturas", "votos_blanco", "votos_nulos", "barrera_3pct_votos", "candidaturas",
    "candidaturas_con_escano", "votos_sin_escano", "pct_sin_escano", "votos_por_escano",
    "electores_por_escano", "habitantes_por_escano", "peso_frente_media",
    "cociente_ultimo_escano", "escanos_que_cambiaria_sin_barrera", "reparto_reproducido",
]
COLUMNAS_CANDIDATURAS = [
    "codigo", "provincia", "siglas", "nombre", "votos", "pct_validos", "supera_barrera",
    "escanos_oficiales", "escanos_calculados",
]


def a_csv(filas, columnas):
    buf = io.StringIO()
    w = csv.DictWriter(buf, fieldnames=columnas, extrasaction="ignore", lineterminator="\n")
    w.writeheader()
    for f in filas:
        w.writerow(f)
    return buf.getvalue()


def salidas(datos):
    candidaturas = [
        {"codigo": f["codigo"], "provincia": f["provincia"], **x}
        for f in datos["circunscripciones"] for x in f["reparto"]
    ]
    return {
        SALIDA_JSON: json.dumps(datos, ensure_ascii=False, indent=1) + "\n",
        SALIDA_CSV: a_csv(datos["circunscripciones"], COLUMNAS_CSV),
        SALIDA_CANDIDATURAS: a_csv(candidaturas, COLUMNAS_CANDIDATURAS),
    }


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--check", action="store_true", help="no escribe: falla si el dataset publicado no coincide")
    args = parser.parse_args()
    try:
        datos = construir()
    except Descuadre as exc:
        print("PARADO: el cálculo no reproduce los datos oficiales.\n" + str(exc), file=sys.stderr)
        return 1

    n = datos["nacional"]
    print(f"Reparto reproducido en {n['circunscripciones_reproducidas']} de 52 circunscripciones ({n['escanos']} escaños).")
    print(f"Votos por escaño (España): {n['votos_por_escano']:,.1f}")
    print(f"Votos sin escaño: {n['votos_sin_escano']:,} ({n['pct_sin_escano']}% de los válidos)")
    print(f"Soria frente a Madrid: {datos['soria_madrid']}")

    distintos = []
    for ruta, texto in salidas(datos).items():
        if args.check:
            if not ruta.exists() or ruta.read_text(encoding="utf-8") != texto:
                distintos.append(ruta.relative_to(REPO).as_posix())
        else:
            ruta.write_text(texto, encoding="utf-8", newline="\n")
            print(f"Escrito {ruta.relative_to(REPO).as_posix()}")
    if distintos:
        print("El dataset publicado no coincide con el cálculo: " + ", ".join(distintos), file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
