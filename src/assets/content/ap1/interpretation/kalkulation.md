# Tabellenkalkulation

## Einführung

Tabellenkalkulationsprogramme sind mächtige digitale Werkzeuge zur Erfassung, Organisation, Analyse und Visualisierung von Daten. Sie ermöglichen es, strukturierte Daten in Tabellenform zu verwalten, Berechnungen durchzuführen, Trends zu erkennen und Ergebnisse grafisch darzustellen. Im beruflichen Alltag, insbesondere bei der Interpretation und Präsentation von Daten und Sachverhalten, sind sie unverzichtbar. Die situationsgerechte Nutzung unter Berücksichtigung betrieblicher Vorgaben ist dabei entscheidend.

## Grundlagen

Tabellenkalkulationsprogramme basieren auf einem Tabellenmodell, das aus Zeilen und Spalten besteht, an deren Schnittpunkten sich Zellen befinden. Jede Zelle kann verschiedene Arten von Daten enthalten:

- **Werte:** Numerische Daten, Text oder Datumsangaben.
- **Formeln:** Anweisungen zur Durchführung von Berechnungen basierend auf den Werten in anderen Zellen.
- **Funktionen:** Vordefinierte Formeln für komplexe Berechnungen (z.B. Summe, Durchschnitt, statistische Analysen, logische Verknüpfungen).

**Kernfunktionen von Tabellenkalkulationsprogrammen:**

- **Dateneingabe und -verwaltung:** Effiziente Erfassung und Organisation großer Datenmengen.
- **Formel- und Funktionsverarbeitung:** Durchführung komplexer Berechnungen und Analysen.
- **Datenfilterung und -sortierung:** Gezieltes Anzeigen und Ordnen von Daten nach bestimmten Kriterien.
- **Diagrammerstellung:** Visualisierung von Daten in verschiedenen Diagrammtypen (siehe Thema "Grafische Darstellung").
- **Datenanalyse-Tools:** Integrierte Funktionen für statistische Analysen, Trendlinien, Pivot-Tabellen und Szenario-Management.
- **Datenimport und -export:** Austausch von Daten mit anderen Anwendungen und Dateiformaten (z.B. CSV, TXT, Datenbanken).
- **Automatisierung durch Makros:** Aufzeichnung und Ausführung von wiederkehrenden Aufgaben.
- **Zusammenarbeit:** Gemeinsame Bearbeitung von Tabellen in Echtzeit (z.B. in Cloud-basierten Lösungen).

**Situationsgerechte Nutzung und betriebliche Vorgaben:**

- **Auswahl des geeigneten Programms:** Unternehmen haben oft Standardsoftware vorgegeben (z.B. Microsoft Excel, Google Sheets, LibreOffice Calc). Die Nutzung sollte innerhalb dieser Vorgaben erfolgen.
- **Datenintegrität und -sicherheit:** Einhaltung betrieblicher Richtlinien zum Schutz sensibler Daten und zur Vermeidung von Datenverlust.
- **Strukturierung und Formatierung:** Einheitliche und nachvollziehbare Gestaltung von Tabellen zur Verbesserung der Lesbarkeit und zur Einhaltung interner Standards.
- **Formel- und Funktionsnutzung:** Verwendung korrekter Formeln und Funktionen sowie deren Dokumentation zur Sicherstellung der Nachvollziehbarkeit von Berechnungen.
- **Diagrammerstellung gemäß Richtlinien:** Verwendung von Diagrammtypen und -formatierungen, die den betrieblichen Vorgaben für Präsentationen und Berichte entsprechen (z.B. Corporate Design).
- **Zusammenarbeit und Freigabe:** Nutzung der vorgesehenen Freigabemechanismen und Kollaborationstools des Unternehmens.

> **Hinweis:** Die effektive Nutzung von Tabellenkalkulationsprogrammen erfordert sowohl technisches Know-how als auch ein Verständnis für die zu analysierenden Daten und die betrieblichen Rahmenbedingungen.

## Beispiel oder Anwendungsfall

Ein Projektmanager verwendet eine Tabellenkalkulation, um den Fortschritt eines Softwareentwicklungsprojekts zu verfolgen.

