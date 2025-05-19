# Schichtenmodelle, z.B. OSI, TCP/IP benennen und zuordnen können: TCP/UDP

## Einführung

Im Kontext der Schichtenmodelle OSI und TCP/IP sind TCP (Transmission Control Protocol) und UDP (User Datagram Protocol) zwei der wichtigsten Protokolle der Transportschicht (Layer 4). Sie ermöglichen die Ende-zu-Ende-Kommunikation zwischen Anwendungen, wobei sie unterschiedliche Ansätze hinsichtlich Zuverlässigkeit und Geschwindigkeit verfolgen.

## Grundlagen: OSI- und TCP/IP-Modell (Relevante Schichten)

**Das OSI-Modell (7 Schichten):**

1.  Anwendungsschicht (Application Layer)
2.  Darstellungsschicht (Presentation Layer)
3.  Sitzungsschicht (Session Layer)
4.  **Transportschicht (Transport Layer):** Stellt zuverlässige (TCP) oder unzuverlässige (UDP) Ende-zu-Ende-Datenübertragung sicher.
5.  Netzwerkschicht (Network Layer)
6.  Sicherungsschicht (Data Link Layer)
7.  Physikalische Schicht (Physical Layer)

**Das TCP/IP-Modell (4 Schichten):**

1.  Anwendungsschicht (Application Layer)
2.  **Transportschicht (Transport Layer):** Beinhaltet TCP und UDP für die Ende-zu-Ende-Kommunikation.
3.  Internetschicht (Internet Layer)
4.  Netzzugangsschicht (Network Access Layer)

## TCP (Transmission Control Protocol): Der zuverlässige Kurier

TCP ist ein verbindungsorientiertes Protokoll der Transportschicht, das eine zuverlässige und geordnete Übertragung von Daten zwischen Anwendungen gewährleistet.

**Zuordnung zum Schichtenmodell:**

-   **OSI-Modell:** Transportschicht (Layer 4)
-   **TCP/IP-Modell:** Transportschicht (Layer 4)

**Wichtige Eigenschaften von TCP:**

-   **Verbindungsorientiert:** Bevor Daten übertragen werden, wird eine Verbindung (ein "virtueller Strom") zwischen Sender und Empfänger aufgebaut (Three-Way-Handshake). Nach der Datenübertragung wird die Verbindung wieder abgebaut.
-   **Zuverlässige Übertragung:** TCP garantiert die zuverlässige Zustellung von Datenpaketen. Es verwendet Mechanismen wie:
    * **Sequenznummern:** Jedes Datenpaket erhält eine Sequenznummer, um die korrekte Reihenfolge sicherzustellen.
    * **Bestätigungen (Acknowledgements):** Der Empfänger bestätigt den erfolgreichen Empfang von Datenpaketen.
    * **Timeout und Retransmission:** Wenn eine Bestätigung nicht innerhalb einer bestimmten Zeit eintrifft, werden die Pakete erneut gesendet.
    * **Flusskontrolle (Flow Control):** TCP passt die Sendegeschwindigkeit an die Empfangskapazität des Empfängers an, um Überlastungen zu vermeiden.
    * **Staukontrolle (Congestion Control):** TCP reduziert die Sendegeschwindigkeit, wenn Netzwerkstaus erkannt werden.
-   **Geordnete Zustellung:** TCP stellt sicher, dass die Datenpakete in der gleichen Reihenfolge beim Empfänger ankommen, wie sie gesendet wurden.
-   **Verbindungsaufbau und -abbau:** Der Verbindungsaufbau erfolgt über einen SYN (Synchronize), SYN-ACK (Synchronize-Acknowledge), ACK (Acknowledge) Handshake. Der Verbindungsabbau erfolgt über FIN (Finish), ACK, FIN, ACK Nachrichten.
-   **Segmentierung:** TCP segmentiert die Anwendungsdaten in kleinere Einheiten (Segmente) für die Übertragung.
-   **Portnummern:** TCP verwendet Portnummern (zusammen mit IP-Adressen), um verschiedene Anwendungen auf einem Host zu identifizieren (z.B. Port 80 für HTTP, Port 21 für FTP).

**Anwendungsbeispiele für TCP:**

Webbrowsing (HTTP/HTTPS), E-Mail (SMTP, POP3, IMAP), Dateiübertragung (FTP, SFTP), SSH, Telnet.

## UDP (User Datagram Protocol): Der schnelle Briefbote

UDP ist ein verbindungsloses Protokoll der Transportschicht, das eine schnelle, aber unzuverlässige Übertragung von Datenpaketen (Datagrammen) ermöglicht.

**Zuordnung zum Schichtenmodell:**

