# Programmieren von Softwarelösungen: Situationsgerechte Auswahl einer passenden Programmiersprache begründen können - Portabilität

## Einführung

Portabilität ist die Fähigkeit einer Softwareanwendung, mit minimalen oder keinen Änderungen in verschiedenen Hardware- und Softwareumgebungen (Plattformen) zu laufen. Diese Plattformen können verschiedene Betriebssysteme (z.B. Windows, macOS, Linux, Android, iOS), verschiedene Architekturen der Zentraleinheit (CPU) (z.B. x86, ARM) oder verschiedene Browser (im Falle von Webanwendungen) umfassen. Die Portabilität einer Programmiersprache und der damit entwickelten Software ist ein entscheidender Faktor bei der Auswahl der Sprache, insbesondere wenn die Anwendung auf mehreren Plattformen eingesetzt werden soll oder zukünftige Plattformwechsel in Betracht gezogen werden müssen.

## Einfluss der Programmiersprache auf die Portabilität

Die Portabilität einer Software wird maßgeblich durch die gewählte Programmiersprache und deren Ökosystem beeinflusst:

-   **Abstraktion von der Hardware und dem Betriebssystem:**
    -   Programmiersprachen, die eine hohe Abstraktionsebene bieten, isolieren den Code weitgehend von den spezifischen Details der zugrunde liegenden Hardware und des Betriebssystems. Dies erleichtert die Portierung, da der Großteil des Codes unverändert auf anderen Plattformen laufen kann, sofern die Sprache für diese Plattform verfügbar ist. Beispiele hierfür sind Java (mit der Java Virtual Machine - JVM), Python (mit verschiedenen Interpretern für unterschiedliche Betriebssysteme) und JavaScript (das in Webbrowsern und mit Node.js auf verschiedenen Serverbetriebssystemen läuft).
    -   Sprachen mit einer niedrigeren Abstraktionsebene, wie C und C++, ermöglichen zwar eine direktere Interaktion mit der Hardware und dem Betriebssystem, erfordern aber oft plattformspezifischen Code oder spezielle Anpassungen (z.B. unterschiedliche Systemaufrufe, Compiler-Direktiven) für die Portierung auf andere Plattformen.

-   **Verfügbarkeit von Interpretern oder Laufzeitumgebungen:**
    -   Interpretierte Sprachen wie Python und JavaScript sind von der Verfügbarkeit eines entsprechenden Interpreters für die Zielplattform abhängig. Solange ein Interpreter für ein bestimmtes Betriebssystem und eine bestimmte Architektur existiert, kann der in diesen Sprachen geschriebene Code in der Regel ohne größere Änderungen ausgeführt werden.
    -   Java benötigt die Java Virtual Machine (JVM), die für viele verschiedene Plattformen verfügbar ist. Der Java-Bytecode, der aus dem Quellcode kompiliert wird, kann dann auf jeder JVM ausgeführt werden ("Write Once, Run Anywhere" - WORA).

-   **Standardisierung der Sprache und ihrer Bibliotheken:**
    -   Gut standardisierte Programmiersprachen (z.B. C, C++, Java, Python) haben den Vorteil, dass der Code, der sich an den Standard hält, mit größerer Wahrscheinlichkeit auf verschiedenen Compilern und Interpretern für unterschiedliche Plattformen konsistent funktioniert.
    -   Umfangreiche Standardbibliotheken, die plattformunabhängige Funktionalitäten bieten (z.B. für Dateizugriff, Netzwerkkommunikation), reduzieren die Notwendigkeit, auf plattformspezifische Bibliotheken zurückzugreifen und erleichtern somit die Portabilität.

-   **Ökosystem und plattformübergreifende Frameworks:**
    -   Ein reichhaltiges Ökosystem mit plattformübergreifenden Frameworks und Bibliotheken kann die Entwicklung portabler Anwendungen erheblich erleichtern. Beispielsweise ermöglichen Frameworks wie .NET (mit .NET Core), React Native (für mobile Apps), Flutter (für UI-Entwicklung) und Electron (für Desktop-Anwendungen) die Entwicklung von Anwendungen, die auf mehreren Plattformen mit einer gemeinsamen Codebasis laufen können.

-   **Abhängigkeiten von plattformspezifischen APIs:**
    -   Software, die stark auf plattformspezifische APIs (z.B. für die Benutzeroberfläche, den Zugriff auf spezielle Hardwarefunktionen) angewiesen ist, ist in der Regel weniger portabel. Um eine solche Anwendung auf eine andere Plattform zu portieren, ist oft ein erheblicher Aufwand erforderlich, um die plattformspezifischen Teile des Codes neu zu schreiben oder zu abstrahieren.

## Aspekte der Portabilität bei der Sprachauswahl

Bei der Auswahl einer Programmiersprache unter dem Gesichtspunkt der Portabilität sollten folgende Aspekte berücksichtigt werden:

-   **Zielplattformen:** Welche Betriebssysteme, Geräte oder Browser soll die Software unterstützen? Ist die Sprache und ihr Ökosystem für diese Plattformen gut etabliert und unterstützt?

