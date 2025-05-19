# Konzipieren und Umsetzen von kundenspezifischen Softwareanwendungen: Datenbankabfrage, Datenpflege mit SQL erstellen können - Sortieren (ORDER BY)

## Einführung

Die `ORDER BY`-Klausel in SQL wird verwendet, um die Reihenfolge der Zeilen in der Ergebnismenge einer `SELECT`-Anweisung zu bestimmen. Sie ermöglicht es, die abgerufenen Daten nach einer oder mehreren Spalten in aufsteigender (A-Z, 1-9) oder absteigender (Z-A, 9-1) Reihenfolge zu sortieren.

## SQL-Befehl: ORDER BY

Die `ORDER BY`-Klausel wird am Ende einer `SELECT`-Anweisung platziert.

### Syntax von ORDER BY

Die allgemeine Syntax für die `ORDER BY`-Klausel sieht wie folgt aus:

```sql
SELECT spalte1, spalte2, ...
FROM tabellenname
[WHERE bedingung]
ORDER BY spalte_für_sortierung1 [ASC|DESC], spalte_für_sortierung2 [ASC|DESC], ...;
```

### Komponenten der ORDER BY-Klausel

-   **`ORDER BY spalte_für_sortierung1, spalte_für_sortierung2, ...`:** Gibt die Spalten an, nach denen die Ergebnismenge sortiert werden soll. Sie können nach einer oder mehreren Spalten sortieren, indem Sie ihre Namen durch Kommas getrennt auflisten. Die Sortierung erfolgt zuerst nach der ersten angegebenen Spalte, dann innerhalb dieser Sortierung nach der zweiten Spalte usw.
-   **`ASC` (optional):** Gibt an, dass die Sortierung in aufsteigender Reihenfolge erfolgen soll (Standard).
-   **`DESC` (optional):** Gibt an, dass die Sortierung in absteigender Reihenfolge erfolgen soll.

### Beispiele für Sortieren mit ORDER BY

**Beispiel 1: Auswählen aller Kunden, sortiert nach ihrem Namen in aufsteigender Reihenfolge**

```sql
SELECT Name, Stadt
FROM Kunden
ORDER BY Name ASC;
```

Dieser Befehl gibt die Namen und Städte aller Kunden zurück, sortiert alphabetisch nach dem Nachnamen (A-Z). Da `ASC` die Standardeinstellung ist, könnte es auch weggelassen werden: `ORDER BY Name`.

**Beispiel 2: Auswählen aller Produkte, sortiert nach ihrem Preis in absteigender Reihenfolge**

```sql
SELECT Produktname, Preis
FROM Produkte
ORDER BY Preis DESC;
```

Dieser Befehl gibt die Namen und Preise aller Produkte zurück, sortiert vom höchsten zum niedrigsten Preis.

**Beispiel 3: Auswählen aller Bestellungen, sortiert zuerst nach Kundennummer (aufsteigend) und dann nach Bestelldatum (absteigend)**

```sql
SELECT BestellID, KundenID, Bestelldatum
FROM Bestellungen
ORDER BY KundenID ASC, Bestelldatum DESC;
```

Hier werden die Bestellungen zuerst nach der `KundenID` in aufsteigender Reihenfolge sortiert. Innerhalb jeder `KundenID` werden die Bestellungen dann nach dem `Bestelldatum` in absteigender Reihenfolge sortiert (die neuesten Bestellungen zuerst).

**Beispiel 4: Sortieren nach einer Spalte, die nicht in der SELECT-Liste enthalten ist**

```sql
SELECT Name
FROM Kunden
ORDER BY Geburtsdatum DESC;
```

Es ist möglich, nach einer Spalte zu sortieren, die nicht explizit in der `SELECT`-Liste aufgeführt ist. In diesem Fall werden nur die Namen der Kunden zurückgegeben, aber die Reihenfolge basiert auf ihrem Geburtsdatum (die neuesten Geburtsdaten zuerst).

**Beispiel 5: Sortieren mit Aliasen**

```sql
SELECT Produktname AS Name, Preis AS Kosten
FROM Produkte
ORDER BY Name ASC;
```

