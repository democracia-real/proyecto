#!/usr/bin/env python3
"""Las reglas del juego: construye la matriz a partir de las dos lecturas.

Lee data/reglas/fuentes.json (documentos), primera.json y segunda.json (las dos
lecturas independientes) y:

  1. comprueba la huella SHA-256 de cada documento descargado;
  2. comprueba que cada cita aparece literal en el texto del documento y calcula
     su página (PDF, con pdftotext) o su línea (Markdown);
  3. compara el valor de las dos lecturas: si no coinciden, la celda queda
     «no consta» y se anota la discrepancia;
  4. escribe web/data/reglas.json, web/data/reglas.csv y fuente/FUENTES.md.

Solo usa la biblioteca estándar y el programa pdftotext (Poppler).

Uso:
  python -I data/reglas/construir.py           # construye
  python -I data/reglas/construir.py --check   # falla si los datos no están al día
"""

import argparse
import bisect
import csv
import hashlib
import io
import json
import re
import subprocess
import sys
from pathlib import Path

DIR = Path(__file__).resolve().parent
REPO = DIR.parents[1]
WEB = REPO / "web" / "data"
VALORES = ["sí", "parcial", "no", "no consta"]
SEPARADOR = " […] "


def sha256(ruta):
    """Huella del fichero. En los Markdown del repositorio, con finales de línea LF, para que no cambie según el sistema."""
    datos = ruta.read_bytes()
    if ruta.suffix == ".md":
        datos = datos.replace(b"\r\n", b"\n")
    return hashlib.sha256(datos).hexdigest()


def normalizar(texto):
    """Junta palabras partidas al final de línea y unifica espacios y signos."""
    texto = texto.replace("​", "").replace("­", "").replace("\f", "\n")
    texto = texto.replace("ﬁ", "fi").replace("ﬂ", "fl")
    texto = re.sub(r"[’‘´`]", "'", texto)
    texto = re.sub(r"[“”«»]", '"', texto)
    texto = texto.replace("**", "")
    texto = re.sub(r"(\w)-[ \t]*\n\s*(\w)", r"\1\2", texto)
    return re.sub(r"\s+", " ", texto).strip()


class Texto:
    """Texto normalizado de un documento, con la página o la línea de cada posición."""

    def __init__(self, ruta, layout):
        if ruta.suffix == ".pdf":
            args = ["pdftotext", "-enc", "UTF-8"] + (["-layout"] if layout else []) + [str(ruta), "-"]
            bruto = subprocess.run(args, capture_output=True, check=True).stdout.decode("utf-8")
            trozos = bruto.split("\f")
        else:
            trozos = ruta.read_text(encoding="utf-8").split("\n")
        self.inicios, partes, pos = [], [], 0
        for trozo in trozos:
            n = normalizar(trozo)
            self.inicios.append(pos)
            partes.append(n)
            pos += len(n) + 1
        self.texto = " ".join(partes)

    def buscar(self, cita, desde=0):
        i = self.texto.find(normalizar(cita), desde)
        if i < 0:
            return None, None
        return i, bisect.bisect_right(self.inicios, i)


def localizar(textos, ruta, cita):
    """Devuelve la página o línea (1 = primera) donde empieza la cita, o None."""
    for layout in (True, False):
        clave = (ruta, layout)
        if clave not in textos:
            textos[clave] = Texto(ruta, layout)
        t = textos[clave]
        pos, primera = 0, None
        for trozo in cita.split(SEPARADOR):
            i, pagina = t.buscar(trozo, pos)
            if i is None:
                break
            primera = primera or pagina
            pos = i + 1
        else:
            return primera
        if ruta.suffix != ".pdf":
            break
    return None


def leer(nombre):
    return json.loads((DIR / nombre).read_text(encoding="utf-8"))


