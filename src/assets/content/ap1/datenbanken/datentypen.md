# Datentypen in Datenbanken

## Einführung

Datentypen definieren die Art der Daten, die in einer Spalte einer Datenbanktabelle gespeichert werden können. Die korrekte Auswahl des Datentyps ist entscheidend für die Datenintegrität, die Speichereffizienz und die Performance von Datenbankabfragen. Unterschiedliche Datenbankmanagementsysteme (DBMS) können leicht variierende Bezeichnungen und genaue Spezifikationen für diese grundlegenden Datentypen haben.

## Grundlagen

Hier sind die gängigsten Datentypen, die in relationalen und oft auch in nicht-relationalen Datenbanken verwendet werden:

**1. Boolesche Werte (Boolean):**

- **Beschreibung:** Stellt einen Wahrheitswert dar, typischerweise `TRUE` (wahr) oder `FALSE` (falsch). Kann auch als `1` und `0` oder `YES` und `NO` implementiert sein.
- **Verwendung:** Zur Speicherung von Ja/Nein-Informationen, Flags oder Zuständen.

**2. Ganzzahl (Integer):**

- **Beschreibung:** Speichert ganze Zahlen (positive, negative oder null) ohne Dezimalstellen. Es gibt oft verschiedene Größen (z.B. `SMALLINT`, `MEDIUMINT`, `INT`, `BIGINT`) mit unterschiedlichen Speicherplatzanforderungen und Wertebereichen.
- **Verwendung:** Für Zähler, IDs, Mengen, Statuscodes usw.

**3. Gleitkommazahlen (Floating-Point Numbers):**

- **Beschreibung:** Speichert reelle Zahlen mit Dezimalstellen. Es gibt üblicherweise `FLOAT` (einfache Genauigkeit) und `DOUBLE` oder `REAL` (doppelte Genauigkeit) mit unterschiedlicher Präzision und Speichergröße.
- **Verwendung:** Für Messwerte, Berechnungen mit potenziellen Dezimalstellen. Vorsicht bei exakten Vergleichen aufgrund möglicher Rundungsfehler.

**4. Währung (Currency):**

- **Beschreibung:** Spezieller Datentyp zur Speicherung von Geldbeträgen. Oft als Festkommazahl implementiert, um Rundungsfehler zu vermeiden, die bei Gleitkommazahlen auftreten können. Kann auch die Währungseinheit beinhalten oder erfordert eine separate Spalte dafür.
- **Verwendung:** Für finanzielle Transaktionen, Preise usw.

**5. Datumswerte (Date):**

- **Beschreibung:** Speichert ein Datum (Jahr, Monat, Tag).
- **Verwendung:** Für Geburtstage, Ereignisdaten usw.

**6. Zeitwerte (Time):**

- **Beschreibung:** Speichert eine Uhrzeit (Stunde, Minute, Sekunde, ggf. Millisekunden).
- **Verwendung:** Für Zeitpunkte von Ereignissen.

**7. Datum- und Zeitwerte (Timestamp oder DateTime):**

- **Beschreibung:** Kombiniert Datum und Uhrzeit in einem Wert.
- **Verwendung:** Für die genaue Aufzeichnung von Ereigniszeitpunkten.

**8. Texte fester Länge (CHAR):**

- **Beschreibung:** Speichert eine Zeichenkette mit einer festen, vordefinierten Länge. Wenn der tatsächliche Text kürzer ist, wird er mit Leerzeichen aufgefüllt.
- **Verwendung:** Für Daten mit immer gleicher Länge, z.B. ISO-Ländercodes.

**9. Texte variabler Länge (VARCHAR):**

- **Beschreibung:** Speichert eine Zeichenkette mit einer maximalen, vordefinierten Länge. Der tatsächlich benötigte Speicherplatz wird verwendet.
- **Verwendung:** Für Namen, Adressen, Beschreibungen usw., bei denen die Länge variieren kann.

**10. Binary Large Object (BLOB):**

- **Beschreibung:** Speichert binäre Daten ohne spezifische Struktur. Kann Bilder, Audiodateien, Videos oder andere unstrukturierte Daten enthalten.
- **Verwendung:** Für die Speicherung von Multimedia-Dateien oder anderen Binärdaten direkt in der Datenbank.

**11. Geokoordinaten (Geographic Coordinates):**

- **Beschreibung:** Speichert geografische Koordinaten, typischerweise als Breiten- und Längengrad. Kann als zwei separate numerische Spalten (Gleitkommazahlen) oder als spezieller Geodaten-Typ in einigen DBMS implementiert sein, der auch räumliche Abfragen ermöglicht.
- **Verwendung:** Für die Lokalisierung von Orten, die Verfolgung von Positionen usw.

> **Hinweis:** Die Wahl des richtigen Datentyps beeinflusst nicht nur den Speicherplatzbedarf und die Performance, sondern auch die Möglichkeiten zur Datenvalidierung und -manipulation innerhalb der Datenbank.

## Beispiel oder Anwendungsfall

In einer Datenbank für eine Bibliothek könnten folgende Datentypen verwendet werden:

- `BuchID`: `INT` (Primärschlüssel)
- `Titel`: `VARCHAR(255)`
- `Autor`: `VARCHAR(100)`
- `Erscheinungsdatum`: `DATE`
- `ISBN`: `CHAR(13)`
- `IstVerfügbar`: `BOOLEAN`
- `CoverBild`: `BLOB` (optional)
- `Bewertung`: `FLOAT` (durchschnittliche Bewertung)

## Weiterführende Links & Quellen

  - [Wikipedia: Datentyp](https://de.wikipedia.org/wiki/Datentyp) (Abschnitt Datenbanken)
  - [MySQL Datentypen (offizielle MySQL-Dokumentation)](https://dev.mysql.com/doc/refman/8.0/en/data-types.html) (Englischsprachig, spezifisch, aber gibt einen guten Überblick)
  - [PostgreSQL Datentypen (offizielle PostgreSQL-Dokumentation)](https://www.postgresql.org/docs/current/datatype.html) (Englischsprachig, spezifisch, aber gibt einen guten Überblick)
  - [SQL Server Datentypen (offizielle Microsoft-Dokumentation)](https://learn.microsoft.com/de-de/sql/t-sql/data-types-transact-sql?view=sql-server-ver16)
  - [MongoDB Datentypen (offizielle MongoDB-Dokumentation)](https://www.mongodb.com/docs/manual/reference/bson-types/) (Englischsprachig, für eine NoSQL-Datenbank)

-----

> **Fehler gefunden?:** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
