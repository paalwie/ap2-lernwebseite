# Konzipieren und Umsetzen von kundenspezifischen Softwareanwendungen: UML-Diagramme erstellen können - Anwendungsfalldiagramm

## Einführung

Das UML-Anwendungsfalldiagramm (Use Case Diagram) ist eine Diagrammart der Unified Modeling Language (UML), die die funktionalen Anforderungen eines Systems aus der Sicht der externen Akteure (Benutzer oder andere Systeme) darstellt. Es zeigt, welche Interaktionen zwischen den Akteuren und dem System möglich sind, indem es Anwendungsfälle und die Beziehungen zwischen ihnen und den Akteuren visualisiert. Anwendungsfalldiagramme sind besonders nützlich in den frühen Phasen der Softwareentwicklung, um die Systemanforderungen zu erfassen und zu kommunizieren.

## Grundlegende Elemente eines Anwendungsfalldiagramms

Ein Anwendungsfalldiagramm besteht hauptsächlich aus folgenden Elementen:

-   **Akteure (Actors):** Repräsentieren externe Entitäten, die mit dem System interagieren. Das können menschliche Benutzer, andere Softwaresysteme oder Hardwaregeräte sein. Akteure werden als stilisierte Strichmännchen dargestellt und befinden sich außerhalb des Systems. Ihre Namen stehen unter dem Symbol.

-   **Anwendungsfälle (Use Cases):** Repräsentieren eine spezifische Funktionalität oder ein Ziel, das ein Akteur durch die Interaktion mit dem System erreichen kann. Sie werden als Ellipsen innerhalb der Systemgrenze dargestellt und haben beschreibende Namen, die typischerweise Verben enthalten (z.B. "Kundenkonto erstellen", "Bestellung aufgeben").

-   **Systemgrenze (System Boundary):** Ein Rechteck, das das zu modellierende System umschließt und die Anwendungsfälle innerhalb des Systems von den Akteuren außerhalb abgrenzt.

-   **Beziehungen:** Stellen die Verbindungen zwischen Akteuren und Anwendungsfällen sowie zwischen Anwendungsfällen selbst dar:
    -   **Assoziation:** Eine durchgezogene Linie zwischen einem Akteur und einem Anwendungsfall, die anzeigt, dass der Akteur an dem Anwendungsfall teilnimmt oder ihn initiiert.
    -   **«include» (Einschließen):** Eine gerichtete, gestrichelte Linie mit einem offenen Pfeil, die von einem Basis-Anwendungsfall zu einem eingeschlossenen Anwendungsfall zeigt, mit dem Stereotyp `«include»` beschriftet. Der eingeschlossene Anwendungsfall ist ein Teil des Basis-Anwendungsfalls und wird immer ausgeführt, wenn der Basis-Anwendungsfall ausgeführt wird. Er dient dazu, gemeinsame Funktionalitäten auszulagern und Redundanz zu vermeiden.
    -   **«extend» (Erweitern):** Eine gerichtete, gestrichelte Linie mit einem offenen Pfeil, die von einem Erweiterungs-Anwendungsfall zu einem Basis-Anwendungsfall zeigt, mit dem Stereotyp `«extend»` beschriftet. Der Erweiterungs-Anwendungsfall stellt eine optionale oder bedingte Erweiterung des Basis-Anwendungsfalls dar, die nur unter bestimmten Bedingungen ausgeführt wird. Die Erweiterungsstelle (Extension Point) im Basis-Anwendungsfall definiert, wo die Erweiterung stattfinden kann.
    -   **Generalisierung (Verallgemeinerung) von Akteuren:** Eine durchgezogene Linie mit einem leeren, nicht ausgefüllten Pfeil, die von einem spezialisierten Akteur zu einem allgemeineren Akteur zeigt. Dies bedeutet, dass der spezialisierte Akteur alle Interaktionen des allgemeineren Akteurs übernehmen kann und möglicherweise zusätzliche Interaktionen hat.
    -   **Generalisierung (Verallgemeinerung) von Anwendungsfällen:** Eine durchgezogene Linie mit einem leeren, nicht ausgefüllten Pfeil, die von einem spezialisierten Anwendungsfall zu einem allgemeineren Anwendungsfall zeigt. Dies deutet darauf hin, dass der spezialisierte Anwendungsfall eine spezifischere Form des allgemeineren Anwendungsfalls ist.

## Erstellung eines Anwendungsfalldiagramms

Die Erstellung eines Anwendungsfalldiagramms umfasst typischerweise folgende Schritte:

1.  **Identifizierung der Akteure:** Bestimme alle externen Entitäten (Benutzer, Systeme), die mit dem zu modellierenden System interagieren müssen oder ein Interesse daran haben.

2.  **Identifizierung der Anwendungsfälle:** Ermittle die Hauptziele oder Aufgaben, die die Akteure mithilfe des Systems erreichen wollen. Jeder Anwendungsfall sollte einen für den Akteur wertvollen Nutzen darstellen.

3.  **Abgrenzung des Systems:** Zeichne die Systemgrenze, um die Anwendungsfälle innerhalb des Systems von den Akteuren außerhalb zu unterscheiden.

4.  **Zeichnen der Assoziationen:** Verbinde jeden Akteur mit den Anwendungsfällen, an denen er beteiligt ist oder die er initiiert.

5.  **Identifizierung und Darstellung von Beziehungen zwischen Anwendungsfällen:** Untersuche, ob es Anwendungsfälle gibt, die gemeinsame Funktionalitäten nutzen (für «include») oder optionale Erweiterungen darstellen (für «extend»). Stelle diese Beziehungen entsprechend dar.

