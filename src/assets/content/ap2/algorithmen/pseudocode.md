# Programmieren von Softwarelösungen: Algorithmen in einer Programmiersprache darstellen - Pseudocode

## Einführung

Bevor ein Algorithmus in einer spezifischen Programmiersprache implementiert wird, ist es oft hilfreich, ihn in einer präzisen, aber dennoch allgemein verständlichen Form darzustellen. Pseudocode ist eine solche informelle Sprache, die die Struktur eines Algorithmus beschreibt, ohne die strengen Syntaxregeln einer bestimmten Programmiersprache einhalten zu müssen. Er kombiniert natürliche Sprache mit den grundlegenden Kontrollstrukturen, die in vielen Programmiersprachen vorkommen. Der Fokus liegt auf der klaren und logischen Darstellung des Ablaufs.

## Was ist Pseudocode?

Pseudocode ist eine Art "Rohform" des Codes – ein Mittelweg zwischen der Beschreibung eines Algorithmus in natürlicher Sprache und seiner tatsächlichen Implementierung in einer Programmiersprache. Er soll für jeden, der die grundlegenden Konzepte der Programmierung versteht, leicht lesbar sein, unabhängig von seiner bevorzugten Programmiersprache.

**Wichtige Merkmale von Pseudocode:**

-   **Allgemeine Verständlichkeit:** Verwendet einfache, klare Sprache und vermeidet spezifische Syntax einer bestimmten Programmiersprache.
-   **Fokus auf die Logik:** Stellt die Schritte und die Kontrollflussstrukturen des Algorithmus deutlich dar.
-   **Abstraktion vom Implementierungsdetail:** Lässt sprachspezifische Details (z.B. genaue Datentypen, Semikolons, spezifische Bibliotheksaufrufe) weg.
-   **Verwendung von Schlüsselwörtern:** Nutzt oft englische Schlüsselwörter, die in vielen Programmiersprachen vorkommen (z.B. `IF`, `THEN`, `ELSE`, `WHILE`, `FOR`, `DO`, `RETURN`).
-   **Struktur durch Einrücken:** Die logische Struktur des Algorithmus wird durch Einrücken von Codeblöcken unterhalb von Kontrollstrukturen verdeutlicht.

## Kontrollstrukturen im Pseudocode

Pseudocode verwendet typische Kontrollstrukturen, um den Ablauf eines Algorithmus zu beschreiben:

-   **Sequenz:** Anweisungen werden nacheinander ausgeführt. Im Pseudocode werden sie einfach untereinander geschrieben.

    ```pseudocode
    Anweisung 1
    Anweisung 2
    Anweisung 3
    ```

-   **Selektion (Bedingte Anweisung):** Ermöglicht die Ausführung von Code basierend auf einer Bedingung (`IF-THEN-ELSE`).

    ```pseudocode
    WENN Bedingung DANN
        Anweisungsblock 1
    SONST
        Anweisungsblock 2
    ENDE WENN
    ```

    Die `SONST`-Klausel ist optional. Es können auch `SONST WENN`-Konstruktionen verwendet werden, um mehrere Bedingungen zu prüfen:

    ```pseudocode
    WENN Bedingung 1 DANN
        Anweisungsblock 1
    SONST WENN Bedingung 2 DANN
        Anweisungsblock 2
    SONST
        Anweisungsblock 3
    ENDE WENN
    ```

-   **Iteration (Schleifen):** Ermöglichen die wiederholte Ausführung von Codeblöcken (`WHILE`, `FOR`).

    -   **WHILE-Schleife (Kopfgesteuerte Schleife):** Der Schleifenrumpf wird ausgeführt, solange die Bedingung wahr ist.

        ```pseudocode
        SOLANGE Bedingung IST WAHR WIEDERHOLE
            Anweisungsblock
        ENDE SOLANGE
        ```

    -   **FOR-Schleife (Zählschleife):** Wird verwendet, um einen Codeblock eine bestimmte Anzahl von Malen zu wiederholen oder über eine Sequenz zu iterieren.

        ```pseudocode
        FÜR Variable VON Startwert BIS Endwert (SCHRITT Weite) WIEDERHOLE
            Anweisungsblock
        ENDE FÜR
        ```

        Die `SCHRITT`-Weite ist optional und wird oft als 1 angenommen, wenn nicht anders angegeben.

    -   **DO-WHILE-Schleife (Fußgesteuerte Schleife):** Der Schleifenrumpf wird mindestens einmal ausgeführt, und dann wird die Bedingung geprüft.

        ```pseudocode
        WIEDERHOLE
            Anweisungsblock
        BIS Bedingung IST WAHR
        ```

-   **Sprunganweisungen (mit Vorsicht verwenden):** `BREAK` (um eine Schleife vorzeitig zu verlassen) und `CONTINUE` (um zum nächsten Schleifendurchlauf zu springen) können im Pseudocode verwendet werden, sollten aber in der eigentlichen Implementierung wohlüberlegt eingesetzt werden.

