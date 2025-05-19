# Konzipieren und Umsetzen von kundenspezifischen Softwareanwendungen: Datenbankabfrage, Datenpflege mit SQL erstellen können - Manipulation (INSERT, UPDATE, DELETE)

## Einführung

Die SQL-Befehle `INSERT`, `UPDATE` und `DELETE` sind die grundlegenden Operationen zur Manipulation von Daten in relationalen Datenbanktabellen. Sie ermöglichen das Hinzufügen neuer Datensätze, das Ändern vorhandener Daten und das Entfernen von Datensätzen. Diese Befehle sind essenziell für die Pflege und Aktualisierung der in der Datenbank gespeicherten Informationen.

## 1. INSERT - Einfügen neuer Daten

Der `INSERT INTO`-Befehl wird verwendet, um neue Zeilen (Datensätze) in eine Tabelle einzufügen. Es gibt zwei Hauptvarianten der Syntax:

### Syntax 1: Einfügen von Werten in alle Spalten (in der Reihenfolge der Tabellendefinition)

```sql
INSERT INTO tabellenname
VALUES (wert1, wert2, wert3, ...);
```

Hierbei müssen die Werte in der gleichen Reihenfolge angegeben werden, wie die Spalten in der Tabelle definiert sind.

### Syntax 2: Einfügen von Werten in spezifische Spalten

```sql
INSERT INTO tabellenname (spalte1, spalte2, spalte3, ...)
VALUES (wert_für_spalte1, wert_für_spalte2, wert_für_spalte3, ...);
```

Diese Syntax ist flexibler, da Sie die Spalten angeben können, in die Sie Werte einfügen möchten, und die Reihenfolge der Werte muss der Reihenfolge der angegebenen Spalten entsprechen. Spalten, die in der `INSERT`-Anweisung nicht erwähnt werden, erhalten entweder ihren Standardwert (falls definiert) oder `NULL`.

### Beispiele für INSERT

**Beispiel 1: Einfügen eines neuen Kunden in die Tabelle "Kunden" (unter Annahme der Spaltenreihenfolge: KundenID, Name, Email, Geburtsdatum, Adresse)**

```sql
INSERT INTO Kunden
VALUES (101, 'Eva Müller', 'eva.mueller@example.com', '1990-05-15', 'Musterstraße 7, 12345 Musterstadt');
```

**Beispiel 2: Einfügen eines neuen Produkts in die Tabelle "Produkte" mit Angabe der Spalten**

```sql
INSERT INTO Produkte (ProduktID, Produktname, Preis)
VALUES (205, 'Premium Kaffee', 9.99);
```

In diesem Fall werden die Spalten `ProduktID`, `Produktname` und `Preis` mit den angegebenen Werten befüllt. Wenn die Tabelle weitere Spalten hat (z.B. `Beschreibung`), erhalten diese entweder ihren Standardwert oder `NULL`.

**Beispiel 3: Einfügen mehrerer Datensätze gleichzeitig (in einigen DBMS unterstützt)**

```sql
INSERT INTO Bestellungen (KundenID, Bestelldatum, Gesamtbetrag)
VALUES
(101, '2025-05-19', 45.50),
(102, '2025-05-18', 120.00),
(101, '2025-05-19', 78.20);
```

## 2. UPDATE - Ändern vorhandener Daten

Der `UPDATE`-Befehl wird verwendet, um vorhandene Datensätze in einer Tabelle zu ändern. Es ist wichtig, die `WHERE`-Klausel zu verwenden, um anzugeben, welche Zeilen aktualisiert werden sollen. Ohne eine `WHERE`-Klausel werden alle Zeilen in der Tabelle aktualisiert!

### Syntax von UPDATE

```sql
UPDATE tabellenname
SET spalte1 = neuer_wert1,
    spalte2 = neuer_wert2,
    ...
WHERE bedingung;
```

### Komponenten von UPDATE

-   **`UPDATE tabellenname`:** Gibt die Tabelle an, deren Daten geändert werden sollen.
-   **`SET spalte1 = neuer_wert1, spalte2 = neuer_wert2, ...`:** Gibt die Spalten an, die geändert werden sollen, und die neuen Werte, die ihnen zugewiesen werden. Mehrere Spalten können in einer einzigen `UPDATE`-Anweisung geändert werden, indem sie durch Kommas getrennt werden.
-   **`WHERE bedingung` (optional, aber sehr wichtig!):** Gibt die Bedingung an, die erfüllt sein muss, damit eine Zeile aktualisiert wird. Nur die Zeilen, für die die Bedingung `TRUE` ergibt, werden geändert.

