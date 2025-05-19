# Sicherstellen der Qualität von Softwareanwendungen: Grundfunktionalitäten einer Versionsverwaltung in ihrem Einsatz beschreiben und anwenden können - Branches, Pull, Push, Merge

## Einführung

Eine **Versionsverwaltung** (Version Control System, VCS) ist ein System, das Änderungen an Dateien über die Zeit aufzeichnet, sodass Sie später bestimmte Versionen wieder aufrufen können. Für die Softwareentwicklung ist sie unerlässlich, da sie die Zusammenarbeit im Team erleichtert, Änderungen nachverfolgt, das Zurücksetzen auf frühere Zustände ermöglicht und die Verwaltung verschiedener Entwicklungsstränge unterstützt. Zu den grundlegenden Funktionalitäten gehören das Arbeiten mit **Branches**, das Übertragen von Änderungen mit **Push** und **Pull** sowie das Zusammenführen von Änderungen mit **Merge**.

## 1. Branches (Zweige)

Ein **Branch** (Zweig) in der Versionsverwaltung ist eine unabhängige Linie der Entwicklung. Er ermöglicht es, neue Features zu entwickeln oder Fehler zu beheben, ohne die Hauptcodebasis (oft als `main` oder `master` bezeichnet) zu beeinflussen.

### Zweck von Branches

-   **Feature-Entwicklung:** Jedes neue Feature kann in einem eigenen Branch entwickelt werden, isoliert vom Hauptentwicklungszweig.
-   **Fehlerbehebung (Bugfixing):** Ein separater Branch kann erstellt werden, um einen Fehler zu beheben, ohne die laufende Entwicklung neuer Features zu stören.
-   **Experimentelle Entwicklung:** Branches ermöglichen das Ausprobieren neuer Ideen und Ansätze, ohne das Risiko einzugehen, den stabilen Code zu beschädigen.
-   **Release-Verwaltung:** Für jede Softwareversion kann ein eigener Release-Branch erstellt werden, um Hotfixes und Wartungsarbeiten für diese spezifische Version zu verwalten.

### Grundlegende Operationen mit Branches (am Beispiel von Git)

-   **Erstellen eines neuen Branch:**
    ```bash
    git checkout -b <name-des-neuen-branch>
    ```
    Dieser Befehl erstellt einen neuen Branch mit dem angegebenen Namen, basierend auf dem aktuellen Branch, und wechselt sofort zu diesem neuen Branch.

-   **Auflisten der vorhandenen Branches:**
    ```bash
    git branch
    ```
    Der aktuell aktive Branch wird typischerweise mit einem Sternchen (`*`) gekennzeichnet.

-   **Wechseln zu einem anderen Branch:**
    ```bash
    git checkout <name-des-branch>
    ```
    Dieser Befehl wechselt den Arbeitsbereich zum angegebenen Branch.

-   **Löschen eines Branch:**
    ```bash
    git branch -d <name-des-branch>
    ```
    Dieser Befehl löscht den angegebenen Branch, aber nur wenn die Änderungen in diesem Branch bereits in einen anderen Branch gemerged wurden. Um einen Branch auch dann zu löschen, wenn die Änderungen noch nicht gemerged wurden (was zu Datenverlust führen kann), verwendet man `-D` anstelle von `-d`.

## 2. Push

Der Befehl **Push** wird verwendet, um lokale Commits (Änderungen, die auf dem lokalen Rechner durchgeführt wurden) zu einem Remote-Repository (z.B. auf Plattformen wie GitHub, GitLab oder Bitbucket) hochzuladen. Dadurch werden die lokalen Änderungen für andere Teammitglieder sichtbar und in der zentralen Codebasis gespeichert.

### Zweck von Push

-   **Code-Sharing:** Ermöglicht es Entwicklern, ihre lokalen Änderungen mit dem Rest des Teams zu teilen.
-   **Backup:** Dient als Backup der lokalen Arbeit im Falle eines lokalen Festplattenausfalls.
-   **Kollaboration:** Erlaubt es Teammitgliedern, auf dem neuesten Stand des Projekts zu sein und auf den Änderungen anderer aufzubauen.

### Grundlegende Operationen mit Push (am Beispiel von Git)

-   **Pushen des aktuellen Branch zum Remote-Repository:**
    ```bash
    git push origin <name-des-aktuellen-branch>
    ```
    Hier ist `origin` der übliche Name für das Remote-Repository, von dem das lokale Repository geklont wurde. `<name-des-aktuellen-branch>` ist der Name des lokalen Branch, der hochgeladen werden soll.

