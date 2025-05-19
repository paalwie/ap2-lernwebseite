# Konzipieren und Umsetzen von kundenspezifischen Softwareanwendungen: UML-Diagramme erstellen können - Aktivitätsdiagramm

## Einführung

Das UML-Aktivitätsdiagramm (Activity Diagram) ist eine dynamische Verhaltensdiagrammart der Unified Modeling Language (UML). Es beschreibt den sequenziellen und parallelen Ablauf von Aktivitäten und Aktionen innerhalb eines Prozesses, eines Anwendungsfalls oder einer Methode. Aktivitätsdiagramme ähneln Flussdiagrammen und eignen sich gut, um den Workflow von Operationen, die Entscheidungen und die Parallelität von Aktivitäten zu visualisieren.

## Grundlegende Elemente eines Aktivitätsdiagramms

Ein Aktivitätsdiagramm besteht hauptsächlich aus folgenden Elementen:

-   **Aktivitäten (Activities):** Repräsentieren eine Einheit von Arbeit, die ausgeführt werden muss. Sie werden als abgerundete Rechtecke mit einer kurzen Beschreibung der Aktivität dargestellt. Aktivitäten können atomar sein oder aus einer Komposition anderer Aktivitäten bestehen (partitionierte Aktivitäten).

-   **Aktionen (Actions):** Sind atomare, nicht weiter zerlegbare Aktivitäten innerhalb eines Prozesses. Sie werden ebenfalls als abgerundete Rechtecke dargestellt.

-   **Ablaufsteuerungselemente (Control Flow Elements):** Steuern den Ablauf der Aktivitäten:
    -   **Initialknoten (Initial Node):** Der Startpunkt des Prozesses. Er wird als gefüllter schwarzer Kreis dargestellt.
    -   **Endknoten (Activity Final Node):** Das Ende des gesamten Prozesses. Er wird als Kreis mit einem kleineren gefüllten schwarzen Kreis darin dargestellt (Bullseye). Es kann mehrere Endknoten in einem Diagramm geben.
    -   **Entscheidungsknoten (Decision Node):** Stellt einen Punkt im Ablauf dar, an dem basierend auf einer Bedingung verschiedene Pfade genommen werden können. Er wird als Raute dargestellt. Ausgehende Übergänge von einem Entscheidungsknoten sind in der Regel mit Bedingungen (Guards) in eckigen Klammern beschriftet.
    -   **Merge-Knoten (Merge Node):** Dient dazu, mehrere alternative Pfade, die von Entscheidungsknoten kamen, wieder zu einem einzigen Ablaufpfad zusammenzuführen. Er wird ebenfalls als Raute dargestellt.
    -   **Fork-Knoten (Fork Node):** Teilt einen einzelnen eingehenden Ablauf in zwei oder mehr parallele Abläufe auf. Er wird als horizontaler oder vertikaler Balken dargestellt.
    -   **Join-Knoten (Join Node):** Synchronisiert mehrere parallele Abläufe, die von einem Fork-Knoten kamen. Der Ablauf setzt erst fort, wenn alle eingehenden Abläufe den Join-Knoten erreicht haben. Er wird ebenfalls als horizontaler oder vertikaler Balken dargestellt.

-   **Objektknoten (Object Nodes):** Stellen Objekte oder Daten dar, die zwischen Aktivitäten fließen. Sie werden als Rechtecke mit dem Namen des Objekts dargestellt und können an Aktivitäten angehängt sein, um Ein- und Ausgaben zu kennzeichnen.

-   **Kontrollflusskanten (Control Flow Edges):** Gerichtete Pfeile, die die Reihenfolge der Aktivitäten und Aktionen im Ablauf darstellen. Sie verbinden die verschiedenen Knoten im Diagramm. Übergänge von Entscheidungsknoten können mit Bedingungen (Guards) beschriftet sein.

-   **Objektflusskanten (Object Flow Edges):** Gerichtete Pfeile, die den Fluss von Objekten oder Daten zwischen Objektknoten und Aktivitäten darstellen.

