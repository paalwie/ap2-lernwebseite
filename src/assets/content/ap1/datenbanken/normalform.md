# Normalisieren: 1. bis 3. Normalform

## Einführung

Die Normalisierung ist ein systematischer Prozess zur Strukturierung einer relationalen Datenbank, um Redundanzen zu minimieren und Anomalien (Einfüge-, Änderungs- und Löschanomalien) zu vermeiden. Sie umfasst eine Reihe von Regeln, die als Normalformen bezeichnet werden. Die ersten drei Normalformen (1NF, 2NF, 3NF) sind die gebräuchlichsten und zielen darauf ab, eine effiziente und integre Datenbankstruktur zu schaffen.

## Grundlagen der Normalisierung

Der Prozess der Normalisierung beinhaltet die Zerlegung einer oder mehrerer Tabellen in kleinere, besser strukturierte Tabellen und die Definition von Beziehungen zwischen ihnen. Ziel ist es, dass jedes Attribut in einer Tabelle direkt von deren Primärschlüssel abhängt.

**Funktionale Abhängigkeit:**

Ein Attribut B ist funktional abhängig von einem Attribut A (geschrieben als A → B), wenn jeder Wert von A in einer Tabelle eindeutig einen bestimmten Wert von B bestimmt.

**Primärschlüssel:**

Ein Attribut oder eine Kombination von Attributen, das jede Zeile in einer Tabelle eindeutig identifiziert.

## Die Normalformen

**1. Erste Normalform (1NF):**

- **Bedingung:** Eine Tabelle befindet sich in der ersten Normalform, wenn jede Zelle der Tabelle nur einen atomaren (unteilbaren) Wert enthält und es keine sich wiederholenden Gruppen von Spalten gibt.
- **Was zu tun ist, um 1NF zu erreichen:**
    - Entferne sich wiederholende Gruppen von Spalten in separate Tabellen.
    - Identifiziere einen Primärschlüssel für jede Tabelle.
- **Auswirkung:** Eliminiert sich wiederholende Daten und vereinfacht Abfragen.

**Beispiel (Verstoß gegen 1NF):**

| Bestellnummer | Produktname         | Menge | Farbe, Größe |
| :----------- | :------------------ | :---- | :----------- |
| 100          | T-Shirt             | 2     | Rot, M       |
| 101          | Hose                | 1     | Blau, L      |
| 102          | Socken, T-Shirt     | 3, 1  | Schwarz, S   |

**Nach 1NF:**

| Bestellnummer | Produktname | Menge | Farbe   | Größe |
| :----------- | :---------- | :---- | :------ | :---- |
| 100          | T-Shirt     | 1     | Rot     | M     |
| 100          | T-Shirt     | 1     | Rot     | M     |
| 101          | Hose        | 1     | Blau    | L     |
| 102          | Socken      | 3     | Schwarz | S     |
| 102          | T-Shirt     | 1     | Schwarz | S     |

(Hier wurde angenommen, dass Farbe und Größe separate Attribute sind und Produkte in einer Bestellung mehrfach mit unterschiedlichen Attributen vorkommen können. Eine bessere 1NF-Lösung würde wahrscheinlich eine separate Tabelle für bestellte Artikel mit einer Fremdschlüsselbeziehung zur Bestellungen-Tabelle einführen.)

**2. Zweite Normalform (2NF):**

- **Bedingung:** Eine Tabelle befindet sich in der zweiten Normalform, wenn sie in der ersten Normalform ist und alle Nicht-Schlüsselattribute voll funktional vom **gesamten** Primärschlüssel abhängig sind. Dies ist nur relevant, wenn der Primärschlüssel aus mehreren Attributen besteht (zusammengesetzter Primärschlüssel).
- **Was zu tun ist, um 2NF zu erreichen:**
    - Wenn es Nicht-Schlüsselattribute gibt, die nur von einem Teil des zusammengesetzten Primärschlüssels abhängig sind, entferne diese Attribute in eine separate Tabelle und stelle eine Beziehung über den abhängigen Teil des Schlüssels her.
- **Auswirkung:** Eliminiert Redundanzen, die durch partielle Abhängigkeiten entstehen.

