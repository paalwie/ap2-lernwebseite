# Konzipieren und Umsetzen von kundenspezifischen Softwareanwendungen: Datenmodelle erstellen können - Relationales Modell

## Einführung

Das Relationale Modell ist ein Datenmodell, das 1970 von Edgar F. Codd bei IBM vorgeschlagen wurde. Es ist die Grundlage für die meisten modernen relationalen Datenbankmanagementsysteme (RDBMS) wie MySQL, PostgreSQL, Oracle und SQL Server. Im relationalen Modell werden Daten in Form von Tabellen (Relationen) organisiert, die aus Zeilen (Tupeln) und Spalten (Attributen) bestehen. Die Beziehungen zwischen den Daten werden durch gemeinsame Attribute in verschiedenen Tabellen hergestellt.

## Grundlegende Konzepte des Relationalen Modells

-   **Relation (Tabelle):** Eine Menge von Tupeln, die Attribute beschreiben. Jede Tabelle hat einen eindeutigen Namen.
-   **Tupel (Zeile, Datensatz):** Eine einzelne Einheit von Daten innerhalb einer Tabelle, die eine Instanz der durch die Tabelle repräsentierten Entität darstellt.
-   **Attribut (Spalte, Feld):** Eine benannte Eigenschaft einer Relation. Jedes Attribut hat einen eindeutigen Namen innerhalb der Tabelle und einen zugehörigen Datentyp (z.B. Integer, VARCHAR, DATE).
-   **Domäne:** Der Satz aller möglichen zulässigen Werte für ein Attribut.
-   **Primärschlüssel (Primary Key):** Ein Attribut oder eine Kombination von Attributen in einer Tabelle, das jede Tupel in der Tabelle eindeutig identifiziert. Ein Primärschlüssel muss eindeutig sein und darf keine Nullwerte enthalten.
-   **Fremdschlüssel (Foreign Key):** Ein Attribut oder eine Kombination von Attributen in einer Tabelle, das auf den Primärschlüssel einer anderen (oder derselben) Tabelle verweist. Fremdschlüssel werden verwendet, um Beziehungen zwischen Tabellen herzustellen und die referenzielle Integrität zu gewährleisten.
-   **Referenzielle Integrität:** Eine Eigenschaft relationaler Datenbanken, die sicherstellt, dass Beziehungen zwischen Tabellen gültig bleiben. Dies wird in der Regel durch Fremdschlüssel-Constraints implementiert, die verhindern, dass auf nicht-existierende Datensätze verwiesen wird.

## Beziehungen im Relationalen Modell

Beziehungen zwischen Entitäten, die im ER-Modell dargestellt werden, werden im relationalen Modell durch Fremdschlüssel implementiert:

-   **Eins-zu-Eins (1:1):** Der Primärschlüssel der einen Tabelle kann als Fremdschlüssel in der anderen Tabelle (oder umgekehrt) oder in einer separaten Beziehungstabelle gespeichert werden.
-   **Eins-zu-Viele (1:N):** Der Primärschlüssel der "Eins"-Seite wird als Fremdschlüssel in der Tabelle der "Viele"-Seite gespeichert.
-   **Viele-zu-Viele (N:M):** Eine separate Beziehungstabelle (auch Junction Table oder Linking Table genannt) wird erstellt. Diese Tabelle enthält die Primärschlüssel der beiden beteiligten Tabellen als Fremdschlüssel (oft als zusammengesetzter Primärschlüssel). Zusätzliche Attribute, die die Beziehung beschreiben, können ebenfalls in dieser Tabelle enthalten sein.

## Transformation vom ER-Modell zum Relationalen Modell

Das ER-Modell dient oft als Grundlage für die Erstellung des relationalen Schemas. Die Transformation umfasst typischerweise folgende Schritte:

1.  **Abbildung von Entitäten zu Tabellen:** Jede Entität im ER-Modell wird zu einer Tabelle im relationalen Modell. Der Name der Entität wird zum Namen der Tabelle.

2.  **Abbildung von Attributen zu Spalten:** Jedes Attribut einer Entität wird zu einer Spalte in der entsprechenden Tabelle. Der Name des Attributs wird zum Namen der Spalte. Der Datentyp der Spalte wird basierend auf dem Datentyp des Attributs festgelegt.