-   **OSI-Modell:** Transportschicht (Layer 4)
-   **TCP/IP-Modell:** Transportschicht (Layer 4)

**Wichtige Eigenschaften von UDP:**

-   **Verbindungslos:** Es wird keine Verbindung zwischen Sender und Empfänger aufgebaut, bevor Daten übertragen werden.
-   **Unzuverlässige Übertragung:** UDP bietet keine Garantie für die Zustellung von Datenpaketen. Pakete können verloren gehen, dupliziert oder in falscher Reihenfolge ankommen. Es gibt keine Bestätigungen oder Wiederholungsmechanismen.
-   **Schnell und effizient:** Da UDP auf Overhead für Verbindungsmanagement, Zuverlässigkeit und Flusskontrolle verzichtet, ist es schneller und effizienter als TCP.
-   **Keine geordnete Zustellung:** UDP garantiert keine geordnete Zustellung der Datenpakete.
-   **Datagrammorientiert:** UDP überträgt Daten in unabhängigen Datagrammen.
-   **Portnummern:** Wie TCP verwendet auch UDP Portnummern zur Identifizierung von Anwendungen.

**Anwendungsbeispiele für UDP:**

Streaming (Video, Audio), Online-Spiele, VoIP (Voice over IP), DNS (Domain Name System), SNMP (Simple Network Management Protocol).

## Zusammenfassende Gegenüberstellung: TCP vs. UDP

| Merkmal           | TCP                                     | UDP                                       |
| :---------------- | :-------------------------------------- | :---------------------------------------- |
| Verbindung        | Verbindungsorientiert                   | Verbindungslos                            |
| Zuverlässigkeit   | Zuverlässig (Bestätigungen, Retransmission) | Unzuverlässig (keine Garantie)           |
| Reihenfolge       | Geordnete Zustellung                    | Keine garantierte Reihenfolge             |
| Geschwindigkeit     | Langsamer (aufgrund Overhead)           | Schneller (geringer Overhead)            |
| Overhead          | Höher (Header, Verbindungsmanagement)   | Niedriger (kleiner Header)                |
| Anwendungsfälle   | Web, E-Mail, Dateiübertragung           | Streaming, Spiele, VoIP, DNS, SNMP        |

## Fazit

TCP und UDP sind zwei grundlegende Protokolle der Transportschicht, die unterschiedliche Schwerpunkte setzen. TCP bietet eine zuverlässige und geordnete Datenübertragung und eignet sich für Anwendungen, bei denen Datenintegrität entscheidend ist. UDP hingegen priorisiert Geschwindigkeit und geringen Overhead und ist besser geeignet für Anwendungen, die kurze Verzögerungen erfordern und bei denen ein gelegentlicher Paketverlust tolerierbar ist. Das Verständnis der Unterschiede zwischen TCP und UDP ist essenziell für das Verständnis der Funktionsweise vieler Netzwerkprotokolle und Anwendungen.

## Links und Quellen

* **Wikipedia - Transmission Control Protocol:** [https://de.wikipedia.org/wiki/Transmission_Control_Protocol](https://de.wikipedia.org/wiki/Transmission_Control_Protocol)
* **Wikipedia - User Datagram Protocol:** [https://de.wikipedia.org/wiki/User_Datagram_Protocol](https://de.wikipedia.org/wiki/User_Datagram_Protocol)
* **RFC 793 - Transmission Control Protocol:** [https://datatracker.ietf.org/doc/html/rfc793](https://datatracker.ietf.org/doc/html/rfc793) (Die ursprüngliche TCP-Spezifikation - Englischsprachig)
* **RFC 768 - User Datagram Protocol:** [https://datatracker.ietf.org/doc/html/rfc768](https://datatracker.ietf.org/doc/html/rfc768) (Die ursprüngliche UDP-Spezifikation - Englischsprachig)
* **Cisco - TCP and UDP:** [https://www.cisco.com/c/en/us/support/docs/ip/transmission-control-protocol-tcp/26791-tcp-udp-ports.html](https://www.cisco.com/c/en/us/support/docs/ip/transmission-control-protocol-tcp/26791-tcp-udp-ports.html) (Englischsprachig)
* **Cloudflare - What are TCP and UDP?** [https://www.cloudflare.com/learning/tcp-udp/what-are-tcp-and-udp/](https://www.cloudflare.com/learning/tcp-udp/what-are-tcp-and-udp/) (Englischsprachig)
* **GeeksforGeeks - TCP vs UDP:** [https://www.geeksforgeeks.org/tcp-vs-udp/](https://www.geeksforgeeks.org/tcp-vs-udp/) (Englischsprachig)