def criterios(estandares):
    """Lee de METODOLOGIA.md la regla de cada valor, para que la web y la metodología digan lo mismo."""
    texto = (DIR / "METODOLOGIA.md").read_text(encoding="utf-8")
    salida = {}
    for e in estandares:
        m = re.search(rf"^### {e['id']}\. .*?\n(.*?)(?=^### |^## )", texto, re.M | re.S)
        if not m:
            raise SystemExit(f"METODOLOGIA.md no tiene la sección del estándar {e['id']}")
        reglas = []
        for linea in re.findall(r"^- (.+)$", m.group(1), re.M):
            linea = linea.replace("**", "").replace("`", "")
            v = re.match(r"(sí|parcial|no|no consta): (.+)", linea)
            reglas.append({"valor": v.group(1), "texto": v.group(2)} if v else {"valor": None, "texto": linea})
        salida[e["id"]] = reglas
    return salida


def enlace(doc, lugar):
    """Enlace a la cláusula: la página en el PDF oficial, o la línea en GitHub para los Markdown."""
    if not doc or not lugar:
        return None
    return doc["url"] + (f"#L{lugar}" if doc["documento"].endswith(".md") else f"#page={lugar}")


def ruta_doc(documento):
    return (DIR / documento) if documento.startswith("fuente/") else (REPO / documento)


def construir():
    fuentes = leer("fuentes.json")
    primera = {(c["partido"], c["estandar"]): c for c in leer("primera.json")["celdas"]}
    segunda = {(c["partido"], c["estandar"]): c for c in leer("segunda.json")["celdas"]}
    errores, avisos = [], []

    docs = {d["documento"]: d for d in fuentes["documentos"]}
    for d in fuentes["documentos"]:
        ruta = ruta_doc(d["documento"])
        if not ruta.exists():
            errores.append(f"falta {d['documento']}")
        elif d.get("sha256") and sha256(ruta) != d["sha256"]:
            errores.append(f"{d['documento']}: la huella no coincide con fuentes.json")

    textos, celdas = {}, []
    for p in fuentes["partidos"]:
        for e in fuentes["estandares"]:
            clave = (p["id"], e["id"])
            a, b = primera.get(clave), segunda.get(clave)
            if not a or not b:
                errores.append(f"{clave}: falta una de las dos lecturas")
                continue
            for lectura, c in (("primera", a), ("segunda", b)):
                if c["valor"] not in VALORES:
                    errores.append(f"{clave} {lectura}: valor '{c['valor']}' no válido")
                c["_lugar"] = None
                if c.get("cita"):
                    if c.get("documento") not in docs:
                        errores.append(f"{clave} {lectura}: documento {c.get('documento')} no está en fuentes.json")
                        continue
                    c["_lugar"] = localizar(textos, ruta_doc(c["documento"]), c["cita"])
                    if c["_lugar"] is None:
                        (errores if lectura == "primera" else avisos).append(
                            f"{clave} {lectura}: la cita no aparece literal en {c['documento']}")
                elif c["valor"] != "no consta":
                    errores.append(f"{clave} {lectura}: valor '{c['valor']}' sin cita")

            coinciden = a["valor"] == b["valor"]
            es_md = (a.get("documento") or "").endswith(".md")
            celda = {
                "partido": p["id"],
                "estandar": e["id"],
                "valor": a["valor"] if coinciden else "no consta",
                # El texto corto es nuestro, no de la lectura: fuentes.json puede reescribirlo sin tocar lo que leyó cada IA
                "etiqueta": (fuentes.get("etiquetas", {}).get(f"{p['id']}-{e['id']}", a["etiqueta"])
                             if coinciden else "las dos lecturas no coinciden"),
                "coinciden": coinciden,
                "documento": a.get("documento") if coinciden and a.get("cita") else None,
                "url": docs.get(a.get("documento"), {}).get("url") if coinciden and a.get("cita") else None,
                "articulo": a.get("articulo") if coinciden else None,
                "pagina": a["_lugar"] if coinciden and not es_md else None,
                "linea": a["_lugar"] if coinciden and es_md else None,
                "enlace": enlace(docs.get(a.get("documento")), a["_lugar"]) if coinciden else None,
                "consultado": fuentes["fecha"],
                "cita": a.get("cita", "") if coinciden else "",
                "traduccion": a.get("traduccion", "") if coinciden else "",
                "motivo": a["motivo"] if coinciden else "",
                "duda": a.get("duda", "") if coinciden else "",
                "primera": {k: a.get(k) for k in ("valor", "etiqueta", "articulo", "cita", "motivo")},
                "segunda": {k: b.get(k) for k in ("valor", "etiqueta", "articulo", "cita", "motivo")},
            }
            celda["primera"]["lugar"], celda["segunda"]["lugar"] = a["_lugar"], b["_lugar"]
            celda["primera"]["documento"], celda["segunda"]["documento"] = a.get("documento"), b.get("documento")
            if not coinciden:
                celda["discrepancia"] = (f"Primera lectura: «{a['valor']}» ({a['etiqueta']}). "
                                         f"Segunda lectura: «{b['valor']}» ({b['etiqueta']}).")
            celdas.append(celda)

    resumen = {v: sum(1 for c in celdas if c["valor"] == v) for v in VALORES}
    resumen["celdas"] = len(celdas)
    resumen["discrepancias"] = sum(1 for c in celdas if not c["coinciden"])
    reglas = criterios(fuentes["estandares"])
    for c in celdas:
        if c["coinciden"] and c["valor"] != "no consta" and not (c["cita"] and c["articulo"] and c["enlace"]):
            errores.append(f"{(c['partido'], c['estandar'])}: celda con valor sin cita, artículo o enlace")
    salida = {k: fuentes[k] for k in ("titulo", "version", "fecha", "estado", "aviso", "metodologia", "escala",
                                      "politica_correcciones", "correcciones")}
    salida.update({
        "verificacion": {"primera": leer("primera.json")["hecha_por"], "segunda": leer("segunda.json")["hecha_por"],
                         "revision_humana": None},
        "resumen": resumen,
        "estandares": [dict(e, criterios=reglas[e["id"]]) for e in fuentes["estandares"]],
        "partidos": fuentes["partidos"],
        "documentos": fuentes["documentos"],
        "celdas": celdas,
    })
    return salida, errores, avisos


