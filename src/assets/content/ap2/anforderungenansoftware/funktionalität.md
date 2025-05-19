# Programmieren von Softwarelösungen: Softwareanforderungen erfassen können - Funktionalität

## Einführung

Funktionale Anforderungen beschreiben, was die Software tun soll. Sie definieren die spezifischen Aktionen, Verhaltensweisen und Prozesse, die das System ausführen muss, um die Bedürfnisse der Benutzer und Stakeholder zu erfüllen. Die Erfassung klarer und präziser funktionaler Anforderungen ist die Grundlage für eine erfolgreiche Softwareentwicklung. Sie bilden die Basis für das Design, die Implementierung und das Testen der Software.

## Bedeutung der Funktionalität

-   **Erfüllung der Benutzerbedürfnisse:** Funktionale Anforderungen stellen sicher, dass die Software die Aufgaben und Ziele der Benutzer unterstützt.
-   **Grundlage für die Entwicklung:** Sie dienen als detaillierte Speifikation für die Entwickler, um die benötigten Features und Funktionen zu implementieren.
-   **Basis für das Testen:** Funktionale Anforderungen sind die Grundlage für die Erstellung von Testfällen, um sicherzustellen, dass die Software wie erwartet funktioniert.
-   **Abstimmung zwischen Stakeholdern:** Eine klare Definition der Funktionalität hilft, ein gemeinsames Verständnis zwischen allen Beteiligten (Benutzern, Entwicklern, Managern etc.) zu schaffen.
-   **Umfangskontrolle:** Funktionale Anforderungen definieren den Umfang des Projekts und helfen, Feature Creep (ungewolltes Hinzufügen von Funktionen) zu vermeiden.

## Erfassung von Funktionalen Anforderungen

Die Erfassung funktionaler Anforderungen ist ein iterativer Prozess, der verschiedene Techniken und die Zusammenarbeit mit den Stakeholdern erfordert.

**Fragestellungen und Techniken zur Erfassung:**

1.  **Identifizierung von Benutzern und Stakeholdern:**
    -   Wer sind die Hauptbenutzer der Software?
    -   Welche anderen Stakeholder (z.B. Manager, Administratoren, andere Systeme) haben Anforderungen an die Software?

2.  **Erhebung von Benutzerbedürfnissen:**
    -   Welche Aufgaben müssen die Benutzer mit der Software erledigen können?
    -   Welche Probleme soll die Software für die Benutzer lösen?
    -   Welche Ziele sollen die Benutzer mit der Software erreichen?

3.  **Nutzung von Anwendungsfällen (Use Cases):**
    -   Beschreiben Sie die Interaktionen zwischen Benutzern und dem System, um ein bestimmtes Ziel zu erreichen.
    -   Ein Use Case umfasst typischerweise: einen Titel, den Hauptakteur, Vorbedingungen, den Hauptablauf, alternative Abläufe und Nachbedingungen.

4.  **Erstellung von Benutzergeschichten (User Stories):**
    -   Formulieren Sie Anforderungen aus der Perspektive des Endbenutzers in einem einfachen Format: "Als [Benutzertyp] möchte ich [Ziel], damit [Grund]."
    -   User Stories eignen sich gut für agile Entwicklungsmethoden und fördern die Diskussion und das Verständnis der Benutzerbedürfnisse.

5.  **Durchführung von Interviews:**
    -   Führen Sie strukturierte oder unstrukturierte Gespräche mit Benutzern und Stakeholdern, um detaillierte Informationen über ihre Bedürfnisse und Erwartungen zu sammeln.

6.  **Organisation von Workshops und Brainstorming-Sitzungen:**
    -   Bringen Sie verschiedene Stakeholder zusammen, um gemeinsam Anforderungen zu identifizieren und zu diskutieren.

7.  **Analyse von Dokumenten und bestehenden Systemen:**
    -   Untersuchen Sie vorhandene Geschäftsprozesse, Handbücher, Berichte und Spezifikationen, um relevante funktionale Anforderungen zu extrahieren.
    -   Analysieren Sie bestehende Softwaresysteme, um deren Funktionalität zu verstehen und mögliche Verbesserungen oder neue Anforderungen zu identifizieren.

8.  **Erstellung von Prototypen und Mockups:**
    -   Visuelle Darstellungen der Benutzeroberfläche und der Interaktionen können helfen, funktionale Anforderungen zu konkretisieren und Feedback von Benutzern zu erhalten.

