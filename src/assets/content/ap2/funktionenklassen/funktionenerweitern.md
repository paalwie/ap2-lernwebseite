# Konzipieren und Umsetzen von kundenspezifischen Softwareanwendungen: Bestehende Funktionen/Klassen erweitern

## Einführung

In der Softwareentwicklung kommt es häufig vor, dass bestehende Funktionen oder Klassen erweitert werden müssen, um neue Anforderungen zu erfüllen oder das Verhalten anzupassen. Anstatt den ursprünglichen Code direkt zu modifizieren (was zu unerwarteten Seiteneffekten führen und die Wartung erschweren kann), ist es oft besser, Erweiterungsmechanismen zu nutzen. Diese ermöglichen es, neue Funktionalitäten hinzuzufügen oder das Verhalten zu ändern, ohne den Kerncode anzutasten.

## 1. Funktionen erweitern

Funktionen können auf verschiedene Weisen erweitert werden, abhängig von der Programmiersprache und dem Design:

### a) Hinzufügen optionaler Parameter

Eine bestehende Funktion kann erweitert werden, indem optionale Parameter mit Standardwerten hinzugefügt werden. Dies ermöglicht es, die Funktion mit den ursprünglichen Parametern wie zuvor aufzurufen, aber auch neue Funktionalitäten über die optionalen Parameter zu nutzen.

```pseudocode
// Ursprüngliche Funktion
FUNKTION grüße(Name)
    AUSGABE "Hallo, " + Name + "!"
END FUNKTION

// Erweiterte Funktion mit optionalem Parameter
FUNKTION grüßeErweitert(Name, Ausrufzeichen optional)
    WENN Ausrufzeichen GLEICH wahr ODER Ausrufzeichen NICHT definiert DANN
        AUSGABE "Hallo, " + Name + "!"
    SONST
        AUSGABE "Hallo, " + Name + "."
    ENDWENN
END FUNKTION

// Aufrufe
grüße("Anna")        // Ausgabe: Hallo, Anna!
grüßeErweitert("Ben")   // Ausgabe: Hallo, Ben! (Ausrufzeichen ist standardmäßig wahr)
grüßeErweitert("Clara", falsch) // Ausgabe: Hallo, Clara.
```

### b) Dekorieren von Funktionen

In einigen Programmiersprachen (z.B. Python) gibt es das Konzept von "Decorators". Ein Decorator ist eine Funktion, die eine andere Funktion als Argument nimmt, sie erweitert oder modifiziert und die modifizierte Funktion zurückgibt.

```pseudocode
// Dekorator-Funktion
FUNKTION protokolliereAufruf(funktion)
    FUNKTION wrapper(Argumente...)
        AUSGABE "Funktion " + Name(funktion) + " wird aufgerufen mit Argumenten: " + Argumente
        ergebnis ← rufe(funktion, Argumente...)
        AUSGABE "Funktion " + Name(funktion) + " beendet. Ergebnis: " + ergebnis
        RÜCKGABE ergebnis
    END FUNKTION
    RÜCKGABE wrapper
END FUNKTION

// Ursprüngliche Funktion
FUNKTION addiere(a, b)
    RÜCKGABE a + b
END FUNKTION

// Erweitern der Funktion mit dem Dekorator
protokollierteAddiere ← protokolliereAufruf(addiere)

// Aufruf der erweiterten Funktion
summe ← protokollierteAddiere(5, 3) // Gibt 8 zurück und gibt Protokollmeldungen aus
```

### c) Erstellen von Wrapper-Funktionen

Eine einfache Möglichkeit, eine Funktion zu erweitern, ist das Erstellen einer neuen "Wrapper"-Funktion, die die ursprüngliche Funktion aufruft und zusätzliche Logik davor oder danach ausführt.