def a_csv(datos):
    nombres = {p["id"]: p["nombre"] for p in datos["partidos"]}
    estandares = {e["id"]: e["nombre"] for e in datos["estandares"]}
    sha = {d["documento"]: d["sha256"] for d in datos["documentos"]}
    buf = io.StringIO()
    w = csv.writer(buf, lineterminator="\n")
    w.writerow(["partido", "estandar", "valor", "etiqueta", "articulo", "documento", "pagina", "linea",
                "cita", "traduccion", "enlace", "consultado", "sha256", "primera_lectura", "segunda_lectura", "coinciden"])
    for c in datos["celdas"]:
        w.writerow([nombres[c["partido"]], estandares[c["estandar"]], c["valor"], c["etiqueta"], c["articulo"] or "",
                    c["documento"] or "", c["pagina"] or "", c["linea"] or "", c["cita"], c["traduccion"],
                    c["enlace"] or "", c["consultado"], sha.get(c["documento"], ""), c["primera"]["valor"],
                    c["segunda"]["valor"], "sí" if c["coinciden"] else "no"])
    return buf.getvalue()


def a_fuentes_md(datos):
    lineas = [
        "# Fuentes de «Las reglas del juego»",
        "",
        "Documentos descargados el **1 de noviembre de 2026** de la web oficial de cada partido y guardados sin tocar. "
        "Son datos de terceros: se leen, no se ejecutan. Lo genera [`../construir.py`](../construir.py) a partir de "
        "[`../fuentes.json`](../fuentes.json), que comprueba cada huella. Si falta algún documento vigente de tu "
        "partido, escríbenos a info@democraciareal.es.",
        "",
        "| Fichero | Qué es | URL oficial | Copia descargada de | Fecha del servidor | SHA-256 |",
        "|---------|--------|-------------|---------------------|--------------------|---------|",
    ]
    for d in datos["documentos"]:
        if not d["documento"].startswith("fuente/"):
            continue
        desc = d.get("url_descarga") or "la misma"
        desc = desc if desc == "la misma" else f"[archivo]({desc})"
        lineas.append(f"| `{d['documento'][7:]}` | {d['titulo']} | {d['url']} | {desc} | "
                      f"{d.get('fecha_servidor', '')} | `{d['sha256']}` |")
    lineas += ["", "## Notas", ""] + [f"- {n}" for n in datos.get("notas_fuentes", [])]
    lineas += ["", "Para comprobar un fichero: `sha256sum fichero` (Linux, Git Bash) o `Get-FileHash fichero` (PowerShell).", ""]
    return "\n".join(lineas)


