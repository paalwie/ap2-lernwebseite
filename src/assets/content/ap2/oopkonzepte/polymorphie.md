# Konzipieren und Umsetzen von kundenspezifischen Softwareanwendungen: Objektorientierte Programmiermethodenkonzepte anwenden können - Polymorphie

## Einführung

Polymorphie (griechisch für "Viele Gestalten" oder "Vielgestaltigkeit") ist ein Konzept in der objektorientierten Programmierung (OOP), das es Objekten verschiedener Klassen ermöglicht, auf eine einheitliche Weise behandelt zu werden, wenn sie eine gemeinsame Basis (z.B. eine gemeinsame Superklasse oder ein gemeinsames Interface) haben. Polymorphie ermöglicht es, dass ein einzelner Methodenname oder ein einzelnes Symbol unterschiedliche Aktionen ausführt, abhängig vom tatsächlichen Typ des Objekts, auf dem die Operation aufgerufen wird. Dies fördert die Flexibilität, Erweiterbarkeit und Wiederverwendbarkeit von Code.

## Kernaspekte der Polymorphie

1.  **Gemeinsame Schnittstelle:** Polymorphie basiert darauf, dass verschiedene Klassen eine gemeinsame Schnittstelle oder eine gemeinsame Basisklasse implementieren oder erweitern. Diese gemeinsame Basis definiert eine Reihe von Methoden oder Eigenschaften, die von den abgeleiteten Klassen implementiert oder überschrieben werden können.

2.  **Methoden-Überschreibung (Overriding):** Eine Subklasse kann eine Methode von ihrer Superklasse erben und diese Methode so überschreiben, dass sie ein spezifischeres Verhalten für die Subklasse implementiert. Wenn eine Methode über eine Variable des Typs der Superklasse aufgerufen wird, aber das tatsächliche Objekt eine Instanz der Subklasse ist, wird die überschriebene Methode der Subklasse ausgeführt. Dies ist ein wichtiger Mechanismus für die Laufzeitpolymorphie.

3.  **Methoden-Überladung (Overloading):** Innerhalb derselben Klasse können mehrere Methoden mit demselben Namen existieren, solange sie sich in ihrer Parameterliste (Anzahl, Typ oder Reihenfolge der Parameter) unterscheiden. Der Compiler (oder Interpreter) wählt basierend auf den beim Aufruf übergebenen Argumenten die passende Methode aus. Dies ist eine Form der Kompilierzeitpolymorphie oder Ad-hoc-Polymorphie.

4.  **Subtyppolymorphie (Subtype Polymorphism):** Eine Variable eines Superklassentyps kann auf ein Objekt einer ihrer Subklassen verweisen. Über diese Variable können Methoden aufgerufen werden, die in der Superklasse definiert sind. Wenn die Subklasse diese Methode überschrieben hat, wird die Implementierung der Subklasse ausgeführt.

## Arten der Polymorphie

-   **Kompilierzeitpolymorphie (Statische Polymorphie oder Ad-hoc-Polymorphie):** Diese Form der Polymorphie wird zur Kompilierzeit entschieden. Methodenüberladung ist ein typisches Beispiel. Der Compiler wählt basierend auf den Typen der Argumente, die beim Methodenaufruf verwendet werden, die richtige Methode aus.

-   **Laufzeitpolymorphie (Dynamische Polymorphie oder Subtyppolymorphie):** Diese Form der Polymorphie wird zur Laufzeit entschieden. Methodenüberschreibung in Verbindung mit der Verwendung von Superklassenreferenzen für Subklassenobjekte ist ein typisches Beispiel. Das tatsächliche Objekt, auf dem eine Methode aufgerufen wird, bestimmt, welche Implementierung ausgeführt wird.

## Beispiel zur Polymorphie (Pseudocode-ähnlich)

