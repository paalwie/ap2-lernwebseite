# Sicherstellen der Qualität von Softwareanwendungen: Softwaretests erstellen, durchführen und die Ergebnisse analysieren können - Testprozess

## Einführung

Ein systematischer **Testprozess** ist unerlässlich, um sicherzustellen, dass Software umfassend und effizient getestet wird. Er umfasst mehrere Phasen, von der Planung über die Durchführung bis zur Analyse der Ergebnisse. Die sorgfältige Durchführung jedes Schritts trägt maßgeblich zur Qualität der Software bei.

## Phasen des Testprozesses

Ein typischer Testprozess umfasst die folgenden Phasen:

1.  **Planung und Steuerung:**
    -   **Teststrategie definieren:** Festlegung des Testansatzes, der Testziele, des Umfangs, der Ressourcen und des Zeitplans.
    -   **Testplan erstellen:** Detaillierte Beschreibung der Testaktivitäten, einschließlich der zu testenden Features, der Testmethoden, der Verantwortlichkeiten und der Risikobetrachtung.
    -   **Testumgebung festlegen:** Auswahl und Konfiguration der Hard- und Softwareumgebung, in der die Tests durchgeführt werden sollen.
    -   **Testwerkzeuge auswählen:** Auswahl geeigneter Werkzeuge für Testmanagement, Testautomatisierung, Fehlerverfolgung usw.
    -   **Rollen und Verantwortlichkeiten definieren:** Zuweisung von Aufgaben an die Testteammitglieder.

2.  **Testanalyse und Testentwurf:**
    -   **Testbasis analysieren:** Untersuchung der Anforderungsdokumente, Spezifikationen, Benutzergeschichten, Modelle und des Codes, um die Testbedingungen zu identifizieren.
    -   **Testfälle entwerfen:** Erstellung detaillierter Testfälle, die beschreiben, welche Eingaben gegeben werden, welche Vorbedingungen gelten, welche Aktionen ausgeführt werden und welche erwarteten Ergebnisse vorliegen.
    -   **Testdaten generieren und auswählen:** Erstellung oder Auswahl von geeigneten Testdaten, die verschiedene Szenarien und Grenzwerte abdecken.
    -   **Testablauf festlegen:** Definition der Reihenfolge, in der die Testfälle ausgeführt werden sollen.

3.  **Testdurchführung:**
    -   **Testumgebung vorbereiten:** Sicherstellen, dass die Testumgebung korrekt eingerichtet ist.
    -   **Testfälle ausführen:** Durchführung der entworfenen Testfälle gemäß dem Testablauf.
    -   **Testergebnisse protokollieren:** Dokumentation der tatsächlichen Ergebnisse für jeden Testfall (bestanden, fehlgeschlagen, blockiert).
    -   **Fehler melden:** Erfassung und Dokumentation aller gefundenen Fehler mit detaillierten Beschreibungen, Reproduktionsschritten und ggf. Screenshots oder Logdateien.

4.  **Testabschluss:**
    -   **Testergebnisse auswerten:** Analyse der protokollierten Testergebnisse, um den Testfortschritt und die Qualität der getesteten Software zu beurteilen.
    -   **Testbericht erstellen:** Zusammenfassung der Testaktivitäten, der Testergebnisse, der gefundenen Fehler, der Testabdeckung und der Empfehlungen für die Freigabe der Software.
    -   **Lessons Learned dokumentieren:** Identifizierung von Verbesserungspotenzialen für zukünftige Testprojekte.
    -   **Testartefakte archivieren:** Sicherstellung der langfristigen Verfügbarkeit von Testplänen, Testfällen, Testdaten und Testberichten.

## Auswahl des Testverfahrens

Die Auswahl des geeigneten Testverfahrens hängt von verschiedenen Faktoren ab:

-   **Testziele:** Was soll mit den Tests erreicht werden (z.B. funktionale Korrektheit, Performance, Sicherheit)?
-   **Art der zu testenden Software:** Handelt es sich um eine Webanwendung, eine mobile App, eine Desktop-Anwendung, ein eingebettetes System usw.?
-   **Phase des Softwareentwicklungszyklus:** In frühen Phasen sind oft statische Tests und Modultests relevant, später folgen Integrationstests und Systemtests.
-   **Verfügbare Ressourcen:** Zeit, Budget, Personal und Werkzeuge beeinflussen die Auswahl der Testverfahren.
-   **Risikobetrachtung:** Bereiche mit hohem Risiko erfordern möglicherweise intensivere und spezifischere Testverfahren.
-   **Anforderungen und Spezifikationen:** Die Art und Detailliertheit der Anforderungen beeinflussen die Testansätze (z.B. Blackbox-Tests basieren stark auf Anforderungen).
-   **Kenntnisse des Testteams:** Das Know-how des Testteams in Bezug auf verschiedene Testmethoden spielt eine Rolle.

