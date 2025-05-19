# Konzipieren und Umsetzen von kundenspezifischen Softwareanwendungen: Konzepte von Programmiersprachen kennen und exemplarisch Programmiersprachen nennen können - Konzepte von Programmiersprachen

## Einführung

Programmiersprachen sind formale Sprachen, die dazu dienen, Anweisungen an einen Computer zu übermitteln. Sie unterscheiden sich in ihren Paradigmen, d.h., in den grundlegenden Konzepten und Prinzipien, die ihre Struktur und die Art und Weise, wie Programme geschrieben werden, bestimmen. Die wichtigsten Programmierparadigmen sind strukturiert, prozedural, funktional und objektorientiert. Es ist wichtig, diese Konzepte zu verstehen, um die Stärken und Schwächen verschiedener Sprachen einschätzen und die passende Sprache für ein bestimmtes Problem auswählen zu können.

## Strukturierte Programmierung

Die strukturierte Programmierung ist ein Programmierparadigma, das die Verwendung von Kontrollstrukturen wie Sequenzen, Selektionen (Verzweigungen mit `if-then-else`) und Iterationen (Schleifen mit `while`, `for`) betont. Ziel ist es, Programme mit einer klaren und nachvollziehbaren Struktur zu erstellen, die weniger anfällig für Fehler sind und leichter zu warten. Die Verwendung von `goto`-Anweisungen wird in der reinen strukturierten Programmierung vermieden, da sie zu schwer verständlichem "Spaghetti-Code" führen können.

**Kernkonzepte der strukturierten Programmierung:**

-   **Sequenz:** Anweisungen werden in der Reihenfolge ausgeführt, in der sie im Programm stehen.
-   **Selektion:** Die Ausführung von Codeblöcken hängt von der Erfüllung einer Bedingung ab (`if`, `else if`, `else`, `switch`).
-   **Iteration:** Codeblöcke werden wiederholt ausgeführt, solange eine bestimmte Bedingung erfüllt ist oder eine bestimmte Anzahl von Wiederholungen erreicht wurde (`while`, `for`, `do-while`).
-   **Modulare Programmierung:** Zerlegung des Programms in kleinere, unabhängige Module oder Funktionen, die eine spezifische Aufgabe erfüllen.

**Beispielhafte Programmiersprachen mit stark strukturierten Elementen:**

-   **Pascal:** Eine klassische Lehrsprache, die die strukturierte Programmierung stark fördert.
-   **C:** Obwohl C auch Low-Level-Zugriffe erlaubt, unterstützt es die strukturierte Programmierung durch seine Kontrollstrukturen und Funktionen.
-   **Fortran (neuere Standards):** Moderne Fortran-Standards enthalten viele strukturierte Programmierelemente.
-   **Ada:** Eine Sprache, die für ihre strenge Typisierung und Unterstützung strukturierter Programmierung bekannt ist.

## Prozedurale Programmierung

Die prozedurale Programmierung erweitert die strukturierte Programmierung durch die Einführung von Prozeduren (auch Funktionen oder Subroutinen genannt). Ein Programm besteht aus einer oder mehreren Prozeduren, die Anweisungen enthalten und über Parameter Daten austauschen können. Der Fokus liegt auf der Zerlegung des Programms in eine Hierarchie von Prozeduraufrufen. Globale Variablen können verwendet werden, aber der Datenaustausch erfolgt primär über Parameter.

**Kernkonzepte der prozeduralen Programmierung:**

-   Alle Konzepte der strukturierten Programmierung.
-   **Prozeduren (Funktionen, Subroutinen):** Wiederverwendbare Codeblöcke, die eine spezifische Aufgabe ausführen und über Parameter aufgerufen werden können.
-   **Lokale Variablen:** Variablen, die nur innerhalb einer bestimmten Prozedur gültig sind.
-   **Globale Variablen:** Variablen, die außerhalb von Prozeduren definiert sind und von mehreren Prozeduren verwendet werden können (sollten aber sparsam eingesetzt werden).