```pseudocode
KLASSE Tier
    FUNKTION macheGeraeusch()
        AUSGABE "Ein Tier macht ein Geräusch."
    ENDFUNKTION
ENDKLASSE

KLASSE Hund ERBT VON Tier
    ÜBERSCHREIBT FUNKTION macheGeraeusch()
        AUSGABE "Der Hund bellt: Wuff! Wuff!"
    ENDFUNKTION
ENDKLASSE

KLASSE Katze ERBT VON Tier
    ÜBERSCHREIBT FUNKTION macheGeraeusch()
        AUSGABE "Die Katze miaut: Miau!"
    ENDFUNKTION
ENDKLASSE

// Subtyppolymorphie
meinTier1 ← NEUER Hund()
meinTier2 ← NEUE Katze()

listeDerTiere ← [meinTier1, meinTier2]

FÜR jedes Tier in listeDerTiere WIEDERHOLE
    Tier.macheGeraeusch() // Ruft die spezifische Methode der jeweiligen Subklasse auf
ENDFÜR

// Methodenüberladung (innerhalb einer anderen Klasse)
KLASSE Rechner
    FUNKTION addiere(a: Ganzzahl, b: Ganzzahl): Ganzzahl
        RÜCKGABE a + b
    ENDFUNKTION

    FUNKTION addiere(a: Dezimalzahl, b: Dezimalzahl): Dezimalzahl
        RÜCKGABE a + b
    ENDFUNKTION

    FUNKTION addiere(a: Text, b: Text): Text
        RÜCKGABE a + b // Zeichenkettenverkettung
    ENDFUNKTION
ENDKLASSE

meinRechner ← NEUER Rechner()
ergebnis1 ← meinRechner.addiere(5, 3)       // Ruft die Ganzzahl-Version auf
ergebnis2 ← meinRechner.addiere(2.5, 1.7)   // Ruft die Dezimalzahl-Version auf
ergebnis3 ← meinRechner.addiere("Hallo ", "Welt") // Ruft die Text-Version auf
```

Im ersten Teil des Beispiels demonstriert die Subtyppolymorphie, wie Objekte der Klassen `Hund` und `Katze` (beide Subklassen von `Tier`) über eine Variable des Typs `Tier` behandelt werden können und wie der Aufruf der Methode `macheGeraeusch()` die spezifische Implementierung der jeweiligen Subklasse ausführt.

Im zweiten Teil zeigt die Methodenüberladung innerhalb der Klasse `Rechner`, wie die Methode `addiere()` mit unterschiedlichen Parametertypen aufgerufen werden kann und der Compiler die passende Version basierend auf den Argumenten auswählt.

## Vorteile der Polymorphie

-   **Flexibilität und Erweiterbarkeit:** Neue Subklassen können hinzugefügt werden, ohne den bestehenden Code, der mit der Superklasse arbeitet, ändern zu müssen. Der neue Typ kann nahtlos in die bestehende Struktur integriert werden, solange er die gemeinsame Schnittstelle einhält.

-   **Wiederverwendbarkeit von Code:** Algorithmen, die auf der Superklasse basieren, können mit Objekten aller ihrer Subklassen arbeiten.

-   **Lose Kopplung:** Code, der polymorphe Objekte verwendet, ist weniger abhängig von den spezifischen Implementierungen der einzelnen Klassen. Er interagiert nur über die definierte Schnittstelle der Superklasse.

-   **Abstraktion:** Polymorphie ermöglicht es, sich auf die allgemeine Schnittstelle zu konzentrieren, anstatt auf die spezifischen Details der einzelnen Klassen.

-   **Vereinfachung des Codes:** Polymorphie kann zu eleganterem und prägnanterem Code führen, da ähnliche Operationen auf verschiedenen Objekttypen auf einheitliche Weise aufgerufen werden können.

## Polymorphie in verschiedenen Programmiersprachen

-   **Java:** Unterstützt sowohl Methodenüberladung als auch Methodenüberschreibung. Laufzeitpolymorphie wird durch Vererbung und Interfaces erreicht.

-   **C++:** Unterstützt ebenfalls Methodenüberladung und Methodenüberschreibung (mit dem Schlüsselwort `virtual` für Methoden, die in Subklassen überschrieben werden sollen, um Laufzeitpolymorphie zu ermöglichen).

