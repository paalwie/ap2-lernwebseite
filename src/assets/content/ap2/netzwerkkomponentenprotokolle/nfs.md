# Inbetriebnehmen von Speicherlösungen: Netzwerkkomponenten und -protokolle beschreiben können - NFS (Network File System)

## Einführung

NFS (Network File System) ist ein verteiltes Dateisystemprotokoll, das es Clients ermöglicht, über ein Netzwerk auf Dateien und Verzeichnisse auf einem Server zuzugreifen, so als wären sie lokal gespeichert. Es wurde ursprünglich von Sun Microsystems in den 1980er Jahren entwickelt und ist ein offener Standard, der auf verschiedenen Betriebssystemen implementiert ist, insbesondere in Unix- und Linux-Umgebungen. NFS ist ein wichtiger Baustein für die gemeinsame Nutzung von Daten in Netzwerken und spielt eine Rolle in verschiedenen Speicherlösungen.

## Beschreibung von NFS

NFS basiert auf dem Client-Server-Modell. Ein NFS-Server stellt Dateisysteme oder Teile davon (Exports) für Clients im Netzwerk bereit. NFS-Clients mounten diese Exports und können dann auf die darin enthaltenen Dateien und Verzeichnisse zugreifen.

**Schlüsselkonzepte:**

-   **NFS Server:** Ein System, das Speicherressourcen freigibt und auf Anfragen von NFS-Clients reagiert.
-   **NFS Client:** Ein System, das eine Verbindung zu einem NFS-Server herstellt und auf die freigegebenen Ressourcen zugreift.
-   **Export (Share):** Ein Verzeichnis auf dem NFS-Server, das für Clients freigegeben wird.
-   **Mount:** Der Prozess, bei dem ein NFS-Client einen Export des Servers in sein lokales Dateisystem einhängt, wodurch der Inhalt des Exports lokal zugänglich wird.
-   **Remote Procedure Call (RPC):** NFS verwendet RPC als zugrunde liegenden Mechanismus für die Kommunikation zwischen Client und Server.

**Entwicklung und Versionen:**

Im Laufe der Zeit gab es mehrere Versionen von NFS, die wichtige Verbesserungen in Bezug auf Performance, Sicherheit und Funktionalität brachten:

-   **NFSv2:** Die ursprüngliche Version, die hauptsächlich UDP (User Datagram Protocol) für den Transport verwendete. Einfach, aber weniger zuverlässig und performant in stark ausgelasteten Netzwerken.
-   **NFSv3:** Einführung wichtiger Verbesserungen wie die Unterstützung von TCP (Transmission Control Protocol) als Transportprotokoll (für höhere Zuverlässigkeit), größere Dateigrößen und verbesserte Fehlerbehandlung. TCP ist heute die Standardeinstellung für NFSv3.
-   **NFSv4:** Eine umfassende Überarbeitung mit dem Ziel, ein zustandsbehaftetes Protokoll zu schaffen und die Sicherheit und Performance weiter zu verbessern. NFSv4.1 und NFSv4.2 folgten mit zusätzlichen Features wie Parallel NFS (pNFS) für verbesserte Skalierbarkeit und Performance in Clustern.

## Netzwerkprotokoll

NFS operiert auf der **Anwendungsschicht (Schicht 7 des OSI-Modells)**. Es nutzt die Dienste der **Transportschicht (Schicht 4)**, wobei **TCP** (Port 2049 ist der Standardport für NFSv3 und v4) heute die bevorzugte Wahl für Zuverlässigkeit und Performance ist. Ältere Versionen (NFSv2) verwendeten hauptsächlich **UDP**.

**Funktionsweise (vereinfacht):**

1.  Ein NFS-Client möchte auf einen Export eines NFS-Servers zugreifen.
2.  Der Client verwendet den `mount`-Befehl (oder ein grafisches Tool), um den Export des Servers in ein lokales Verzeichnis einzuhängen. Dabei wird die IP-Adresse oder der Hostname des Servers und der Pfad des Exports angegeben.
3.  Der Mount-Prozess beinhaltet die Kommunikation mit dem **Portmapper** (oder **rpcbind**) Dienst auf dem Server (Port 111), um die Portnummer des NFS-Dienstes zu ermitteln.
4.  Der Client und der Server etablieren eine Verbindung über TCP (oder UDP).
5.  Wenn der Client auf Dateien oder Verzeichnisse im gemounteten Dateisystem zugreift, werden NFS-Protokollanfragen (RPC-Aufrufe) über das Netzwerk an den Server gesendet.
6.  Der Server verarbeitet die Anfragen (z.B. Lesen, Schreiben, Auflisten von Verzeichnissen) und sendet die entsprechenden Antworten zurück an den Client.
7.  Für den Benutzer erscheint der Zugriff auf die Dateien und Verzeichnisse des gemounteten NFS-Exports wie der Zugriff auf lokale Dateien.

## Bedeutung für Speicherlösungen

NFS ist ein wichtiges Protokoll für die Bereitstellung von netzwerkbasiertem Speicher in verschiedenen Szenarien:

-   **Zentrale Dateiserver in Unix/Linux-Umgebungen:** Ermöglicht die gemeinsame Nutzung von Benutzerdaten, Anwendungsdateien und Konfigurationen.
-   **Gemeinsamer Speicher für Cluster-Umgebungen:** NFS kann als Basis für gemeinsam genutzte Dateisysteme in High-Performance-Computing (HPC) Clustern oder anderen verteilten Systemen dienen (insbesondere mit pNFS).
-   **Speicher für Virtualisierung:** NFS kann als Datastore für Hypervisoren wie VMware ESXi oder KVM verwendet werden, um virtuelle Maschinen-Images und Konfigurationsdateien zu speichern.
-   **Backup-Ziele:** NFS-Mounts können als Ziel für Backups von Servern und Workstations dienen.
-   **NAS-Systeme:** Viele NAS-Geräte unterstützen NFS neben SMB/CIFS, um auch Unix/Linux-Clients optimal bedienen zu können.

## Einsatzbereiche von NFS

-   **Universitäten und Forschungseinrichtungen:** Weit verbreitet in wissenschaftlichen Umgebungen mit heterogenen Betriebssystemen.
-   **Softwareentwicklungsumgebungen:** Gemeinsamer Zugriff auf Code-Repositories und Build-Artefakte.
-   **Webserver-Farmen:** Gemeinsamer Zugriff auf Webseiten-Inhalte.
-   **Medien- und Unterhaltungsproduktion:** Gemeinsamer Speicher für große Mediendateien.

## NFS im Vergleich zu SMB

| Merkmal         | NFS (Network File System)                      | SMB/CIFS                                      |
|-----------------|----------------------------------------------|-----------------------------------------------|
| Hauptsächlich genutzt in | Unix/Linux-Umgebungen (aber auch macOS, Windows) | Windows-Netzwerken (aber auch macOS, Linux) |
| Authentifizierung | Oft basiert auf Benutzer- und Gruppen-IDs (UID/GID), kann Kerberos nutzen | Benutzerbasiert (Domänenkonten, lokale Konten) |
| Sperrmechanismen | Gut unterstützt, kann aber in verschiedenen Versionen variieren | Robuste Unterstützung für Dateisperren        |
| Performance     | Kann in homogenen Unix/Linux-Umgebungen sehr gut sein, pNFS für hohe Skalierbarkeit | Kann in heterogenen Umgebungen gut sein       |
| Komplexität     | Kann für Endbenutzer etwas technischer sein   | Relativ einfach für Endbenutzer              |
| Protokollentwicklung | Offener Standard                               | Ursprünglich proprietär (Microsoft), aber gut dokumentiert |

## Sicherheitsaspekte von NFS

Die Sicherheit von NFS hat sich mit den neueren Versionen deutlich verbessert. Wichtige Sicherheitsmechanismen umfassen:

-   **Host-basierte Zugriffskontrolle:** Beschränkung des Zugriffs auf Exports basierend auf den IP-Adressen oder Hostnamen der Clients.
-   **Authentifizierung:** Unterstützung von AUTH\_SYS (basierend auf UIDs und GIDs), AUTH\_KRB5 (Kerberos) und anderen Mechanismen zur Authentifizierung von Clients. Die Verwendung von Kerberos wird für sicherere Umgebungen empfohlen.
-   **Verschlüsselung:** NFSv4 unterstützt die Verschlüsselung des Datenverkehrs (z.B. mit RPCSEC\_GSS mit Kerberos).
-   **Firewall-Konfiguration:** Es ist wichtig, die für NFS relevanten Ports (insbesondere 111 und 2049 für TCP/UDP) in der Firewall zu schützen.

## Fazit

NFS ist ein etabliertes und wichtiges Protokoll für die Dateifreigabe in Netzwerken, insbesondere in Unix- und Linux-basierten Umgebungen. Es ermöglicht Clients den transparenten Zugriff auf entfernte Dateisysteme und spielt eine bedeutende Rolle in verschiedenen Speicherlösungen, von zentralen Dateiservern bis hin zu gemeinsam genutztem Speicher für Virtualisierung und High-Performance Computing. Die neueren Versionen von NFS bieten verbesserte Performance, Skalierbarkeit und Sicherheitsfunktionen, was es zu einer robusten Wahl für die netzwerkbasierte Dateifreigabe macht.

## Links und Quellen

-   **Wikipedia - Network File System:** [https://de.wikipedia.org/wiki/Network_File_System](https://de.wikipedia.org/wiki/Network_File_System)
-   **RFC 1094 - NFS: Network File System protocol specification:** [https://datatracker.ietf.org/doc/rfc1094/](https://datatracker.ietf.org/doc/rfc1094/) (Englischsprachig - NFSv2 Spezifikation)
-   **RFC 1813 - NFS version 3 protocol specification:** [https://datatracker.ietf.org/doc/rfc1813/](https://datatracker.ietf.org/doc/rfc1813/) (Englischsprachig - NFSv3 Spezifikation)
-   **RFC 7530 - NFS version 4 protocol:** [https://datatracker.ietf.org/doc/rfc7530/](https://datatracker.ietf.org/doc/rfc7530/) (Englischsprachig - NFSv4 Spezifikation)
-   **Red Hat Enterprise Linux - NFS Documentation:** (Herstellerspezifische Dokumentationen bieten oft detaillierte Einblicke in die Konfiguration und Nutzung von NFS)