1.  **Dateneingabe:** Er erfasst Aufgaben, Verantwortlichkeiten, geplante und tatsächliche Start- und Endtermine sowie den Fertigstellungsgrad in einer Tabelle.
2.  **Formeln:** Er verwendet Formeln, um die Projektdauer, die verbleibende Zeit und den prozentualen Fortschritt automatisch zu berechnen.
3.  **Filter und Sortierung:** Er filtert die Daten, um sich Aufgaben bestimmter Mitarbeiter oder Phasen anzeigen zu lassen, und sortiert die Aufgaben nach Fälligkeit.
4.  **Diagramme:** Er erstellt ein Balkendiagramm, um den Fortschritt der einzelnen Phasen visuell darzustellen, und ein Liniendiagramm, um die Einhaltung des Zeitplans zu überwachen. Die Diagramme werden gemäß der internen Berichtsvorlagen formatiert.
5.  **Datenanalyse:** Er nutzt Pivot-Tabellen, um den Ressourcenverbrauch pro Phase zu analysieren und Engpässe zu identifizieren.
6.  **Berichterstellung:** Er exportiert die relevanten Daten und Diagramme in eine Präsentationssoftware, um den Projektstatus dem Management zu präsentieren. Die Weitergabe der Datei erfolgt über den vom Unternehmen freigegebenen Cloud-Speicher.

# Excel Funktionen Cheat Sheet

---

### Grundlegende Mathematische Funktionen

* `=SUMME(Bereich)`: Addiert alle Zahlen in einem angegebenen Bereich.
    * *Beispiel:* `=SUMME(A1:A10)` addiert die Werte in den Zellen A1 bis A10.
* `=MITTELWERT(Bereich)`: Berechnet den Durchschnitt (arithmetisches Mittel) der Zahlen in einem Bereich.
    * *Beispiel:* `=MITTELWERT(B1:B20)` gibt den Durchschnitt der Werte in B1 bis B20 zurück.
* `=MAX(Bereich)`: Gibt den größten Wert in einem Zahlenbereich zurück.
    * *Beispiel:* `=MAX(C1:C100)` findet den höchsten Wert in C1 bis C100.
* `=MIN(Bereich)`: Gibt den kleinsten Wert in einem Zahlenbereich zurück.
    * *Beispiel:* `=MIN(D1:D50)` findet den niedrigsten Wert in D1 bis D50.
* `=ANZAHL(Bereich)`: Zählt die Anzahl der Zellen, die Zahlen enthalten, sowie Zahlen in der Argumentliste.
    * *Beispiel:* `=ANZAHL(E:E)` zählt, wie viele Zellen in Spalte E Zahlen enthalten.
* `=ANZAHL2(Bereich)`: Zählt die Anzahl der nicht-leeren Zellen in einem Bereich.
    * *Beispiel:* `=ANZAHL2(F:F)` zählt alle Zellen in Spalte F, die nicht leer sind (egal ob Zahl, Text, Datum).
* `=RUNDEN(Zahl; Anzahl_Stellen)`: Rundet eine Zahl auf eine angegebene Anzahl von Dezimalstellen.
    * *Beispiel:* `=RUNDEN(3.14159; 2)` gibt `3.14` zurück.

---

### Logische Funktionen

* `=WENN(Prüfung; Dann_Wert; Sonst_Wert)`: Prüft eine Bedingung und gibt je nach Ergebnis einen bestimmten Wert zurück.
    * *Beispiel:* `=WENN(A1>10;"Groß";"Klein")` gibt "Groß" zurück, wenn der Wert in A1 größer als 10 ist, ansonsten "Klein".
* `=UND(Logik1; Logik2; ...)`: Prüft, ob alle Bedingungen WAHR sind. Gibt WAHR zurück, wenn alle Argumente WAHR sind, ansonsten FALSCH.
    * *Beispiel:* `=UND(A1>0; B1<10)` gibt WAHR zurück, wenn A1 größer als 0 UND B1 kleiner als 10 ist.
* `=ODER(Logik1; Logik2; ...)`: Prüft, ob mindestens eine Bedingung WAHR ist. Gibt WAHR zurück, wenn mindestens ein Argument WAHR ist, ansonsten FALSCH.
    * *Beispiel:* `=ODER(C1="Ja"; D1="Nein")` gibt WAHR zurück, wenn C1 "Ja" ODER D1 "Nein" ist.
* `=NICHT(Logikwert)`: Kehrt den logischen Wert um.
    * *Beispiel:* `=NICHT(A1=5)` gibt WAHR zurück, wenn A1 *nicht* 5 ist.

---

### Such- und Verweisfunktionen

