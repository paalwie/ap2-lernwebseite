# Konzipieren und Umsetzen von kundenspezifischen Softwareanwendungen: Datenbankabfrage, Datenpflege mit SQL erstellen können - Abfrage über mehrere Tabellen

## Einführung

In relationalen Datenbanken sind Informationen oft auf mehrere Tabellen verteilt, um Redundanzen zu vermeiden und die Datenintegrität zu gewährleisten. Um zusammenhängende Informationen aus diesen Tabellen abzurufen, müssen wir **Joins** verwenden. Ein Join kombiniert Zeilen aus zwei oder mehr Tabellen basierend auf einer Beziehung zwischen bestimmten Spalten.

## SQL-Befehl: JOIN

Der `JOIN`-Befehl wird in der `FROM`-Klausel einer `SELECT`-Anweisung verwendet, um anzugeben, wie Zeilen aus verschiedenen Tabellen kombiniert werden sollen. Es gibt verschiedene Arten von Joins, die unterschiedliche Ergebnismengen liefern.

### Syntax von JOIN

Die allgemeine Syntax für einen `JOIN` sieht wie folgt aus:

```sql
SELECT spaltenliste
FROM tabelle1
[JOIN-TYP] JOIN tabelle2 ON bedingung;
```

Es können auch mehr als zwei Tabellen verknüpft werden:

```sql
SELECT spaltenliste
FROM tabelle1
[JOIN-TYP] JOIN tabelle2 ON bedingung1
[JOIN-TYP] JOIN tabelle3 ON bedingung2
...;
```

### JOIN-Typen

Die wichtigsten JOIN-Typen sind:

1.  **INNER JOIN (oder einfach JOIN):** Gibt nur die Zeilen zurück, bei denen die Join-Bedingung in beiden Tabellen erfüllt ist (d.h., es gibt übereinstimmende Werte in den verknüpften Spalten).

    ```sql
    SELECT Kunden.Name, Bestellungen.BestellID
    FROM Kunden
    INNER JOIN Bestellungen ON Kunden.KundenID = Bestellungen.KundenID;
    ```

2.  **LEFT JOIN (oder LEFT OUTER JOIN):** Gibt alle Zeilen aus der linken Tabelle und die übereinstimmenden Zeilen aus der rechten Tabelle zurück. Wenn es keine Übereinstimmung in der rechten Tabelle gibt, werden für die Spalten der rechten Tabelle `NULL`-Werte eingesetzt.

    ```sql
    SELECT Kunden.Name, Bestellungen.BestellID
    FROM Kunden
    LEFT JOIN Bestellungen ON Kunden.KundenID = Bestellungen.KundenID;
    ```

3.  **RIGHT JOIN (oder RIGHT OUTER JOIN):** Gibt alle Zeilen aus der rechten Tabelle und die übereinstimmenden Zeilen aus der linken Tabelle zurück. Wenn es keine Übereinstimmung in der linken Tabelle gibt, werden für die Spalten der linken Tabelle `NULL`-Werte eingesetzt.

    ```sql
    SELECT Kunden.Name, Bestellungen.BestellID
    FROM Kunden
    RIGHT JOIN Bestellungen ON Kunden.KundenID = Bestellungen.KundenID;
    ```

4.  **FULL JOIN (oder FULL OUTER JOIN):** Gibt alle Zeilen zurück, wenn es eine Übereinstimmung in einer der Tabellen gibt. Wenn es keine Übereinstimmung in der linken Tabelle gibt, werden `NULL`-Werte für die Spalten der linken Tabelle eingesetzt, und wenn es keine Übereinstimmung in der rechten Tabelle gibt, werden `NULL`-Werte für die Spalten der rechten Tabelle eingesetzt. (Nicht alle DBMS unterstützen `FULL JOIN` direkt, z.B. MySQL erfordert eine Kombination aus `LEFT JOIN` und `UNION`).

    ```sql
    -- Beispiel in DBMS, die FULL JOIN unterstützen
    SELECT Kunden.Name, Bestellungen.BestellID
    FROM Kunden
    FULL JOIN Bestellungen ON Kunden.KundenID = Bestellungen.KundenID;
    ```

