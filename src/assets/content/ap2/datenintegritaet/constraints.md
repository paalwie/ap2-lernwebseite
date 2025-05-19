# Sicherstellen der Qualität von Softwareanwendungen: Datenintegrität mithilfe von technischen Maßnahmen beurteilen und sicherstellen können - Constraints

## Einführung

**Datenintegrität** bezieht sich auf die Genauigkeit, Vollständigkeit und Konsistenz von Daten über ihren gesamten Lebenszyklus hinweg. **Constraints** (Beschränkungen oder Integritätsbedingungen) sind Regeln, die in relationalen Datenbanken definiert werden, um diese Integrität zu gewährleisten. Sie verhindern, dass ungültige, inkonsistente oder unvollständige Daten in die Datenbank eingefügt oder dort gespeichert werden. Constraints werden auf Tabellen oder Spalten angewendet und automatisch vom Datenbankmanagementsystem (DBMS) durchgesetzt.

## Arten von Constraints

Es gibt verschiedene Arten von Constraints, die in SQL definiert werden können:

1.  **NOT NULL:** Stellt sicher, dass eine Spalte keinen `NULL`-Wert enthalten darf. Dies ist wichtig für Spalten, deren Wert für die Bedeutung eines Datensatzes essenziell ist.

    ```sql
    CREATE TABLE Kunden (
        KundenID INT PRIMARY KEY,
        Name VARCHAR(255) NOT NULL,
        Email VARCHAR(255)
    );
    ```

    Im obigen Beispiel muss die Spalte `Name` immer einen Wert enthalten.

2.  **UNIQUE:** Stellt sicher, dass alle Werte in einer Spalte (oder einer Gruppe von Spalten) eindeutig sind. Dies verhindert Duplikate in Spalten, die eindeutige Kennzeichner enthalten sollen (z.B. E-Mail-Adressen, Kundennummern). Eine Tabelle kann mehrere `UNIQUE`-Constraints haben. `NULL`-Werte werden in den meisten DBMS als eindeutig betrachtet (d.h., es können mehrere `NULL`-Werte in einer `UNIQUE`-Spalte vorhanden sein, das Verhalten kann aber je nach DBMS variieren).

    ```sql
    CREATE TABLE Kunden (
        KundenID INT PRIMARY KEY,
        Name VARCHAR(255) NOT NULL,
        Email VARCHAR(255) UNIQUE
    );
    ```

    Hier muss jede E-Mail-Adresse in der Tabelle `Kunden` eindeutig sein.

3.  **PRIMARY KEY:** Identifiziert eindeutig jede Zeile in einer Tabelle. Eine Tabelle kann nur einen `PRIMARY KEY`-Constraint haben. Die Spalte(n), die Teil des Primärschlüssels sind, müssen `NOT NULL` und `UNIQUE` sein. Primärschlüssel werden oft verwendet, um Beziehungen zu anderen Tabellen herzustellen (als Fremdschlüssel in anderen Tabellen).

    ```sql
    CREATE TABLE Kunden (
        KundenID INT PRIMARY KEY,
        Name VARCHAR(255) NOT NULL,
        Email VARCHAR(255) UNIQUE
    );
    ```

    `KundenID` ist hier der Primärschlüssel, der jeden Kunden eindeutig identifiziert.

4.  **FOREIGN KEY:** Stellt eine referenzielle Integritätsbeziehung zwischen zwei Tabellen her. Ein `FOREIGN KEY` in einer Tabelle verweist auf den `PRIMARY KEY` einer anderen Tabelle. Er stellt sicher, dass Werte in der Fremdschlüsselspalte nur dann vorhanden sein dürfen, wenn die entsprechenden Werte im referenzierten Primärschlüssel existieren. Dies verhindert verwaiste Datensätze und sorgt für konsistente Beziehungen zwischen Tabellen.

    ```sql
    CREATE TABLE Bestellungen (
        BestellID INT PRIMARY KEY,
        KundenID INT,
        Bestelldatum DATE,
        FOREIGN KEY (KundenID) REFERENCES Kunden(KundenID)
    );
    ```

    Hier ist `KundenID` ein Fremdschlüssel in der Tabelle `Bestellungen`, der auf die `KundenID`-Spalte (den Primärschlüssel) in der Tabelle `Kunden` verweist. Das DBMS stellt sicher, dass jede `KundenID` in `Bestellungen` auch in der Tabelle `Kunden` existiert.

    Beim Definieren eines `FOREIGN KEY`-Constraints können auch Regeln für das Verhalten bei Änderungen in der referenzierten Tabelle festgelegt werden (`ON DELETE` und `ON UPDATE`):
    -   `CASCADE`: Änderungen (Löschen oder Aktualisieren) in der referenzierten Tabelle werden automatisch auf die abhängige Tabelle übertragen.
    -   `SET NULL`: Bei einer Änderung in der referenzierten Tabelle wird der Fremdschlüsselwert in der abhängigen Tabelle auf `NULL` gesetzt.
    -   `RESTRICT` oder `NO ACTION`: Änderungen in der referenzierten Tabelle sind nicht erlaubt, solange es noch abhängige Datensätze in der Fremdschlüsseltabelle gibt.
    -   `SET DEFAULT`: Bei einer Änderung in der referenzierten Tabelle wird der Fremdschlüsselwert in der abhängigen Tabelle auf einen vordefinierten Standardwert gesetzt.