### Beispiele für UPDATE

**Beispiel 1: Aktualisieren der Adresse eines bestimmten Kunden**

```sql
UPDATE Kunden
SET Adresse = 'Neue Allee 10, 54321 Neustadt'
WHERE KundenID = 101;
```

Dieser Befehl ändert die `Adresse` des Kunden mit der `KundenID` 101.

**Beispiel 2: Erhöhen des Preises aller Produkte um 10%**

```sql
UPDATE Produkte
SET Preis = Preis * 1.10;
```

**ACHTUNG:** Da hier keine `WHERE`-Klausel vorhanden ist, wird der `Preis` aller Produkte in der Tabelle `Produkte` um 10% erhöht.

**Beispiel 3: Aktualisieren des Bestellstatus und des Versanddatums für eine bestimmte Bestellung**

```sql
UPDATE Bestellungen
SET Bestellstatus = 'Versendet',
    Versanddatum = '2025-05-22'
WHERE BestellID = 301;
```

## 3. DELETE - Entfernen von Daten

Der `DELETE FROM`-Befehl wird verwendet, um vorhandene Zeilen (Datensätze) aus einer Tabelle zu entfernen. Ähnlich wie beim `UPDATE`-Befehl ist die Verwendung einer `WHERE`-Klausel entscheidend, um anzugeben, welche Zeilen gelöscht werden sollen. Ohne eine `WHERE`-Klausel werden alle Zeilen in der Tabelle gelöscht!

### Syntax von DELETE

```sql
DELETE FROM tabellenname
WHERE bedingung;
```

### Komponenten von DELETE

-   **`DELETE FROM tabellenname`:** Gibt die Tabelle an, aus der Zeilen entfernt werden sollen.
-   **`WHERE bedingung` (optional, aber sehr wichtig!):** Gibt die Bedingung an, die erfüllt sein muss, damit eine Zeile gelöscht wird. Nur die Zeilen, für die die Bedingung `TRUE` ergibt, werden entfernt.

### Beispiele für DELETE

**Beispiel 1: Löschen eines bestimmten Kunden**

```sql
DELETE FROM Kunden
WHERE KundenID = 102;
```

Dieser Befehl löscht den Kunden mit der `KundenID` 102 aus der Tabelle `Kunden`.

**Beispiel 2: Löschen aller Bestellungen, die älter als ein bestimmtes Datum sind**

```sql
DELETE FROM Bestellungen
WHERE Bestelldatum < '2025-01-01';
```

**ACHTUNG:** Wenn Sie den `DELETE FROM`-Befehl ohne eine `WHERE`-Klausel verwenden, werden alle Zeilen aus der Tabelle entfernt. Die Tabellenstruktur bleibt jedoch erhalten. Um die gesamte Tabelle einschließlich ihrer Struktur zu entfernen, verwenden Sie den Befehl `DROP TABLE`.

```sql
-- Vorsicht! Dieser Befehl löscht alle Zeilen aus der Tabelle "Produkte".
DELETE FROM Produkte;

-- Dieser Befehl löscht die gesamte Tabelle "Produkte" einschließlich ihrer Struktur.
-- DROP TABLE Produkte;
```

## Wichtige Hinweise zur Datenmanipulation

-   **Transaktionen:** Bei komplexeren Datenmanipulationsoperationen ist es oft ratsam, Transaktionen zu verwenden, um sicherzustellen, dass mehrere zusammenhängende Änderungen entweder alle erfolgreich durchgeführt oder im Fehlerfall alle rückgängig gemacht werden (`ROLLBACK`).
-   **Sicherheitsvorkehrungen:** Seien Sie besonders vorsichtig bei der Verwendung von `UPDATE` und `DELETE`-Befehlen ohne oder mit falsch formulierten `WHERE`-Klauseln, da dies zu unbeabsichtigten Datenverlusten führen kann. In Produktionsumgebungen sind oft Backups und Mechanismen zur Wiederherstellung von Daten vorhanden.
-   **Fremdschlüsselbeziehungen:** Beim Einfügen, Aktualisieren oder Löschen von Daten in Tabellen mit Fremdschlüsselbeziehungen müssen die Regeln der referenziellen Integrität beachtet werden, um Inkonsistenzen in der Datenbank zu vermeiden.

