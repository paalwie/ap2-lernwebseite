# Konzipieren und Umsetzen von kundenspezifischen Softwareanwendungen: Datenbankabfrage, Datenpflege mit SQL erstellen können - Index (CREATE INDEX)

## Einführung

Ein Index in einer Datenbank ist eine spezielle Suchstruktur, die auf einer oder mehreren Spalten einer Tabelle definiert wird und die Geschwindigkeit von Datenabfrageoperationen verbessern kann. Ähnlich wie ein Index in einem Buch ermöglicht ein Datenbankindex dem Datenbankmanagementsystem (DBMS), Datensätze schnell zu finden, ohne die gesamte Tabelle scannen zu müssen. Der SQL-Befehl `CREATE INDEX` wird verwendet, um solche Indizes zu erstellen.

## Funktionsweise von Indizes

Stellen Sie sich eine Datenbanktabelle ohne Index wie ein unsortiertes Adressbuch vor. Um eine bestimmte Person zu finden, müssen Sie jede Seite einzeln durchblättern. Ein Index hingegen ist wie ein alphabetisches Verzeichnis am Ende des Buches, das Ihnen direkt die Seite(n) zeigt, auf der die gesuchte Person zu finden ist.

Datenbankindizes funktionieren nach ähnlichen Prinzipien. Sie erstellen eine separate Struktur, die eine sortierte Kopie der Werte in den indizierten Spalten sowie Zeiger auf die entsprechenden Datenzeilen in der Tabelle enthält. Wenn eine Abfrage eine indizierte Spalte in der `WHERE`-Klausel verwendet, kann das DBMS den Index verwenden, um die relevanten Zeilen schnell zu lokalisieren, anstatt die gesamte Tabelle zu durchsuchen.

## SQL-Befehl: CREATE INDEX

Der `CREATE INDEX`-Befehl wird verwendet, um einen Index für eine oder mehrere Spalten einer Tabelle zu erstellen.

### Syntax von CREATE INDEX

Die allgemeine Syntax für den `CREATE INDEX`-Befehl sieht wie folgt aus:

```sql
CREATE [UNIQUE] INDEX indexname
ON tabellenname (spaltenname1 [ASC|DESC], spaltenname2 [ASC|DESC], ...);
```

### Komponenten von CREATE INDEX

-   **`CREATE INDEX indexname`:** Gibt an, dass ein neuer Index mit dem angegebenen Namen erstellt werden soll. Der Indexname sollte innerhalb der Tabelle eindeutig sein.
-   **`[UNIQUE]` (optional):** Erstellt einen eindeutigen Index. Dies bedeutet, dass die Kombination der Werte in den indizierten Spalten über alle Zeilen hinweg eindeutig sein muss. Ein eindeutiger Index wird oft automatisch für Primärschlüssel- und `UNIQUE`-Constraints erstellt.
-   **`ON tabellenname`:** Gibt die Tabelle an, für die der Index erstellt werden soll.
-   **`(spaltenname1 [ASC|DESC], spaltenname2 [ASC|DESC], ...)`:** Gibt die Spalten an, die in den Index aufgenommen werden sollen. Es können ein oder mehrere Spalten indiziert werden (ein sogenannter zusammengesetzter oder mehrspaltiger Index). Die optionale Angabe `ASC` (aufsteigend) oder `DESC` (absteigend) legt die Sortierreihenfolge des Index für diese Spalte fest. Standardmäßig ist die Sortierreihenfolge aufsteigend.

### Beispiele für CREATE INDEX

**Beispiel 1: Erstellen eines einfachen Index für die Spalte "Name" in der Tabelle "Kunden"**

```sql
CREATE INDEX idx_name
ON Kunden (Name);
```

Dieser Befehl erstellt einen Index namens `idx_name` für die Spalte `Name` in der Tabelle `Kunden`. Dies kann Abfragen beschleunigen, die nach Kundennamen suchen (z.B. `SELECT * FROM Kunden WHERE Name = 'Schmidt';`).

