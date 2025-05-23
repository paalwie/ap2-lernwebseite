# Software-Tests: Dynamische und statische Testverfahren

## Einführung

Software-Tests sind ein integraler Bestandteil der Qualitätssicherung in der Softwareentwicklung. Sie dienen dazu, Fehler (Bugs) in der Software zu finden, die Funktionalität zu überprüfen und sicherzustellen, dass die Software die Anforderungen erfüllt und die erwartete Qualität aufweist. Software-Tests lassen sich grob in dynamische und statische Testverfahren unterteilen.

## Grundlagen

**Qualitätslenkung in der Softwareentwicklung:**

Die Qualitätslenkung umfasst alle geplanten und systematischen Maßnahmen, die innerhalb des Qualitätssystems durchgeführt werden, um sicherzustellen, dass die Software die Anforderungen erfüllt. Software-Tests sind eine der wichtigsten Methoden zur Überprüfung der Qualität.

**Ziele von Software-Tests:**

- Fehler finden, bevor die Software an Endbenutzer ausgeliefert wird.
- Sicherstellen, dass die Software die spezifizierten Anforderungen erfüllt.
- Validieren der Funktionalität und der nicht-funktionalen Aspekte (z.B. Performance, Sicherheit).
- Erhöhen des Vertrauens in die Zuverlässigkeit und Stabilität der Software.

## Dynamische Testverfahren

Dynamische Testverfahren erfordern die Ausführung der Software, um ihr Verhalten zur Laufzeit zu beobachten und zu überprüfen.

**1. Black-Box-Testing (Funktionsorientierter Test):**

- **Beschreibung:** Testen der Software aus der Perspektive des Endbenutzers, ohne Kenntnisse der internen Struktur oder des Quellcodes. Die Tests basieren auf den Anforderungen und der Spezifikation der Software.
- **Fokus:** Überprüfung der Funktionalität, der Eingaben und Ausgaben.
- **Beispiele:**
    - **Äquivalenzklassenanalyse:** Aufteilung der Eingabedaten in Gruppen (Äquivalenzklassen), bei denen das System voraussichtlich ein ähnliches Verhalten zeigt. Es wird ein Testfall pro Klasse ausgewählt.
    - **Grenzwertanalyse:** Testen an den Grenzen der Eingabebereiche (z.B. minimaler, maximaler, ungültiger Wert).
    - **Entscheidungstabellentest:** Testen verschiedener Kombinationen von Bedingungen und den resultierenden Aktionen.
    - **Anwendungsfalltest (Use Case Testing):** Testen der Software anhand der definierten Anwendungsfälle.
    - **Extremwertetest (Boundary Value Testing):** Testen an den äußersten Rändern der gültigen und ungültigen Eingabebereiche, um Robustheitsprobleme aufzudecken.

**2. White-Box-Testing (Strukturorientierter Test):**

- **Beschreibung:** Testen der Software unter Kenntnis der internen Struktur und des Quellcodes. Ziel ist es, die Abdeckung des Codes durch die Testfälle zu überprüfen.
- **Fokus:** Überprüfung der internen Logik, der Kontrollflüsse und der Datenstrukturen.
- **Beispiele:**
    - **Anweisungsüberdeckung (Statement Coverage):** Sicherstellen, dass jede Anweisung im Code mindestens einmal ausgeführt wird.
    - **Zweigüberdeckung (Branch Coverage):** Sicherstellen, dass jede mögliche Verzweigung (z.B. in `if`- oder `switch`-Anweisungen) mindestens einmal durchlaufen wird.
    - **Pfadüberdeckung (Path Coverage):** Sicherstellen, dass jeder mögliche Ausführungspfad durch den Code mindestens einmal getestet wird (oft sehr aufwendig).

**3. Last- und Performancetest:**

- **Beschreibung:** Testen der Software unter simulierter oder tatsächlicher Last (Anzahl gleichzeitiger Benutzer, Datenvolumen), um die Stabilität, Reaktionsfähigkeit und den Ressourcenverbrauch zu überprüfen.
- **Fokus:** Nicht-funktionale Anforderungen wie Geschwindigkeit, Skalierbarkeit und Auslastung.
- **Beispiele:**
    - **Lasttest (Load Testing):** Simulieren einer erwarteten Benutzerlast über einen bestimmten Zeitraum.
    - **Stresstest (Stress Testing):** Testen der Software über ihre Belastungsgrenzen hinaus, um Schwachstellen und das Verhalten bei Auslastungsspitzen zu identifizieren.
    - **Performancetest (Performance Testing):** Messen der Reaktionszeiten, des Durchsatzes und der Ressourcennutzung unter verschiedenen Lastbedingungen.
    - **Ausdauertest (Endurance Testing):** Testen der Software über einen längeren Zeitraum, um Speicherlecks oder andere Stabilitätsprobleme aufzudecken.

