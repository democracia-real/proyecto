"""Compone una base instrumental (techno minimalista suave) y se la pone a un vídeo.

La música se sintetiza aquí mismo, nota a nota, así que no tiene derechos de terceros.
Uso: python herramientas/musica.py entrada.mp4 salida.mp4 [--semilla N] [--bpm 118]
"""
import argparse
import subprocess
import tempfile
import wave
from pathlib import Path

import numpy as np

SR = 44100
# Progresiones en la menor; la semilla elige una
PROGRESIONES = [
    ["Am", "F", "C", "G"],
    ["Am", "Em", "F", "G"],
    ["Am", "C", "G", "F"],
]
ACORDES = {  # notas MIDI de la tríada, en la octava del pad
    "Am": [57, 60, 64], "F": [53, 57, 60], "C": [60, 64, 67],
    "G": [55, 59, 62], "Em": [52, 55, 59],
}


def hz(midi):
    return 440.0 * 2 ** ((midi - 69) / 12)


def duracion(video):
    out = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration",
                          "-of", "csv=p=0", str(video)], capture_output=True, text=True, check=True)
    return float(out.stdout.strip())


def suavizar(x, n):
    """Paso bajo sencillo: media móvil de n muestras."""
    return np.convolve(x, np.ones(n) / n, mode="same")


def componer(segundos, bpm, semilla):
    rng = np.random.default_rng(semilla)
    progresion = PROGRESIONES[semilla % len(PROGRESIONES)]
    total = int((segundos + 0.5) * SR)
    izq, der = np.zeros(total), np.zeros(total)
    negra = 60.0 / bpm
    compas = 4 * negra

    def poner(señal, inicio, gan_i, gan_d):
        a = int(inicio * SR)
        if a >= total:
            return
        # Entrada de 2 ms y salida de 8 ms: sin ellas, cada nota acaba en un chasquido
        señal = señal.copy()
        n_in, n_out = min(len(señal), int(0.002 * SR)), min(len(señal), int(0.008 * SR))
        señal[:n_in] *= np.linspace(0, 1, n_in)
        señal[-n_out:] *= np.linspace(1, 0, n_out)
        b = min(total, a + len(señal))
        izq[a:b] += señal[: b - a] * gan_i
        der[a:b] += señal[: b - a] * gan_d

    # Bombo: seno con caída de tono
    t = np.arange(int(0.35 * SR)) / SR
    f = 45 + 75 * np.exp(-t * 30)
    bombo = np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t * 9)
    # Charles: ruido filtrado, muy corto
    t_h = np.arange(int(0.05 * SR)) / SR
    ruido = rng.standard_normal(len(t_h))
    charles = (ruido - suavizar(ruido, 6)) * np.exp(-t_h * 90)

    n_compases = int(np.ceil(segundos / compas)) + 1
    for c in range(n_compases):
        acorde = ACORDES[progresion[c % len(progresion)]]
        inicio = c * compas
        # Pad: tres senos ligeramente desafinados, ataque lento
        t_p = np.arange(int(compas * SR)) / SR
        env = np.minimum(1, t_p / 0.6) * np.minimum(1, (compas - t_p) / 0.3)
        for i, nota in enumerate(acorde):
            fr = hz(nota)
            onda_i = np.sin(2 * np.pi * fr * 0.998 * t_p) + 0.3 * np.sin(2 * np.pi * fr * 2 * t_p)
            onda_d = np.sin(2 * np.pi * fr * 1.002 * t_p) + 0.3 * np.sin(2 * np.pi * fr * 2 * t_p)
            izq[int(inicio * SR): int(inicio * SR) + len(t_p)][: total - int(inicio * SR)] += \
                (onda_i * env * 0.045)[: max(0, total - int(inicio * SR))]
            der[int(inicio * SR): int(inicio * SR) + len(t_p)][: total - int(inicio * SR)] += \
                (onda_d * env * 0.045)[: max(0, total - int(inicio * SR))]
        # Bajo: corcheas en la fundamental, dos octavas abajo
        raiz = hz(acorde[0] - 24)
        t_b = np.arange(int(negra / 2 * SR)) / SR
        onda = sum(np.sin(2 * np.pi * raiz * k * t_b) / k ** 2 for k in (1, 3, 5)) * np.exp(-t_b * 7)
        for corchea in range(8):
            if c >= 1:
                poner(onda * 0.28, inicio + corchea * negra / 2, 1, 1)
        # Arpegio: notas cortas del acorde, dos octavas arriba, en semicorcheas alternas
        t_a = np.arange(int(negra / 4 * SR)) / SR
        for s in range(0, 16, 2):
            nota = acorde[(s // 2) % 3] + 12
            pluck = np.sin(2 * np.pi * hz(nota) * t_a) * np.exp(-t_a * 25)
            poner(pluck * 0.05, inicio + s * negra / 4, 0.8 if s % 4 else 0.4, 0.4 if s % 4 else 0.8)
        # Bombo desde el segundo compás; charles a contratiempo siempre
        for b in range(4):
            if c >= 1:
                poner(bombo * 0.5, inicio + b * negra, 1, 1)
            poner(charles * 0.12, inicio + b * negra + negra / 2, 0.7, 1)

    mezcla = np.stack([izq, der])
    # Final: fundido de 1,5 s y entrada suave de 0,3 s
    n_fin, n_ini = int(1.5 * SR), int(0.3 * SR)
    mezcla[:, -n_fin:] *= np.linspace(1, 0, n_fin)
    mezcla[:, :n_ini] *= np.linspace(0, 1, n_ini)
    mezcla = np.tanh(mezcla * 1.2)
    mezcla *= 0.89 / np.max(np.abs(mezcla))  # pico en -1 dBFS
    return mezcla


def guardar_wav(mezcla, ruta):
    datos = (mezcla.T * 32767).astype(np.int16)
    with wave.open(str(ruta), "wb") as w:
        w.setnchannels(2)
        w.setsampwidth(2)
        w.setframerate(SR)
        w.writeframes(datos.tobytes())


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("entrada")
    ap.add_argument("salida")
    ap.add_argument("--semilla", type=int, default=0)
    ap.add_argument("--bpm", type=float, default=118)
    args = ap.parse_args()

    segundos = duracion(args.entrada)
    with tempfile.TemporaryDirectory() as tmp:
        wav = Path(tmp) / "musica.wav"
        guardar_wav(componer(segundos, args.bpm, args.semilla), wav)
        subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", args.entrada, "-i", str(wav),
                        "-map", "0:v", "-map", "1:a", "-c:v", "copy", "-c:a", "aac", "-b:a", "160k",
                        "-shortest", "-movflags", "+faststart", args.salida], check=True)
    print("ok", args.salida, f"{segundos:.1f}s")


if __name__ == "__main__":
    main()