* `=SVERWEIS(Suchkriterium; Matrix; Spaltenindex; [Bereich_Verweis])`: Sucht einen Wert in der ersten Spalte eines Tabellenbereichs und gibt einen Wert aus einer anderen Spalte in derselben Zeile zurück. `BEREICH_VERWEIS` ist optional (`WAHR` für ungefähre, `FALSCH` für genaue Übereinstimmung, standardmäßig `WAHR`). **Verwenden Sie fast immer `FALSCH` für genaue Treffer.**
    * *Beispiel:* `=SVERWEIS("Apfel"; A1:B10; 2; FALSCH)` sucht "Apfel" in Spalte A und gibt den zugehörigen Wert aus Spalte B zurück.
* `=XVERWEIS(Suchkriterium; Suchmatrix; Rückgabematrix; [wenn_nicht_gefunden]; [Vergleichsmodus]; [Suchmodus])`: Eine modernere und flexiblere Alternative zu SVERWEIS und WVERWEIS. Kann in beide Richtungen suchen und gibt Fehler besser ab.
    * *Beispiel:* `=XVERWEIS("ProduktX"; A:A; B:B; "Nicht gefunden")` sucht "ProduktX" in Spalte A und gibt den Wert aus der entsprechenden Zeile in Spalte B zurück.
* `=INDEX(Matrix; Zeilen_Nr; [Spalten_Nr])`: Gibt den Wert einer Zelle an der Schnittstelle einer bestimmten Zeile und Spalte in einem angegebenen Bereich zurück.
    * *Beispiel:* `=INDEX(A1:C10; 3; 2)` gibt den Wert der Zelle in der 3. Zeile und 2. Spalte des Bereichs A1:C10 zurück (also B3).
* `=VERGLEICH(Suchkriterium; Suchmatrix; [Vergleichstyp])`: Gibt die relative Position eines Elements in einem Bereich zurück, das mit einem angegebenen Wert übereinstimmt. `VERGLEICHSTYP` kann 0 (genaue Übereinstimmung), 1 (kleiner oder gleich) oder -1 (größer oder gleich) sein.
    * *Beispiel:* `=VERGLEICH("Produkt Y"; D1:D100; 0)` gibt die Zeilennummer zurück, in der "Produkt Y" zuerst in D1:D100 gefunden wird.

---

### Textfunktionen

* `=VERKETTEN(Text1; [Text2]; ...)` oder `=TEXT1&TEXT2`: Verbindet mehrere Textzeichenfolgen zu einer.
    * *Beispiel:* `=VERKETTEN("Hallo "; "Welt")` oder `="Hallo "&"Welt"` gibt "Hallo Welt" zurück.
* `=LINKS(Text; [Anzahl_Zeichen])`: Gibt die ersten Zeichen einer Textzeichenfolge zurück.
    * *Beispiel:* `=LINKS("Excel"; 2)` gibt "Ex" zurück.
* `=RECHTS(Text; [Anzahl_Zeichen])`: Gibt die letzten Zeichen einer Textzeichenfolge zurück.
    * *Beispiel:* `=RECHTS("Excel"; 3)` gibt "cel" zurück.
* `=TEIL(Text; Ausgangsposition; Anzahl_Zeichen)`: Gibt eine bestimmte Anzahl von Zeichen aus einer Textzeichenfolge zurück, beginnend an der angegebenen Position.
    * *Beispiel:* `=TEIL("Tabelle"; 2; 3)` gibt "abe" zurück.
* `=LÄNGE(Text)`: Gibt die Anzahl der Zeichen in einer Textzeichenfolge zurück.
    * *Beispiel:* `=LÄNGE("Formel")` gibt `6` zurück.
* `=GROSS(Text)`: Konvertiert Text in Großbuchstaben.
    * *Beispiel:* `=GROSS("hallo")` gibt "HALLO" zurück.
* `=KLEIN(Text)`: Konvertiert Text in Kleinbuchstaben.
    * *Beispiel:* `=KLEIN("HELLO")` gibt "hello" zurück.
* `=GLÄTTEN(Text)`: Entfernt alle Leerzeichen aus Text außer einzelnen Leerzeichen zwischen Wörtern.
    * *Beispiel:* `=GLÄTTEN("  Extra   Leerzeichen  ")` gibt "Extra Leerzeichen" zurück.

---

### Datums- und Zeitfunktionen

* `=HEUTE()`: Gibt das aktuelle Datum zurück. (Wird bei jeder Neuberechnung aktualisiert)
* `=JETZT()`: Gibt das aktuelle Datum und die Uhrzeit zurück. (Wird bei jeder Neuberechnung aktualisiert)
* `=JAHR(Datum)`: Gibt das Jahr eines Datums zurück (als vierstellige Zahl).
    * *Beispiel:* `=JAHR("22.05.2025")` gibt `2025` zurück.