def a_verificacion_md(datos):
    siglas = {p["id"]: p["siglas"] for p in datos["partidos"]}
    nombre = {e["id"]: e["nombre"] for e in datos["estandares"]}
    r, celdas = datos["resumen"], datos["celdas"]
    citas = sum(1 for c in celdas for l in (c["primera"], c["segunda"]) if l.get("cita"))
    lineas = [
        "# Las reglas del juego: verificación",
        "",
        "*Lo genera [`construir.py`](construir.py). No editar a mano.*",
        "",
        "## Quién ha leído qué",
        "",
        f"- **Primera lectura:** {datos['verificacion']['primera']}.",
        f"- **Segunda lectura:** {datos['verificacion']['segunda']}.",
        "- **Revisión humana:** ninguna. No se escribe una firma humana que no existe.",
        "",
        "Las dos lecturas aplican los criterios de [`METODOLOGIA.md`](METODOLOGIA.md), escritos antes de leer los documentos.",
        "",
    ] + [f"- {n}" for n in datos.get("notas_verificacion", [])] + [
        "",
        "## Resultado",
        "",
        f"- {r['celdas']} celdas. Las dos lecturas coinciden en {r['celdas'] - r['discrepancias']} y no coinciden en "
        f"{r['discrepancias']}, que quedan «no consta».",
        f"- Valores finales: sí {r['sí']}, parcial {r['parcial']}, no {r['no']}, no consta {r['no consta']}.",
        f"- {citas} citas comprobadas por script: cada una aparece literal en el texto del documento "
        "(con `pdftotext`, con y sin `-layout`, uniendo solo las palabras partidas a final de línea).",
        "",
        "## Discrepancias",
        "",
        "| Partido | Estándar | Primera lectura | Segunda lectura |",
        "|---------|----------|-----------------|-----------------|",
    ]
    for c in celdas:
        if not c["coinciden"]:
            a, b = c["primera"], c["segunda"]
            lineas.append(f"| {siglas[c['partido']]} | {nombre[c['estandar']]} | **{a['valor']}**: {a['motivo']} | "
                          f"**{b['valor']}**: {b['motivo']} |")
    lineas += ["", "## Celdas que coinciden pero son dudosas", "",
               "| Partido | Estándar | Valor | Duda |", "|---------|----------|-------|------|"]
    for c in celdas:
        if c["coinciden"] and c.get("duda"):
            lineas.append(f"| {siglas[c['partido']]} | {nombre[c['estandar']]} | {c['valor']} | {c['duda']} |")
    lineas += ["", "## Tabla completa", "", "| Partido | " + " | ".join(nombre[e["id"]] for e in datos["estandares"]) + " |",
               "|---|" + "---|" * len(datos["estandares"])]
    for p in datos["partidos"]:
        fila = []
        for e in datos["estandares"]:
            c = next(x for x in celdas if x["partido"] == p["id"] and x["estandar"] == e["id"])
            fila.append(f"{c['valor']}" + ("" if c["coinciden"] else f" ({c['primera']['valor']} / {c['segunda']['valor']})"))
        lineas.append(f"| {p['siglas']} | " + " | ".join(fila) + " |")
    lineas.append("")
    return "\n".join(lineas)


