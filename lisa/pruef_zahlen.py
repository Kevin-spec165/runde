# -*- coding: utf-8 -*-
"""Prueft jede Zahl und jede Behauptung auf der Seite gegen die echten Dateien.
Entstanden aus dem Fund, dass "ein Zug ohne Schnitt" schlicht falsch war -
die Seite behauptete etwas, das rundgang.txt widerlegt."""
import re, pathlib, subprocess, struct, sys

WORT = {1:"ein",2:"zwei",3:"drei",4:"vier",5:"fünf",6:"sechs",7:"sieben",
        8:"acht",9:"neun",10:"zehn"}
EN   = {1:"one",2:"two",3:"three",4:"four",5:"five",6:"six",7:"seven"}

s = pathlib.Path("index.html").read_text()
fehler = []

def nennt(zahl, wort):
    """Steht die Zahl irgendwo - als Ziffer oder ausgeschrieben?"""
    klein = s.lower()
    return (f"{zahl} {wort}".lower() in klein
            or f"{WORT.get(zahl,'')} {wort}".strip().lower() in klein
            or f"{EN.get(zahl,'')} {wort}".strip().lower() in klein)

# Videolaenge aus der Datei
o = subprocess.run(["swift","/tmp/frames.swift","tour.mp4","/tmp","999"],
                   capture_output=True, text=True).stdout
m = re.search(r"Dauer: ([0-9.]+) s", o)
laenge = float(m.group(1)) if m else None
if laenge:
    im_skript = float(re.search(r"LAENGE = ([0-9.]+)", s).group(1))
    if abs(laenge - im_skript) > 0.05:
        fehler.append(f"LAENGE im Skript {im_skript}, Datei {laenge}")

# Aufnahmen aus dem Schnittplan
plan = pathlib.Path("../lisa-tour-guide/media/demo/rundgang.txt").read_text()
aufn = len([z for z in plan.splitlines() if z.strip() and not z.startswith("#")])
if not nennt(aufn, "Aufnahmen"):
    fehler.append(f"Seite nennt nicht {aufn} Aufnahmen ({aufn-1} Schnitte)")
if "ohne Schnitt" in s or "continuous take" in s:
    fehler.append("Seite behauptet weiter 'ohne Schnitt'")

# Kapitel
kap = len(re.findall(r"\{ bei:", s))
if not nennt(kap, "Kapitel"): fehler.append(f"Seite nennt nicht {kap} Kapitel")

# Platzhalter
pl = len(re.findall(r'beleg:"platzhalter"', s))
erwartet = ("Eine der sieben Aussagen ist ein Platzhalter" if pl == 1
            else f"{WORT.get(pl,pl)} der sieben Aussagen")
if erwartet not in s: fehler.append(f"Kleingedrucktes passt nicht zu {pl} Platzhalter(n)")

# Bildmasse gegen die Teilen-Angaben
def jpeg_masse(p):
    d = pathlib.Path(p).read_bytes(); i = 2
    while i < len(d):
        if d[i] != 0xFF: i += 1; continue
        if d[i+1] in (0xC0,0xC1,0xC2):
            h,w = struct.unpack(">HH", d[i+5:i+9]); return w,h
        i += 2 + struct.unpack(">H", d[i+2:i+4])[0]
    return None,None
w,h = jpeg_masse("bild/poster.jpg")
for feld, wert in (("width", w), ("height", h)):
    t = re.search(rf'og:image:{feld}" content="(\d+)"', s)
    if t and int(t.group(1)) != wert:
        fehler.append(f"og:image:{feld} sagt {t.group(1)}, Datei hat {wert}")

print(f"Video {laenge}s · {aufn} Aufnahmen / {aufn-1} Schnitte · {kap} Kapitel · "
      f"{pl} Platzhalter · Poster {w}x{h}")
if fehler:
    print("\nFEHLER:"); [print("  " + f) for f in fehler]; sys.exit(1)
print("\nJede Zahl auf der Seite stimmt mit den Dateien überein.")
