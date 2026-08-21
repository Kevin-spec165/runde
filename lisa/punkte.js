/* ===========================================================================
   punkte.js — die Halte und ihre Klickpunkte.

   ENTWURF. Text und Fakten werden gemeinsam überarbeitet.

   EIN Punkt je Halt, sechs insgesamt. Vorher waren es sechzehn — das sah
   nach Effekt aus, nicht nach Argument. Ein einzelner Punkt auf einem Bild
   ist eine Aussage. Drei sind Deko.

   Die übrigen zehn stehen unten unter "fragebogen". Sie werden nicht
   angezeigt, aber nicht weggeworfen: beim echten Zimmer sind sie die Liste
   der Fragen, die der Hotelier beantworten muss. Das ist ihr eigentlicher
   Wert.

   beleg: "bild" = im Standbild nachgeprüft · "haus" = kommt vom Hotel
   x und y sind Prozent im BILD, an den Standbildern gemessen.
   ======================================================================== */

window.PUNKTE = {
  halte: [
    {
      bei: 2.5, kapitel: 1,
      titel: { de: "Der erste Blick", en: "The first look" },
      punkte: [
        { x: 27, y: 22, beleg: "bild",
          marke: { de: "Licht", en: "Light" },
          kopf:  { de: "Zwei Fenster, eine Seite", en: "Two windows, one side" },
          text:  { de: "Beide Fenster liegen auf derselben Wand. Das Licht kommt aus einer Richtung und wandert im Tagesverlauf durch den Raum — es gibt keine Stelle, die den ganzen Tag dunkel bleibt.",
                   en: "Both windows sit on the same wall. Light comes from one direction and travels across the room through the day — no corner stays dark all day." } }
      ]
    },
    {
      bei: 16.0, kapitel: 2,
      titel: { de: "Am Bett", en: "At the bed" },
      punkte: [
        { x: 28, y: 42, beleg: "bild",
          marke: { de: "Schlafen", en: "Sleeping" },
          kopf:  { de: "Kopfende an der Wand", en: "Headboard against the wall" },
          text:  { de: "Das Kopfende steht an einer geschlossenen Wand, nicht unter dem Fenster. Kein Zug am Kopf, kein Licht ins Gesicht am Morgen. Das entscheidet mehr über die Nacht als die Matratze.",
                   en: "The headboard sits against a solid wall, not under the window. No draught at your head, no light in your face at dawn. That decides more about the night than the mattress does." } }
      ]
    },
    {
      bei: 23.5, kapitel: 3,
      titel: { de: "Der Sitzplatz", en: "The seat" },
      punkte: [
        { x: 22, y: 62, beleg: "bild",
          marke: { de: "Sitzen", en: "Seating" },
          kopf:  { de: "Ein Sessel, kein Hocker", en: "An armchair, not a stool" },
          text:  { de: "Ein Sitzplatz mit Lehne, nicht der Schreibtischstuhl und nicht die Bettkante. In einem Zimmer ohne den verbringt man den Abend im Bett — und genau daran erinnert man sich hinterher.",
                   en: "A seat with a back, not the desk chair and not the edge of the bed. In a room without one you spend the evening in bed — and that is what you remember afterwards." } }
      ]
    },
    {
      bei: 31.5, kapitel: 4,
      titel: { de: "Der Arbeitsplatz", en: "The desk" },
      punkte: [
        { x: 33, y: 57, beleg: "bild",
          marke: { de: "Fläche", en: "Surface" },
          kopf:  { de: "Durchgehende Platte", en: "One continuous surface" },
          text:  { de: "Eine ununterbrochene Tischplatte, kein schmales Brett an der Wand. Laptop, Unterlagen und Kaffee passen nebeneinander, ohne dass etwas weichen muss.",
                   en: "An unbroken desktop, not a narrow shelf on the wall. Laptop, papers and coffee fit side by side without anything having to move." } }
      ]
    },
    {
      bei: 41.5, kapitel: 5,
      titel: { de: "Die Ablage", en: "The surfaces" },
      punkte: [
        { x: 52, y: 40, beleg: "bild",
          marke: { de: "Absicht", en: "Intent" },
          kopf:  { de: "Nichts davon ist für Sie", en: "None of this is for you" },
          text:  { de: "Diese Dinge stehen da, damit der Raum bewohnt aussieht, bevor jemand ankommt. Ein Zimmer ohne sie wirkt sauber und leer zugleich — wie ein Wartezimmer.",
                   en: "These things are here so the room looks lived in before anyone arrives. A room without them feels clean and empty at once — like a waiting room." } }
      ]
    },
    {
      bei: 48.5, kapitel: 6,
      titel: { de: "Das Fenster", en: "The window" },
      punkte: [
        { x: 62, y: 28, beleg: "haus",
          marke: { de: "Lärm", en: "Noise" },
          kopf:  { de: "Wie laut ist es nachts?", en: "How loud is it at night?" },
          text:  { de: "PLATZHALTER — Straße oder Hof, Straßenbahn, Lieferverkehr, Müllabfuhr. Die Frage, die in keinem Buchungsportal steht und jede zweite Bewertung bestimmt.",
                   en: "PLACEHOLDER — street or courtyard, trams, deliveries, bin collection. The question no booking site asks and every second review answers." } }
      ]
    }
  ],

  /* ---------------------------------------------------------------------
     NICHT ANGEZEIGT — der Fragebogen für den Hotelier beim echten Zimmer.
     Zehn Punkte, die aus der Führung geflogen sind, weil weniger besser
     aussieht. Weggeworfen ist keiner: jeder ist eine Frage, die ein Video
     nicht beantworten kann oder die einen Gast interessiert.
     --------------------------------------------------------------------- */
  fragebogen: [
    { halt: 1, marke: "Bett",        frage: "Bettmaß und Matratzenart?",             quelle: "haus" },
    { halt: 1, marke: "Arbeiten",    frage: "Steht der Arbeitsplatz fest im Raum?",  quelle: "bild" },
    { halt: 2, marke: "Nachttisch",  frage: "Steckdose in Reichweite vom Kissen?",   quelle: "haus" },
    { halt: 2, marke: "Lage",        frage: "Himmelsrichtung, was liegt gegenüber?", quelle: "haus" },
    { halt: 3, marke: "Ablage",      frage: "Freie Fläche neben dem Sitzplatz?",     quelle: "bild" },
    { halt: 4, marke: "Stuhl",       frage: "Bürostuhl oder Esszimmerstuhl?",        quelle: "bild" },
    { halt: 4, marke: "Strom",       frage: "Steckdose auf Tischhöhe?",              quelle: "haus" },
    { halt: 5, marke: "Platz",       frage: "Ablage in Hüfthöhe für den Koffer?",    quelle: "bild" },
    { halt: 6, marke: "Heizung",     frage: "Eigener Thermostat im Zimmer?",         quelle: "bild" },
    { halt: 6, marke: "Fensterbank", frage: "Fensterbank tief genug zum Abstellen?", quelle: "bild" }
  ]
};
