# Programmieren von Softwarelösungen: Cyber-physische Systeme beschreiben und erweitern können - Abfragerhythmus planen

## Einführung

In Cyber-physischen Systemen (CPS) ist die Planung des Abfragerhythmus für Sensoren und Aktoren entscheidend für die Funktionalität, Performance, Energieeffizienz und Zuverlässigkeit des Gesamtsystems. Der Abfragerhythmus bestimmt, wie oft Sensoren nach Daten abgefragt und wie oft Aktoren gesteuert werden. Eine schlecht geplante Abfrage kann zu Datenverlust, ineffizienter Ressourcennutzung oder sogar zu instabilem Systemverhalten führen.

## Bedeutung der Planung des Abfragerhythmus

-   **Erfassung relevanter Daten:** Der Abfragerhythmus muss so gewählt werden, dass alle relevanten Veränderungen in der physikalischen Umgebung rechtzeitig erfasst werden. Eine zu langsame Abfrage kann wichtige Ereignisse verpassen.

-   **Rechtzeitige Steuerung von Aktoren:** Aktoren müssen rechtzeitig angesteuert werden, um die gewünschten physikalischen Aktionen auszuführen und auf Veränderungen in der Umgebung zu reagieren.

-   **Performance und Reaktionsfähigkeit:** Ein angemessener Abfragerhythmus gewährleistet, dass das CPS schnell und effizient auf Ereignisse reagieren kann. Eine zu hohe Abfragerate kann die Rechenlast unnötig erhöhen, während eine zu niedrige die Reaktionsfähigkeit beeinträchtigt.

-   **Energieeffizienz:** Häufige Abfragen und Ansteuerungen verbrauchen mehr Energie. Insbesondere in batteriebetriebenen CPS ist es wichtig, den Abfragerhythmus zu optimieren, um die Batterielaufzeit zu maximieren.

-   **Datenintegrität:** Der Abfragerhythmus kann die Integrität der erfassten Daten beeinflussen. Eine zu schnelle Abfrage kann zu redundanten oder verrauschten Daten führen, während eine zu langsame wichtige Details verfehlen kann.

-   **Systemlast:** Die Häufigkeit der Sensorabfragen und Aktoransteuerungen beeinflusst die Auslastung der Recheneinheit, der Kommunikationskanäle und anderer Systemressourcen.

## Faktoren, die den Abfragerhythmus beeinflussen

Die Planung des optimalen Abfragerhythmus hängt von verschiedenen Faktoren ab:

-   **Dynamik der physikalischen Prozesse:** Wie schnell ändern sich die relevanten physikalischen Größen, die erfasst oder beeinflusst werden sollen? Schnell veränderliche Prozesse erfordern höhere Abfrageraten.

-   **Anforderungen der Anwendung:** Welche Reaktionszeiten und welche Genauigkeit sind für die Funktionalität des CPS erforderlich?

-   **Fähigkeiten der Sensoren und Aktoren:** Was ist die maximale Abtastrate der Sensoren und die maximale Ansteuerungsfrequenz der Aktoren? Gibt es Einschränkungen hinsichtlich der Latenz?

-   **Verfügbare Rechenleistung:** Wie viel Rechenleistung steht für die Verarbeitung der Sensordaten und die Berechnung der Ansteuersignale zur Verfügung?

-   **Energiebudget:** Wie viel Energie darf für die Sensorabfragen und Aktoransteuerungen aufgewendet werden?

-   **Kommunikationsbandbreite:** Wenn Sensoren und Aktoren über ein Netzwerk angebunden sind, welche Bandbreite steht für die Datenübertragung zur Verfügung?

-   **Priorität verschiedener Aufgaben:** Müssen einige Sensoren oder Aktoren häufiger abgefragt oder angesteuert werden als andere?

## Strategien zur Planung des Abfragerhythmus

Es gibt verschiedene Strategien zur Planung des Abfragerhythmus in CPS:

-   **Fester Abfragerhythmus:** Sensoren werden in regelmäßigen Zeitintervallen abgefragt und Aktoren in festen Zyklen angesteuert. Dies ist einfach zu implementieren, kann aber ineffizient sein, wenn sich die Umgebungsbedingungen nicht konstant ändern.

-   **Ereignisgesteuerter Abfragerhythmus:** Sensoren werden nur dann abgefragt oder Aktoren nur dann angesteuert, wenn ein bestimmtes Ereignis eintritt oder eine bestimmte Bedingung erfüllt ist. Dies kann die Ressourcennutzung optimieren, erfordert aber eine zuverlässige Ereigniserkennung.

-   **Adaptiver Abfragerhythmus:** Der Abfragerhythmus wird dynamisch an die aktuellen Bedingungen angepasst. Wenn sich die Umgebung schnell ändert oder eine hohe Präzision erforderlich ist, wird die Abfragerate erhöht. In stabilen Phasen kann die Rate reduziert werden, um Energie zu sparen.

-   **Prioritätsgesteuerter Abfragerhythmus:** Verschiedenen Sensoren und Aktoren werden Prioritäten zugewiesen, und der Abfragerhythmus wird entsprechend dieser Prioritäten geplant. Kritische Sensoren und Aktoren werden häufiger bedient als weniger wichtige.

