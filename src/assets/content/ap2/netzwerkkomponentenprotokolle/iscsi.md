# Inbetriebnehmen von Speicherlösungen: Netzwerkkomponenten und -protokolle beschreiben können - iSCSI (Internet Small Computer System Interface)

## Einführung

iSCSI (Internet Small Computer System Interface) ist ein IP-basiertes Storage Networking Standard für die Verbindung von Speichergeräten über ein IP-Netzwerk. Es ermöglicht die Übertragung von SCSI-Befehlen über TCP/IP-Netzwerke und macht somit blockbasierte Speicherressourcen über Ethernet-Netzwerke zugänglich. iSCSI wird oft als kostengünstigere und flexiblere Alternative zu Fibre Channel (FC) für den Aufbau von Storage Area Networks (SANs) betrachtet.

## Beschreibung von iSCSI

iSCSI kapselt SCSI-Befehle in IP-Pakete, wodurch diese über Standard-Ethernet-Netzwerke übertragen werden können. Dies ermöglicht Servern (Initiatoren) den Zugriff auf Speichergeräte (Targets) so, als wären diese lokal angeschlossen.

**Schlüsselkomponenten von iSCSI:**

-   **iSCSI Initiator:** Ein Client (in der Regel ein Server) mit einer iSCSI-Initiator-Software oder Hardware (iSCSI HBA - Host Bus Adapter). Der Initiator sendet SCSI-Befehle an die iSCSI Targets.
-   **iSCSI Target:** Ein Server oder ein dediziertes Speichergerät (z.B. ein NAS-System oder ein Storage-Array), das Speicherressourcen (LUNs - Logical Unit Numbers) bereitstellt. Das Target empfängt die SCSI-Befehle und führt sie aus.
-   **IP-Netzwerk:** Das Standard-Ethernet-Netzwerk, über das die iSCSI-Kommunikation stattfindet. Dies kann ein dediziertes Storage-Netzwerk oder das gemeinsame LAN sein (obwohl für Performance und Sicherheit ein separates Netzwerk oder VLANs empfohlen werden).

## Netzwerkprotokoll

iSCSI ist ein **Transportprotokoll** der TCP/IP-Protokollfamilie und operiert auf der **Transportschicht (Schicht 4 des OSI-Modells)**. Es nutzt TCP (in der Regel die Ports 860 und 3260) für die zuverlässige Übertragung der SCSI-Befehle und Daten.

**Funktionsweise:**

1.  Der iSCSI-Initiator auf dem Server initiiert eine Verbindung (Session) zu einem iSCSI-Target auf dem Speichergerät.
2.  Sobald die Verbindung hergestellt ist, kann der Initiator SCSI-Befehle (z.B. Lesen, Schreiben) in IP-Pakete einkapseln und über das Ethernet-Netzwerk an das Target senden.
3.  Das iSCSI-Target empfängt die IP-Pakete, extrahiert die SCSI-Befehle und führt die entsprechenden Operationen auf den Speicherressourcen aus.
4.  Antworten und Daten werden auf ähnliche Weise vom Target zurück zum Initiator gesendet.
5.  Für das Betriebssystem des Servers erscheint der über iSCSI verbundene Speicher wie ein lokal angeschlossenes Laufwerk.

## Bedeutung für Speicherlösungen

iSCSI spielt eine wichtige Rolle bei der Implementierung von flexiblen und skalierbaren Speicherlösungen:

-   **Konsolidierung von Speicher:** Ermöglicht die Zentralisierung von Speicherressourcen und die Bereitstellung von Speicherplatz für mehrere Server über das Netzwerk.
-   **Kosteneffizienz:** Nutzt die vorhandene Ethernet-Infrastruktur, was die Notwendigkeit teurer Fibre Channel-Hardware (Switches, HBAs) reduziert.
-   **Flexibilität und Skalierbarkeit:** Ermöglicht die einfache Erweiterung der Speicherkapazität und die Anbindung neuer Server an das SAN.
-   **Kompatibilität:** Wird von den meisten gängigen Betriebssystemen und Virtualisierungsplattformen unterstützt.
-   **Größere Distanzen:** Im Gegensatz zu direkt angeschlossenem Speicher oder Fibre Channel können iSCSI-Verbindungen über größere Distanzen (LAN, WAN) realisiert werden.

## Einsatzbereiche von iSCSI