9.  **Nutzung von Szenarien:**
    -   Beschreiben Sie spezifische Nutzungsszenarien, um zu veranschaulichen, wie Benutzer die Software in verschiedenen Situationen einsetzen werden.

10. **Erfassung von Regeln und Constraints:**
    -   Identifizieren Sie Geschäftsregeln, Vorschriften oder technische Einschränkungen, die die Funktionalität der Software beeinflussen.

## Dokumentation von Funktionalen Anforderungen

Funktionale Anforderungen sollten klar, präzise, eindeutig, testbar und nachvollziehbar dokumentiert werden. Verschiedene Formate können verwendet werden, darunter:

-   **Anforderungsspezifikationen:** Detaillierte Beschreibungen jeder Funktion, einschließlich Ein- und Ausgaben, Verarbeitungsschritte und erwartetes Verhalten.
-   **Use-Case-Beschreibungen:** Ausführliche Darstellungen der einzelnen Anwendungsfälle.
-   **User Story Backlogs:** Listen von Benutzergeschichten, oft mit Akzeptanzkriterien, die definieren, wann eine Story als abgeschlossen gilt.
-   **Prototypen und Mockups:** Visuelle Hilfsmittel zur Veranschaulichung der Benutzeroberfläche und der Interaktionen.
-   **Datenflussdiagramme und Prozessmodelle:** Grafische Darstellungen der Datenverarbeitung und der Systemabläufe.

**Beispiele für Funktionale Anforderungen:**

-   "Das System soll es dem Benutzer ermöglichen, neue Kunden mit Name, Adresse und Kontaktdaten zu erfassen."
-   "Nachdem ein Benutzer ein Produkt in den Warenkorb gelegt hat, soll das System die Gesamtsumme inklusive Mehrwertsteuer berechnen."
-   "Administratoren sollen in der Lage sein, Benutzerkonten zu erstellen, zu bearbeiten und zu löschen."
-   "Das System soll automatisch eine Bestellbestätigung per E-Mail an den Kunden senden, nachdem eine Bestellung erfolgreich abgeschlossen wurde."

## Herausforderungen bei der Erfassung

-   **Unvollständigkeit:** Es ist oft schwierig, alle relevanten funktionalen Anforderungen vollständig zu erfassen.
-   **Widersprüchlichkeit:** Anforderungen aus verschiedenen Quellen können sich widersprechen.
-   **Unklarheit und Mehrdeutigkeit:** Schlecht formulierte Anforderungen können zu Missverständnissen führen.
-   **Veränderlichkeit:** Funktionale Anforderungen können sich im Laufe des Projekts ändern (Requirement Churn).
-   **Kommunikationsprobleme:** Unterschiedliche Stakeholder haben möglicherweise unterschiedliche Vorstellungen und Fachsprachen.

## Fazit

Die Erfassung funktionaler Anforderungen ist ein kritischer erster Schritt im Softwareentwicklungsprozess. Durch den Einsatz geeigneter Techniken und die enge Zusammenarbeit mit den Stakeholdern können klare, präzise und umfassende Anforderungen definiert werden, die die Grundlage für die erfolgreiche Entwicklung einer Softwarelösung bilden, die die Bedürfnisse der Benutzer erfüllt und die Projektziele erreicht. Eine sorgfältige Dokumentation der funktionalen Anforderungen ist unerlässlich für die Kommunikation, die Entwicklung und das Testen der Software.

## Links und Quellen

-   **Wikipedia - Funktionale Anforderung:** [https://de.wikipedia.org/wiki/Funktionale_Anforderung](https://de.wikipedia.org/wiki/Funktionale_Anforderung)
-   **Use Case - Wikipedia:** [https://de.wikipedia.org/wiki/Anwendungsfall](https://de.wikipedia.org/wiki/Anwendungsfall)
-   **User Story - Wikipedia:** [https://de.wikipedia.org/wiki/User_Story](https://de.wikipedia.org/wiki/User_Story)
-   **BABOK® Guide (Business Analysis Body of Knowledge):** (Ein umfassender Leitfaden für die Business-Analyse, der auch die Erfassung von Anforderungen behandelt)
-   **IREB® (International Requirements Engineering Board):** (Bietet Schulungen und Zertifizierungen im Bereich Requirements Engineering)
