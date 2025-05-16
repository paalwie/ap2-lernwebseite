# Datenbankabfrage und Datenpflege

## Einführung

Nachdem eine Datenbank modelliert und erstellt wurde, sind zwei grundlegende Operationen notwendig: die Abfrage von Daten, um benötigte Informationen zu extrahieren, und die Datenpflege, um die Daten aktuell, korrekt und konsistent zu halten. Beide Bereiche sind entscheidend für die Nutzbarkeit und Integrität der Datenbank.

## Datenbankabfrage

Die Datenbankabfrage bezieht sich auf den Prozess des Abrufens von Daten aus einer oder mehreren Tabellen in einer Datenbank basierend auf bestimmten Kriterien. Für relationale Datenbanken ist **SQL (Structured Query Language)** der Standard für diese Operationen.

**Grundlegende SQL-Befehle für die Abfrage:**

- **SELECT:** Wird verwendet, um Spalten (Attribute) aus einer oder mehreren Tabellen auszuwählen, die in den Ergebnissen angezeigt werden sollen.
    ```sql
    SELECT Spalte1, Spalte2 FROM Tabelle;
    ```
- **FROM:** Gibt die Tabelle(n) an, aus der/denen die Daten abgerufen werden sollen.
- **WHERE:** Filtert die Datensätze basierend auf einer angegebenen Bedingung.
    ```sql
    SELECT * FROM Tabelle WHERE Bedingung;
    ```
- **ORDER BY:** Sortiert die Ergebnisse nach einer oder mehreren Spalten (aufsteigend `ASC` oder absteigend `DESC`).
    ```sql
    SELECT * FROM Tabelle ORDER BY Spalte ASC;
    ```
- **GROUP BY:** Gruppiert Zeilen mit gleichen Werten in einer oder mehreren Spalten zu einer zusammenfassenden Zeile. Wird oft mit Aggregatfunktionen verwendet.
- **HAVING:** Filtert Gruppen, die durch `GROUP BY` erstellt wurden, basierend auf einer Bedingung.
- **JOIN:** Kombiniert Zeilen aus zwei oder mehr Tabellen basierend auf einer verwandten Spalte. Es gibt verschiedene Arten von Joins (INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN).
    ```sql
    SELECT Tabelle1.SpalteA, Tabelle2.SpalteB
    FROM Tabelle1
    INNER JOIN Tabelle2 ON Tabelle1.Verbindungsspalte = Tabelle2.Verbindungsspalte;
    ```
- **Aggregatfunktionen:** Führen Berechnungen auf einer Menge von Werten durch und geben einen einzelnen zusammenfassenden Wert zurück (z.B. `COUNT()`, `SUM()`, `AVG()`, `MIN()`, `MAX()`).

**Nicht-relationale Datenbanken:**

NoSQL-Datenbanken verwenden oft eigene Abfragesprachen oder APIs, die auf das jeweilige Datenmodell zugeschnitten sind (z.B. MongoDB Query Language, Cypher für Neo4j). Die Konzepte des Filterns, Sortierens und Aggregierens sind jedoch oft ähnlich.

## Datenpflege

Die Datenpflege umfasst alle Operationen, die darauf abzielen, die Daten in der Datenbank korrekt, aktuell und nützlich zu halten. Dazu gehören das Einfügen, Ändern und Löschen von Daten sowie die Sicherstellung der Datenintegrität.

**Grundlegende SQL-Befehle für die Datenpflege:**

- **INSERT INTO:** Fügt neue Datensätze in eine Tabelle ein.
    ```sql
    INSERT INTO Tabelle (Spalte1, Spalte2) VALUES (Wert1, Wert2);
    ```
- **UPDATE:** Ändert vorhandene Datensätze in einer Tabelle basierend auf einer Bedingung.
    ```sql
    UPDATE Tabelle SET Spalte = NeuerWert WHERE Bedingung;
    ```
- **DELETE FROM:** Löscht Datensätze aus einer Tabelle basierend auf einer Bedingung.
    ```sql
    DELETE FROM Tabelle WHERE Bedingung;
    ```

