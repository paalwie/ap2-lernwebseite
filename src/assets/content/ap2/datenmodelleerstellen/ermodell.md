# Konzipieren und Umsetzen von kundenspezifischen Softwareanwendungen: Datenmodelle erstellen können - ER-Modell

## Einführung

Das Entity-Relationship-Modell (ER-Modell) ist ein konzeptionelles Datenmodell, das verwendet wird, um die Struktur einer Datenbank zu beschreiben. Es wurde von Peter Chen im Jahr 1976 eingeführt und ist ein weit verbreitetes Werkzeug für die Datenbankmodellierung auf hoher Ebene. Das ER-Modell konzentriert sich auf die Identifizierung der wichtigsten Entitäten (Objekte oder Konzepte), ihrer Attribute (Eigenschaften) und der Beziehungen (Beziehungen) zwischen diesen Entitäten. Es dient als Grundlage für das logische Design einer Datenbank.

## Grundlegende Elemente eines ER-Modells

Ein ER-Modell besteht hauptsächlich aus folgenden Elementen:

-   **Entitäten (Entities):** Repräsentieren reale Objekte, Konzepte oder Dinge, über die Informationen in der Datenbank gespeichert werden sollen (z.B. Kunde, Produkt, Bestellung). Entitäten werden typischerweise als Rechtecke mit dem Namen der Entität dargestellt.

-   **Attribute:** Beschreiben die Eigenschaften oder Merkmale einer Entität (z.B. für die Entität "Kunde": Kunden-ID, Name, Adresse). Attribute werden typischerweise als Ellipsen dargestellt und mit einer Linie mit der zugehörigen Entität verbunden.
    -   **Schlüsselattribute (Key Attributes):** Attribute, die eine Entität eindeutig identifizieren (Primärschlüssel). Sie werden oft unterstrichen.
    -   **Zusammengesetzte Attribute (Composite Attributes):** Attribute, die aus mehreren anderen Attributen bestehen (z.B. "Adresse" kann aus Straße, Hausnummer, Postleitzahl, Ort bestehen).
    -   **Mehrwertige Attribute (Multivalued Attributes):** Attribute, die für eine einzelne Entität mehrere Werte haben können (z.B. "Telefonnummer" eines Kunden). Diese werden oft als doppelte Ellipsen dargestellt.
    -   **Abgeleitete Attribute (Derived Attributes):** Attribute, deren Werte aus anderen Attributen berechnet werden können (z.B. "Alter" aus dem Geburtsdatum). Diese werden oft als gestrichelte Ellipsen dargestellt.

-   **Beziehungen (Relationships):** Stellen die Verbindungen oder Interaktionen zwischen zwei oder mehr Entitäten dar (z.B. ein "Kunde" gibt eine "Bestellung" auf). Beziehungen werden typischerweise als Rauten dargestellt und mit Linien mit den beteiligten Entitäten verbunden. Der Name der Beziehung wird in die Raute geschrieben.

-   **Kardinalität (Cardinality) und Ordinalität (Optionality):** Spezifizieren die Anzahl der Instanzen einer Entität, die mit einer Instanz einer anderen Entität in einer Beziehung stehen können. Sie werden oft an den Verbindungslinien zwischen den Entitäten und der Beziehung angegeben:
    -   **Eins-zu-Eins (1:1):** Eine Instanz der einen Entität ist mit höchstens einer Instanz der anderen Entität verbunden und umgekehrt.
    -   **Eins-zu-Viele (1:N):** Eine Instanz der einen Entität ist mit null, einer oder mehreren Instanzen der anderen Entität verbunden, aber eine Instanz der anderen Entität ist mit höchstens einer Instanz der ersten Entität verbunden.
    -   **Viele-zu-Viele (N:M):** Eine Instanz der einen Entität ist mit null, einer oder mehreren Instanzen der anderen Entität verbunden, und umgekehrt.
    -   **Ordinalität:** Gibt an, ob die Teilnahme einer Entität an einer Beziehung optional oder obligatorisch ist (oft durch Symbole wie "0" für optional und "|" für obligatorisch dargestellt, z.B. "0..1" für null oder eins, "1..N" für mindestens eins).