5.  **CHECK:** Definiert eine Bedingung, die die Werte in einer Spalte erfüllen müssen. Wenn ein Wert gegen die Bedingung verstößt, wird die Einfüge- oder Aktualisierungsoperation abgelehnt.

    ```sql
    CREATE TABLE Produkte (
        ProduktID INT PRIMARY KEY,
        Produktname VARCHAR(255) NOT NULL,
        Preis DECIMAL(10, 2) CHECK (Preis > 0)
    );
    ```

    Hier stellt der `CHECK`-Constraint sicher, dass der `Preis` eines Produkts immer größer als 0 ist.

6.  **DEFAULT:** Legt einen Standardwert für eine Spalte fest, der verwendet wird, wenn beim Einfügen einer neuen Zeile kein Wert für diese Spalte angegeben wird.

    ```sql
    CREATE TABLE Bestellungen (
        BestellID INT PRIMARY KEY,
        KundenID INT,
        Bestelldatum DATE DEFAULT CURRENT_DATE,
        FOREIGN KEY (KundenID) REFERENCES Kunden(KundenID)
    );
    ```

    Hier wird das `Bestelldatum` standardmäßig auf das aktuelle Datum gesetzt, wenn kein anderes Datum beim Einfügen einer neuen Bestellung angegeben wird.

## Definition von Constraints

Constraints können auf zwei Arten definiert werden:

-   **Bei der Tabellenerstellung (Inline oder Out-of-Line):**
    -   **Inline:** Die Constraint-Definition erfolgt direkt innerhalb der Spaltendefinition. Dies ist hauptsächlich für `NOT NULL`, `UNIQUE`, `PRIMARY KEY` und `DEFAULT` üblich.
    -   **Out-of-Line:** Die Constraint-Definition erfolgt außerhalb der Spaltendefinition, typischerweise am Ende der `CREATE TABLE`-Anweisung. Dies ist erforderlich oder üblich für `FOREIGN KEY`- und benannte `UNIQUE`- oder `CHECK`-Constraints.

    ```sql
    -- Inline Constraint
    CREATE TABLE Beispiel1 (
        ID INT PRIMARY KEY,
        Name VARCHAR(255) NOT NULL
    );

    -- Out-of-Line Constraints
    CREATE TABLE Beispiel2 (
        ID INT,
        Wert INT,
        CONSTRAINT pk_beispiel2 PRIMARY KEY (ID),
        CONSTRAINT chk_wert CHECK (Wert > 10)
    );

    -- FOREIGN KEY Constraint (Out-of-Line)
    CREATE TABLE Bestellungen (
        BestellID INT PRIMARY KEY,
        KundenID INT,
        CONSTRAINT fk_kunden FOREIGN KEY (KundenID) REFERENCES Kunden(KundenID)
    );
    ```

-   **Nach der Tabellenerstellung (mit ALTER TABLE):** Constraints können auch zu einer bestehenden Tabelle hinzugefügt oder von ihr entfernt werden.

    ```sql
    -- Hinzufügen eines NOT NULL Constraints
    ALTER TABLE Produkte
    ALTER COLUMN Beschreibung SET NOT NULL;

    -- Hinzufügen eines UNIQUE Constraints
    ALTER TABLE Kunden
    ADD CONSTRAINT unique_telefon UNIQUE (Telefonnummer);

    -- Hinzufügen eines FOREIGN KEY Constraints
    ALTER TABLE Bestellungen
    ADD CONSTRAINT fk_produkte FOREIGN KEY (ProduktID) REFERENCES Produkte(ProduktID);

    -- Hinzufügen eines CHECK Constraints
    ALTER TABLE Produkte
    ADD CONSTRAINT check_rabatt CHECK (Rabatt >= 0 AND Rabatt <= 0.5);

    -- Entfernen eines Constraints (Syntax kann je nach DBMS variieren)
    ALTER TABLE Kunden
    DROP CONSTRAINT unique_telefon;
    ```

