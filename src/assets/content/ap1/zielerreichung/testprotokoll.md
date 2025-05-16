# Testprotokolle im QM-Prozess

## Einführung

Testprotokolle sind detaillierte Aufzeichnungen der durchgeführten Softwaretests. Sie dokumentieren den Ablauf, die Ergebnisse und die Bewertung jedes einzelnen Tests. Gut geführte Testprotokolle sind unerlässlich für die Qualitätssicherung, da sie die Nachvollziehbarkeit der Testaktivitäten gewährleisten, den Fortschritt der Tests verfolgen und die Grundlage für die Bewertung der Zielerreichung im QM-Prozess bilden.

## Grundlagen

**Bedeutung von Testprotokollen:**

- **Nachweis der Testdurchführung:** Testprotokolle dienen als formaler Nachweis dafür, dass die geplanten Tests durchgeführt wurden.
- **Dokumentation der Testergebnisse:** Sie halten fest, ob ein Testfall erfolgreich war (bestanden) oder fehlgeschlagen ist (nicht bestanden).
- **Identifizierung von Fehlern:** Fehlgeschlagene Testfälle weisen auf potenzielle Fehler (Bugs) in der Software hin. Die Protokolle enthalten oft Details, die bei der Fehleranalyse helfen.
- **Verfolgung des Testfortschritts:** Durch die Analyse der Testprotokolle lässt sich der Fortschritt des Testprojekts verfolgen und der Testabdeckungsgrad beurteilen.
- **Bewertung der Softwarequalität:** Die Zusammenfassung der Testergebnisse in den Protokollen liefert eine Grundlage für die Bewertung der erreichten Softwarequalität.
- **Unterstützung der Entscheidungsfindung:** Testprotokolle liefern wichtige Informationen für Entscheidungen über die Freigabe der Software oder die Notwendigkeit weiterer Testaktivitäten.
- **Auditierbarkeit und Compliance:** In regulierten Branchen sind detaillierte Testprotokolle oft erforderlich, um die Einhaltung von Standards und Vorschriften nachzuweisen.

**Inhalt eines typischen Testprotokolls:**

Ein umfassendes Testprotokoll enthält in der Regel die folgenden Informationen für jeden durchgeführten Testfall:

- **Testfall-ID:** Eine eindeutige Kennzeichnung des Testfalls zur einfachen Referenzierung.
- **Testfallbeschreibung:** Eine kurze Beschreibung des zu testenden Features oder Szenarios.
- **Testziele:** Die spezifischen Ziele, die mit diesem Testfall erreicht werden sollen.
- **Voraussetzungen:** Alle Bedingungen oder Daten, die vor der Durchführung des Tests erfüllt sein müssen (z.B. Testdaten, Systemkonfiguration).
- **Testschritte:** Eine detaillierte, schrittweise Anleitung zur Durchführung des Tests.
- **Erwartetes Ergebnis:** Das erwartete Verhalten oder der erwartete Output der Software nach Durchführung der Testschritte.
- **Tatsächliches Ergebnis:** Die tatsächlich beobachteten Ergebnisse während der Testdurchführung.
- **Status:** Das Ergebnis des Tests (bestanden/fehlgeschlagen). Bei Fehlschlägen sollte ein Verweis auf einen Fehlerbericht oder eine detaillierte Fehlerbeschreibung enthalten sein.
- **Tester:** Die Person, die den Test durchgeführt hat.
- **Testdatum und -zeit:** Der Zeitpunkt der Testdurchführung.
- **Testumgebung:** Informationen über die verwendete Hard- und Softwareumgebung (z.B. Betriebssystem, Browserversion, Datenbankversion).
- **Kommentare/Anmerkungen:** Zusätzliche Beobachtungen oder Informationen, die während des Tests relevant waren.

**Formate von Testprotokollen:**

Testprotokolle können in verschiedenen Formaten geführt werden:

- **Manuelle Protokolle:** Verwendung von Tabellenkalkulationsprogrammen (z.B. Excel) oder Textdokumenten. Dies ist für kleinere Projekte mit wenigen Testfällen praktikabel, kann aber bei größeren Projekten ineffizient sein.
- **Testmanagement-Tools:** Spezielle Software-Tools (z.B. Jira mit Testmanagement-Plugins, TestRail, Zephyr) bieten strukturierte Möglichkeiten zur Erstellung, Verwaltung und Auswertung von Testfällen und -protokollen. Diese Tools erleichtern die Zusammenarbeit, die Verfolgung des Testfortschritts und die Generierung von Berichten.

## Bedeutung für die Messung der Zielerreichung im QM-Prozess

Testprotokolle liefern die direkten Daten zur Messung der Zielerreichung in Bezug auf die Softwarequalität:

