# Konzipieren und Umsetzen von kundenspezifischen Softwareanwendungen: Objektorientierte Programmiermethodenkonzepte anwenden können - Vererbung

## Einführung

Vererbung ist ein Mechanismus in der objektorientierten Programmierung (OOP), der es einer Klasse (der abgeleiteten Klasse oder Subklasse) ermöglicht, Eigenschaften (Attribute) und Verhaltensweisen (Methoden) von einer anderen Klasse (der Basisklasse oder Superklasse) zu erben. Die abgeleitete Klasse kann die geerbten Eigenschaften und Verhaltensweisen nutzen, erweitern oder spezifisch anpassen. Vererbung fördert die Wiederverwendbarkeit von Code, die Schaffung von Hierarchien von Klassen und die Implementierung von "ist-ein"-Beziehungen zwischen Objekten.

## Kernaspekte der Vererbung

1.  **Basisklasse (Superklasse oder Elternklasse):** Die Klasse, deren Eigenschaften und Verhaltensweisen vererbt werden. Sie repräsentiert eine allgemeinere Kategorie oder ein allgemeineres Konzept.

2.  **Abgeleitete Klasse (Subklasse oder Kindklasse):** Die Klasse, die von der Basisklasse erbt. Sie erbt die nicht-privaten Eigenschaften und Verhaltensweisen der Basisklasse und kann eigene zusätzliche Eigenschaften und Verhaltensweisen definieren oder die geerbten überschreiben (override). Die abgeleitete Klasse repräsentiert eine spezifischere Variante der Basisklasse.

3.  **"Ist-ein"-Beziehung (Is-a Relationship):** Vererbung wird oft verwendet, um eine "ist-ein"-Beziehung zwischen Klassen auszudrücken. Zum Beispiel ist ein "Hund" ein "Säugetier", daher könnte die Klasse `Hund` von der Klasse `Säugetier` erben.

4.  **Code-Wiederverwendung:** Durch die Vererbung können gemeinsame Eigenschaften und Verhaltensweisen in einer Basisklasse definiert und von mehreren abgeleiteten Klassen wiederverwendet werden, wodurch Codeduplikation vermieden wird.

5.  **Hierarchische Strukturierung:** Vererbung ermöglicht die Organisation von Klassen in hierarchischen Strukturen, die Beziehungen zwischen allgemeineren und spezifischeren Konzepten widerspiegeln.

## Arten der Vererbung

-   **Einfache Vererbung (Single Inheritance):** Eine abgeleitete Klasse erbt nur von einer einzigen Basisklasse. Dies ist in vielen gängigen OOP-Sprachen wie Java und C# der Standard.

-   **Mehrfache Vererbung (Multiple Inheritance):** Eine abgeleitete Klasse kann von mehreren Basisklassen erben. Dies kann zu Komplexitätsproblemen führen (z.B. dem "Diamantproblem", bei dem eine Klasse von zwei Klassen erbt, die wiederum von einer gemeinsamen Oberklasse erben und es zu Mehrdeutigkeiten bei geerbten Eigenschaften kommen kann). Einige Sprachen wie C++ unterstützen mehrfache Vererbung, während andere wie Java und C# sie nur eingeschränkt über Schnittstellen (Interfaces) ermöglichen.

## Beispiel zur Vererbung (Pseudocode-ähnlich)