-   **Erstmals einen lokalen Branch zum Remote-Repository pushen und ihn dort "tracken" (verfolgen):**
    ```bash
    git push -u origin <name-des-neuen-branch>
    ```
    Das Flag `-u` (oder `--set-upstream`) erstellt eine Verknüpfung zwischen dem lokalen und dem Remote-Branch, sodass zukünftige `git push`- oder `git pull`-Befehle ohne Angabe des Remote-Namens und des Branch-Namens ausgeführt werden können.

-   **Alle lokalen Branches zum Remote-Repository pushen (in der Regel nicht empfohlen):**
    ```bash
    git push --all origin
    ```

## 3. Pull

Der Befehl **Pull** wird verwendet, um Änderungen vom Remote-Repository in das lokale Repository herunterzuladen und automatisch in den aktuellen lokalen Branch zu integrieren (gemerged). Ein Pull ist im Wesentlichen eine Kombination aus zwei Operationen: `git fetch` (herunterladen der Änderungen vom Remote) und `git merge` (integrieren der heruntergeladenen Änderungen in den aktuellen lokalen Branch).

### Zweck von Pull

-   **Synchronisation:** Hält das lokale Repository auf dem neuesten Stand mit den Änderungen, die von anderen Teammitgliedern im Remote-Repository vorgenommen wurden.
-   **Integration:** Integriert die Änderungen anderer in den lokalen Arbeitsbereich, sodass auf der aktuellen Version des Codes aufgebaut werden kann.

### Grundlegende Operationen mit Pull (am Beispiel von Git)

-   **Pullen von Änderungen vom Remote-Repository in den aktuellen lokalen Branch:**
    ```bash
    git pull origin <name-des-remote-branch>
    ```
    Wenn der lokale Branch bereits mit einem Remote-Branch verknüpft ist (durch `git push -u`), kann der Branch-Name weggelassen werden:
    ```bash
    git pull origin
    ```
    oder einfach:
    ```bash
    git pull
    ```

-   **Rebasen anstelle von Mergen beim Pullen (fortgeschritten):**
    ```bash
    git pull --rebase origin <name-des-remote-branch>
    ```
    `--rebase` integriert die Remote-Änderungen, indem die lokalen Commits temporär "zurückgespult", die Remote-Änderungen angewendet und dann die lokalen Commits wieder aufgesetzt werden. Dies führt zu einer lineareren Commit-Historie, kann aber bei der Zusammenarbeit in Teams komplexer zu handhaben sein.

## 4. Merge (Zusammenführen)

Der Befehl **Merge** wird verwendet, um die Änderungen aus einem Branch in einen anderen zu integrieren. Typischerweise werden Feature-Branches nach erfolgreicher Entwicklung und Überprüfung in den Hauptentwicklungszweig (`main` oder `master`) oder in einen anderen Feature-Branch gemerged.

### Zweck von Merge

-   **Integration von Features:** Zusammenführen der in einem Feature-Branch entwickelten Funktionalität in die Hauptcodebasis.
-   **Zusammenführen von Bugfixes:** Integration von Fehlerbehebungen aus einem Bugfix-Branch in andere relevante Branches.
-   **Kombination von paralleler Entwicklung:** Zusammenführen von Änderungen, die in verschiedenen Branches parallel entwickelt wurden.

### Grundlegende Operationen mit Merge (am Beispiel von Git)

-   **Mergen eines anderen Branch in den aktuellen Branch:**
    Zuerst muss zum Ziel-Branch gewechselt werden:
    ```bash
    git checkout <ziel-branch>
    ```
    Dann wird der Quell-Branch in den aktuellen Branch gemerged:
    ```bash
    git merge <quell-branch>
    ```
    Git versucht, die Änderungen automatisch zusammenzuführen. Wenn es Konflikte gibt (Änderungen an derselben Zeile in beiden Branches), müssen diese manuell aufgelöst werden.

-   **Manuelle Konfliktlösung:** Wenn beim Merge Konflikte auftreten, müssen die betroffenen Dateien geöffnet und die gewünschten Änderungen ausgewählt und bearbeitet werden. Nach der Konfliktlösung müssen die geänderten Dateien mit `git add` zur Staging-Area hinzugefügt und der Merge mit `git commit` abgeschlossen werden.