## Erstellung eines ER-Modells

Die Erstellung eines ER-Modells umfasst typischerweise folgende Schritte:

1.  **Identifizierung der Entitäten:** Bestimme die wichtigsten Objekte oder Konzepte, über die Informationen in der Datenbank gespeichert werden sollen. Dies basiert auf den Anforderungen des Systems.

2.  **Festlegung der Attribute:** Für jede identifizierte Entität werden die relevanten Eigenschaften oder Merkmale bestimmt. Identifiziere Schlüsselattribute, zusammengesetzte, mehrwertige und abgeleitete Attribute.

3.  **Identifizierung der Beziehungen:** Ermittle die Beziehungen zwischen den Entitäten. Beschreibe, wie die Entitäten miteinander in Verbindung stehen.

4.  **Festlegung der Kardinalität und Ordinalität:** Für jede Beziehung bestimme die Anzahl der Instanzen jeder beteiligten Entität, die in der Beziehung vorkommen können (Kardinalität) und ob die Teilnahme obligatorisch oder optional ist (Ordinalität).

5.  **Zeichnen des ER-Diagramms:** Stelle die Entitäten als Rechtecke, die Attribute als Ellipsen und die Beziehungen als Rauten dar. Verbinde die Elemente mit Linien und kennzeichne Schlüsselattribute, Kardinalität und Ordinalität.

6.  **Verfeinerung und Überprüfung:** Überprüfe das ER-Modell mit den Stakeholdern und Experten, um sicherzustellen, dass es die Datenanforderungen korrekt und vollständig erfasst.

## Bedeutung von ER-Modellen

ER-Modelle sind in der Datenbankentwicklung von großer Bedeutung, da sie:

-   **Die Datenstruktur auf einer hohen Ebene visualisieren:** Sie bieten eine klare und verständliche grafische Darstellung der wichtigsten Datenkomponenten und ihrer Beziehungen.
-   **Die Kommunikation zwischen technischen und nicht-technischen Stakeholdern erleichtern:** Das ER-Modell ist relativ einfach zu verstehen und ermöglicht es, Datenanforderungen mit Kunden und Fachexperten zu diskutieren.
-   **Die Grundlage für das logische Datenbankdesign bilden:** Das ER-Modell dient als Ausgangspunkt für die Umwandlung in ein relationales Schema oder andere Datenbankmodelle.
-   **Die Identifizierung von Datenanforderungen unterstützen:** Der Prozess der Erstellung eines ER-Modells hilft dabei, alle relevanten Entitäten, Attribute und Beziehungen zu identifizieren.
-   **Die Datenintegrität fördern:** Durch die explizite Modellierung von Beziehungen und Einschränkungen können Regeln für die Datenintegrität definiert werden.
-   **Die Dokumentation der Datenbankstruktur unterstützen:** Das ER-Modell ist ein wichtiger Bestandteil der Datenbankdokumentation.

## Notationen für ER-Modelle

Es gibt verschiedene Notationen für ER-Modelle, wobei die bekanntesten sind:

-   **Chen-Notation:** Die ursprüngliche Notation von Peter Chen, die Rechtecke für Entitäten, Ellipsen für Attribute und Rauten für Beziehungen verwendet. Kardinalität wird oft als (1,1), (1,N), (N,M) usw. angegeben.

-   **Crow's Foot-Notation (auch Barker-Notation):** Eine häufig verwendete Notation, die für Beziehungen "Füße" verwendet, um die Kardinalität darzustellen (z.B. ein einzelner Strich für 1, ein "Krähenfuß" für viele, ein Kreis für optional).

-   **IDEF1X (Integration Definition for Information Modeling):** Eine Standardnotation, die oft in der Bundesverwaltung und in Unternehmen verwendet wird. Sie verwendet Rechtecke für Entitäten und Linien mit Symbolen für Beziehungen und Kardinalität.

Die Crow's Foot-Notation ist in der Praxis oft die gebräuchlichste aufgrund ihrer intuitiven Darstellung der Kardinalität.

## Werkzeuge zur Erstellung von ER-Modellen

Es gibt verschiedene Werkzeuge zur Erstellung von ER-Modellen:

-   **Standalone Datenbankdesign-Tools:** z.B. ER/Studio, PowerDesigner, dbForge Studio.
    -   **Link (ER/Studio - IDERA):** [https://www.idera.com/database-modeling-tools/er-studio](https://www.idera.com/database-modeling-tools/er-studio)
    -   **Link (SAP PowerDesigner):** [https://www.sap.com/products/technology-platform/powerdesigner.html](https://www.sap.com/products/technology-platform/powerdesigner.html)
    -   **Link (dbForge Studio - Devart):** [https://www.devart.com/dbforge/studio/](https://www.devart.com/dbforge/studio/)

-   **UML-Modellierungswerkzeuge mit Unterstützung für Datenmodellierung:** Viele UML-Tools wie Enterprise Architect und Lucidchart ermöglichen auch die Erstellung von ER-Diagrammen.
    -   **Link (Enterprise Architect - Sparx Systems):** [https://sparxsystems.com/products/ea/index.html](https://sparxsystems.com/products/ea/index.html)
    -   **Link (Lucidchart):** [https://www.lucidchart.com/](https://www.lucidchart.com/)
    -   **Link (draw.io - diagrams.net):** [https://app.diagrams.net/](https://app.diagrams.net/) (bietet Shapes für ER-Modelle)

-   **Integrierte Datenbankdesign-Funktionen in Datenbankmanagementsystemen (DBMS):** Einige DBMS wie MySQL Workbench und pgAdmin bieten integrierte Tools zur Erstellung von ER-Modellen aus bestehenden Datenbanken oder für das Design neuer Schemata.
    -   **Link (MySQL Workbench):** [https://www.mysql.com/products/workbench/](https://www.mysql.com/products/workbench/)
    -   **Link (pgAdmin):** [https://www.pgadmin.org/](https://www.pgadmin.org/)

## Fazit

Das Entity-Relationship-Modell (ER-Modell) ist ein grundlegendes und mächtiges Werkzeug für die konzeptionelle Datenbankmodellierung. Es ermöglicht die klare Darstellung der wichtigsten Datenkomponenten und ihrer Beziehungen und dient als wichtige Grundlage für das logische Design einer Datenbank. Die Fähigkeit, ER-Modelle zu erstellen und zu interpretieren, ist eine wesentliche Kompetenz für Datenbankdesigner und Softwareentwickler, die mit Datenbanksystemen arbeiten.

## Links und Quellen

-   **Entity-relationship model - Wikipedia (Deutsch):** [https://de.wikipedia.org/wiki/Entity-Relationship-Modell](https://de.wikipedia.org/wiki/Entity-Relationship-Modell)
-   **Entity-relationship model - Wikipedia (Englischsprachig):** [https://en.wikipedia.org/wiki/Entity%E2%80%93relationship\_model](https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model)
-   **Original Paper von Peter Chen: "The Entity-Relationship Model—Toward a Unified View of Data" (ACM Transactions on Database Systems, Vol. 1, No. 1, March 1976, pp. 9-36).** (Oft über Bibliothekszugang oder wissenschaftliche Datenbanken verfügbar)
-   **Tutorials und Anleitungen zur Erstellung von ER-Modellen und zur Verwendung verschiedener Notationen (z.B. auf Lucidchart, Visual Paradigm, Tutorialspoint).**
    -   **Link (ER Diagram Tutorial - Lucidchart):** [https://www.lucidchart.com/pages/de/tutorial/er-diagramm](https://www.lucidchart.com/pages/de/tutorial/er-diagramm)
    -   **Link (ER Diagram Tutorial - Visual Paradigm):** [https://www.visual-paradigm.com/tutorials/entity-relationship-diagram/](https://www.visual-paradigm.com/tutorials/entity-relationship-diagram/)
    -   **Link (ER Model Tutorial - Tutorialspoint):** [https://www.tutorialspoint.com/dbms/er\_model\_basic\_concepts.htm](https://www.tutorialspoint.com/dbms/er_model_basic_concepts.htm)
-   **Bücher über Datenbankdesign und -modellierung.**

-----

> **Fehler gefunden?** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