6.  **Organisation des Diagramms:** Ordne die Elemente so an, dass das Diagramm klar und leicht verständlich ist. Akteure werden üblicherweise links oder rechts des Systems platziert, während die Anwendungsfälle innerhalb der Systemgrenze liegen.

7.  **Beschriftung der Elemente:** Stelle sicher, dass alle Akteure und Anwendungsfälle aussagekräftige Namen haben und dass die Beziehungen korrekt beschriftet sind (insbesondere bei «include» und «extend»).

8.  **Verfeinerung und Überprüfung:** Überprüfe das Diagramm mit den Stakeholdern, um sicherzustellen, dass es die funktionalen Anforderungen korrekt und vollständig erfasst.

## Bedeutung von Anwendungsfalldiagrammen

Anwendungsfalldiagramme sind in der Softwareentwicklung von großer Bedeutung, da sie:

-   **Die funktionalen Anforderungen aus der Benutzerperspektive darstellen:** Sie helfen, das "Was" des Systems zu definieren, d.h., welche Funktionalitäten das System bieten soll.
-   **Die Kommunikation mit Stakeholdern erleichtern:** Sie sind relativ einfach zu verstehen und ermöglichen es, Anforderungen mit Kunden, Endbenutzern und anderen Nicht-Technikern zu diskutieren und zu validieren.
-   **Die Grundlage für weitere Entwicklungsaktivitäten bilden:** Sie dienen als Ausgangspunkt für die Erstellung von detaillierteren Spezifikationen, Testfällen und der Benutzeroberfläche.
-   **Den Umfang des Projekts definieren:** Sie helfen dabei, die Grenzen des zu entwickelnden Systems festzulegen.
-   **Die Priorisierung von Anforderungen unterstützen:** Anwendungsfälle können nach ihrer Wichtigkeit für die Akteure priorisiert werden.
-   **Ein gemeinsames Verständnis fördern:** Sie stellen sicher, dass alle Beteiligten ein gemeinsames Bild davon haben, was das System leisten soll.

## Werkzeuge zur Erstellung von UML-Anwendungsfalldiagrammen

Viele der bereits für Klassendiagramme genannten UML-Modellierungswerkzeuge unterstützen auch die Erstellung von Anwendungsfalldiagrammen:

-   **Standalone UML-Modellierungswerkzeuge:** z.B. Enterprise Architect, Lucidchart, draw.io (diagrams.net), Umbrello.
    -   **Link (Enterprise Architect - Sparx Systems):** [https://sparxsystems.com/products/ea/index.html](https://sparxsystems.com/products/ea/index.html)
    -   **Link (Lucidchart):** [https://www.lucidchart.com/](https://www.lucidchart.com/)
    -   **Link (draw.io - diagrams.net):** [https://app.diagrams.net/](https://app.diagrams.net/)
    -   **Link (Umbrello - KDE):** [https://umbrello.kde.org/](https://umbrello.kde.org/)
-   **Integrierte UML-Funktionalität in IDEs:** Viele IDEs bieten ebenfalls Unterstützung für Anwendungsfalldiagramme, oft durch Plugins.
    -   **Link (UML Plugin für IntelliJ IDEA):** Suche im IntelliJ IDEA Plugin Marketplace nach "UML".
    -   **Link (UML Plugin für Eclipse):** Suche im Eclipse Marketplace nach "UML".
    -   **Link (UML Unterstützung in Visual Studio):** [https://learn.microsoft.com/en-us/visualstudio/modeling/create-uml-use-case-diagrams?view=vs-2022](https://learn.microsoft.com/en-us/visualstudio/modeling/create-uml-use-case-diagrams?view=vs-2022)

## Fazit

Das UML-Anwendungsfalldiagramm ist ein wertvolles Werkzeug, um die funktionalen Anforderungen eines Systems aus der Benutzerperspektive zu erfassen und zu kommunizieren. Durch die Darstellung von Akteuren, Anwendungsfällen und deren Beziehungen ermöglicht es ein gemeinsames Verständnis der Systemfunktionalität und bildet eine wichtige Grundlage für die weitere Entwicklung. Die Fähigkeit, Anwendungsfalldiagramme zu erstellen und zu interpretieren, ist eine wesentliche Kompetenz für Softwareentwickler und Business-Analysten.

## Links und Quellen

-   **Use case diagram - Wikipedia (Deutsch):** [https://de.wikipedia.org/wiki/Anwendungsfalldiagramm](https://de.wikipedia.org/wiki/Anwendungsfalldiagramm)
-   **Use case diagram - Wikipedia (Englischsprachig):** [https://en.wikipedia.org/wiki/Use\_case\_diagram](https://en.wikipedia.org/wiki/Use_case_diagram)
-   **UML 2.5 Specification (Offizielle Spezifikation der UML):** [https://www.omg.org/spec/UML/2.5.1/](https://www.omg.org/spec/UML/2.5.1/) (Kapitel zu Anwendungsfalldiagrammen)
-   **Tutorials und Anleitungen zur Erstellung von UML-Anwendungsfalldiagrammen (z.B. auf Visual Paradigm, Lucidchart).**
    -   **Link (UML Use Case Diagram Tutorial - Visual Paradigm):** [https://www.visual-paradigm.com/tutorials/uml-use-case-diagram/](https://www.visual-paradigm.com/tutorials/uml-use-case-diagram/)
    -   **Link (UML Use Case Diagram Tutorial - Lucidchart):** [https://www.lucidchart.com/pages/de/tutorial/uml-anwendungsfalldiagramm](https://www.lucidchart.com/pages/de/tutorial/uml-anwendungsfalldiagramm)
-   **Bücher über UML und Anforderungsanalyse (z.B. "Writing Effective Use Cases" von Alistair Cockburn).**

-----

> **Fehler gefunden?** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
