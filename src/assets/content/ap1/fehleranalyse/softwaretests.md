
# Software-Tests, dynamische und statische Testverfahren

## Einführung

Software-Tests sind ein integraler Bestandteil des Softwareentwicklungsprozesses, um die Qualität, Zuverlässigkeit und Funktionalität einer Software sicherzustellen. Durch systematische Überprüfung und Ausführung von Softwarekomponenten oder des gesamten Systems werden Fehler (Bugs) identifiziert, bevor die Software in den Produktiveinsatz gelangt. Es gibt verschiedene Testverfahren, die sich in dynamische und statische Methoden unterteilen lassen und unterschiedliche Schwerpunkte setzen.

## Grundlagen

Software-Tests lassen sich grundlegend in zwei Kategorien einteilen:

**1. Dynamische Testverfahren:**

Bei dynamischen Tests wird die Software ausgeführt, um ihr Verhalten unter verschiedenen Bedingungen zu beobachten und Fehler während der Laufzeit aufzudecken. Beispiele hierfür sind:

- **Black-Box-Testen:** Hierbei wird die Software aus der Perspektive des Endbenutzers getestet, ohne Kenntnisse der internen Struktur oder des Quellcodes. Die Tests basieren auf den Anforderungen und der Spezifikation der Software. Es wird überprüft, ob die Eingaben die erwarteten Ausgaben liefern und ob die Funktionalität wie beschrieben gegeben ist.
    - **Beispiele:** Funktionstests, Usability-Tests, Akzeptanztests, Grenzwerttests, Äquivalenzklassenanalyse.
- **White-Box-Testen:** Bei dieser Methode werden die interne Struktur und der Quellcode der Software berücksichtigt. Ziel ist es, die Ausführungspfade zu testen und sicherzustellen, dass alle Codezeilen und Verzweigungen korrekt funktionieren.
    - **Beispiele:** Anweisungsüberdeckung (Statement Coverage), Zweigüberdeckung (Branch Coverage), Pfadüberdeckung (Path Coverage), Testen von Schleifen.

**2. Statische Testverfahren:**

Statische Tests beinhalten die Überprüfung der Software und der zugehörigen Dokumente (z.B. Spezifikationen, Design) ohne die Ausführung des Codes. Ziel ist es, Fehler, Inkonsistenzen und potenzielle Probleme frühzeitig im Entwicklungsprozess zu erkennen. Beispiele hierfür sind:

- **Reviews (Begutachtungen):** Hierbei werden Softwareartefakte (z.B. Quellcode, Design-Dokumente, Testpläne) von einem oder mehrerenReviewern systematisch geprüft.
    - **Code-Reviews:** Überprüfung des Quellcodes auf Fehler, Stil, Wartbarkeit und Einhaltung von Programmierstandards.
    - **Design-Reviews:** Überprüfung des Software-Designs auf architektonische Probleme, Usability-Aspekte und Erfüllung der Anforderungen.
    - **Anforderungs-Reviews:** Überprüfung der Spezifikationen auf Klarheit, Vollständigkeit und Konsistenz.
- **Statische Code-Analyse:** Der Quellcode wird automatisiert mit speziellen Tools analysiert, um potenzielle Fehler wie Speicherlecks, ungenutzte Variablen, Verletzungen von Programmierstandards oder Sicherheitslücken zu identifizieren.

**Spezifische Testarten (Beispiele):**

- **Extremwertetest (Boundary Value Analysis):** Eine Black-Box-Testtechnik, bei der Testfälle an den Rändern der Eingabebereiche (sowohl gültige als auch ungültige Grenzwerte) und in deren unmittelbarer Nähe erstellt werden, da Fehler häufig an diesen Stellen auftreten.

> **Hinweis:** Eine umfassende Teststrategie beinhaltet in der Regel eine Kombination aus dynamischen und statischen Testverfahren, um eine hohe Softwarequalität zu gewährleisten.

## Beispiel oder Anwendungsfall

Ein Entwicklungsteam arbeitet an einer Webanwendung zur Verwaltung von Kundenbestellungen.

- **Black-Box-Test:** Tester überprüfen, ob das System Bestellungen korrekt entgegennimmt, verarbeitet und die richtigen Bestätigungs-E-Mails versendet. Sie testen verschiedene Eingaben (gültige und ungültige Daten) und überprüfen die Ausgaben.
- **White-Box-Test:** Entwickler schreiben Unit-Tests, um einzelne Funktionen und Komponenten des Codes zu testen. Sie stellen sicher, dass alle relevanten Verzweigungen und Pfade im Code korrekt ausgeführt werden.
- **Code-Review:** Ein erfahrener Entwickler führt ein Code-Review des neu geschriebenen Codes durch, um potenzielle Fehler, stilistische Inkonsistenzen und Verbesserungsmöglichkeiten zu identifizieren.
- **Statischer Code-Analyse:** Ein Tool zur statischen Code-Analyse wird eingesetzt, um automatisch nach potenziellen Sicherheitslücken und Programmierfehlern im Code zu suchen.
- **Extremwertetest:** Beim Testen des Feldes für die Anzahl der bestellten Artikel werden die Grenzwerte (z.B. 0, 1, maximal erlaubte Anzahl) und Werte in der Nähe der Grenzen getestet, um Fehler bei der Eingabevalidierung aufzudecken.

## Weiterführende Links & Quellen

- [Wikipedia: Softwaretest](https://de.wikipedia.org/wiki/Softwaretest)
- [ISTQB (International Software Testing Qualifications Board)](https://www.istqb.org/de/) - Bietet Standards und Zertifizierungen im Bereich Softwaretest.
- [Grundlagen des Softwaretests (z.B. von Universitäten oder Fachportalen)](https://www.testing-board.de/fileadmin/downloads/ISTQB_Certified_Tester_Foundation_Level_Syllabus_2018_DE.pdf) - Dies ist der offizielle Lehrplan für den ISTQB Certified Tester Foundation Level, der einen guten Überblick über die Grundlagen bietet.
- [Überblick über Black-Box-Testing](https://www.guru99.com/black-box-testing.html) (Englischsprachige Ressource mit guten Erklärungen).
- [Überblick über White-Box-Testing](https://www.guru99.com/white-box-testing.html) (Englischsprachige Ressource mit guten Erklärungen).
- [Informationen zu Code-Reviews](https://www.atlassian.com/de/agile/software-development/code-reviews)

---

> **Fehler gefunden?:** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