def a_replica_md(datos, p):
    """Borrador del correo de réplica a un partido: su fila, 7 días, respuestas literales. No se envía desde aquí."""
    docs = {d["documento"]: d for d in datos["documentos"]}
    metodologia = datos["metodologia"]
    lineas = [
        f"# Borrador de réplica: {p['nombre']}",
        "",
        "> **BORRADOR. No enviar** sin la aprobación de la persona responsable ([GOBIERNO.md](../../../GOBIERNO.md)).",
        "> Generado por `data/reglas/construir.py` a partir de `web/data/reglas.json`; si cambian los datos, se vuelve a generar.",
        "> Antes de enviar: publicar la metodología (sin resultados) para que el enlace funcione, poner la fecha límite",
        "> (fecha de envío + 7 días) y la firma de la persona responsable, y confirmar la dirección.",
        "",
        f"- **Para:** {p['contacto']} (dirección electrónica que figura en {p['contacto_fuente']}; por confirmar)",
        f"- **Asunto:** Antes de publicar: sus reglas internas en «Las reglas del juego» (réplica en 7 días)",
        "",
        "---",
        "",
        "Buenos días:",
        "",
        "Les escribimos desde Democracia Real, un proyecto ciudadano que no es un partido ni se presenta a elecciones. "
        "Estamos preparando una comparación de seis reglas internas de los partidos que tuvieron grupo propio en el "
        "Congreso en la XV legislatura, con los mismos criterios para todos y empezando por las nuestras. Cada celda "
        "se apoya en una cláusula literal de los estatutos o del código ético que cada partido publica en su web.",
        "",
        "Antes de publicar, les enviamos su fila para que puedan revisarla. La extracción la han hecho dos sistemas de "
        "inteligencia artificial por separado, y la supervisa la persona responsable del proyecto que firma este correo.",
        "",
        f"Los criterios de cada valor están publicados aquí: {metodologia}",
        "",
        f"## Su fila: {p['siglas']}",
        "",
    ]
    for e in datos["estandares"]:
        c = next(x for x in datos["celdas"] if x["partido"] == p["id"] and x["estandar"] == e["id"])
        lineas.append(f"### {e['id']}. {e['nombre']}: **{c['valor']}**")
        lineas.append("")
        lineas.append(f"*{e['pregunta']}*")
        lineas.append("")
        if c["coinciden"] and c["cita"]:
            d = docs[c["documento"]]
            lineas += [f"- Lo que hemos anotado: {c['etiqueta']}.",
                       f"- Cláusula: «{c['cita']}»"]
            if c["traduccion"]:
                lineas.append(f"- Traducción orientativa (nuestra, no oficial): «{c['traduccion']}»")
            lineas += [f"- Dónde: {c['articulo']}, página {c['pagina']} de «{d['titulo']}» ({c['enlace']}). Consultado el 1 de noviembre de 2026.",
                       f"- Por qué este valor: {c['motivo']}"]
        elif c["coinciden"]:
            lineas += [f"- No hemos encontrado ninguna cláusula sobre esto en los documentos que hemos leído (lista al final). "
                       "«No consta» no quiere decir que no exista: si está en otro documento vigente, les agradeceremos que nos lo indiquen.",
                       f"- Nota: {c['motivo']}"]
        else:
            lineas.append("- Las dos lecturas no coinciden, así que la celda queda «no consta». Estas son las dos:")
            for nombre, l in (("Primera", c["primera"]), ("Segunda", c["segunda"])):
                lineas.append(f"  - {nombre} lectura: «{l['valor']}» ({l['etiqueta']}). Cláusula: «{l['cita']}» ({l['articulo']}). {l['motivo']}")
        lineas.append("")
    lineas += ["## Documentos que hemos leído", "",
               "Les agradeceremos que nos confirmen si son las versiones vigentes:", ""]
    for d in datos["documentos"]:
        if d["partido"] == p["id"]:
            lineas.append(f"- {d['titulo']}: {d['url']}" + (f" (copia archivada: {d['url_descarga']})" if d.get("url_descarga") else ""))
    if p.get("nota"):
        lineas += ["", f"Nota: {p['nota']}"]
    lineas += [
        "",
        "## Cómo responder",
        "",
        "- Tienen **7 días naturales, hasta el [FECHA DE ENVÍO + 7 DÍAS]**, para contestar a este correo.",
        "- **Publicaremos su respuesta literal**, completa, junto a su fila.",
        "- Si señalan un error, lo corregiremos y lo diremos en la página. Corregimos en público cualquier error en menos de 24 horas.",
        "- Si nos indican un documento vigente que no hemos leído, lo leeremos con los mismos criterios.",
        "- Si no contestan, publicaremos la fila tal como está e indicaremos que se les pidió réplica y en qué fecha.",
        "",
        "No calificamos a ningún partido ni a ninguna persona: solo anotamos qué dice cada regla escrita y dónde.",
        "",
        "Un saludo,",
        "",
        "Democracia Real",
        "[NOMBRE Y CONTACTO DE LA PERSONA RESPONSABLE]",
        "",
    ]
    return "\n".join(lineas)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--check", action="store_true", help="falla si los ficheros generados no están al día")
    args = parser.parse_args()
    sys.stdout.reconfigure(encoding="utf-8")

    datos, errores, avisos = construir()
    fuentes = leer("fuentes.json")
    datos["notas_fuentes"] = fuentes.get("notas_fuentes", [])
    datos["notas_verificacion"] = fuentes.get("notas_verificacion", [])
    internas = ("notas_fuentes", "notas_verificacion")
    salidas = {
        WEB / "reglas.json": json.dumps({k: v for k, v in datos.items() if k not in internas},
                                        ensure_ascii=False, indent=1) + "\n",
        WEB / "reglas.csv": a_csv(datos),
        DIR / "fuente" / "FUENTES.md": a_fuentes_md(datos),
        DIR / "VERIFICACION.md": a_verificacion_md(datos),
    }
    r = datos["resumen"]
    print(f"{r['celdas']} celdas: " + ", ".join(f"{v} {r[v]}" for v in VALORES) + f"; {r['discrepancias']} discrepancias")
    for a in avisos:
        print(f"AVISO  {a}")
    for e in errores:
        print(f"ERROR  {e}")
    if errores:
        return 1
    if args.check:
        viejos = [str(p.relative_to(REPO)) for p, t in salidas.items()
                  if not p.exists() or p.read_text(encoding="utf-8") != t]
        for v in viejos:
            print(f"ERROR  {v} no está al día: ejecuta python -I data/reglas/construir.py")
        return 1 if viejos else 0
    # Borradores de réplica: en internal/ (fuera de Git), así que no cuentan para --check
    replica = REPO / "internal" / "reglas" / "replica"
    replica.mkdir(parents=True, exist_ok=True)
    for p in datos["partidos"]:
        if p["id"] != "democracia-real":
            salidas[replica / f"{p['id']}.md"] = a_replica_md(datos, p)
    for p, t in salidas.items():
        p.write_text(t, encoding="utf-8", newline="\n")
    print("Escritos: " + ", ".join(str(p.relative_to(REPO)) for p in salidas))
    return 0


if __name__ == "__main__":
    sys.exit(main())
