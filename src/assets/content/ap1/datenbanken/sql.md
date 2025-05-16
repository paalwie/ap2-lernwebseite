# SQL: Tabellenstruktur, Index Manipulation, Projektion, Selektion, Sortieren, Gruppieren

## Einführung

SQL (Structured Query Language) ist die Standardsprache für die Verwaltung und Abfrage von relationalen Datenbanken. Neben der reinen Datenabfrage ermöglicht SQL auch die Definition und Manipulation der Tabellenstruktur sowie die Optimierung der Abfrageperformance durch Indizes. Die Operationen Projektion, Selektion, Sortieren und Gruppieren sind grundlegende Bestandteile jeder SQL-Abfrage.

## Grundlagen

**1. Tabellenstruktur (Table Structure):**

SQL erlaubt das Erstellen, Ändern und Löschen von Tabellen und deren Spalten.

- **CREATE TABLE:** Erstellt eine neue Tabelle mit Angabe des Tabellennamens und der Spaltendefinitionen (Name, Datentyp, Constraints).
    ```sql
    CREATE TABLE Kunden (
        KundenID INT PRIMARY KEY,
        Name VARCHAR(100),
        Adresse VARCHAR(255)
    );
    ```
- **ALTER TABLE:** Modifiziert die Struktur einer bestehenden Tabelle (z.B. Hinzufügen, Ändern oder Löschen von Spalten, Hinzufügen oder Entfernen von Constraints).
    ```sql
    ALTER TABLE Kunden ADD COLUMN Telefon VARCHAR(20);
    ALTER TABLE Kunden ALTER COLUMN Adresse TYPE TEXT;
    ALTER TABLE Kunden DROP COLUMN Telefon;
    ALTER TABLE Kunden ADD CONSTRAINT unique_name UNIQUE (Name);
    ```
- **DROP TABLE:** Löscht eine Tabelle und alle ihre Daten.
    ```sql
    DROP TABLE Kunden;
    ```

**2. Index Manipulation:**

Indizes sind spezielle Suchstrukturen, die die Geschwindigkeit von Datenabfragen verbessern können. Sie werden auf einer oder mehreren Spalten einer Tabelle erstellt.

- **CREATE INDEX:** Erstellt einen Index für eine oder mehrere Spalten einer Tabelle.
    ```sql
    CREATE INDEX idx_name ON Kunden (Name);
    CREATE UNIQUE INDEX idx_email ON Benutzer (Email);
    ```
- **DROP INDEX:** Löscht einen bestehenden Index. Die genaue Syntax kann je nach DBMS variieren (z.B. `DROP INDEX idx_name ON Kunden;` oder `DROP INDEX idx_email;`).
- **Funktionsweise:** Ein Index enthält eine Kopie der indizierten Spalten und einen Zeiger auf die tatsächlichen Daten in der Tabelle. Dadurch kann die Datenbank bei einer Abfrage, die die indizierte Spalte im `WHERE`-Teil verwendet, direkt zum relevanten Datensatz springen, ohne die gesamte Tabelle scannen zu müssen.
- **Überlegungen:** Indizes verbessern die Leseperformance, können aber die Schreibperformance (INSERT, UPDATE, DELETE) verlangsamen, da der Index ebenfalls aktualisiert werden muss. Es ist wichtig, Indizes nur für Spalten zu erstellen, die häufig in Suchbedingungen verwendet werden.

**3. Projektion (Projection):**

Die Projektion bezieht sich auf die Auswahl bestimmter Spalten (Attribute) aus einer Tabelle, die in das Ergebnis der Abfrage aufgenommen werden sollen. Dies geschieht mit dem `SELECT`-Befehl.

```sql
SELECT KundenID, Name FROM Kunden; -- Projiziert die Spalten KundenID und Name
SELECT * FROM Produkte;           -- Projiziert alle Spalten
```

**4. Selektion (Selection):**

Die Selektion bezieht sich auf die Auswahl bestimmter Zeilen (Datensätze) aus einer Tabelle basierend auf einer oder mehreren Bedingungen. Dies geschieht mit der `WHERE`-Klausel.