- **Anzahl der bestandenen/fehlgeschlagenen Tests:** Diese grundlegende Metrik gibt einen Überblick über den aktuellen Qualitätsstand. Ein hoher Anteil bestandener Tests deutet auf eine gute Qualität hin.
- **Fehlerquote:** Die Anzahl der gefundenen Fehler im Verhältnis zur Anzahl der durchgeführten Tests oder zur Größe der Software (z.B. Fehler pro Tausend Codezeilen). Eine sinkende Fehlerquote im Laufe der Testphasen kann ein Zeichen für eine verbesserte Softwarequalität sein.
- **Testabdeckungsgrad:** Die Protokolle können in Verbindung mit Informationen über die Testabdeckung (z.B. abgedeckte Anforderungen, Codeabdeckung) verwendet werden, um zu beurteilen, wie umfassend die Software getestet wurde.
- **Stabilität und Zuverlässigkeit:** Wiederholte erfolgreiche Tests in verschiedenen Umgebungen und unter verschiedenen Bedingungen deuten auf eine höhere Stabilität und Zuverlässigkeit hin, die in den Protokollen dokumentiert werden.
- **Erfüllung von Akzeptanzkriterien:** Testprotokolle zeigen, ob die definierten Akzeptanzkriterien (oft in Form von Testfällen abgebildet) erfüllt wurden.

**Analyse von Testprotokollen:**

Die systematische Analyse von Testprotokollen ermöglicht es,:

- **Qualitätstrends zu erkennen:** Eine Zunahme der Fehler in bestimmten Bereichen oder Phasen kann auf Probleme im Entwicklungsprozess hindeuten.
- **Risikobereiche zu identifizieren:** Bereiche mit vielen fehlgeschlagenen Tests oder hoher Fehlerdichte erfordern möglicherweise weitere Aufmerksamkeit.
- **Die Effektivität der Teststrategie zu bewerten:** Die Art und Anzahl der gefundenen Fehler können Aufschluss darüber geben, ob die gewählten Testmethoden effektiv sind.
- **Entscheidungen über die Softwarefreigabe zu treffen:** Die zusammenfassenden Ergebnisse der Testprotokolle sind eine wichtige Grundlage für die Entscheidung, ob die Software die Qualitätsanforderungen erfüllt und für die Freigabe bereit ist.

> **Hinweis:** Die Qualität der Testprotokolle selbst ist entscheidend für ihre Aussagekraft. Sie sollten präzise, vollständig und nachvollziehbar sein. Die Verwendung von Testmanagement-Tools kann die Effizienz und Qualität der Protokollierung verbessern.

## Beispiel oder Anwendungsfall

Ein Softwaretestteam führt funktionale Tests für ein neues Feature durch. Für jeden Testfall erstellen sie einen Eintrag in einem Testmanagement-Tool. Ein Eintrag enthält:

- **ID:** TC_005
- **Beschreibung:** Überprüfung der korrekten Berechnung des Rabatts für Premium-Kunden.
- **Schritte:**
    1. Benutzer meldet sich als Premium-Kunde an.
    2. Benutzer legt Artikel im Wert von 100€ in den Warenkorb.
    3. Benutzer geht zur Kasse.
- **Erwartetes Ergebnis:** Ein Rabatt von 10% wird auf den Gesamtbetrag angewendet, der angezeigte Endbetrag beträgt 90€.
- **Tatsächliches Ergebnis:** Der Endbetrag beträgt 90€.
- **Status:** Bestanden.

Ein anderer Testfall:

- **ID:** TC_006
- **Beschreibung:** Versuch, einen Gutscheincode einzugeben, der abgelaufen ist.
- **Schritte:**
    1. Benutzer legt einen Artikel in den Warenkorb.
    2. Benutzer geht zur Kasse.
    3. Benutzer gibt einen bekannten, abgelaufenen Gutscheincode ein.
    4. Benutzer klickt auf "Anwenden".
- **Erwartetes Ergebnis:** Eine Fehlermeldung wird angezeigt, die besagt, dass der Gutscheincode ungültig ist. Der Gesamtbetrag bleibt unverändert.
- **Tatsächliches Ergebnis:** Keine Fehlermeldung wird angezeigt, der Gutscheincode wird akzeptiert und der Gesamtbetrag reduziert.
- **Status:** Fehlgeschlagen.

Dieser fehlgeschlagene Testfall wird im Testprotokoll vermerkt und mit einem Fehlerbericht verknüpft, der detaillierte Informationen für die Entwickler zur Fehlerbehebung enthält. Am Ende der Testphase werden die Testprotokolle analysiert, um die Anzahl der bestandenen und fehlgeschlagenen Tests zu ermitteln und die Gesamtqualität des Features zu bewerten.

## Weiterführende Links & Quellen

  - [Test Log – A Complete Guide](https://www.softwaretestinghelp.com/test-log/) (Englischsprachige Ressource).
  - [How to Write Effective Test Cases](https://www.softwaretestinghelp.com/how-to-write-test-cases/) (Enthält Aspekte der Protokollierung).
  - [Best Practices for Test Management](https://www.qasymphony.com/blog/test-management-best-practices/) (Englischsprachige Ressource).
  - [Übersicht über Testmanagement-Tools](https://en.wikipedia.org/wiki/List_of_test_management_tools) (Englischsprachige Ressource).

-----

> **Fehler gefunden?:** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
