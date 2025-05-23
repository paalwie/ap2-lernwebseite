# Anomalien und Redundanzen in Datenbanken erkennen

## Einführung

Beim Modellieren und Erstellen von Datenbanken ist es entscheidend, Anomalien und Redundanzen zu erkennen und zu vermeiden. Diese können zu Inkonsistenzen, Schwierigkeiten bei der Datenpflege und ineffizienter Datenspeicherung führen. Ein gut durchdachtes Datenbankdesign zielt darauf ab, diese Probleme zu minimieren.

## Grundlagen

**Redundanz:**

Redundanz in einer Datenbank bedeutet, dass dieselben Daten mehrfach an verschiedenen Stellen gespeichert werden. Dies kann folgende Probleme verursachen:

- **Speicherplatzverschwendung:** Mehr Speicherplatz wird benötigt als eigentlich notwendig.
- **Dateninkonsistenz:** Wenn redundante Daten an einer Stelle geändert werden, müssen alle Kopien ebenfalls aktualisiert werden. Geschieht dies nicht, entstehen Inkonsistenzen.

**Anomalien:**

Anomalien sind Fehler oder unerwünschte Nebeneffekte, die beim Einfügen, Ändern oder Löschen von Daten in einer schlecht strukturierten Datenbank auftreten können:

- **Einfügeanomalie (Insertion Anomaly):** Es ist nicht möglich, bestimmte Informationen zu speichern, ohne gleichzeitig andere, nicht relevante Informationen einzufügen. Zum Beispiel kann ein neuer Kurs nicht in einer Tabelle gespeichert werden, die auch Informationen über Studenten enthält, solange sich kein Student für diesen Kurs angemeldet hat.
- **Änderungsanomalie (Update Anomaly):** Um eine Information zu ändern, müssen möglicherweise mehrere Zeilen in der Tabelle aktualisiert werden. Wenn dies nicht vollständig geschieht, entstehen Inkonsistenzen. Zum Beispiel muss die Adresse eines Dozenten in allen Datensätzen geändert werden, in denen dieser Dozent Kurse unterrichtet.
- **Löschanomalie (Deletion Anomaly):** Beim Löschen eines Datensatzes gehen möglicherweise auch Informationen verloren, die eigentlich erhalten bleiben sollten. Zum Beispiel könnte beim Löschen des letzten Studenten, der an einem bestimmten Kurs teilnimmt, auch die Information über den Kurs selbst verloren gehen.

**Wie erkennt man Redundanzen und Anomalien?**

- **Analyse der Datenabhängigkeiten:** Untersuche, welche Attribute von anderen Attributen abhängen. Funktionale Abhängigkeiten spielen hier eine wichtige Rolle. Wenn ein Attribut eindeutig ein anderes Attribut bestimmt (z.B. die Matrikelnummer eines Studenten bestimmt eindeutig seinen Namen), liegt eine funktionale Abhängigkeit vor.
- **Identifizierung von sich wiederholenden Attributgruppen:** Wenn bestimmte Gruppen von Attributen in mehreren Zeilen wiederholt auftreten, ist dies ein Hinweis auf Redundanz.
- **Prüfung auf Verletzungen der Normalformen:** Die Normalisierung ist ein Prozess zur Strukturierung einer relationalen Datenbank, um Redundanzen zu reduzieren und Anomalien zu vermeiden. Die Einhaltung der verschiedenen Normalformen (1NF, 2NF, 3NF, etc.) ist ein wichtiger Indikator für ein gutes Design.
    - **1NF (Erste Normalform):** Jede Zelle enthält nur einen atomaren (unteilbaren) Wert. Es gibt keine sich wiederholenden Gruppen von Spalten.
    - **2NF (Zweite Normalform):** Die Tabelle ist in 1NF und alle Nicht-Schlüsselattribute sind voll funktional vom Primärschlüssel abhängig.
    - **3NF (Dritte Normalform):** Die Tabelle ist in 2NF und es gibt keine transitiven funktionalen Abhängigkeiten (kein Nicht-Schlüsselattribut hängt von einem anderen Nicht-Schlüsselattribut ab).
- **Betrachtung der Beziehungen zwischen Entitäten:** Bei der Erstellung eines Entity-Relationship-Diagramms (ERD) hilft die korrekte Modellierung der Beziehungen (1:1, 1:n, n:m) Redundanzen und Anomalien zu vermeiden. Eine n:m-Beziehung erfordert beispielsweise eine separate Verbindungstabelle, um Redundanzen zu vermeiden.

> **Hinweis:** Das Ziel ist es, eine Datenbank so zu strukturieren, dass Redundanzen minimiert und Anomalien vermieden werden, um die Datenintegrität und die Wartbarkeit der Datenbank zu gewährleisten.

## Beispiel oder Anwendungsfall

Betrachten wir eine schlecht normalisierte Tabelle, die Informationen über Studenten und die von ihnen belegten Kurse enthält:

| Matrikelnummer | Studentenname | KursID | Kursname         | Dozentenname | Dozentenadresse |
| :------------- | :------------ | :----- | :--------------- | :----------- | :-------------- |
| 12345          | Alice Müller  | INF101 | Einführung Info  | Prof. Meier  | Musterstr. 1    |
| 12345          | Alice Müller  | MAT201 | Lineare Algebra  | Dr. Schmidt  | Beispielweg 5   |
| 67890          | Bob Schmidt   | INF101 | Einführung Info  | Prof. Meier  | Musterstr. 1    |

**Redundanzen:**

- Der Studentenname und die Matrikelnummer wiederholen sich für jeden Kurs, den ein Student belegt.
- Der Dozentenname und die Dozentenadresse wiederholen sich für jeden Studenten, der einen Kurs dieses Dozenten belegt.

**Anomalien:**

- **Einfügeanomalie:** Ein neuer Student kann erst eingefügt werden, wenn er sich für einen Kurs anmeldet. Ein neuer Kurs kann erst eingefügt werden, wenn sich ein Student dafür anmeldet.
- **Änderungsanomalie:** Um den Namen von Prof. Meier zu ändern, müssen möglicherweise mehrere Zeilen aktualisiert werden.
- **Löschanomalie:** Wenn der letzte Student, der an "Lineare Algebra" teilnimmt (Alice Müller), gelöscht wird, gehen auch die Informationen über diesen Kurs verloren.

Durch die Normalisierung dieser Tabelle in separate Tabellen für Studenten, Kurse und eine Verbindungstabelle (Student-Kurs-Beziehung) könnten diese Redundanzen und Anomalien vermieden werden.

## Weiterführende Links & Quellen

  - [Wikipedia: Datenbanknormalisierung](https://de.wikipedia.org/wiki/Datenbanknormalisierung)
  - [Grundlagen der Datenbanknormalisierung (z.B. von Universitäten oder Fachportalen)](https://www.studytonight.com/dbms/database-normalization.php) (Englischsprachige Ressource mit guten Erklärungen).
  - [Redundante Daten, Anomalien und die Normalisierung von Datenbanken](https://wiki-mathe-info.de/info/sek-ii/q2/sql/lektion5)

-----

> **Fehler gefunden?:** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