**Wichtige Aspekte der Datenpflege:**

- **Datenintegrität:** Sicherstellen, dass die Daten korrekt und konsistent sind. Dies wird oft durch Constraints (z.B. NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK) und Trigger in der Datenbank implementiert.
- **Transaktionen:** Eine Sequenz von Datenbankoperationen, die als eine einzelne logische Arbeitseinheit behandelt werden. Transaktionen stellen sicher, dass entweder alle Operationen erfolgreich abgeschlossen werden (COMMIT) oder keine (ROLLBACK), um die ACID-Eigenschaften zu gewährleisten.
- **Sicherheitsmaßnahmen:** Zugriffskontrolle und Berechtigungen, um unbefugten Zugriff und Manipulation von Daten zu verhindern.
- **Backup und Wiederherstellung:** Regelmäßige Sicherung der Datenbank, um Datenverlust vorzubeugen und die Möglichkeit zur Wiederherstellung im Fehlerfall zu haben.
- **Datenbereinigung (Data Cleansing):** Prozesse zur Identifizierung und Korrektur fehlerhafter, inkonsistenter oder irrelevanter Daten.
- **Datenarchivierung:** Verschieben von selten benötigten Daten in ein separates Archiv, um die Performance der Hauptdatenbank zu verbessern und gesetzliche Aufbewahrungsfristen einzuhalten.

**Datenpflege in nicht-relationalen Datenbanken:**

Auch hier gibt es spezifische Befehle oder Methoden zum Einfügen, Aktualisieren und Löschen von Daten, die auf dem jeweiligen Datenmodell basieren. Die Konzepte der Datenintegrität und Konsistenz werden jedoch möglicherweise anders gehandhabt (z.B. durch anwendungsseitige Logik statt durch strenge relationale Constraints).

> **Hinweis:** Sowohl die effiziente Abfrage als auch die sorgfältige Pflege der Daten sind unerlässlich für den Wert und die Zuverlässigkeit einer Datenbank.

## Beispiel oder Anwendungsfall

In einer Datenbank für einen Online-Shop:

- **Datenbankabfrage:**
    - Anzeigen aller Produkte mit einem Preis über 50 Euro:
      ```sql
      SELECT Produktname, Preis FROM Produkte WHERE Preis > 50;
      ```
    - Abrufen der Bestellungen eines bestimmten Kunden (unter Verwendung eines JOIN):
      ```sql
      SELECT BestellID, Bestelldatum FROM Bestellungen
      INNER JOIN Kunden ON Bestellungen.KundenID = Kunden.KundenID
      WHERE Kunden.Name = 'Alice Müller';
      ```
- **Datenpflege:**
    - Einfügen eines neuen Produkts:
      ```sql
      INSERT INTO Produkte (Produktname, Preis) VALUES ('Neues Buch', 19.99);
      ```
    - Aktualisieren des Preises eines Produkts:
      ```sql
      UPDATE Produkte SET Preis = 24.99 WHERE Produktname = 'Neues Buch';
      ```
    - Löschen einer alten Bestellung:
      ```sql
      DELETE FROM Bestellungen WHERE BestellID = 100;
      ```

## Weiterführende Links & Quellen

  - [Wikipedia: SQL](https://de.wikipedia.org/wiki/SQL)
  - [SQL Tutorial (W3Schools)](https://www.w3schools.com/sql/) (Englischsprachige Ressource mit vielen Beispielen).
  - [SQL Befehlsübersicht (z.B. von Datenbankanbietern)](https://dev.mysql.com/doc/refman/8.0/en/sql-commands.html) (Englischsprachig, MySQL-spezifisch, aber viele Befehle sind Standard).
  - [Datenpflege in Datenbanken – Grundlagen und Methoden](https://www.ionos.de/digitalguide/server/know-how/datenpflege-in-datenbanken-grundlagen-und-methoden/)
  - [Datenintegrität in Datenbanken erklärt](https://www.databasestar.com/data-integrity/) (Englischsprachige Ressource).

-----

> **Fehler gefunden?:** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
