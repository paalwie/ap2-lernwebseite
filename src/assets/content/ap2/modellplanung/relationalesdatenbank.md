# Programmieren von Softwarelösungen: Planen mit geeigneten Modellen - Relationales Datenbankmodell

## Einführung

Das relationale Datenbankmodell ist ein weit verbreitetes Datenmodell, das Daten in Form von Tabellen (Relationen) organisiert. Es wurde in den 1970er Jahren von Edgar F. Codd bei IBM entwickelt und bildet die Grundlage für die meisten modernen relationalen Datenbankmanagementsysteme (RDBMS) wie MySQL, PostgreSQL, Oracle und SQL Server. Das relationale Modell bietet eine strukturierte und flexible Möglichkeit, Daten zu speichern, abzufragen und zu verwalten.

## Beschreibung des relationalen Datenbankmodells

Das relationale Datenbankmodell basiert auf mehreren Schlüsselkonzepten:

-   **Relation (Tabelle):** Eine Relation ist eine Menge von Tupeln (Zeilen), die alle über denselben Satz von Attributen (Spalten) verfügen. Eine Tabelle stellt eine Entität oder eine Beziehung zwischen Entitäten dar.
-   **Attribut (Spalte):** Ein Attribut ist eine benannte Spalte in einer Tabelle. Es repräsentiert eine Eigenschaft einer Entität oder Beziehung. Jedes Attribut hat einen eindeutigen Namen innerhalb der Tabelle und einen bestimmten Datentyp (z.B. Text, Zahl, Datum).
-   **Tupel (Zeile):** Ein Tupel ist eine einzelne Zeile in einer Tabelle. Es repräsentiert eine einzelne Instanz einer Entität oder Beziehung und enthält Werte für jedes Attribut der Tabelle.
-   **Domäne:** Die Domäne eines Attributs definiert die Menge aller möglichen zulässigen Werte für dieses Attribut.
-   **Schlüssel (Key):** Ein Schlüssel ist ein Attribut oder eine Menge von Attributen, das verwendet wird, um Tupel in einer Relation eindeutig zu identifizieren oder Beziehungen zwischen Relationen herzustellen. Es gibt verschiedene Arten von Schlüsseln:
    -   **Primärschlüssel (Primary Key):** Ein Attribut oder eine minimale Menge von Attributen, das jedes Tupel in einer Relation eindeutig identifiziert. Jede Tabelle hat genau einen Primärschlüssel.
    -   **Fremdschlüssel (Foreign Key):** Ein Attribut oder eine Menge von Attributen in einer Tabelle, das auf den Primärschlüssel einer anderen Tabelle verweist. Fremdschlüssel werden verwendet, um Beziehungen zwischen Tabellen zu definieren und die referenzielle Integrität zu gewährleisten.
    -   **Kandidatenschlüssel (Candidate Key):** Ein Attribut oder eine Menge von Attributen, das die Eigenschaften eines Primärschlüssels besitzt (Eindeutigkeit und Minimalität), aber nicht als Primärschlüssel ausgewählt wurde.
    -   **Sekundärschlüssel (Secondary Key):** Ein Attribut oder eine Menge von Attributen, das für den schnellen Zugriff auf Daten verwendet wird (z.B. für Indizes), aber nicht zur eindeutigen Identifizierung von Tupeln dient.

## Beziehungen zwischen Tabellen

Beziehungen zwischen Entitäten, die im ERM modelliert wurden, werden im relationalen Modell durch Fremdschlüssel implementiert. Die Kardinalität der Beziehungen im ERM wird wie folgt in relationale Schemata übersetzt:

-   **1:1-Beziehung:** Der Primärschlüssel einer Tabelle wird als Fremdschlüssel in der anderen Tabelle gespeichert (oder umgekehrt).
-   **1:n-Beziehung:** Der Primärschlüssel der "Eins"-Seite wird als Fremdschlüssel in der Tabelle der "Viele"-Seite gespeichert.
-   **n:m-Beziehung:** Eine dritte Tabelle (Verknüpfungstabelle oder Join-Tabelle) wird erstellt, deren Primärschlüssel aus den Primärschlüsseln der beiden beteiligten Tabellen besteht (oft als zusammengesetzter Schlüssel). Die Fremdschlüssel in der Verknüpfungstabelle verweisen auf die Primärschlüssel der beiden ursprünglichen Tabellen.

## Normalisierung

Die Normalisierung ist ein Prozess zur Strukturierung relationaler Datenbanken, um Redundanzen zu minimieren und die Datenintegrität zu verbessern. Sie umfasst mehrere Normalformen (1NF, 2NF, 3NF, BCNF usw.), die spezifische Regeln für die Organisation von Attributen in Tabellen definieren. Durch die Normalisierung werden Anomalien beim Einfügen, Aktualisieren und Löschen von Daten reduziert.

## Operationen im relationalen Modell

Relationale Datenbankmanagementsysteme (RDBMS) unterstützen eine Reihe von Operationen zur Verwaltung und Abfrage von Daten, die auf der relationalen Algebra basieren. Die wichtigste Sprache für die Interaktion mit relationalen Datenbanken ist SQL (Structured Query Language). SQL ermöglicht:

-   **Datenabfrage (SELECT):** Abrufen von Daten aus einer oder mehreren Tabellen basierend auf bestimmten Kriterien.
-   **Datenmanipulation (INSERT, UPDATE, DELETE):** Einfügen, Ändern und Löschen von Datensätzen in Tabellen.
-   **Datendefinition (CREATE, ALTER, DROP):** Erstellen, Ändern und Löschen von Datenbankobjekten wie Tabellen, Indizes und Sichten.
-   **Datenkontrolle (GRANT, REVOKE):** Verwalten von Benutzerrechten und Zugriffskontrollen.

## Vorteile des relationalen Datenbankmodells

-   **Strukturierte Datenorganisation:** Daten werden in klar definierten Tabellen mit Beziehungen gespeichert.
-   **Einfache Abfragesprache (SQL):** Ermöglicht flexible und mächtige Datenabfragen.
-   **Datenintegrität:** Durch die Verwendung von Schlüsseln und Integritätsbedingungen (z.B. NOT NULL, UNIQUE, CHECK) wird die Konsistenz und Gültigkeit der Daten gewährleistet.
-   **Reduzierung von Datenredundanz:** Die Normalisierung trägt dazu bei, unnötige Wiederholungen von Daten zu vermeiden.
-   **Flexibilität:** Das relationale Modell kann eine Vielzahl von Datentypen und Beziehungen abbilden.
-   **Reife Technologie:** RDBMS sind ausgereift, stabil und verfügen über eine breite Palette von Werkzeugen und Funktionen.

## Nachteile des relationalen Datenbankmodells

-   **Performance bei sehr großen Datenmengen und komplexen Beziehungen:** Bei extrem großen Datenbanken oder sehr komplexen Abfragen kann die Performance leiden.
-   **Objekt-relationaler Impedanz-Mismatch:** Die Abbildung von objektorientierten Konzepten auf das relationale Modell kann komplex sein.
-   **Nicht ideal für alle Arten von Daten:** Für unstrukturierte oder semi-strukturierte Daten (z.B. Dokumente, Graphen) gibt es oft besser geeignete NoSQL-Datenbankmodelle.
-   **Skalierbarkeit:** Horizontale Skalierung (Verteilung der Daten auf mehrere Server) kann bei relationalen Datenbanken komplexer sein als bei einigen NoSQL-Systemen.

## Beziehung zum ERM

Das Entity-Relationship-Modell (ERM) ist ein konzeptionelles Datenmodell, das oft als erster Schritt bei der Planung einer relationalen Datenbank verwendet wird. Das ERM dient dazu, die Entitäten, ihre Attribute und die Beziehungen zwischen ihnen auf einer abstrakten Ebene zu modellieren, ohne sich um die spezifische Implementierung in einem relationalen Datenbanksystem zu kümmern.

Der nächste Schritt nach der Erstellung eines ERM ist die **Abbildung (Mapping)** des ERM auf ein relationales Schema. Dabei werden die Entitäten zu Tabellen, die Attribute zu Spalten und die Beziehungen durch Fremdschlüssel oder Verknüpfungstabellen implementiert. Die Regeln für diese Abbildung sind gut definiert und ermöglichen eine systematische Transformation des konzeptionellen Modells in ein logisches Datenbankschema.

## Fazit

Das relationale Datenbankmodell ist ein fundamentales Konzept in der Softwareentwicklung und bildet die Grundlage für viele persistente Datenspeicherlösungen. Seine strukturierte Organisation in Tabellen, die Verwendung von Schlüsseln zur Gewährleistung der Integrität und die mächtige Abfragesprache SQL machen es zu einem flexiblen und zuverlässigen Werkzeug für die Verwaltung von Daten. Das Verständnis des relationalen Modells und seiner Prinzipien ist für jeden Softwareentwickler und Datenbankadministrator unerlässlich. Das ERM dient dabei als wichtiges Hilfsmittel in der Planungsphase, um die Datenanforderungen zu analysieren und ein relationales Datenbankschema zu entwerfen.

## Links und Quellen

-   **Wikipedia - Relationales Modell:** [https://de.wikipedia.org/wiki/Relationales_Modell](https://de.wikipedia.org/wiki/Relationales_Modell)
-   **Relational Database - Wikipedia:** [https://en.wikipedia.org/wiki/Relational_database](https://en.wikipedia.org/wiki/Relational_database) (Englischsprachig)
-   **Database Normalization - Wikipedia:** [https://de.wikipedia.org/wiki/Datenbanknormalisierung](https://de.wikipedia.org/wiki/Datenbanknormalisierung)
-   **SQL Tutorial - W3Schools:** [https://www.w3schools.com/sql/](https://www.w3schools.com/sql/) (Englischsprachig - Einführung in SQL)
-   **Mapping ER Diagrams to Relational Schema:** [https://www.geeksforgeeks.org/er-model-to-relational-model/](https://www.geeksforgeeks.org/er-model-to-relational-model/) (Englischsprachig - Erklärung der Abbildung von ERM auf relationale Schemata)
