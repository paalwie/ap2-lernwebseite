# Inbetriebnehmen von Speicherlösungen: Netzwerkkomponenten und -protokolle beschreiben können - SAN (Storage Area Network)

## Einführung

Ein Storage Area Network (SAN) ist ein dediziertes, hochperformantes Netzwerk, das speziell für die Verbindung von Servern mit zentralisierten Speichergeräten wie Disk-Arrays und Tape-Libraries entwickelt wurde. Im Gegensatz zu einem NAS, das dateibasierten Zugriff über Standard-Netzwerkprotokolle bietet, ermöglicht ein SAN blockbasierten Zugriff auf die Speicherressourcen. Dies macht SANs ideal für Anwendungen, die hohe Bandbreiten, niedrige Latenzzeiten und eine hohe Verfügbarkeit erfordern, wie z.B. Datenbanken, Virtualisierung und transaktionsintensive Anwendungen.

## Beschreibung von SAN

Ein SAN ist eine komplexe Infrastruktur, die aus mehreren Schlüsselkomponenten besteht:

-   **Speichergeräte:** Dies können Disk-Arrays (JBOD, RAID), Solid-State-Arrays (SSA) oder Tape-Libraries sein, die die eigentlichen Daten speichern.
-   **SAN-Switches:** Spezielle Netzwerk-Switches, die für den Hochgeschwindigkeits-Datentransfer zwischen Servern und Speichergeräten optimiert sind. Diese Switches verwenden in der Regel Fibre Channel (FC) oder iSCSI-Protokolle.
-   **Host Bus Adapter (HBAs):** Schnittstellenkarten, die in Servern installiert werden und die Verbindung zum SAN-Netzwerk herstellen. Sie kapseln SCSI-Befehle in die SAN-Protokolle (z.B. FC oder iSCSI).
-   **Verbindungskabel:** Je nach verwendetem Protokoll kommen Glasfaserkabel (für Fibre Channel) oder Twisted-Pair-Kabel (für iSCSI über Ethernet) zum Einsatz.
-   **SAN-Management-Software:** Tools zur Konfiguration, Überwachung und Verwaltung der SAN-Infrastruktur, einschließlich Zoning (logische Partitionierung des SAN), Provisionierung von Speicher und Performance-Analyse.

## Netzwerkkomponente

Ein SAN ist ein separates Netzwerk, das parallel zum herkömmlichen Local Area Network (LAN) des Unternehmens betrieben wird. Es ist speziell für den Datentransport zwischen Servern und Speicher optimiert und nicht für den Endbenutzer-Zugriff auf Dateien gedacht (diese greifen in der Regel über das LAN auf die von den Servern bereitgestellten Daten zu).

**Einordnung im Netzwerk:**

-   SANs operieren auf der Blockebene, was bedeutet, dass Server direkten Zugriff auf einzelne Speicherblöcke haben, so als wären die Speichergeräte lokal angeschlossen (Direct-Attached Storage - DAS).
-   Die Kommunikation innerhalb des SAN erfolgt über dedizierte Protokolle und oft über eine eigene physische Infrastruktur (insbesondere bei Fibre Channel).
-   Server initiieren Speicherzugriffsanfragen über ihre HBAs, die über die SAN-Switches zu den entsprechenden Speichergeräten geleitet werden.

## Netzwerkprotokolle im SAN

Es gibt verschiedene Netzwerkprotokolle, die in SAN-Umgebungen verwendet werden:

**1. Fibre Channel (FC):**

-   Ein hochperformantes, zuverlässiges und latenzarmes Protokoll, das speziell für SANs entwickelt wurde.
-   Verwendet Glasfaserkabel für die Datenübertragung und bietet hohe Bandbreiten (bis zu 128 Gbit/s und mehr).
-   Das Fibre Channel Protocol (FCP) ist das SCSI-Interface-Protokoll, das über eine Fibre Channel-Verbindung genutzt wird und SCSI-Befehle für den Speicherzugriff überträgt.
-   FC-Switches bilden ein Fabric-Netzwerk, das eine flexible und skalierbare Verbindung zwischen Servern und Speicher ermöglicht.
-   Wird häufig in Enterprise-Umgebungen mit kritischen Anwendungen eingesetzt.

**2. iSCSI (Internet Small Computer System Interface):**

-   Ein IP-basiertes Protokoll, das SCSI-Befehle über Standard-Ethernet-Netzwerke transportiert.
-   Ermöglicht die Nutzung der vorhandenen Ethernet-Infrastruktur für den Aufbau eines SAN, was die Kosten im Vergleich zu Fibre Channel senken kann.
-   Benötigt in der Regel ein dediziertes Netzwerksegment oder VLANs (Virtual Local Area Networks), um Performance und Sicherheit zu gewährleisten.
-   Kann sowohl über Standard-Netzwerkkarten als auch über spezielle iSCSI Host Bus Adapter (iSCSI HBAs) betrieben werden, die die TCP/IP- und iSCSI-Verarbeitung beschleunigen.
-   Eine kostengünstigere Alternative zu Fibre Channel, die in kleinen bis mittelständischen Unternehmen weit verbreitet ist.

