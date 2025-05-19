# Konzipieren und Umsetzen von kundenspezifischen Softwareanwendungen: Datenbankabfrage, Datenpflege mit SQL erstellen können - Ausdrücke und Bedingungen

## Einführung

In SQL sind **Ausdrücke** Kombinationen von Literalen, Spaltennamen, Operatoren und Funktionen, die zu einem einzelnen Wert ausgewertet werden können. **Bedingungen** sind spezielle Arten von Ausdrücken, die zu einem booleschen Wert (`TRUE`, `FALSE` oder `UNKNOWN`) ausgewertet werden und typischerweise in `WHERE`- und `HAVING`-Klauseln verwendet werden, um Zeilen oder Gruppen zu filtern. Das Verständnis von Ausdrücken und Bedingungen ist entscheidend für das Schreiben effektiver SQL-Abfragen und Datenmanipulationsanweisungen.

## 1. Ausdrücke (Expressions)

Ausdrücke können in verschiedenen Teilen einer SQL-Anweisung verwendet werden, z.B.:

-   In der `SELECT`-Liste, um berechnete Spalten zu erstellen.
-   In der `WHERE`-Klausel, um Filterbedingungen zu definieren.
-   In der `HAVING`-Klausel, um Gruppen zu filtern.
-   In der `ORDER BY`-Klausel, um die Sortierreihenfolge zu bestimmen (manchmal basierend auf berechneten Werten).
-   In der `SET`-Klausel von `UPDATE`-Anweisungen, um neue Werte zuzuweisen.
-   In der `VALUES`-Klausel von `INSERT`-Anweisungen, um die einzufügenden Werte anzugeben.

### Arten von Ausdrücken

-   **Konstanten (Literale):** Feste Werte wie Zahlen (`10`, `3.14`), Zeichenketten (`'Hallo'`, `"Welt"`), Datumsangaben (`'2025-05-19'`), oder boolesche Werte (`TRUE`, `FALSE`).
-   **Spaltennamen:** Bezeichnen eine Spalte in einer Tabelle (z.B. `Kunden.Name`, `Preis`).
-   **Operatoren:** Symbole, die Operationen auf Operanden ausführen (z.B. arithmetische Operatoren, Vergleichsoperatoren, logische Operatoren).
-   **Funktionen:** Vordefinierte Routinen, die einen Wert basierend auf ihren Eingabeargumenten zurückgeben (z.B. `COUNT()`, `SUM()`, `AVG()`, `SUBSTR()`, `DATE()`).
-   **Kombinationen:** Ausdrücke können aus einer Kombination der oben genannten Elemente bestehen, die durch Operatoren und Klammern verbunden sind.

### Beispiele für Ausdrücke

**Beispiel 1: Arithmetische Ausdrücke in der SELECT-Liste**

```sql
SELECT Produktname, Preis, Preis * 1.19 AS Preis_mit_MwSt
FROM Produkte;
```

Hier ist `Preis * 1.19` ein arithmetischer Ausdruck, der den Preis mit Mehrwertsteuer berechnet.

**Beispiel 2: Zeichenkettenausdrücke (Konkatenation - Syntax kann je nach DBMS variieren)**

```sql
SELECT CONCAT(Name, ' (', Stadt, ')') AS Kundeninfo
FROM Kunden;
```

Hier wird die `CONCAT()`-Funktion (oder ein ähnlicher Operator wie `||` in einigen DBMS) verwendet, um den Namen und die Stadt eines Kunden zu einem kombinierten Zeichenkettenausdruck zu verbinden.

**Beispiel 3: Datums- und Zeitfunktionen**

```sql
SELECT BestellID, Bestelldatum, DATE_ADD(Bestelldatum, INTERVAL 7 DAY) AS Lieferdatum
FROM Bestellungen;
```

Hier wird die Funktion `DATE_ADD()` verwendet, um zum `Bestelldatum` 7 Tage hinzuzufügen und das voraussichtliche Lieferdatum zu berechnen.

## 2. Bedingungen (Conditions)

