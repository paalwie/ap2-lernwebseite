# Versionsmanagement des Quellcodes

## Einführung

Versionsmanagement (auch bekannt als Quellcodeverwaltung oder Revision Control) ist ein System, das Änderungen an Dateien über die Zeit aufzeichnet, sodass du später bestimmte Versionen wieder aufrufen kannst. In der Softwareentwicklung ist es unerlässlich, um den Überblick über Modifikationen am Quellcode zu behalten, die Zusammenarbeit im Team zu erleichtern und die Möglichkeit zu haben, bei Fehlern zu früheren, stabilen Zuständen zurückzukehren. Es spielt eine zentrale Rolle beim Erkennen, Analysieren und Beheben von Fehlern.

## Grundlagen

Ein Versionsmanagementsystem (VCS) funktioniert typischerweise, indem es ein Repository (eine Art Datenbank) verwaltet, in dem alle Änderungen an den verfolgten Dateien gespeichert werden. Die wichtigsten Konzepte sind:

- **Repository:** Der zentrale Speicherort für alle Versionen der Dateien und der zugehörigen Historie.
- **Commit:** Eine Operation, bei der die aktuellen Änderungen an den Dateien im Repository gespeichert werden, zusammen mit einer beschreibenden Nachricht, die die Änderungen erläutert.
- **Version/Revision:** Jeder Commit stellt eine neue Version oder Revision des Projekts dar.
- **Branch (Zweig):** Eine unabhängige Entwicklungslinie, die von der Hauptlinie (oft als "main" oder "master" bezeichnet) abzweigt. Branches ermöglichen parallele Entwicklung von Features oder Fehlerbehebungen, ohne die Hauptlinie zu stören.
- **Merge (Zusammenführen):** Der Prozess, Änderungen von einem Branch in einen anderen zu integrieren (z.B. die Änderungen eines Feature-Branches zurück in die Hauptlinie).
- **Checkout:** Das Herunterladen einer bestimmten Version oder eines bestimmten Branches des Projekts aus dem Repository in die lokale Arbeitsumgebung.
- **Diff:** Ein Werkzeug, das die Unterschiede zwischen zwei Versionen einer Datei anzeigt.

**Wie Versionsmanagement beim Erkennen, Analysieren und Beheben von Fehlern hilft:**

- **Nachverfolgung von Änderungen:** Jede Codeänderung ist protokolliert, was es ermöglicht, genau zu sehen, wann und warum eine bestimmte Änderung vorgenommen wurde. Dies ist hilfreich, um die Ursache eines neu aufgetretenen Fehlers zu finden.
- **Identifizieren der Fehlerquelle:** Mithilfe von "git blame" (oder ähnlichen Funktionen in anderen VCS) kann man sehen, wer die letzte Änderung an einer bestimmten Codezeile vorgenommen hat, was Hinweise auf den potenziellen Ursprung eines Fehlers geben kann.
- **Vergleich von Versionen:** Mit "diff" können fehlerhafte Versionen mit vorherigen, funktionierenden Versionen verglichen werden, um die genauen Änderungen zu identifizieren, die den Fehler verursacht haben könnten.
- **Zurücksetzen auf frühere Versionen (Rollback):** Wenn ein Fehler durch eine kürzliche Änderung verursacht wurde, kann das Projekt einfach auf eine frühere, stabile Version zurückgesetzt werden, um den Fehler schnell zu beheben.
- **Isolierte Fehlerbehebung mit Branches:** Fehler können in einem separaten Branch behoben werden, ohne die Hauptentwicklungslinie zu beeinträchtigen. Nach erfolgreicher Behebung kann der Branch dann wieder in die Hauptlinie gemergt werden.
- **Zusammenarbeit bei der Fehlerbehebung:** Mehrere Entwickler können gleichzeitig an verschiedenen Aspekten der Fehlerbehebung arbeiten, indem sie Branches verwenden und ihre Änderungen später zusammenführen.

> **Hinweis:** Die konsequente Nutzung eines Versionsmanagementsystems ist eine Best Practice in der Softwareentwicklung und unerlässlich für die effiziente Fehlererkennung und -behebung.

## Beispiel oder Anwendungsfall

Ein Entwicklungsteam arbeitet gemeinsam an einer neuen Funktion für eine Webanwendung. Nach dem Zusammenführen der Änderungen eines Entwicklers in die Hauptlinie treten unerwartete Fehler auf.

1.  **Fehler melden:** Tester melden die aufgetretenen Fehler mit detaillierten Schritten zur Reproduktion.
2.  **Versionsgeschichte prüfen:** Die Entwickler verwenden das Versionsmanagementsystem (z.B. Git), um die Historie der Hauptlinie zu überprüfen und den Commit zu identifizieren, der die fehlerhaften Änderungen eingeführt hat.
3.  **Änderungen vergleichen:** Mithilfe von "git diff" vergleichen sie den fehlerhaften Commit mit der vorherigen Version, um die genauen Codeänderungen zu sehen, die möglicherweise den Fehler verursacht haben.
4.  **Branch zur Fehlerbehebung erstellen:** Ein Entwickler erstellt einen neuen Branch von der fehlerhaften Version, um die Fehler isoliert zu beheben.
5.  **Fehlerbehebung und Commit:** Der Entwickler analysiert den Code, behebt die Fehler und committet die Änderungen in den Fehlerbehebungs-Branch.
6.  **Testen im Branch:** Die behobenen Fehler werden im isolierten Branch gründlich getestet.
7.  **Merge und erneutes Testen:** Nach erfolgreichem Testen werden die Änderungen aus dem Fehlerbehebungs-Branch zurück in die Hauptlinie gemergt. Die Hauptlinie wird erneut getestet, um sicherzustellen, dass die Fehler behoben sind und keine neuen Probleme entstanden sind.

## Weiterführende Links & Quellen

- [Wikipedia: Versionsverwaltung](https://de.wikipedia.org/wiki/Versionsverwaltung)
- [Git-Dokumentation (offizielle Seite)](https://git-scm.com/book/de/v2) - Ein umfassendes Buch über Git, ein weit verbreitetes Versionsmanagementsystem.
- [GitHub Learning Lab](https://lab.github.com/) - Interaktive Tutorials zum Erlernen von Git und GitHub.
- [Atlassian Git Tutorial](https://www.atlassian.com/de/git/tutorials) - Gut verständliche Tutorials zu Git-Grundlagen und fortgeschrittenen Themen.
- [Vergleich verschiedener Versionskontrollsysteme](https://en.wikipedia.org/wiki/Comparison_of_version_control_software) - Eine Übersicht über verschiedene VCS (Englischsprachige Wikipedia-Seite).

---

> **Fehler gefunden?:** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
