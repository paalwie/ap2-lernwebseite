# Konzipieren und Umsetzen von kundenspezifischen Softwareanwendungen: Architektur- und Design-Pattern anwenden können - Observer

## Einführung

Das Observer Pattern ist ein bekanntes Verhaltensmuster (Behavioral Pattern) aus dem Bereich der Softwareentwicklung. Es definiert eine Eins-zu-Viele-Abhängigkeit zwischen Objekten, sodass, wenn sich der Zustand eines Objekts (dem Subject) ändert, alle davon abhängigen Objekte (die Observers) automatisch benachrichtigt und aktualisiert werden. Dieses Muster wird verwendet, um eine lose Kopplung zwischen Objekten zu erreichen, was die Flexibilität und Wartbarkeit des Systems erhöht.

## Struktur und Komponenten des Observer Patterns

Das Observer Pattern besteht aus folgenden Hauptkomponenten:

-   **Subject (auch bekannt als Observable):** Das Objekt, dessen Zustand sich ändern kann und das die Observer über diese Änderungen benachrichtigt. Das Subject verwaltet eine Liste seiner abhängigen Observer und bietet Methoden zum Hinzufügen und Entfernen von Observers.

-   **Observer:** Eine Schnittstelle oder eine abstrakte Klasse, die von den abhängigen Objekten implementiert wird. Sie definiert eine Update-Methode, die aufgerufen wird, wenn sich der Zustand des Subjects ändert.

-   **Concrete Subject (Konkretes Subject):** Eine konkrete Implementierung des Subject. Es speichert den Zustand, der für die Observer relevant ist, und benachrichtigt die Observer, wenn sich dieser Zustand ändert.

-   **Concrete Observer (Konkreter Observer):** Eine konkrete Implementierung der Observer-Schnittstelle. Jeder Concrete Observer registriert sich beim Concrete Subject und implementiert die Update-Methode, um auf die Benachrichtigungen des Subjects zu reagieren und seinen eigenen Zustand entsprechend zu aktualisieren.

## Funktionsweise des Observer Patterns

1.  Ein oder mehrere Concrete Observer-Objekte registrieren sich beim Concrete Subject, um über Zustandsänderungen informiert zu werden.

2.  Wenn sich der Zustand des Concrete Subject ändert, ruft es seine Liste der registrierten Observer ab und benachrichtigt jeden Observer durch Aufruf seiner Update-Methode.

3.  Die Update-Methode in jedem Concrete Observer enthält die Logik, um auf die Zustandsänderung des Subjects zu reagieren. Dies kann das Abrufen des neuen Zustands vom Subject und die Aktualisierung des eigenen Zustands oder der eigenen Anzeige umfassen.

4.  Das Subject kennt die Concrete Observer nicht im Detail, sondern interagiert nur über die Observer-Schnittstelle. Dadurch wird eine lose Kopplung erreicht.

## Vorteile des Observer Patterns

-   **Lose Kopplung:** Das Subject und die Observer sind nicht eng miteinander verbunden. Das Subject weiß nichts über die konkreten Klassen der Observer, sondern nur, dass sie die Observer-Schnittstelle implementieren. Dies reduziert die Abhängigkeiten und erhöht die Flexibilität.

-   **Abstraktion:** Das Subject kann Observer benachrichtigen, ohne deren genauen Typ oder Implementierung zu kennen.

-   **Erweiterbarkeit:** Neue Observer können einfach hinzugefügt werden, ohne dass das Subject oder andere Observer geändert werden müssen.

-   **Wiederverwendbarkeit:** Das Subject und die Observer können in verschiedenen Kontexten wiederverwendet werden.

## Anwendungsbeispiele des Observer Patterns

Das Observer Pattern findet in vielen Bereichen der Softwareentwicklung Anwendung, darunter:

-   **GUI-Entwicklung (Graphical User Interface):** Wenn sich Daten in einem Modell ändern, müssen verschiedene Ansichten (Diagramme, Tabellen, Textfelder) aktualisiert werden. Das Modell ist das Subject, und die verschiedenen Ansichten sind die Observer.

-   **Event-Handling:** In ereignisgesteuerten Systemen können sich verschiedene Komponenten für bestimmte Ereignisse registrieren und benachrichtigt werden, wenn diese Ereignisse eintreten.

-   **Publish/Subscribe-Systeme:** Ein Publisher (Subject) sendet Nachrichten (Zustandsänderungen) an Abonnenten (Observers), die sich für bestimmte Arten von Nachrichten interessieren.