* `=MONAT(Datum)`: Gibt den Monat eines Datums zurück (als Zahl von 1 bis 12).
    * *Beispiel:* `=MONAT("22.05.2025")` gibt `5` zurück.
* `=TAG(Datum)`: Gibt den Tag eines Datums zurück (als Zahl von 1 bis 31).
    * *Beispiel:* `=TAG("22.05.2025")` gibt `22` zurück.
* `=DATUM(Jahr; Monat; Tag)`: Erstellt ein Datum aus einzelnen Jahr-, Monat- und Tagswerten.
    * *Beispiel:* `=DATUM(2025; 5; 22)` gibt `22.05.2025` zurück.
* `=STUNDE(Zeit)`: Gibt die Stunde einer Zeit zurück (als Zahl von 0 bis 23).
* `=MINUTE(Zeit)`: Gibt die Minute einer Zeit zurück (als Zahl von 0 bis 59).
* `=SEKUNDE(Zeit)`: Gibt die Sekunde einer Zeit zurück (als Zahl von 0 bis 59).
* `=ARBEITSTAG(Ausgangsdatum; Tage; [Feiertage])`: Gibt das Datum zurück, das eine bestimmte Anzahl von Arbeits- oder Wochentagen vor oder nach dem Ausgangsdatum liegt.
    * *Beispiel:* `=ARBEITSTAG(HEUTE(); 5)` gibt das Datum 5 Arbeitstage nach heute zurück.

---

### Statistische Funktionen

* `=SUMMEWENN(Bereich; Kriterium; [Summe_Bereich])`: Summiert die Zellen, die ein angegebenes Kriterium erfüllen.
    * *Beispiel:* `=SUMMEWENN(A1:A10;"<100";B1:B10)` summiert die Werte in B1:B10, wo der entsprechende Wert in A1:A10 kleiner als 100 ist.
* `=MITTELWERTWENN(Bereich; Kriterium; [Mittelwert_Bereich])`: Berechnet den Durchschnitt der Zellen, die ein bestimmtes Kriterium erfüllen.
* `=ZÄHLENWENN(Bereich; Kriterium)`: Zählt die Zellen innerhalb eines Bereichs, die ein bestimmtes Kriterium erfüllen.
    * *Beispiel:* `=ZÄHLENWENN(C1:C50;"Bestellt")` zählt, wie oft "Bestellt" in C1:C50 vorkommt.
* `=SUMMEWENNS(Summe_Bereich; Kriterium_Bereich1; Kriterium1; [Kriterium_Bereich2; Kriterium2; ...])`: Summiert Zellen basierend auf mehreren Kriterien.
* `=ZÄHLENWENNS(Kriterium_Bereich1; Kriterium1; [Kriterium_Bereich2; Kriterium2; ...])`: Zählt Zellen basierend auf mehreren Kriterien.
* `=KLEINSTE(Array; k)`: Gibt den k-kleinsten Wert in einem Datensatz zurück.
* `=GRÖSSTE(Array; k)`: Gibt den k-größten Wert in einem Datensatz zurück.

---

### Finanzfunktionen (Beispiele)

* `=ZW(Zins; ZZR; RMZ; [BW]; [Typ])`: Berechnet den zukünftigen Wert einer Investition basierend auf regelmäßigen, konstanten Zahlungen und einem konstanten Zinssatz.
* `=BW(Zins; ZZR; RMZ; [ZW]; [Typ])`: Berechnet den Barwert einer Investition (oder eines Darlehens).
* `=RMZ(Zins; ZZR; BW; [ZW]; [Typ])`: Berechnet die Zahlung für eine Investition oder ein Darlehen basierend auf regelmäßigen, konstanten Zahlungen und einem konstanten Zinssatz.

---

### Fehlerbehandlung

* `=WENNFEHLER(Wert; Wert_wenn_Fehler)`: Gibt einen bestimmten Wert zurück, wenn eine Formel einen Fehler ergibt; andernfalls wird das Ergebnis der Formel zurückgegeben.
    * *Beispiel:* `=WENNFEHLER(A1/B1; "Fehler bei Division")` gibt "Fehler bei Division" zurück, wenn A1/B1 einen Fehler wie `#DIV/0!` erzeugt.

## Weiterführende Links & Quellen

- [Wikipedia: Tabellenkalkulation](https://de.wikipedia.org/wiki/Tabellenkalkulation)
- [Tutorials für Microsoft Excel (offizielle Microsoft-Seite)](https://support.microsoft.com/de-de/excel)
- [1000 Excel Formulas (Englisch)](https://exceljet.net/formulas)

---

> **Fehler gefunden?:** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