-   **Merge Request/Pull Request (auf Plattformen wie GitHub, GitLab, Bitbucket):** In kollaborativen Umgebungen wird das Mergen oft über sogenannte Merge Requests (in GitLab und Bitbucket) oder Pull Requests (in GitHub) abgewickelt. Dies beinhaltet in der Regel einen Review-Prozess, bei dem andere Teammitglieder die Änderungen im Branch überprüfen, bevor sie in den Ziel-Branch gemerged werden.

## Workflow mit Branches, Pull, Push und Merge

Ein typischer Workflow könnte so aussehen:

1.  Ein Entwickler erstellt einen neuen Feature-Branch basierend auf dem Hauptentwicklungszweig: `git checkout -b feature-xyz`.
2.  Der Entwickler arbeitet an dem Feature und committet seine Änderungen lokal.
3.  Regelmäßig führt der Entwickler `git pull origin main` (oder den entsprechenden Haupt-Branch) aus, um seinen lokalen Feature-Branch mit den neuesten Änderungen im Remote-Repository zu synchronisieren und potenzielle Merge-Konflikte frühzeitig zu erkennen.
4.  Wenn das Feature fertig ist, pusht der Entwickler seinen lokalen Feature-Branch zum Remote-Repository: `git push origin feature-xyz`.
5.  Der Entwickler erstellt einen Pull Request (oder Merge Request) auf der Plattform (z.B. GitHub).
6.  Andere Teammitglieder reviewen den Code im Pull Request.
7.  Nach erfolgreichem Review wird der Pull Request in den Hauptentwicklungszweig gemerged.
8.  Der Hauptentwicklungszweig wird dann wieder in die lokalen Repositories der Teammitglieder gepullt: `git pull origin main`.
9.  Der Feature-Branch kann lokal und remote gelöscht werden, wenn er nicht mehr benötigt wird.

## Fazit

Branches, Pull, Push und Merge sind die grundlegenden Operationen, die die effiziente Zusammenarbeit und die Verwaltung von Codeänderungen in einer Versionsverwaltung ermöglichen. Das Verständnis und die korrekte Anwendung dieser Konzepte sind unerlässlich für jeden Softwareentwickler, um in Teams effektiv zu arbeiten, die Codequalität zu sichern und die Entwicklungsprozesse zu optimieren.

## Links und Quellen

-   **Version control - Wikipedia:** [https://de.wikipedia.org/wiki/Versionsverwaltung](https://de.wikipedia.org/wiki/Versionsverwaltung)
-   **Git - Wikipedia:** [https://de.wikipedia.org/wiki/Git](https://de.wikipedia.org/wiki/Git) (Ein weit verbreitetes verteiltes Versionsverwaltungssystem)
-   **Git documentation:** [https://git-scm.com/doc](https://git-scm.com/doc) (Offizielle englischsprachige Dokumentation)
-   **Git Branching - Atlassian Git Tutorial:** [https://www.atlassian.com/de/git/tutorials/using-branches](https://www.atlassian.com/de/git/tutorials/using-branches) (Deutschsprachiges Tutorial)
-   **Git Push - Atlassian Git Tutorial:** [https://www.atlassian.com/de/git/tutorials/syncing/git-push](https://www.atlassian.com/de/git/tutorials/syncing/git-push) (Deutschsprachiges Tutorial)
-   **Git Pull - Atlassian Git Tutorial:** [https://www.atlassian.com/de/git/tutorials/syncing/git-pull](https://www.atlassian.com/de/git/tutorials/syncing/git-pull) (Deutschsprachiges Tutorial)
-   **Git Merge - Atlassian Git Tutorial:** [https://www.atlassian.com/de/git/tutorials/using-branches/git-merge](https://www.atlassian.com/de/git/tutorials/using-branches/git-merge) (Deutschsprachiges Tutorial)
-   **GitHub:** [https://github.com/](https://github.com/) (Eine beliebte Plattform für die Versionsverwaltung mit Git)
-   **GitLab:** [https://about.gitlab.com/](https://about.gitlab.com/) (Eine weitere beliebte Plattform für die Versionsverwaltung mit Git)
-   **Bitbucket:** [https://bitbucket.org/](https://bitbucket.org/) (Eine weitere Plattform für die Versionsverwaltung mit Git)
-   **Artikel und Blogbeiträge zum Thema "Git Workflow" und "Versionsverwaltung Best Practices".**

-----

> **Fehler gefunden?** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
