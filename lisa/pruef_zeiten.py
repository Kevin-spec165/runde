# -*- coding: utf-8 -*-
"""Prueft ALLE Zeitfenster auf einmal. Entstanden, weil ich beim Verschieben
eines Kapitels nur die eine Pause geprueft habe, die mir gerade einfiel -
und die daneben dabei kaputtging. Ein Werkzeug vergisst keine."""
import subprocess, re, sys, pathlib, json

LAENGE = 58.76
MIN_PAUSE = 0.8
MIN_RUHE  = 1.2

def starts():
    s = pathlib.Path("index.html").read_text()
    return [float(x) for x in re.findall(r'\{ bei:\s*([0-9.]+),', s)]

def dauer(p):
    o = subprocess.run(["afinfo", p], capture_output=True, text=True).stdout
    return float(re.search(r"estimated duration: ([0-9.]+)", o).group(1))

fehler = []
ST = starts()
for spr in ("de", "en"):
    d = [dauer(f"ton/{spr}/{i+1}.m4a") for i in range(len(ST))]
    for i in range(len(ST)):
        ende = ST[i] + d[i]
        naechst = ST[i+1] if i+1 < len(ST) else LAENGE
        pause = naechst - ende
        if ende > naechst:
            fehler.append(f"{spr} K{i+1} laeuft {ende-naechst:.2f}s ins naechste Kapitel")
        elif i+1 < len(ST) and pause < MIN_PAUSE:
            fehler.append(f"{spr} K{i+1}->K{i+2} nur {pause:.2f}s Pause (mind. {MIN_PAUSE})")
    ruhe = LAENGE - (ST[-1] + d[-1])
    if ruhe < MIN_RUHE:
        fehler.append(f"{spr} nur {ruhe:.2f}s Ruhe am Schluss (mind. {MIN_RUHE})")
    print(f"{spr.upper()}: Sprache {sum(d)/LAENGE*100:.0f}%  Ruhe am Schluss {ruhe:.2f}s")

if fehler:
    print("\nFEHLER:"); [print("  " + f) for f in fehler]; sys.exit(1)
print("\nAlle Zeitfenster in Ordnung.")
