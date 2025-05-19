# Konzipieren und Umsetzen von kundenspezifischen Softwareanwendungen: Datenbankabfrage, Datenpflege mit SQL erstellen können - Tabellenstruktur (CREATE TABLE, ALTER TABLE)

## Einführung

In relationalen Datenbanken werden Daten in Tabellen gespeichert. Bevor Daten in eine Datenbank eingefügt und abgefragt werden können, müssen die Tabellenstrukturen definiert werden. SQL (Structured Query Language) bietet hierfür die Befehle `CREATE TABLE` zum Erstellen neuer Tabellen und `ALTER TABLE` zum Ändern der Struktur bestehender Tabellen. Das Verständnis dieser Befehle ist grundlegend für die Datenmodellierung und -verwaltung.

## 1. CREATE TABLE - Erstellen einer neuen Tabelle

Der `CREATE TABLE`-Befehl wird verwendet, um eine neue Tabelle in der Datenbank zu erstellen. Dabei müssen der Name der Tabelle und die Definitionen ihrer Spalten (Attribute) angegeben werden. Zu den Spaltendefinitionen gehören der Name der Spalte, der Datentyp und optionale Constraints (Einschränkungen).

### Syntax von CREATE TABLE

Die allgemeine Syntax für den `CREATE TABLE`-Befehl sieht wie folgt aus:

```sql
CREATE TABLE tabellenname (
    spaltenname1 datentyp1 [CONSTRAINT einschränkungsname1 einschränkung1],
    spaltenname2 datentyp2 [CONSTRAINT einschränkungsname2 einschränkung2],
    ...
    [CONSTRAINT tabellen_einschränkungsname tabellen_einschränkung]
);
```

### Komponenten von CREATE TABLE

-   **`CREATE TABLE tabellenname`:** Gibt an, dass eine neue Tabelle mit dem angegebenen Namen erstellt werden soll. Der Tabellenname muss innerhalb der Datenbank eindeutig sein.
-   **`spaltenname datentyp [CONSTRAINT einschränkungsname einschränkung]`:** Definiert eine Spalte der Tabelle mit ihrem Namen und dem Datentyp. Optional können Constraints hinzugefügt werden, um Regeln für die in dieser Spalte zulässigen Daten festzulegen.
    -   **`spaltenname`:** Der Name der Spalte (Attribut).
    -   **`datentyp`:** Der Typ der Daten, die in dieser Spalte gespeichert werden können (z.B. INTEGER, VARCHAR, DATE). Die verfügbaren Datentypen sind datenbankspezifisch.
    -   **`CONSTRAINT einschränkungsname einschränkung`:** Eine optionale Einschränkung (Constraint) für die Spalte. Ein Constraint definiert Regeln, die die in die Spalte eingefügten Daten erfüllen müssen. `einschränkungsname` ist ein optionaler Name für den Constraint, und `einschränkung` ist die Definition der Regel (z.B. `NOT NULL`, `UNIQUE`, `PRIMARY KEY`, `FOREIGN KEY`, `CHECK`).
-   **`CONSTRAINT tabellen_einschränkungsname tabellen_einschränkung`:** Optional können auch Tabellen-Level-Constraints definiert werden, die sich über mehrere Spalten erstrecken (z.B. ein `PRIMARY KEY`, der aus mehreren Spalten besteht, oder komplexe `CHECK`-Constraints).

### Beispiele für CREATE TABLE

**Beispiel 1: Erstellen einer Tabelle für Kunden**

```sql
CREATE TABLE Kunden (
    KundenID INT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Email VARCHAR(100) UNIQUE,
    Geburtsdatum DATE,
    Adresse VARCHAR(255)
);
```

In diesem Beispiel wird eine Tabelle namens `Kunden` mit fünf Spalten erstellt:
-   `KundenID`: Eine Ganzzahl, die als Primärschlüssel dient (`PRIMARY KEY`).
-   `Name`: Eine Zeichenkette mit maximal 100 Zeichen, die nicht leer sein darf (`NOT NULL`).
-   `Email`: Eine Zeichenkette mit maximal 100 Zeichen, die eindeutig sein muss (`UNIQUE`).
-   `Geburtsdatum`: Ein Datumswert.
-   `Adresse`: Eine Zeichenkette mit maximal 255 Zeichen.

**Beispiel 2: Erstellen einer Tabelle für Bestellungen mit Fremdschlüssel**

```sql
CREATE TABLE Bestellungen (
    BestellID INT PRIMARY KEY,
    KundenID INT NOT NULL,
    Bestelldatum DATE NOT NULL,
    Gesamtbetrag DECIMAL(10, 2),
    FOREIGN KEY (KundenID) REFERENCES Kunden(KundenID)
);
```

