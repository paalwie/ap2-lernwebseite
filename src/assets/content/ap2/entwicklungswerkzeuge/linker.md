# Konzipieren und Umsetzen von kundenspezifischen Softwareanwendungen: Software-Entwicklungswerkzeuge aufgabenbezogen auswählen und anwenden können - Linker

## Einführung

Der Linker (auch Binder genannt) ist ein essentielles Werkzeug im Softwareentwicklungsprozess, insbesondere beim Kompilieren von Programmen, die aus mehreren Quellcode-Dateien oder Bibliotheken bestehen. Seine Hauptaufgabe ist es, die verschiedenen Objektdateien, die vom Compiler aus den einzelnen Quellcode-Dateien erzeugt wurden, sowie die benötigten Bibliotheken zu einem einzigen ausführbaren Programm oder einer Bibliothek zusammenzufügen.

## Aufgaben des Linkers

Der Linker führt im Wesentlichen folgende Aufgaben aus:

1.  **Symbolauflösung (Symbol Resolution):** Quellcode-Dateien referenzieren oft Symbole (Funktionen, Variablen), die in anderen Dateien oder Bibliotheken definiert sind. Der Compiler erzeugt in den Objektdateien eine Tabelle dieser Referenzen. Der Linker analysiert diese Tabellen und versucht, jede Referenz einer Definition im Programm oder in den Bibliotheken zuzuordnen.

2.  **Adresszuweisung (Address Allocation):** Die einzelnen Objektdateien enthalten Code und Daten, die an relativen Adressen innerhalb ihrer jeweiligen Segmente (z.B. Code-Segment, Daten-Segment) abgelegt sind. Der Linker weist diesen Segmenten absolute oder relative Adressen im Speicher des Zielsystems zu. Dies beinhaltet auch die Anpassung von Adressreferenzen innerhalb des Codes, sodass sie auf die korrekten Speicherorte zeigen.

3.  **Relokation (Relocation):** Da der Compiler nicht die endgültigen Speicheradressen der Symbole kennt, erzeugt er relokatierbaren Code. Der Linker führt die notwendigen Anpassungen (Relokationen) an den Adressreferenzen im Code und in den Daten durch, basierend auf den tatsächlichen Adressen, die er bei der Adresszuweisung festgelegt hat.

4.  **Zusammenfügen von Segmenten (Segment Merging):** Der Linker kombiniert die verschiedenen Segmente (Code, Daten, etc.) aus den einzelnen Objektdateien und Bibliotheken zu einem einzigen ausführbaren Programm oder einer Bibliothek.

5.  **Erzeugung der Ausgabedatei:** Das Ergebnis des Linker-Prozesses ist eine ausführbare Datei (z.B. `.exe` unter Windows, keine spezifische Endung unter Linux/macOS) oder eine Bibliothek (z.B. `.dll` unter Windows, `.so` unter Linux, `.dylib` unter macOS). Diese Datei enthält den zusammengefügten Code und die Daten sowie Informationen, die das Betriebssystem zum Laden und Ausführen des Programms benötigt.

## Arten von Linkern

Es gibt verschiedene Arten von Linkern, die sich in ihrer Funktionsweise und den unterstützten Dateiformaten unterscheiden:

-   **Statische Linker:** Diese Linker führen alle oben genannten Aufgaben durch und erzeugen eine vollständig in sich geschlossene ausführbare Datei oder statische Bibliothek (`.lib` unter Windows, `.a` unter Linux/macOS). Alle benötigten Bibliotheksroutinen werden direkt in die Ausgabedatei kopiert.

-   **Dynamische Linker (oder Loader):** Bei der Verwendung von dynamischen Bibliotheken (`.dll` unter Windows, `.so` unter Linux, `.dylib` unter macOS) werden die Bibliotheksroutinen nicht direkt in die ausführbare Datei kopiert. Stattdessen enthält die ausführbare Datei nur Informationen darüber, welche dynamischen Bibliotheken zur Laufzeit benötigt werden. Der dynamische Linker (Loader) des Betriebssystems lädt diese Bibliotheken dann bei Programmstart in den Speicher und führt die notwendigen Verknüpfungen durch.

-   **Linker-Loader:** Einige Betriebssysteme oder Entwicklungsumgebungen verwenden einen kombinierten Linker-Loader, der sowohl die statische Verlinkung während der Build-Zeit als auch die dynamische Verlinkung zur Laufzeit übernimmt.

