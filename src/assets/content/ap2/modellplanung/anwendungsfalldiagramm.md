# Programmieren von Softwarelösungen: Planen mit geeigneten Modellen - UML-Anwendungsfalldiagramm

## Einführung

Das UML-Anwendungsfalldiagramm (Use Case Diagram) ist ein Verhaltensdiagramm in der Unified Modeling Language (UML), das die Funktionalität eines Systems aus der Sicht externer Akteure (Benutzer oder andere Systeme) darstellt. Es zeigt die Anwendungsfälle (Use Cases), die das System bietet, und die Akteure, die mit diesen Anwendungsfällen interagieren. Anwendungsfalldiagramme sind besonders nützlich in der frühen Phase der Softwareentwicklung, um die funktionalen Anforderungen des Systems zu erfassen und zu kommunizieren.

## Beschreibung des UML-Anwendungsfalldiagramms

Ein UML-Anwendungsfalldiagramm besteht hauptsächlich aus folgenden Elementen:

-   **Akteure (Actors):** Stellen externe Entitäten dar, die mit dem System interagieren. Ein Akteur kann ein Benutzer, ein anderes System oder ein externes Gerät sein. Akteure werden als Strichmännchen-Symbole dargestellt und befinden sich außerhalb der Systemgrenze.

-   **Anwendungsfälle (Use Cases):** Stellen eine Einheit von sinnvoller Funktionalität dar, die das System für einen Akteur bereitstellt. Ein Anwendungsfall beschreibt eine Interaktion zwischen einem oder mehreren Akteuren und dem System, um ein bestimmtes Ziel zu erreichen. Anwendungsfälle werden als Ellipsen innerhalb der Systemgrenze dargestellt und mit einem beschreibenden Namen versehen.

-   **Systemgrenze:** Ein Rechteck, das das zu modellierende System umschließt und die Anwendungsfälle innerhalb des Systems von den Akteuren außerhalb abgrenzt.

-   **Beziehungen:** Verbindungen zwischen Akteuren und Anwendungsfällen sowie Beziehungen zwischen Anwendungsfällen selbst. Die wichtigsten Beziehungen sind:
    -   **Assoziation:** Eine durchgezogene Linie zwischen einem Akteur und einem Anwendungsfall, die anzeigt, dass der Akteur an dem Anwendungsfall teilnimmt oder ihn initiiert.
    -   **Include-Beziehung (`<<include>>`):** Eine gerichtete, gestrichelte Linie mit einem Pfeil, der von einem Basis-Anwendungsfall zu einem enthaltenen Anwendungsfall zeigt. Der enthaltene Anwendungsfall ist ein obligatorischer Bestandteil des Basis-Anwendungsfalls und wird immer ausgeführt, wenn der Basis-Anwendungsfall ausgeführt wird.
    -   **Extend-Beziehung (`<<extend>>`):** Eine gerichtete, gestrichelte Linie mit einem Pfeil, der von einem Erweiterungs-Anwendungsfall zu einem Basis-Anwendungsfall zeigt. Der Erweiterungs-Anwendungsfall stellt eine optionale Erweiterung des Basis-Anwendungsfalls dar und wird nur unter bestimmten Bedingungen ausgeführt (die durch eine Erweiterungsbedingung angegeben werden).
    -   **Generalisierung (zwischen Akteuren):** Eine durchgezogene Linie mit einem nicht gefüllten, offenen Pfeil, der von einem spezialisierten Akteur zu einem allgemeineren Akteur zeigt. Dies bedeutet, dass der spezialisierte Akteur alle Interaktionen des allgemeineren Akteurs übernehmen kann und möglicherweise zusätzliche Interaktionen hat.

## Bedeutung des UML-Anwendungsfalldiagramms für die Planung von Softwarelösungen

-   **Erfassung funktionaler Anforderungen:** Anwendungsfalldiagramme helfen dabei, die funktionalen Anforderungen des Systems aus der Benutzerperspektive zu identifizieren und zu dokumentieren.
-   **Kommunikation mit Stakeholdern:** Sie dienen als einfaches und verständliches Kommunikationsmittel für Diskussionen mit Kunden, Endbenutzern und dem Entwicklungsteam über die Systemfunktionalität.
-   **Abgrenzung des Systemumfangs:** Die Systemgrenze im Diagramm hilft, klar zu definieren, welche Funktionalitäten innerhalb des Systems liegen und welche extern sind.
-   **Basis für die weitere Entwicklung:** Anwendungsfälle bilden oft die Grundlage für detailliertere Beschreibungen, Szenarien, Testfälle und die Planung der Implementierung.
-   **Benutzerzentriertes Design:** Durch die Fokussierung auf die Benutzerziele und Interaktionen unterstützen Anwendungsfalldiagramme einen benutzerzentrierten Entwicklungsansatz.
-   **Identifizierung von Akteuren:** Die Identifizierung der relevanten Akteure hilft, die verschiedenen Benutzergruppen und externen Systeme zu verstehen, die mit dem System interagieren werden.

## Schritte zur Erstellung eines UML-Anwendungsfalldiagramms

