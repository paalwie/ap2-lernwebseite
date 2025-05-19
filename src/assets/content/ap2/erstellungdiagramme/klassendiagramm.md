# Konzipieren und Umsetzen von kundenspezifischen Softwareanwendungen: UML-Diagramme erstellen können - Klassendiagramm

## Einführung

Das UML-Klassendiagramm ist eine statische Strukturdiagrammart der Unified Modeling Language (UML). Es beschreibt die Struktur eines Systems, indem es seine Klassen, deren Attribute und Operationen (Methoden) sowie die Beziehungen zwischen den Klassen darstellt. Klassendiagramme sind ein zentrales Werkzeug im objektorientierten Design, um die Architektur eines Softwaresystems zu visualisieren und zu kommunizieren.

## Grundlegende Elemente eines Klassendiagramms

Ein Klassendiagramm besteht hauptsächlich aus folgenden Elementen:

-   **Klassen:** Repräsentieren Konzepte, Objekte oder Entitäten im System. Sie werden als Rechtecke dargestellt, die in drei Bereiche unterteilt sein können:
    1.  **Name der Klasse:** Im oberen Bereich, üblicherweise fett gedruckt und zentriert.
    2.  **Attribute:** Im mittleren Bereich, listet die Eigenschaften der Klasse auf (z.B. Variablen, Datenfelder). Jedes Attribut kann mit seiner Sichtbarkeit (z.B. `+` für public, `-` für private, `#` für protected, `~` für package), seinem Namen und optional seinem Datentyp versehen werden (z.B. `+ name: String`).
    3.  **Operationen (Methoden):** Im unteren Bereich, listet die Verhaltensweisen oder Funktionen auf, die die Klasse ausführen kann. Jede Operation kann mit ihrer Sichtbarkeit, ihrem Namen, optional ihren Parametern (mit Typ) und optional ihrem Rückgabetyp versehen werden (z.B. `+ calculateArea(width: Integer, height: Integer): Integer`).

-   **Beziehungen:** Stellen die Verbindungen zwischen Klassen dar. Es gibt verschiedene Arten von Beziehungen:
    -   **Assoziation:** Eine allgemeine Beziehung zwischen Klassen. Sie wird als durchgezogene Linie zwischen den Klassen dargestellt. Die Assoziation kann mit einer Beschriftung versehen sein, die die Art der Beziehung angibt, und mit Multiplizitäten an den Enden, die angeben, wie viele Objekte der einen Klasse mit wie vielen Objekten der anderen Klasse in Beziehung stehen (z.B. `1`, `0..1`, `*` oder `0..*`, `1..*`).
    -   **Aggregation:** Eine "Hat-ein"-Beziehung, die eine "Ganzes-Teile"-Beziehung darstellt, bei der die Teile existieren können, auch wenn das Ganze nicht existiert (schwache Assoziation). Sie wird als durchgezogene Linie mit einer leeren Raute am Ende der "Ganzes"-Klasse dargestellt.
    -   **Komposition:** Eine stärkere Form der Aggregation (starke Assoziation), bei der die Teile exklusiv zu dem Ganzen gehören und nicht unabhängig davon existieren können. Sie wird als durchgezogene Linie mit einer gefüllten Raute am Ende der "Ganzes"-Klasse dargestellt.
    -   **Vererbung (Generalisierung):** Eine "Ist-ein"-Beziehung, bei der eine Subklasse (abgeleitete Klasse) Attribute und Operationen von einer Superklasse (Basisklasse) erbt. Sie wird als durchgezogene Linie mit einem leeren, nicht ausgefüllten Pfeil gezeigt, der von der Subklasse zur Superklasse zeigt.
    -   **Abhängigkeit:** Eine Beziehung, bei der eine Klasse eine andere Klasse verwendet oder von ihr abhängt, aber keine strukturelle Beziehung besteht (z.B. eine Methode einer Klasse verwendet ein Objekt einer anderen Klasse als Parameter). Sie wird als gestrichelte Linie mit einem offenen Pfeil gezeigt, der von der abhängigen Klasse zur verwendeten Klasse zeigt.
    -   **Realisierung (Implementierung):** Eine Beziehung zwischen einer Klasse und einer Schnittstelle (Interface), bei der die Klasse die in der Schnittstelle definierten Operationen implementiert. Sie wird als gestrichelte Linie mit einem leeren, nicht ausgefüllten Pfeil gezeigt, der von der implementierenden Klasse zur Schnittstelle zeigt.

