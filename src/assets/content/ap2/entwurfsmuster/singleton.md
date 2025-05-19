# Konzipieren und Umsetzen von kundenspezifischen Softwareanwendungen: Architektur- und Design-Pattern anwenden können - Singleton

## Einführung

Das Singleton Pattern ist ein Entwurfsmuster (Creational Pattern), das sicherstellt, dass eine Klasse nur eine einzige Instanz besitzt und einen globalen Zugriffspunkt auf diese Instanz bereitstellt. Es wird verwendet, wenn genau eine Instanz einer Klasse das Verhalten eines Systems koordinieren soll. Dies ist in verschiedenen Szenarien nützlich, z.B. für die Verwaltung von Konfigurationen, Datenbankverbindungen, Loggern oder globalen Caches.

## Struktur und Komponenten des Singleton Patterns

Das Singleton Pattern beinhaltet typischerweise die folgenden Komponenten:

-   **Die Singleton-Klasse:** Die Klasse selbst, die sicherstellt, dass nur eine Instanz von ihr erstellt werden kann. Sie enthält:
    -   Eine private statische Variable, um die einzige Instanz der Klasse zu halten.
    -   Einen privaten Konstruktor, um die Instanziierung der Klasse von außerhalb zu verhindern.
    -   Eine öffentliche statische Methode, die den Zugriff auf die einzige Instanz der Klasse ermöglicht. Diese Methode erstellt die Instanz, falls sie noch nicht existiert, und gibt sie zurück.

## Funktionsweise des Singleton Patterns

1.  Der Client greift über die öffentliche statische Methode auf die Singleton-Instanz zu.

2.  Beim ersten Aufruf dieser Methode wird die Singleton-Instanz intern erstellt (falls sie noch nicht existiert).

3.  Bei allen nachfolgenden Aufrufen gibt die Methode die bereits existierende Instanz zurück.

4.  Da der Konstruktor der Singleton-Klasse privat ist, kann keine neue Instanz der Klasse von außerhalb erstellt werden.

## Implementierung des Singleton Patterns (Beispiele in Pseudocode)

Es gibt verschiedene Möglichkeiten, das Singleton Pattern zu implementieren. Hier sind einige gängige Ansätze:

### 1. Eager Initialization (Frühe Initialisierung)

Die Singleton-Instanz wird bereits beim Laden der Klasse erstellt.

```pseudocode
Class Singleton {
    private static instance = new Singleton(); // Statische Instanz wird sofort erstellt
    private Singleton() {
        // Privater Konstruktor
    }
    public static getInstance() {
        return instance;
    }
    // ... andere Methoden und Attribute ...
}

// Client-Code
singleton1 = Singleton.getInstance();
singleton2 = Singleton.getInstance();
// singleton1 und singleton2 verweisen auf dieselbe Instanz
```

**Vorteil:** Einfach zu implementieren und threadsicher, da die Instanz nur einmal beim Laden der Klasse erstellt wird.
**Nachteil:** Die Instanz wird auch dann erstellt, wenn sie möglicherweise nie benötigt wird.

### 2. Lazy Initialization (Späte Initialisierung)

Die Singleton-Instanz wird erst erstellt, wenn die `getInstance()`-Methode zum ersten Mal aufgerufen wird.

```pseudocode
Class Singleton {
    private static instance = null;
    private Singleton() {
        // Privater Konstruktor
    }
    public static getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
    // ... andere Methoden und Attribute ...
}

// Client-Code
singleton1 = Singleton.getInstance();
singleton2 = Singleton.getInstance();
// singleton1 und singleton2 verweisen auf dieselbe Instanz
```

**Vorteil:** Die Instanz wird nur erstellt, wenn sie tatsächlich benötigt wird (Lazy Loading).
**Nachteil:** Nicht threadsicher in einer Multithread-Umgebung. Mehrere Threads könnten gleichzeitig `instance == null` überprüfen und mehrere Instanzen erstellen.

### 3. Thread-Safe Lazy Initialization (Synchronized)

Um die Lazy Initialization threadsicher zu machen, kann die `getInstance()`-Methode synchronisiert werden.

```pseudocode
Class Singleton {
    private static instance = null;
    private Singleton() {
        // Privater Konstruktor
    }
    public static synchronized getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
    // ... andere Methoden und Attribute ...
}
```

**Vorteil:** Threadsicher und Lazy Loading.
**Nachteil:** Die Synchronisation der gesamten Methode kann die Performance beeinträchtigen, da jeder Aufruf der `getInstance()`-Methode synchronisiert wird, auch wenn die Instanz bereits erstellt wurde.

### 4. Double-Checked Locking

Eine optimierte threadsichere Lazy Initialization-Technik, die die Synchronisation nur im kritischen Abschnitt verwendet.

```pseudocode
Class Singleton {
    private static volatile instance = null; // volatile wichtig für Thread-Sicherheit
    private Singleton() {
        // Privater Konstruktor
    }
    public static getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
    // ... andere Methoden und Attribute ...
}
```

**Vorteil:** Threadsicher und Lazy Loading mit verbesserter Performance im Vergleich zur Synchronisation der gesamten Methode.
**Nachteil:** Kann in einigen älteren JVM-Versionen aufgrund von Problemen mit der Speicherordnung von `volatile` fehlerhaft sein (in modernen JVMs in der Regel sicher).

