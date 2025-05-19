# Sicherstellen der Qualität von Softwareanwendungen: Softwaretests erstellen, durchführen und die Ergebnisse analysieren können - Statische und dynamische Testverfahren

## Einführung

**Softwaretests** sind ein entscheidender Bestandteil des Softwareentwicklungsprozesses, um Fehler und Mängel in der Software zu identifizieren und die Qualität des Produkts sicherzustellen. Es gibt verschiedene Arten von Testverfahren, die sich in ihrer Methodik und ihrem Fokus unterscheiden. Grundlegend unterscheidet man zwischen **statischen** und **dynamischen** Testverfahren.

## 1. Statische Testverfahren

**Statische Testverfahren** beinhalten die Analyse der Softwareartefakte (wie Quellcode, Designspezifikationen, Anforderungsdokumente) ohne die Software tatsächlich auszuführen. Ziel ist es, Fehler, Inkonsistenzen und potenzielle Probleme frühzeitig im Entwicklungsprozess zu erkennen.

### Beispiele für statische Testverfahren

-   **Schreibtischtest (Desk Check):** Eine informelle Überprüfung des Quellcodes, der Designspezifikationen oder anderer Dokumente durch den Entwickler oder einen anderen Beteiligten. Dabei wird der Code Zeile für Zeile durchgegangen, um logische Fehler, Syntaxfehler oder Verletzungen von Programmierstandards zu finden.
-   **Code-Review (Code Inspection):** Eine systematischere und formellere Überprüfung des Quellcodes durch ein Team von Entwicklern. Ziel ist es, Fehler, potenzielle Sicherheitslücken, Performance-Probleme und Verstöße gegen Coding-Richtlinien zu identifizieren. Es gibt verschiedene Formen von Code-Reviews, z.B. Pair Programming, Walkthroughs und formelle Inspektionen.
-   **Statische Code-Analyse:** Der Einsatz von automatisierten Werkzeugen, die den Quellcode analysieren, um potenzielle Fehler (z.B. Speicherlecks, ungenutzte Variablen, Verletzungen von Coding-Standards, potenzielle Sicherheitslücken) zu erkennen, ohne den Code auszuführen. Beispiele für solche Tools sind SonarQube, Checkstyle und PMD.
-   **Anforderungsreview und Designreview:** Die Überprüfung der Anforderungsdokumente und der Softwaredesign-Spezifikationen, um sicherzustellen, dass sie klar, vollständig, konsistent und testbar sind und die Bedürfnisse der Stakeholder erfüllen.

## 2. Dynamische Testverfahren

**Dynamische Testverfahren** beinhalten die Ausführung der Software mit Testdaten, um das Verhalten der Software zur Laufzeit zu beobachten und Fehler zu finden.

### Beispiele für dynamische Testverfahren

-   **Blackbox-Test:** Eine Testmethode, bei der die interne Struktur und Implementierung der Software dem Tester unbekannt sind ("Black Box"). Die Tests basieren auf den Anforderungen und der Funktionalität der Software aus der Benutzersicht. Der Tester gibt Eingaben und überprüft die Ausgaben der Software, ohne zu wissen, wie diese intern verarbeitet werden.
    -   **Beispiele:** Funktionstests, Akzeptanztests, End-to-End-Tests (oft auch Blackbox-Tests).
-   **Whitebox-Test:** Eine Testmethode, bei der der Tester Kenntnisse über die interne Struktur und Implementierung der Software hat ("White Box" oder "Glass Box"). Die Tests werden entworfen, um bestimmte Pfade im Code abzudecken und die interne Logik zu überprüfen.
    -   **Beispiele:** Modultests (Unit Tests), Pfadüberdeckungstests, Anweisungsüberdeckungstests, Zweigüberdeckungstests.
-   **Modultest (Unit Test):** Test einzelner, isolierter Komponenten oder Module der Software (z.B. einzelne Funktionen, Methoden oder Klassen). Ziel ist es, die Korrektheit dieser kleinsten testbaren Einheiten zu überprüfen. Modultests werden typischerweise von Entwicklern geschrieben und automatisiert durchgeführt.
-   **Integrationstest:** Test der Interaktionen und Schnittstellen zwischen verschiedenen Modulen oder Komponenten der Software. Ziel ist es, Fehler in den Integrationen und der Kommunikation zwischen den Teilen des Systems zu finden. Es gibt verschiedene Ansätze für Integrationstests (z.B. Top-Down, Bottom-Up).
-   **End-to-End-Test (E2E-Test):** Test des gesamten Softwareprodukts vom Anfang bis zum Ende, so wie es ein Endbenutzer verwenden würde. Dabei werden alle beteiligten Komponenten und Systeme (z.B. Datenbanken, Schnittstellen zu anderen Systemen) in einer realitätsnahen Umgebung getestet, um sicherzustellen, dass das Gesamtsystem wie erwartet funktioniert.
-   **Belastungstest (Load Test):** Eine Art von Performance-Test, bei dem das System unter erwarteter oder hoher Last (z.B. viele gleichzeitige Benutzer) getestet wird, um seine Stabilität, Reaktionsfähigkeit und Ressourcennutzung zu überprüfen.
-   **Stresstest:** Eine Art von Performance-Test, bei dem das System über seine normalen Betriebsgrenzen hinaus belastet wird, um seine Robustheit und sein Verhalten bei extremen Bedingungen zu testen (z.B. sehr viele gleichzeitige Benutzer, hohe Datenmengen, Ausfall von Komponenten).
-   **Akzeptanztest (User Acceptance Test - UAT):** Tests, die vom Endbenutzer oder anderen Stakeholdern durchgeführt werden, um zu überprüfen, ob die Software die Anforderungen erfüllt und für den beabsichtigten Zweck geeignet ist. Erfolgreiche Akzeptanztests sind oft eine Voraussetzung für die Freigabe der Software.
-   **Regressionstest:** Wiederholung von bereits durchgeführten Tests nach Änderungen an der Software (z.B. Bugfixes, neue Features), um sicherzustellen, dass die Änderungen keine neuen Fehler verursacht oder bestehende Fehler wieder eingeführt haben. Regressionstests sollten idealerweise automatisiert werden.
-   **Usability-Test:** Test der Benutzerfreundlichkeit der Software durch tatsächliche Benutzer. Ziel ist es, Probleme in der Bedienung, Navigation und im Design zu identifizieren.
-   **Sicherheitstest:** Tests, die darauf abzielen, Schwachstellen und Sicherheitslücken in der Software zu finden, die von Angreifern ausgenutzt werden könnten (z.B. Injection-Angriffe, Cross-Site-Scripting).