-   **Kombination von Strategien:** Oft ist eine Kombination verschiedener Strategien am effektivsten. Beispielsweise können kritische Sensoren mit einem festen, hohen Rhythmus abgefragt werden, während weniger wichtige ereignisgesteuert oder mit einem adaptiven Rhythmus bedient werden.

## Planungsschritte für den Abfragerhythmus

Die Planung eines geeigneten Abfragerhythmus umfasst typischerweise folgende Schritte:

1.  **Analyse der Systemanforderungen:** Welche Daten müssen erfasst werden? Welche Aktionen müssen ausgeführt werden? Welche Reaktionszeiten und Genauigkeiten sind erforderlich?

2.  **Charakterisierung der Sensoren und Aktoren:** Welche Abtastraten und Ansteuerungsfrequenzen sind möglich? Welche Latenzen sind zu erwarten?

3.  **Bewertung der Dynamik der physikalischen Prozesse:** Wie schnell ändern sich die relevanten Größen?

4.  **Festlegung von Prioritäten:** Welche Sensoren und Aktoren sind kritisch für die Systemfunktion und erfordern möglicherweise höhere Abfrageraten?

5.  **Auswahl einer geeigneten Abfragestrategie (oder einer Kombination von Strategien):** Fester Rhythmus, ereignisgesteuert, adaptiv, prioritätsgesteuert oder eine Mischung.

6.  **Bestimmung der konkreten Abfrageintervalle oder Ereignisschwellenwerte:** Für einen festen Rhythmus: Wie groß ist das Zeitintervall zwischen den Abfragen? Für einen ereignisgesteuerten Rhythmus: Welche Ereignisse lösen eine Abfrage aus? Für einen adaptiven Rhythmus: Welche Kriterien führen zu einer Änderung der Abfragerate?

7.  **Implementierung des Abfragerhythmus in der CPS-Software:** Dies kann die Verwendung von Timern, Interrupts oder ereignisbasierten Mechanismen umfassen.

8.  **Test und Optimierung:** Der gewählte Abfragerhythmus muss in der realen oder simulierten Umgebung getestet und bei Bedarf optimiert werden, um die Systemleistung, Energieeffizienz und Zuverlässigkeit zu gewährleisten.

## Erweiterung von CPS und der Abfragerhythmus

Bei der Erweiterung eines CPS um neue Sensoren und Aktoren muss der bestehende Abfragerhythmus möglicherweise angepasst werden:

-   **Integration neuer Sensoren:** Der Abfragerhythmus muss so erweitert werden, dass die neuen Sensoren in einer geeigneten Frequenz abgefragt werden, basierend auf ihren Eigenschaften und den Anforderungen der neuen Funktionalität.

-   **Ansteuerung neuer Aktoren:** Für neue Aktoren müssen Ansteuerungszyklen und -frequenzen geplant werden, die mit ihren Spezifikationen und den gewünschten Aktionen übereinstimmen.

-   **Auswirkungen auf die Systemlast:** Die Integration neuer Sensoren und Aktoren kann die Gesamtlast des CPS erhöhen. Der Abfragerhythmus aller Komponenten muss möglicherweise neu bewertet werden, um sicherzustellen, dass die Systemressourcen nicht überlastet werden.

-   **Energieverbrauch:** Zusätzliche Sensoren und Aktoren können den Energieverbrauch erhöhen. Der Abfragerhythmus der erweiterten Komponenten sollte unter Berücksichtigung des Energiebudgets geplant werden.

## Fazit

Die Planung eines geeigneten Abfragerhythmus für Sensoren und Aktoren ist ein kritischer Aspekt bei der Entwicklung und Erweiterung von Cyber-physischen Systemen. Eine sorgfältige Analyse der Systemanforderungen, der Eigenschaften der Komponenten und der Dynamik der physikalischen Prozesse ist erforderlich, um eine Strategie zu wählen, die eine effiziente Datenerfassung, eine rechtzeitige Steuerung, eine gute Performance und eine angemessene Energieeffizienz gewährleistet. Bei der Erweiterung von CPS muss der Abfragerhythmus an die neuen Komponenten angepasst und hinsichtlich seiner Auswirkungen auf die Systemlast und den Energieverbrauch neu bewertet werden.

## Links und Quellen

-   **Sampling (signal processing) - Wikipedia:** [https://de.wikipedia.org/wiki/Abtastung](https://de.wikipedia.org/wiki/Abtastung)
-   **Real-time computing - Wikipedia:** [https://de.wikipedia.org/wiki/Echtzeitverarbeitung](https://de.wikipedia.org/wiki/Echtzeitverarbeitung)
-   **Event-driven architecture - Wikipedia:** [https://de.wikipedia.org/wiki/Ereignisgesteuerte\_Architektur](https://de.wikipedia.org/wiki/Ereignisgesteuerte_Architektur)
-   **Applikationshinweise und Best Practices zur Sensorabfrage und Aktoransteuerung von Herstellern von Mikrocontrollern und Embedded-Systemen (z.B. STMicroelectronics, NXP, Texas Instruments).**
-   **Artikel und Tutorials zum Thema Echtzeitprogrammierung und Ressourcenmanagement in eingebetteten Systemen.**