**Beispiel (Verstoß gegen 2NF):**

| Bestellnummer | ProduktID | Produktname | Preis | Menge |
| :----------- | :-------- | :---------- | :---- | :---- |
| 100          | P1        | T-Shirt     | 20    | 2     |
| 100          | P2        | Hose        | 50    | 1     |
| 101          | P1        | T-Shirt     | 20    | 1     |

(Hier ist {Bestellnummer, ProduktID} der Primärschlüssel. `Produktname` und `Preis` hängen nur von `ProduktID` ab, nicht vom gesamten Primärschlüssel.)

**Nach 2NF:**

**Tabelle Bestellpositionen:**

| Bestellnummer | ProduktID | Menge |
| :----------- | :-------- | :---- |
| 100          | P1        | 2     |
| 100          | P2        | 1     |
| 101          | P1        | 1     |

**Tabelle Produkte:**

| ProduktID | Produktname | Preis |
| :-------- | :---------- | :---- |
| P1        | T-Shirt     | 20    |
| P2        | Hose        | 50    |

**3. Dritte Normalform (3NF):**

- **Bedingung:** Eine Tabelle befindet sich in der dritten Normalform, wenn sie in der zweiten Normalform ist und es keine transitiven funktionalen Abhängigkeiten gibt. Das bedeutet, kein Nicht-Schlüsselattribut hängt von einem anderen Nicht-Schlüsselattribut ab.
- **Was zu tun ist, um 3NF zu erreichen:**
    - Wenn es Nicht-Schlüsselattribute gibt, die transitiv von einem Nicht-Schlüsselattribut abhängen, entferne diese Attribute in eine separate Tabelle und stelle eine Beziehung über das abhängige Nicht-Schlüsselattribut her.
- **Auswirkung:** Eliminiert Redundanzen, die durch transitive Abhängigkeiten entstehen, und verbessert die Datenintegrität.

**Beispiel (Verstoß gegen 3NF):**

| Bestellnummer | KundenID | Kundenname | Kundenstadt | Postleitzahl |
| :----------- | :------- | :---------- | :---------- | :---------- |
| 100          | K1       | Alice      | Berlin      | 10115      |
| 101          | K2       | Bob        | München     | 80331      |
| 102          | K1       | Alice      | Berlin      | 10115      |

(Hier ist `Bestellnummer` der Primärschlüssel. `Kundenstadt` hängt von `Postleitzahl` ab, und `Postleitzahl` hängt von `KundenID` (implizit über den Kunden) ab. Somit gibt es eine transitive Abhängigkeit: `Bestellnummer` → `KundenID` → `Postleitzahl` → `Kundenstadt`.)

**Nach 3NF:**

**Tabelle Bestellungen:**

| Bestellnummer | KundenID |
| :----------- | :------- |
| 100          | K1       |
| 101          | K2       |
| 102          | K1       |

**Tabelle Kunden:**

| KundenID | Kundenname | Postleitzahl |
| :------- | :---------- | :---------- |
| K1       | Alice      | 10115      |
| K2       | Bob        | 80331      |

**Tabelle Postleitzahlen:**

| Postleitzahl | Stadt   |
| :---------- | :------ |
| 10115       | Berlin  |
| 80331       | München |

> **Hinweis:** Die Normalisierung ist ein wichtiger Schritt im Datenbankdesign, um eine saubere, effiziente und wartbare Struktur zu gewährleisten. Die ersten drei Normalformen sind in den meisten Anwendungen ausreichend.

## Weiterführende Links & Quellen

  - [Wikipedia: Datenbanknormalisierung](https://de.wikipedia.org/wiki/Datenbanknormalisierung)
  - [Einführung in die Normalformen (mit klaren Beispielen)](https://www.databasestar.com/normal-forms/) (Englischsprachige Ressource).
  - [Ausführliche Erklärung der 1NF, 2NF und 3NF](https://www.studytonight.com/dbms/database-normalization.php) (Englischsprachige Ressource).
  - [Visuelle Erklärungen zur Datenbanknormalisierung](https://www.youtube.com/watch?v=UrYLYV7WSHM) (Englisches Video, kann aber hilfreich sein).

-----

> **Fehler gefunden?:** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