## Gegenüberstellung von statischen und dynamischen Testverfahren

| Merkmal             | Statische Testverfahren                                  | Dynamische Testverfahren                                     |
| ------------------- | ------------------------------------------------------- | ---------------------------------------------------------- |
| Ausführung          | Ohne Ausführung der Software                            | Mit Ausführung der Software                                |
| Fokus               | Finden von Fehlern in Artefakten (Code, Design, etc.) | Beobachtung des Softwareverhaltens zur Laufzeit            |
| Zeitpunkt           | Früh im Entwicklungszyklus                             | Während und nach der Entwicklung                             |
| Art der Fehler      | Logische Fehler, Syntaxfehler, Designmängel, etc.     | Funktionale Fehler, Performance-Probleme, etc.             |
| Automatisierung     | Gut automatisierbar (z.B. statische Codeanalyse)       | Automatisierung ist oft möglich, erfordert aber Testskripte |
| Kosten              | Relativ gering, frühzeitige Fehlererkennung spart Kosten | Kann kostspieliger sein, Fehlerbehebung später ist teurer   |

## Fazit

Statische und dynamische Testverfahren sind komplementäre Ansätze zur Qualitätssicherung von Software. Statische Tests ermöglichen die frühzeitige Erkennung von Problemen in den Softwareartefakten, während dynamische Tests das tatsächliche Verhalten der Software unter verschiedenen Bedingungen überprüfen. Eine umfassende Teststrategie beinhaltet in der Regel eine Kombination aus beiden Arten von Verfahren sowie verschiedenen Teststufen (z.B. Modultests, Integrationstests, Systemtests, Akzeptanztests), um eine hohe Softwarequalität zu gewährleisten.

## Links und Quellen

-   **Software testing - Wikipedia:** [https://de.wikipedia.org/wiki/Softwaretest](https://de.wikipedia.org/wiki/Softwaretest)
-   **Static testing - Wikipedia:** [https://de.wikipedia.org/wiki/Statischer_Test](https://de.wikipedia.org/wiki/Statischer_Test)
-   **Dynamic testing - Wikipedia:** [https://de.wikipedia.org/wiki/Dynamischer_Test](https://de.wikipedia.org/wiki/Dynamischer_Test)
-   **Black-box testing - Wikipedia:** [https://de.wikipedia.org/wiki/Black-Box-Test](https://de.wikipedia.org/wiki/Black-Box-Test)
-   **White-box testing - Wikipedia:** [https://de.wikipedia.org/wiki/White-Box-Test](https://de.wikipedia.org/wiki/White-Box-Test)
-   **Unit testing - Wikipedia:** [https://de.wikipedia.org/wiki/Unit-Test](https://de.wikipedia.org/wiki/Unit-Test)
-   **Integration testing - Wikipedia:** [https://de.wikipedia.org/wiki/Integrationstest](https://de.wikipedia.org/wiki/Integrationstest)
-   **End-to-end testing - Wikipedia:** [https://de.wikipedia.org/wiki/Ende-zu-Ende-Test](https://de.wikipedia.org/wiki/Ende-zu-Ende-Test)
-   **Load testing - Wikipedia:** [https://de.wikipedia.org/wiki/Lasttest](https://de.wikipedia.org/wiki/Lasttest)
-   **ISTQB (International Software Testing Qualifications Board) - Informationen und Glossar zu Testbegriffen:** [https://www.istqb.org/](https://www.istqb.org/)
-   **OWASP (Open Web Application Security Project) - Ressourcen zum Thema Sicherheitstests:** [https://owasp.org/](https://owasp.org/)
-   **Dokumentationen zu verschiedenen Testwerkzeugen (z.B. JUnit, TestNG, Selenium, JMeter, SonarQube).**
    -   **JUnit:** [https://junit.org/junit5/](https://junit.org/junit5/) (Englischsprachige Projektseite)
    -   **TestNG:** [https://testng.org/](https://testng.org/) (Englischsprachige Projektseite)
    -   **Selenium:** [https://www.selenium.dev/](https://www.selenium.dev/) (Englischsprachige Projektseite)
    -   **Apache JMeter:** [https://jmeter.apache.org/](https://jmeter.apache.org/) (Englischsprachige Projektseite)
    -   **SonarQube:** [https://www.sonarqube.org/](https://www.sonarqube.org/) (Englischsprachige Projektseite)
-   **Artikel und Blogbeiträge zum Thema "Softwaretestverfahren".**

-----

> **Fehler gefunden?** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