-   **Model-View-Controller (MVC) und ähnliche Architekturen:** Das View (Observer) beobachtet das Model (Subject) und aktualisiert sich, wenn sich das Model ändert.

-   **Benachrichtigungssysteme:** Ein Dienst (Subject) benachrichtigt verschiedene Abonnenten (Observers) über wichtige Ereignisse (z.B. E-Mail-Benachrichtigungen, SMS-Benachrichtigungen).

## Implementierung des Observer Patterns (Beispiel in Pseudocode)

```pseudocode
// Observer Interface
Interface Observer {
    update(subject);
}

// Concrete Observer 1
Class ConcreteObserverA implements Observer {
    state;
    update(subject) {
        state = subject.getState();
        // ... Logik zur Reaktion auf die Zustandsänderung ...
    }
}

// Concrete Observer 2
Class ConcreteObserverB implements Observer {
    // ... ähnliche Implementierung ...
}

// Subject Interface
Interface Subject {
    attach(observer);
    detach(observer);
    notify();
}

// Concrete Subject
Class ConcreteSubject implements Subject {
    state;
    observers = new List();

    getState() {
        return state;
    }

    setState(newState) {
        state = newState;
        notify();
    }

    attach(observer) {
        observers.add(observer);
    }

    detach(observer) {
        observers.remove(observer);
    }

    notify() {
        for each observer in observers {
            observer.update(this);
        }
    }
}

// Client-Code
subject = new ConcreteSubject();
observerA = new ConcreteObserverA();
observerB = new ConcreteObserverB();

subject.attach(observerA);
subject.attach(observerB);

subject.setState("Neuer Zustand"); // Observer A und B werden benachrichtigt
subject.detach(observerA);
subject.setState("Noch ein Zustand"); // Nur Observer B wird benachrichtigt
```

## Beziehungen zu anderen Design-Patterns

-   **Mediator Pattern:** Während das Observer Pattern die Kommunikation zwischen Objekten durch lose Kopplung ermöglicht, zentralisiert das Mediator Pattern die Kommunikation in einem Mediator-Objekt.

-   **Strategy Pattern:** Das Observer Pattern konzentriert sich auf die Benachrichtigung von abhängigen Objekten, während das Strategy Pattern es ermöglicht, aus einer Familie von Algorithmen auszuwählen und das Verhalten eines Objekts zur Laufzeit zu ändern.

## Werkzeuge und Ressourcen zum Observer Pattern

-   **GoF Design Patterns Buch:** Das klassische Buch "Design Patterns: Elements of Reusable Object-Oriented Software" (Gang of Four) beschreibt das Observer Pattern detailliert.
    -   **Link (Amazon):** [https://www.amazon.de/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612](https://www.amazon.de/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612) (Deutschsprachige Ausgabe)

-   **Online-Ressourcen und Tutorials:** Viele Websites und Tutorials erklären das Observer Pattern mit Beispielen in verschiedenen Programmiersprachen.
    -   **Link (Refactoring Guru - Observer):** [https://refactoring.guru/de/design-patterns/observer](https://refactoring.guru/de/design-patterns/observer) (Deutschsprachig)
    -   **Link (TutorialsPoint - Observer Pattern):** [https://www.tutorialspoint.com/design\_pattern/observer\_pattern.htm](https://www.tutorialspoint.com/design_pattern/observer_pattern.htm) (Englischsprachig)
    -   **Link (Wikipedia - Observer Pattern):** [https://de.wikipedia.org/wiki/Beobachter_(Entwurfsmuster)](https://de.wikipedia.org/wiki/Beobachter_(Entwurfsmuster)) (Deutschsprachig)
    -   **Link (Wikipedia - Observer Pattern):** [https://en.wikipedia.org/wiki/Observer\_pattern](https://en.wikipedia.org/wiki/Observer_pattern) (Englischsprachig)

## Fazit

Das Observer Pattern ist ein mächtiges Werkzeug, um eine lose Kopplung zwischen Objekten zu erreichen und die Kommunikation bei Zustandsänderungen effizient zu gestalten. Es fördert die Flexibilität, Erweiterbarkeit und Wiederverwendbarkeit von Softwarekomponenten und ist in vielen modernen Softwarearchitekturen und Frameworks ein wichtiges Designprinzip. Das Verständnis und die Anwendung des Observer Patterns ist eine wertvolle Fähigkeit für jeden Softwareentwickler.

-----

> **Fehler gefunden?** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