Wenn Sie Aliasse für Spalten in der `SELECT`-Liste verwenden, können Sie auch die Aliasse in der `ORDER BY`-Klausel verwenden. Hier werden die Produkte alphabetisch nach dem Alias `Name` (ursprünglich `Produktname`) sortiert.

**Beispiel 6: Sortieren nach einer berechneten Spalte**

```sql
SELECT Produktname, Preis, Preis * 1.19 AS Preis_mit_MwSt
FROM Produkte
ORDER BY Preis_mit_MwSt DESC;
```

Sie können auch nach einer berechneten Spalte sortieren, entweder indem Sie den gesamten Ausdruck wiederholen oder (in einigen DBMS) den Alias der berechneten Spalte verwenden.

## Wichtige Hinweise zur Verwendung von ORDER BY

-   Die `ORDER BY`-Klausel sollte immer die letzte Klausel in einer `SELECT`-Anweisung sein (nach `FROM` und optional `WHERE`, `GROUP BY`, `HAVING`).
-   Die Sortierung erfolgt standardmäßig aufsteigend (`ASC`), wenn keine andere Richtung angegeben wird.
-   Sie können nach mehreren Spalten sortieren, wobei die Reihenfolge der Spalten in der `ORDER BY`-Klausel die Priorität der Sortierung bestimmt.
-   Die Performance der `ORDER BY`-Klausel kann bei sehr großen Tabellen beeinträchtigt werden, insbesondere wenn nach nicht-indizierten Spalten sortiert wird. Das Erstellen von Indizes auf häufig sortierten Spalten kann die Performance verbessern.
-   Die Behandlung von `NULL`-Werten in der Sortierung kann je nach DBMS variieren. In den meisten Systemen werden `NULL`-Werte entweder als die kleinsten oder die größten Werte behandelt. Sie können dies in einigen DBMS explizit steuern (z.B. `NULLS FIRST` oder `NULLS LAST`).

## Fazit

Die `ORDER BY`-Klausel ist ein unverzichtbares Werkzeug in SQL, um die Ergebnismenge einer Abfrage in einer bestimmten Reihenfolge anzuzeigen. Dies verbessert die Lesbarkeit und Nutzbarkeit der abgerufenen Daten, insbesondere in Anwendungen, in denen die Reihenfolge der Informationen wichtig ist (z.B. Anzeigen von Produkten nach Preis, Auflisten von Kunden alphabetisch). Durch die Möglichkeit, nach mehreren Spalten und in verschiedenen Richtungen zu sortieren, bietet `ORDER BY` eine hohe Flexibilität bei der Präsentation der Daten.

## Links und Quellen

-   **SQL ORDER BY Keyword - W3Schools:** [https://www.w3schools.com/sql/sql_orderby.asp](https://www.w3schools.com/sql/sql_orderby.asp) (Englischsprachiges Tutorial)
-   **Dokumentation des spezifischen DBMS, das Sie verwenden (z.B. MySQL, PostgreSQL, SQL Server, Oracle) für die genaue Syntax und Optionen der `ORDER BY`-Klausel.**
    -   **MySQL ORDER BY Clause:** [https://dev.mysql.com/doc/refman/8.0/en/order-by-clause.html](https://dev.mysql.com/doc/refman/8.0/en/order-by-clause.html) (Englischsprachig)
    -   **PostgreSQL ORDER BY Clause:** [https://www.postgresql.org/docs/current/sql-select.html#SQL-ORDERBY](https://www.postgresql.org/docs/current/sql-select.html#SQL-ORDERBY) (Englischsprachig)
    -   **SQL Server ORDER BY Clause (Transact-SQL):** [https://learn.microsoft.com/en-us/sql/t-sql/queries/order-by-clause-transact-sql?view=sql-server-ver16](https://learn.microsoft.com/en-us/sql/t-sql/queries/order-by-clause-transact-sql?view=sql-server-ver16) (Englischsprachig)
    -   **Oracle ORDER BY Clause:** Suche nach "Oracle ORDER BY syntax"
-   **Artikel und Blogbeiträge zum Thema "SQL ORDER BY Clause" und "Best Practices für das Sortieren von SQL-Ergebnissen".**

-----

> **Fehler gefunden?** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
