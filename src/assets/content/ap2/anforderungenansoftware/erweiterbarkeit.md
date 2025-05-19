# Programmieren von Softwarelösungen: Softwareanforderungen erfassen können - Änderbarkeit/Erweiterbarkeit

## Einführung

Bei der Erfassung von Softwareanforderungen ist es entscheidend, nicht nur die aktuellen Bedürfnisse zu berücksichtigen, sondern auch zukünftige Entwicklungen und Veränderungen einzuplanen. Die Änderbarkeit und Erweiterbarkeit einer Softwarelösung sind nicht-funktionale Anforderungen, die die Flexibilität, Wartbarkeit und Langlebigkeit des Systems maßgeblich beeinflussen. Sie beschreiben, wie einfach und kostengünstig die Software an neue Anforderungen angepasst oder um zusätzliche Funktionen erweitert werden kann.

## Bedeutung von Änderbarkeit und Erweiterbarkeit

-   **Anpassung an neue Geschäftsanforderungen:** Unternehmen entwickeln sich weiter, und ihre Geschäftsprozesse ändern sich. Software muss in der Lage sein, sich diesen Veränderungen anzupassen, ohne dass eine komplette Neuentwicklung erforderlich ist.
-   **Integration neuer Technologien:** Im Laufe der Zeit entstehen neue Technologien und Schnittstellen, mit denen die Software interagieren muss. Eine gute Erweiterbarkeit erleichtert diese Integration.
-   **Fehlerbehebung und Wartung:** Eine gut strukturierte und änderungsfreundliche Softwarebasis erleichtert die Identifizierung und Behebung von Fehlern sowie die Durchführung von Wartungsarbeiten.
-   **Reduzierung von Kosten und Aufwand:** Software, die leicht geändert und erweitert werden kann, reduziert langfristig die Kosten und den Aufwand für Wartung und Weiterentwicklung.
-   **Erhöhung der Langlebigkeit:** Systeme, die sich flexibel an neue Anforderungen anpassen lassen, haben eine höhere Lebensdauer.

## Erfassung von Anforderungen bezüglich Änderbarkeit und Erweiterbarkeit

Die Erfassung von Anforderungen zur Änderbarkeit und Erweiterbarkeit ist oft weniger konkret als die Erfassung funktionaler Anforderungen. Es geht darum, die potenziellen zukünftigen Bedürfnisse und die gewünschte Flexibilität des Systems zu antizipieren und in messbare oder zumindest nachvollziehbare Anforderungen zu übersetzen.

**Fragestellungen und Techniken zur Erfassung:**

1.  **Antizipieren zukünftiger Funktionen:**
    -   Welche zukünftigen Funktionen oder Features könnten in den nächsten 1-3 Jahren relevant werden? (Brainstorming-Sitzungen mit Stakeholdern, Analyse von Markttrends und Wettbewerbern)
    -   Gibt es geplante Erweiterungen der Geschäftsprozesse, die sich auf die Software auswirken könnten? (Interviews mit Business-Analysten und Fachabteilungen)
    -   Welche Schnittstellen zu anderen Systemen könnten in Zukunft erforderlich sein? (Analyse der Systemlandschaft und Integrationspläne)

2.  **Identifizieren potenzieller Änderungen:**
    -   Welche Teile des Systems könnten sich voraussichtlich häufiger ändern? (Analyse der aktuellen Änderungsanfragen, Diskussion mit dem Wartungsteam)
    -   Gibt es variable Geschäftsregeln oder Workflows, die flexibel anpassbar sein sollten? (Interviews mit Fachanwendern)

3.  **Formulieren von nicht-funktionalen Anforderungen:**
    -   **Modularity:** Das System soll so aufgebaut sein, dass einzelne Komponenten unabhängig voneinander entwickelt, getestet und ausgetauscht werden können. (Messkriterium: Grad der Entkopplung von Modulen, Anzahl der Abhängigkeiten)
    -   **Extensibility:** Neue Funktionen sollen hinzugefügt werden können, ohne bestehende Komponenten signifikant zu verändern. (Messkriterium: Aufwand für die Implementierung neuer Features, Anzahl der betroffenen Komponenten)
    -   **Configurability:** Das Verhalten des Systems soll durch Konfigurationseinstellungen anpassbar sein, ohne Codeänderungen zu erfordern. (Messkriterium: Anzahl der konfigurierbaren Parameter, Umfang der Anpassungsmöglichkeiten durch Konfiguration)
    -   **Maintainability:** Das System soll einfach zu warten, zu verstehen und zu modifizieren sein. (Messkriterien: Code-Komplexität, Dokumentationsgrad, Testabdeckung)
    -   **Scalability (oft eng verbunden):** Das System soll in der Lage sein, mit steigender Last (z.B. Benutzerzahlen, Datenvolumen) umzugehen und bei Bedarf erweitert werden zu können. (Messkriterien: Leistungsfähigkeit unter Last, Aufwand für die Skalierung)
    -   **Interoperability:** Das System soll in der Lage sein, mit anderen Systemen und Technologien zu interagieren. (Messkriterien: Unterstützte Schnittstellen und Standards)

