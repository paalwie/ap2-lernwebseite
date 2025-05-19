# Konzipieren und Umsetzen von kundenspezifischen Softwareanwendungen: Vorgehensmodelle unterscheiden können - Klassische Modelle, z.B. Wasserfallmodell, Spiralmodell, V-Modell

## Einführung

Vorgehensmodelle in der Softwareentwicklung definieren einen Rahmen, der die Abfolge von Aktivitäten, die beteiligten Rollen und die zu erstellenden Ergebnisse im Entwicklungsprozess festlegt. Die Wahl des passenden Vorgehensmodells ist entscheidend für den Erfolg eines Softwareprojekts und hängt von verschiedenen Faktoren wie der Komplexität des Projekts, den Anforderungen des Kunden, der Größe des Teams und den Risikobereitschaft ab. Zu den klassischen und immer noch relevanten Vorgehensmodellen gehören das Wasserfallmodell, das Spiralmodell und das V-Modell.

## Das Wasserfallmodell

Das Wasserfallmodell ist ein sequenzielles, linear-phasenorientiertes Vorgehensmodell. Es stellt den Entwicklungsprozess als eine Abfolge von Phasen dar, die nacheinander durchlaufen werden. Jede Phase muss abgeschlossen sein, bevor die nächste beginnt. Ein Zurück zu einer vorherigen Phase ist in der reinen Form des Wasserfallmodells nicht vorgesehen oder nur mit erheblichem Aufwand möglich.

**Phasen des Wasserfallmodells:**

1.  **Anforderungsanalyse:** Detaillierte Erfassung und Dokumentation aller Anforderungen an das System (ähnlich dem Lastenheft).
2.  **Systementwurf:** Entwicklung der Systemarchitektur, der Komponenten und der Schnittstellen (ähnlich dem Pflichtenheft).
3.  **Implementierung:** Programmierung des eigentlichen Quellcodes basierend auf dem Systementwurf.
4.  **Testen:** Durchführung verschiedener Testarten (Unit-, Integrations-, Systemtests) zur Überprüfung der Funktionalität und Qualität.
5.  **Deployment:** Auslieferung und Installation der Software in der Zielumgebung.
6.  **Wartung:** Behebung von Fehlern, Durchführung von Updates und Erweiterungen nach der Auslieferung.

**Merkmale des Wasserfallmodells:**

-   **Sequenzieller Ablauf:** Phasen werden linear nacheinander abgearbeitet.
-   **Starke Dokumentation:** Jede Phase erfordert detaillierte Dokumente als Ergebnis und Grundlage für die nächste Phase.
-   **Wenig Flexibilität:** Änderungen an Anforderungen oder Design sind nach Abschluss einer Phase schwierig und kostspielig.
-   **Geeignet für gut verstandene und stabile Anforderungen:** Funktioniert am besten, wenn die Anforderungen von Anfang an klar und unveränderlich sind.

**Vorteile des Wasserfallmodells:**

-   **Einfache Struktur und Verständlichkeit.**
-   **Gut geeignet für kleine und überschaubare Projekte mit stabilen Anforderungen.**
-   **Klar definierte Phasen und Ergebnisse erleichtern die Planung und Steuerung.**
-   **Starke Dokumentation kann die Wartung erleichtern.**

**Nachteile des Wasserfallmodells:**

-   **Wenig Flexibilität bei Änderungen.**
-   **Lange Entwicklungszyklen, da das Endprodukt erst spät im Prozess sichtbar wird.**
-   **Risiko, dass Anforderungen falsch verstanden wurden oder sich ändern, bevor das Produkt fertig ist.**
-   **Testen findet erst am Ende statt, was die Fehlerbehebung erschweren kann.**

## Das Spiralmodell

Das Spiralmodell ist ein risikogetriebenes Vorgehensmodell, das die Elemente des Wasserfallmodells mit iterativen Ansätzen und einer expliziten Risikobetrachtung kombiniert. Der Entwicklungsprozess wird als eine Spirale dargestellt, wobei jede Windung einen Entwicklungszyklus repräsentiert. Jeder Zyklus umfasst die Phasen Planung, Risikobeurteilung, Entwicklung und Bewertung.

**Phasen des Spiralmodells (pro Zyklus):**

1.  **Planung:** Definition der Ziele, Alternativen und Einschränkungen für die aktuelle Phase.
2.  **Risikobeurteilung:** Identifizierung und Bewertung potenzieller Risiken und Entwicklung von Strategien zur Risikominimierung.
3.  **Entwicklung:** Durchführung der Entwicklungsaktivitäten (Analyse, Design, Implementierung, Test) für die aktuelle Phase. Der Umfang dieser Aktivitäten kann je nach Risiko variieren (z.B. Prototyping bei hohem Risiko).
4.  **Bewertung:** Bewertung der Ergebnisse der aktuellen Phase durch den Kunden und das Entwicklungsteam, Planung der nächsten Phase.

**Merkmale des Spiralmodells:**

-   **Iterativer Ansatz:** Das Projekt wird in mehreren Zyklen entwickelt.
-   **Risikomanagement im Fokus:** Risiken werden explizit identifiziert und behandelt.
-   **Flexibilität:** Änderungen und neue Anforderungen können in späteren Zyklen besser berücksichtigt werden.
-   **Geeignet für große und komplexe Projekte mit hohen Risiken und sich ändernden Anforderungen.**

**Vorteile des Spiralmodells:**

-   **Hohe Flexibilität bei Änderungen.**
-   **Reduziert Risiken durch frühzeitige Identifizierung und Behandlung.**
-   **Ermöglicht die Entwicklung in Phasen mit unterschiedlichem Detaillierungsgrad (z.B. Prototypen).**
-   **Bessere Anpassung an sich ändernde Anforderungen.**