```pseudocode
// Ursprüngliche Funktion
FUNKTION berechnePreis(Grundpreis, MehrwertsteuerSatz)
    RÜCKGABE Grundpreis * (1 + MehrwertsteuerSatz)
END FUNKTION

// Erweiterte Wrapper-Funktion
FUNKTION berechnePreisMitRabatt(Grundpreis, MehrwertsteuerSatz, RabattProzent)
    preisOhneRabatt ← berechnePreis(Grundpreis, MehrwertsteuerSatz)
    rabattBetrag ← preisOhneRabatt * (RabattProzent / 100)
    RÜCKGABE preisOhneRabatt - rabattBetrag
END FUNKTION

// Aufrufe
endgültigerPreis1 ← berechnePreis(100, 0.19) // Ausgabe: 119
endgültigerPreis2 ← berechnePreisMitRabatt(100, 0.19, 10) // Ausgabe: 107.1
```

## 2. Klassen erweitern

Klassen können hauptsächlich durch Vererbung erweitert werden:

### a) Vererbung (Subclassing)

Eine neue Klasse (Subklasse oder abgeleitete Klasse) kann von einer bestehenden Klasse (Superklasse oder Basisklasse) erben. Die Subklasse erbt alle nicht-privaten Attribute und Methoden der Superklasse und kann:

-   Neue Attribute und Methoden hinzufügen.
-   Geerbte Methoden überschreiben (override), um ihr Verhalten zu ändern.
-   Geerbte Methoden erweitern, indem sie die ursprüngliche Methode aufrufen und zusätzliche Logik hinzufügen.

```pseudocode
// Ursprüngliche Klasse
KLASSE Fahrzeug
    EIGENSCHAFT Farbe
    EIGENSCHAFT Geschwindigkeit

    KONSTRUKTOR(farbe)
        Farbe ← farbe
        Geschwindigkeit ← 0
    END KONSTRUKTOR

    FUNKTION beschleunige(wert)
        Geschwindigkeit ← Geschwindigkeit + wert
        AUSGABE "Fahrzeug beschleunigt auf " + Geschwindigkeit
    END FUNKTION
END KLASSE

// Erweiterte Klasse (Subklasse)
KLASSE Auto ERBT VON Fahrzeug
    EIGENSCHAFT AnzahlTüren

    KONSTRUKTOR(farbe, türen)
        RUFE KONSTRUKTOR(Fahrzeug, farbe) // Aufruf des Konstruktors der Superklasse
        AnzahlTüren ← türen
    END KONSTRUKTOR

    // Hinzufügen einer neuen Methode
    FUNKTION hupe()
        AUSGABE "Das Auto hupt: Honk! Honk!"
    END FUNKTION

    // Überschreiben einer geerbten Methode
    ÜBERSCHREIBE FUNKTION beschleunige(wert)
        WENN wert > 0 DANN
            Geschwindigkeit ← Geschwindigkeit + wert * 2 // Autos beschleunigen schneller
            AUSGABE "Auto beschleunigt schnell auf " + Geschwindigkeit
        SONST
            RUFE beschleunige(Fahrzeug, wert) // Aufruf der ursprünglichen Methode
        ENDWENN
    END FUNKTION
END KLASSE

// Verwendung
meinAuto ← NEUES Auto("rot", 4)
AUSGABE meinAuto.Farbe       // Ausgabe: rot
meinAuto.beschleunige(10)  // Ausgabe: Auto beschleunigt schnell auf 20
meinAuto.hupe()         // Ausgabe: Das Auto hupt: Honk! Honk!

meinFahrzeug ← NEUES Fahrzeug("blau")
meinFahrzeug.beschleunige(10) // Ausgabe: Fahrzeug beschleunigt auf 10
// meinFahrzeug.hupe()    // Fehler: Fahrzeug hat keine Methode "hupe"
```

### b) Komposition (statt Vererbung in bestimmten Fällen)

Anstatt zu erben, kann eine Klasse erweitert werden, indem sie Instanzen anderer Klassen als Attribute enthält und deren Funktionalitäten nutzt. Dies wird als Komposition bezeichnet und führt oft zu flexibleren und weniger stark gekoppelten Designs.

