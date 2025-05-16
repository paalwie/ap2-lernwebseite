# UML (Use Case, Klassendiagramm, Aktivitätsdiagramm)

## Einführung

Die Unified Modeling Language (UML) ist eine standardisierte grafische Modellierungssprache in der Softwareentwicklung. Sie dient dazu, Softwaresysteme zu visualisieren, zu spezifizieren, zu konstruieren und zu dokumentieren. UML bietet verschiedene Diagrammtypen, die unterschiedliche Aspekte eines Systems darstellen. Für das Formulieren von Algorithmen und das Entwickeln von Programmen sind insbesondere das Use-Case-Diagramm, das Klassendiagramm und das Aktivitätsdiagramm von Bedeutung als didaktische und praktische Hilfsmittel.

## Grundlagen

**1. Use-Case-Diagramm (Anwendungsfalldiagramm):**

- **Beschreibung:** Stellt die Interaktionen zwischen Akteuren (Benutzern oder externen Systemen) und dem System aus der Benutzerperspektive dar. Es fokussiert auf das "Was" das System tut, nicht auf das "Wie".
- **Bestandteile:**
    - **Akteure:** Repräsentieren externe Entitäten, die mit dem System interagieren (als Strichmännchen dargestellt).
    - **Use Cases (Anwendungsfälle):** Beschreiben eine Funktionalität oder einen Prozess, den das System für einen Akteur bereitstellt (als Ellipsen dargestellt).
    - **Beziehungen:** Assoziationen (Verbindungen zwischen Akteuren und Use Cases), Inklusion (`<<include>>` für wiederverwendbare Teile), Erweiterung (`<<extend>>` für optionale Teile).
- **Nutzen für Algorithmen und Programme:** Hilft, die Anforderungen an ein System zu erfassen und die notwendigen Funktionalitäten (und somit die zu entwickelnden Algorithmen) zu identifizieren. Es dient als Grundlage für die Definition von Testfällen und die Strukturierung des Programms aus Benutzersicht.

**2. Klassendiagramm (Class Diagram):**

- **Beschreibung:** Stellt die statische Struktur eines Systems dar, indem es die Klassen, ihre Attribute (Daten) und Operationen (Methoden/Funktionen) sowie die Beziehungen zwischen den Klassen (z.B. Assoziation, Aggregation, Komposition, Vererbung) visualisiert.
- **Bestandteile:**
    - **Klassen:** Repräsentieren Baupläne für Objekte (als Rechtecke mit drei Bereichen: Klassenname, Attribute, Operationen).
    - **Attribute:** Beschreiben die Eigenschaften der Objekte einer Klasse (mit Datentyp).
    - **Operationen:** Beschreiben die Funktionalitäten, die Objekte einer Klasse ausführen können (mit Parameter und Rückgabetyp).
    - **Beziehungen:** Verbindungen zwischen Klassen, die deren Interaktionen und Abhängigkeiten aufzeigen.
- **Nutzen für Algorithmen und Programme:** Dient als Blaupause für die objektorientierte Programmierung. Es hilft, die Datenstrukturen und das Verhalten von Objekten zu definieren und die Beziehungen zwischen verschiedenen Programmteilen zu planen. Algorithmen werden oft als Operationen innerhalb von Klassen implementiert.

**3. Aktivitätsdiagramm (Activity Diagram):**

- **Beschreibung:** (Hatten wir bereits, aber zur Vollständigkeit hier nochmals kurz) Stellt den dynamischen Ablauf von Aktivitäten und Entscheidungen in einem Prozess oder Algorithmus dar. Es fokussiert auf das "Wie" ein Prozess abläuft.
- **Bestandteile:**
    - **Aktivitäten:** Auszuführende Schritte (als abgerundete Rechtecke).
    - **Aktionen:** Nicht-unterbrechbare Aktivitäten.
    - **Kontrollflüsse:** Pfeile, die die Reihenfolge der Aktivitäten anzeigen.
    - **Entscheidungsknoten:** Verzweigungen im Ablauf basierend auf Bedingungen (als Rauten).
    - **Verzweigungen und Vereinigungen:** Zur Darstellung paralleler Abläufe.
    - **Start- und Endknoten:** Markieren den Beginn und das Ende des Ablaufs.
- **Nutzen für Algorithmen und Programme:** Hilft, die Logik und den Ablauf eines Algorithmus detailliert zu visualisieren, einschließlich Verzweigungen und Schleifen. Es ist nützlich für die Planung komplexer Algorithmen, die Fehlerfindung und die Dokumentation des Programmablaufs. Es kann auch zur Modellierung von Geschäftsprozessen verwendet werden, die in Software implementiert werden sollen.

> **Hinweis:** UML ist ein mächtiges Werkzeug zur Modellierung von Softwaresystemen. Die hier genannten Diagrammtypen sind besonders relevant für das Verständnis und die Planung von Algorithmen und der Struktur von Programmen.

## Beispiel oder Anwendungsfall

Betrachten wir ein einfaches Szenario eines Online-Shops:

- **Use-Case-Diagramm:** Ein Akteur "Kunde" interagiert mit Use Cases wie "Produkt anzeigen", "In den Warenkorb legen", "Zur Kasse gehen" und "Bestellung aufgeben".
- **Klassendiagramm:** Klassen könnten "Produkt" (mit Attributen wie Name, Preis, ID und Operationen wie `getDetails()`), "Warenkorb" (mit Attributen wie `items` und Operationen wie `addProduct()`, `removeProduct()`, `calculateTotal()`) und "Bestellung" (mit Attributen wie `orderDate`, `customerInfo`, `items` und Operationen wie `createOrder()`, `processPayment()`) umfassen. Beziehungen könnten eine Assoziation zwischen "Kunde" und "Bestellung" und eine Aggregation von "Produkt" in "Warenkorb" sein.
- **Aktivitätsdiagramm:** Der Use Case "Zur Kasse gehen" könnte durch ein Aktivitätsdiagramm dargestellt werden, das Aktivitäten wie "Adresse eingeben", "Versandart wählen", "Zahlungsinformationen eingeben", "Bestellung überprüfen" und "Bestellung abschließen" mit entsprechenden Kontrollflüssen und Entscheidungen (z.B. "Zahlung erfolgreich?") visualisiert.

## Weiterführende Links & Quellen

  - [Wikipedia: Unified Modeling Language](https://de.wikipedia.org/wiki/Unified_Modeling_Language)
  - [UML 2.5 Spezifikation (offizielle OMG-Seite, Englisch)](https://www.omg.org/spec/UML/2.5.1/About-UML.htm)
  - [Einführung in UML (z.B. von Universitäten oder Fachportalen)](https://www.visual-paradigm.com/de/tutorials/uml-tutorial/) - Ein umfassendes Online-Tutorial.
  - [Use Case Diagramm Tutorial](https://www.visual-paradigm.com/de/tutorials/use-case-diagram-tutorial/)
  - [Class Diagramm Tutorial](https://www.visual-paradigm.com/de/tutorials/class-diagram-tutorial/)
  - [Activity Diagramm Tutorial](https://www.visual-paradigm.com/de/tutorials/activity-diagram-tutorial/)

-----

> **Fehler gefunden?:** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