Hier wird eine Tabelle `Bestellungen` erstellt, die einen Fremdschlüssel (`FOREIGN KEY`) auf die `KundenID` der Tabelle `Kunden` besitzt. Dies stellt eine Beziehung zwischen Kunden und ihren Bestellungen her.

## 2. ALTER TABLE - Ändern der Struktur einer bestehenden Tabelle

Der `ALTER TABLE`-Befehl wird verwendet, um die Struktur einer bereits existierenden Tabelle zu ändern. Dies kann das Hinzufügen, Entfernen oder Ändern von Spalten sowie das Hinzufügen oder Entfernen von Constraints umfassen. Die genaue Syntax und die unterstützten Operationen können je nach Datenbankmanagementsystem (DBMS) variieren.

### Allgemeine Syntax von ALTER TABLE

Die allgemeine Syntax für den `ALTER TABLE`-Befehl sieht wie folgt aus:

```sql
ALTER TABLE tabellenname
    [ADD [COLUMN] spaltenname datentyp [CONSTRAINT einschränkungsname einschränkung]]
    [DROP [COLUMN] spaltenname]
    [ALTER [COLUMN] spaltenname [SET DEFAULT wert | DROP DEFAULT | TYPE neuer_datentyp [USING ausdruck] | SET NOT NULL | DROP NOT NULL | ADD CONSTRAINT einschränkungsname neue_einschränkung | DROP CONSTRAINT einschränkungsname]]
    [ADD CONSTRAINT tabellen_einschränkungsname neue_tabellen_einschränkung]
    [DROP CONSTRAINT tabellen_einschränkungsname];
```

### Häufige Operationen mit ALTER TABLE

-   **`ADD [COLUMN] spaltenname datentyp [CONSTRAINT einschränkungsname einschränkung]`:** Fügt eine neue Spalte zur Tabelle hinzu. Der Datentyp und optionale Constraints für die neue Spalte müssen angegeben werden. Das Schlüsselwort `COLUMN` ist optional.

    ```sql
    ALTER TABLE Kunden
    ADD COLUMN Telefonnummer VARCHAR(20);
    ```

-   **`DROP [COLUMN] spaltenname`:** Entfernt eine vorhandene Spalte aus der Tabelle. Vorsicht: Dies löscht alle in dieser Spalte gespeicherten Daten unwiderruflich. Das Schlüsselwort `COLUMN` ist optional.

    ```sql
    ALTER TABLE Kunden
    DROP COLUMN Adresse;
    ```

-   **`ALTER [COLUMN] spaltenname ...`:** Ändert die Definition einer vorhandenen Spalte. Die spezifischen Änderungen können das Setzen oder Entfernen eines Standardwerts (`SET DEFAULT`, `DROP DEFAULT`), das Ändern des Datentyps (`TYPE neuer_datentyp`), das Setzen oder Entfernen der `NOT NULL`-Einschränkung (`SET NOT NULL`, `DROP NOT NULL`) oder das Hinzufügen oder Entfernen von Constraints (`ADD CONSTRAINT`, `DROP CONSTRAINT`) umfassen. Das Schlüsselwort `COLUMN` ist optional.

    ```sql
    -- Ändern des Datentyps der Spalte Name (datenbankspezifisch)
    ALTER TABLE Kunden
    ALTER COLUMN Name VARCHAR(255);

    -- Hinzufügen einer NOT NULL-Einschränkung
    ALTER TABLE Kunden
    ALTER COLUMN Telefonnummer SET NOT NULL;

    -- Entfernen der UNIQUE-Einschränkung von Email
    ALTER TABLE Kunden
    DROP CONSTRAINT kunde_email_unique; -- Der Name des Constraints kann variieren
    ```

-   **`ADD CONSTRAINT tabellen_einschränkungsname neue_tabellen_einschränkung`:** Fügt einen neuen Tabellen-Level-Constraint hinzu (z.B. einen `UNIQUE`-Constraint über mehrere Spalten oder einen neuen `FOREIGN KEY`).

    ```sql
    ALTER TABLE Bestellungen
    ADD CONSTRAINT FK_KundeBestellung
    FOREIGN KEY (KundenID) REFERENCES Kunden(KundenID)
    ON DELETE CASCADE; -- Beispiel für eine referenzielle Integritätsregel
    ```

-   **`DROP CONSTRAINT tabellen_einschränkungsname`:** Entfernt einen vorhandenen Tabellen-Level-Constraint. Der Name des Constraints muss bekannt sein.

    ```sql
    ALTER TABLE Bestellungen
    DROP CONSTRAINT FK_KundeBestellung;
    ```

### Wichtige Hinweise zu ALTER TABLE

