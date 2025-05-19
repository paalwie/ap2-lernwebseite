# Konzipieren und Umsetzen von kundenspezifischen Softwareanwendungen: Architektur- und Design-Pattern anwenden können - Factory

## Einführung

Das Factory Pattern ist ein Entwurfsmuster (Creational Pattern), das eine Schnittstelle (Interface) oder eine abstrakte Klasse definiert, um Objekte zu erstellen, aber die Subklassen entscheiden, welche konkrete Klasse instanziiert werden soll. Es delegiert die Instanziierung von Objekten an Subklassen oder eine separate Factory-Klasse. Dieses Muster fördert die lose Kopplung, indem es die Client-Klassen von den konkreten Klassen der erzeugten Objekte entkoppelt.

Es gibt verschiedene Varianten des Factory Patterns, darunter die Simple Factory, die Factory Method und die Abstract Factory. Wir werden uns hier hauptsächlich auf die Factory Method konzentrieren, da sie die flexibelste und am weitesten verbreitete Form darstellt.

## Struktur und Komponenten des Factory Method Patterns

Das Factory Method Pattern besteht aus folgenden Hauptkomponenten:

-   **Product (Produkt):** Eine Schnittstelle oder eine abstrakte Klasse, die die von der Factory-Methode erzeugten Objekte definiert.

-   **ConcreteProduct (Konkretes Produkt):** Konkrete Implementierungen der Product-Schnittstelle oder -Klasse. Dies sind die Objekte, die tatsächlich erzeugt werden.

-   **Creator (Erzeuger):** Eine abstrakte Klasse oder eine Schnittstelle, die eine Factory-Methode deklariert, welche ein Objekt vom Typ Product zurückgibt. Der Creator kann auch Standardimplementierungen für einige Operationen enthalten, die auf den erzeugten Produkten basieren.

-   **ConcreteCreator (Konkreter Erzeuger):** Konkrete Subklassen des Creator, die die Factory-Methode überschreiben, um eine Instanz einer bestimmten ConcreteProduct-Klasse zurückzugeben.

## Funktionsweise des Factory Method Patterns

1.  Der Client interagiert mit dem Creator über seine abstrakte Schnittstelle.

2.  Der Client ruft eine Factory-Methode im Creator auf, um ein benötigtes Produkt zu erhalten.

3.  Die ConcreteCreator-Subklasse entscheidet, welche ConcreteProduct-Klasse instanziiert und zurückgegeben wird.

4.  Der Creator (und damit der Client) arbeitet mit dem zurückgegebenen Product über dessen abstrakte Schnittstelle, ohne die konkrete Produktklasse zu kennen.

## Implementierung des Factory Method Patterns (Beispiel in Pseudocode)

```pseudocode
// Product Interface
Interface Document {
    open();
    close();
}

// Concrete Products
Class PDFDocument implements Document {
    open() {
        print("PDF Document opened");
    }
    close() {
        print("PDF Document closed");
    }
}

Class WordDocument implements Document {
    open() {
        print("Word Document opened");
    }
    close() {
        print("Word Document closed");
    }
}

// Creator Abstract Class
Abstract Class DocumentCreator {
    abstract createDocument(): Document;

    openDocument() {
        document = createDocument();
        document.open();
    }

    closeDocument() {
        if (document != null) {
            document.close();
        }
    }
}

// Concrete Creators
Class PDFCreator extends DocumentCreator {
    createDocument(): Document {
        return new PDFDocument();
    }
}

Class WordCreator extends DocumentCreator {
    createDocument(): Document {
        return new WordDocument();
    }
}

// Client-Code
pdfCreator = new PDFCreator();
pdfCreator.openDocument(); // Erzeugt und öffnet ein PDFDocument

wordCreator = new WordCreator();
wordCreator.openDocument(); // Erzeugt und öffnet ein WordDocument
```

## Vorteile des Factory Method Patterns

-   **Lose Kopplung:** Der Client-Code ist nur von der abstrakten Product-Schnittstelle und der abstrakten Creator-Klasse abhängig. Er kennt die konkreten Produktklassen nicht.

-   **Erweiterbarkeit:** Neue Produkttypen können einfach hinzugefügt werden, indem neue ConcreteProduct- und ConcreteCreator-Klassen erstellt werden, ohne den bestehenden Client-Code zu ändern.

-   **Flexibilität bei der Produkterzeugung:** Die ConcreteCreator-Klassen können die Logik zur Produkterzeugung kapseln und Entscheidungen darüber treffen, welche konkrete Produktklasse unter bestimmten Umständen instanziiert werden soll.

-   **Einhaltung des Open/Closed Principle:** Das Muster ermöglicht die Erweiterung des Verhaltens (durch Hinzufügen neuer Produkttypen) ohne Modifikation des bestehenden Codes (der Client- und Creator-Klassen).

