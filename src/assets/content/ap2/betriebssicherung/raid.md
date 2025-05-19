# Maßnahmen zur Sicherstellung des Betriebes beurteilen können: Hardwaretechnisch (Redundanzen), RAID

## Einführung

Hardwareseitige Redundanzen sind ein wesentlicher Bestandteil der Strategien zur Sicherstellung des Betriebs kritischer IT-Systeme und zur Minimierung von Ausfallzeiten. Durch die Implementierung резервный Hardwarekomponenten können Organisationen die Auswirkungen von Hardwarefehlern reduzieren oder sogar vollständig eliminieren. Eine spezielle und weit verbreitete Form der Hardware-Redundanz im Bereich der Datenspeicherung ist RAID (Redundant Array of Independent Disks). Die Beurteilung der Eignung und Konfiguration von Hardware-Redundanzen und RAID-Systemen ist entscheidend für die Zuverlässigkeit und Verfügbarkeit von IT-Diensten.

## Hardwaretechnische Redundanzen (Allgemein)

Hardwareseitige Redundanz bedeutet, dass kritische Hardwarekomponenten eines IT-Systems in mehrfacher Ausführung vorhanden sind. Im Falle eines Ausfalls der primären Komponente kann automatisch oder manuell auf die резервный Komponente umgeschaltet werden, um den Betrieb aufrechtzuerhalten. Typische Beispiele für Hardware-Redundanzen sind:

-   **Redundante Netzteile:** Server und andere kritische Geräte verfügen oft über zwei oder mehr Netzteile. Fällt eines aus, übernimmt das oder die anderen die Stromversorgung.
-   **Redundante Lüfter:** Mehrere Lüfter sorgen für die Kühlung. Fällt einer aus, können die anderen die Wärmeabfuhr weiterhin gewährleisten.
-   **Redundante Netzwerkadapter:** Server können mit mehreren Netzwerkadaptern ausgestattet sein. Fällt einer aus, kann der Datenverkehr über einen anderen geleitet werden (Teaming/Bonding).
-   **Redundante Speichercontroller:** In Storage-Systemen sorgen резервные Controller dafür, dass der Zugriff auf die Daten auch bei einem Controllerausfall gewährleistet bleibt.
-   **Redundante Pfade:** Mehrfache Verbindungswege (z.B. Fibre Channel-Pfade zu Storage) stellen sicher, dass die Kommunikation auch bei einem Ausfall eines Pfades aufrechterhalten wird.
-   **Server-Clustering:** Mehrere Server arbeiten zusammen und übernehmen die Last und die Funktionen des ausgefallenen Servers (Failover-Cluster).

Die Beurteilung der Eignung von Hardware-Redundanzen erfordert die Identifizierung von Single Points of Failure (SPOFs) im System und die Implementierung von Redundanz für diese kritischen Komponenten, wobei die Kosten und die Komplexität der Implementierung gegen den potenziellen Nutzen (verringerte Ausfallzeiten) abgewogen werden müssen.

## RAID (Redundant Array of Independent Disks)

RAID ist eine Technologie, die mehrere physische Festplatten (oder SSDs) zu einem logischen Laufwerk zusammenfasst, um entweder die Leistung zu verbessern, die Datensicherheit (Redundanz) zu erhöhen oder beides zu erreichen. Es gibt verschiedene RAID-Level, die unterschiedliche Kombinationen aus Striping (Verteilung von Daten über mehrere Laufwerke zur Leistungssteigerung) und Parität (Speicherung von Redundanzinformationen zur Fehlerkorrektur) verwenden.

**Wichtige RAID-Level:**