-   **Schnittstellen (Interfaces):** Definieren ein Set von Operationen, die eine Klasse implementieren muss. Sie werden ähnlich wie Klassen dargestellt, aber mit dem Stereotyp `<<interface>>` über dem Namen oder durch einen Kreis mit dem Namen der Schnittstelle, der durch eine gestrichelte Linie mit der implementierenden Klasse verbunden ist (die "Lollipop"-Notation). Sie enthalten nur Operationen (keine Attribute).

-   **Abstrakte Klassen:** Klassen, von denen keine direkten Objekte instanziiert werden können. Sie dienen als Basisklassen für andere Klassen. Abstrakte Klassennamen werden oft kursiv dargestellt oder die Klasse wird mit dem Stereotyp `<<abstract>>` versehen. Sie können sowohl abstrakte (ohne Implementierung) als auch konkrete Operationen enthalten.

-   **Multiplizitäten:** Geben die Anzahl der Objekte an, die an einer Beziehung beteiligt sein können. Sie werden am Ende einer Assoziationslinie angegeben (z.B. `1`, `*`, `0..1`, `1..*`, `2..5`).

## Erstellung eines Klassendiagramms

Die Erstellung eines Klassendiagramms umfasst typischerweise folgende Schritte:

1.  **Identifizierung der Klassen:** Basierend auf den Anforderungen und der Analyse des Systems werden die wichtigsten Konzepte, Objekte oder Entitäten identifiziert, die als Klassen im Diagramm dargestellt werden sollen.

2.  **Festlegung der Attribute:** Für jede identifizierte Klasse werden die relevanten Attribute (Eigenschaften) bestimmt, die den Zustand der Objekte dieser Klasse beschreiben. Die Sichtbarkeit und der Datentyp jedes Attributs sollten berücksichtigt werden.

3.  **Festlegung der Operationen:** Für jede Klasse werden die relevanten Operationen (Methoden) bestimmt, die das Verhalten der Objekte dieser Klasse definieren. Die Sichtbarkeit, die Parameter (mit Typ) und der Rückgabetyp jeder Operation sollten berücksichtigt werden.

4.  **Identifizierung der Beziehungen:** Die Beziehungen zwischen den identifizierten Klassen werden analysiert und im Diagramm mit den entsprechenden Beziehungstypen (Assoziation, Aggregation, Komposition, Vererbung, Abhängigkeit, Realisierung) dargestellt.

5.  **Angabe der Multiplizitäten:** Für jede Assoziation wird die Multiplizität an beiden Enden der Beziehung angegeben, um die Anzahl der beteiligten Objekte zu definieren.

6.  **Verwendung von Schnittstellen und abstrakten Klassen (falls zutreffend):** Wenn das Design Schnittstellen oder abstrakte Klassen erfordert, werden diese entsprechend im Diagramm dargestellt.

7.  **Verfeinerung und Überprüfung:** Das erstellte Klassendiagramm wird überprüft und verfeinert, um sicherzustellen, dass es die Struktur des Systems korrekt und vollständig darstellt und für alle Beteiligten verständlich ist.

## Bedeutung von Klassendiagrammen

Klassendiagramme sind in der Softwareentwicklung von großer Bedeutung, da sie:

-   **Die Struktur des Systems visualisieren:** Sie bieten eine klare grafische Darstellung der Klassen und ihrer Beziehungen.
-   **Die Kommunikation erleichtern:** Sie dienen als gemeinsames Verständnis für Entwickler, Architekten, Tester und andere Stakeholder.
-   **Das Design dokumentieren:** Sie sind ein wichtiger Bestandteil der Softwaredokumentation.
-   **Die Basis für die Code-Generierung bilden:** Aus Klassendiagrammen kann in vielen Fällen automatisch Quellcode generiert werden (Model-Driven Development).
-   **Das Verständnis des Systems fördern:** Sie helfen dabei, die статическую Struktur und die статиischen Beziehungen im System zu verstehen.
-   **Die Planung und das Design unterstützen:** Sie ermöglichen es, Designentscheidungen frühzeitig zu treffen und zu validieren.

## Werkzeuge zur Erstellung von UML-Klassendiagrammen

Es gibt verschiedene Werkzeuge zur Erstellung von UML-Diagrammen, einschließlich Klassendiagrammen:

-   **Standalone UML-Modellierungswerkzeuge:** z.B. Enterprise Architect, Lucidchart, draw.io (diagrams.net), Umbrello.
    -   **Link (Enterprise Architect - Sparx Systems):** [https://sparxsystems.com/products/ea/index.html](https://sparxsystems.com/products/ea/index.html)
    -   **Link (Lucidchart):** [https://www.lucidchart.com/](https://www.lucidchart.com/)
    -   **Link (draw.io - diagrams.net):** [https://app.diagrams.net/](https://app.diagrams.net/)
    -   **Link (Umbrello - KDE):** [https://umbrello.kde.org/](https://umbrello.kde.org/)
-   **Integrierte UML-Funktionalität in IDEs:** Viele IDEs wie IntelliJ IDEA, Eclipse und Visual Studio bieten Unterstützung für die Erstellung von UML-Diagrammen, oft durch Plugins.
    -   **Link (UML Plugin für IntelliJ IDEA):** Suche im IntelliJ IDEA Plugin Marketplace nach "UML".
    -   **Link (UML Plugin für Eclipse):** Suche im Eclipse Marketplace nach "UML".
    -   **Link (UML Unterstützung in Visual Studio):** [https://learn.microsoft.com/en-us/visualstudio/modeling/create-uml-models?view=vs-2022](https://learn.microsoft.com/en-us/visualstudio/modeling/create-uml-models?view=vs-2022)

## Fazit

Das UML-Klassendiagramm ist ein mächtiges Werkzeug zur Modellierung der statischen Struktur objektorientierter Systeme. Durch die Darstellung von Klassen, ihren Attributen und Operationen sowie den Beziehungen zwischen ihnen ermöglicht es eine klare Kommunikation und ein gemeinsames Verständnis des Systemdesigns. Die Fähigkeit, Klassendiagramme zu erstellen und zu interpretieren, ist eine wichtige Kompetenz für Softwareentwickler und Architekten.

## Links und Quellen

-   **Class diagram - Wikipedia (Deutsch):** [https://de.wikipedia.org/wiki/Klassendiagramm](https://de.wikipedia.org/wiki/Klassendiagramm)
-   **Class diagram - Wikipedia (Englischsprachig):** [https://en.wikipedia.org/wiki/Class\_diagram](https://en.wikipedia.org/wiki/Class_diagram)
-   **UML 2.5 Specification (Offizielle Spezifikation der UML):** [https://www.omg.org/spec/UML/2.5.1/](https://www.omg.org/spec/UML/2.5.1/) (Kapitel zu Klassendiagrammen)
-   **Tutorials und Anleitungen zur Erstellung von UML-Klassendiagrammen (z.B. auf Visual Paradigm, Lucidchart).**
    -   **Link (UML Class Diagram Tutorial - Visual Paradigm):** [https://www.visual-paradigm.com/tutorials/uml-class-diagram/](https://www.visual-paradigm.com/tutorials/uml-class-diagram/)
    -   **Link (UML Class Diagram Tutorial - Lucidchart):** [https://www.lucidchart.com/pages/de/tutorial/uml-klassendiagramm](https://www.lucidchart.com/pages/de/tutorial/uml-klassendiagramm)
-   **Bücher über UML und objektorientierte Analyse und Design (z.B. "UML @ work" von Martin Fowler).**

-----

> **Fehler gefunden?** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