-   **Python:** Unterstützt Polymorphie dynamisch. Methodenüberladung wird durch flexible Parameterlisten und bedingte Logik innerhalb der Methode erreicht. Methodenüberschreibung erfolgt automatisch, wenn eine Subklasse eine Methode mit demselben Namen wie in der Superklasse definiert.

-   **C#:** Unterstützt Methodenüberladung und Methodenüberschreibung (mit den Schlüsselwörtern `virtual` in der Basisklasse und `override` in der abgeleiteten Klasse für Laufzeitpolymorphie). Interfaces spielen ebenfalls eine wichtige Rolle bei der Polymorphie.

## Beziehungen zu anderen OOP-Konzepten

-   **Vererbung:** Polymorphie baut oft auf Vererbung auf, da die gemeinsame Basis für polymorphes Verhalten typischerweise durch eine Superklasse definiert wird.

-   **Abstraktion:** Polymorphie ermöglicht es, abstrakte Konzepte durch eine gemeinsame Schnittstelle auszudrücken, deren konkrete Implementierung in den Subklassen variiert.

-   **Interfaces:** Interfaces definieren eine Reihe von Methoden, die von verschiedenen Klassen implementiert werden können, wodurch eine weitere Form der Polymorphie ermöglicht wird, auch ohne eine gemeinsame Basisklasse.

## Werkzeuge und Ressourcen zum Thema Polymorphie und OOP

-   **Online-Tutorials und Kurse zu Objektorientierter Programmierung:** (Siehe Ressourcen unter "Kapselung" und "Vererbung")

-   **Bücher über Objektorientierte Programmierung:** (Siehe Ressourcen unter "Kapselung" und "Vererbung")

-   **Dokumentationen der jeweiligen Programmiersprachen:** (Siehe Ressourcen unter "Kapselung" und "Vererbung")

-   **Artikel und Blogbeiträge zum Thema "Polymorphismus in OOP".**
    -   **Link (Polymorphism in Java - GeeksforGeeks):** [https://www.geeksforgeeks.org/polymorphism-in-java/](https://www.geeksforgeeks.org/polymorphism-in-java/)
    -   **Link (Polymorphism in C++ - GeeksforGeeks):** [https://www.geeksforgeeks.org/polymorphism-in-c/](https://www.geeksforgeeks.org/polymorphism-in-c/)
    -   **Link (Polymorphism in Python - Real Python):** [https://realpython.com/python-type-checking/#runtime-vs-static-type-checking](https://realpython.com/python-type-checking/#runtime-vs-static-type-checking) (Abschnitte zur Polymorphie)
    -   **Link (Polymorphism in C# - Microsoft Learn):** [https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/object-oriented/polymorphism](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/object-oriented/polymorphism)

## Fazit

Polymorphie ist ein mächtiges Konzept in der objektorientierten Programmierung, das es ermöglicht, flexiblen, erweiterbaren und wiederverwendbaren Code zu schreiben. Durch die Fähigkeit, Objekte verschiedener Klassen über eine gemeinsame Schnittstelle einheitlich zu behandeln und das Verhalten von Methoden je nach Objekttyp anzupassen, trägt Polymorphie maßgeblich zur Eleganz und Effizienz objektorientierter Designs bei. Das Verständnis und die Anwendung der Polymorphie sind daher unerlässlich für die Entwicklung moderner Softwaresysteme.

## Links und Quellen

-   **Polymorphism (computer science) - Wikipedia (Deutsch):** [https://de.wikipedia.org/wiki/Polymorphismus_(Programmierung)](https://de.wikipedia.org/wiki/Polymorphismus_(Programmierung))
-   **Polymorphism (computer science) - Wikipedia (Englischsprachig):** [https://en.wikipedia.org/wiki/Polymorphism_(computer_science)](https://en.wikipedia.org/wiki/Polymorphism_(computer_science))
-   **Tutorials zu Polymorphie in verschiedenen Programmiersprachen (z.B. auf TutorialsPoint, GeeksforGeeks, Real Python).**
-   **Artikel und Blogbeiträge zum Thema "Anwendung von Polymorphismus in der Softwareentwicklung".**

-----

> **Fehler gefunden?** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