-   **RAID 0 (Striping):** Daten werden gleichmäßig auf alle Festplatten verteilt. Dies erhöht die Lese- und Schreibleistung, bietet aber keine Redundanz. Ein Ausfall einer Festplatte führt zum Verlust aller Daten im Array.
-   **RAID 1 (Mirroring):** Daten werden identisch auf zwei oder mehr Festplatten geschrieben. Bietet hohe Datensicherheit, da bei einem Ausfall einer Festplatte die Daten auf der anderen weiterhin vorhanden sind. Die nutzbare Speicherkapazität ist die des kleinsten Laufwerks im Array.
-   **RAID 5 (Striping mit verteilter Parität):** Daten werden gestriped und Paritätsinformationen werden über alle Festplatten verteilt. Bietet eine gute Balance zwischen Leistung, Speichereffizienz und Fehlertoleranz (Ausfall einer Festplatte kann toleriert werden).
-   **RAID 6 (Striping mit doppelter verteilter Parität):** Ähnlich wie RAID 5, speichert aber zwei Sätze von Paritätsinformationen, wodurch der Ausfall von bis zu zwei Festplatten toleriert werden kann. Bietet höhere Datensicherheit als RAID 5, hat aber einen höheren Overhead beim Schreiben.
-   **RAID 10 (oder RAID 1+0, Mirroring und Striping):** Kombiniert RAID 1 und RAID 0. Es werden mehrere RAID 1-Spiegel erstellt und diese dann zu einem RAID 0-Verbund zusammengefasst. Bietet hohe Leistung und hohe Fehlertoleranz (Ausfall einer Festplatte pro Spiegelset kann toleriert werden).
-   **RAID 50 (oder RAID 5+0, Striping von RAID 5-Arrays):** Kombiniert RAID 5 und RAID 0. Mehrere RAID 5-Arrays werden zu einem RAID 0-Verbund zusammengefasst. Bietet höhere Leistung und Speichereffizienz als RAID 10, toleriert aber den Ausfall mehrerer Festplatten (abhängig davon, in welchem RAID 5-Array die Ausfälle auftreten).
-   **RAID 60 (oder RAID 6+0, Striping von RAID 6-Arrays):** Kombiniert RAID 6 und RAID 0. Mehrere RAID 6-Arrays werden zu einem RAID 0-Verbund zusammengefasst. Bietet hohe Fehlertoleranz und Leistung, ist aber komplex und teuer.

**Beurteilungskriterien für RAID-Systeme:**

Bei der Auswahl und Beurteilung eines RAID-Systems sind folgende Kriterien wichtig:

-   **Erforderliche Datensicherheit (Fehlertoleranz):** Wie viele gleichzeitige Festplattenausfälle muss das System tolerieren können, ohne Daten zu verlieren?
-   **Erforderliche Leistung:** Welche Lese- und Schreibleistung ist für die Anwendungen erforderlich?
-   **Speicherkapazität und -effizienz:** Wie viel nutzbarer Speicherplatz wird benötigt und wie effizient nutzt das RAID-Level die vorhandenen Festplattenkapazitäten?
-   **Kosten:** Die Kosten für die Festplatten, den RAID-Controller und die Implementierung variieren je nach RAID-Level und Anzahl der Laufwerke.
-   **Komplexität:** Einige RAID-Level sind komplexer zu implementieren und zu verwalten als andere.
-   **Wiederherstellungszeit (Rebuild-Zeit):** Nach dem Ausfall einer Festplatte muss das RAID-Array wiederhergestellt werden (Rebuild). Die Dauer dieses Prozesses hängt von der Größe des Arrays und dem RAID-Level ab. Während des Rebuilds kann die Leistung beeinträchtigt sein und das Risiko weiterer Ausfälle bestehen.
-   **RAID-Controller:** Die Qualität und Leistungsfähigkeit des RAID-Controllers (Hardware-RAID vs. Software-RAID) beeinflussen die Leistung und Zuverlässigkeit des RAID-Arrays. Hardware-RAID-Controller bieten in der Regel bessere Leistung und mehr Funktionen.
-   **Hot-Swap-Fähigkeit:** Die Möglichkeit, defekte Festplatten im laufenden Betrieb auszutauschen (Hot-Swap), minimiert die Ausfallzeiten.
-   **Überwachung und Alarmierung:** Das RAID-System sollte in der Lage sein, Ausfälle zu erkennen und Administratoren zu alarmieren.

## Maßnahmen zur Sicherstellung des Betriebs durch RAID

