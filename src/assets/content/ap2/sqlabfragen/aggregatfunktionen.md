# Konzipieren und Umsetzen von kundenspezifischen Softwareanwendungen: Datenbankabfrage, Datenpflege mit SQL erstellen können - Aggregatfunktionen

## Einführung

**Aggregatfunktionen** in SQL führen Berechnungen auf einer Menge von Zeilen durch und geben einen einzelnen zusammenfassenden Wert zurück. Sie sind besonders nützlich, um statistische Informationen wie Summen, Durchschnitte, Anzahlen, Minima und Maxima aus Datengruppen zu gewinnen. Aggregatfunktionen werden typischerweise in der `SELECT`-Liste einer Abfrage verwendet und oft in Kombination mit der `GROUP BY`-Klausel, um die Berechnungen für jede Gruppe separat durchzuführen.

## Häufig verwendete Aggregatfunktionen

Die wichtigsten Aggregatfunktionen in SQL sind:

1.  **COUNT():** Gibt die Anzahl der Zeilen in einer Gruppe zurück.
    -   `COUNT(*)`: Zählt alle Zeilen in der Gruppe (einschließlich derer mit `NULL`-Werten in irgendeiner Spalte).
    -   `COUNT(spaltenname)`: Zählt die Anzahl der Zeilen in der Gruppe, in denen die angegebene `spaltenname` keinen `NULL`-Wert hat.
    -   `COUNT(DISTINCT spaltenname)`: Zählt die Anzahl der eindeutigen, nicht-NULL-Werte in der angegebenen Spalte innerhalb der Gruppe.

2.  **SUM():** Gibt die Summe der Werte in einer numerischen Spalte für die Zeilen in der Gruppe zurück. `NULL`-Werte werden ignoriert.

3.  **AVG():** Gibt den Durchschnitt (arithmetisches Mittel) der Werte in einer numerischen Spalte für die Zeilen in der Gruppe zurück. `NULL`-Werte werden ignoriert.

4.  **MIN():** Gibt den kleinsten Wert in einer Spalte für die Zeilen in der Gruppe zurück. Kann für numerische, Zeichenketten- und Datums-/Zeitspalten verwendet werden. `NULL`-Werte werden ignoriert.

5.  **MAX():** Gibt den größten Wert in einer Spalte für die Zeilen in der Gruppe zurück. Kann ebenfalls für numerische, Zeichenketten- und Datums-/Zeitspalten verwendet werden. `NULL`-Werte werden ignoriert.

## Verwendung von Aggregatfunktionen

Aggregatfunktionen werden in der `SELECT`-Liste einer SQL-Abfrage verwendet. Wenn keine `GROUP BY`-Klausel vorhanden ist, wird die Aggregatfunktion auf alle von der `FROM`- und `WHERE`-Klausel zurückgegebenen Zeilen angewendet. Wenn eine `GROUP BY`-Klausel vorhanden ist, wird die Aggregatfunktion für jede durch `GROUP BY` definierte Gruppe separat berechnet.

### Beispiele für Aggregatfunktionen ohne GROUP BY

**Beispiel 1: Zählen der Gesamtzahl der Kunden**

```sql
SELECT COUNT(*) AS GesamtzahlKunden
FROM Kunden;
```

Dieser Befehl zählt alle Zeilen in der Tabelle `Kunden` und gibt die Gesamtzahl zurück.

**Beispiel 2: Ermitteln des durchschnittlichen Preises aller Produkte**

```sql
SELECT AVG(Preis) AS DurchschnittspreisAlleProdukte
FROM Produkte;
```

Dieser Befehl berechnet den durchschnittlichen Preis aller Produkte in der Tabelle `Produkte`.

**Beispiel 3: Finden des höchsten Preises eines Produkts**

```sql
SELECT MAX(Preis) AS HöchsterPreis
FROM Produkte;
```

**Beispiel 4: Ermitteln des frühesten Geburtsdatums eines Kunden**

```sql
SELECT MIN(Geburtsdatum) AS FrühestesGeburtsdatum
FROM Kunden;
```

### Beispiele für Aggregatfunktionen mit GROUP BY

**Beispiel 1: Zählen der Anzahl der Bestellungen pro Kunde**

```sql
SELECT KundenID, COUNT(*) AS AnzahlBestellungen
FROM Bestellungen
GROUP BY KundenID;
```

Dieser Befehl gruppiert die Bestellungen nach `KundenID` und zählt dann für jede Gruppe (jeden Kunden) die Anzahl der Bestellungen.

**Beispiel 2: Berechnen der Summe der Bestellbeträge pro Kunde**

