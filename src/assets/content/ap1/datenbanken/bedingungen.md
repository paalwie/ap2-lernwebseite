# SQL: Ausdrücke und Bedingungen

## Einführung

In SQL werden Ausdrücke und Bedingungen verwendet, um Daten zu manipulieren, zu filtern und logische Operationen durchzuführen. Sie sind wesentliche Bestandteile von `SELECT`-Anweisungen (insbesondere in der `WHERE`- und `HAVING`-Klausel), `UPDATE`-Anweisungen (in der `SET`- und `WHERE`-Klausel) und anderen SQL-Befehlen.

## Grundlagen

**1. Ausdrücke (Expressions):**

Ein Ausdruck ist eine Kombination aus Literalen, Spaltennamen, Operatoren und Funktionen, die zu einem einzelnen Wert ausgewertet werden kann.

- **Literale:** Konstante Werte wie Zahlen (z.B. `10`, `3.14`), Zeichenketten (z.B. `'Hallo'`, `"Welt"`), Datumsangaben (z.B. `DATE '2023-10-26'`) oder boolesche Werte (`TRUE`, `FALSE`).
- **Spaltennamen:** Bezeichnen eine Spalte in einer Tabelle (z.B. `Preis`, `KundenID`).
- **Operatoren:** Symbole, die Operationen auf Ausdrücken ausführen:
    - **Arithmetische Operatoren:** `+` (Addition), `-` (Subtraktion), `*` (Multiplikation), `/` (Division), `%` oder `MOD` (Modulo).
    - **Vergleichsoperatoren:** `=` (gleich), `>` (größer als), `<` (kleiner als), `>=` (größer oder gleich), `<=` (kleiner oder gleich), `<>` oder `!=` (ungleich).
    - **Logische Operatoren:** `AND`, `OR`, `NOT`.
    - **String-Operatoren:** `||` oder `CONCAT()` (Verkettung von Zeichenketten).
    - **Weitere Operatoren:** `BETWEEN`, `LIKE`, `IN`, `IS NULL`, `IS NOT NULL`.
- **Funktionen:** Vordefinierte Routinen, die einen Wert basierend auf den übergebenen Argumenten zurückgeben:
    - **Aggregatfunktionen:** `COUNT()`, `SUM()`, `AVG()`, `MIN()`, `MAX()`.
    - **Skalarfunktionen:** Funktionen, die auf einzelne Zeilen angewendet werden (z.B. `UPPER()`, `LOWER()`, `SUBSTR()`, `LENGTH()`, `DATE()`, `NOW()`).

**Beispiele für Ausdrücke:**

- `Preis * 1.19` (Berechnung des Preises inklusive Mehrwertsteuer)
- `UPPER(Name)` (Umwandlung des Namens in Großbuchstaben)
- `Bestelldatum + INTERVAL '7 day'` (Hinzufügen von 7 Tagen zu einem Datum)
- `COUNT(*)` (Zählen der Anzahl von Zeilen)
- `KundenID = 100` (Ein einfacher Vergleichsausdruck, der zu `TRUE` oder `FALSE` ausgewertet wird)

**2. Bedingungen (Conditions):**

Eine Bedingung ist ein Ausdruck, der zu einem booleschen Wert (`TRUE`, `FALSE` oder `UNKNOWN`) ausgewertet wird. Bedingungen werden hauptsächlich in den `WHERE`- und `HAVING`-Klauseln verwendet, um Zeilen zu filtern.

- **Einfache Bedingungen:** Verwenden Vergleichsoperatoren, um Spaltenwerte mit Literalen oder anderen Spaltenwerten zu vergleichen (z.B. `Preis > 100`, `Name = 'Alice'`).
- **Zusammengesetzte Bedingungen:** Kombinieren mehrere einfache Bedingungen mit logischen Operatoren (`AND`, `OR`, `NOT`).
    - `WHERE Preis > 50 AND Kategorie = 'Buch'` (Beide Bedingungen müssen wahr sein)
    - `WHERE Farbe = 'Rot' OR Farbe = 'Blau'` (Mindestens eine Bedingung muss wahr sein)
    - `WHERE NOT Status = 'Abgeschlossen'` (Die Bedingung darf nicht wahr sein)
