# Konzipieren und Umsetzen von kundenspezifischen Softwareanwendungen: Objektorientierte Programmiermethodenkonzepte anwenden können - Interfaces

## Einführung

Ein Interface (Schnittstelle) in der objektorientierten Programmierung (OOP) ist ein Vertrag oder eine Blaupause, die eine Reihe von Methoden signaturen (Name, Parameter, Rückgabetyp) definiert, die eine Klasse implementieren muss. Ein Interface selbst enthält keine Implementierung der Methoden (mit einigen modernen Ausnahmen in bestimmten Sprachen, die Default-Implementierungen erlauben). Interfaces ermöglichen es, ein bestimmtes Verhalten oder eine bestimmte Fähigkeit zu definieren, die von verschiedenen, möglicherweise nicht verwandten Klassen implementiert werden kann. Sie fördern die lose Kopplung, die Abstraktion und die Polymorphie.

## Kernaspekte von Interfaces

1.  **Definition von Methoden-Signaturen:** Ein Interface deklariert eine Liste von Methoden, die von jeder Klasse, die das Interface implementiert, bereitgestellt werden müssen. Es werden nur die Namen, Parameter und Rückgabetypen der Methoden festgelegt, nicht deren konkrete Implementierung.

2.  **Keine Zustandsinformationen (in der Regel):** Interfaces enthalten in der Regel keine Instanzvariablen (Attribute) oder Zustandsinformationen. Ihr Fokus liegt auf dem Verhalten.

3.  **Implementierung durch Klassen:** Eine Klasse "implementiert" (oder "realisiert") ein Interface, indem sie für alle im Interface deklarierten Methoden eine konkrete Implementierung bereitstellt. Eine Klasse kann mehrere Interfaces implementieren.

4.  **"Kann-ein"-Beziehung (Can-do Relationship):** Interfaces werden oft verwendet, um eine "Kann-ein"-Beziehung auszudrücken. Zum Beispiel kann ein Objekt, das das Interface `Iterable` implementiert, iteriert werden.

5.  **Polymorphie durch Interfaces:** Objekte verschiedener Klassen, die dasselbe Interface implementieren, können über eine Variable des Interface-Typs einheitlich behandelt werden. Dies ermöglicht polymorphes Verhalten.

## Beispiel eines Interfaces (Pseudocode-ähnlich)

```pseudocode
INTERFACE Zeichenbar
    METHODE zeichne()
ENDINTERFACE

KLASSE Kreis IMPLEMENTIERT Zeichenbar
    EIGENSCHAFT Radius: Dezimalzahl

    KONSTRUKTOR(r: Dezimalzahl)
        Radius ← r
    ENDKONSTRUKTOR

    METHODE zeichne()
        AUSGABE "Zeichne einen Kreis mit Radius " + Radius
    ENDMETHODE
ENDKLASSE

KLASSE Rechteck IMPLEMENTIERT Zeichenbar
    EIGENSCHAFT Breite: Dezimalzahl
    EIGENSCHAFT Höhe: Dezimalzahl

    KONSTRUKTOR(b: Dezimalzahl, h: Dezimalzahl)
        Breite ← b
        Höhe ← h
    ENDKONSTRUKTOR

    METHODE zeichne()
        AUSGABE "Zeichne ein Rechteck mit Breite " + Breite + " und Höhe " + Höhe
    ENDMETHODE
ENDKLASSE

// Polymorphie über das Interface
meineZeichnungen ← [NEUER Kreis(5), NEUES Rechteck(10, 7)]

FÜR jede Zeichnung in meineZeichnungen WIEDERHOLE
    Zeichnung.zeichne() // Ruft die spezifische Implementierung der zeichne()-Methode auf
ENDWENDE
```

In diesem Beispiel definiert das Interface `Zeichenbar` die Methode `zeichne()`. Die Klassen `Kreis` und `Rechteck` implementieren dieses Interface und stellen ihre eigene spezifische Implementierung der `zeichne()`-Methode bereit. Objekte vom Typ `Kreis` und `Rechteck` können dann über eine Variable des Typs `Zeichenbar` behandelt werden, was polymorphes Verhalten ermöglicht.

## Vorteile der Verwendung von Interfaces

-   **Lose Kopplung:** Klassen, die über Interfaces interagieren, sind weniger voneinander abhängig. Eine Änderung in einer implementierenden Klasse hat weniger Auswirkungen auf andere Klassen, die nur das Interface kennen.

-   **Abstraktion:** Interfaces definieren ein abstraktes Verhalten, ohne die konkrete Implementierung festzulegen. Dies ermöglicht es, sich auf "was" ein Objekt tun kann, anstatt auf "wie" es das tut, zu konzentrieren.

-   **Polymorphie:** Interfaces ermöglichen es, Objekte unterschiedlicher Klassen, die dasselbe Interface implementieren, einheitlich zu behandeln. Dies fördert die Flexibilität und Erweiterbarkeit des Codes.

-   **Verträge und Spezifikationen:** Ein Interface dient als Vertrag, der festlegt, welche Methoden eine Klasse, die das Interface implementiert, bereitstellen muss. Dies erleichtert die Zusammenarbeit in Teams, da die Erwartungen klar definiert sind.

