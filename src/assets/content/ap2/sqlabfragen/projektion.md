# Konzipieren und Umsetzen von kundenspezifischen Softwareanwendungen: Datenbankabfrage, Datenpflege mit SQL erstellen können - Projektion (SELECT FROM)

## Einführung

Der SQL-Befehl `SELECT` ist das Herzstück jeder Datenbankabfrage. Er wird verwendet, um Daten aus einer oder mehreren Tabellen abzurufen. Die einfachste Form der Datenabfrage ist die **Projektion**, bei der bestimmte Spalten (Attribute) aus einer Tabelle ausgewählt und angezeigt werden. Der grundlegende Befehl hierfür ist `SELECT ... FROM ...`.

## SQL-Befehl: SELECT FROM

Der `SELECT`-Befehl in Kombination mit der `FROM`-Klausel ermöglicht es, die gewünschten Spalten aus einer bestimmten Tabelle auszuwählen.

### Syntax von SELECT FROM

Die grundlegende Syntax für die Projektion mit `SELECT FROM` sieht wie folgt aus:

```sql
SELECT spalte1, spalte2, ...
FROM tabellenname;
```

### Komponenten von SELECT FROM

-   **`SELECT spalte1, spalte2, ...`:** Gibt die Spalten an, die in der Ergebnismenge angezeigt werden sollen. Sie können eine oder mehrere Spalten auswählen, indem Sie ihre Namen durch Kommas getrennt auflisten.
-   **`*` (Sternchen):** Anstelle einzelner Spaltennamen kann ein Sternchen (`*`) verwendet werden, um alle Spalten der Tabelle auszuwählen.
-   **`FROM tabellenname`:** Gibt die Tabelle an, aus der die Daten abgerufen werden sollen.

### Beispiele für SELECT FROM

**Beispiel 1: Auswählen aller Spalten aus der Tabelle "Kunden"**

```sql
SELECT *
FROM Kunden;
```

Dieser Befehl gibt alle Spalten (KundenID, Name, Email, Geburtsdatum, Adresse, Telefonnummer usw.) und alle Zeilen aus der Tabelle `Kunden` zurück.

**Beispiel 2: Auswählen spezifischer Spalten aus der Tabelle "Produkte"**

```sql
SELECT Produktname, Preis
FROM Produkte;
```

Dieser Befehl gibt nur die Spalten `Produktname` und `Preis` für alle Zeilen in der Tabelle `Produkte` zurück.

**Beispiel 3: Auswählen von Spalten mit Aliasen (um die Spaltennamen in der Ergebnismenge zu ändern)**

```sql
SELECT Produktname AS Name, Preis AS Kosten
FROM Produkte;
```

Hier werden die Spalten `Produktname` und `Preis` ausgewählt, aber in der Ergebnismenge werden sie als `Name` bzw. `Kosten` bezeichnet. Das Schlüsselwort `AS` wird verwendet, um einen Alias für eine Spalte oder einen berechneten Ausdruck zu vergeben.

**Beispiel 4: Auswählen von berechneten Werten**

```sql
SELECT Produktname, Preis, Preis * 1.19 AS Preis_mit_MwSt
FROM Produkte;
```

In diesem Beispiel wird eine neue Spalte namens `Preis_mit_MwSt` berechnet, indem der `Preis` mit 1.19 multipliziert wird.

**Beispiel 5: Auswählen eindeutiger Werte mit `DISTINCT`**

```sql
SELECT DISTINCT Stadt
FROM Kunden;
```

Das Schlüsselwort `DISTINCT` wird verwendet, um nur eindeutige Werte in der Ergebnismenge anzuzeigen. In diesem Fall werden nur die unterschiedlichen Städtenamen aus der Tabelle `Kunden` zurückgegeben, Duplikate werden entfernt.

## Die Rolle der Projektion in SQL-Abfragen

Die Projektion (mittels `SELECT`-Klausel) ist ein fundamentaler Bestandteil jeder SQL-Abfrage. Sie bestimmt, welche Attribute (Spalten) der Daten in der Ergebnismenge enthalten sein sollen. In komplexeren Abfragen wird die Projektion oft mit anderen Klauseln wie `WHERE` (zur Filterung von Zeilen), `ORDER BY` (zum Sortieren der Ergebnisse), `GROUP BY` (zum Gruppieren von Zeilen) und `JOIN` (zum Kombinieren von Daten aus mehreren Tabellen) kombiniert.

## Auswahl aller Spalten vs. Auswahl spezifischer Spalten

-   **`SELECT *`:** Einfach zu schreiben und nützlich, wenn Sie alle Daten einer Tabelle benötigen. Allerdings kann es ineffizient sein, insbesondere bei Tabellen mit vielen Spalten oder großen Datenmengen, da unnötige Daten übertragen werden.
-   **`SELECT spalte1, spalte2, ...`:** Effizienter, da nur die tatsächlich benötigten Spalten abgerufen und übertragen werden. Dies kann die Performance verbessern und die Lesbarkeit der Ergebnisse erhöhen. Es ist im Allgemeinen eine bessere Praxis, explizit die benötigten Spalten auszuwählen.

## Fazit

Der SQL-Befehl `SELECT FROM` ist der grundlegende Mechanismus, um Daten aus einer Datenbank abzurufen. Durch die Angabe der gewünschten Spalten (Projektion) können Sie die relevanten Informationen aus einer Tabelle extrahieren. In Kombination mit Aliasen und der Möglichkeit, berechnete Werte anzuzeigen, bietet `SELECT` eine flexible Möglichkeit, die benötigten Daten in der gewünschten Form zu erhalten. Das Verständnis der Projektion ist der erste Schritt, um mächtige und gezielte SQL-Abfragen zu erstellen.

## Links und Quellen

-   **SQL SELECT Statement - W3Schools:** [https://www.w3schools.com/sql/sql_select.asp](https://www.w3schools.com/sql/sql_select.asp) (Englischsprachiges Tutorial)
-   **SQL SELECT DISTINCT Statement - W3Schools:** [https://www.w3schools.com/sql/sql_distinct.asp](https://www.w3schools.com/sql/sql_distinct.asp) (Englischsprachiges Tutorial)
-   **SQL AS Clause - W3Schools:** [https://www.w3schools.com/sql/sql_as.asp](https://www.w3schools.com/sql/sql_as.asp) (Englischsprachiges Tutorial)
-   **Dokumentation des spezifischen DBMS, das Sie verwenden (z.B. MySQL, PostgreSQL, SQL Server, Oracle) für die genaue Syntax und Optionen des `SELECT`-Befehls.**
    -   **MySQL SELECT Syntax:** [https://dev.mysql.com/doc/refman/8.0/en/select.html](https://dev.mysql.com/doc/refman/8.0/en/select.html) (Englischsprachig)
    -   **PostgreSQL SELECT Syntax:** [https://www.postgresql.org/docs/current/sql-select.html](https://www.postgresql.org/docs/current/sql-select.html) (Englischsprachig)
    -   **SQL Server SELECT (Transact-SQL):** [https://learn.microsoft.com/en-us/sql/t-sql/queries/select-transact-sql?view=sql-server-ver16](https://learn.microsoft.com/en-us/sql/t-sql/queries/select-transact-sql?view=sql-server-ver16) (Englischsprachig)
    -   **Oracle SELECT Statement:** Suche nach "Oracle SELECT syntax"
-   **Artikel und Blogbeiträge zum Thema "SQL SELECT Statement" und "Best Practices für SQL-Abfragen".**

-----

> **Fehler gefunden?** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
