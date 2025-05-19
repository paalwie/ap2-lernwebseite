# Programmieren von Softwarelösungen: Softwareanforderungen erfassen können - Übertragbarkeit (Portabilität)

## Einführung

Übertragbarkeit (Portabilität) ist eine nicht-funktionale Anforderung, die die Fähigkeit einer Software beschreibt, in verschiedenen Hardware-, Software- oder Betriebssystemumgebungen mit minimalen oder keinen Änderungen zu funktionieren. Die Berücksichtigung der Übertragbarkeit bei der Erfassung von Softwareanforderungen ist entscheidend, wenn die Software auf verschiedenen Plattformen eingesetzt werden soll oder wenn zukünftige Änderungen der Infrastruktur erwartet werden.

## Bedeutung der Übertragbarkeit

-   **Unterstützung verschiedener Plattformen:** Ermöglicht die Nutzung der Software auf einer breiten Palette von Geräten und Betriebssystemen (z.B. Windows, macOS, Linux, Android, iOS).
-   **Flexibilität bei der Infrastrukturwahl:** Gibt dem Unternehmen die Freiheit, die am besten geeignete Hardware und Software für seine Bedürfnisse auszuwählen, ohne durch die Software eingeschränkt zu sein.
-   **Zukunftssicherheit:** Schützt die Investition in die Software, da sie auch bei Änderungen der technologischen Landschaft weiterhin genutzt werden kann.
-   **Einfachere Bereitstellung und Wartung:** Eine portable Softwarebasis kann die Bereitstellung und Wartung auf verschiedenen Plattformen vereinfachen.
-   **Größere Benutzerbasis:** Die Unterstützung mehrerer Plattformen kann die potenzielle Benutzerbasis der Software erweitern.

## Erfassung von Anforderungen bezüglich Übertragbarkeit

Die Erfassung von Übertragbarkeitsanforderungen erfordert die Berücksichtigung der Zielumgebungen und der gewünschten Flexibilität der Software.

**Fragestellungen und Techniken zur Erfassung:**

1.  **Identifizierung der Zielplattformen:**
    -   Auf welchen Betriebssystemen (z.B. Windows (welche Versionen?), macOS (welche Versionen?), Linux (welche Distributionen?), Android (welche Versionen?), iOS (welche Versionen?)) soll die Software laufen?
    -   Welche Hardware-Architekturen (z.B. x86, ARM) müssen unterstützt werden?
    -   Welche Webbrowser (z.B. Chrome, Firefox, Safari, Edge) müssen kompatibel sein?
    -   Gibt es spezifische Geräteanforderungen (z.B. bestimmte Bildschirmauflösungen, Sensoren)?

2.  **Definition des Grades der Übertragbarkeit:**
    -   Ist eine vollständige Übertragbarkeit ohne jegliche Codeänderung erforderlich?
    -   Sind geringfügige Anpassungen für die verschiedenen Plattformen akzeptabel?
    -   Soll die Software auf bestimmten Plattformen nativ laufen oder über eine virtuelle Umgebung oder einen Emulator?

3.  **Berücksichtigung von Abhängigkeiten:**
    -   Welche externen Bibliotheken, Frameworks oder Middleware werden verwendet? Sind diese auf allen Zielplattformen verfügbar und kompatibel?
    -   Gibt es Abhängigkeiten von plattformspezischen APIs oder Funktionen? Wenn ja, wie sollen diese behandelt werden (z.B. durch Abstraktionsschichten)?
    -   Welche Datenbanken werden unterstützt und wie ist die Portabilität der Datenhaltung sicherzustellen?

4.  **Formulieren von Übertragbarkeitsanforderungen:**
    -   "Die Software soll ohne Änderungen auf den Betriebssystemen Windows 10 und macOS 11 lauffähig sein." (Messkriterium: Erfolgreiche Installation und Ausführung grundlegender Funktionen auf den genannten Plattformen ohne Codeänderung)
    -   "Die Webanwendung soll in den aktuellen Versionen von Chrome, Firefox und Safari ohne Darstellungs- oder Funktionsfehler funktionieren." (Messkriterium: Keine signifikanten Abweichungen im Layout und in der Funktionalität in den genannten Browsern)
    -   "Für die Unterstützung von Linux ist eine Kompilierung aus dem Quellcode akzeptabel, wobei der Aufwand für die Anpassungen nicht mehr als X Personentage betragen darf." (Messkriterium: Aufwand für die Portierung auf eine zusätzliche Plattform)

