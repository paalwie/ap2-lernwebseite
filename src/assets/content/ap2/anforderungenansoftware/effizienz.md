# Programmieren von Softwarelösungen: Softwareanforderungen erfassen können - Effizienz (Performance)

## Einführung

Effizienz (oft auch als Performance bezeichnet) ist eine zentrale nicht-funktionale Anforderung, die beschreibt, wie gut eine Software Ressourcen (wie z.B. Rechenzeit, Speicher, Netzwerkbandbreite) nutzt, um ihre Funktionen unter bestimmten Bedingungen zu erfüllen. Effizienzanforderungen sind entscheidend für die Benutzererfahrung, die Skalierbarkeit des Systems und die Wirtschaftlichkeit des Betriebs. Die frühzeitige Erfassung und Berücksichtigung dieser Anforderungen im Softwareentwicklungsprozess ist unerlässlich.

## Bedeutung der Effizienz

-   **Benutzererfahrung:** Schnelle Reaktionszeiten und eine flüssige Bedienung tragen maßgeblich zur Zufriedenheit der Benutzer bei. Langsame oder träge Software kann zu Frustration und Ablehnung führen.
-   **Skalierbarkeit:** Effiziente Software kann eine größere Anzahl von Benutzern oder Daten verarbeiten, ohne dass die Leistung unakzeptabel abfällt oder die Hardwarekosten explodieren.
-   **Ressourcenverbrauch:** Effiziente Software nutzt die vorhandenen Hardware-Ressourcen optimal, was zu niedrigeren Betriebskosten (z.B. für Server, Energie) führen kann.
-   **Wettbewerbsvorteil:** Software mit guter Performance kann einen Wettbewerbsvorteil darstellen, insbesondere in zeitkritischen Anwendungen oder bei der Verarbeitung großer Datenmengen.
-   **Einhaltung von Service Level Agreements (SLAs):** In vielen kommerziellen Anwendungen sind Leistungsziele in SLAs festgelegt, deren Einhaltung kritisch ist.

## Erfassung von Effizienzanforderungen

Die Erfassung von Effizienzanforderungen erfordert die Berücksichtigung verschiedener Aspekte der Systemleistung unter verschiedenen Bedingungen.

**Fragestellungen und Techniken zur Erfassung:**

1.  **Identifizierung kritischer Operationen:**
    -   Welche Funktionen oder Operationen sind für die Benutzer am wichtigsten oder werden am häufigsten ausgeführt?
    -   Welche Operationen sind potenziell ressourcenintensiv?

2.  **Definition von Leistungskennzahlen (KPIs):**
    -   **Antwortzeit (Response Time):** Wie lange dauert es, bis das System auf eine Benutzeraktion reagiert? (z.B. "Die Antwortzeit für die Suche soll unter 2 Sekunden liegen.")
    -   **Durchsatz (Throughput):** Wie viele Transaktionen oder Operationen kann das System in einer bestimmten Zeiteinheit verarbeiten? (z.B. "Das System soll in der Lage sein, mindestens 1000 Bestellungen pro Minute zu verarbeiten.")
    -   **Latenz (Latency):** Die Verzögerung bei der Übertragung von Daten über ein Netzwerk. (z.B. "Die maximale Latenz für Datenbankabfragen soll X Millisekunden betragen.")
    -   **Ressourcenauslastung:** Wie viel CPU, Speicher, Festplatten-IO oder Netzwerkbandbreite darf das System unter Last maximal beanspruchen? (z.B. "Die CPU-Auslastung des Servers soll unter normaler Last 70% nicht überschreiten.")
    -   **Skalierbarkeit:** Wie verhält sich die Leistung des Systems bei steigender Benutzerzahl oder Datenmenge? (z.B. "Das System soll in der Lage sein, mit einer Verdoppelung der Benutzerzahl ohne signifikanten Leistungsabfall umzugehen.")

3.  **Berücksichtigung von Lastbedingungen:**
    -   **Normale Last:** Die typische oder durchschnittliche Nutzung des Systems.
    -   **Spitzenlast:** Die maximale erwartete Nutzung des Systems zu bestimmten Zeiten.
    -   **Stresstest:** Extrem hohe Lastbedingungen, um die Stabilität und die Grenzen des Systems zu testen.

4.  **Spezifizierung der Testumgebung:**
    -   Unter welchen Hardware- und Softwarebedingungen sollen die Effizienzanforderungen getestet werden? (z.B. spezifische Serverkonfiguration, Netzwerkbandbreite)

