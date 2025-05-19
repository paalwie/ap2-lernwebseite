# Schichtenmodelle, z.B. OSI, TCP/IP benennen und zuordnen können: ARP (Address Resolution Protocol)

## Einführung

Im Kontext von Netzwerken und den Schichtenmodellen OSI und TCP/IP spielt das Address Resolution Protocol (ARP) eine entscheidende Rolle für die Kommunikation innerhalb eines lokalen Netzwerks (LAN). Es ermöglicht die dynamische Zuordnung von logischen IP-Adressen (der Netzwerkschicht) zu physischen MAC-Adressen (der Sicherungsschicht).

## Grundlagen: OSI- und TCP/IP-Modell (Relevante Schichten)

**Das OSI-Modell (7 Schichten):**

1.  Anwendungsschicht (Application Layer)
2.  Darstellungsschicht (Presentation Layer)
3.  Sitzungsschicht (Session Layer)
4.  Transportschicht (Transport Layer)
5.  **Netzwerkschicht (Network Layer):** Verwaltet logische Adressen (IP-Adressen).
6.  **Sicherungsschicht (Data Link Layer):** Verwaltet physische Adressen (MAC-Adressen) und ist der Ort, an dem ARP operiert, um die Verbindung zur Netzwerkschicht herzustellen.
7.  Physikalische Schicht (Physical Layer)

**Das TCP/IP-Modell (4 Schichten):**

1.  Anwendungsschicht (Application Layer)
2.  Transportschicht (Transport Layer)
3.  **Internetschicht (Internet Layer):** Verwaltet logische Adressen (IP-Adressen).
4.  **Netzzugangsschicht (Network Access Layer):** Beinhaltet die Funktionalitäten der OSI-Schichten 1 und 2. ARP ist ein Protokoll dieser Schicht, das die Zuordnung zwischen IP- und MAC-Adressen ermöglicht.

## ARP (Address Resolution Protocol): Der Übersetzer zwischen IP und MAC

ARP ist ein Netzwerkprotokoll, das verwendet wird, um die MAC-Adresse zu einer bekannten IP-Adresse in einem lokalen Netzwerk zu ermitteln. Wenn ein Gerät in einem LAN mit einem anderen Gerät kommunizieren möchte, kennt es dessen IP-Adresse (aus der Netzwerkschicht). Für die tatsächliche Datenübertragung über das physische Medium (Sicherungsschicht) benötigt es jedoch die MAC-Adresse des Zielgeräts. Hier kommt ARP ins Spiel.

**Zuordnung zum Schichtenmodell:**

-   **OSI-Modell:** Vermittlung zwischen der Netzwerkschicht (3) und der Sicherungsschicht (2)
-   **TCP/IP-Modell:** Adressauflösung innerhalb der Netzzugangsschicht (4) in Verbindung mit der Internetschicht (3)

**Funktionsweise von ARP:**

1.  **ARP-Anfrage (ARP Request):** Wenn ein Gerät die MAC-Adresse zu einer bestimmten IP-Adresse in seinem lokalen Netzwerk benötigt, sendet es eine ARP-Anfrage als Broadcast-Nachricht an alle Geräte im LAN. Diese Anfrage enthält die Ziel-IP-Adresse und fragt, wer diese IP-Adresse besitzt und welche MAC-Adresse zu ihr gehört. Die Quell-MAC-Adresse und die Quell-IP-Adresse des sendenden Geräts sind ebenfalls in der Anfrage enthalten.
2.  **ARP-Antwort (ARP Reply):** Das Gerät im LAN, das die in der ARP-Anfrage genannte Ziel-IP-Adresse besitzt, antwortet mit einer ARP-Antwort (Unicast) direkt an das anfragende Gerät. Diese Antwort enthält seine MAC-Adresse, die der angefragten IP-Adresse zugeordnet ist.
3.  **ARP-Cache:** Das anfragende Gerät speichert die empfangene IP-MAC-Adresszuordnung in seinem ARP-Cache (ein temporärer Speicher). Für zukünftige Kommunikationen mit derselben IP-Adresse kann es die MAC-Adresse direkt aus dem Cache abrufen, ohne erneut eine ARP-Anfrage senden zu müssen. Einträge im ARP-Cache haben in der Regel eine begrenzte Gültigkeitsdauer und werden regelmäßig aktualisiert oder gelöscht.

**Wichtige Aspekte von ARP:**