5.  **Berücksichtigung von Entwicklungswerkzeugen und -technologien:**
    -   Welche Programmiersprachen und Frameworks sollen verwendet werden, um die Übertragbarkeit zu maximieren (z.B. plattformunabhängige Sprachen wie Java, Python, JavaScript mit entsprechenden Frameworks)?
    -   Sollen plattformübergreifende Entwicklungstools (z.B. Flutter, React Native, Xamarin) eingesetzt werden?

6.  **Teststrategie für Übertragbarkeit:**
    -   Wie soll die Übertragbarkeit der Software getestet werden? (z.B. Durchführung von Tests auf den verschiedenen Zielplattformen, Einsatz von Emulatoren und Simulatoren)

## Dokumentation von Übertragbarkeitsanforderungen

Übertragbarkeitsanforderungen sollten klar und spezifisch dokumentiert werden, einschließlich der unterstützten Plattformen, des gewünschten Grades der Portabilität und der Einschränkungen bezüglich Abhängigkeiten. Dies kann in Form von:

-   **Nicht-funktionalen Anforderungsspezifikationen:** Auflistung der Zielbetriebssysteme, Hardwarearchitekturen, Browser und anderer relevanter Plattformen.
-   **Architektur- und Design-Dokumenten:** Beschreibung der gewählten Technologien und Designmuster zur Unterstützung der Übertragbarkeit (z.B. Verwendung von Abstraktionsschichten, Vermeidung plattformspezifischer Features).
-   **Testplänen:** Spezifizierung der Teststrategie für die Überprüfung der Übertragbarkeit auf den verschiedenen Zielplattformen.

## Herausforderungen bei der Erfassung

-   **Vielfalt der Plattformen:** Die Anzahl der potenziell zu unterstützenden Plattformen kann sehr groß sein.
-   **Unterschiede zwischen Plattformen:** Betriebssysteme, Hardware und Browser weisen signifikante Unterschiede in ihren APIs, Funktionalitäten und Verhaltensweisen auf.
-   **Leistungsaspekte:** Die Portierung auf verschiedene Plattformen kann Auswirkungen auf die Leistung der Software haben.
-   **Kosten und Aufwand:** Die Entwicklung und das Testen für mehrere Plattformen können den Entwicklungsaufwand und die Kosten erhöhen.

## Fazit

Die Erfassung von Übertragbarkeitsanforderungen ist entscheidend, wenn eine Software auf mehreren Plattformen eingesetzt werden soll oder wenn Flexibilität hinsichtlich der zukünftigen Infrastrukturwahl wichtig ist. Durch die frühzeitige Identifizierung der Zielplattformen, die Definition des gewünschten Grades der Portabilität und die Berücksichtigung von Abhängigkeiten können die Weichen für eine erfolgreiche plattformübergreifende Entwicklung gestellt werden. Eine klare Dokumentation dieser Anforderungen ist unerlässlich für die Kommunikation mit dem Entwicklungsteam und für die Planung der Teststrategie.

## Links und Quellen

-   **Wikipedia - Softwareportierung:** [https://de.wikipedia.org/wiki/Softwareportierung](https://de.wikipedia.org/wiki/Softwareportierung)
-   **Plattformübergreifende Entwicklung:** (Artikel und Ressourcen zu Frameworks wie Flutter, React Native, Xamarin etc.)
-   **Best Practices für plattformunabhängige Programmierung:** (Artikel und Leitfäden zu den Herausforderungen und Lösungen bei der Entwicklung portabler Software)
-   **Dokumentationen der Zielbetriebssysteme und -browser:** (Informationen zu spezifischen Features und APIs)