```sql
SELECT KundenID, SUM(Gesamtbetrag) AS Gesamtbestellwert
FROM Bestellungen
GROUP BY KundenID;
```

**Beispiel 3: Ermitteln des durchschnittlichen Preises pro Produktkategorie**

```sql
SELECT Kategorie, AVG(Preis) AS Durchschnittspreis
FROM Produkte
GROUP BY Kategorie;
```

**Beispiel 4: Finden des neuesten Bestelldatums für jeden Kunden**

```sql
SELECT KundenID, MAX(Bestelldatum) AS LetzteBestellung
FROM Bestellungen
GROUP BY KundenID;
```

**Beispiel 5: Zählen der eindeutigen Städte, in denen Kunden wohnen**

```sql
SELECT COUNT(DISTINCT Stadt) AS AnzahlEindeutigerStädte
FROM Kunden;
```

Hier wird `DISTINCT` innerhalb der `COUNT()`-Funktion verwendet, um nur die eindeutigen Werte der Spalte `Stadt` zu zählen.

## Die HAVING-Klausel mit Aggregatfunktionen

Die `HAVING`-Klausel wird verwendet, um Gruppen zu filtern, die durch die `GROUP BY`-Klausel erstellt wurden, basierend auf den Ergebnissen von Aggregatfunktionen.

**Beispiel: Anzeigen nur der Kunden, die mehr als zwei Bestellungen aufgegeben haben**

```sql
SELECT KundenID, COUNT(*) AS AnzahlBestellungen
FROM Bestellungen
GROUP BY KundenID
HAVING COUNT(*) > 2;
```

Hier filtert die `HAVING`-Klausel die Gruppen (Kunden), sodass nur diejenigen angezeigt werden, deren Anzahl der Bestellungen größer als 2 ist.

## Wichtige Hinweise zu Aggregatfunktionen

-   Aggregatfunktionen ignorieren in der Regel `NULL`-Werte (außer `COUNT(*)`).
-   Wenn eine `SELECT`-Liste sowohl Aggregatfunktionen als auch einzelne Spalten enthält, müssen die einzelnen Spalten in der `GROUP BY`-Klausel aufgeführt sein (es sei denn, die gesamte Tabelle wird durch die Aggregatfunktion zu einer einzigen Zeile zusammengefasst, wie in den Beispielen ohne `GROUP BY`).
-   Die `WHERE`-Klausel filtert Zeilen *vor* der Gruppierung und der Anwendung von Aggregatfunktionen. Die `HAVING`-Klausel filtert Gruppen *nachdem* die Gruppierung und die Aggregatfunktionen angewendet wurden.
-   Die Performance von Abfragen mit Aggregatfunktionen und `GROUP BY` kann von Indizes auf den Gruppierungsspalten profitieren.

## Fazit

Aggregatfunktionen sind ein mächtiges Werkzeug in SQL, um zusammenfassende Statistiken aus Daten zu gewinnen. Durch die Kombination mit der `GROUP BY`-Klausel können diese Statistiken für verschiedene Datengruppen berechnet werden. Das Verständnis der verschiedenen Aggregatfunktionen und ihrer korrekten Anwendung ist unerlässlich für die Durchführung von Datenanalysen und die Erstellung aussagekräftiger Berichte aus relationalen Datenbanken.

## Links und Quellen

-   **SQL Aggregate Functions - W3Schools:** [https://www.w3schools.com/sql/sql_functions.asp](https://www.w3schools.com/sql/sql_functions.asp) (Englischsprachiges Tutorial)
-   **Dokumentation des spezifischen DBMS, das Sie verwenden (z.B. MySQL, PostgreSQL, SQL Server, Oracle) für detaillierte Informationen zu Aggregatfunktionen.**
    -   **MySQL Aggregate Functions:** [https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html) (Englischsprachig)
    -   **PostgreSQL Aggregate Functions:** [https://www.postgresql.org/docs/current/functions-aggregate.html](https://www.postgresql.org/docs/current/functions-aggregate.html) (Englischsprachig)
    -   **SQL Server Aggregate Functions (Transact-SQL):** [https://learn.microsoft.com/en-us/sql/t-sql/functions/aggregate-functions-transact-sql?view=sql-server-ver16](https://learn.microsoft.com/en-us/sql/t-sql/functions/aggregate-functions-transact-sql?view=sql-server-ver16) (Englischsprachig)
    -   **Oracle Aggregate Functions:** Suche nach "Oracle SQL aggregate functions"
-   **Artikel und Blogbeiträge zum Thema "SQL Aggregatfunktionen".**

-----

> **Fehler gefunden?** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