**Nachteile des Spiralmodells:**

-   **Komplexität des Modells kann die Planung und Steuerung erschweren.**
-   **Erfolgreiches Risikomanagement ist entscheidend.**
-   **Kann bei schlecht gemanagten Risiken zu Kosten- und Zeitüberschreitungen führen.**

## Das V-Modell

Das V-Modell ist eine Weiterentwicklung des Wasserfallmodells, das den Testaktivitäten explizit die entsprechenden Entwicklungsphasen gegenüberstellt. Es betont die Bedeutung von Tests während des gesamten Entwicklungsprozesses und stellt sicher, dass für jede Entwicklungsphase eine entsprechende Testphase geplant wird. Die Form des Modells ähnelt einem "V", wobei die linke Seite die Entwicklungsphasen (Anforderungsanalyse, Systementwurf, Komponentenentwurf, Moduldesign) und die rechte Seite die entsprechenden Testphasen (Akzeptanztest, Systemtest, Integrationstest, Komponententest) darstellt.

**Phasen des V-Modells (vereinfacht):**

-   **Linke Seite (Entwicklung):**
    -   Anforderungsanalyse -> Akzeptanztest
    -   Systementwurf -> Systemtest
    -   Komponentenentwurf -> Integrationstest
    -   Moduldesign -> Komponententest (Unit-Test)
-   **Rechte Seite (Test):**
    -   Komponententest (Unit-Test)
    -   Integrationstest
    -   Systemtest
    -   Akzeptanztest

**Merkmale des V-Modells:**

-   **Starke Betonung des Testens parallel zur Entwicklung.**
-   **Klare Zuordnung von Testphasen zu Entwicklungsphasen.**
-   **Erhöhte Qualitätssicherung durch frühzeitige Testplanung.**
-   **Kann in verschiedenen Detaillierungsgraden angewendet werden.**
-   **Grundlegender sequenzieller Ablauf, aber mit Rückkopplungsschleifen möglich.**

**Vorteile des V-Modells:**

-   **Verbesserte Qualität durch frühzeitige Testplanung und -durchführung.**
-   **Bessere Nachvollziehbarkeit des Testprozesses.**
-   **Erleichtert die Verknüpfung von Anforderungen mit Tests.**
-   **Kann an verschiedene Projektgrößen und -komplexitäten angepasst werden.**

**Nachteile des V-Modells:**

-   **Weniger flexibel bei späten Änderungen als iterative Modelle.**
-   **Starker Fokus auf Dokumentation kann aufwendig sein.**
-   **Iterationen und Rückkopplungen sind im Basismodell nicht explizit vorgesehen.**

## Vergleich der klassischen Modelle

| Merkmal         | Wasserfallmodell                         | Spiralmodell                             | V-Modell                               |
| --------------- | ----------------------------------------- | ---------------------------------------- | -------------------------------------- |
| **Ablauf** | Sequenziell, linear                       | Iterativ, zyklisch, risikogetrieben      | Sequenziell mit parallelem Testen       |
| **Flexibilität** | Gering                                    | Hoch                                     | Mittel                                 |
| **Risikomanagement** | Implizit (eher geringe Beachtung)       | Explizit und zentral                   | Implizit (Fokus auf Testen zur Risikominimierung) |
| **Testen** | Am Ende des Entwicklungsprozesses         | Integriert in jeden Zyklus (risikobasiert) | Parallel zu den Entwicklungsphasen        |
| **Anforderungen** | Stabil und gut verstanden erforderlich   | Anpassungsfähig an sich ändernde Anforderungen | Klare Anforderungen von Anfang an vorteilhaft |
| **Komplexität** | Einfach zu verstehen                     | Komplex                                  | Mittlere Komplexität                   |
| **Geeignet für** | Kleine, stabile Projekte                | Große, risikoreiche, dynamische Projekte   | Projekte mit starkem Qualitätsfokus    |

## Fazit

Die klassischen Vorgehensmodelle Wasserfallmodell, Spiralmodell und V-Modell bieten unterschiedliche Ansätze für die Strukturierung des Softwareentwicklungsprozesses. Das Wasserfallmodell eignet sich für Projekte mit stabilen Anforderungen und geringer Komplexität, während das Spiralmodell Flexibilität und Risikomanagement in den Vordergrund stellt. Das V-Modell betont die Bedeutung des Testens parallel zur Entwicklung, um die Qualität zu sichern. Die Wahl des geeigneten Modells hängt von den spezifischen Rahmenbedingungen und Anforderungen des jeweiligen Softwareprojekts ab.

## Links und Quellen

-   **Wasserfallmodell - Wikipedia:** [https://de.wikipedia.org/wiki/Wasserfallmodell](https://de.wikipedia.org/wiki/Wasserfallmodell)
-   **Spiralmodell - Wikipedia:** [https://de.wikipedia.org/wiki/Spiralmodell](https://de.wikipedia.org/wiki/Spiralmodell)
-   **V-Modell - Wikipedia:** [https://de.wikipedia.org/wiki/V-Modell](https://de.wikipedia.org/wiki/V-Modell)
-   **Software development process - Wikipedia (Englischsprachig):** [https://en.wikipedia.org/wiki/Software\_development\_process](https://en.wikipedia.org/wiki/Software_development_process) (Bietet eine gute Übersicht über verschiedene Modelle)
-   **Agile vs Waterfall: A Detailed Comparison (Englischsprachig):** [https://www.projectmanager.com/blog/agile-vs-waterfall](https://www.projectmanager.com/blog/agile-vs-waterfall) (Obwohl es um Agile vs. Wasserfall geht, werden die Grundlagen des Wasserfallmodells gut erklärt)

-----

> **Fehler gefunden?** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