3.  **Auswahl des Primärschlüssels:** Der Primärschlüssel der Tabelle wird basierend auf dem Schlüsselattribut der Entität im ER-Modell festgelegt.

4.  **Abbildung von Beziehungen:**
    -   **1:1-Beziehungen:** Der Primärschlüssel einer Tabelle wird als Fremdschlüssel in der anderen Tabelle hinzugefügt. Die Entscheidung, in welcher Tabelle der Fremdschlüssel platziert wird, kann von der Optionalität der Beziehung abhängen.
    -   **1:N-Beziehungen:** Der Primärschlüssel der Tabelle auf der "Eins"-Seite wird als Fremdschlüssel in der Tabelle auf der "Viele"-Seite hinzugefügt.
    -   **N:M-Beziehungen:** Eine neue Tabelle wird erstellt, deren Primärschlüssel aus den Primärschlüsseln der beiden beteiligten Tabellen (als Fremdschlüssel) besteht. Diese Tabelle kann auch zusätzliche Attribute enthalten, die die Beziehung beschreiben.

5.  **Berücksichtigung von mehrwertigen Attributen:** Mehrwertige Attribute werden in der Regel in eine separate Tabelle ausgelagert, die einen Fremdschlüssel zur ursprünglichen Entitätstabelle enthält.

6.  **Berücksichtigung von zusammengesetzten Attributen:** Zusammengesetzte Attribute können entweder in ihre Einzelbestandteile zerlegt und als separate Spalten in der Tabelle abgebildet oder als eine einzelne Spalte (z.B. als Zeichenkette) gespeichert werden, abhängig von den Anforderungen.

7.  **Berücksichtigung von abgeleiteten Attributen:** Abgeleitete Attribute werden in der Regel nicht physisch in der Datenbank gespeichert, sondern bei Bedarf aus den Basisattributen berechnet (z.B. durch Views oder in der Anwendungslogik).

## Vorteile des Relationalen Modells

-   **Einfachheit:** Daten werden in leicht verständlichen Tabellen mit Zeilen und Spalten organisiert.
-   **Struktur:** Das Modell erzwingt eine klare Struktur der Daten, was die Datenintegrität und -konsistenz verbessert.
-   **Datenunabhängigkeit:** Änderungen an der physischen Speicherung der Daten haben keine Auswirkungen auf die logische Struktur (und umgekehrt), solange das relationale Schema gleich bleibt.
-   **Mächtige Abfragesprache (SQL):** Das relationale Modell wird von SQL (Structured Query Language) unterstützt, einer standardisierten und mächtigen Sprache für die Datenmanipulation und -abfrage.
-   **Theoretische Grundlage:** Das relationale Modell basiert auf einer soliden mathematischen Grundlage (Relationenalgebra und Relationskalkül), was zu formalen Regeln und Optimierungstechniken führt.
-   **Reife Technologie:** Relationale Datenbankmanagementsysteme sind ausgereift, zuverlässig und bieten eine breite Palette von Funktionen (z.B. Transaktionen, Indizes, Sicherheit).

## Nachteile des Relationalen Modells

-   **Performance bei sehr großen Datenmengen und komplexen Beziehungen:** Bei extrem großen und stark vernetzten Datensätzen können relationale Datenbanken in Bezug auf Performance an ihre Grenzen stoßen.
-   **Objekt-relationaler Impedanz-Mismatch:** Bei der Interaktion mit objektorientierten Programmiersprachen kann es zu Diskrepanzen zwischen der relationalen Struktur der Daten und der objektorientierten Struktur der Anwendung kommen.
-   **Flexibilität bei sich ändernden Anforderungen:** Änderungen am relationalen Schema können in großen Datenbanken aufwendig sein.
-   **Nicht immer ideal für unstrukturierte oder semistrukturierte Daten:** Das relationale Modell ist primär für strukturierte Daten konzipiert. Für unstrukturierte oder semistrukturierte Daten (z.B. Dokumente, Graphen) gibt es oft besser geeignete NoSQL-Datenbanken.