5.  **CROSS JOIN (oder CARTESIAN JOIN):** Kombiniert jede Zeile der ersten Tabelle mit jeder Zeile der zweiten Tabelle. Wenn Tabelle A `n` Zeilen und Tabelle B `m` Zeilen hat, resultiert ein `CROSS JOIN` in `n * m` Zeilen. In der Regel wird keine `ON`-Bedingung verwendet.

    ```sql
    SELECT Kunden.Name, Produkte.Produktname
    FROM Kunden
    CROSS JOIN Produkte;
    ```

### Die ON-Bedingung

Die `ON`-Klausel gibt die Bedingung an, die erfüllt sein muss, damit Zeilen aus den verknüpften Tabellen kombiniert werden. In den meisten Fällen handelt es sich um einen Vergleich zwischen Spalten, die in den beiden Tabellen in Beziehung stehen (z.B. Fremdschlüsselbeziehungen).

### Beispiele für Abfragen über mehrere Tabellen

**Beispiel 1: Abrufen von Kundennamen und den IDs ihrer Bestellungen (INNER JOIN)**

```sql
SELECT K.Name AS Kundenname, B.BestellID
FROM Kunden K
INNER JOIN Bestellungen B ON K.KundenID = B.KundenID;
```

Hier verwenden wir Aliase (`K` für `Kunden`, `B` für `Bestellungen`), um die Abfrage kürzer und lesbarer zu machen. Der `INNER JOIN` kombiniert nur Kunden mit ihren existierenden Bestellungen.

**Beispiel 2: Abrufen aller Kunden und ihrer Bestell-IDs (auch wenn ein Kunde keine Bestellungen hat) (LEFT JOIN)**

```sql
SELECT K.Name AS Kundenname, B.BestellID
FROM Kunden K
LEFT JOIN Bestellungen B ON K.KundenID = B.KundenID;
```

Dieser `LEFT JOIN` gibt alle Kunden zurück. Wenn ein Kunde Bestellungen hat, werden deren `BestellID`s angezeigt. Hat ein Kunde keine Bestellungen, ist der Wert für `BestellID` `NULL`.

**Beispiel 3: Abrufen aller Bestellungen und der Namen der zugehörigen Kunden (auch wenn eine Bestellung keinen gültigen Kunden hat) (RIGHT JOIN)**

```sql
SELECT K.Name AS Kundenname, B.BestellID
FROM Kunden K
RIGHT JOIN Bestellungen B ON K.KundenID = B.KundenID;
```

Dieser `RIGHT JOIN` gibt alle Bestellungen zurück. Wenn eine Bestellung einem Kunden zugeordnet ist, wird dessen Name angezeigt. Wenn eine Bestellung keine gültige `KundenID` hat (z.B. aufgrund von Dateninkonsistenzen), ist der Wert für `Kundenname` `NULL`.

**Beispiel 4: Abrufen aller Kunden und aller Produkte (CROSS JOIN)**

```sql
SELECT K.Name AS Kundenname, P.Produktname
FROM Kunden K
CROSS JOIN Produkte P;
```

Dieser `CROSS JOIN` erzeugt eine Ergebnismenge, die jede mögliche Kombination aus einem Kunden und einem Produkt enthält. Dies ist in bestimmten Szenarien nützlich, z.B. um alle möglichen Zuordnungen zu generieren, bevor Filter angewendet werden.

**Beispiel 5: Verknüpfen von mehr als zwei Tabellen (Annahme: Tabelle "Bestellpositionen" mit BestellID und ProduktID)**

```sql
SELECT K.Name AS Kundenname, B.BestellID, BP.Menge, P.Produktname
FROM Kunden K
INNER JOIN Bestellungen B ON K.KundenID = B.KundenID
INNER JOIN Bestellpositionen BP ON B.BestellID = BP.BestellID
INNER JOIN Produkte P ON BP.ProduktID = P.ProduktID;
```

Diese Abfrage verknüpft vier Tabellen, um den Namen des Kunden, die Bestell-ID, die Menge der bestellten Produkte und den Namen des Produkts für alle Bestellpositionen abzurufen.