**3. Fibre Channel over Ethernet (FCoE):**

-   Ein Protokoll, das Fibre Channel-Frames in Ethernet-Pakete einkapselt, um FC über Ethernet-Netzwerke zu transportieren.
-   Ermöglicht die Konsolidierung von LAN- und SAN-Verkehr auf einer einzigen Ethernet-Infrastruktur (Converged Network Fabric).
-   Erfordert spezielle Converged Network Adapter (CNAs), die sowohl Ethernet- als auch Fibre Channel-Funktionalität bieten, sowie FCoE-fähige Switches.

**4. NVMe over Fabrics (NVMe-oF):**

-   Ein Protokoll, das das Non-Volatile Memory Express (NVMe)-Protokoll (entwickelt für schnelle SSDs) über ein Netzwerk erweitert.
-   Unterstützt verschiedene Netzwerk-Fabrics wie Fibre Channel, Ethernet (RoCE, iWARP) und InfiniBand.
-   Bietet extrem niedrige Latenzzeiten und hohe Bandbreiten und ist für moderne, performancelastige Anwendungen optimiert.

## Vorteile von SAN

-   **Hohe Performance und niedrige Latenz:** Ermöglicht schnellen und effizienten blockbasierten Zugriff auf Speicher.
-   **Zentrale Speicherverwaltung:** Vereinfacht die Verwaltung und Provisionierung von Speicherressourcen für mehrere Server.
-   **Hohe Verfügbarkeit und Redundanz:** SAN-Architekturen unterstützen redundante Pfade und Komponenten, um Ausfallzeiten zu minimieren.
-   **Skalierbarkeit:** Die Speicherkapazität und die Anzahl der verbundenen Server können flexibel erweitert werden.
-   **Verbessertes Backup und Disaster Recovery:** SANs erleichtern die Implementierung zentralisierter Backup- und Recovery-Strategien.

## Anwendungsbereiche von SAN

-   **Unternehmenskritische Anwendungen:** Datenbanken, ERP-Systeme, E-Mail-Server.
-   **Virtualisierungsumgebungen:** VMware, Hyper-V.
-   **Hochleistungsrechnen (HPC):** Anwendungen, die extrem hohe Bandbreiten und niedrige Latenzen erfordern.
-   **Medienproduktion und -bearbeitung:** Workflows mit großen unkomprimierten Dateien.

## Unterschied zwischen NAS und SAN

| Merkmal         | NAS (Network Attached Storage)                     | SAN (Storage Area Network)                         |
|-----------------|-----------------------------------------------------|-----------------------------------------------------|
| Zugriffsebene   | Dateibasiert (über Netzwerkfreigaben)               | Blockbasiert (direkter Zugriff auf Speicherblöcke) |
| Netzwerk        | Nutzt das bestehende IP-Netzwerk (LAN)              | Eigenes, dediziertes Netzwerk (oft Fibre Channel)   |
| Protokolle      | SMB/CIFS, NFS, AFP, FTP, HTTP/WebDAV              | Fibre Channel (FC), iSCSI, FCoE, NVMe-oF           |
| Performance     | In der Regel geringer als SAN                     | Hohe Performance und niedrige Latenz                |
| Komplexität     | Einfacher einzurichten und zu verwalten             | Komplexere Einrichtung und Verwaltung              |
| Kosten          | In der Regel kostengünstiger                       | Höhere Kosten für Hardware und Implementierung      |
| Anwendungsfälle | Dateifreigabe, Backup, Multimedia-Streaming        | Datenbanken, Virtualisierung, HPC, kritische Apps   |

## Fazit

Ein SAN ist ein dediziertes Hochgeschwindigkeitsnetzwerk, das Server mit zentralisierten Speichergeräten verbindet und blockbasierten Zugriff ermöglicht. Es unterscheidet sich grundlegend von einem NAS, das dateibasierten Zugriff über das IP-Netzwerk bietet. SANs sind entscheidend für Anwendungen, die hohe Performance, niedrige Latenz und hohe Verfügbarkeit erfordern und nutzen spezielle Netzwerkprotokolle wie Fibre Channel und iSCSI, um diese Anforderungen zu erfüllen.

## Links und Quellen

-   **Wikipedia - Storage Area Network:** [https://de.wikipedia.org/wiki/Storage_Area_Network](https://de.wikipedia.org/wiki/Storage_Area_Network)
-   **SNIA (Storage Networking Industry Association) - What is a SAN?:** [https://www.snia.org/education/storage_networking_primer/san/what_san](https://www.snia.org/education/storage_networking_primer/san/what_san) (Englischsprachig)
-   **Fibre Channel Industry Association (FCIA):** [https://fibrechannel.org/](https://fibrechannel.org/) (Englischsprachig)
-   **iSCSI - Wikipedia:** [https://de.wikipedia.org/wiki/ISCSI](https://de.wikipedia.org/wiki/ISCSI)
-   **(Siehe vorherige Links zu Netzwerkprotokollen)**
