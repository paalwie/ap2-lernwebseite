# Abbildung der Kontrollstrukturen mittels Aktivitätsdiagramm oder Pseudocode als didaktisches Hilfsmittel

## Einführung

Beim Formulieren von Algorithmen und Entwickeln von Programmen sind Kontrollstrukturen grundlegende Bausteine, die den Ablauf der Befehlsausführung steuern. Um diese Strukturen zu verstehen, zu planen und zu kommunizieren, sind Aktivitätsdiagramme und Pseudocode wertvolle didaktische Hilfsmittel. Sie ermöglichen es, die Logik eines Algorithmus visuell oder textuell darzustellen, bevor oder während der eigentlichen Implementierung in einer Programmiersprache.

## Grundlagen

**Kontrollstrukturen in der Programmierung:**

Kontrollstrukturen bestimmen, in welcher Reihenfolge die Anweisungen eines Programms ausgeführt werden. Die wichtigsten Kontrollstrukturen sind:

- **Sequenz:** Anweisungen werden nacheinander ausgeführt.
- **Selektion (Auswahl):** Die Ausführung bestimmter Anweisungen hängt von einer Bedingung ab (z.B. `if-else`, `switch-case`).
- **Iteration (Wiederholung/Schleife):** Ein Block von Anweisungen wird wiederholt ausgeführt, solange eine bestimmte Bedingung erfüllt ist (z.B. `for`, `while`, `do-while`).

**Didaktische Hilfsmittel zur Abbildung von Kontrollstrukturen:**

**1. Aktivitätsdiagramm (Activity Diagram):**

- **Beschreibung:** Ein grafisches Flussdiagramm, das den Ablauf von Aktivitäten in einem Prozess oder Algorithmus darstellt. Es ist Teil der Unified Modeling Language (UML).
- **Abbildung von Kontrollstrukturen:**
    - **Sequenz:** Wird durch eine Abfolge von Aktivitäten dargestellt, die durch Pfeile verbunden sind.
    - **Selektion:** Wird durch Entscheidungsknoten (Raute) dargestellt, von denen ausgehend bedingte Pfade zu verschiedenen Aktivitäten führen.
    - **Iteration:** Kann durch Schleifenkonstrukte mit Entscheidungsknoten dargestellt werden, die zurück zu einer vorherigen Aktivität führen, solange eine Bedingung erfüllt ist.
- **Didaktischer Nutzen:** Visuelle Darstellung erleichtert das Verständnis des Ablaufs, fördert das logische Denken und hilft bei der Strukturierung komplexer Algorithmen. Es ist besonders nützlich für Anfänger und zur Kommunikation des Ablaufs innerhalb eines Teams.

**2. Pseudocode:**

- **Beschreibung:** Eine informelle, textbasierte Beschreibung eines Algorithmus oder einer Programmablaufstruktur. Er ähnelt einer Programmiersprache, ist aber nicht an die Syntax einer bestimmten Sprache gebunden.
- **Abbildung von Kontrollstrukturen:**
    - **Sequenz:** Anweisungen werden untereinander geschrieben.
    - **Selektion:** Wird typischerweise mit Schlüsselwörtern wie `WENN (Bedingung) DANN ... SONST ... ENDE WENN` dargestellt.
    - **Iteration:** Wird mit Schleifenkonstrukten wie `FÜR (Variable von Wert bis Wert) ... ENDE FÜR` oder `SOLANGE (Bedingung) ... ENDE SOLANGE` dargestellt.
- **Didaktischer Nutzen:** Fördert das algorithmische Denken ohne die Ablenkung durch die Syntax einer konkreten Programmiersprache. Es dient als Brücke zwischen der Idee eines Algorithmus und seiner Implementierung und erleichtert die schrittweise Entwicklung und Verfeinerung von Programmlogik.

> **Hinweis:** Sowohl Aktivitätsdiagramme als auch Pseudocode sind wertvolle Werkzeuge, um die Logik von Algorithmen und Programmen klar und verständlich darzustellen, was das Lernen und die Entwicklungsprozesse erheblich unterstützt.

## Beispiel oder Anwendungsfall

Betrachten wir einen einfachen Algorithmus, der überprüft, ob eine Zahl positiv, negativ oder null ist:

**Aktivitätsdiagramm (vereinfacht):**

```mermaid
graph TD
    A[Start] --> B{Zahl > 0?};
    B -- Ja --> C[Ausgabe: "Positiv"];
    B -- Nein --> D{Zahl < 0?};
    D -- Ja --> E[Ausgabe: "Negativ"];
    D -- Nein --> F[Ausgabe: "Null"];
    C --> G[Ende];
    E --> G;
    F --> G;
```

(Hinweis: Dies ist eine textuelle Darstellung eines Aktivitätsdiagramms im Markdown-Format mit Mermaid-Syntax. In einer tatsächlichen Lernumgebung würde dies als visuelles Diagramm dargestellt.)

**Pseudocode:**

```
BEGINN
  EINGABE Zahl
  WENN Zahl > 0 DANN
    AUSGABE "Positiv"
  SONST WENN Zahl < 0 DANN
    AUSGABE "Negativ"
  SONST
    AUSGABE "Null"
  ENDE WENN
END
```

Beide Darstellungen machen die Kontrollstruktur der Selektion (die `WENN`-Bedingungen) deutlich und helfen Lernenden, den logischen Ablauf des Algorithmus zu verstehen.

## Weiterführende Links & Quellen

  - [Wikipedia: Aktivitätsdiagramm](https://de.wikipedia.org/wiki/Aktivit%C3%A4tsdiagramm)
  - [Wikipedia: Pseudocode](https://de.wikipedia.org/wiki/Pseudocode)
  - [Lucidchart: Aktivitätsdiagramm](https://www.lucidchart.com/pages/de/uml-aktivitatsdiagramme)
  - [Was ist Pseudocode?](https://www.computerweekly.com/de/tipp/Was-ist-Pseudocode-und-wie-arbeitet-man-damit)

-----

> **Fehler gefunden?:** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.

```