### 5. Initialization-on-Demand Holder Idiom

Eine elegante und threadsichere Lazy Initialization-Technik, die die Vorteile der Klasseninitialisierung nutzt.

```pseudocode
Class Singleton {
    private Singleton() {
        // Privater Konstruktor
    }
    private static class SingletonHolder {
        private static final Singleton INSTANCE = new Singleton();
    }
    public static getInstance() {
        return SingletonHolder.INSTANCE;
    }
    // ... andere Methoden und Attribute ...
}
```

**Vorteil:** Threadsicher, Lazy Loading und einfach zu implementieren. Die Instanz wird erst erstellt, wenn die `getInstance()`-Methode zum ersten Mal aufgerufen wird, und die Initialisierung der statischen inneren Klasse ist threadsicher.
**Nachteil:** Etwas weniger intuitiv für manche Entwickler.

## Anwendungsbeispiele des Singleton Patterns

-   **Logger:** Eine einzige Instanz eines Loggers, die in der gesamten Anwendung verwendet wird, um Protokollmeldungen zu schreiben.
-   **Konfigurationsmanager:** Eine zentrale Instanz, die die Konfigurationseinstellungen der Anwendung verwaltet.
-   **Datenbankverbindungspool:** Eine einzige Instanz, die einen Pool von Datenbankverbindungen verwaltet, um Ressourcen effizient zu nutzen.
-   **Cache-Manager:** Eine globale Cache-Instanz, die häufig verwendete Daten im Speicher hält.
-   **Druckspooler:** Ein einzelner Spooler, der die Druckaufträge verwaltet.

## Nachteile des Singleton Patterns

-   **Verletzung des Single Responsibility Principle:** Das Singleton ist für seine eigene Instanziierung und für die Geschäftslogik verantwortlich.
-   **Globale Zustände:** Singletons führen globalen Zustand ein, was die Testbarkeit erschweren und zu unerwarteten Abhängigkeiten zwischen verschiedenen Teilen der Anwendung führen kann.
-   **Kann die Objektorientierung reduzieren:** Übermäßiger Gebrauch von Singletons kann die Flexibilität und die Möglichkeiten zur Wiederverwendung von Code einschränken.
-   **Schwer zu mocken:** In Unit-Tests kann es schwierig sein, Singleton-Abhängigkeiten zu mocken oder zu ersetzen.

Aufgrund dieser Nachteile sollte die Verwendung des Singleton Patterns wohlüberlegt sein. In modernen Architekturen werden oft Dependency Injection Frameworks bevorzugt, um die Erzeugung und Verwaltung von Instanzen zu steuern.

## Beziehungen zu anderen Design-Patterns

-   **Factory Pattern:** Singletons können von Factories verwendet werden, um sicherzustellen, dass eine bestimmte Art von Objekt nur einmal erstellt wird.
-   **Abstract Factory Pattern:** Ähnlich wie beim Factory Pattern können Abstract Factories Singletons für bestimmte Produktfamilien verwenden.

## Werkzeuge und Ressourcen zum Singleton Pattern

-   **GoF Design Patterns Buch:** Das klassische Buch "Design Patterns: Elements of Reusable Object-Oriented Software" (Gang of Four) beschreibt das Singleton Pattern detailliert.
    -   **Link (Amazon):** [https://www.amazon.de/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612](https://www.amazon.de/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612) (Deutschsprachige Ausgabe)

-   **Online-Ressourcen und Tutorials:** Viele Websites und Tutorials erklären das Singleton Pattern mit Beispielen in verschiedenen Programmiersprachen.
    -   **Link (Refactoring Guru - Singleton):** [https://refactoring.guru/de/design-patterns/singleton](https://refactoring.guru/de/design-patterns/singleton) (Deutschsprachig)
    -   **Link (TutorialsPoint - Singleton Pattern):** [https://www.tutorialspoint.com/design\_pattern/singleton\_pattern.htm](https://www.tutorialspoint.com/design_pattern/singleton\_pattern.htm) (Englischsprachig)
    -   **Link (Wikipedia - Singleton Pattern):** [https://de.wikipedia.org/wiki/Singleton_(Entwurfsmuster)](https://de.wikipedia.org/wiki/Singleton_(Entwurfsmuster)) (Deutschsprachig)
    -   **Link (Wikipedia - Singleton Pattern):** [https://en.wikipedia.org/wiki/Singleton\_pattern](https://en.wikipedia.org/wiki/Singleton_pattern) (Englischsprachig)

## Fazit

Das Singleton Pattern ist ein einfaches, aber manchmal umstrittenes Entwurfsmuster, das sicherstellt, dass von einer Klasse nur eine einzige Instanz existiert. Obwohl es in bestimmten Szenarien nützlich sein kann, sollten die potenziellen Nachteile hinsichtlich Testbarkeit und Flexibilität sorgfältig abgewogen werden. In modernen Softwarearchitekturen gibt es oft alternative Ansätze zur Verwaltung von Instanzen. Das Verständnis des Singleton Patterns ist jedoch wichtig, da es in vielen bestehenden Codebasen und Frameworks verwendet wird.

-----

> **Fehler gefunden?** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