-   **Broadcast und Unicast:** ARP-Anfragen sind Broadcasts (an alle im lokalen Netzwerk), während ARP-Antworten in der Regel Unicasts (direkt an den Anfragenden) sind.
-   **Lokale Netzwerkkommunikation:** ARP ist auf das lokale Netzwerksegment beschränkt. Router leiten ARP-Anfragen nicht in andere Netzwerke weiter. Für die Kommunikation mit Geräten in anderen Netzwerken verwendet das sendende Gerät die MAC-Adresse seines Standard-Gateways (Routers).
-   **ARP-Cache-Poisoning (ARP-Spoofing):** Eine Sicherheitslücke, bei der ein Angreifer gefälschte ARP-Antworten sendet, um die IP-MAC-Zuordnung im ARP-Cache anderer Geräte zu manipulieren. Dies kann für Man-in-the-Middle-Angriffe ausgenutzt werden.
-   **RARP (Reverse ARP):** Ein älteres Protokoll, das verwendet wurde, um eine IP-Adresse basierend auf einer bekannten MAC-Adresse zu ermitteln. Es wurde weitgehend durch DHCP ersetzt.

**Beispielablauf:**

1.  PC A (IP: 192.168.1.10, MAC: AA:AA:AA:AA:AA:AA) möchte mit PC B (IP: 192.168.1.20) kommunizieren.
2.  PC A überprüft seinen ARP-Cache. Wenn die MAC-Adresse von 192.168.1.20 nicht vorhanden ist oder abgelaufen ist, sendet PC A eine ARP-Anfrage als Broadcast: "Wer hat die IP-Adresse 192.168.1.20? Bitte senden Sie Ihre MAC-Adresse an AA:AA:AA:AA:AA:AA."
3.  Alle Geräte im lokalen Netzwerk empfangen die ARP-Anfrage.
4.  PC B (MAC: BB:BB:BB:BB:BB:BB) erkennt seine IP-Adresse (192.168.1.20) in der Anfrage und sendet eine ARP-Antwort direkt an PC A: "Die MAC-Adresse für 192.168.1.20 ist BB:BB:BB:BB:BB:BB."
5.  PC A empfängt die ARP-Antwort und speichert die IP-MAC-Zuordnung (192.168.1.20 -> BB:BB:BB:BB:BB:BB) in seinem ARP-Cache.
6.  PC A kann nun Datenframes direkt an die MAC-Adresse von PC B (BB:BB:BB:BB:BB:BB) senden.

## Fazit

ARP ist ein unverzichtbares Protokoll für die Kommunikation innerhalb lokaler Netzwerke. Es fungiert als Brücke zwischen der logischen Adressierung der Netzwerkschicht (IP-Adressen) und der physischen Adressierung der Sicherungsschicht (MAC-Adressen). Durch das dynamische Auflösen von IP-Adressen zu MAC-Adressen ermöglicht ARP die reibungslose Datenübertragung zwischen Geräten im selben LAN. Das Verständnis von ARP und seiner Funktionsweise ist grundlegend für das Verständnis der Netzwerkkommunikation auf den unteren Ebenen der Schichtenmodelle.

## Links und Quellen

* **Wikipedia - Address Resolution Protocol:** [https://de.wikipedia.org/wiki/Address_Resolution_Protocol](https://de.wikipedia.org/wiki/Address_Resolution_Protocol)
* **RFC 826 - An Ethernet Address Resolution Protocol:** [https://datatracker.ietf.org/doc/html/rfc826](https://datatracker.ietf.org/doc/html/rfc826) (Die ursprüngliche Spezifikation - Englischsprachig)
* **Cisco - Understanding ARP:** [https://www.cisco.com/c/en/us/support/docs/ip/address-resolution-protocol-arp/118612-understand-arp.html](https://www.cisco.com/c/en/us/support/docs/ip/address-resolution-protocol-arp/118612-understand-arp.html) (Englischsprachig)
* **Cloudflare - What is ARP (Address Resolution Protocol)?** [https://www.cloudflare.com/learning/network-layer/what-is-arp/](https://www.cloudflare.com/learning/network-layer/what-is-arp/) (Englischsprachig)
* **GeeksforGeeks - ARP (Address Resolution Protocol) in Computer Network:** [https://www.geeksforgeeks.org/arp-address-resolution-protocol/](https://www.geeksforgeeks.org/arp-address-resolution-protocol/) (Englischsprachig)