## Anwendungsbeispiele des Factory Method Patterns

-   **Frameworks und Bibliotheken:** Oft verwenden Frameworks Factory Methods, um es Benutzern zu ermöglichen, die von ihnen erstellten Objekte anzupassen oder zu erweitern (z.B. in GUI-Toolkits zur Erstellung von Buttons, Fenster usw.).

-   **Dokumentenverarbeitung:** Wie im Beispiel gezeigt, kann eine Anwendung verschiedene Arten von Dokumenten (PDF, Word, etc.) verarbeiten, wobei die Factory entscheidet, welche konkrete Dokumentklasse für eine bestimmte Datei geladen werden soll.

-   **Datenbankzugriff:** Eine Factory kann verwendet werden, um die spezifische Datenbankverbindungsklasse basierend auf der Konfiguration auszuwählen (z.B. MySQL, PostgreSQL).

-   **Spieleentwicklung:** Eine Factory kann verwendet werden, um verschiedene Arten von Spielfiguren oder Objekten zu erstellen.

## Varianten des Factory Patterns

-   **Simple Factory:** Keine formale GoF-Definition, aber ein häufig verwendeter Ansatz. Eine einzelne Factory-Klasse enthält eine Methode, die basierend auf bestimmten Parametern verschiedene Produkte erstellt. Dies kann eine erste Stufe der Entkopplung sein, enthält aber oft noch eine gewisse Kopplung an die konkreten Produkte innerhalb der Factory-Klasse.

    ```pseudocode
    Class SimpleLoggerFactory {
        createLogger(type): Logger {
            if (type == "file") {
                return new FileLogger();
            } else if (type == "console") {
                return new ConsoleLogger();
            }
            throw new IllegalArgumentException("Unknown logger type");
        }
    }
    ```

-   **Abstract Factory:** Ein weiteres Creational Pattern, das verwendet wird, um Familien von zusammengehörigen oder abhängigen Objekten zu erstellen, ohne ihre konkreten Klassen anzugeben. Oft arbeiten Abstract Factories mit Factory Methods zusammen.

## Beziehungen zu anderen Design-Patterns

-   **Abstract Factory:** Die Factory Method wird oft innerhalb von Abstract Factories verwendet, um die Produkte der verschiedenen Produktfamilien zu erzeugen.

-   **Template Method:** Eine Creator-Klasse kann die Factory Method in einer Template Method verwenden, um die Schritte eines Algorithmus zu definieren, wobei die Produkterzeugung ein variabler Schritt ist, der von Subklassen implementiert wird.

## Werkzeuge und Ressourcen zum Factory Pattern

-   **GoF Design Patterns Buch:** Das klassische Buch "Design Patterns: Elements of Reusable Object-Oriented Software" (Gang of Four) beschreibt das Factory Method Pattern detailliert.
    -   **Link (Amazon):** [https://www.amazon.de/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612](https://www.amazon.de/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612) (Deutschsprachige Ausgabe)

-   **Online-Ressourcen und Tutorials:** Viele Websites und Tutorials erklären das Factory Pattern und seine Varianten mit Beispielen in verschiedenen Programmiersprachen.
    -   **Link (Refactoring Guru - Factory Method):** [https://refactoring.guru/de/design-patterns/factory-method](https://refactoring.guru/de/design-patterns/factory-method) (Deutschsprachig)
    -   **Link (TutorialsPoint - Factory Pattern):** [https://www.tutorialspoint.com/design\_pattern/factory\_pattern.htm](https://www.tutorialspoint.com/design_pattern/factory_pattern.htm) (Englischsprachig)
    -   **Link (Wikipedia - Factory Method Pattern):** [https://de.wikipedia.org/wiki/Fabrikmethode](https://de.wikipedia.org/wiki/Fabrikmethode) (Deutschsprachig)
    -   **Link (Wikipedia - Factory Method Pattern):** [https://en.wikipedia.org/wiki/Factory\_method\_pattern](https://en.wikipedia.org/wiki/Factory_method_pattern) (Englischsprachig)

## Fazit

Das Factory Pattern ist ein mächtiges Werkzeug, um die Objekterzeugung zu kapseln und die Kopplung zwischen Client-Code und konkreten Klassen zu reduzieren. Insbesondere die Factory Method ermöglicht eine flexible und erweiterbare Erzeugung von Objekten, ohne dass der Client die genauen Typen der erzeugten Objekte kennen muss. Dies fördert die Wartbarkeit, Erweiterbarkeit und Wiederverwendbarkeit von Softwarekomponenten und ist ein wichtiges Designprinzip in vielen objektorientierten Systemen.

-----

> **Fehler gefunden?** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