In der Praxis kommt oft eine Kombination verschiedener Testverfahren zum Einsatz, um eine umfassende Testabdeckung zu erreichen.

## Kriterien für Testergebnisse definieren

Kriterien für Testergebnisse legen fest, unter welchen Bedingungen ein Test als erfolgreich (bestanden) oder nicht erfolgreich (fehlgeschlagen) gilt. Diese Kriterien sollten klar, messbar, eindeutig und nachvollziehbar sein.

-   **Erwartete Ergebnisse:** Für jeden Testfall muss das erwartete Ergebnis präzise beschrieben werden, basierend auf den Anforderungen und Spezifikationen.
-   **Vergleich mit tatsächlichen Ergebnissen:** Das tatsächliche Ergebnis der Testausführung wird mit dem erwarteten Ergebnis verglichen.
-   **Pass/Fail-Kriterien:** Klare Definitionen, wann ein tatsächliches Ergebnis mit dem erwarteten Ergebnis übereinstimmt (Pass) und wann nicht (Fail). Dies kann z.B. ein exakter Wert, ein bestimmter Zustand oder das Fehlen eines Fehlers sein.
-   **Toleranzbereiche:** In manchen Fällen (z.B. bei Performance-Tests) können Toleranzbereiche für akzeptable Abweichungen vom erwarteten Ergebnis definiert werden.
-   **Schweregrad von Fehlern:** Für fehlgeschlagene Tests sollte der Schweregrad des Fehlers klassifiziert werden (z.B. kritisch, hoch, mittel, niedrig), um die Priorisierung der Fehlerbehebung zu erleichtern.

## Testdaten generieren und auswählen

Effektive Testdaten sind entscheidend für die Durchführung aussagekräftiger Tests. Sie sollten verschiedene Szenarien abdecken, einschließlich:

-   **Gültige Eingaben:** Daten, die den erwarteten Formaten und Werten entsprechen.
-   **Ungültige Eingaben:** Daten, die gegen die erwarteten Formate oder Werte verstoßen (z.B. falsche Datentypen, Werte außerhalb des zulässigen Bereichs, zu lange Zeichenketten).
-   **Grenzwerte:** Daten an den Rändern der zulässigen Wertebereiche (Minimum, Maximum).
-   **Sonderfälle:** Unerwartete oder ungewöhnliche Eingaben, die das System herausfordern können.
-   **Leistungsbezogene Daten:** Große Datenmengen für Belastungstests.
-   **Sicherheitsrelevante Daten:** Eingaben, die potenzielle Sicherheitslücken aufdecken könnten (z.B. SQL-Injection-Strings).

Testdaten können auf verschiedene Arten generiert und ausgewählt werden:

-   **Manuelle Erstellung:** Tester erstellen die Testdaten basierend auf ihrem Wissen der Anforderungen und Spezifikationen.
-   **Kopieren aus der Produktionsumgebung (mit Vorsicht):** Reale Daten können nützlich sein, erfordern aber Anonymisierung oder Maskierung sensibler Informationen aus Datenschutzgründen.
-   **Automatische Generierung:** Testdaten-Generierungswerkzeuge können verwendet werden, um große Mengen an Testdaten mit verschiedenen Mustern und Variationen zu erstellen.
-   **Verwendung von Testdatenbanken:** Speziell für Testzwecke aufgesetzte Datenbanken mit relevanten Testdaten.

## Testprotokoll und Auswertung

Das **Testprotokoll** (Test Log) ist eine detaillierte Aufzeichnung der während der Testdurchführung stattgefundenen Ereignisse und Ergebnisse. Es enthält typischerweise:

