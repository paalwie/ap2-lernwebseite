# Konzipieren und Umsetzen von kundenspezifischen Softwareanwendungen: Software-Entwicklungswerkzeuge aufgabenbezogen auswählen und anwenden können - Versionsverwaltung

## Einführung

Versionsverwaltungssysteme (Version Control Systems, VCS), oft auch als Quellcodeverwaltungssysteme (Source Code Management, SCM) bezeichnet, sind Werkzeuge, die Änderungen an Dateien über die Zeit verfolgen. Sie ermöglichen es, frühere Versionen von Dateien abzurufen, Änderungen zu vergleichen, zu verfolgen, wer wann welche Änderungen vorgenommen hat, und die Zusammenarbeit in Teams effizient zu gestalten. Für die moderne Softwareentwicklung ist die Nutzung eines Versionsverwaltungssystems unerlässlich.

## Grundlegende Konzepte der Versionsverwaltung

-   **Repository (Repo):** Ein zentraler Speicherort, der alle Versionen der verwalteten Dateien und die zugehörige Historie enthält.
-   **Commit:** Eine Momentaufnahme des Zustands der Dateien zu einem bestimmten Zeitpunkt. Jeder Commit ist mit einer Beschreibung (Commit-Nachricht) versehen, die die vorgenommenen Änderungen erläutert.
-   **Revision/Version:** Eine bestimmte Version einer Datei oder des gesamten Repositories zu einem bestimmten Zeitpunkt.
-   **Branch (Zweig):** Eine unabhängige Entwicklungslinie, die es ermöglicht, neue Features zu entwickeln oder Fehler zu beheben, ohne die Hauptentwicklungslinie (oft als `main` oder `master` bezeichnet) zu stören.
-   **Merge (Zusammenführen):** Der Prozess, Änderungen von einem Branch in einen anderen zu integrieren.
-   **Conflict (Konflikt):** Tritt auf, wenn unterschiedliche Änderungen an derselben Stelle in einer Datei in verschiedenen Branches vorgenommen wurden und das System diese nicht automatisch zusammenführen kann. Manuelle Konfliktlösung ist erforderlich.
-   **Tag:** Ein Label, das einer bestimmten Revision im Repository zugewiesen wird, um wichtige Punkte in der Historie zu kennzeichnen (z.B. Releases).
-   **Checkout:** Der Prozess, eine bestimmte Revision oder einen Branch des Repositories in das lokale Arbeitsverzeichnis zu kopieren.
-   **Pull:** Das Herunterladen von Änderungen aus einem Remote-Repository in das lokale Repository.
-   **Push:** Das Hochladen lokaler Commits in ein Remote-Repository.

## Beliebte Versionsverwaltungssysteme

Die beiden am weitesten verbreiteten verteilten Versionsverwaltungssysteme sind Git und Mercurial. Subversion (SVN) ist ein älteres, zentralisiertes System, das aber immer noch in einigen Projekten verwendet wird.