-   **Unterprogramme (Funktionen/Prozeduren):** Algorithmen können in kleinere, wiederverwendbare Einheiten (Funktionen oder Prozeduren) strukturiert werden.

    ```pseudocode
    FUNKTION Funktionsname(Parameter1, Parameter2, ...)
        // Anweisungsblock der Funktion
        RÜCKGABE Ergebnis
    ENDE FUNKTION

    PROZEDUR Prozedurname(Parameter1, Parameter2, ...)
        // Anweisungsblock der Prozedur
    ENDE PROZEDUR
    ```

## Beispiel eines Algorithmus in Pseudocode

Nehmen wir an, wir möchten einen Algorithmus erstellen, der das größte Element in einer Liste von Zahlen findet:

```pseudocode
FUNKTION FindeGrößtesElement(Liste)
    WENN Liste IST LEER DANN
        RÜCKGABE Fehler: Liste ist leer
    ENDE WENN

    größtesElement = erstes Element der Liste

    FÜR jedes Element IN der Liste AB dem zweiten Element WIEDERHOLE
        WENN Element IST GRÖSSER ALS größtesElement DANN
            größtesElement = Element
        ENDE WENN
    ENDE FÜR

    RÜCKGABE größtesElement
ENDE FUNKTION
```

## Bedeutung von Pseudocode im Prüfungskontext

Im Prüfungskontext dient Pseudocode dazu, das algorithmische Denkvermögen und die Fähigkeit, einen Lösungsweg strukturiert darzustellen, zu überprüfen. Da keine strenge Syntax einer bestimmten Programmiersprache gefordert ist, kann sich der Prüfling auf die logische Abfolge der Schritte und die korrekte Anwendung von Kontrollstrukturen konzentrieren.

**Wichtige Punkte im Prüfungskontext:**

  - **Allgemeine Verständlichkeit:** Der Pseudocode sollte klar und für eine Person mit grundlegenden Programmierkenntnissen nachvollziehbar sein.
  - **Ersichtliche Kontrollstrukturen:** `IF-THEN-ELSE`, Schleifen (`WHILE`, `FOR`, `DO-WHILE`) und Funktions-/Prozedurdefinitionen müssen klar durch Schlüsselwörter und Einrücken strukturiert sein.
  - **Logische Korrektheit:** Der Algorithmus, der im Pseudocode dargestellt wird, sollte logisch korrekt sein und das beabsichtigte Problem lösen.
  - **Toleranz von Syntaxfehlern:** Da es sich nicht um echten Code handelt, werden kleinere Syntaxfehler toleriert, solange die Absicht und die logische Struktur klar erkennbar sind.
  - **Keine 1:1 Kompilierbarkeit erforderlich:** Der Pseudocode muss nicht direkt in einer bestimmten Programmiersprache kompilierbar sein. Der Fokus liegt auf der algorithmischen Darstellung.

## Vorteile der Verwendung von Pseudocode

  - **Planung und Design:** Hilft beim Strukturieren und Verfeinern eines Algorithmus, bevor er in einer spezifischen Sprache implementiert wird.
  - **Kommunikation:** Ermöglicht es, Algorithmen klar und einfach mit anderen zu kommunizieren, unabhängig von deren Programmiersprachenkenntnissen.
  - **Sprachunabhängigkeit:** Der gleiche Pseudocode kann als Grundlage für die Implementierung in verschiedenen Programmiersprachen dienen.
  - **Fehlervermeidung:** Das Durchdenken des Algorithmus in Pseudocode kann helfen, logische Fehler frühzeitig zu erkennen.
  - **Dokumentation:** Pseudocode kann als Teil der Softwaredokumentation verwendet werden, um die Funktionsweise wichtiger Algorithmen zu erklären.

## Fazit

Pseudocode ist ein wertvolles Werkzeug, um Algorithmen klar, präzise und allgemeinverständlich darzustellen. Er abstrahiert von den spezifischen Syntaxregeln einer Programmiersprache und konzentriert sich auf die logische Struktur und den Ablauf des Algorithmus mithilfe von bekannten Kontrollstrukturen und einfacher Sprache. Insbesondere im Prüfungskontext ermöglicht Pseudocode die Demonstration algorithmischen Denkens ohne die Notwendigkeit, perfekt syntaktisch korrekten und kompilierbaren Code zu schreiben. Die klare Darstellung der Kontrollstrukturen durch Einrücken ist dabei essenziell für die Verständlichkeit.

## Links und Quellen

  - **Pseudocode - Wikipedia:** [https://de.wikipedia.org/wiki/Pseudocode](https://de.wikipedia.org/wiki/Pseudocode)
  - **Pseudocode Standard - University of Cambridge:** [https://www.cl.cam.ac.uk/teaching/0910/Algorithms/pseudocode.pdf](https://www.google.com/search?q=https://www.cl.cam.ac.uk/teaching/0910/Algorithms/pseudocode.pdf) (Englischsprachig - Beispiel für einen Pseudocode-Standard)
  - **How to Write Pseudocode - wikiHow:** [https://www.wikihow.com/Write-Pseudocode](https://www.wikihow.com/Write-Pseudocode) (Englischsprachig - Anleitung zum Schreiben von Pseudocode)
  - **Pseudocode Examples - Programiz:** [https://www.programiz.com/article/pseudocode-examples](https://www.google.com/search?q=https://www.programiz.com/article/pseudocode-examples) (Englischsprachig - Beispiele für Pseudocode)
