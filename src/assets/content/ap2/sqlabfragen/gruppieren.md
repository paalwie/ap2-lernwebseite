# Konzipieren und Umsetzen von kundenspezifischen Softwareanwendungen: Datenbankabfrage, Datenpflege mit SQL erstellen können - Gruppieren (GROUP BY, HAVING)

## Einführung

Die `GROUP BY`-Klausel in SQL wird verwendet, um Zeilen mit gleichen Werten in einer oder mehreren Spalten zu Gruppen zusammenzufassen. Sie wird oft in Verbindung mit Aggregatfunktionen (wie `COUNT()`, `SUM()`, `AVG()`, `MIN()`, `MAX()`) verwendet, um zusammenfassende Informationen für jede Gruppe zu berechnen. Die `HAVING`-Klausel wird verwendet, um Gruppen zu filtern, nachdem die Gruppierung erfolgt ist. Sie ähnelt der `WHERE`-Klausel, wird aber auf Gruppen anstelle von einzelnen Zeilen angewendet.

## 1. Gruppieren von Daten mit GROUP BY

Die `GROUP BY`-Klausel wird nach der `WHERE`-Klausel (falls vorhanden) und vor der `ORDER BY`-Klausel (falls vorhanden) in einer `SELECT`-Anweisung platziert.

### Syntax von GROUP BY

Die allgemeine Syntax für die `GROUP BY`-Klausel sieht wie folgt aus:

```sql
SELECT spalte1, spalte2, ..., aggregatfunktion(spalte)
FROM tabellenname
[WHERE bedingung]
GROUP BY spalte1, spalte2, ...
[ORDER BY ...];
```

### Komponenten der GROUP BY-Klausel

-   **`GROUP BY spalte1, spalte2, ...`:** Gibt die Spalten an, nach denen die Zeilen gruppiert werden sollen. Alle Spalten, die nicht in einer Aggregatfunktion verwendet werden und in der `SELECT`-Liste erscheinen, müssen in der `GROUP BY`-Klausel aufgeführt sein.

### Beispiele für Gruppieren mit GROUP BY

**Beispiel 1: Zählen der Anzahl der Kunden in jeder Stadt**

```sql
SELECT Stadt, COUNT(*) AS AnzahlKunden
FROM Kunden
GROUP BY Stadt;
```

Dieser Befehl gruppiert die Kunden nach ihrer `Stadt` und zählt dann die Anzahl der Kunden in jeder Stadt mithilfe der Aggregatfunktion `COUNT(*)`. Das Ergebnis zeigt jede Stadt und die zugehörige Anzahl von Kunden.

**Beispiel 2: Ermitteln des durchschnittlichen Preises für jede Produktkategorie**

```sql
SELECT Kategorie, AVG(Preis) AS Durchschnittspreis
FROM Produkte
GROUP BY Kategorie;
```

Hier werden die Produkte nach ihrer `Kategorie` gruppiert, und für jede Kategorie wird der durchschnittliche `Preis` berechnet.

**Beispiel 3: Finden des maximalen Bestellbetrags für jeden Kunden**

```sql
SELECT KundenID, MAX(Gesamtbetrag) AS MaximalerBestellbetrag
FROM Bestellungen
GROUP BY KundenID;
```

Dieser Befehl gruppiert die Bestellungen nach der `KundenID` und ermittelt für jeden Kunden den höchsten `Gesamtbetrag` einer seiner Bestellungen.

**Beispiel 4: Gruppieren nach mehreren Spalten**

```sql
SELECT Stadt, Geschlecht, COUNT(*) AS Anzahl
FROM Kunden
GROUP BY Stadt, Geschlecht;
```

Es ist möglich, nach mehreren Spalten zu gruppieren. In diesem Fall werden Zeilen nur dann in derselben Gruppe zusammengefasst, wenn sie in allen angegebenen Spalten die gleichen Werte haben. Dieses Beispiel zählt die Anzahl der Kunden für jede Kombination aus `Stadt` und `Geschlecht`.

## 2. Filtern von Gruppen mit HAVING

Die `HAVING`-Klausel wird verwendet, um Gruppen zu filtern, die durch die `GROUP BY`-Klausel erstellt wurden. Sie wird nach der `GROUP BY`-Klausel und vor der `ORDER BY`-Klausel (falls vorhanden) platziert. Die Bedingungen in der `HAVING`-Klausel beziehen sich auf die Ergebnisse der Aggregatfunktionen oder die Gruppierungsspalten.

### Syntax von HAVING

Die allgemeine Syntax für die `HAVING`-Klausel sieht wie folgt aus:

```sql
SELECT spalte1, spalte2, ..., aggregatfunktion(spalte)
FROM tabellenname
[WHERE bedingung]
GROUP BY spalte1, spalte2, ...
HAVING gruppen_bedingung
[ORDER BY ...];
```

### Komponenten der HAVING-Klausel

-   **`HAVING gruppen_bedingung`:** Gibt die Bedingung an, die eine Gruppe erfüllen muss, um in der Ergebnismenge enthalten zu sein. Diese Bedingung kann Aggregatfunktionen und die Gruppierungsspalten verwenden.

### Beispiele für Filtern von Gruppen mit HAVING

**Beispiel 1: Anzeigen nur der Städte mit mehr als einem Kunden**

```sql
SELECT Stadt, COUNT(*) AS AnzahlKunden
FROM Kunden
GROUP BY Stadt
HAVING COUNT(*) > 1;
```

Dieser Befehl gruppiert die Kunden nach Stadt und zeigt dann nur die Städte an, in denen mehr als ein Kunde registriert ist. Die `WHERE`-Klausel könnte verwendet werden, um einzelne Zeilen vor der Gruppierung zu filtern, während `HAVING` Gruppen nach der Gruppierung filtert.

