# Entwurf der Bildschirmausgabemaske (Software-Ergonomie, Barrierefreiheit)

## Einführung

Der Entwurf von Bildschirmausgabemasken ist ein entscheidender Aspekt der Softwareentwicklung, der maßgeblich die Benutzerfreundlichkeit und Zugänglichkeit einer Anwendung bestimmt. Dabei spielen zwei zentrale Konzepte eine wichtige Rolle: Software-Ergonomie und Barrierefreiheit. Ein gut gestalteter Bildschirm ermöglicht es Nutzern, Informationen effizient zu erfassen und die Anwendung effektiv zu nutzen, unabhängig von ihren individuellen Fähigkeiten und Einschränkungen.

## Grundlagen

**1. Software-Ergonomie:**

Software-Ergonomie befasst sich mit der Gestaltung von Software, um sie an die physischen und kognitiven Fähigkeiten und Bedürfnisse der Nutzer anzupassen. Ziel ist es, die Effektivität, Effizienz und Zufriedenheit bei der Nutzung zu maximieren sowie Belastungen und Fehler zu minimieren. Wichtige Prinzipien der Software-Ergonomie für Bildschirmausgabemasken sind:

- **Aufgabenangemessenheit:** Die Gestaltung sollte die Arbeitsabläufe und Aufgaben der Nutzer optimal unterstützen. Relevante Informationen sollten klar und im Kontext der Aufgabe präsentiert werden.
- **Selbstbeschreibungsfähigkeit:** Die Bedeutung und Funktion der Elemente auf dem Bildschirm sollten intuitiv erkennbar sein (z.B. durch klare Beschriftungen, Icons).
- **Steuerbarkeit:** Nutzer sollten die Interaktion mit der Software jederzeit kontrollieren und den Ablauf nach ihren Bedürfnissen steuern können.
- **Erwartungskonformität:** Die Gestaltung sollte bekannten Konventionen und Standards entsprechen, um die Lernkurve zu verkürzen und Verwirrung zu vermeiden.
- **Fehlertoleranz:** Das System sollte Fehler des Nutzers erkennen und unterstützen, diese zu korrigieren oder zu vermeiden (z.B. durch Validierung von Eingaben, Undo-Funktionen).
- **Individualisierbarkeit:** Nutzer sollten die Möglichkeit haben, die Oberfläche an ihre persönlichen Präferenzen und Bedürfnisse anzupassen (z.B. Schriftgröße, Farbschema).
- **Lernförderlichkeit:** Die Gestaltung sollte den Nutzern helfen, die Software schrittweise zu erlernen und ihre Fähigkeiten zu erweitern (z.B. durch Tooltips, Hilfetexte).

**2. Barrierefreiheit (Accessibility):**

Barrierefreiheit im Softwarebereich bedeutet, dass die Anwendung von Menschen mit Behinderungen ohne Einschränkungen genutzt werden kann. Dies umfasst sowohl visuelle, auditive, motorische als auch kognitive Einschränkungen. Richtlinien und Standards wie die Web Content Accessibility Guidelines (WCAG) bieten konkrete Empfehlungen für die Gestaltung barrierefreier Oberflächen:

- **Wahrnehmbarkeit:** Informationen und Oberflächenkomponenten müssen für Nutzer mit unterschiedlichen sensorischen Fähigkeiten wahrnehmbar sein (z.B. Textalternativen für Bilder, Untertitel für Videos, auditive Benachrichtigungen).
- **Bedienbarkeit:** Oberflächenkomponenten und Navigation müssen bedienbar sein (z.B. Tastaturnavigation, ausreichend Zeit für Interaktionen, Vermeidung von flackernden Inhalten).
- **Verständlichkeit:** Informationen und die Bedienung der Benutzeroberfläche müssen verständlich sein (z.B. klare und einfache Sprache, konsistente Navigation, Fehlerhinweise).
- **Robustheit:** Inhalte müssen so gestaltet sein, dass sie von einer Vielzahl von Benutzeragenten (einschließlich assistierender Technologien) zuverlässig interpretiert werden können.

> **Hinweis:** Die Berücksichtigung von Software-Ergonomie und Barrierefreiheit ist nicht nur eine Frage der Nutzerfreundlichkeit, sondern in vielen Fällen auch eine rechtliche Anforderung.

## Entwurf von Bildschirmausgabemasken unter ergonomischen und barrierefreien Gesichtspunkten:

- **Klare Struktur und Layout:** Informationen logisch gruppieren, ausreichend Weißraum verwenden, visuelle Hierarchie schaffen.
- **Lesbarkeit:** Gut lesbare Schriftarten und -größen wählen, ausreichenden Farbkontrast sicherstellen.
- **Konsistenz:** Einheitliche Gestaltungselemente und Interaktionsmuster verwenden.
- **Fokus auf wesentliche Informationen:** Überflüssige Elemente vermeiden, relevante Daten hervorheben.
- **Alternative Textformate:** Für nicht-textuelle Inhalte (Bilder, Grafiken) Textalternativen bereitstellen.
- **Tastaturnavigation:** Sicherstellen, dass alle Funktionen ohne Maus bedienbar sind.
- **Anpassbarkeit:** Nutzern ermöglichen, Schriftgrößen, Farben oder Kontraste anzupassen.
- **Verständliche Sprache:** Klare und prägnante Texte verwenden, Fachbegriffe erläutern.
- **Robuste Programmierung:** Sicherstellen, dass die Ausgabe mit assistierenden Technologien kompatibel ist.

## Beispiel oder Anwendungsfall

Beim Entwurf einer Bildschirmausgabemaske für die Suchergebnisse in einer Datenbank:

- **Ergonomisch:** Die Suchergebnisse werden übersichtlich in einer Tabelle dargestellt, relevante Filteroptionen sind gut sichtbar platziert, die Sortierung der Ergebnisse ist intuitiv bedienbar.
- **Barrierefrei:** Die Tabelle hat semantisch korrekte HTML-Struktur, Textalternativen für Icons sind vorhanden, die Navigation ist per Tastatur möglich, der Farbkontrast zwischen Text und Hintergrund ist ausreichend. Nutzer können die Schriftgröße anpassen.

## Weiterführende Links & Quellen

  - [Wikipedia: Softwareergonomie](https://de.wikipedia.org/wiki/Softwareergonomie)
  - [DIN EN ISO 9241 (Normen zur Softwareergonomie)](https://www.iso.org/standard/52075.html) (Englischsprachige Seite der ISO, Informationen zur Norm).
  - [Wikipedia: Barrierefreiheit (Informationstechnik)](https://de.wikipedia.org/wiki/Barrierefreiheit_(Informationstechnik))
  - [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) (Offizielle Richtlinien des W3C).
  - [BITV 2.0 (Barrierefreie-Informationstechnik-Verordnung 2.0, Deutschland)](https://www.gesetze-im-internet.de/bitv_2_0/)
  - [Einführung in die Barrierefreiheit von Webanwendungen (z.B. von Webentwicklungs-Plattformen)](https://developers.google.com/web/fundamentals/accessibility/basics) (Englischsprachige Ressource von Google).

-----

> **Fehler gefunden?:** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