```pseudocode
// Klasse für eine Protokollierungsfunktion
KLASSE Logger
    FUNKTION loggeNachricht(nachricht)
        AUSGABE "[LOG] " + aktuelleZeit() + ": " + nachricht
    END FUNKTION
END KLASSE

// Ursprüngliche Klasse (ohne Protokollierungsfunktion)
KLASSE BenutzerVerwaltung
    EIGENSCHAFT Benutzerliste

    FUNKTION fügeBenutzerhinzu(benutzer)
        Füge benutzer zu Benutzerliste hinzu
    END FUNKTION
END KLASSE

// Erweiterte Klasse durch Komposition
KLASSE BenutzerVerwaltungMitProtokollierung
    EIGENSCHAFT verwaltung ← NEUE BenutzerVerwaltung()
    EIGENSCHAFT logger ← NEUER Logger()

    FUNKTION fügeBenutzerhinzuMitProtokollierung(benutzer)
        verwaltung.fügeBenutzerhinzu(benutzer)
        logger.loggeNachricht("Benutzer " + Name(benutzer) + " wurde hinzugefügt.")
    END FUNKTION

    // Kann auch Methoden der inneren Verwaltungs-Instanz weiterleiten
    FUNKTION getAnzahlBenutzer()
        RÜCKGABE Länge(verwaltung.Benutzerliste)
    END FUNKTION
END KLASSE

// Verwendung
verwaltungMitLog ← NEUE BenutzerVerwaltungMitProtokollierung()
benutzer1 ← NEUER Benutzer("Alice")
verwaltungMitLog.fügeBenutzerhinzuMitProtokollierung(benutzer1)
anzahl ← verwaltungMitLog.getAnzahlBenutzer()
AUSGABE "Anzahl Benutzer: " + anzahl
```

## Prinzipien für die Erweiterung

-   **Open/Closed Principle (aus SOLID):** Softwareentitäten (Klassen, Module, Funktionen usw.) sollten offen für Erweiterung, aber geschlossen für Modifikation sein. Das bedeutet, dass man ihr Verhalten erweitern kann, ohne ihren Quellcode zu ändern. Vererbung und Komposition sind Mechanismen, um dieses Prinzip zu erreichen.

-   **Vermeide direkte Modifikation:** Das direkte Ändern von bestehendem, getestetem Code birgt Risiken. Erweiterungen sollten idealerweise durch Hinzufügen von neuem Code erfolgen.

-   **Klare Schnittstellen:** Gut definierte Schnittstellen (z.B. durch Basisklassen oder Interfaces) erleichtern die Erweiterung und stellen sicher, dass neue Erweiterungen die erwarteten Verhaltensweisen implementieren.

## Fazit

Das Erweitern bestehender Funktionen und Klassen ist eine wichtige Fähigkeit in der Softwareentwicklung, um Code wiederzuverwenden, die Wartbarkeit zu verbessern und neue Anforderungen zu erfüllen, ohne die Stabilität des bestehenden Codes zu gefährden. Mechanismen wie optionale Parameter, Decorators, Wrapper-Funktionen, Vererbung und Komposition bieten verschiedene Möglichkeiten, Funktionalitäten zu erweitern und das Verhalten anzupassen. Die Beachtung des Open/Closed Principles ist dabei entscheidend für ein nachhaltiges Softwaredesign.

## Links und Quellen

-   **Open/Closed Principle - Wikipedia (Deutsch):** [https://de.wikipedia.org/wiki/Open/Closed-Prinzip](https://de.wikipedia.org/wiki/Open/Closed-Prinzip)
-   **Open/Closed Principle - Wikipedia (Englischsprachig):** [https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle](https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle)
-   **Artikel und Blogbeiträge zum Thema "Extending Functions and Classes in Software Design".**
    -   Suche im Internet nach Begriffen wie "Function Extension Patterns", "Class Extension Patterns", "Inheritance vs Composition".
-   **Dokumentationen und Tutorials zu Vererbung und anderen Erweiterungsmechanismen in den spezifischen Programmiersprachen, die Sie verwenden.**
    -   Beispiele für Python Decorators: [https://realpython.com/primer-on-python-decorators/](https://realpython.com/primer-on-python-decorators/) (Englischsprachig)
    -   Beispiele für Vererbung in Java: [https://docs.oracle.com/javase/tutorial/java/IandI/subclasses.html](https://docs.oracle.com/javase/tutorial/java/IandI/subclasses.html) (Englischsprachig)
    -   Beispiele für Komposition in OOP: Suche im Internet nach "Composition in Object-Oriented Programming Examples".

-----

> **Fehler gefunden?** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