**Beispiel 2: Erstellen eines eindeutigen Index für die Spalte "Email" in der Tabelle "Kunden"**

```sql
CREATE UNIQUE INDEX idx_email
ON Kunden (Email);
```

Dieser Befehl erstellt einen eindeutigen Index namens `idx_email` für die Spalte `Email`. Dies stellt sicher, dass keine zwei Kunden die gleiche E-Mail-Adresse haben können und kann Abfragen beschleunigen, die nach E-Mail-Adresse suchen. Beachten Sie, dass ein `UNIQUE`-Constraint in der Tabellendefinition oft automatisch einen eindeutigen Index erstellt.

**Beispiel 3: Erstellen eines zusammengesetzten Index für die Spalten "Stadt" und "Name" in der Tabelle "Kunden"**

```sql
CREATE INDEX idx_stadt_name
ON Kunden (Stadt, Name);
```

Dieser Befehl erstellt einen Index namens `idx_stadt_name`, der sowohl die Spalte `Stadt` als auch die Spalte `Name` umfasst. Dieser Index kann Abfragen beschleunigen, die sowohl nach Stadt als auch nach Name filtern (z.B. `SELECT * FROM Kunden WHERE Stadt = 'Berlin' AND Name = 'Schmidt';`). Die Reihenfolge der Spalten im Index ist wichtig. Der Index ist am effektivsten für Abfragen, die die führenden Spalten des Index in ihren `WHERE`-Klauseln verwenden.

**Beispiel 4: Erstellen eines Index in absteigender Reihenfolge für eine Spalte**

```sql
CREATE INDEX idx_geburtsdatum_desc
ON Kunden (Geburtsdatum DESC);
```

Dieser Befehl erstellt einen Index namens `idx_geburtsdatum_desc` für die Spalte `Geburtsdatum` in absteigender Reihenfolge. Dies kann für Abfragen nützlich sein, die die neuesten Kunden basierend auf ihrem Geburtsdatum abrufen möchten (z.B. mit `ORDER BY Geburtsdatum DESC`).

## Überlegungen bei der Verwendung von Indizes

Obwohl Indizes die Abfragegeschwindigkeit erheblich verbessern können, bringen sie auch einige Nachteile mit sich:

-   **Zusätzlicher Speicherplatz:** Indizes benötigen zusätzlichen Speicherplatz in der Datenbank.
-   **Verlangsamung von Schreiboperationen:** Wenn Daten in die Tabelle eingefügt, aktualisiert oder gelöscht werden, müssen auch die Indizes aktualisiert werden. Dies kann Schreiboperationen verlangsamen.
-   **Wartungsaufwand:** Indizes müssen möglicherweise im Laufe der Zeit gewartet oder neu aufgebaut werden, um ihre Effizienz zu erhalten, insbesondere nach vielen Änderungen an der Tabelle.
-   **Nicht für alle Spalten sinnvoll:** Das Erstellen von Indizes für jede Spalte ist in der Regel nicht sinnvoll. Indizes sind am nützlichsten für Spalten, die häufig in `WHERE`-Klauseln, `JOIN`-Bedingungen, `ORDER BY`- oder `GROUP BY`-Klauseln verwendet werden.
-   **Selektivität:** Indizes sind effektiver für Spalten mit hoher Selektivität, d.h. Spalten, die viele unterschiedliche Werte enthalten. Ein Index für eine Spalte mit nur wenigen eindeutigen Werten (z.B. eine Ja/Nein-Spalte) ist oft nicht sehr hilfreich.

## Verwaltung von Indizes

Neben dem Erstellen von Indizes gibt es auch SQL-Befehle zum Anzeigen und Löschen von Indizes:

-   **Anzeigen von Indizes:** Die Syntax zum Anzeigen von Indizes ist datenbankspezifisch (z.B. `SHOW INDEX FROM tabellenname` in MySQL, `\d+ tabellenname` in PostgreSQL).
-   **Löschen von Indizes:** Der `DROP INDEX`-Befehl wird verwendet, um einen Index zu entfernen. Die Syntax kann je nach DBMS variieren (z.B. `DROP INDEX indexname ON tabellenname` in MySQL und PostgreSQL, `DROP INDEX indexname` in SQL Server).

    ```sql
    -- Beispiel zum Löschen eines Index in MySQL oder PostgreSQL
    DROP INDEX idx_name ON Kunden;

    -- Beispiel zum Löschen eines Index in SQL Server
    DROP INDEX idx_name ON Kunden;
    ```

## Fazit

Indizes sind ein wesentliches Werkzeug zur Optimierung der Abfrageperformance in relationalen Datenbanken. Durch das Erstellen von Indizes auf häufig abgefragten Spalten können Datenbanken Datensätze deutlich schneller finden. Es ist jedoch wichtig, die Vor- und Nachteile von Indizes zu verstehen und sie bedacht einzusetzen, um die Gesamtperformance der Datenbankanwendung zu optimieren. Die Auswahl der richtigen Spalten für Indizes und das Verständnis der Auswirkungen auf Schreiboperationen sind entscheidende Aspekte der Datenbankgestaltung und -optimierung.

## Links und Quellen

-   **Database index - Wikipedia (Deutsch):** [https://de.wikipedia.org/wiki/Datenbankindex](https://de.wikipedia.org/wiki/Datenbankindex)
-   **Database index - Wikipedia (Englischsprachig):** [https://en.wikipedia.org/wiki/Database_index](https://en.wikipedia.org/wiki/Database_index)
-   **SQL CREATE INDEX Statement - W3Schools:** [https://www.w3schools.com/sql/sql_create_index.asp](https://www.w3schools.com/sql/sql_create_index.asp) (Englischsprachiges Tutorial)
-   **SQL DROP INDEX Statement - W3Schools:** [https://www.w3schools.com/sql/sql_drop_index.asp](https://www.w3schools.com/sql/sql_drop_index.asp) (Englischsprachiges Tutorial)
-   **Dokumentation des spezifischen DBMS, das Sie verwenden (z.B. MySQL, PostgreSQL, SQL Server, Oracle) für die genaue Syntax und Optionen von `CREATE INDEX` und `DROP INDEX`.**
    -   **MySQL CREATE INDEX:** [https://dev.mysql.com/doc/refman/8.0/en/create-index.html](https://dev.mysql.com/doc/refman/8.0/en/create-index.html) (Englischsprachig)
    -   **PostgreSQL CREATE INDEX:** [https://www.postgresql.org/docs/current/sql-createindex.html](https://www.postgresql.org/docs/current/sql-createindex.html) (Englischsprachig)
    -   **SQL Server CREATE INDEX:** [https://learn.microsoft.com/en-us/sql/t-sql/statements/create-index-transact-sql?view=sql-server-ver16](https://learn.microsoft.com/en-us/sql/t-sql/statements/create-index-transact-sql?view=sql-server-ver16) (Englischsprachig)
    -   **Oracle CREATE INDEX:** Suche nach "Oracle CREATE INDEX syntax"
    -   **MySQL DROP INDEX:** [https://dev.mysql.com/doc/refman/8.0/en/drop-index.html](https://dev.mysql.com/doc/refman/8.0/en/drop-index.html) (Englischsprachig)
    -   **PostgreSQL DROP INDEX:** [https://www.postgresql.org/docs/current/sql-dropindex.html](https://www.postgresql.org/docs/current/sql-dropindex.html) (Englischsprachig)
    -   **SQL Server DROP INDEX:** [https://learn.microsoft.com/en-us/sql/t-sql/statements/drop-index-transact-sql?view=sql-server-ver16](https://learn.microsoft.com/en-us/sql/t-sql/statements/drop-index-transact-sql?view=sql-server-ver16) (Englischsprachig)
    -   **Oracle DROP INDEX:** Suche nach "Oracle DROP INDEX syntax"
-   **Artikel und Blogbeiträge zum Thema "Datenbankindexierung" und "Best Practices für SQL-Indizes".**

-----

> **Fehler gefunden?** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
