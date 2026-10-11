#!/usr/bin/env python3
"""Comprueba el registro de cifras (web/data/cifras.json).

Errores (salida 1):
  - faltan campos obligatorios o el estado no es válido
  - una cifra "verificado" sin URL o sin fragmento
  - el texto declarado en texto_en no aparece en el fichero (alguien cambió la
    cifra en la web sin pasar por el registro)

Avisos (no rompen):
  - fecha de revisión vencida (con --strict pasa a error)
  - falta la revisión humana
  - con --online, enlaces que no responden

Uso:
  python .github/checks/check_cifras.py
  python .github/checks/check_cifras.py --online --strict
"""

import argparse
import json
import sys
import urllib.request
from datetime import date
from pathlib import Path

REPO = Path(__file__).resolve().parents[2]
REGISTRO = REPO / "web" / "data" / "cifras.json"
CAMPOS = ["id", "afirmacion", "valor", "fuente", "consultado", "estado", "revisar_en", "texto_en"]


def comprobar_url(url):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (check_cifras)"})
    try:
        with urllib.request.urlopen(req, timeout=20) as resp:
            return resp.status
    except Exception as exc:  # noqa: BLE001
        return str(exc)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--online", action="store_true", help="comprobar que las URLs responden")
    parser.add_argument("--strict", action="store_true", help="las revisiones vencidas son error")
    args = parser.parse_args()

    datos = json.loads(REGISTRO.read_text(encoding="utf-8"))
    estados = set(datos["estados"])
    errores, avisos = [], []
    hoy = date.today()
    ids = set()

    for c in datos["cifras"]:
        cid = c.get("id", "?")
        if cid in ids:
            errores.append(f"{cid}: id duplicado")
        ids.add(cid)

        faltan = [k for k in CAMPOS if k not in c]
        if faltan:
            errores.append(f"{cid}: faltan campos {faltan}")
            continue
        if c["estado"] not in estados:
            errores.append(f"{cid}: estado '{c['estado']}' no válido")

        if c["estado"] == "verificado":
            if not c.get("url") or not c.get("fragmento"):
                errores.append(f"{cid}: verificado sin url o sin fragmento")
            if not c.get("revision_humana"):
                avisos.append(f"{cid}: falta la revisión humana")

        if date.fromisoformat(c["revisar_en"]) < hoy:
            (errores if args.strict else avisos).append(f"{cid}: revisión vencida ({c['revisar_en']})")

        for ruta, texto in c["texto_en"].items():
            fichero = REPO / ruta
            if not fichero.exists():
                errores.append(f"{cid}: no existe {ruta}")
            elif texto not in fichero.read_text(encoding="utf-8"):
                errores.append(f"{cid}: '{texto}' no aparece en {ruta}")

        if args.online and c.get("url"):
            estado = comprobar_url(c["url"])
            if estado != 200:
                avisos.append(f"{cid}: la URL responde {estado}")

    verificadas = sum(1 for c in datos["cifras"] if c.get("estado") == "verificado")
    print(f"Registro: {len(datos['cifras'])} cifras, {verificadas} verificadas")
    for a in avisos:
        print(f"AVISO  {a}")
    for e in errores:
        print(f"ERROR  {e}")
    return 1 if errores else 0


if __name__ == "__main__":
    sys.exit(main())