-   Die genauen Möglichkeiten und die Syntax von `ALTER TABLE` können stark zwischen verschiedenen DBMS (z.B. MySQL, PostgreSQL, SQL Server, Oracle) variieren.
-   Einige Änderungen an der Tabellenstruktur können zeitaufwendig sein, insbesondere bei sehr großen Tabellen, da die Datenbank möglicherweise die Daten neu organisieren muss.
-   Das Entfernen von Spalten oder Constraints kann zu Datenverlust oder Problemen mit Anwendungen führen, die auf diese Strukturen angewiesen sind. Daher sollten solche Operationen sorgfältig geplant und durchgeführt werden.
-   Beim Ändern von Datentypen ist darauf zu achten, dass die vorhandenen Daten mit dem neuen Datentyp kompatibel sind. Andernfalls kann es zu Fehlern oder Datenverlust kommen.

## Fazit

Die SQL-Befehle `CREATE TABLE` und `ALTER TABLE` sind unerlässlich für die Definition und Verwaltung der Struktur von Tabellen in relationalen Datenbanken. `CREATE TABLE` ermöglicht das Erstellen neuer Tabellen mit Spaltendefinitionen und Constraints, während `ALTER TABLE` verwendet wird, um die Struktur bestehender Tabellen nachträglich zu ändern. Ein solides Verständnis dieser Befehle ist entscheidend für die Entwicklung und Wartung von datenbankgestützten Anwendungen.

## Links und Quellen

-   **CREATE TABLE - Wikipedia (Deutsch):** [https://de.wikipedia.org/wiki/CREATE_TABLE](https://de.wikipedia.org/wiki/CREATE_TABLE)
-   **CREATE TABLE - Wikipedia (Englischsprachig):** [https://en.wikipedia.org/wiki/CREATE_TABLE](https://en.wikipedia.org/wiki/CREATE_TABLE)
-   **ALTER TABLE - Wikipedia (Deutsch):** [https://de.wikipedia.org/wiki/ALTER_TABLE](https://de.wikipedia.org/wiki/ALTER_TABLE)
-   **ALTER TABLE - Wikipedia (Englischsprachig):** [https://en.wikipedia.org/wiki/ALTER_TABLE](https://en.wikipedia.org/wiki/ALTER_TABLE)
-   **SQL CREATE TABLE Statement - W3Schools:** [https://www.w3schools.com/sql/sql_create_table.asp](https://www.w3schools.com/sql/sql_create_table.asp) (Englischsprachiges Tutorial)
-   **SQL ALTER TABLE Statement - W3Schools:** [https://www.w3schools.com/sql/sql_alter.asp](https://www.w3schools.com/sql/sql_alter.asp) (Englischsprachiges Tutorial)
-   **Dokumentation des spezifischen DBMS, das Sie verwenden (z.B. MySQL, PostgreSQL, SQL Server, Oracle) für die genaue Syntax und Optionen von `CREATE TABLE` und `ALTER TABLE`.**
    -   **MySQL CREATE TABLE:** [https://dev.mysql.com/doc/refman/8.0/en/create-table.html](https://dev.mysql.com/doc/refman/8.0/en/create-table.html) (Englischsprachig)
    -   **PostgreSQL CREATE TABLE:** [https://www.postgresql.org/docs/current/sql-createtable.html](https://www.postgresql.org/docs/current/sql-createtable.html) (Englischsprachig)
    -   **SQL Server CREATE TABLE:** [https://learn.microsoft.com/en-us/sql/t-sql/statements/create-table-transact-sql?view=sql-server-ver16](https://learn.microsoft.com/en-us/sql/t-sql/statements/create-table-transact-sql?view=sql-server-ver16) (Englischsprachig)
    -   **Oracle CREATE TABLE:** Suche nach "Oracle CREATE TABLE syntax"
    -   **MySQL ALTER TABLE:** [https://dev.mysql.com/doc/refman/8.0/en/alter-table.html](https://dev.mysql.com/doc/refman/8.0/en/alter-table.html) (Englischsprachig)
    -   **PostgreSQL ALTER TABLE:** [https://www.postgresql.org/docs/current/sql-altertable.html](https://www.postgresql.org/docs/current/sql-altertable.html) (Englischsprachig)
    -   **SQL Server ALTER TABLE:** [https://learn.microsoft.com/en-us/sql/t-sql/statements/alter-table-transact-sql?view=sql-server-ver16](https://learn.microsoft.com/en-us/sql/t-sql/statements/alter-table-transact-sql?view=sql-server-ver16) (Englischsprachig)
    -   **Oracle ALTER TABLE:** Suche nach "Oracle ALTER TABLE syntax"

-----

> **Fehler gefunden?** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