Bedingungen sind spezielle Ausdrücke, die zu einem booleschen Wert (`TRUE`, `FALSE` oder `UNKNOWN` - bei Vergleichen mit `NULL`) ausgewertet werden. Sie werden hauptsächlich in `WHERE`- und `HAVING`-Klauseln verwendet, um zu bestimmen, welche Zeilen oder Gruppen in der Ergebnismenge enthalten sein sollen.

### Arten von Bedingungen

-   **Vergleichsbedingungen:** Verwenden Vergleichsoperatoren (`=`, `>`, `<`, `>=`, `<=`, `<>`, `!=`) um zwei Ausdrücke zu vergleichen.
-   **Bereichsbedingungen:** Verwenden `BETWEEN` um zu prüfen, ob ein Wert innerhalb eines bestimmten Bereichs liegt.
-   **Mustervergleichsbedingungen:** Verwenden `LIKE` um Zeichenketten mit Mustern zu vergleichen.
-   **Mengenbedingungen:** Verwenden `IN` oder `NOT IN` um zu prüfen, ob ein Wert in einer Liste oder dem Ergebnis einer Subquery enthalten ist.
-   **Nullwertbedingungen:** Verwenden `IS NULL` oder `IS NOT NULL` um zu prüfen, ob ein Wert `NULL` ist.
-   **Boolesche Bedingungen:** Können direkt boolesche Spalten oder Ausdrücke verwenden.
-   **Existenzbedingungen:** Verwenden `EXISTS` oder `NOT EXISTS` um zu prüfen, ob eine Subquery Zeilen zurückgibt.
-   **Logische Bedingungen:** Kombinieren mehrere Bedingungen mit logischen Operatoren (`AND`, `OR`, `NOT`).

### Beispiele für Bedingungen

**Beispiel 1: Vergleichsbedingung in der WHERE-Klausel**

```sql
SELECT Produktname, Preis
FROM Produkte
WHERE Preis > 20;
```

Die Bedingung `Preis > 20` wird für jede Zeile ausgewertet. Nur Zeilen, für die diese Bedingung `TRUE` ist, werden in das Ergebnis aufgenommen.

**Beispiel 2: Bereichsbedingung in der WHERE-Klausel**

```sql
SELECT BestellID, Bestelldatum
FROM Bestellungen
WHERE Bestelldatum BETWEEN '2025-05-01' AND '2025-05-10';
```

**Beispiel 3: Mustervergleichsbedingung in der WHERE-Klausel**

```sql
SELECT Name
FROM Kunden
WHERE Name LIKE 'M%';
```

**Beispiel 4: Mengenbedingung mit einer Liste in der WHERE-Klausel**

```sql
SELECT Produktname, Kategorie
FROM Produkte
WHERE Kategorie IN ('Elektronik', 'Bücher');
```

**Beispiel 5: Nullwertbedingung in der WHERE-Klausel**

```sql
SELECT Name, Email
FROM Kunden
WHERE Email IS NULL;
```

**Beispiel 6: Logische Bedingungen in der WHERE-Klausel**

```sql
SELECT Produktname, Preis, Kategorie
FROM Produkte
WHERE (Kategorie = 'Elektronik' AND Preis > 100) OR (Kategorie = 'Kleidung' AND Preis < 50);
```

Hier werden zwei Bedingungen mit `AND` und dann das Ergebnis mit `OR` kombiniert. Die Klammern legen die Reihenfolge der Auswertung fest.

**Beispiel 7: Bedingung mit einer Subquery in der WHERE-Klausel**

```sql
SELECT BestellID, KundenID
FROM Bestellungen
WHERE KundenID IN (SELECT KundenID FROM Kunden WHERE Stadt = 'Berlin');
```

Die Subquery liefert eine Liste von `KundenID`s, und die äußere Abfrage wählt Bestellungen für diese Kunden aus.

**Beispiel 8: Bedingung in der HAVING-Klausel mit einer Aggregatfunktion**

```sql
SELECT Kategorie, AVG(Preis) AS Durchschnittspreis
FROM Produkte
GROUP BY Kategorie
HAVING AVG(Preis) > 15;
```