4.  **Berücksichtigung von Designprinzipien:**
    -   **Lose Kopplung (Loose Coupling):** Komponenten sollten so wenig wie möglich voneinander abhängig sein, um Änderungen in einem Bereich nicht unnötig auf andere Bereiche auszuweiten.
    -   **Hohe Kohäsion (High Cohesion):** Komponenten sollten eine klare, gut definierte Verantwortlichkeit haben und alle zu dieser Verantwortlichkeit gehörenden Aspekte zusammenfassen.
    -   **Prinzip des offenen/geschlossenen (Open/Closed Principle):** Softwareentitäten (Klassen, Module, Funktionen usw.) sollten offen für Erweiterungen, aber geschlossen für Modifikationen sein. Dies wird oft durch Vererbung und Polymorphismus erreicht.
    -   **DRY-Prinzip (Don't Repeat Yourself):** Vermeidung von Code-Duplikaten, um die Wartbarkeit und Änderbarkeit zu verbessern.

5.  **Nutzung von Szenarien und Use Cases:**
    -   Erweitern Sie bestehende Use Cases um mögliche zukünftige Szenarien oder alternative Abläufe.
    -   Entwickeln Sie "Was-wäre-wenn"-Szenarien, um potenzielle zukünftige Anforderungen zu explorieren.

6.  **Prototyping und Mockups:**
    -   Erstellen Sie einfache Prototypen oder Mockups, um die Auswirkungen potenzieller Änderungen oder Erweiterungen frühzeitig zu visualisieren und Feedback von Stakeholdern einzuholen.

7.  **Architektur- und Design-Diskussionen:**
    -   Führen Sie frühzeitig Gespräche mit Architekten und Entwicklern, um die technischen Implikationen der Änderbarkeits- und Erweiterbarkeitsanforderungen zu diskutieren und geeignete Designentscheidungen zu treffen.

## Dokumentation von Änderbarkeit und Erweiterbarkeit

Die Anforderungen bezüglich Änderbarkeit und Erweiterbarkeit sollten klar und nachvollziehbar dokumentiert werden. Dies kann in Form von:

-   **Nicht-funktionalen Anforderungsspezifikationen:** Detaillierte Beschreibungen der gewünschten Eigenschaften mit messbaren Kriterien, wo möglich.
-   **Architektur- und Design-Dokumenten:** Erläuterung der gewählten Architekturmuster und Designprinzipien zur Unterstützung der Änderbarkeit und Erweiterbarkeit.
-   **Use Case Erweiterungen:** Beschreibung möglicher zukünftiger Szenarien und Erweiterungen der Funktionalität.

## Herausforderungen bei der Erfassung

-   **Abstraktheit:** Änderbarkeit und Erweiterbarkeit sind oft abstrakte Konzepte, die schwer zu quantifizieren sind.
-   **Unsicherheit der Zukunft:** Es ist schwierig, zukünftige Anforderungen präzise vorherzusagen.
-   **Balance mit anderen Anforderungen:** Die Berücksichtigung von Änderbarkeit und Erweiterbarkeit kann zu einem erhöhten Entwicklungsaufwand und potenziell höheren Kosten in der initialen Phase führen. Hier gilt es, eine Balance mit anderen Anforderungen wie Zeit und Budget zu finden.

## Fazit

Die Erfassung von Anforderungen bezüglich Änderbarkeit und Erweiterbarkeit ist ein wesentlicher Bestandteil des Softwareentwicklungsprozesses. Durch die frühzeitige Berücksichtigung potenzieller zukünftiger Bedürfnisse und die Formulierung entsprechender nicht-funktionaler Anforderungen kann sichergestellt werden, dass die entwickelte Software flexibel, wartbar und langlebig ist und sich an zukünftige Veränderungen anpassen kann. Dies erfordert eine enge Zusammenarbeit mit allen Stakeholdern, die Anwendung geeigneter Erfassungstechniken und eine sorgfältige Dokumentation.

## Links und Quellen

-   **Wikipedia - Nichtfunktionale Anforderung:** [https://de.wikipedia.org/wiki/Nichtfunktionale_Anforderung](https://de.wikipedia.org/wiki/Nichtfunktionale_Anforderung)
-   **ISO/IEC 25010 - Quality in use:** [https://www.iso.org/standard/35733.html](https://www.iso.org/standard/35733.html) (Englischsprachig - Behandelt auch Aspekte der Maintainability und Adaptability)
-   **SOLID Prinzipien des objektorientierten Designs:** (Diese Prinzipien sind grundlegend für die Entwicklung änderungsfreundlicher Software)
    -   **Single Responsibility Principle (SRP)**
    -   **Open/Closed Principle (OCP)**
    -   **Liskov Substitution Principle (LSP)**
    -   **Interface Segregation Principle (ISP)**
    -   **Dependency Inversion Principle (DIP)**
-   **Clean Architecture von Robert C. Martin:** (Ein Architekturansatz, der auf Änderbarkeit und Testbarkeit ausgerichtet ist)
-   **Domain-Driven Design (DDD) von Eric Evans:** (Fokus auf die Modellierung der Fachlichkeit, was die Anpassung an neue Geschäftsanforderungen erleichtert)