-   **Erwartete Lebensdauer und zukünftige Plattformen:** Ist es wahrscheinlich, dass die Software in Zukunft auf weiteren Plattformen eingesetzt werden soll? Eine Sprache mit guter Portabilität kann hier die Flexibilität erhöhen und zukünftige Portierungsaufwände reduzieren.

-   **Umfang der plattformspezifischen Funktionalitäten:** Benötigt die Anwendung stark plattformspezifische Features? In solchen Fällen kann es sinnvoll sein, eine Sprache zu wählen, die eine gute Integration mit den spezifischen APIs der Zielplattformen bietet, auch wenn dies die Portabilität einschränken kann. Alternativ kann eine Architektur gewählt werden, die plattformspezifische Teile des Codes isoliert und durch eine plattformunabhängige Schicht abstrahiert.

-   **Verfügbarkeit von Entwicklern und Werkzeugen:** Ist eine ausreichende Anzahl von Entwicklern mit der portablen Sprache und den zugehörigen Frameworks vertraut? Sind die Entwicklungswerkzeuge für die verschiedenen Zielplattformen gut unterstützt?

-   **Performance-Anforderungen:** In einigen Fällen kann die Notwendigkeit, eine hohe Performance auf bestimmten Plattformen zu erzielen, die Wahl einer weniger portablen, aber leistungsstärkeren Sprache nahelegen. Hier muss ein Kompromiss zwischen Portabilität und Performance gefunden werden.

## Beispiele für portable Programmiersprachen und Technologien

-   **Java:** Mit der JVM ermöglicht Java das Ausführen von Code auf einer Vielzahl von Plattformen, ohne dass der Code neu kompiliert werden muss.

-   **Python:** Verfügt über Interpreter für die meisten gängigen Betriebssysteme und Architekturen. Viele Python-Bibliotheken sind ebenfalls plattformübergreifend.

-   **JavaScript:** Läuft nativ in Webbrowsern auf verschiedenen Betriebssystemen und kann mit Node.js auch serverseitig auf verschiedenen Plattformen eingesetzt werden.

-   **.NET (mit .NET Core/.NET 5+):** Microsofts .NET-Plattform ist mit .NET Core (und den neueren Versionen) plattformübergreifend geworden und unterstützt Windows, macOS und Linux.

-   **Go:** Code wird in der Regel für die spezifische Zielplattform kompiliert, aber der Compiler unterstützt die Erzeugung von Binaries für verschiedene Betriebssysteme und Architekturen aus derselben Codebasis ("Cross-Compilation").

-   **Frameworks wie React Native und Flutter:** Ermöglichen die Entwicklung von mobilen Apps (iOS und Android) aus einer einzigen Codebasis.

-   **Webstandards (HTML, CSS, JavaScript):** Die Grundlage für Webanwendungen, die in jedem modernen Webbrowser auf verschiedenen Betriebssystemen laufen.

## Fazit

Die Portabilität einer Programmiersprache und der damit entwickelten Software ist ein wichtiger Faktor bei der situationsgerechten Auswahl der Sprache. Sie ermöglicht es, Anwendungen auf verschiedenen Plattformen einzusetzen und reduziert den Aufwand für die Anpassung an neue Umgebungen. Sprachen und Technologien, die eine hohe Abstraktion bieten, auf standardisierten Laufzeitumgebungen basieren oder plattformübergreifende Frameworks nutzen, fördern die Portabilität. Die Entscheidung für eine Sprache sollte die spezifischen Anforderungen des Projekts, die Zielplattformen und die potenziellen zukünftigen Bedürfnisse berücksichtigen, wobei oft ein Kompromiss zwischen Portabilität und anderen Faktoren wie Performance oder Zugriff auf plattformspezifische Features gefunden werden muss.

## Links und Quellen

-   **Portabilität (Software) - Wikipedia:** [https://de.wikipedia.org/wiki/Portabilit%C3%A4t_(Software)](https://de.wikipedia.org/wiki/Portabilit%C3%A4t_(Software))
-   **Cross-platform software - Wikipedia:** [https://en.wikipedia.org/wiki/Cross-platform\_software](https://en.wikipedia.org/wiki/Cross-platform_software) (Englischsprachig)
-   **Write once, run anywhere - Wikipedia:** [https://de.wikipedia.org/wiki/Write\_once,_run\_anywhere](https://de.wikipedia.org/wiki/Write_once,_run_anywhere)
-   **.NET Cross-Platform:** [https://dotnet.microsoft.com/en-us/learn/dotnet/hello-world/cross-platform](https://dotnet.microsoft.com/en-us/learn/dotnet/hello-world/cross-platform) (Englischsprachig)
-   **React Native - A framework for building native apps using React:** [https://reactnative.dev/](https://reactnative.dev/) (Englischsprachig)
-   **Flutter - Build apps for any screen:** [https://flutter.dev/](https://flutter.dev/) (Englischsprachig)