## Impliziter Join (ältere Syntax)

Es gibt auch eine ältere Syntax für Joins, bei der die Tabellen in der `FROM`-Klausel durch Kommas getrennt werden und die Join-Bedingung in der `WHERE`-Klausel angegeben wird. Diese Syntax wird jedoch im Allgemeinen als weniger lesbar und schwieriger zu warten angesehen und sollte vermieden werden.

```sql
-- Beispiel für einen impliziten INNER JOIN (nicht empfohlen)
SELECT Kunden.Name, Bestellungen.BestellID
FROM Kunden, Bestellungen
WHERE Kunden.KundenID = Bestellungen.KundenID;
```

## Fazit

Die Fähigkeit, Daten über mehrere Tabellen hinweg abzufragen, ist ein Kernkonzept relationaler Datenbanken. Die verschiedenen Arten von `JOIN`-Operationen ermöglichen es, Daten auf unterschiedliche Weise zu kombinieren, je nachdem, welche Informationen benötigt werden und wie die Tabellen in Beziehung stehen. Das Verständnis der Unterschiede zwischen `INNER JOIN`, `LEFT JOIN`, `RIGHT JOIN`, `FULL JOIN` und `CROSS JOIN` sowie der korrekten Verwendung der `ON`-Bedingung ist entscheidend für die Erstellung aussagekräftiger und korrekter Abfragen über mehrere Tabellen.

## Links und Quellen

-   **SQL JOINs - W3Schools:** [https://www.w3schools.com/sql/sql_join.asp](https://www.w3schools.com/sql/sql_join.asp) (Englischsprachiges Tutorial)
-   **SQL INNER JOIN Keyword - W3Schools:** [https://www.w3schools.com/sql/sql_join_inner.asp](https://www.w3schools.com/sql/sql_join_inner.asp) (Englischsprachiges Tutorial)
-   **SQL LEFT JOIN Keyword - W3Schools:** [https://www.w3schools.com/sql/sql_join_left.asp](https://www.w3schools.com/sql/sql_join_left.asp) (Englischsprachiges Tutorial)
-   **SQL RIGHT JOIN Keyword - W3Schools:** [https://www.w3schools.com/sql/sql_join_right.asp](https://www.w3schools.com/sql/sql_join_right.asp) (Englischsprachiges Tutorial)
-   **SQL FULL OUTER JOIN Keyword - W3Schools:** [https://www.w3schools.com/sql/sql_join_full.asp](https://www.w3schools.com/sql/sql_join_full.asp) (Englischsprachiges Tutorial)
-   **SQL CROSS JOIN Keyword - W3Schools:** [https://www.w3schools.com/sql/sql_join_cross.asp](https://www.w3schools.com/sql/sql_join_cross.asp) (Englischsprachiges Tutorial)
-   **Dokumentation des spezifischen DBMS, das Sie verwenden (z.B. MySQL, PostgreSQL, SQL Server, Oracle) für die genaue Syntax und Optionen der `JOIN`-Operationen.**
    -   **MySQL JOIN Syntax:** [https://dev.mysql.com/doc/refman/8.0/en/join.html](https://dev.mysql.com/doc/refman/8.0/en/join.html) (Englischsprachig)
    -   **PostgreSQL JOINs:** [https://www.postgresql.org/docs/current/tutorial-join.html](https://www.postgresql.org/docs/current/tutorial-join.html) (Englischsprachig)
    -   **SQL Server JOINs:** [https://learn.microsoft.com/en-us/sql/t-sql/queries/from-transact-sql?view=sql-server-ver16#joining-multiple-tables](https://learn.microsoft.com/en-us/sql/t-sql/queries/from-transact-sql?view=sql-server-ver16#joining-multiple-tables) (Englischsprachig)
    -   **Oracle JOINs:** Suche nach "Oracle JOIN syntax"
-   **Artikel und Blogbeiträge zum Thema "SQL Joins" und "Best Practices für die Abfrage mehrerer Tabellen".**

-----

> **Fehler gefunden?** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