**Beispiel 2: Finden der Produktkategorien mit einem durchschnittlichen Preis über 10 Euro**

```sql
SELECT Kategorie, AVG(Preis) AS Durchschnittspreis
FROM Produkte
GROUP BY Kategorie
HAVING AVG(Preis) > 10;
```

Hier werden die Produkte nach Kategorie gruppiert, und es werden nur die Kategorien angezeigt, deren durchschnittlicher Preis über 10 Euro liegt.

**Beispiel 3: Anzeigen der Kunden, die mehr als zwei Bestellungen aufgegeben haben**

```sql
SELECT KundenID, COUNT(*) AS AnzahlBestellungen
FROM Bestellungen
GROUP BY KundenID
HAVING COUNT(*) > 2;
```

Dieser Befehl gruppiert die Bestellungen nach `KundenID` und zeigt nur die Kunden an, die mehr als zwei Bestellungen in der Tabelle haben.

## Unterschied zwischen WHERE und HAVING

-   Die `WHERE`-Klausel filtert einzelne Zeilen, bevor die Gruppierung stattfindet. Sie kann keine Aggregatfunktionen verwenden.
-   Die `HAVING`-Klausel filtert Gruppen, nachdem die Gruppierung stattgefunden hat. Sie wird oft mit Aggregatfunktionen verwendet, um Bedingungen für die Gruppen zu definieren.

## Reihenfolge der Klauseln in einer SELECT-Anweisung

Die typische Reihenfolge der Klauseln in einer `SELECT`-Anweisung ist:

1.  `SELECT` (Auswahl der Spalten und optional Aggregatfunktionen)
2.  `FROM` (Angabe der Tabelle(n))
3.  `WHERE` (Filtern einzelner Zeilen)
4.  `GROUP BY` (Gruppieren von Zeilen mit gleichen Werten)
5.  `HAVING` (Filtern von Gruppen basierend auf Bedingungen)
6.  `ORDER BY` (Sortieren der Endergebnismenge)

## Fazit

Die `GROUP BY`- und `HAVING`-Klauseln sind mächtige Werkzeuge in SQL, um Daten zu analysieren und zusammenzufassen. `GROUP BY` ermöglicht es, Zeilen basierend auf gemeinsamen Spaltenwerten zu gruppieren, während `HAVING` verwendet wird, um diese resultierenden Gruppen nach bestimmten Kriterien zu filtern, insbesondere basierend auf den Ergebnissen von Aggregatfunktionen. Das Verständnis und die korrekte Anwendung dieser Klauseln sind entscheidend für die Erstellung aussagekräftiger Berichte und Analysen aus Datenbankdaten.

## Links und Quellen

-   **SQL GROUP BY Statement - W3Schools:** [https://www.w3schools.com/sql/sql_groupby.asp](https://www.w3schools.com/sql/sql_groupby.asp) (Englischsprachiges Tutorial)
-   **SQL HAVING Clause - W3Schools:** [https://www.w3schools.com/sql/sql_having.asp](https://www.w3schools.com/sql/sql_having.asp) (Englischsprachiges Tutorial)
-   **SQL Aggregate Functions - W3Schools:** [https://www.w3schools.com/sql/sql_functions.asp](https://www.w3schools.com/sql/sql_functions.asp) (Überblick über Aggregatfunktionen)
-   **Dokumentation des spezifischen DBMS, das Sie verwenden (z.B. MySQL, PostgreSQL, SQL Server, Oracle) für die genaue Syntax und Optionen der `GROUP BY`- und `HAVING`-Klauseln.**
    -   **MySQL GROUP BY Clause:** [https://dev.mysql.com/doc/refman/8.0/en/group-by-handling.html](https://dev.mysql.com/doc/refman/8.0/en/group-by-handling.html) (Englischsprachig)
    -   **PostgreSQL GROUP BY Clause:** [https://www.postgresql.org/docs/current/sql-select.html#SQL-GROUPBY](https://www.postgresql.org/docs/current/sql-select.html#SQL-GROUPBY) (Englischsprachig)
    -   **SQL Server GROUP BY Clause (Transact-SQL):** [https://learn.microsoft.com/en-us/sql/t-sql/queries/group-by-transact-sql?view=sql-server-ver16](https://learn.microsoft.com/en-us/sql/t-sql/queries/group-by-transact-sql?view=sql-server-ver16) (Englischsprachig)
    -   **Oracle GROUP BY Clause:** Suche nach "Oracle GROUP BY syntax"
    -   **MySQL HAVING Clause:** [https://dev.mysql.com/doc/refman/8.0/en/having-clause.html](https://dev.mysql.com/doc/refman/8.0/en/having-clause.html) (Englischsprachig)
    -   **PostgreSQL HAVING Clause:** [https://www.postgresql.org/docs/current/sql-select.html#SQL-HAVING](https://www.postgresql.org/docs/current/sql-select.html#SQL-HAVING) (Englischsprachig)
    -   **SQL Server HAVING Clause (Transact-SQL):** [https://learn.microsoft.com/en-us/sql/t-sql/queries/having-transact-sql?view=sql-server-ver16](https://learn.microsoft.com/en-us/sql/t-sql/queries/having-transact-sql?view=sql-server-ver16) (Englischsprachig)
    -   **Oracle HAVING Clause:** Suche nach "Oracle HAVING syntax"
-   **Artikel und Blogbeiträge zum Thema "SQL GROUP BY" und "SQL HAVING".**

-----

> **Fehler gefunden?** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