-   **Identifikation des Testfalls:** Eindeutige Kennzeichnung des ausgeführten Testfalls.
-   **Tester:** Name des Testers.
-   **Datum und Uhrzeit der Ausführung:** Wann der Testfall durchgeführt wurde.
-   **Testumgebung:** Informationen über die verwendete Hard- und Softwarekonfiguration.
-   **Eingabedaten:** Die für den Testfall verwendeten Eingabewerte.
-   **Ausgeführte Schritte:** Genaue Beschreibung der durchgeführten Aktionen.
-   **Tatsächliches Ergebnis:** Das beobachtete Verhalten der Software.
-   **Erwartetes Ergebnis:** Das im Testfall definierte erwartete Ergebnis.
-   **Pass/Fail-Status:** Ob der Testfall bestanden oder fehlgeschlagen ist.
-   **Fehlerbericht-ID (falls fehlgeschlagen):** Verknüpfung zum entsprechenden Fehlerbericht.
-   **Kommentare und Beobachtungen:** Zusätzliche Informationen oder Anmerkungen des Testers.

Die **Auswertung der Testergebnisse** umfasst die Analyse der protokollierten Daten, um:

-   **Den Testfortschritt zu verfolgen:** Wie viele Testfälle wurden ausgeführt und wie viele davon sind bestanden/fehlgeschlagen?
-   **Die Qualität der Software zu beurteilen:** Wie viele Fehler wurden gefunden und welchen Schweregrad haben sie?
-   **Die Testabdeckung zu analysieren:** Welche Teile der Software wurden wie gut getestet?
-   **Trends und Muster zu erkennen:** Gibt es bestimmte Bereiche der Software, in denen häufiger Fehler auftreten?
-   **Entscheidungen über die Freigabe der Software zu treffen:** Erfüllt die Software die Qualitätskriterien? Sind die verbleibenden Fehler akzeptabel?

Die Ergebnisse der Testauswertung werden in einem **Testbericht** zusammengefasst, der als Grundlage für Entscheidungen über die Weiterentwicklung und Freigabe der Software dient.

## Fazit

Ein strukturierter Testprozess, der die sorgfältige Auswahl von Testverfahren, die Definition klarer Testkriterien, die Generierung geeigneter Testdaten sowie eine detaillierte Protokollierung und Auswertung der Testergebnisse umfasst, ist unerlässlich für die Sicherstellung der Softwarequalität. Die effektive Anwendung dieser Aspekte ermöglicht es, Fehler frühzeitig zu erkennen, die Testabdeckung zu maximieren und fundierte Entscheidungen über die Freigabe der Software zu treffen.

## Links und Quellen

-   **Software testing process - Wikipedia:** [https://de.wikipedia.org/wiki/Testprozess](https://de.wikipedia.org/wiki/Testprozess)
-   **ISTQB - Foundation Level Syllabus (enthält detaillierte Informationen zum Testprozess):** [https://www.istqb.org/certifications/foundation-level.html](https://www.istqb.org/certifications/foundation-level.html) (Englischsprachig, Syllabus kann heruntergeladen werden)
-   **IEEE Std 829-2008 - IEEE Standard for Software Test Documentation:** [https://standards.ieee.org/standard/829-2008.html](https://standards.ieee.org/standard/829-2008.html) (Englischsprachiger Standard für Testdokumentation, kostenpflichtig)
-   **Test case - Wikipedia:** [https://de.wikipedia.org/wiki/Testfall](https://de.wikipedia.org/wiki/Testfall)
-   **Test data - Wikipedia:** [https://de.wikipedia.org/wiki/Testdaten](https://de.wikipedia.org/wiki/Testdaten)
-   **Test log - Wikipedia:** [https://en.wikipedia.org/wiki/Test_log](https://en.wikipedia.org/wiki/Test_log) (Englischsprachig)
-   **Test report - Wikipedia:** [https://en.wikipedia.org/wiki/Test_report](https://en.wikipedia.org/wiki/Test_report) (Englischsprachig)
-   **Dokumentationen zu verschiedenen Testmanagement-Tools (z.B. Jira mit Xray/Zephyr, TestLink, qTest).**
    -   **Jira Software:** [https://www.atlassian.com/software/jira](https://www.atlassian.com/software/jira) (Englischsprachige Produktseite)
    -   **Xray (für Jira):** [https://www.getxray.app/](https://www.getxray.app/) (Englischsprachige Produktseite)
    -   **Zephyr (für Jira):** [https://www.atlassian.com/software/jira/test-management](https://www.atlassian.com/software/jira/test-management) (Englischsprachige Produktseite)
    -   **TestLink:** [http://testlink.org/](http://testlink.org/) (Englischsprachige Projektseite)
    -   **qTest:** [https://www.tricentis.com/software-testing-tool/qtest/](https://www.tricentis.com/software-testing-tool/qtest/) (Englischsprachige Produktseite)
-   **Artikel und Blogbeiträge zum Thema "Softwaretestprozess".**

-----

> **Fehler gefunden?** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