-   **Git:** Das aktuell populärste VCS, bekannt für seine Flexibilität, seine leistungsstarken Branching- und Merging-Funktionen und seine dezentrale Architektur. Es wird von großen Plattformen wie GitHub, GitLab und Bitbucket verwendet.
    -   **Link (Offizielle Git-Website):** [https://git-scm.com/](https://git-scm.com/)
    -   **Link (GitHub):** [https://github.com/](https://github.com/)
    -   **Link (GitLab):** [https://about.gitlab.com/](https://about.gitlab.com/)
    -   **Link (Bitbucket - Atlassian):** [https://bitbucket.org/](https://bitbucket.org/)

-   **Mercurial:** Ein weiteres verteiltes VCS, das oft als einfacher zu erlernen gilt als Git, aber ähnliche Funktionalitäten bietet. Es wird von einigen großen Projekten und Unternehmen eingesetzt.
    -   **Link (Offizielle Mercurial-Website):** [https://www.mercurial-scm.org/](https://www.mercurial-scm.org/)

-   **Subversion (SVN):** Ein zentralisiertes VCS, bei dem ein zentraler Server das Repository hostet und die Clients von dort aus arbeiten. Es ist einfacher im grundlegenden Konzept, bietet aber weniger Flexibilität bei Branching und Merging als verteilte Systeme.
    -   **Link (Offizielle Subversion-Website):** [https://subversion.apache.org/](https://subversion.apache.org/)

## Vorteile der Nutzung von Versionsverwaltung

-   **Verfolgung von Änderungen:** Jede Änderung am Code wird protokolliert, sodass man jederzeit nachvollziehen kann, wer wann was geändert hat.
-   **Wiederherstellung alter Versionen:** Ermöglicht das Zurückkehren zu früheren Versionen von Dateien oder des gesamten Projekts.
-   **Zusammenarbeit im Team:** Mehrere Entwickler können gleichzeitig an demselben Projekt arbeiten, ohne sich gegenseitig zu behindern.
-   **Branching und Merging:** Ermöglicht die parallele Entwicklung von Features oder die isolierte Behebung von Fehlern.
-   **Sicherung und Backup:** Das Repository dient als Backup des gesamten Projektcodes und seiner Historie.
-   **Audit Trail:** Bietet einen detaillierten Verlauf aller Änderungen, was für Audits und die Einhaltung von Vorschriften wichtig sein kann.
-   **Experimentieren ohne Risiko:** Entwickler können in Branches experimentieren, ohne die stabile Hauptlinie zu gefährden.

## Auswahl des richtigen Versionsverwaltungssystems

Die Wahl des richtigen VCS hängt von verschiedenen Faktoren ab:

-   **Teamgröße und -verteilung:** Für verteilte Teams sind verteilte VCS wie Git oder Mercurial in der Regel besser geeignet.
-   **Projektkomplexität:** Git bietet sehr mächtige Funktionen für komplexe Workflows.
-   **Benutzerfreundlichkeit:** Mercurial wird oft als anfängerfreundlicher angesehen als Git.
-   **Integration mit anderen Tools:** Überprüfe, welche VCS von den verwendeten IDEs, Build-Systemen und Kollaborationsplattformen gut unterstützt werden.
-   **Vorhandene Infrastruktur:** Wenn bereits ein zentraler Server vorhanden ist und die Präferenz für ein zentralisiertes System besteht, könnte SVN eine Option sein.
-   **Community und Ökosystem:** Git hat eine sehr große und aktive Community und ein riesiges Ökosystem an Tools und Ressourcen.

In den meisten modernen Softwareentwicklungsprojekten hat sich Git als De-facto-Standard etabliert.

## Anwendung von Versionsverwaltung im Entwicklungsprozess

Die grundlegende Nutzung eines VCS umfasst typischerweise folgende Schritte:

1.  **Initialisieren eines Repositories:** Erstellen eines neuen Repositories für das Projekt.
2.  **Hinzufügen von Dateien:** Hinzufügen der Projektdateien zum Repository.
3.  **Commit von Änderungen:** Speichern von Änderungen mit einer aussagekräftigen Commit-Nachricht.
4.  **Erstellen und Verwenden von Branches:** Anlegen von Branches für neue Features oder Fehlerbehebungen.
5.  **Mergen von Branches:** Integrieren von Änderungen aus einem Branch in einen anderen.
6.  **Verwenden von Remote-Repositories:** Synchronisieren von lokalen Änderungen mit einem zentralen Repository (z.B. auf GitHub, GitLab, Bitbucket).
7.  **Konfliktlösung:** Manuelles Beheben von Konflikten, wenn das automatische Mergen fehlschlägt.
8.  **Verwenden von Tags:** Kennzeichnen wichtiger Releases.

## Fazit

Versionsverwaltungssysteme sind unverzichtbare Werkzeuge für die moderne Softwareentwicklung. Sie ermöglichen die effiziente Zusammenarbeit im Team, die Verfolgung und Verwaltung von Codeänderungen und die Wiederherstellung früherer Zustände. Die Wahl des richtigen VCS hängt von den spezifischen Anforderungen des Projekts und des Teams ab, wobei Git in den meisten Fällen die bevorzugte Option ist. Die effektive Nutzung eines VCS ist eine grundlegende Fähigkeit für jeden Softwareentwickler.

## Links und Quellen

-   **Version control - Wikipedia (Deutsch):** [https://de.wikipedia.org/wiki/Versionsverwaltung](https://de.wikipedia.org/wiki/Versionsverwaltung)
-   **Version control - Wikipedia (Englischsprachig):** [https://en.wikipedia.org/wiki/Version\_control](https://en.wikipedia.org/wiki/Version_control)
-   **Offizielle Websites und Dokumentationen von Git, Mercurial und Subversion.**
-   **Tutorials und Kurse zur Verwendung von Git (z.B. auf Atlassian Git Tutorial, Pro Git Buch).**
    -   **Link (Atlassian Git Tutorial):** [https://www.atlassian.com/git/tutorials](https://www.atlassian.com/git/tutorials)
    -   **Link (Pro Git Buch):** [https://git-scm.com/book/de/v2](https://git-scm.com/book/de/v2)
-   **Plattformen für die Zusammenarbeit mit Git (GitHub, GitLab, Bitbucket).**
-   **Artikel und Blogbeiträge zum Thema "Best Practices for Version Control".**

-----

> **Fehler gefunden?** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
