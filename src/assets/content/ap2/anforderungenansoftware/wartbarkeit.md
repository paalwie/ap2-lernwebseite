# Programmieren von Softwarelösungen: Softwareanforderungen erfassen können - Wartbarkeit (Maintainability)

## Einführung

Wartbarkeit (Maintainability) ist eine nicht-funktionale Anforderung, die beschreibt, wie einfach eine Software nach ihrer Auslieferung geändert werden kann, um Fehler zu beheben, neue Anforderungen zu implementieren oder die Leistung zu verbessern. Eine hohe Wartbarkeit ist entscheidend für die langfristige Lebensdauer und Wirtschaftlichkeit einer Softwarelösung. Sie reduziert den Aufwand und die Kosten für zukünftige Anpassungen und Erweiterungen.

## Bedeutung der Wartbarkeit

-   **Fehlerbehebung:** Eine gut wartbare Softwarebasis erleichtert die Identifizierung, Analyse und Behebung von Fehlern (Bugs).
-   **Anpassung an neue Anforderungen:** Geschäftsprozesse und Benutzerbedürfnisse können sich ändern. Wartbare Software lässt sich einfacher an diese neuen Anforderungen anpassen.
-   **Implementierung von Erweiterungen:** Das Hinzufügen neuer Funktionen und Features ist in einer wartbaren Codebasis weniger aufwendig und risikoreich.
-   **Technologische Weiterentwicklung:** Wartbarkeit ermöglicht es, die Software einfacher an neue Technologien und Plattformen anzupassen.
-   **Reduzierung von Wartungskosten:** Eine wartbare Software erfordert weniger Zeit und Ressourcen für Wartung und Weiterentwicklung, was langfristig Kosten spart.
-   **Erhöhung der Softwarequalität:** Durch einfache Wartung und Weiterentwicklung kann die Gesamtqualität der Software kontinuierlich verbessert werden.

## Erfassung von Anforderungen bezüglich Wartbarkeit

Die Erfassung von Wartbarkeitsanforderungen ist oft weniger direkt als bei funktionalen Anforderungen. Es geht darum, Prinzipien und Qualitätsmerkmale festzulegen, die die zukünftige Wartung erleichtern sollen.

**Fragestellungen und Techniken zur Erfassung:**

1.  **Code-Qualitätsstandards:**
    -   Welche Programmierstandards und -richtlinien sollen eingehalten werden (z.B. Namenskonventionen, Formatierung)?
    -   Welche Metriken zur Code-Qualität sollen angestrebt werden (z.B. Zyklomatische Komplexität, Codezeilen pro Funktion)?
    -   Sollen statische Code-Analyse-Tools eingesetzt werden und welche Regeln sollen dabei beachtet werden?

2.  **Modularität und Entkopplung:**
    -   Soll das System in unabhängige Module zerlegt werden, die separat entwickelt, getestet und gewartet werden können?
    -   Wie stark sollen die Abhängigkeiten zwischen den Modulen minimiert werden (lose Kopplung)?

3.  **Dokumentation:**
    -   Welche Arten von Dokumentation sind erforderlich (z.B. Architekturübersicht, Designentscheidungen, API-Dokumentation, Kommentare im Code)?
    -   Wie detailliert soll die Dokumentation sein und wie soll sie aktuell gehalten werden?

4.  **Testbarkeit:**
    -   Soll die Software so entworfen sein, dass sie einfach und umfassend getestet werden kann (z.B. durch Unit-Tests, Integrationstests)?
    -   Welche Testabdeckung soll erreicht werden?

5.  **Verständlichkeit:**
    -   Soll der Code klar, verständlich und gut strukturiert sein, so dass auch neue Entwickler sich schnell einarbeiten können?
    -   Sollen aussagekräftige Namen für Variablen, Funktionen und Klassen verwendet werden?