**4. Testdaten:**

- **Beschreibung:** Spezifische Eingabedaten, die für die Durchführung von Software-Tests erstellt und verwendet werden. Gut ausgewählte Testdaten decken verschiedene Szenarien ab, einschließlich gültiger, ungültiger, Grenz- und Extremwerte.
- **Bedeutung:** Die Qualität der Testdaten hat einen direkten Einfluss auf die Effektivität der Tests. Sie sollten so gestaltet sein, dass sie die Wahrscheinlichkeit, Fehler zu finden, maximieren.

## Statische Testverfahren

Statische Testverfahren beinhalten die Analyse der Software (z.B. Quellcode, Design-Dokumente) ohne die Ausführung der Software.

**1. Review (Begutachtung):**

- **Beschreibung:** Eine systematische Untersuchung von Arbeitsergebnissen (z.B. Anforderungen, Design, Code, Testpläne) durch ein oder mehrere Personen, um Fehler, Unklarheiten oder Verbesserungsmöglichkeiten zu finden.
- **Formen:**
    - **Informelle Reviews:** Ad-hoc-Überprüfungen.
    - **Technische Reviews:** Expertenbasierte Überprüfung der technischen Aspekte.
    - **Walkthroughs:** Der Autor führt die Beteiligten durch das Arbeitsergebnis.
    - **Inspektionen:** Formeller Prozess mit definierten Rollen und Schritten zur systematischen Fehlersuche.

**2. Statische Codeanalyse:**

- **Beschreibung:** Der Quellcode wird automatisch durch Software-Tools analysiert, um potenzielle Fehler, Sicherheitslücken, Verstöße gegen Programmierrichtlinien oder ineffizienten Code zu identifizieren.
- **Vorteile:** Kann Fehler frühzeitig im Entwicklungszyklus finden, bevor sie zu Laufzeitproblemen führen.
- **Beispiele:** Tools zur Erkennung von Speicherlecks, ungenutzten Variablen, potenziellen NullPointerExceptionen, Verletzungen von Coding Standards.

> **Hinweis:** Dynamische und statische Testverfahren ergänzen sich und sollten idealerweise in Kombination eingesetzt werden, um eine umfassende Qualitätssicherung zu gewährleisten. Statische Tests können Fehler frühzeitig erkennen, während dynamische Tests das Verhalten der laufenden Software überprüfen.

## Beispiel oder Anwendungsfall

Bei der Entwicklung einer Webanwendung für einen Online-Shop:

- **Black-Box-Tests:** Testen der Funktionalität des Warenkorbs (Hinzufügen, Entfernen von Artikeln), des Bestellprozesses (Eingabe von Adressdaten, Auswahl der Zahlungsmethode), der Suchfunktion (Eingabe verschiedener Suchbegriffe). Extremwertetests könnten das Hinzufügen einer sehr großen Anzahl von Artikeln in den Warenkorb umfassen.
- **White-Box-Tests:** Überprüfen der Logik in kritischen Codeabschnitten (z.B. Berechnung des Gesamtpreises, Aktualisierung des Lagerbestands) durch Anweisungs- und Zweigüberdeckung.
- **Last- und Performancetests:** Simulieren von Hunderten oder Tausenden gleichzeitiger Benutzer, die auf die Website zugreifen, um die Reaktionszeiten und die Stabilität des Servers zu testen.
- **Review:** Regelmäßige Code-Reviews durch andere Entwickler, um Fehler und Verbesserungsmöglichkeiten zu identifizieren.
- **Statische Codeanalyse:** Einsatz von Tools, um den Code auf potenzielle Sicherheitslücken (z.B. SQL-Injection), Coding-Standard-Verstöße und ineffizienten Code zu überprüfen.

## Weiterführende Links & Quellen

  - [Wikipedia: Softwaretest](https://de.wikipedia.org/wiki/Softwaretest)
  - [Wikipedia: Statisches Software-Testverfahren](https://de.wikipedia.org/wiki/Statisches_Software-Testverfahren)
  - [Wikipedia: Dynamische Software-Testverfahren](https://de.wikipedia.org/wiki/Dynamisches_Software-Testverfahren)
  - [Leitfaden zur Softwaretestverfahren](https://de.parasoft.com/blog/software-testing-methodologies-guide-a-high-level-overview/)

-----

> **Fehler gefunden?:** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