-   **Partitionen (Partitions oder Swimlanes):** Dienen zur Gruppierung von Aktivitäten, die von einer bestimmten Person, Rolle, Abteilung oder einem Systemkomponente ausgeführt werden. Sie werden als vertikale oder horizontale Spalten oder Zeilen dargestellt und helfen, die Verantwortlichkeiten im Prozess zu visualisieren.

-   **Signalempfangs- und Signalversandknoten (Signal Receipt and Signal Send Nodes):** Stellen das Senden und Empfangen von asynchronen Signalen dar.

-   **Zeitereignisknoten (Time Event Nodes):** Stellen das Eintreten eines bestimmten Zeitpunkts oder einer Zeitdauer dar.

## Erstellung eines Aktivitätsdiagramms

Die Erstellung eines Aktivitätsdiagramms umfasst typischerweise folgende Schritte:

1.  **Identifizierung des Prozesses oder Anwendungsfalls:** Bestimme den Prozess oder den Anwendungsfall, dessen Ablauf modelliert werden soll.

2.  **Bestimmung des Start- und Endpunkts:** Zeichne den initialen Knoten (Start) und den/die finalen Knoten (Ende) des Ablaufs.

3.  **Identifizierung der Hauptaktivitäten und Aktionen:** Ermittle die wichtigsten Schritte oder Aufgaben, die im Prozess ausgeführt werden müssen, und stelle sie als Aktivitäten oder Aktionen dar.

4.  **Anordnung der Aktivitäten und Aktionen:** Ordne die Aktivitäten und Aktionen in der Reihenfolge ihrer Ausführung an und verbinde sie mit Kontrollflusskanten.

5.  **Hinzufügen von Entscheidungspunkten:** Wenn im Ablauf Entscheidungen getroffen werden müssen, füge Entscheidungsknoten hinzu und kennzeichne die ausgehenden Pfade mit entsprechenden Bedingungen (Guards).

6.  **Modellierung von Parallelität:** Wenn Aktivitäten parallel ausgeführt werden können, verwende Fork- und Join-Knoten, um die Aufteilung und Synchronisation der parallelen Abläufe darzustellen.

7.  **Verwendung von Objektknoten (falls zutreffend):** Wenn Objekte oder Daten zwischen Aktivitäten fließen, stelle diese mit Objektknoten und Objektflusskanten dar.

8.  **Verwendung von Partitionen (Swimlanes) (falls zutreffend):** Wenn verschiedene Verantwortlichkeiten im Prozess bestehen, gruppiere die zugehörigen Aktivitäten in Partitionen.

9.  **Hinzufügen von Signalen und Zeitereignissen (falls zutreffend):** Bei asynchronen Abläufen oder zeitgesteuerten Ereignissen verwende die entsprechenden Knoten.

10. **Verfeinerung und Überprüfung:** Überprüfe das Aktivitätsdiagramm, um sicherzustellen, dass es den Ablauf des Prozesses korrekt und vollständig darstellt und für alle Beteiligten verständlich ist. Gehe den Ablauf gedanklich mit verschiedenen Szenarien durch.

## Bedeutung von Aktivitätsdiagrammen

Aktivitätsdiagramme sind in der Softwareentwicklung und im Business Process Modeling von großer Bedeutung, da sie:

-   **Den Ablauf von Prozessen visualisieren:** Sie bieten eine klare grafische Darstellung der sequenziellen und parallelen Schritte.
-   **Komplexe Workflows modellieren:** Sie ermöglichen die Darstellung von Entscheidungen, Verzweigungen und Synchronisationen.
-   **Das Verständnis von Prozessen fördern:** Sie helfen Entwicklern, Analysten und anderen Beteiligten, den Ablauf von Operationen zu verstehen.
-   **Die Grundlage für die Implementierung bilden:** Sie können als Spezifikation für die Implementierung von Algorithmen oder Geschäftsprozessen dienen.
-   **Die Identifizierung von Engpässen und Verbesserungspotenzialen ermöglichen:** Durch die Visualisierung des Ablaufs können ineffiziente Schritte oder Parallelisierungsmöglichkeiten erkannt werden.
-   **Die Kommunikation zwischen verschiedenen Teams und Stakeholdern erleichtern:** Sie bieten eine gemeinsame visuelle Sprache für die Diskussion von Prozessen.

