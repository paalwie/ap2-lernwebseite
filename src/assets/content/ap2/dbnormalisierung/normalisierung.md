# Konzipieren und Umsetzen von kundenspezifischen Softwareanwendungen: Normalisierung anwenden können (1. bis 3. Normalform) - Normalisierung

## Einführung

Datenbanknormalisierung ist ein Prozess, der darauf abzielt, Redundanzen in relationalen Datenbanken zu reduzieren und die Datenintegrität zu verbessern, indem Daten so organisiert werden, dass Abhängigkeiten zwischen Attributen innerhalb der Tabellen klar definiert sind. Der Prozess umfasst die Anwendung einer Reihe von Regeln, die als Normalformen bezeichnet werden. Die gebräuchlichsten Normalformen sind die Erste Normalform (1NF), die Zweite Normalform (2NF) und die Dritte Normalform (3NF). Das Ziel ist es, ein gut strukturiertes Datenbankschema zu schaffen, das effizienter, flexibler und weniger anfällig für Anomalien (Einfüge-, Änderungs- und Löschprobleme) ist.

## Anomalien in nicht-normalisierten Daten

Bevor wir uns die Normalformen ansehen, ist es wichtig zu verstehen, welche Probleme durch Redundanzen und schlecht strukturierte Daten entstehen können:

-   **Einfügeanomalie:** Es ist nicht möglich, bestimmte Informationen einzufügen, ohne auch Informationen zu anderen Entitäten einzufügen.
-   **Änderungsanomalie:** Das Ändern eines einzelnen Fakts erfordert die Änderung mehrerer Zeilen, wenn dieser Fakt redundant gespeichert ist.
-   **Löschanomalie:** Das Löschen einer Zeile führt zum unbeabsichtigten Verlust von Informationen über eine andere Entität.

## Die Normalformen (1NF, 2NF, 3NF)

### Erste Normalform (1NF)

Eine Tabelle befindet sich in der ersten Normalform (1NF), wenn jede Zelle der Tabelle nur einen einzigen Wert enthält und es keine wiederholenden Gruppen von Spalten gibt.

**Regeln für 1NF:**

1.  **Atomare Werte:** Jedes Attribut muss atomar sein, d.h., es darf nicht in weitere Komponenten zerlegt werden können (z.B. eine Spalte für "Name" anstelle von separaten Spalten für "Vorname" und "Nachname" wäre in dieser Hinsicht nicht atomar, obwohl es in der Praxis oft sinnvoll ist, Namen aufzuteilen).
2.  **Keine wiederholenden Gruppen:** Es dürfen keine Spaltengruppen geben, die sich wiederholen, um mehrere Werte eines Attributs für eine einzelne Entität zu speichern (z.B. "Produkt1", "Preis1", "Produkt2", "Preis2" usw.).

**Um eine Tabelle in die 1NF zu bringen:**

-   Wiederholende Gruppen von Spalten werden in separate Zeilen aufgeteilt oder in eine separate Tabelle mit einer 1:N-Beziehung zur ursprünglichen Tabelle verschoben.

### Zweite Normalform (2NF)

Eine Tabelle befindet sich in der zweiten Normalform (2NF), wenn sie sich bereits in der ersten Normalform (1NF) befindet und jedes Nicht-Schlüsselattribut voll funktional vom gesamten Primärschlüssel abhängig ist. Dies ist nur relevant für Tabellen mit einem zusammengesetzten Primärschlüssel (ein Primärschlüssel, der aus mehreren Attributen besteht).

**Regeln für 2NF:**

1.  Die Tabelle muss in 1NF sein.
2.  Jedes Nicht-Schlüsselattribut muss vom *gesamten* Primärschlüssel funktional abhängig sein.

**Funktionale Abhängigkeit:** Ein Attribut B ist funktional abhängig von einem Attribut (oder einer Menge von Attributen) A, wenn jeder Wert von A eindeutig einen Wert von B bestimmt. Schreibweise: A → B.

**Voll funktionale Abhängigkeit:** Ein Attribut B ist voll funktional von einem zusammengesetzten Primärschlüssel A abhängig, wenn B von der *gesamten* Menge der Attribute in A abhängig ist und nicht von einer echten Teilmenge von A.

**Um eine Tabelle in die 2NF zu bringen (wenn sie nicht bereits in 2NF ist):**

-   Wenn es Nicht-Schlüsselattribute gibt, die nur von einem Teil eines zusammengesetzten Primärschlüssels abhängig sind, werden diese Attribute zusammen mit dem Teil des Primärschlüssels, von dem sie abhängig sind, in eine neue Tabelle ausgelagert. Eine Fremdschlüsselbeziehung zur ursprünglichen Tabelle wird eingerichtet.

### Dritte Normalform (3NF)