## Werkzeuge für das Relationale Modell und Datenbankdesign

Viele der bereits für ER-Modelle genannten Tools unterstützen auch die Arbeit mit dem relationalen Modell und die Transformation von ER-Modellen in relationale Schemata:

-   **Datenbankdesign-Tools:** z.B. ER/Studio, PowerDesigner, dbForge Studio. Diese Tools ermöglichen oft die grafische Modellierung des relationalen Schemas, die Definition von Tabellen, Spalten, Primär- und Fremdschlüsseln sowie die Generierung von SQL-Skripten.
    -   **Link (ER/Studio - IDERA):** [https://www.idera.com/database-modeling-tools/er-studio](https://www.idera.com/database-modeling-tools/er-studio)
    -   **Link (SAP PowerDesigner):** [https://www.sap.com/products/technology-platform/powerdesigner.html](https://www.sap.com/products/technology-platform/powerdesigner.html)
    -   **Link (dbForge Studio - Devart):** [https://www.devart.com/dbforge/studio/](https://www.devart.com/dbforge/studio/)

-   **UML-Modellierungswerkzeuge:** Einige UML-Tools bieten Profile oder Erweiterungen für die Datenmodellierung und die Darstellung relationaler Schemata.
    -   **Link (Enterprise Architect - Sparx Systems):** [https://sparxsystems.com/products/ea/index.html](https://sparxsystems.com/products/ea/index.html)

-   **Integrierte Datenbankdesign-Funktionen in DBMS:** Tools wie MySQL Workbench, pgAdmin und SQL Server Management Studio (SSMS) ermöglichen das visuelle Design von Datenbanktabellen und Beziehungen.
    -   **Link (MySQL Workbench):** [https://www.mysql.com/products/workbench/](https://www.mysql.com/products/workbench/)
    -   **Link (pgAdmin):** [https://www.pgadmin.org/](https://www.pgadmin.org/)
    -   **Link (SQL Server Management Studio - Microsoft):** [https://learn.microsoft.com/en-us/sql/ssms/download-ssms?view=sql-server-ver16](https://learn.microsoft.com/en-us/sql/ssms/download-ssms?view=sql-server-ver16)

## Fazit

Das Relationale Modell ist ein grundlegendes und weit verbreitetes Datenmodell, das die Basis für die meisten modernen Datenbankmanagementsysteme bildet. Durch die Organisation von Daten in Tabellen und die Definition von Beziehungen durch Schlüssel ermöglicht es eine strukturierte, konsistente und effiziente Datenverwaltung. Das Verständnis der Konzepte des relationalen Modells und der Fähigkeit, ER-Modelle in relationale Schemata zu transformieren, ist eine wesentliche Kompetenz für Softwareentwickler und Datenbankdesigner.

## Links und Quellen

-   **Relational model - Wikipedia (Deutsch):** [https://de.wikipedia.org/wiki/Relationales\_Modell](https://de.wikipedia.org/wiki/Relationales_Modell)
-   **Relational model - Wikipedia (Englischsprachig):** [https://en.wikipedia.org/wiki/Relational\_model](https://en.wikipedia.org/wiki/Relational_model)
-   **Original Paper von E.F. Codd: "A Relational Model of Data for Large Shared Data Banks" (Communications of the ACM, Vol. 13, No. 6, June 1970, pp. 377-387).** (Oft über Bibliothekszugang oder wissenschaftliche Datenbanken verfügbar)
-   **Tutorials und Anleitungen zum relationalen Modell und zur Datenbanknormalisierung (z.B. auf Mode Analytics, Database Star).**
    -   **Link (Relational Database Design - Mode Analytics):** [https://mode.com/sql-tutorial/relational-database-design/](https://mode.com/sql-tutorial/relational-database-design/)
    -   **Link (Database Normalization Explained - Database Star):** [https://databasestar.com/database-normalization/](https://databasestar.com/database-normalization/)
-   **Bücher über Datenbankdesign und relationale Datenbanken (z.B. "Database System Concepts" von Silberschatz, Korth und Sudarshan).**

-----

> **Fehler gefunden?** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
