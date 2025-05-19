# Konzipieren und Umsetzen von kundenspezifischen Softwareanwendungen: Datenbankabfrage, Datenpflege mit SQL erstellen können - Selektion (SELECT FROM ... WHERE) und (SELECT ... (SELECT ...))

## Einführung

Die **Selektion** in SQL bezieht sich auf den Prozess des Auswählens von Zeilen aus einer Tabelle oder mehreren Tabellen basierend auf bestimmten Bedingungen. Der primäre Mechanismus hierfür ist die `WHERE`-Klausel, die an eine `SELECT FROM`-Anweisung angehängt wird. Zusätzlich können Subqueries (verschachtelte `SELECT`-Anweisungen) in der `WHERE`-Klausel verwendet werden, um komplexere Selektionskriterien zu definieren.

## 1. Selektion mit der WHERE-Klausel

Die `WHERE`-Klausel wird verwendet, um Filterbedingungen festzulegen, die bestimmen, welche Zeilen in der Ergebnismenge der `SELECT`-Anweisung enthalten sein sollen.

### Syntax von SELECT FROM ... WHERE

```sql
SELECT spalte1, spalte2, ...
FROM tabellenname
WHERE bedingung;
```

### Komponenten der WHERE-Klausel

Die `WHERE`-Klausel enthält eine oder mehrere Bedingungen, die mit logischen Operatoren (`AND`, `OR`, `NOT`) kombiniert werden können. Die Bedingungen verwenden Vergleichsoperatoren (`=`, `>`, `<`, `>=`, `<=`, `<>`, `!=`) und andere spezielle Operatoren wie `BETWEEN`, `LIKE`, `IN`, `IS NULL`, `IS NOT NULL`.

### Beispiele für Selektion mit WHERE

**Beispiel 1: Auswählen aller Kunden aus der Stadt "Berlin"**

```sql
SELECT Name, Email
FROM Kunden
WHERE Stadt = 'Berlin';
```

Dieser Befehl gibt den Namen und die E-Mail-Adresse aller Kunden zurück, deren `Stadt`-Spalte den Wert 'Berlin' enthält.

**Beispiel 2: Auswählen aller Produkte mit einem Preis über 10 Euro**

```sql
SELECT Produktname, Preis
FROM Produkte
WHERE Preis > 10;
```

**Beispiel 3: Auswählen aller Bestellungen, die zwischen zwei bestimmten Daten aufgegeben wurden**

```sql
SELECT BestellID, Bestelldatum
FROM Bestellungen
WHERE Bestelldatum BETWEEN '2025-05-01' AND '2025-05-15';
```

Der `BETWEEN`-Operator wählt Werte innerhalb eines bestimmten Bereichs (einschließlich der Endwerte) aus.

**Beispiel 4: Auswählen aller Kunden, deren Name mit "Sch" beginnt**

```sql
SELECT Name
FROM Kunden
WHERE Name LIKE 'Sch%';
```

Der `LIKE`-Operator wird für Mustervergleiche verwendet. `%` ist ein Platzhalter für eine beliebige Sequenz von Zeichen (einschließlich keiner).

**Beispiel 5: Auswählen aller Produkte mit einem Preis von 5 oder 10 Euro**

```sql
SELECT Produktname, Preis
FROM Produkte
WHERE Preis IN (5, 10);
```

Der `IN`-Operator prüft, ob ein Wert mit einem der Werte in einer Liste übereinstimmt.

**Beispiel 6: Auswählen aller Kunden, deren E-Mail-Adresse nicht bekannt ist**

```sql
SELECT Name
FROM Kunden
WHERE Email IS NULL;
```

Die Operatoren `IS NULL` und `IS NOT NULL` werden verwendet, um auf Null-Werte zu prüfen.

**Beispiel 7: Kombinieren von Bedingungen mit logischen Operatoren**

```sql
SELECT Name, Alter, Stadt
FROM Kunden
WHERE Stadt = 'München' AND Alter > 25;
```

Dieser Befehl wählt alle Kunden aus München aus, die älter als 25 Jahre sind.

```sql
SELECT Produktname, Preis
FROM Produkte
WHERE Preis < 5 OR Preis > 15;
```

Dieser Befehl wählt alle Produkte aus, deren Preis unter 5 Euro oder über 15 Euro liegt.

```sql
SELECT Name, Email
FROM Kunden
WHERE NOT Stadt = 'Berlin';
```