Eine Tabelle befindet sich in der dritten Normalform (3NF), wenn sie sich bereits in der zweiten Normalform (2NF) befindet und es keine transitiven funktionalen Abhängigkeiten von einem Nicht-Schlüsselattribut zum Primärschlüssel gibt.

**Regeln für 3NF:**

1.  Die Tabelle muss in 2NF sein.
2.  Es darf keine transitiven funktionalen Abhängigkeiten geben.

**Transitive funktionale Abhängigkeit:** Eine transitive Abhängigkeit besteht, wenn ein Nicht-Schlüsselattribut indirekt vom Primärschlüssel über ein anderes Nicht-Schlüsselattribut abhängig ist (z.B. Primärschlüssel → A und A → B, wobei A und B Nicht-Schlüsselattribute sind, also Primärschlüssel → B über A).

**Um eine Tabelle in die 3NF zu bringen (wenn sie nicht bereits in 3NF ist):**

-   Wenn es transitive Abhängigkeiten gibt, werden die transitiv abhängigen Attribute in eine neue Tabelle ausgelagert. Das Nicht-Schlüsselattribut, von dem sie direkt abhängig sind, wird zum Primärschlüssel der neuen Tabelle und als Fremdschlüssel in der ursprünglichen Tabelle beibehalten.

## Beispiel zur Normalisierung

Betrachten wir eine Tabelle "Bestellungen" (nicht in 1NF):

| BestellNr | Kunde     | Kundenadresse | Produkt1 | Preis1 | Produkt2 | Preis2 |
| --------- | --------- | ------------- | -------- | ------ | -------- | ------ |
| 101       | Müller    | Hauptstr. 1   | Laptop   | 1200   | Maus     | 25     |
| 102       | Schmidt   | Bahnweg 5     | Tastatur | 75     |          |        |

**1. Normalform (1NF):** Wiederholende Produkt- und Preisspalten entfernen.

| BestellNr | Kunde     | Kundenadresse | Produkt  | Preis |
| --------- | --------- | ------------- | -------- | ----- |
| 101       | Müller    | Hauptstr. 1   | Laptop   | 1200  |
| 101       | Müller    | Hauptstr. 1   | Maus     | 25    |
| 102       | Schmidt   | Bahnweg 5     | Tastatur | 75    |

**2. Normalform (2NF):** Angenommen, BestellNr ist der Primärschlüssel. Kundenadresse ist nur vom Kunden abhängig, nicht von der BestellNr. Wir teilen die Tabelle auf.

**Tabelle Bestellungen (1NF):**

| BestellNr | Kunde     | Produkt  | Preis |
| --------- | --------- | -------- | ----- |
| 101       | Müller    | Laptop   | 1200  |
| 101       | Müller    | Maus     | 25    |
| 102       | Schmidt   | Tastatur | 75    |

**Tabelle Kunden:**

| Kunde     | Kundenadresse |
| --------- | ------------- |
| Müller    | Hauptstr. 1   |
| Schmidt   | Bahnweg 5     |

Nun müssen wir die Tabelle "Bestellungen" anpassen, um auf die Kunden-Tabelle zu verweisen (Annahme: "Kunde" ist ein eindeutiger Kundenname und dient als Primärschlüssel in "Kunden").

**Tabelle Bestellungen (2NF):**

| BestellNr | Kunde     | Produkt  | Preis |
| --------- | --------- | -------- | ----- |
| 101       | Müller    | Laptop   | 1200  |
| 101       | Müller    | Maus     | 25    |
| 102       | Schmidt   | Tastatur | 75    |

**Tabelle Kunden:**

| Kunde     | Kundenadresse |
| --------- | ------------- |
| Müller    | Hauptstr. 1   |
| Schmidt   | Bahnweg 5     |

**3. Normalform (3NF):** Angenommen, wir haben eine Tabelle "Produkte" mit Produktname und Preis. Der Preis ist vom Produkt abhängig, aber nicht vom BestellNr direkt. Wir könnten eine separate Produkttabelle erstellen.

**Tabelle Bestellungen (2NF):**

| BestellNr | Kunde     | Produkt  |
| --------- | --------- | -------- |
| 101       | Müller    | Laptop   |
| 101       | Müller    | Maus     |
| 102       | Schmidt   | Tastatur |

**Tabelle Kunden:**

| Kunde     | Kundenadresse |
| --------- | ------------- |
| Müller    | Hauptstr. 1   |
| Schmidt   | Bahnweg 5     |

**Tabelle Produkte:**

| Produkt  | Preis |
| -------- | ----- |
| Laptop   | 1200  |
| Maus     | 25    |
| Tastatur | 75    |

Nun müssen wir die Tabelle "Bestellungen" anpassen, um auf die Produkte-Tabelle zu verweisen (Annahme: "Produkt" ist der Primärschlüssel in "Produkte").

**Tabelle Bestellungen (3NF):**