- **Spezielle Bedingungen:** Verwenden spezielle Operatoren:
    - **`BETWEEN`:** Prüft, ob ein Wert innerhalb eines bestimmten Bereichs liegt (`WHERE Alter BETWEEN 18 AND 65`).
    - **`LIKE`:** Vergleicht Zeichenketten mit Mustern (`WHERE Name LIKE 'A%'` - Namen, die mit 'A' beginnen). `%` ist ein Platzhalter für null oder mehr Zeichen, `_` für ein einzelnes Zeichen.
    - **`IN`:** Prüft, ob ein Wert in einer Liste von Werten enthalten ist (`WHERE Farbe IN ('Rot', 'Grün', 'Blau')`).
    - **`IS NULL` / `IS NOT NULL`:** Prüft, ob ein Wert `NULL` ist oder nicht (`WHERE Adresse IS NULL`).

**Die `WHERE`-Klausel:**

Die `WHERE`-Klausel filtert Zeilen, bevor Gruppierungen oder Aggregationen durchgeführt werden. Sie wendet die angegebenen Bedingungen auf jede Zeile der Tabelle(n) an und gibt nur die Zeilen zurück, für die die Bedingung als `TRUE` ausgewertet wird.

```sql
SELECT * FROM Produkte WHERE Preis > 10;
SELECT BestellID FROM Bestellungen WHERE KundenID = (SELECT KundenID FROM Kunden WHERE Name = 'Bob'); -- Unterabfrage in der WHERE-Klausel
```

**Die `HAVING`-Klausel:**

Die `HAVING`-Klausel filtert Gruppen, die durch die `GROUP BY`-Klausel erstellt wurden. Sie wird nach der `GROUP BY`-Klausel und vor der `ORDER BY`-Klausel angewendet und verwendet Bedingungen, die auf den Ergebnissen der Aggregatfunktionen basieren.

```sql
SELECT Kategorie, AVG(Preis) AS Durchschnittspreis FROM Produkte GROUP BY Kategorie HAVING AVG(Preis) > 20;
SELECT KundenID, COUNT(*) AS AnzahlBestellungen FROM Bestellungen GROUP BY KundenID HAVING COUNT(*) > 2;
```

> **Hinweis:** Das Verständnis und die korrekte Verwendung von Ausdrücken und Bedingungen sind entscheidend für die präzise Abfrage und Manipulation von Daten in SQL. Sie ermöglichen es, komplexe Filterlogiken zu erstellen und die benötigten Informationen gezielt zu extrahieren.

## Beispiel oder Anwendungsfall

Angenommen, wir haben eine Tabelle `Mitarbeiter` mit den Spalten `MitarbeiterID`, `Name`, `Gehalt`, `Abteilung` und `Einstellungsdatum`.

- **Ausdruck im `SELECT`:** `SELECT Name, Gehalt * 1.05 AS Gehaltserhoehung FROM Mitarbeiter WHERE Abteilung = 'Vertrieb';` (Berechnet eine Gehaltserhöhung für Mitarbeiter in der Vertriebsabteilung)
- **Bedingung im `WHERE`:** `SELECT * FROM Mitarbeiter WHERE Gehalt BETWEEN 3000 AND 5000 AND Einstellungsdatum < '2020-01-01';` (Wählt Mitarbeiter mit einem Gehalt zwischen 3000 und 5000, die vor 2020 eingestellt wurden)
- **Bedingung im `HAVING`:** `SELECT Abteilung, AVG(Gehalt) AS Durchschnittsgehalt FROM Mitarbeiter GROUP BY Abteilung HAVING AVG(Gehalt) > 4000;` (Findet Abteilungen mit einem durchschnittlichen Gehalt über 4000)

## Weiterführende Links & Quellen

  - [SQL Tutorial (W3Schools) - SQL Operators](https://www.w3schools.com/sql/sql_operators.asp)
  - [SQL Tutorial (W3Schools) - SQL WHERE Clause](https://www.w3schools.com/sql/sql_where.asp)
  - [SQL Tutorial (W3Schools) - SQL HAVING Clause](https://www.w3schools.com/sql/sql_having.asp)
  - [Übersicht über SQL-Ausdrücke (z.B. von Datenbankanbietern)](https://dev.mysql.com/doc/refman/8.0/en/expressions.html) (Englischsprachig, MySQL-spezifisch, aber viele Konzepte sind Standard).
  - [SQL Expressions](https://www.tutorialspoint.com/sql/sql-expressions.htm)

-----

> **Fehler gefunden?:** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
