# SQL: Abfrage über mehrere Tabellen (JOIN)

## Einführung

In relationalen Datenbanken sind Informationen oft auf mehrere Tabellen verteilt, um Redundanzen zu vermeiden und die Datenintegrität zu gewährleisten. Um zusammenhängende Informationen aus diesen Tabellen abzurufen, verwendet SQL die `JOIN`-Operation. Ein Join ermöglicht es, Zeilen aus zwei oder mehr Tabellen basierend auf einer Beziehung zwischen ihnen zu kombinieren.

## Grundlagen

Die `JOIN`-Klausel wird in der `FROM`-Anweisung verwendet, um anzugeben, welche Tabellen kombiniert werden sollen und wie die Verknüpfung erfolgen soll. Die gängigsten Arten von Joins sind:

**1. INNER JOIN (oder einfach JOIN):**

- **Funktionsweise:** Gibt nur die Zeilen zurück, bei denen eine Übereinstimmung in beiden beteiligten Tabellen gemäß der Join-Bedingung besteht.
- **Syntax:**
  ```sql
  SELECT Spalten
  FROM Tabelle1
  INNER JOIN Tabelle2 ON Tabelle1.Verbindungsspalte = Tabelle2.Verbindungsspalte;
  ```
- **Anwendungsfall:** Abrufen von Informationen, die nur dann relevant sind, wenn ein entsprechender Datensatz in beiden Tabellen existiert (z.B. Bestellungen zusammen mit den zugehörigen Kundendaten).

**2. LEFT JOIN (oder LEFT OUTER JOIN):**

- **Funktionsweise:** Gibt alle Zeilen aus der linken Tabelle (der Tabelle, die vor `LEFT JOIN` steht) und die übereinstimmenden Zeilen aus der rechten Tabelle zurück. Wenn es keine Übereinstimmung in der rechten Tabelle gibt, werden für die Spalten der rechten Tabelle `NULL`-Werte eingesetzt.
- **Syntax:**
  ```sql
  SELECT Spalten
  FROM Tabelle1
  LEFT JOIN Tabelle2 ON Tabelle1.Verbindungsspalte = Tabelle2.Verbindungsspalte;
  ```
- **Anwendungsfall:** Abrufen aller Datensätze aus der linken Tabelle, auch wenn keine zugehörigen Datensätze in der rechten Tabelle vorhanden sind (z.B. alle Kunden und ihre Bestellungen, auch wenn ein Kunde noch keine Bestellung aufgegeben hat).

**3. RIGHT JOIN (oder RIGHT OUTER JOIN):**

- **Funktionsweise:** Funktioniert analog zum `LEFT JOIN`, gibt aber alle Zeilen aus der rechten Tabelle und die übereinstimmenden Zeilen aus der linken Tabelle zurück. Bei fehlender Übereinstimmung in der linken Tabelle werden für deren Spalten `NULL`-Werte eingesetzt.
- **Syntax:**
  ```sql
  SELECT Spalten
  FROM Tabelle1
  RIGHT JOIN Tabelle2 ON Tabelle1.Verbindungsspalte = Tabelle2.Verbindungsspalte;
  ```
- **Anwendungsfall:** Abrufen aller Datensätze aus der rechten Tabelle, auch wenn keine zugehörigen Datensätze in der linken Tabelle vorhanden sind (z.B. alle Produkte und die Bestellungen, in denen sie vorkommen, auch wenn ein Produkt noch nicht bestellt wurde).

**4. FULL OUTER JOIN:**

- **Funktionsweise:** Gibt alle Zeilen zurück, wenn es eine Übereinstimmung in der linken oder rechten Tabelle gibt. Wenn keine Übereinstimmung vorhanden ist, werden für die Spalten der fehlenden Tabelle `NULL`-Werte eingesetzt.
- **Syntax:**
  ```sql
  SELECT Spalten
  FROM Tabelle1
  FULL OUTER JOIN Tabelle2 ON Tabelle1.Verbindungsspalte = Tabelle2.Verbindungsspalte;
  ```
