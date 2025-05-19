# Programmieren von Softwarelösungen: Planen mit geeigneten Modellen - ERM (Entity-Relationship-Modell)

## Einführung

Das Entity-Relationship-Modell (ERM) ist ein semantisches Datenmodell, das zur Darstellung der logischen Struktur von Daten in einem Informationssystem verwendet wird. Es dient dazu, die beteiligten Objekte (Entitäten), ihre Eigenschaften (Attribute) und die Beziehungen (Relationships) zwischen diesen Objekten zu modellieren. ERMs sind besonders nützlich in der frühen Phase der Softwareentwicklung, insbesondere bei der Planung von Datenbanken und der Definition der Datenanforderungen einer Anwendung.

## Beschreibung des ERM

Ein ERM besteht aus drei Hauptkomponenten:

-   **Entitäten (Entities):** Dies sind unterscheidbare Objekte oder Konzepte der realen Welt, über die Informationen gespeichert werden sollen. Eine Entität kann eine physische Sache (z.B. ein Kunde, ein Produkt), ein Ereignis (z.B. eine Bestellung, eine Buchung) oder ein abstrakter Begriff (z.B. ein Kurs, ein Projekt) sein. Im ER-Diagramm werden Entitäten typischerweise als Rechtecke dargestellt.

-   **Attribute:** Dies sind Eigenschaften oder Merkmale einer Entität. Jede Entität hat eine oder mehrere Attribute, die ihre Charakteristika beschreiben (z.B. die Entität "Kunde" könnte die Attribute "KundenID", "Name", "Adresse", "E-Mail" haben). Attribute werden im ER-Diagramm typischerweise als Ovale dargestellt und mit der zugehörigen Entität verbunden. Es gibt verschiedene Arten von Attributen, wie z.B.:
    -   **Schlüsselattribute (Primary Keys):** Ein oder mehrere Attribute, die jede Instanz einer Entität eindeutig identifizieren (oft unterstrichen im ER-Diagramm).
    -   **Zusammengesetzte Attribute:** Attribute, die aus mehreren Unterattributen bestehen (z.B. "Adresse" könnte aus "Straße", "Hausnummer", "Postleitzahl", "Ort" bestehen).
    -   **Mehrwertige Attribute:** Attribute, die für eine einzelne Instanz einer Entität mehrere Werte annehmen können (z.B. ein "Produkt" könnte mehrere "Kategorien" haben).

-   **Beziehungen (Relationships):** Dies sind Assoziationen oder Verbindungen zwischen zwei oder mehr Entitäten. Beziehungen geben an, wie die Entitäten miteinander in Verbindung stehen (z.B. ein "Kunde" *gibt* eine "Bestellung" *auf*). Beziehungen werden im ER-Diagramm typischerweise als Rauten dargestellt und durch Linien mit den beteiligten Entitäten verbunden. Beziehungen können verschiedene Kardinalitäten aufweisen:
    -   **1:1 (Eins-zu-Eins):** Eine Instanz der ersten Entität ist mit höchstens einer Instanz der zweiten Entität verbunden und umgekehrt (z.B. eine "Person" hat genau einen "Reisepass" und ein "Reisepass" gehört genau einer "Person").
    -   **1:n (Eins-zu-Viele):** Eine Instanz der ersten Entität ist mit null, einer oder mehreren Instanzen der zweiten Entität verbunden, während eine Instanz der zweiten Entität mit genau einer Instanz der ersten Entität verbunden ist (z.B. ein "Kunde" kann null, eine oder mehrere "Bestellungen" aufgeben, und jede "Bestellung" gehört genau einem "Kunden").
    -   **n:m (Viele-zu-Viele):** Eine Instanz der ersten Entität ist mit null, einer oder mehreren Instanzen der zweiten Entität verbunden, und eine Instanz der zweiten Entität ist ebenfalls mit null, einer oder mehreren Instanzen der ersten Entität verbunden (z.B. ein "Student" kann null, einen oder mehrere "Kurse" belegen, und ein "Kurs" kann von null, einem oder mehreren "Studenten" belegt werden).

## Bedeutung des ERM für die Planung von Softwarelösungen

-   **Datenmodellierung:** Das ERM hilft dabei, die Datenstruktur einer Anwendung klar und verständlich zu definieren, bevor eine physische Datenbank implementiert wird.
-   **Kommunikation:** Es dient als visuelles Kommunikationsmittel zwischen Analysten, Designern, Entwicklern und Endbenutzern, um ein gemeinsames Verständnis der Datenanforderungen zu schaffen.
-   **Anforderungsanalyse:** Durch die Modellierung der Entitäten und ihrer Beziehungen können fehlende oder unklare Anforderungen aufgedeckt werden.
-   **Datenbankdesign:** Das ERM ist eine wichtige Grundlage für das logische und physische Datenbankdesign. Es kann direkt in relationale Schemata oder andere Datenbankmodelle überführt werden.
-   **Systemplanung:** Das ERM kann auch bei der Planung der Gesamtstruktur eines Informationssystems hilfreich sein, indem es die zentralen Datenobjekte und ihre Beziehungen aufzeigt.

## Schritte zur Erstellung eines ERM

1.  **Identifizierung der Entitäten:** Bestimmen Sie die wichtigsten Objekte oder Konzepte, über die Informationen gespeichert werden müssen.
2.  **Identifizierung der Attribute:** Legen Sie die relevanten Eigenschaften für jede identifizierte Entität fest. Bestimmen Sie die Schlüsselattribute.
3.  **Identifizierung der Beziehungen:** Finden Sie die Beziehungen zwischen den Entitäten heraus und bestimmen Sie die Kardinalität jeder Beziehung.
4.  **Erstellung des ER-Diagramms:** Zeichnen Sie die Entitäten, Attribute und Beziehungen unter Verwendung der entsprechenden Symbole.
5.  **Verfeinerung des Modells:** Überprüfen und verfeinern Sie das ERM, um sicherzustellen, dass es die Datenanforderungen korrekt und vollständig widerspiegelt. Berücksichtigen Sie mögliche Normalisierungsaspekte, um Redundanzen zu minimieren und die Datenintegrität zu gewährleisten.