## Bedeutung des Linkers im Entwicklungsprozess

Der Linker spielt eine entscheidende Rolle in folgenden Aspekten:

-   **Modularität:** Er ermöglicht die Aufteilung eines großen Programms in mehrere kleinere Quellcode-Dateien, die unabhängig voneinander kompiliert und dann vom Linker zusammengefügt werden können. Dies fördert die Organisation und Wartbarkeit des Codes.
-   **Wiederverwendung von Code:** Bibliotheken ermöglichen die Wiederverwendung von vorkompiliertem Code in verschiedenen Programmen. Der Linker sorgt dafür, dass die benötigten Routinen aus den Bibliotheken eingebunden werden.
-   **Effizienz (dynamische Bibliotheken):** Dynamische Bibliotheken sparen Speicherplatz und können die Größe ausführbarer Dateien reduzieren, da die Bibliotheksroutinen nur einmal im Speicher geladen werden, auch wenn sie von mehreren Programmen genutzt werden. Außerdem können dynamische Bibliotheken unabhängig von den Hauptprogrammen aktualisiert werden.
-   **Build-Prozess:** Der Linker ist ein integraler Bestandteil des Build-Prozesses, der nach der Kompilierung und vor der Ausführung stattfindet.

## Interaktion mit dem Linker

In den meisten Entwicklungsumgebungen wird der Linker implizit durch den Compiler-Treiber (z.B. `gcc`, `clang`, `cl`) aufgerufen. Der Entwickler gibt in der Regel die Quellcode-Dateien und die zu verwendenden Bibliotheken an, und der Compiler-Treiber kümmert sich um die Kompilierung und das anschließende Linken.

Es ist jedoch auch möglich, den Linker direkt aufzurufen und seine Operationen über Kommandozeilenoptionen zu steuern. Dies kann in komplexeren Build-Szenarien oder zur Fehlerbehebung notwendig sein. Typische Optionen umfassen die Angabe von Objektdateien, Bibliotheken, Linker-Skripten (die den Link-Prozess detailliert steuern können) und der gewünschten Ausgabedatei.

## Auswahl des richtigen Linkers

In den meisten Fällen ist die Auswahl des Linkers durch das verwendete Betriebssystem und die Entwicklungswerkzeugkette (Compiler, Build-System) vorgegeben. Die Standard-Linker der jeweiligen Plattform (z.B. `ld` unter Linux, der Linker von Visual Studio unter Windows) sind in der Regel ausreichend und gut integriert.

In speziellen Fällen, z.B. bei der Entwicklung für eingebettete Systeme oder bei der Verwendung fortgeschrittener Linker-Features (wie Link-Time Optimization), kann die Auswahl oder Konfiguration eines alternativen Linkers relevant sein.

## Fazit

Der Linker ist ein unverzichtbares Werkzeug in der Softwareentwicklung, das die verschiedenen Teile eines Programms zu einer lauffähigen Einheit zusammenfügt. Er ermöglicht Modularität, Wiederverwendung von Code und trägt zur Effizienz der Software bei. Obwohl er oft im Hintergrund durch die Entwicklungswerkzeuge aufgerufen wird, ist ein grundlegendes Verständnis seiner Funktionsweise für jeden Softwareentwickler von Vorteil.

## Links und Quellen

-   **Linker (computing) - Wikipedia (Englischsprachig):** [https://en.wikipedia.org/wiki/Linker\_(computing)](https://en.wikipedia.org/wiki/Linker_(computing))
-   **Static library - Wikipedia (Englischsprachig):** [https://en.wikipedia.org/wiki/Static\_library](https://en.wikipedia.org/wiki/Static_library)
-   **Shared library - Wikipedia (Englischsprachig):** [https://en.wikipedia.org/wiki/Shared\_library](https://en.wikipedia.org/wiki/Shared_library)
-   **Dokumentation des Linkers Ihres Betriebssystems und Ihres Compilers (z.B. `man ld` unter Linux, Dokumentation zu `link.exe` für Visual Studio).**
-   **Artikel und Blogbeiträge zum Thema "Understanding Linkers and Loaders".**
-   **Bücher über Systemprogrammierung und Compilerbau, die detaillierte Informationen über den Linker enthalten.**

-----

> **Fehler gefunden?** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