**Beispielhafte prozedurale Programmiersprachen:**

-   **C:** Eine der bekanntesten prozeduralen Sprachen, die in vielen Bereichen eingesetzt wird.
-   **Pascal:** Neben strukturierten Elementen ist Pascal auch stark prozedural orientiert.
-   **Fortran:** Eine traditionelle Sprache für wissenschaftliche und numerische Berechnungen, die prozedurale Konzepte nutzt.
-   **BASIC (ältere Dialekte):** Frühe BASIC-Versionen waren oft prozedural.

## Funktionale Programmierung

Die funktionale Programmierung ist ein Programmierparadigma, das Berechnungen als die Auswertung mathematischer Funktionen betrachtet und Wert auf die Vermeidung von Zustandsänderungen und Seiteneffekten legt. Funktionen sind "first-class citizens", d.h., sie können wie Daten behandelt, an andere Funktionen übergeben und von diesen zurückgegeben werden. Rekursion ist ein wichtiges Kontrollflusskonstrukt in der funktionalen Programmierung.

**Kernkonzepte der funktionalen Programmierung:**

-   **Funktionen als First-Class Citizens:** Funktionen können Variablen zugewiesen, als Argumente an andere Funktionen übergeben und als Rückgabewerte von Funktionen zurückgegeben werden.
-   **Rein funktionale Funktionen:** Funktionen, deren Rückgabewert nur von ihren Eingabeargumenten abhängt und die keine Seiteneffekte (z.B. Änderung globaler Variablen, Ein-/Ausgabe) verursachen.
-   **Immutabilität:** Datenstrukturen werden nach ihrer Erstellung nicht mehr verändert. Operationen erzeugen neue Datenstrukturen anstelle der Modifikation bestehender.
-   **Rekursion:** Wiederholte Ausführung von Codeblöcken durch Selbstaufruf von Funktionen anstelle von Schleifen.
-   **Funktionen höherer Ordnung (Higher-Order Functions):** Funktionen, die andere Funktionen als Argumente akzeptieren oder Funktionen als Ergebnis zurückgeben.
-   **Lambda-Ausdrücke (Anonyme Funktionen):** Funktionen, die ohne explizite Namensgebung definiert werden können.

**Beispielhafte funktionale Programmiersprachen:**