6.  **Einfache Änderbarkeit:**
    -   Soll das Design Prinzipien wie das Open/Closed Principle (offen für Erweiterungen, geschlossen für Modifikationen) berücksichtigen?
    -   Soll die Wiederverwendung von Code gefördert werden (DRY - Don't Repeat Yourself)?

7.  **Konfigurierbarkeit:**
    -   Sollen bestimmte Aspekte des Systemverhaltens durch Konfigurationseinstellungen anpassbar sein, ohne Codeänderungen zu erfordern?

8.  **Wartungsprozesse:**
    -   Welche Prozesse und Tools sollen für die Wartung und das Änderungsmanagement eingesetzt werden (z.B. Versionskontrollsysteme, Bug-Tracking-Systeme)?

## Dokumentation von Wartbarkeitsanforderungen

Wartbarkeitsanforderungen werden oft als allgemeine Richtlinien und Prinzipien dokumentiert, die im Entwicklungsprozess befolgt werden sollen. Dies kann in Form von:

-   **Nicht-funktionalen Anforderungsspezifikationen:** Beschreibung der gewünschten Code-Qualitätsmerkmale, Dokumentationsstandards und Testanforderungen.
-   **Architektur- und Design-Dokumenten:** Erläuterung der gewählten Architekturmuster und Designprinzipien zur Förderung der Wartbarkeit.
-   **Coding Standards und Styleguides:** Detaillierte Richtlinien für die Programmierung.
-   **Teststrategien:** Beschreibung der Testansätze zur Sicherstellung der Wartbarkeit (z.B. automatisierte Tests, Code-Reviews).

**Beispiele für Wartbarkeitsanforderungen:**

-   "Der Code soll so strukturiert sein, dass neue Funktionen in Form von Modulen hinzugefügt werden können, ohne bestehende Kernfunktionen zu verändern."
-   "Alle öffentlichen APIs sollen umfassend dokumentiert sein, einschließlich der Parameter, Rückgabewerte und möglichen Fehlerfälle."
-   "Die durchschnittliche Zyklomatische Komplexität von Funktionen soll einen Wert von 10 nicht überschreiten."
-   "Es sollen Unit-Tests für alle kritischen Geschäftslogikkomponenten mit einer Codeabdeckung von mindestens 80% geschrieben werden."
-   "Die Namensgebung von Variablen, Funktionen und Klassen soll den etablierten Konventionen des Projekts folgen und deren Zweck klar widerspiegeln."

## Herausforderungen bei der Erfassung

-   **Abstraktheit:** Wartbarkeit ist ein abstraktes Konzept und schwer direkt messbar.
-   **Langfristige Perspektive:** Der Nutzen von Wartbarkeit zeigt sich erst im Laufe der Zeit bei der Wartung und Weiterentwicklung.
-   **Balance mit anderen Anforderungen:** Die Fokussierung auf Wartbarkeit kann in der initialen Entwicklungsphase zu einem höheren Aufwand führen.
-   **Subjektivität:** Was als "wartbar" empfunden wird, kann von der Erfahrung und dem Wissen der Entwickler abhängen.

## Fazit

Die Erfassung von Wartbarkeitsanforderungen ist entscheidend für die langfristige Gesundheit und Wirtschaftlichkeit einer Softwarelösung. Durch die Festlegung von Prinzipien für Code-Qualität, Modularität, Dokumentation und Testbarkeit kann sichergestellt werden, dass die Software einfach zu verstehen, zu ändern und zu erweitern ist. Dies reduziert den Wartungsaufwand, erleichtert die Anpassung an neue Anforderungen und trägt zur nachhaltigen Weiterentwicklung der Software bei. Eine bewusste Berücksichtigung der Wartbarkeit von Anfang an ist eine Investition in die Zukunft der Software.

## Links und Quellen

-   **Wikipedia - Wartbarkeit (Software):** [https://de.wikipedia.org/wiki/Wartbarkeit_(Software)](https://de.wikipedia.org/wiki/Wartbarkeit_(Software))
-   **ISO/IEC 25010 - Maintainability:** [https://www.iso.org/standard/35733.html](https://www.iso.org/standard/35733.html) (Englischsprachig - Definiert Merkmale der Maintainability)
-   **Clean Code: A Handbook of Agile Software Craftsmanship von Robert C. Martin:** (Ein Buch, das Prinzipien für gut wartbaren Code vermittelt)
-   **Refactoring: Improving the Design of Existing Code von Martin Fowler:** (Ein Buch über Techniken zur Verbesserung der Wartbarkeit durch Refactoring)
-   **Coding Standards und Style Guides (z.B. von Google, Airbnb):** (Beispiele für konkrete Richtlinien zur Code-Qualität)