Hier wird die Bedingung `AVG(Preis) > 15` auf die Gruppen angewendet, die durch `GROUP BY Kategorie` entstanden sind.

## Wichtige Hinweise zu Ausdrücken und Bedingungen

-   Die Syntax und die verfügbaren Funktionen können je nach dem verwendeten DBMS variieren (z.B. MySQL, PostgreSQL, SQL Server, Oracle).
-   Die korrekte Verwendung von Klammern ist wichtig, um die Reihenfolge der Auswertung in komplexen Ausdrücken und Bedingungen zu steuern.
-   Beim Vergleich von Werten unterschiedlichen Datentyps kann es zu impliziten oder expliziten Typkonvertierungen kommen, die das Ergebnis beeinflussen können. Es ist oft besser, explizite Typkonvertierungsfunktionen zu verwenden (z.B. `CAST()`, `CONVERT()`).
-   Der Umgang mit `NULL`-Werten in Vergleichen ist speziell. Ein direkter Vergleich mit `NULL` (z.B. `spalte = NULL`) ergibt immer `UNKNOWN`, nicht `TRUE` oder `FALSE`. Verwenden Sie `IS NULL` oder `IS NOT NULL`, um auf Null-Werte zu prüfen.

## Fazit

Ausdrücke und Bedingungen sind die Bausteine für die Manipulation und Abfrage von Daten in SQL. Ausdrücke ermöglichen die Berechnung neuer Werte und die Kombination von Daten, während Bedingungen verwendet werden, um Daten basierend auf bestimmten Kriterien zu filtern. Ein solides Verständnis dieser Konzepte und der verfügbaren Operatoren und Funktionen ist unerlässlich, um komplexe und präzise SQL-Anweisungen zu erstellen.

## Links und Quellen

-   **SQL Operators - W3Schools:** [https://www.w3schools.com/sql/sql_operators.asp](https://www.w3schools.com/sql/sql_operators.asp) (Überblick über SQL-Operatoren)
-   **SQL Functions - W3Schools:** [https://www.w3schools.com/sql/sql_functions.asp](https://www.w3schools.com/sql/sql_functions.asp) (Überblick über SQL-Funktionen)
-   **Dokumentation des spezifischen DBMS, das Sie verwenden (z.B. MySQL, PostgreSQL, SQL Server, Oracle) für detaillierte Informationen zu Ausdrücken, Operatoren und Funktionen.**
    -   **MySQL Expressions:** [https://dev.mysql.com/doc/refman/8.0/en/expressions.html](https://dev.mysql.com/doc/refman/8.0/en/expressions.html) (Englischsprachig)
    -   **PostgreSQL Expressions:** [https://www.postgresql.org/docs/current/expressions.html](https://www.postgresql.org/docs/current/expressions.html) (Englischsprachig)
    -   **SQL Server Expressions:** [https://learn.microsoft.com/en-us/sql/t-sql/language-elements/expressions-transact-sql?view=sql-server-ver16](https://learn.microsoft.com/en-us/sql/t-sql/language-elements/expressions-transact-sql?view=sql-server-ver16) (Englischsprachig)
    -   **Oracle Expressions:** Suche nach "Oracle SQL expressions"
    -   **MySQL Functions:** [https://dev.mysql.com/doc/refman/8.0/en/functions.html](https://dev.mysql.com/doc/refman/8.0/en/functions.html) (Englischsprachig)
    -   **PostgreSQL Functions:** [https://www.postgresql.org/docs/current/functions.html](https://www.postgresql.org/docs/current/functions.html) (Englischsprachig)
    -   **SQL Server Functions:** [https://learn.microsoft.com/en-us/sql/t-sql/functions/functions-transact-sql?view=sql-server-ver16](https://learn.microsoft.com/en-us/sql/t-sql/functions/functions-transact-sql?view=sql-server-ver16) (Englischsprachig)
    -   **Oracle Functions:** Suche nach "Oracle SQL functions"
-   **Artikel und Blogbeiträge zum Thema "SQL Ausdrücke" und "SQL Bedingungen".**

-----

> **Fehler gefunden?** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