```pseudocode
KLASSE Lebewesen
    ÖFFENTLICH Name: Text

    FUNKTION atmen()
        AUSGABE Name + " atmet."
    ENDFUNKTION
ENDKLASSE

KLASSE Säugetier ERBT VON Lebewesen
    ÖFFENTLICH AnzahlBeine: Ganzzahl

    FUNKTION säugen()
        AUSGABE Name + " säugt seine Jungen."
    ENDFUNKTION
ENDKLASSE

KLASSE Hund ERBT VON Säugetier
    ÖFFENTLICH Rasse: Text

    FUNKTION bellen()
        AUSGABE Name + " bellt: Wuff! Wuff!"
    ENDFUNKTION

    // Überschreibt die Methode atmen() der Basisklasse
    ÜBERSCHREIBT FUNKTION atmen()
        AUSGABE Name + " atmet als Säugetier."
    ENDFUNKTION
ENDKLASSE

// Verwendung der Klassen
meinHund ← NEUER Hund()
meinHund.Name ← "Bello"
meinHund.AnzahlBeine ← 4
meinHund.Rasse ← "Schäferhund"

meinHund.atmen()   // Ausgabe: Bello atmet als Säugetier. (Überschriebene Methode)
meinHund.säugen()  // Ausgabe: Bello säugt seine Jungen. (Geerbte Methode)
meinHund.bellen()  // Ausgabe: Bello bellt: Wuff! Wuff! (Eigene Methode)

meinSäugetier ← NEUES Säugetier()
meinSäugetier.Name ← "Kuh"
meinSäugetier.AnzahlBeine ← 4
meinSäugetier.säugen() // Ausgabe: Kuh säugt seine Jungen.
meinSäugetier.atmen()  // Ausgabe: Kuh atmet. (Geerbte Methode der Basisklasse Lebewesen)
```

In diesem Beispiel erbt die Klasse `Säugetier` von `Lebewesen` und die Klasse `Hund` erbt von `Säugetier`. `Hund` erbt somit die Eigenschaften `Name` und die Methode `atmen()` (die überschrieben wird) von `Lebewesen` sowie die Eigenschaft `AnzahlBeine` und die Methode `säugen()` von `Säugetier`. `Hund` fügt außerdem seine eigene Eigenschaft `Rasse` und die Methode `bellen()` hinzu.

## Vorteile der Vererbung

-   **Code-Wiederverwendung:** Gemeinsamer Code in der Basisklasse muss nicht in abgeleiteten Klassen erneut implementiert werden.
-   **Erweiterbarkeit:** Neue Funktionalitäten können durch die Erstellung neuer abgeleiteter Klassen hinzugefügt werden, ohne bestehenden Code zu modifizieren (Open/Closed Principle).
-   **Polymorphie:** Objekte abgeleiteter Klassen können oft wie Objekte ihrer Basisklasse behandelt werden (Polymorphie), was zu flexiblerem und allgemeinerem Code führt.
-   **Hierarchische Organisation:** Vererbung ermöglicht die Strukturierung von Klassen in logischen Hierarchien, die die Beziehungen zwischen Objekten im System widerspiegeln.
-   **Wartbarkeit:** Änderungen an gemeinsamem Code in der Basisklasse werden automatisch in allen abgeleiteten Klassen wirksam (sofern nicht überschrieben), was die Wartung vereinfachen kann.

## Nachteile der Vererbung

-   **Enge Kopplung:** Abgeleitete Klassen sind eng an ihre Basisklasse gekoppelt. Änderungen in der Basisklasse können unerwartete Auswirkungen auf abgeleitete Klassen haben.
-   **Vererbungshierarchien können komplex werden:** In tiefen und breiten Vererbungshierarchien kann es schwierig werden, den Überblick über die geerbten Eigenschaften und Verhaltensweisen zu behalten.
-   **"Fragile Base Class" Problem:** Änderungen an der Implementierung einer Basisklasse können zu Fehlern in abgeleiteten Klassen führen, auch wenn die Schnittstelle der Basisklasse unverändert bleibt.
-   **Nicht immer die beste Wahl für Wiederverwendung:** In manchen Fällen ist Komposition (das Enthalten von Objekten anderer Klassen als Attribute) eine flexiblere und weniger riskante Methode zur Code-Wiederverwendung.

## Vererbung vs. Komposition

-   **Vererbung ("ist-ein"):** Drückt eine spezialisierte Form einer allgemeineren Entität aus (z.B. ein `Hund` *ist ein* `Säugetier`).
-   **Komposition ("hat-ein"):** Drückt eine Beziehung aus, bei der ein Objekt andere Objekte enthält oder verwendet (z.B. ein `Auto` *hat einen* `Motor`).

