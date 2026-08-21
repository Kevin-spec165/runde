/* ===========================================================================
   punkte.js — die Halte und ihre Klickpunkte.

   ENTWURF. Der gesprochene Text und die Fakten werden zusammen mit Kevin
   überarbeitet. Was hier steht, zeigt den Aufbau, nicht die Endfassung.

   Jeder Punkt hat ein Feld "beleg":
     "bild"  = im Standbild zu sehen, ich habe es nachgeprüft
     "haus"  = kann kein Video beantworten, kommt vom Hotel

   Beim echten Zimmer ist die Liste der "haus"-Punkte gleichzeitig der
   Fragebogen für den Hotelier. Das ist ihr eigentlicher Zweck.

   x und y sind Prozent im Bild, gemessen an den Standbildern.
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
                   en: "Both windows sit on the same wall. Light comes from one direction and travels across the room through the day — no corner stays dark all day." } },
        { x: 70, y: 52, beleg: "bild",
          marke: { de: "Arbeiten", en: "Working" },
          kopf:  { de: "Der Platz steht schon", en: "The desk is already there" },
          text:  { de: "Schreibtisch und Stuhl stehen aufgebaut im Raum, nicht als Klapptisch in der Ecke. Wer arbeiten muss, muss nichts herrichten.",
                   en: "Desk and chair are set up in the room, not a folding table in a corner. If you need to work, nothing has to be arranged first." } },
        { x: 30, y: 47, beleg: "haus",
          marke: { de: "Bett", en: "Bed" },
          kopf:  { de: "Breite und Matratze", en: "Width and mattress" },
          text:  { de: "PLATZHALTER — beim echten Zimmer trägt der Hotelier hier Bettmaß und Matratzenart ein. Die häufigste Frage überhaupt, und keine Kamera kann sie beantworten.",
                   en: "PLACEHOLDER — for a real room the hotel fills in bed size and mattress type. The most common question of all, and no camera can answer it." } }
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
                   en: "The headboard sits against a solid wall, not under the window. No draught at your head, no light in your face at dawn. That decides more about the night than the mattress does." } },
        { x: 13, y: 72, beleg: "haus",
          marke: { de: "Nachttisch", en: "Nightstand" },
          kopf:  { de: "Steckdose in Reichweite?", en: "Socket within reach?" },
          text:  { de: "PLATZHALTER — Steckdose am Bett ja oder nein. Winzig, und trotzdem einer der häufigsten Ärgernisse in Bewertungen.",
                   en: "PLACEHOLDER — socket at the bed, yes or no. Tiny, and still one of the most frequent complaints in reviews." } },
        { x: 78, y: 30, beleg: "haus",
          marke: { de: "Lage", en: "Aspect" },
          kopf:  { de: "Wohin geht das Fenster?", en: "Where does the window face?" },
          text:  { de: "PLATZHALTER — Himmelsrichtung und was gegenüber liegt. Bestimmt Morgenlicht, Nachmittagswärme und den Lärm.",
                   en: "PLACEHOLDER — compass direction and what lies opposite. Decides morning light, afternoon warmth and noise." } }
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
                   en: "A seat with a back, not the desk chair and not the edge of the bed. In a room without one you spend the evening in bed — and that is what you remember afterwards." } },
        { x: 45, y: 55, beleg: "bild",
          marke: { de: "Ablage", en: "Surface" },
          kopf:  { de: "Etwas abstellen können", en: "Somewhere to put things" },
          text:  { de: "Eine freie Fläche in Griffhöhe neben dem Sitzplatz. Klingt nach nichts. Ist der Unterschied zwischen einem Glas auf dem Tisch und einem Glas auf dem Boden.",
                   en: "A clear surface at arm's height beside the seat. Sounds like nothing. It is the difference between a glass on a table and a glass on the floor." } }
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
                   en: "An unbroken desktop, not a narrow shelf on the wall. Laptop, papers and coffee fit side by side without anything having to move." } },
        { x: 16, y: 72, beleg: "bild",
          marke: { de: "Stuhl", en: "Chair" },
          kopf:  { de: "Rollen und Lehne", en: "Castors and a back" },
          text:  { de: "Ein Bürostuhl, kein Esszimmerstuhl. Auf dem einen sitzt man zwei Stunden, auf dem anderen zwanzig Minuten.",
                   en: "An office chair, not a dining chair. On one you sit for two hours, on the other for twenty minutes." } },
        { x: 45, y: 62, beleg: "haus",
          marke: { de: "Strom", en: "Power" },
          kopf:  { de: "Steckdose auf Tischhöhe?", en: "Socket at desk height?" },
          text:  { de: "PLATZHALTER — Steckdosen am Schreibtisch und ob man dafür unter den Tisch kriechen muss. Fragt jeder Geschäftsreisende, steht auf keiner Buchungsseite.",
                   en: "PLACEHOLDER — sockets at the desk, and whether you have to crawl under it. Every business traveller asks; no booking site says." } }
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
                   en: "These things are here so the room looks lived in before anyone arrives. A room without them feels clean and empty at once — like a waiting room." } },
        { x: 25, y: 72, beleg: "bild",
          marke: { de: "Platz", en: "Space" },
          kopf:  { de: "Wohin mit dem Koffer", en: "Where the suitcase goes" },
          text:  { de: "Eine Fläche in Hüfthöhe, die nicht der Boden und nicht das Bett ist. Wer drei Nächte bleibt, merkt den Unterschied am ersten Abend.",
                   en: "A surface at hip height that is neither the floor nor the bed. Anyone staying three nights notices on the first evening." } }
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
                   en: "PLACEHOLDER — street or courtyard, trams, deliveries, bin collection. The question no booking site asks and every second review answers." } },
        { x: 52, y: 70, beleg: "bild",
          marke: { de: "Heizung", en: "Heating" },
          kopf:  { de: "Eigener Regler", en: "Your own dial" },
          text:  { de: "Ein Heizkörper mit Thermostat unter dem Fenster, kein zentral gesteuertes Gebläse. Sie stellen die Temperatur selbst ein.",
                   en: "A radiator with its own thermostat under the window, not a centrally controlled fan. You set the temperature yourself." } },
        { x: 40, y: 48, beleg: "bild",
          marke: { de: "Fensterbank", en: "Sill" },
          kopf:  { de: "Tief genug für Pflanzen", en: "Deep enough for plants" },
          text:  { de: "Eine Fensterbank, auf der etwas stehen kann. Das ist ein Altbaufenster, kein Loch in einer Trockenbauwand — und man sieht es an der Tiefe.",
                   en: "A sill deep enough to hold something. This is a period window, not a hole in a plasterboard wall — and the depth shows it." } }
      ]
    }
  ]
};
