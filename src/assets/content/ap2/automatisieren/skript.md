# Programmieren von Softwarelösungen: Wiederkehrende Systemabläufe mithilfe von Skripten automatisieren und überwachen können - Skriptprogrammierung, z.B. Python

## Einführung

Neben der Shellprogrammierung bieten auch andere Skriptsprachen wie Python mächtige Möglichkeiten zur Automatisierung und Überwachung wiederkehrender Systemabläufe. Diese Sprachen zeichnen sich oft durch eine höhere Abstraktionsebene, umfangreiche Bibliotheken und eine flexiblere Syntax aus, was sie für eine breite Palette von Automatisierungsaufgaben geeignet macht.

## Python als Skriptsprache

Python ist eine interpretierte, objektorientierte und dynamisch typisierte Programmiersprache, die sich aufgrund ihrer einfachen Syntax, ihrer Vielseitigkeit und der großen Anzahl verfügbarer Bibliotheken großer Beliebtheit erfreut – auch im Bereich der Systemautomatisierung und -überwachung.

**Wichtige Merkmale von Python für die Skriptprogrammierung:**

-   **Einfache und gut lesbare Syntax:** Python legt Wert auf eine klare und prägnante Syntax, die das Schreiben und Lesen von Code erleichtert.
-   **Umfangreiche Standardbibliothek:** Python verfügt über eine breite Palette von Modulen in seiner Standardbibliothek, die viele gängige Aufgaben abdecken (z.B. Dateisystemoperationen, Netzwerkkommunikation, Textverarbeitung, Betriebssysteminteraktion).
-   **Großes Ökosystem an Drittanbieter-Bibliotheken:** Für nahezu jeden Anwendungsbereich gibt es spezialisierte Python-Bibliotheken (z.B. `psutil` für Systemüberwachung, `requests` für Webinteraktion, `paramiko` für SSH, `schedule` für zeitgesteuerte Ausführung).
-   **Plattformunabhängigkeit:** Python-Skripte können in der Regel ohne größere Änderungen auf verschiedenen Betriebssystemen (Windows, Linux, macOS) ausgeführt werden, sofern ein Python-Interpreter installiert ist.
-   **Integration mit anderen Technologien:** Python lässt sich gut in andere Systeme und Technologien integrieren.

**Beispiel eines einfachen Python-Skripts zur Überprüfung des Festplattenplatzes:**

```python
#!/usr/bin/env python3
import shutil

def check_disk_space(path, threshold_percent):
    """Überprüft den freien Festplattenplatz am angegebenen Pfad."""
    total, used, free = shutil.disk_usage(path)
    free_percent = (free / total) * 100
    if free_percent < threshold_percent:
        print(f"Warnung: Freier Speicherplatz auf {path} beträgt nur noch {free_percent:.2f}%!")
    else:
        print(f"Freier Speicherplatz auf {path} beträgt {free_percent:.2f}%.")

if __name__ == "__main__":
    path_to_check = "/"  # Hier den gewünschten Pfad angeben
    warning_threshold = 20  # Warnen, wenn weniger als 20% frei sind
    check_disk_space(path_to_check, warning_threshold)
```

## Automatisierung wiederkehrender Systemabläufe mit Python

Python eignet sich für eine breite Palette von Automatisierungsaufgaben, die über die Möglichkeiten reiner Shell-Skripte hinausgehen können:

-   **Komplexe Datenverarbeitung:** Python ist stark in der Verarbeitung strukturierter Daten (z.B. CSV, JSON, XML) und kann komplexe Transformationen und Analysen durchführen.
-   **Web-Automatisierung:** Bibliotheken wie `requests` und `Beautiful Soup` ermöglichen die Interaktion mit Webseiten und APIs zur Automatisierung von Aufgaben wie dem Abrufen von Daten oder dem Ausführen von Aktionen.
-   **Netzwerkautomatisierung:** Bibliotheken wie `paramiko` (für SSH und SFTP) und `netmiko` (für Netzwerkgeräte) ermöglichen die Automatisierung von Aufgaben auf Netzwerkgeräten.
-   **Cloud-Automatisierung:** Es gibt spezielle Python-Bibliotheken für die Interaktion mit verschiedenen Cloud-Plattformen (z.B. `boto3` für AWS, `google-cloud-python` für Google Cloud).
-   **GUI-Automatisierung:** Bibliotheken wie `pyautogui` ermöglichen die Steuerung von grafischen Benutzeroberflächen.

## Überwachung von Systemabläufen mit Python

Python ist ebenfalls ein nützliches Werkzeug für die Überwachung von Systemabläufen:

-   **Systemressourcenüberwachung:** Die `psutil`-Bibliothek ermöglicht den Zugriff auf Informationen über laufende Prozesse, Speichernutzung, CPU-Auslastung, Festplatten und Netzwerkschnittstellen.
-   **Logfile-Analyse:** Python kann verwendet werden, um Logdateien zu lesen, zu parsen und nach bestimmten Mustern oder Fehlermeldungen zu suchen.
-   **Erstellung von Überwachungstools:** Mit Python lassen sich eigene Überwachungsskripte oder sogar einfache Überwachungstools mit Benachrichtigungsfunktionen (z.B. E-Mail, Slack) erstellen.
-   **Integration mit Überwachungssystemen:** Python-Skripte können Daten für größere Überwachungssysteme (z.B. Prometheus, Grafana) sammeln und bereitstellen.

## Planung und Ausführung von Python-Skripten

Ähnlich wie Shell-Skripte können Python-Skripte mithilfe von Task-Schedulern (z.B. `cron`, Aufgabenplanung) zu bestimmten Zeiten oder Ereignissen ausgeführt werden. Die `schedule`-Bibliothek in Python bietet auch eine Möglichkeit, zeitgesteuerte Aufgaben direkt im Python-Code zu definieren.

## Vorteile der Skriptprogrammierung mit Python für die Automatisierung und Überwachung

-   **Hohe Lesbarkeit und Wartbarkeit:** Die klare Syntax von Python erleichtert das Schreiben und Pflegen von Automatisierungsskripten.
-   **Vielseitigkeit:** Python ist für eine breite Palette von Automatisierungsaufgaben geeignet.
-   **Umfangreiches Bibliotheken-Ökosystem:** Für fast jede Aufgabe gibt es eine passende Bibliothek.
-   **Plattformunabhängigkeit:** Skripte können auf verschiedenen Betriebssystemen ausgeführt werden.
-   **Gute Integration:** Python lässt sich gut in andere Systeme und Technologien integrieren.

## Fazit

Die Skriptprogrammierung mit Sprachen wie Python bietet eine flexible und mächtige Alternative oder Ergänzung zur Shellprogrammierung für die Automatisierung und Überwachung wiederkehrender Systemabläufe. Die einfache Syntax, die umfangreichen Bibliotheken und die Plattformunabhängigkeit von Python machen es zu einem idealen Werkzeug für eine Vielzahl von Automatisierungsaufgaben, von einfachen Systemwartungsskripten bis hin zu komplexen Integrations- und Überwachungslösungen.

-----

> **Fehler gefunden?:** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.