In vielen Fällen ist Komposition der Vererbung vorzuziehen, da sie zu einer lockereren Kopplung zwischen Objekten führt und die Flexibilität und Wiederverwendbarkeit erhöhen kann.

## Vererbung in verschiedenen Programmiersprachen

-   **Java:** Verwendet das Schlüsselwort `extends` für die einfache Vererbung. Mehrfache Vererbung von Klassen ist nicht erlaubt, aber eine Klasse kann mehrere Schnittstellen (`implements`) implementieren.

-   **C++:** Unterstützt sowohl einfache als auch mehrfache Vererbung mit dem `:`-Syntax bei der Klassendeklaration.

-   **Python:** Unterstützt einfache und mehrfache Vererbung. Die Vererbungsliste wird in Klammern nach dem Klassennamen angegeben.

-   **C#:** Verwendet das Schlüsselwort `:` für die einfache Vererbung. Mehrfache Vererbung von Klassen ist nicht erlaubt, aber eine Klasse kann mehrere Schnittstellen (`implements`) implementieren.

## Werkzeuge und Ressourcen zum Thema Vererbung und OOP

-   **Online-Tutorials und Kurse zu Objektorientierter Programmierung:** (Siehe Ressourcen unter "Kapselung")

-   **Bücher über Objektorientierte Programmierung:** (Siehe Ressourcen unter "Kapselung")

-   **Dokumentationen der jeweiligen Programmiersprachen:** (Siehe Ressourcen unter "Kapselung")

-   **Artikel und Blogbeiträge zum Thema "Vererbung vs. Komposition".**
    -   **Link (Composition vs Inheritance - Stack Overflow):** Suche auf Stack Overflow nach Diskussionen über "composition vs inheritance".
    -   **Link (Favor Object Composition Over Class Inheritance - GoF Design Patterns):** Das "Design Patterns"-Buch betont die Bevorzugung von Komposition gegenüber Vererbung.

## Fazit

Vererbung ist ein mächtiges Werkzeug in der objektorientierten Programmierung, das die Wiederverwendung von Code und die Schaffung von Klassenhierarchien ermöglicht. Es ist wichtig, die Vor- und Nachteile der Vererbung zu verstehen und sie angemessen einzusetzen, wobei in vielen Fällen die Komposition eine flexiblere Alternative darstellen kann. Das Verständnis der Vererbung und ihrer Anwendung ist eine grundlegende Kompetenz für jeden objektorientierten Programmierer.

## Links und Quellen

-   **Inheritance (object-oriented programming) - Wikipedia (Deutsch):** [https://de.wikipedia.org/wiki/Vererbung_(Objektorientierung)](https://de.wikipedia.org/wiki/Vererbung_(Objektorientierung))
-   **Inheritance (object-oriented programming) - Wikipedia (Englischsprachig):** [https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)](https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming))
-   **Tutorials zu Vererbung in verschiedenen Programmiersprachen (z.B. auf TutorialsPoint, GeeksforGeeks).**
    -   **Link (Inheritance in Java - TutorialsPoint):** [https://www.tutorialspoint.com/java/java_inheritance.htm](https://www.tutorialspoint.com/java/java_inheritance.htm)
    -   **Link (Inheritance in C++ - GeeksforGeeks):** [https://www.geeksforgeeks.org/inheritance-in-c/](https://www.geeksforgeeks.org/inheritance-in-c/)
    -   **Link (Inheritance in Python - GeeksforGeeks):** [https://www.geeksforgeeks.org/inheritance-in-python/](https://www.geeksforgeeks.org/inheritance-in-python/)
    -   **Link (Inheritance in C# - Microsoft Learn):** [https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/object-oriented/inheritance](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/object-oriented/inheritance)
-   **Artikel und Blogbeiträge zum Thema "Vererbung vs. Komposition in OOP".**

-----

> **Fehler gefunden?** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