Dieser Befehl wählt alle Kunden aus, die nicht in Berlin wohnen.

## 2. Selektion mit Subqueries (Unterabfragen) in der WHERE-Klausel

Eine Subquery (oder innere Abfrage) ist eine `SELECT`-Anweisung, die innerhalb einer anderen SQL-Anweisung verschachtelt ist. Subqueries können in der `WHERE`-Klausel verwendet werden, um dynamische Bedingungen für die Selektion zu erstellen.

### Syntax von SELECT ... WHERE ... (SELECT ...)

Die allgemeine Struktur sieht wie folgt aus:

```sql
SELECT spalte1, spalte2, ...
FROM tabellenname
WHERE spalte_für_vergleich OPERATOR (SELECT spalte_aus_anderer_tabelle FROM andere_tabelle WHERE bedingung_für_innere_abfrage);
```

Der `OPERATOR` kann ein Vergleichsoperator (`=`, `>`, `<`, etc.), ein Mengenoperator (`IN`, `NOT IN`, `EXISTS`, `NOT EXISTS`), oder ein anderer geeigneter Operator sein.

### Beispiele für Selektion mit Subqueries in WHERE

**Beispiel 1: Auswählen aller Bestellungen von Kunden, die in "Berlin" wohnen**

```sql
SELECT BestellID, KundenID, Bestelldatum
FROM Bestellungen
WHERE KundenID IN (SELECT KundenID FROM Kunden WHERE Stadt = 'Berlin');
```

Die innere Abfrage (`SELECT KundenID FROM Kunden WHERE Stadt = 'Berlin'`) gibt eine Liste aller `KundenID`s von Kunden zurück, die in Berlin wohnen. Die äußere Abfrage wählt dann alle Bestellungen aus, deren `KundenID` in dieser Liste enthalten ist.

**Beispiel 2: Auswählen aller Produkte, deren Preis höher ist als der durchschnittliche Preis aller Produkte**

```sql
SELECT Produktname, Preis
FROM Produkte
WHERE Preis > (SELECT AVG(Preis) FROM Produkte);
```

Die innere Abfrage (`SELECT AVG(Preis) FROM Produkte`) berechnet den durchschnittlichen Preis aller Produkte. Die äußere Abfrage wählt dann alle Produkte aus, deren Preis über diesem Durchschnitt liegt.

**Beispiel 3: Auswählen aller Kunden, die mindestens eine Bestellung aufgegeben haben (mit `EXISTS`)**

```sql
SELECT KundenID, Name
FROM Kunden
WHERE EXISTS (SELECT 1 FROM Bestellungen WHERE Bestellungen.KundenID = Kunden.KundenID);
```

Die innere Abfrage (`SELECT 1 FROM Bestellungen WHERE Bestellungen.KundenID = Kunden.KundenID`) prüft, ob für den aktuellen Kunden in der äußeren Abfrage mindestens ein Eintrag in der Tabelle `Bestellungen` existiert.

**Beispiel 4: Auswählen aller Kunden, die keine Bestellungen aufgegeben haben (mit `NOT EXISTS`)**

```sql
SELECT KundenID, Name
FROM Kunden
WHERE NOT EXISTS (SELECT 1 FROM Bestellungen WHERE Bestellungen.KundenID = Kunden.KundenID);
```

Dies ist das Gegenteil des vorherigen Beispiels. Es wählt alle Kunden aus, für die keine entsprechenden Einträge in der Tabelle `Bestellungen` gefunden werden.

## Arten von Subqueries

-   **Single-row Subqueries:** Geben genau eine Zeile und eine Spalte zurück. Sie können mit einfachen Vergleichsoperatoren (`=`, `>`, `<`, etc.) verwendet werden. (Beispiel 2)
-   **Multiple-row Subqueries:** Geben mehrere Zeilen zurück (in der Regel eine Spalte). Sie werden oft mit Mengenoperatoren (`IN`, `NOT IN`) verwendet. (Beispiel 1)
-   **Correlated Subqueries:** Beziehen sich auf Spalten der äußeren Abfrage. Sie werden für jede Zeile der äußeren Abfrage einmal ausgeführt. (`EXISTS` und `NOT EXISTS`-Beispiele sind oft korreliert.)

## Fazit