-   **Haskell:** Eine rein funktionale Sprache, die strenge Typisierung und Lazy Evaluation unterstützt.
-   **Lisp (und Dialekte wie Scheme und Common Lisp):** Eine der ältesten funktionalen Sprachen mit flexibler Syntax.
-   **ML (und Dialekte wie Standard ML und OCaml):** Eine Familie von funktionalen Sprachen mit starker Typinferenz.
-   **Clojure:** Eine dynamische, moderne Lisp-Variante, die auf der Java Virtual Machine (JVM) läuft.
-   **F#:** Eine funktionale Sprache für die .NET-Plattform.
-   Viele moderne Mehrzwecksprachen (z.B. Python, JavaScript, Java, C#) enthalten auch funktionale Programmierkonzepte.

## Objektorientierte Programmierung (OOP)

Die objektorientierte Programmierung (OOP) ist ein Paradigma, das Programme als eine Sammlung von interagierenden Objekten betrachtet. Ein Objekt ist eine Instanz einer Klasse, die Daten (Attribute) und Verhalten (Methoden) kapselt. OOP betont Konzepte wie Abstraktion, Kapselung, Vererbung und Polymorphismus, um komplexe Systeme modular und wiederverwendbar zu gestalten.

**Kernkonzepte der objektorientierten Programmierung:**

-   **Objekte:** Grundlegende Einheiten, die Daten und die Operationen, die auf diesen Daten ausgeführt werden können, zusammenfassen.
-   **Klassen:** Baupläne oder Vorlagen für Objekte, die die Struktur (Attribute) und das Verhalten (Methoden) der Objekte definieren.
-   **Kapselung (Encapsulation):** Das Verbergen der internen Implementierungsdetails eines Objekts und das Bereitstellen einer öffentlichen Schnittstelle für die Interaktion.
-   **Vererbung (Inheritance):** Die Möglichkeit, dass eine Klasse (Subklasse) Eigenschaften (Attribute und Methoden) von einer anderen Klasse (Superklasse) erbt und diese erweitern oder spezialisieren kann.
-   **Polymorphismus (Polymorphism):** Die Fähigkeit von Objekten unterschiedlicher Klassen, auf eine einheitliche Schnittstelle unterschiedlich zu reagieren.
-   **Abstraktion:** Das Hervorheben der wesentlichen Merkmale eines Objekts oder einer Klasse und das Ausblenden irrelevanter Details.

**Beispielhafte objektorientierte Programmiersprachen:**

-   **Java:** Eine weit verbreitete, plattformunabhängige Sprache, die stark objektorientiert ist.
-   **C++:** Eine Erweiterung von C, die objektorientierte Features hinzufügt.
-   **Python:** Eine dynamische Sprache, die sowohl prozedurale als auch objektorientierte Programmierung unterstützt.
-   **C#:** Eine moderne Sprache von Microsoft, die primär für die .NET-Plattform entwickelt wurde und stark objektorientiert ist.
-   **Smalltalk:** Eine der ersten rein objektorientierten Sprachen.
-   **Ruby:** Eine dynamische, objektorientierte Sprache mit Fokus auf Einfachheit und Eleganz.

## Weitere Programmierparadigmen (kurz erwähnt):

-   **Logische Programmierung:** Basiert auf formaler Logik und dem Prinzip des logischen Schließens (z.B. Prolog).
-   **Parallele Programmierung:** Ermöglicht die gleichzeitige Ausführung von Programmteilen auf mehreren Prozessoren oder Kernen (z.B. mit Threads oder Prozessen in vielen Sprachen, spezielle Sprachen wie Erlang für nebenläufige Systeme).
-   **Ereignisgesteuerte Programmierung:** Der Programmablauf wird durch Ereignisse (z.B. Benutzeraktionen, Systemmeldungen) bestimmt (häufig in GUI-Frameworks und JavaScript für Web-Interaktivität).

## Fazit

Das Verständnis der verschiedenen Programmierparadigmen ist entscheidend für die Auswahl der richtigen Werkzeuge für eine bestimmte Aufgabe. Jedes Paradigma hat seine Stärken und Schwächen und ist für bestimmte Arten von Problemen besser geeignet als andere. Viele moderne Programmiersprachen unterstützen mehrere Paradigmen (Multi-Paradigma-Sprachen), was den Entwicklern mehr Flexibilität bei der Gestaltung ihrer Lösungen bietet.

## Links und Quellen

-   **Programming paradigm - Wikipedia (Englischsprachig):** [https://en.wikipedia.org/wiki/Programming\_paradigm](https://en.wikipedia.org/wiki/Programming_paradigm)
-   **Structured programming - Wikipedia (Englischsprachig):** [https://en.wikipedia.org/wiki/Structured\_programming](https://en.wikipedia.org/wiki/Structured_programming)
-   **Procedural programming - Wikipedia (Englischsprachig):** [https://en.wikipedia.org/wiki/Procedural\_programming](https://en.wikipedia.org/wiki/Procedural_programming)
-   **Functional programming - Wikipedia (Englischsprachig):** [https://en.wikipedia.org/wiki/Functional\_programming](https://en.wikipedia.org/wiki/Functional_programming)
-   **Object-oriented programming - Wikipedia (Englischsprachig):** [https://en.wikipedia.org/wiki/Object-oriented\_programming](https://en.wikipedia.org/wiki/Object-oriented_programming)
-   **Vergleiche von Programmiersprachen auf verschiedenen Websites (z.B. Stack Overflow, GitHub).**
-   **Dokumentationen und Tutorials zu den genannten Programmiersprachen.**
-   **Bücher über Programmiersprachen und Programmierparadigmen.**

-----

> **Fehler gefunden?** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