1.  **Identifizierung der Akteure:** Bestimmen Sie alle externen Entitäten (Benutzer, Systeme), die mit dem zu entwickelnden System interagieren werden.
2.  **Identifizierung der Anwendungsfälle:** Ermitteln Sie die Hauptaufgaben oder Ziele, die die Akteure mit dem System erreichen wollen. Jeder Anwendungsfall sollte einen messbaren Nutzen für den Akteur liefern.
3.  **Zeichnen der Systemgrenze:** Erstellen Sie ein Rechteck, das das System umschließt.
4.  **Platzieren der Anwendungsfälle:** Zeichnen Sie Ellipsen innerhalb der Systemgrenze für jeden identifizierten Anwendungsfall und benennen Sie sie klar und prägnant.
5.  **Platzieren der Akteure:** Zeichnen Sie Strichmännchen-Symbole außerhalb der Systemgrenze für jeden identifizierten Akteur.
6.  **Herstellen der Assoziationen:** Zeichnen Sie Linien, die jeden Akteur mit den Anwendungsfällen verbinden, an denen er beteiligt ist.
7.  **Identifizierung und Darstellung von Beziehungen zwischen Anwendungsfällen:** Untersuchen Sie, ob es Include- oder Extend-Beziehungen zwischen den Anwendungsfällen gibt und stellen Sie diese entsprechend dar.
8.  **Hinzufügen von Generalisierungen (optional):** Wenn es Hierarchien zwischen Akteuren gibt, stellen Sie diese mit Generalisierungsbeziehungen dar.
9.  **Beschreiben der Anwendungsfälle (optional, aber empfohlen):** Erstellen Sie für jeden Anwendungsfall eine detaillierte Beschreibung, die den Ablauf der Interaktion, Vor- und Nachbedingungen sowie mögliche Fehlerfälle beinhaltet.

## Beispiel eines einfachen UML-Anwendungsfalldiagramms

Nehmen wir ein einfaches Beispiel für ein Online-Buchhandlungssystem:

-   **Akteure:** `Kunde`, `Administrator`, `Zahlungssystem`
-   **Anwendungsfälle:** `Bücher durchsuchen`, `Buch zum Warenkorb hinzufügen`, `Warenkorb ansehen`, `Zur Kasse gehen`, `Bestellung aufgeben`, `Zahlung verarbeiten` (Include von `Bestellung aufgeben`), `Benutzer verwalten` (nur für `Administrator`), `Buchbestand verwalten` (nur für `Administrator`)

Das Diagramm würde die Systemgrenze mit den Anwendungsfällen innerhalb und den Akteuren außerhalb zeigen. Assoziationen würden die Interaktionen darstellen (z.B. `Kunde` ist mit `Bücher durchsuchen`, `Buch zum Warenkorb hinzufügen`, `Warenkorb ansehen`, `Zur Kasse gehen` und `Bestellung aufgeben` verbunden). Eine Include-Beziehung würde von `Bestellung aufgeben` zu `Zahlung verarbeiten` zeigen. Der `Administrator` wäre mit `Benutzer verwalten` und `Buchbestand verwalten` assoziiert. Das `Zahlungssystem` wäre mit `Zahlung verarbeiten` assoziiert.

## Vorteile des UML-Anwendungsfalldiagramms

-   **Einfache Verständlichkeit:** Die grafische Natur macht es für alle Beteiligten leicht verständlich.
-   **Fokus auf Benutzerinteraktionen:** Hilft, die Bedürfnisse und Ziele der Benutzer zu verstehen.
-   **Gute Grundlage für die Anforderungsanalyse:** Dient als Ausgangspunkt für detailliertere funktionale Spezifikationen.
-   **Unterstützt die Projektplanung:** Die Anzahl und Komplexität der Anwendungsfälle können bei der Aufwandsschätzung helfen.

## Nachteile des UML-Anwendungsfalldiagramms

-   **Beschreibt nicht das "Wie":** Konzentriert sich auf die Funktionalität ("Was"), nicht auf die Implementierung ("Wie").
-   **Kann bei sehr großen Systemen unübersichtlich werden.**
-   **Die Beziehungen zwischen Anwendungsfällen (Include, Extend) können manchmal schwer zu definieren sein.**

## Fazit

Das UML-Anwendungsfalldiagramm ist ein wertvolles Werkzeug für die frühe Planungsphase von Softwarelösungen. Es ermöglicht die Erfassung und Kommunikation der funktionalen Anforderungen aus der Sicht der Benutzer und anderer externer Systeme. Durch die Identifizierung von Akteuren und ihren Interaktionen mit den Anwendungsfällen hilft es, den Umfang des Systems zu definieren und eine gemeinsame Basis für die weitere Entwicklung zu schaffen. In Kombination mit detaillierten Anwendungsfallbeschreibungen und anderen UML-Diagrammen bietet es eine umfassende Sicht auf die funktionalen Aspekte eines Softwaresystems.

## Links und Quellen

-   **Wikipedia - UML-Anwendungsfalldiagramm:** [https://de.wikipedia.org/wiki/UML-Anwendungsfalldiagramm](https://de.wikipedia.org/wiki/UML-Anwendungsfalldiagramm)
-   **UML Use Case Diagram - Tutorialspoint:** [https://www.tutorialspoint.com/uml/uml_use_case_diagram.htm](https://www.tutorialspoint.com/uml/uml_use_case_diagram.htm) (Englischsprachig - Einführung)
-   **UML 2.5 Specification - Use Case Diagrams:** [https://www.omg.org/spec/UML/2.5.1/PDF#page=159](https://www.omg.org/spec/UML/2.5.1/PDF#page=159) (Englischsprachig - Offizielle Spezifikation)
-   **Visual Paradigm - UML Use Case Diagram:** [https://www.visual-paradigm.com/guide/uml/uml-use-case-diagram/](https://www.visual-paradigm.com/guide/uml/uml-use-case-diagram/) (Englischsprachig - Umfassender Leitfaden)
-   **Draw.io (diagrams.net):** [https://app.diagrams.net/](https://app.diagrams.net/) (Kostenloses Tool zur Erstellung von UML-Diagrammen)