## Werkzeuge zur Erstellung von UML-Aktivitätsdiagrammen

Viele der bereits für die anderen UML-Diagrammtypen genannten Werkzeuge unterstützen auch die Erstellung von Aktivitätsdiagrammen:

-   **Standalone UML-Modellierungswerkzeuge:** z.B. Enterprise Architect, Lucidchart, draw.io (diagrams.net), Umbrello.
    -   **Link (Enterprise Architect - Sparx Systems):** [https://sparxsystems.com/products/ea/index.html](https://sparxsystems.com/products/ea/index.html)
    -   **Link (Lucidchart):** [https://www.lucidchart.com/](https://www.lucidchart.com/)
    -   **Link (draw.io - diagrams.net):** [https://app.diagrams.net/](https://app.diagrams.net/)
    -   **Link (Umbrello - KDE):** [https://umbrello.kde.org/](https://umbrello.kde.org/)
-   **Integrierte UML-Funktionalität in IDEs:** Viele IDEs bieten ebenfalls Unterstützung für Aktivitätsdiagramme, oft durch Plugins.
    -   **Link (UML Plugin für IntelliJ IDEA):** Suche im IntelliJ IDEA Plugin Marketplace nach "UML".
    -   **Link (UML Plugin für Eclipse):** Suche im Eclipse Marketplace nach "UML".
    -   **Link (UML Unterstützung in Visual Studio):** [https://learn.microsoft.com/en-us/visualstudio/modeling/create-uml-activity-diagrams?view=vs-2022](https://learn.microsoft.com/en-us/visualstudio/modeling/create-uml-activity-diagrams?view=vs-2022)

## Fazit

Das UML-Aktivitätsdiagramm ist ein wertvolles Werkzeug zur Modellierung des Ablaufs von Aktivitäten und Aktionen in einem System oder Geschäftsprozess. Durch die Darstellung von sequenziellen und parallelen Abläufen, Entscheidungen und Synchronisationen ermöglicht es ein klares Verständnis komplexer Workflows und dient als wichtige Grundlage für Design, Implementierung und Prozessverbesserung. Die Fähigkeit, Aktivitätsdiagramme zu erstellen und zu interpretieren, ist eine wichtige Kompetenz für Softwareentwickler, Business-Analysten und Prozessmanager.

## Links und Quellen

-   **Activity diagram - Wikipedia (Deutsch):** [https://de.wikipedia.org/wiki/Aktivit%C3%A4tsdiagramm](https://de.wikipedia.org/wiki/Aktivit%C3%A4tsdiagramm)
-   **UML activity diagram - Wikipedia (Englischsprachig):** [https://en.wikipedia.org/wiki/Activity\_diagram](https://en.wikipedia.org/wiki/Activity_diagram)
-   **UML 2.5 Specification (Offizielle Spezifikation der UML):** [https://www.omg.org/spec/UML/2.5.1/](https://www.omg.org/spec/UML/2.5.1/) (Kapitel zu Aktivitätsdiagrammen)
-   **Tutorials und Anleitungen zur Erstellung von UML-Aktivitätsdiagrammen (z.B. auf Visual Paradigm, Lucidchart).**
    -   **Link (UML Activity Diagram Tutorial - Visual Paradigm):** [https://www.visual-paradigm.com/tutorials/uml-activity-diagram/](https://www.visual-paradigm.com/tutorials/uml-activity-diagram/)
    -   **Link (UML Activity Diagram Tutorial - Lucidchart):** [https://www.lucidchart.com/pages/de/tutorial/uml-aktivitatsdiagramm](https://www.lucidchart.com/pages/de/tutorial/uml-aktivitatsdiagramm)
-   **Bücher über UML und Geschäftsprozessmodellierung.**

-----

> **Fehler gefunden?** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