Die `WHERE`-Klausel ist ein mächtiges Werkzeug in SQL, um die Ergebnismenge einer `SELECT`-Anweisung durch die Angabe von Filterbedingungen zu begrenzen (Selektion). Durch die Kombination verschiedener Vergleichs- und logischer Operatoren können komplexe Auswahlkriterien definiert werden. Subqueries in der `WHERE`-Klausel ermöglichen es, diese Kriterien dynamisch zu gestalten, indem die Ergebnisse einer inneren Abfrage in der Bedingung der äußeren Abfrage verwendet werden. Dies eröffnet die Möglichkeit für sehr flexible und komplexe Datenabfragen.

## Links und Quellen

-   **SQL WHERE Clause - W3Schools:** [https://www.w3schools.com/sql/sql_where.asp](https://www.w3schools.com/sql/sql_where.asp) (Englischsprachiges Tutorial)
-   **SQL AND, OR and NOT Operators - W3Schools:** [https://www.w3schools.com/sql/sql_and_or.asp](https://www.w3schools.com/sql/sql_and_or.asp) (Englischsprachiges Tutorial)
-   **SQL LIKE Operator - W3Schools:** [https://www.w3schools.com/sql/sql_like.asp](https://www.w3schools.com/sql/sql_like.asp) (Englischsprachiges Tutorial)
-   **SQL IN Operator - W3Schools:** [https://www.w3schools.com/sql/sql_in.asp](https://www.w3schools.com/sql/sql_in.asp) (Englischsprachiges Tutorial)
-   **SQL BETWEEN Operator - W3Schools:** [https://www.w3schools.com/sql/sql_between.asp](https://www.w3schools.com/sql/sql_between.asp) (Englischsprachiges Tutorial)
-   **SQL IS NULL Operator - W3Schools:** [https://www.w3schools.com/sql/sql_isnull.asp](https://www.w3schools.com/sql/sql_isnull.asp) (Englischsprachiges Tutorial)
-   **SQL Subqueries - W3Schools:** [https://www.w3schools.com/sql/sql_subqueries.asp](https://www.w3schools.com/sql/sql_subqueries.asp) (Englischsprachiges Tutorial)
-   **SQL EXISTS Operator - W3Schools:** [https://www.w3schools.com/sql/sql_exists.asp](https://www.w3schools.com/sql/sql_exists.asp) (Englischsprachiges Tutorial)
-   **Dokumentation des spezifischen DBMS, das Sie verwenden (z.B. MySQL, PostgreSQL, SQL Server, Oracle) für die genaue Syntax und Optionen der `WHERE`-Klausel und Subqueries.**
    -   **MySQL WHERE Clause:** [https://dev.mysql.com/doc/refman/8.0/en/where-clause.html](https://dev.mysql.com/doc/refman/8.0/en/where-clause.html) (Englischsprachig)
    -   **PostgreSQL WHERE Clause:** [https://www.postgresql.org/docs/current/sql-select.html#SQL-WHERE](https://www.postgresql.org/docs/current/sql-select.html#SQL-WHERE) (Englischsprachig)
    -   **SQL Server WHERE (Transact-SQL):** [https://learn.microsoft.com/en-us/sql/t-sql/queries/where-transact-sql?view=sql-server-ver16](https://learn.microsoft.com/en-us/sql/t-sql/queries/where-transact-sql?view=sql-server-ver16) (Englischsprachig)
    -   **Oracle WHERE Clause:** Suche nach "Oracle WHERE clause syntax"
    -   **MySQL Subqueries:** [https://dev.mysql.com/doc/refman/8.0/en/subqueries.html](https://dev.mysql.com/doc/refman/8.0/en/subqueries.html) (Englischsprachig)
    -   **PostgreSQL Subqueries:** [https://www.postgresql.org/docs/current/tutorial-select.html#TUTORIAL-SUBQUERIES](https://www.postgresql.org/docs/current/tutorial-select.html#TUTORIAL-SUBQUERIES) (Englischsprachig)
    -   **SQL Server Subqueries:** [https://learn.microsoft.com/en-us/sql/relational-databases/queries/where-transact-sql?view=sql-server-ver16#using-subqueries](https://learn.microsoft.com/en-us/sql/relational-databases/queries/where-transact-sql?view=sql-server-ver16#using-subqueries) (Englischsprachig)
    -   **Oracle Subqueries:** Suche nach "Oracle subqueries syntax"
-   **Artikel und Blogbeiträge zum Thema "SQL WHERE Clause" und "SQL Subqueries".**

-----

> **Fehler gefunden?** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