| BestellNr | Kunde     | Produkt  |
| --------- | --------- | -------- |
| 101       | Müller    | Laptop   |
| 101       | Müller    | Maus     |
| 102       | Schmidt   | Tastatur |

**Tabelle Kunden:**

| Kunde     | Kundenadresse |
| --------- | ------------- |
| Müller    | Hauptstr. 1   |
| Schmidt   | Bahnweg 5     |

**Tabelle Produkte:**

| Produkt  | Preis |
| -------- | ----- |
| Laptop   | 1200  |
| Maus     | 25    |
| Tastatur | 75    |

In diesem vereinfachten Beispiel haben wir Redundanzen reduziert und die Daten besser strukturiert.

## Bedeutung der Normalisierung

-   **Reduzierung von Datenredundanz:** Weniger Speicherplatz wird benötigt und die Konsistenz der Daten wird verbessert.
-   **Verbesserung der Datenintegrität:** Anomalien beim Einfügen, Ändern und Löschen von Daten werden vermieden.
-   **Einfachere Wartung und Weiterentwicklung:** Ein normalisiertes Schema ist in der Regel klarer strukturiert und einfacher zu verstehen und anzupassen.
-   **Flexibilität:** Änderungen an einem Datenelement müssen in der Regel nur an einer Stelle vorgenommen werden.

## Über die 3NF hinaus

Es gibt weitere Normalformen (z.B. Boyce-Codd Normalform (BCNF), 4NF, 5NF), die noch strengere Regeln haben und in speziellen Fällen angewendet werden können, um weitere Redundanzen zu eliminieren. In der Praxis reichen die ersten drei Normalformen für die meisten Anwendungen jedoch aus.

## Werkzeuge für Datenbankdesign und Normalisierung

Viele der bereits genannten Datenbankdesign-Tools unterstützen den Prozess der Normalisierung, indem sie helfen, funktionale Abhängigkeiten zu identifizieren und das Schema entsprechend zu strukturieren.

-   **Datenbankdesign-Tools:** z.B. ER/Studio, PowerDesigner, dbForge Studio. Diese Tools können oft helfen, ein ER-Modell in ein normalisiertes relationales Schema zu transformieren.
    -   **Link (ER/Studio - IDERA):** [https://www.idera.com/database-modeling-tools/er-studio](https://www.idera.com/database-modeling-tools/er-studio)
    -   **Link (SAP PowerDesigner):** [https://www.sap.com/products/technology-platform/powerdesigner.html](https://www.sap.com/products/technology-platform/powerdesigner.html)
    -   **Link (dbForge Studio - Devart):** [https://www.devart.com/dbforge/studio/](https://www.devart.com/dbforge/studio/)

-   **Lernressourcen und Tutorials:** Online-Tutorials und Kurse bieten Anleitungen und Beispiele zur Anwendung der Normalformen.
    -   **Link (Database Normalization - Khan Academy):** [https://www.khanacademy.org/computing/computer-programming/sql/relational-databases/v/database-normalization-introduction](https://www.khanacademy.org/computing/computer-programming/sql/relational-databases/v/database-normalization-introduction) (Englischsprachig)
    -   **Link (Datenbank Normalisierung einfach erklärt - YouTube):** Suche auf YouTube nach "Datenbank Normalisierung einfach erklärt" für deutschsprachige Tutorials.

## Fazit

Die Normalisierung ist ein wichtiger Schritt im relationalen Datenbankdesign, um Redundanzen zu minimieren, die Datenintegrität zu verbessern und ein effizienteres und wartbareres Datenbankschema zu schaffen. Das Verständnis und die Anwendung der ersten drei Normalformen (1NF, 2NF, 3NF) sind grundlegende Fähigkeiten für Softwareentwickler und Datenbankdesigner.

## Links und Quellen

-   **Database normalization - Wikipedia (Deutsch):** [https://de.wikipedia.org/wiki/Datenbanknormalisierung](https://de.wikipedia.org/wiki/Datenbanknormalisierung)
-   **Database normalization - Wikipedia (Englischsprachig):** [https://en.wikipedia.org/wiki/Database\_normalization](https://en.wikipedia.org/wiki/Database_normalization)
-   **Tutorials und Erklärungen zur Datenbanknormalisierung (z.B. auf Database Star, Guru99).**
    -   **Link (Database Normalization Explained - Database Star):** [https://databasestar.com/database-normalization/](https://databasestar.com/database-normalization/)
    -   **Link (What is Database Normalization? 1NF, 2NF, 3NF, BCNF - Guru99):** [https://www.guru99.com/database-normalization.html](https://www.guru99.com/database-normalization.html) (Englischsprachig)
-   **Artikel und Blogbeiträge zum Thema "Best Practices for Database Normalization".**
-   **Bücher über Datenbankdesign und relationale Datenbanken.**

-----

> **Fehler gefunden?** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