Ein korrekt konfiguriertes und überwachtes RAID-System trägt maßgeblich zur Sicherstellung des Betriebs bei:

-   **Schutz vor Datenverlust:** RAID-Level mit Redundanz (RAID 1, 5, 6, 10, 50, 60) ermöglichen den Weiterbetrieb und die Wiederherstellung der Daten nach dem Ausfall einer oder mehrerer Festplatten.
-   **Erhöhung der Lese- und Schreibleistung (in einigen Leveln):** RAID 0 und gestripte RAID-Level (5, 6, 10, 50, 60) können die Performance verbessern.
-   **Erhöhung der Systemverfügbarkeit:** Durch die Möglichkeit, Festplatten im laufenden Betrieb auszutauschen und Daten wiederherzustellen, werden Ausfallzeiten minimiert.

## Beurteilung der Eignung von RAID-Maßnahmen

Bei der Beurteilung der Eignung von RAID-Maßnahmen sind folgende Fragen relevant:

-   **Entspricht das gewählte RAID-Level den Anforderungen an Datensicherheit und Leistung der Anwendungen?**
-   **Ist die Anzahl der verwendeten Festplatten angemessen für das gewählte RAID-Level und die benötigte Speicherkapazität?**
-   **Wird ein Hardware-RAID-Controller eingesetzt, der die erforderliche Leistung und Zuverlässigkeit bietet?**
-   **Sind Hot-Swap-fähige Festplatten im Einsatz, um den Austausch im laufenden Betrieb zu ermöglichen?**
-   **Wird das RAID-System regelmäßig auf Fehler überwacht und gibt es eine automatische Alarmierung bei Problemen?**
-   **Sind резервные Festplatten (Hot Spares) vorhanden, um einen schnellen Wiederaufbau im Fehlerfall zu ermöglichen?**
-   **Wird der Rebuild-Prozess nach einem Festplattenausfall überwacht und sichergestellt, dass er erfolgreich abgeschlossen wird?**
-   **Sind die Daten auf dem RAID-System zusätzlich gesichert (Backup-Strategie), um vor katastrophalen Ausfällen oder logischen Fehlern zu schützen, die das gesamte RAID-Array betreffen könnten?**

## Fazit

Hardwareseitige Redundanzen und insbesondere RAID-Systeme sind entscheidende Maßnahmen zur Sicherstellung des Betriebs kritischer IT-Systeme. Die sorgfältige Auswahl der geeigneten Redundanzstrategien und RAID-Level unter Berücksichtigung der spezifischen Anforderungen an Verfügbarkeit, Leistung, Kosten und Komplexität ist unerlässlich. Eine regelmäßige Überwachung und Wartung dieser Systeme sind ebenso wichtig, um ihre Funktionsfähigkeit im Fehlerfall zu gewährleisten und die Risiken von Ausfallzeiten und Datenverlust zu minimieren. Es ist jedoch wichtig zu betonen, dass RAID kein Ersatz für eine umfassende Backup-Strategie ist.

## Links und Quellen

-   **Wikipedia - Redundant Array of Independent Disks:** [https://de.wikipedia.org/wiki/RAID](https://de.wikipedia.org/wiki/RAID)
-   **ComputerWeekly.com - RAID levels explained:** [https://www.computerweekly.com/feature/RAID-levels-explained-a-storage-tutorial](https://www.computerweekly.com/feature/RAID-levels-explained-a-storage-tutorial) (Englischsprachig)
-   **Synology - RAID-Typen auswählen:** [https://www.synology.com/de-de/support/RAID_calculator](https://www.synology.com/de-de/support/RAID_calculator)
-   **QNAP - RAID-Konfiguration:** [https://www.qnap.com/de-de/nas-diy/article/what-is-raid](https://www.qnap.com/de-de/nas-diy/article/what-is-raid)
-   **Dell Technologies - Understanding RAID:** [https://www.dell.com/support/kb/de-de/000132220/understanding-raid-redundant-array-of-independent-disks-concepts](https://www.dell.com/support/kb/de-de/000132220/understanding-raid-redundant-array-of-independent-disks-concepts)
