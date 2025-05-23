# SQL: Aggregat-Funktionen

## Einführung

Aggregat-Funktionen in SQL ermöglichen es, Berechnungen über eine Menge von Zeilen durchzuführen und einen einzelnen zusammenfassenden Wert zurückzugeben. Sie sind besonders nützlich, um statistische Informationen aus Daten zu gewinnen und werden oft in Verbindung mit der `GROUP BY`-Klausel verwendet, um Berechnungen pro Gruppe durchzuführen.

## Grundlagen

Hier sind die gängigsten Aggregat-Funktionen in SQL:

**1. COUNT():**

- **Funktionsweise:** Zählt die Anzahl der Zeilen in einer Gruppe oder die Anzahl der Zeilen, die einer bestimmten Bedingung entsprechen.
- **Syntax:**
    - `COUNT(*)`: Zählt alle Zeilen in der Ergebnismenge (einschließlich derer mit `NULL`-Werten).
    - `COUNT(Spaltenname)`: Zählt die Anzahl der Zeilen, in denen der angegebene `Spaltenname` keinen `NULL`-Wert enthält.
    - `COUNT(DISTINCT Spaltenname)`: Zählt die Anzahl der eindeutigen, nicht-`NULL`-Werte in der angegebenen Spalte.
- **Beispiele:**
    ```sql
    SELECT COUNT(*) FROM Kunden; -- Gibt die Gesamtzahl der Kunden zurück.
    SELECT COUNT(BestellID) FROM Bestellungen WHERE KundenID = 123; -- Gibt die Anzahl der Bestellungen für Kunde mit ID 123 zurück.
    SELECT COUNT(DISTINCT Stadt) FROM Kunden; -- Gibt die Anzahl der eindeutigen Städte zurück, in denen Kunden ansässig sind.
    ```

**2. SUM():**

- **Funktionsweise:** Berechnet die Summe der Werte in einer angegebenen numerischen Spalte für eine Gruppe von Zeilen. `NULL`-Werte werden bei der Berechnung ignoriert.
- **Syntax:**
    - `SUM(Spaltenname)`: Summiert die Werte in der angegebenen Spalte.
- **Beispiele:**
    ```sql
    SELECT SUM(Preis) FROM Produkte WHERE Kategorie = 'Buch'; -- Gibt die Summe der Preise aller Bücher zurück.
    SELECT SUM(Gesamtbetrag) FROM Bestellungen WHERE Bestelldatum BETWEEN '2023-01-01' AND '2023-12-31'; -- Gibt den Gesamtumsatz des Jahres 2023 zurück.
    ```

**3. AVG():**

- **Funktionsweise:** Berechnet den Durchschnittswert der Werte in einer angegebenen numerischen Spalte für eine Gruppe von Zeilen. `NULL`-Werte werden bei der Berechnung ignoriert.
- **Syntax:**
    - `AVG(Spaltenname)`: Berechnet den Durchschnitt der Werte in der angegebenen Spalte.
- **Beispiele:**
    ```sql
    SELECT AVG(Preis) FROM Produkte; -- Gibt den durchschnittlichen Preis aller Produkte zurück.
    SELECT AVG(Bewertung) FROM Bewertungen WHERE ProduktID = 456; -- Gibt die durchschnittliche Bewertung für Produkt mit ID 456 zurück.
    ```

**4. MIN():**

- **Funktionsweise:** Findet den kleinsten Wert in einer angegebenen Spalte für eine Gruppe von Zeilen. Kann für numerische, Zeichenketten- und Datumsspalten verwendet werden. `NULL`-Werte werden ignoriert.
- **Syntax:**
    - `MIN(Spaltenname)`: Gibt den minimalen Wert der angegebenen Spalte zurück.
- **Beispiele:**
    ```sql
    SELECT MIN(Preis) FROM Produkte; -- Gibt den niedrigsten Preis aller Produkte zurück.
    SELECT MIN(Einstellungsdatum) FROM Mitarbeiter; -- Gibt das früheste Einstellungsdatum zurück.
    ```

**5. MAX():**

- **Funktionsweise:** Findet den größten Wert in einer angegebenen Spalte für eine Gruppe von Zeilen. Kann für numerische, Zeichenketten- und Datumsspalten verwendet werden. `NULL`-Werte werden ignoriert.
- **Syntax:**
    - `MAX(Spaltenname)`: Gibt den maximalen Wert der angegebenen Spalte zurück.
- **Beispiele:**
    ```sql
    SELECT MAX(Preis) FROM Produkte; -- Gibt den höchsten Preis aller Produkte zurück.
    SELECT MAX(Bestelldatum) FROM Bestellungen WHERE KundenID = 789; -- Gibt das letzte Bestelldatum für Kunde mit ID 789 zurück.
    ```

## Verwendung mit GROUP BY

Aggregat-Funktionen sind besonders mächtig in Kombination mit der `GROUP BY`-Klausel. `GROUP BY` gruppiert Zeilen mit gleichen Werten in einer oder mehreren Spalten, und die Aggregat-Funktion wird dann für jede dieser Gruppen separat berechnet.

**Beispiele mit GROUP BY:**

```sql
SELECT Kategorie, COUNT(*) AS AnzahlProdukte FROM Produkte GROUP BY Kategorie;
-- Gibt die Anzahl der Produkte pro Kategorie zurück.

SELECT KundenID, SUM(Gesamtbetrag) AS Gesamtumsatz FROM Bestellungen GROUP BY KundenID;
-- Gibt den Gesamtumsatz pro Kunde zurück.

SELECT Abteilung, AVG(Gehalt) AS Durchschnittsgehalt FROM Mitarbeiter GROUP BY Abteilung HAVING AVG(Gehalt) > 4000;
-- Gibt die durchschnittlichen Gehälter pro Abteilung zurück, nur für Abteilungen mit einem Durchschnittsgehalt über 4000.
```

## `NULL`-Werte

Es ist wichtig zu beachten, dass die meisten Aggregat-Funktionen (`SUM()`, `AVG()`, `MIN()`, `MAX()`) `NULL`-Werte in den Spalten, auf die sie angewendet werden, ignorieren. `COUNT(Spaltenname)` ignoriert ebenfalls `NULL`-Werte, während `COUNT(*)` alle Zeilen zählt, unabhängig davon, ob sie `NULL`-Werte enthalten.

> **Hinweis:** Aggregat-Funktionen sind unverzichtbar für die Analyse von Daten in relationalen Datenbanken. Sie ermöglichen es, zusammenfassende Statistiken zu erstellen und Einblicke in die Daten zu gewinnen.

## Weiterführende Links & Quellen

  - [SQL Tutorial (W3Schools) - SQL Aggregate Functions](https://www.w3schools.com/sql/sql_count_avg_sum.asp)
  - [Übersicht über SQL Aggregat-Funktionen (z.B. von Datenbankanbietern)](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html) (Englischsprachig, MySQL-spezifisch, aber viele Konzepte sind Standard).
  - [Erklärung der COUNT()-Funktion in SQL](https://www.sqlitetutorial.net/sqlite-count/) (Konzept ist allgemein gültig).
  - [Erklärung der SUM()- und AVG()-Funktionen in SQL](https://www.sqlitetutorial.net/sqlite-sum/) (Konzept ist allgemein gültig).
  - [Erklärung der MIN()- und MAX()-Funktionen in SQL](https://learnsql.de/blog/sql-min-und-max-funktionen-in-6-beispielen-erklaert/) 

-----

> **Fehler gefunden?:** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