```sql
SELECT * FROM Bestellungen WHERE KundenID = 123; -- Selektiert Bestellungen für einen bestimmten Kunden
SELECT Produktname FROM Produkte WHERE Preis > 50 AND Kategorie = 'Buch'; -- Selektiert Produkte mit bestimmten Kriterien
```

**5. Sortieren (Sorting):**

Das Sortieren ordnet die Ergebnismenge einer Abfrage nach den Werten einer oder mehrerer Spalten. Dies geschieht mit der `ORDER BY`-Klausel.

```sql
SELECT * FROM Produkte ORDER BY Preis ASC;   -- Sortiert Produkte nach Preis aufsteigend
SELECT * FROM Bestellungen ORDER BY Bestelldatum DESC, Gesamtbetrag ASC; -- Sortiert nach Datum absteigend und dann nach Betrag aufsteigend
```

**6. Gruppieren (Grouping):**

Das Gruppieren fasst Zeilen mit gleichen Werten in einer oder mehreren Spalten zu einer einzigen zusammenfassenden Zeile zusammen. Dies geschieht mit der `GROUP BY`-Klausel und wird oft in Verbindung mit Aggregatfunktionen verwendet.

```sql
SELECT Kategorie, COUNT(*) AS Anzahl FROM Produkte GROUP BY Kategorie; -- Zählt die Anzahl der Produkte pro Kategorie
SELECT KundenID, AVG(Gesamtbetrag) AS Durchschnittsbetrag FROM Bestellungen GROUP BY KundenID HAVING COUNT(*) > 1; -- Berechnet den durchschnittlichen Bestellbetrag für Kunden mit mehr als einer Bestellung
```

> **Hinweis:** Die effektive Nutzung dieser SQL-Funktionen ist entscheidend für die Datenmanipulation und -abfrage in relationalen Datenbanken. Das Verständnis der Tabellenstruktur und der Einsatz von Indizes sind wichtig für die Performance, während Projektion, Selektion, Sortieren und Gruppieren die Grundlage für gezielte Datenabfragen bilden.

## Beispiel oder Anwendungsfall

Angenommen, wir haben eine Tabelle namens `Artikel` mit den Spalten `ArtikelID` (INT, PK), `Name` (VARCHAR), `Preis` (DECIMAL), `Kategorie` (VARCHAR) und `Verkaufsdatum` (DATE).

  - **Tabellenstruktur abfragen:** (Die genaue Syntax hängt vom DBMS ab, z.B. `DESCRIBE Artikel;` in MySQL oder Informationsschemata)
  - **Index erstellen:** `CREATE INDEX idx_kategorie ON Artikel (Kategorie);`
  - **Projektion:** `SELECT Name, Preis FROM Artikel;`
  - **Selektion:** `SELECT * FROM Artikel WHERE Kategorie = 'Elektronik' AND Preis < 100;`
  - **Sortieren:** `SELECT Name, Preis FROM Artikel ORDER BY Preis DESC;`
  - **Gruppieren:** `SELECT Kategorie, AVG(Preis) AS Durchschnittspreis FROM Artikel GROUP BY Kategorie;`

## Weiterführende Links & Quellen

  - [SQL Tutorial (W3Schools) - SQL CREATE TABLE](https://www.w3schools.com/sql/sql_create_table.asp)
  - [SQL Tutorial (W3Schools) - SQL ALTER TABLE](https://www.w3schools.com/sql/sql_alter.asp)
  - [SQL Tutorial (W3Schools) - SQL DROP TABLE](https://www.google.com/search?q=https://www.w3schools.com/sql/sql_drop.asp)
  - [SQL Tutorial (W3Schools) - SQL INDEX](https://www.w3schools.com/sql/sql_create_index.asp)
  - [SQL Tutorial (W3Schools) - SQL SELECT](https://www.w3schools.com/sql/sql_select.asp)
  - [SQL Tutorial (W3Schools) - SQL WHERE](https://www.w3schools.com/sql/sql_where.asp)
  - [SQL Tutorial (W3Schools) - SQL ORDER BY](https://www.w3schools.com/sql/sql_orderby.asp)
  - [SQL Tutorial (W3Schools) - SQL GROUP BY](https://www.w3schools.com/sql/sql_groupby.asp)

-----

> **Fehler gefunden?:** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
