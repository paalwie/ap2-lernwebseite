# Komponententest, Integrationstest, Systemtest

## Einführung

Softwaretests lassen sich nach dem Umfang der getesteten Software unterscheiden. Komponententests, Integrationstests und Systemtests stellen unterschiedliche Teststufen dar, die jeweils darauf abzielen, Fehler auf verschiedenen Ebenen der Softwareentwicklung zu identifizieren und zu beheben. Diese Teststufen ergänzen sich und sind entscheidend für die Qualitätssicherung einer komplexen IT-Lösung.

## Grundlagen

**1. Komponententest (Unit-Test):**

- **Fokus:** Testen einzelner, isolierter Softwarekomponenten oder -module (z.B. Funktionen, Methoden, Klassen).
- **Ziel:** Sicherstellen, dass jede Komponente für sich korrekt funktioniert und die definierten Anforderungen erfüllt.
- **Durchführung:** Wird in der Regel von Entwicklern durchgeführt, oft mithilfe von Testframeworks (z.B. JUnit für Java, pytest für Python, NUnit für .NET).
- **Vorteile:** Frühes Erkennen von Fehlern in einzelnen Einheiten, erleichtert die Fehlersuche, fördert modulares Design und Codequalität.
- **Nachteile:** Interaktionen zwischen Komponenten werden nicht getestet, erfordert detaillierte Kenntnisse des Codes.

**2. Integrationstest:**

- **Fokus:** Testen der Interaktionen und Schnittstellen zwischen integrierten Softwarekomponenten oder -modulen.
- **Ziel:** Überprüfen, ob die zusammenarbeitenden Komponenten korrekt kommunizieren und Daten austauschen.
- **Durchführung:** Kann von Entwicklern oder unabhängigen Testern durchgeführt werden. Es werden verschiedene Integrationsstrategien angewendet (z.B. Top-Down, Bottom-Up, Big Bang).
- **Vorteile:** Identifiziert Fehler in den Schnittstellen und Interaktionen, deckt Probleme auf, die im Komponententest nicht sichtbar waren.
- **Nachteile:** Fehlersuche kann schwieriger sein, da Fehler in einer oder mehreren interagierenden Komponenten liegen können. Erfordert eine integrierte Testumgebung.

**3. Systemtest:**

- **Fokus:** Testen des gesamten integrierten Systems als Ganzes.
- **Ziel:** Überprüfen, ob das Gesamtsystem die funktionalen und nicht-funktionalen Anforderungen (z.B. Leistung, Sicherheit, Usability) erfüllt.
- **Durchführung:** Wird in der Regel von unabhängigen Testern in einer Umgebung durchgeführt, die der Produktionsumgebung möglichst ähnlich ist.
- **Vorteile:** Validiert das System aus Endbenutzersicht, deckt systemweite Fehler und Integrationsprobleme auf, überprüft die Erfüllung der Systemanforderungen.
- **Nachteile:** Fehlersuche kann sehr aufwendig sein, da viele Komponenten interagieren. Erfordert eine vollständige und realistische Testumgebung.

> **Hinweis:** Diese Teststufen bilden eine Testpyramide, bei der die Anzahl der Tests von unten (Komponententests) nach oben (Systemtests) abnimmt, während der Umfang und die Komplexität der Tests zunehmen.

## Beispiel oder Anwendungsfall

Ein E-Commerce-System besteht aus mehreren Komponenten: einer Benutzerverwaltung, einem Produktkatalog, einem Warenkorb und einem Zahlungssystem.

- **Komponententest:** Für die Benutzerverwaltung werden einzelne Funktionen wie "Benutzer registrieren", "Login" und "Passwort vergessen" isoliert getestet. Für den Produktkatalog werden Funktionen zum Anzeigen von Produktdetails und zum Suchen von Produkten einzeln geprüft.
- **Integrationstest:** Die Interaktion zwischen dem Produktkatalog und dem Warenkorb wird getestet (z.B. Hinzufügen von Produkten zum Warenkorb). Ebenso wird die Kommunikation zwischen dem Warenkorb und dem Zahlungssystem überprüft (z.B. Übermittlung der Bestellsumme).
- **Systemtest:** Das gesamte E-Commerce-System wird als Endbenutzer getestet. Ein Tester durchläuft den gesamten Bestellprozess (Produkte suchen, in den Warenkorb legen, zur Kasse gehen, bezahlen) und überprüft, ob alles wie erwartet funktioniert. Es werden auch nicht-funktionale Aspekte wie die Ladezeit der Seiten und die Sicherheit der Zahlungsabwicklung getestet.

## Weiterführende Links & Quellen

- [Wikipedia: Softwaretest](https://de.wikipedia.org/wiki/Softwaretest#Teststufen) - Abschnitt zu Teststufen.
- [Grundlagen der Teststufen (z.B. von Universitäten oder Fachportalen)](https://www.testing-board.de/fileadmin/downloads/ISTQB_Certified_Tester_Foundation_Level_Syllabus_2018_DE.pdf) - Siehe Kapitel 2: Testen während des Software-Lebenszyklus.
- [Komponententest (Unit Testing) erklärt](https://www.guru99.com/unit-testing-guide.html) (Englischsprachige Ressource).
- [Integration Testing erklärt](https://www.guru99.com/integration-testing.html) (Englischsprachige Ressource).
- [System Testing erklärt](https://www.guru99.com/system-testing.html) (Englischsprachige Ressource).

---

> **Fehler gefunden?:** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