-   **Storage Area Networks (SANs) für kleine und mittelständische Unternehmen (KMUs):** Bietet eine kostengünstige SAN-Alternative zu Fibre Channel.
-   **Virtualisierungsumgebungen:** Bereitstellung von gemeinsam genutztem Speicher für virtuelle Maschinen (VMware, Hyper-V).
-   **Backup und Disaster Recovery:** Nutzung von iSCSI für die Replikation von Daten zu externen Standorten.
-   **Datenbanken und Applikationen:** Bereitstellung von hochverfügbarem und performantem Speicher für geschäftskritische Anwendungen.

## iSCSI im Vergleich zu Fibre Channel (FC)

| Merkmal         | iSCSI (Internet SCSI)                            | Fibre Channel (FC)                               |
|-----------------|-------------------------------------------------|-------------------------------------------------|
| Netzwerk        | IP/Ethernet                                     | Dediziertes Fibre Channel Netzwerk               |
| Protokoll       | SCSI über TCP/IP                                | FCP (SCSI über Fibre Channel)                   |
| Hardware        | Standard Ethernet NICs/Switches, iSCSI HBAs       | Spezielle FC HBAs und FC Switches                |
| Kosten          | In der Regel kostengünstiger                     | Höhere Kosten für Hardware und Implementierung    |
| Performance     | Kann bei hoher Netzwerkauslastung variieren     | Hohe, deterministische Performance, niedrige Latenz |
| Komplexität     | Einfacher zu implementieren und zu verwalten      | Komplexere Einrichtung und Verwaltung            |
| Distanz         | Größere Distanzen über IP möglich                | Begrenzte Distanzen (Glasfaser)                   |
| Anwendungsfälle | KMUs, Virtualisierung, Backup, weniger I/O-kritisch | Enterprise, kritische Anwendungen, hohe I/O-Last |

## Best Practices für iSCSI

-   **Dediziertes Netzwerk oder VLANs:** Um Performance-Einbußen und Sicherheitsrisiken zu minimieren, wird die Verwendung eines separaten Netzwerks oder VLANs für iSCSI-Traffic empfohlen.
-   **Jumbo Frames:** Die Aktivierung von Jumbo Frames (größere Ethernet-Pakete) kann den Overhead reduzieren und die Performance verbessern.
-   **Multipathing:** Die Verwendung von mehreren Netzwerkpfaden zwischen Initiatoren und Targets (MPIO - Multipath I/O) erhöht die Verfügbarkeit und die Performance.
-   **iSCSI HBAs:** Für anspruchsvolle Workloads können Hardware-basierte iSCSI HBAs die CPU-Last auf den Servern reduzieren und die Performance steigern.
-   **Sicherheit:** Implementierung von Sicherheitsmaßnahmen wie CHAP (Challenge-Handshake Authentication Protocol) zur Authentifizierung von Initiatoren und Targets sowie die Nutzung von IPsec zur Verschlüsselung des iSCSI-Traffics.

## Fazit

iSCSI ist ein flexibles und kosteneffizientes Protokoll, das blockbasierten Speicherzugriff über Standard-IP-Netzwerke ermöglicht. Es ist eine wichtige Technologie für den Aufbau von SANs, insbesondere in Umgebungen, in denen die Kosten eine größere Rolle spielen als die absolute Spitzenperformance von Fibre Channel. Durch die Nutzung der vorhandenen Ethernet-Infrastruktur bietet iSCSI eine attraktive Möglichkeit, zentrale Speicherlösungen bereitzustellen und die Speichernutzung zu optimieren.

## Links und Quellen

-   **(Siehe vorherige Links zu SAN und Netzwerkprotokollen)**
-   **iSCSI - Wikipedia:** [https://de.wikipedia.org/wiki/ISCSI](https://de.wikipedia.org/wiki/ISCSI)
-   **RFC 7143 - Internet Small Computer Systems Interface (iSCSI):** [https://datatracker.ietf.org/doc/rfc7143/](https://datatracker.ietf.org/doc/rfc7143/) (Englischsprachig - technische Spezifikation)
-   **SNIA (Storage Networking Industry Association) - iSCSI Tutorial:** [https://www.snia.org/educational-library/iscsi-tutorial](https://www.snia.org/educational-library/iscsi-tutorial) (Englischsprachig)
-   **Dell Technologies - iSCSI Implementation Guide:** (Spezifische Implementierungsleitfäden von Herstellern können wertvolle Einblicke geben)