## Bedeutung von Constraints für die Datenintegrität

Constraints spielen eine entscheidende Rolle bei der Sicherstellung der Datenintegrität:

-   **Genauigkeit:** `CHECK`-Constraints stellen sicher, dass die Daten bestimmten Regeln entsprechen und somit gültig sind.
-   **Vollständigkeit:** `NOT NULL`-Constraints gewährleisten, dass wichtige Spalten immer gefüllt sind.
-   **Eindeutigkeit:** `UNIQUE`- und `PRIMARY KEY`-Constraints verhindern Duplikate und sorgen für eindeutige Identifikatoren.
-   **Konsistenz:** `FOREIGN KEY`-Constraints stellen sicher, dass Beziehungen zwischen Tabellen gültig bleiben und keine verwaisten Datensätze entstehen.
-   **Referenzielle Integrität:** `FOREIGN KEY`-Constraints erzwingen, dass Verweise zwischen Tabellen gültig sind.

Durch die Definition und Durchsetzung von Constraints wird die Datenbank robuster gegenüber fehlerhaften Dateneingaben und Inkonsistenzen. Dies führt zu einer höheren Qualität der in der Datenbank gespeicherten Informationen und erleichtert die korrekte Funktion der Anwendungen, die auf diese Daten zugreifen.

## Fazit

Constraints sind ein mächtiges Werkzeug in relationalen Datenbanken, um die Datenintegrität zu gewährleisten. Durch die Definition von Regeln für Spalten und Tabellen können Entwickler sicherstellen, dass die in der Datenbank gespeicherten Daten korrekt, vollständig, eindeutig und konsistent sind. Die verschiedenen Arten von Constraints bieten Flexibilität, um unterschiedliche Integritätsanforderungen zu erfüllen. Ein sorgfältiges Design der Datenbankstruktur unter Berücksichtigung geeigneter Constraints ist unerlässlich für die Entwicklung zuverlässiger und datengetriebener Anwendungen.

## Links und Quellen

-   **SQL Constraints - W3Schools:** [https://www.w3schools.com/sql/sql_constraints.asp](https://www.w3schools.com/sql/sql_constraints.asp) (Englischsprachiges Tutorial)
-   **SQL NOT NULL Constraint - W3Schools:** [https://www.w3schools.com/sql/sql_notnull.asp](https://www.w3schools.com/sql/sql_notnull.asp) (Englischsprachiges Tutorial)
-   **SQL UNIQUE Constraint - W3Schools:** [https://www.w3schools.com/sql/sql_unique.asp](https://www.w3schools.com/sql/sql_unique.asp) (Englischsprachiges Tutorial)
-   **SQL Primary Key Constraint - W3Schools:** [https://www.w3schools.com/sql/sql_primarykey.asp](https://www.w3schools.com/sql/sql_primarykey.asp) (Englischsprachiges Tutorial)
-   **SQL Foreign Key Constraint - W3Schools:** [https://www.w3schools.com/sql/sql_foreignkey.asp](https://www.w3schools.com/sql/sql_foreignkey.asp) (Englischsprachiges Tutorial)
-   **SQL CHECK Constraint - W3Schools:** [https://www.w3schools.com/sql/sql_check.asp](https://www.w3schools.com/sql/sql_check.asp) (Englischsprachiges Tutorial)
-   **SQL DEFAULT Constraint - W3Schools:** [https://www.w3schools.com/sql/sql_default.asp](https://www.w3schools.com/sql/sql_default.asp) (Englischsprachiges Tutorial)
-   **Dokumentation des spezifischen DBMS, das Sie verwenden (z.B. MySQL, PostgreSQL, SQL Server, Oracle) für detaillierte Informationen zur Definition und Verwaltung von Constraints.**
    -   **MySQL Constraints:** [https://dev.mysql.com/doc/refman/8.0/en/constraints.html](https://dev.mysql.com/doc/refman/8.0/en/constraints.html) (Englischsprachig)
    -   **PostgreSQL Constraints:** [https://www.postgresql.org/docs/current/ddl-constraints.html](https://www.postgresql.org/docs/current/ddl-constraints.html) (Englischsprachig)
    -   **SQL Server Constraints:** [https://learn.microsoft.com/en-us/sql/relational-databases/tables/constraints?view=sql-server-ver16](https://learn.microsoft.com/en-us/sql/relational-databases/tables/constraints?view=sql-server-ver16) (Englischsprachig)
    -   **Oracle Constraints:** Suche nach "Oracle constraints documentation"
-   **Artikel und Blogbeiträge zum Thema "SQL Constraints" und "Datenbankdesign Best Practices".**

-----

> **Fehler gefunden?** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