## Beispiel eines einfachen ERM

Nehmen wir eine einfache Anwendung für die Verwaltung von Büchern und Autoren:

-   **Entitäten:** `Buch`, `Autor`
-   **Attribute:**
    -   `Buch`: `ISBN` (Schlüssel), `Titel`, `Erscheinungsjahr`
    -   `Autor`: `AutorID` (Schlüssel), `Name`, `Geburtsdatum`
-   **Beziehung:** Ein `Autor` *schreibt* ein oder mehrere `Bücher`, und ein `Buch` wird von einem `Autor` *geschrieben* (1:n-Beziehung von `Autor` zu `Buch`).

Das zugehörige ER-Diagramm würde einen Kasten für `Autor` und einen Kasten für `Buch` zeigen, mit ihren jeweiligen Attributen (ISBN und AutorID unterstrichen als Schlüssel). Eine Raute mit der Beschriftung "schreibt" würde die beiden Entitäten verbinden, mit einer Notation, die die 1:n-Kardinalität angibt (z.B. eine "1" auf der Seite von `Autor` und ein "n" auf der Seite von `Buch`).

## Weiterführende Konzepte im ERM

-   **Schwache Entitäten:** Entitäten, die nicht durch ihre eigenen Attribute eindeutig identifiziert werden können und von der Existenz einer anderen (starken) Entität abhängig sind (werden oft mit doppelten Rechtecken dargestellt). Sie besitzen einen partiellen Schlüssel, der in Kombination mit dem Schlüssel der übergeordneten Entität ihre Instanzen eindeutig macht.
-   **Identifizierende Beziehungen:** Die Beziehung zwischen einer starken und einer schwachen Entität, bei der der Schlüssel der starken Entität Teil des Schlüssels der schwachen Entität wird (oft mit doppelten Rauten dargestellt).
-   **Rekursive Beziehungen:** Beziehungen, die eine Entität mit sich selbst eingeht (z.B. ein "Mitarbeiter" *managt* einen anderen "Mitarbeiter").
-   **Ternäre und höhere Beziehungen:** Beziehungen, die mehr als zwei Entitäten involvieren (werden seltener verwendet und können oft in binäre Beziehungen mit eingeführten assoziativen Entitäten umgewandelt werden).
-   **Generalisierung und Spezialisierung (ERM-Erweiterungen):** Konzepte zur Modellierung von Hierarchien zwischen Entitäten (z.B. eine Oberklasse "Fahrzeug" mit Unterklassen "Auto" und "Motorrad").

## Vorteile des ERM

-   **Einfachheit und Verständlichkeit:** Visuelle Darstellung der Datenstruktur.
-   **Effektive Kommunikation:** Fördert das gemeinsame Verständnis zwischen verschiedenen Stakeholdern.
-   **Gute Grundlage für das Datenbankdesign:** Direkte Überführbarkeit in relationale oder andere Datenbankmodelle.
-   **Früherkennung von Datenproblemen:** Hilft, Redundanzen und Inkonsistenzen im Datenmodell frühzeitig zu erkennen.

## Nachteile des ERM

-   **Begrenzte Ausdruckskraft für komplexe Semantik:** Kann komplexe Geschäftsregeln und Datenabhängigkeiten nicht immer vollständig abbilden.
-   **Fehlende Prozessmodellierung:** Konzentriert sich auf Daten, nicht auf Prozesse.
-   **Subjektivität:** Die Erstellung eines ERM kann bis zu einem gewissen Grad subjektiv sein und von der Perspektive des Modellierers abhängen.

## Fazit

Das Entity-Relationship-Modell (ERM) ist ein wertvolles Werkzeug für die Planung von Softwarelösungen, insbesondere im Hinblick auf die Datenmodellierung und das Datenbankdesign. Es ermöglicht eine klare und verständliche Darstellung der Datenstruktur, fördert die Kommunikation zwischen den Projektbeteiligten und bildet eine solide Grundlage für die weitere Entwicklung. Obwohl es seine Grenzen hat, ist das ERM in vielen Softwareentwicklungsprojekten ein unverzichtbarer Bestandteil der Planungsphase.

## Links und Quellen

-   **Wikipedia - Entity-Relationship-Modell:** [https://de.wikipedia.org/wiki/Entity-Relationship-Modell](https://de.wikipedia.org/wiki/Entity-Relationship-Modell)
-   **ER-Diagramm - Wikipedia:** [https://de.wikipedia.org/wiki/ER-Diagramm](https://de.wikipedia.org/wiki/ER-Diagramm)
-   **Database Design - ER Diagrams and Database Schema:** [https://www.studytonight.com/dbms/er-diagram.php](https://www.studytonight.com/dbms/er-diagram.php) (Englischsprachig - Tutorial)
-   **Lucidchart - ER Diagram Symbols and Notation:** [https://www.lucidchart.com/pages/er-diagram-symbols-notation](https://www.lucidchart.com/pages/er-diagram-symbols-notation) (Englischsprachig - Überblick über Symbole und Notation)
-   **Draw.io (diagrams.net):** [https://app.diagrams.net/](https://app.diagrams.net/) (Kostenloses Tool zur Erstellung von ER-Diagrammen)