## Fazit

Die SQL-Befehle `INSERT`, `UPDATE` und `DELETE` sind unerlässlich für die Verwaltung der Daten in relationalen Datenbanken. `INSERT` ermöglicht das Hinzufügen neuer Informationen, `UPDATE` das Ändern vorhandener Daten und `DELETE` das Entfernen von Datensätzen. Ein sorgfältiger und korrekter Einsatz dieser Befehle, insbesondere in Verbindung mit der `WHERE`-Klausel und unter Berücksichtigung von Transaktionen und referenzieller Integrität, ist entscheidend für die Aufrechterhaltung einer konsistenten und korrekten Datenbank.

## Links und Quellen

-   **SQL INSERT INTO Statement - W3Schools:** [https://www.w3schools.com/sql/sql_insert.asp](https://www.w3schools.com/sql/sql_insert.asp) (Englischsprachiges Tutorial)
-   **SQL UPDATE Statement - W3Schools:** [https://www.w3schools.com/sql/sql_update.asp](https://www.w3schools.com/sql/sql_update.asp) (Englischsprachiges Tutorial)
-   **SQL DELETE Statement - W3Schools:** [https://www.w3schools.com/sql/sql_delete.asp](https://www.w3schools.com/sql/sql_delete.asp) (Englischsprachiges Tutorial)
-   **Dokumentation des spezifischen DBMS, das Sie verwenden (z.B. MySQL, PostgreSQL, SQL Server, Oracle) für die genaue Syntax und Optionen von `INSERT`, `UPDATE` und `DELETE`.**
    -   **MySQL INSERT:** [https://dev.mysql.com/doc/refman/8.0/en/insert.html](https://dev.mysql.com/doc/refman/8.0/en/insert.html) (Englischsprachig)
    -   **PostgreSQL INSERT:** [https://www.postgresql.org/docs/current/sql-insert.html](https://www.postgresql.org/docs/current/sql-insert.html) (Englischsprachig)
    -   **SQL Server INSERT:** [https://learn.microsoft.com/en-us/sql/t-sql/statements/insert-transact-sql?view=sql-server-ver16](https://learn.microsoft.com/en-us/sql/t-sql/statements/insert-transact-sql?view=sql-server-ver16) (Englischsprachig)
    -   **Oracle INSERT:** Suche nach "Oracle INSERT syntax"
    -   **MySQL UPDATE:** [https://dev.mysql.com/doc/refman/8.0/en/update.html](https://dev.mysql.com/doc/refman/8.0/en/update.html) (Englischsprachig)
    -   **PostgreSQL UPDATE:** [https://www.postgresql.org/docs/current/sql-update.html](https://www.postgresql.org/docs/current/sql-update.html) (Englischsprachig)
    -   **SQL Server UPDATE:** [https://learn.microsoft.com/en-us/sql/t-sql/statements/update-transact-sql?view=sql-server-ver16](https://learn.microsoft.com/en-us/sql/t-sql/statements/update-transact-sql?view=sql-server-ver16) (Englischsprachig)
    -   **Oracle UPDATE:** Suche nach "Oracle UPDATE syntax"
    -   **MySQL DELETE:** [https://dev.mysql.com/doc/refman/8.0/en/delete.html](https://dev.mysql.com/doc/refman/8.0/en/delete.html) (Englischsprachig)
    -   **PostgreSQL DELETE:** [https://www.postgresql.org/docs/current/sql-delete.html](https://www.postgresql.org/docs/current/sql-delete.html) (Englischsprachig)
    -   **SQL Server DELETE:** [https://learn.microsoft.com/en-us/sql/t-sql/statements/delete-transact-sql?view=sql-server-ver16](https://learn.microsoft.com/en-us/sql/t-sql/statements/delete-transact-sql?view=sql-server-ver16) (Englischsprachig)
    -   **Oracle DELETE:** Suche nach "Oracle DELETE syntax"
-   **Artikel und Blogbeiträge zum Thema "SQL Data Manipulation" und "Best Practices für SQL INSERT, UPDATE, DELETE".**

-----

> **Fehler gefunden?** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