5.  **Einbeziehung von Benutzererwartungen:**
    -   Was erwarten die Benutzer in Bezug auf die Reaktionszeiten und die Gesamtperformance des Systems? (Benutzerbefragungen, Interviews)

6.  **Nutzung von Szenarien und Use Cases:**
    -   Ergänzen Sie Use Cases um spezifische Leistungsanforderungen für die beschriebenen Interaktionen. (z.B. "Beim Absenden des Formulars (Use Case X) soll die Verarbeitung innerhalb von Y Sekunden abgeschlossen sein.")

7.  **Prototyping und Performance-Tests:**
    -   Frühe Prototypen können verwendet werden, um erste Performance-Messungen durchzuführen und potenzielle Engpässe zu identifizieren.
    -   Planung und Durchführung von dedizierten Performance-Tests unter simulierten Lastbedingungen.

8.  **Berücksichtigung nicht-funktionaler Abhängigkeiten:**
    -   Welche Abhängigkeiten zu anderen Systemen oder Komponenten können die Effizienz beeinflussen? (z.B. Antwortzeiten externer APIs)

## Dokumentation von Effizienzanforderungen

Effizienzanforderungen sollten präzise und messbar dokumentiert werden, einschließlich der spezifischen KPIs, der Lastbedingungen und der Testumgebung. Dies kann in Form von:

-   **Nicht-funktionalen Anforderungsspezifikationen:** Detaillierte Beschreibungen der Leistungsziele mit quantitativen Werten.
-   **Performance-Testplänen und -berichten:** Beschreibung der Teststrategie, der Testfälle und der erzielten Ergebnisse.
-   **Service Level Agreements (SLAs):** Falls zutreffend, die vertraglich vereinbarten Leistungsziele.

**Beispiele für Effizienzanforderungen:**

-   "Das System soll in der Lage sein, 95% der Suchanfragen innerhalb von 1 Sekunde zu beantworten, wenn gleichzeitig 100 Benutzer aktiv sind."
-   "Die Batch-Verarbeitung der täglichen Verkaufsdaten soll nicht länger als 2 Stunden dauern."
-   "Die durchschnittliche CPU-Auslastung des Datenbankservers soll unter Spitzenlast 80% nicht überschreiten."

## Herausforderungen bei der Erfassung

-   **Spezifität:** Es kann schwierig sein, allgemeine Erwartungen an die Performance in konkrete, messbare Anforderungen zu übersetzen.
-   **Abhängigkeit von der Umgebung:** Die tatsächliche Effizienz hängt stark von der Hardware, der Netzwerkinfrastruktur und der Systemkonfiguration ab.
-   **Balance mit anderen Anforderungen:** Die Optimierung der Effizienz kann zu Kompromissen bei anderen Anforderungen (z.B. Entwicklungszeit, Kosten, Wartbarkeit) führen.
-   **Antizipieren zukünftiger Last:** Es kann schwierig sein, die zukünftige Benutzerzahl und das Datenvolumen genau vorherzusagen.

## Fazit

Die Erfassung von Effizienzanforderungen ist entscheidend für die Entwicklung leistungsfähiger und reaktionsschneller Software. Durch die Identifizierung kritischer Operationen, die Definition messbarer Leistungskennzahlen unter verschiedenen Lastbedingungen und die frühzeitige Durchführung von Performance-Tests können potenzielle Engpässe vermieden und die Benutzerzufriedenheit sichergestellt werden. Eine klare und präzise Dokumentation der Effizienzanforderungen ist unerlässlich für die erfolgreiche Entwicklung und den Betrieb der Software.

## Links und Quellen

-   **Wikipedia - Software Performance Testing:** [https://de.wikipedia.org/wiki/Softwaretest#Performanztests](https://de.wikipedia.org/wiki/Softwaretest#Performanztests)
-   **ISO/IEC 25010 - Performance efficiency:** [https://www.iso.org/standard/35733.html](https://www.iso.org/standard/35733.html) (Englischsprachig - Definiert Merkmale der Performance Efficiency)
-   **Google - Web Fundamentals - Optimize Website Speed:** [https://web.dev/optimize/](https://web.dev/optimize/) (Englischsprachig - Fokus auf Webperformance, aber viele Prinzipien sind allgemeingültig)
-   **Blazemeter (Perforce):** [https://www.blazemeter.com/](https://www.blazemeter.com/) (Englischsprachig - Ressourcen und Tools für Performance Testing)
-   **LoadRunner (Micro Focus):** (Ein bekanntes kommerzielles Tool für Performance Testing)