- **Anwendungsfall:** Abrufen aller Datensätze aus beiden Tabellen, unabhängig davon, ob eine Übereinstimmung besteht (z.B. alle Kunden und alle Produkte, unabhängig davon, ob ein Kunde ein Produkt bestellt hat oder ein Produkt bestellt wurde). **Hinweis:** Nicht alle DBMS unterstützen `FULL OUTER JOIN`.

**Die ON-Klausel:**

Die `ON`-Klausel legt die Bedingung fest, nach der die Zeilen aus den beteiligten Tabellen verknüpft werden. Typischerweise wird hier ein Fremdschlüssel einer Tabelle mit dem Primärschlüssel der anderen Tabelle verglichen, um die Beziehung zwischen den Entitäten widerzuspiegeln.

**Impliziter Join (ältere Syntax):**

Es ist auch möglich, Tabellen im `FROM`-Teil durch Kommata getrennt aufzulisten und die Join-Bedingung im `WHERE`-Teil anzugeben. Diese Syntax ist jedoch weniger explizit und kann bei komplexeren Abfragen schwerer zu lesen sein, daher wird die explizite `JOIN`-Syntax mit der `ON`-Klausel bevorzugt.

```sql
-- Impliziter Join (nicht empfohlen)
SELECT Spalten
FROM Tabelle1, Tabelle2
WHERE Tabelle1.Verbindungsspalte = Tabelle2.Verbindungsspalte;
```

> **Hinweis:** Das Verständnis der verschiedenen Join-Typen und ihrer Anwendungsfälle ist entscheidend, um komplexe Abfragen über mehrere Tabellen in relationalen Datenbanken zu erstellen und die benötigten Informationen effizient abzurufen.

## Beispiel oder Anwendungsfall

Angenommen, wir haben zwei Tabellen: `Kunden` (KundenID, Name) und `Bestellungen` (BestellID, KundenID, Bestelldatum).

- **INNER JOIN:** Um alle Bestellungen zusammen mit dem Namen des Kunden abzurufen:
  ```sql
  SELECT BestellID, Bestelldatum, Kunden.Name
  FROM Bestellungen
  INNER JOIN Kunden ON Bestellungen.KundenID = Kunden.KundenID;
  ```

- **LEFT JOIN:** Um alle Kunden und ihre Bestellungen (falls vorhanden) abzurufen:
  ```sql
  SELECT Kunden.Name, BestellID, Bestelldatum
  FROM Kunden
  LEFT JOIN Bestellungen ON Kunden.KundenID = Bestellungen.KundenID;
  ```
  Kunden ohne Bestellungen hätten in den Spalten `BestellID` und `Bestelldatum` `NULL`-Werte.

- **RIGHT JOIN:** Um alle Bestellungen und die zugehörigen Kunden (falls vorhanden) abzurufen (in diesem Fall ähnlich zum `INNER JOIN`, da jede Bestellung einen Kunden haben sollte, aber nützlich, wenn z.B. verwaiste Bestellungen ohne gültige Kunden-ID existieren könnten):
  ```sql
  SELECT BestellID, Bestelldatum, Kunden.Name
  FROM Bestellungen
  RIGHT JOIN Kunden ON Bestellungen.KundenID = Kunden.KundenID;
  ```

## Weiterführende Links & Quellen

  - [SQL Tutorial (W3Schools) - SQL JOIN](https://www.w3schools.com/sql/sql_join.asp)
  - [SQL INNER JOIN (mit Beispielen)](https://www.sqlitetutorial.net/sqlite-inner-join/) (Konzept ist allgemein gültig).
  - [SQL LEFT JOIN (mit Beispielen)](https://www.sqlitetutorial.net/sqlite-left-join/) (Konzept ist allgemein gültig).
  - [SQL RIGHT JOIN (mit Beispielen)](https://www.sqlitetutorial.net/sqlite-right-join/) (Konzept ist allgemein gültig).
  - [SQL FULL OUTER JOIN (mit Hinweisen zur Unterstützung)](https://www.sqlitetutorial.net/sqlite-full-outer-join/) (Konzept und Unterstützung).

-----

> **Fehler gefunden?:** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