-   **Mehrfachvererbung von Verhalten:** In Sprachen, die keine mehrfache Vererbung von Klassen unterstützen (wie Java und C#), ermöglichen Interfaces es einer Klasse, das Verhalten mehrerer "Typen" zu erben, indem sie mehrere Interfaces implementiert.

-   **Testbarkeit:** Interfaces erleichtern das Erstellen von Mock-Objekten für Unit-Tests, da man ein Mock implementieren kann, das das erwartete Verhalten des Interfaces simuliert.

## Interfaces in verschiedenen Programmiersprachen

-   **Java:** Verwendet das Schlüsselwort `interface` zur Definition von Interfaces und `implements` zum Implementieren von Interfaces durch Klassen. Seit Java 8 können Interfaces auch statische Methoden und Default-Methoden (Methoden mit einer Standardimplementierung) enthalten.

-   **C#:** Verwendet das Schlüsselwort `interface` zur Definition und `:` zum Implementieren. Interfaces können seit C# 8 auch Default-Implementierungen für Methoden enthalten.

-   **Python:** Verwendet keine explizite `interface`-Syntax. Konzeptionell werden Interfaces durch "Duck Typing" und abstrakte Basisklassen (mit dem Modul `abc`) realisiert. Wenn ein Objekt die erwarteten Methoden und Attribute besitzt ("wenn es wie eine Ente quakt..."), wird es wie ein Objekt dieses Typs behandelt. Abstrakte Basisklassen können jedoch erzwingen, dass Subklassen bestimmte Methoden implementieren.

-   **C++:** Interfaces werden in C++ typischerweise durch rein virtuelle abstrakte Basisklassen realisiert. Eine Klasse ist abstrakt, wenn sie mindestens eine rein virtuelle Funktion (`virtual void methode() = 0;`) enthält.

## Beziehungen zu anderen OOP-Konzepten

-   **Abstraktion:** Interfaces sind ein Mittel zur Erreichung von Abstraktion, da sie eine Abstraktion eines Verhaltens definieren, ohne die Details der Implementierung preiszugeben.

-   **Vererbung:** Interfaces können von anderen Interfaces erweitert werden (Interface-Vererbung). Klassen können mehrere Interfaces implementieren, was eine Form der "Mehrfachvererbung von Verhalten" ermöglicht.

-   **Polymorphie:** Interfaces sind eine Grundlage für polymorphes Verhalten, da Objekte verschiedener Klassen, die dasselbe Interface implementieren, über eine Variable des Interface-Typs einheitlich behandelt werden können.

## Werkzeuge und Ressourcen zum Thema Interfaces und OOP

-   **Online-Tutorials und Kurse zu Objektorientierter Programmierung:** (Siehe Ressourcen unter "Kapselung", "Vererbung" und "Polymorphie")

-   **Bücher über Objektorientierte Programmierung:** (Siehe Ressourcen unter "Kapselung", "Vererbung" und "Polymorphie")

-   **Dokumentationen der jeweiligen Programmiersprachen:** (Siehe Ressourcen unter "Kapselung", "Vererbung" und "Polymorphie")

-   **Artikel und Blogbeiträge zum Thema "Interfaces in OOP".**
    -   **Link (Interfaces in Java - Oracle Tutorial):** [https://docs.oracle.com/javase/tutorial/java/IandI/interfaceDefs.html](https://docs.oracle.com/javase/tutorial/java/IandI/interfaceDefs.html) (Englischsprachig)
    -   **Link (Interfaces in C# - Microsoft Learn):** [https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/interfaces](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/interfaces)
    -   **Link (Abstract Base Classes in Python - Real Python):** [https://realpython.com/python-type-checking/#abstract-base-classes](https://realpython.com/python-type-checking/#abstract-base-classes)
    -   **Link (Abstract Classes and Interfaces in C++ - GeeksforGeeks):** [https://www.geeksforgeeks.org/abstract-classes-and-pure-virtual-functions-in-cpp/](https://www.geeksforgeeks.org/abstract-classes-and-pure-virtual-functions-in-cpp/)

## Fazit

Interfaces sind ein mächtiges Werkzeug in der objektorientierten Programmierung, das die Erstellung flexibler, erweiterbarer und lose gekoppelter Softwaresysteme ermöglicht. Sie definieren Verträge für das Verhalten von Objekten und fördern die Abstraktion und Polymorphie. Das Verständnis und die effektive Nutzung von Interfaces sind entscheidend für die Entwicklung gut strukturierter und wartbarer objektorientierter Anwendungen.

## Links und Quellen

-   **Interface (Java) - Wikipedia (Deutsch):** [https://de.wikipedia.org/wiki/Interface_(Java)](https://de.wikipedia.org/wiki/Interface_(Java)) (Das Konzept ist in anderen Sprachen ähnlich)
-   **Interface (computing) - Wikipedia (Englischsprachig):** [https://en.wikipedia.org/wiki/Interface_(computing)](https://en.wikipedia.org/wiki/Interface_(computing)) (Abschnitt zu "Object-oriented programming")
-   **Tutorials zu Interfaces in verschiedenen Programmiersprachen (z.B. auf TutorialsPoint, GeeksforGeeks, Oracle Java Tutorials, Microsoft Learn).**
-   **Artikel und Blogbeiträge zum Thema "Best Practices für die Verwendung von Interfaces in OOP".**

-----

> **Fehler gefunden?** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
