# Schichtenmodelle, z.B. OSI, TCP/IP benennen und zuordnen können: MAC-Adresse

## Einführung

Wie bereits im vorherigen Thema zu IPv4/IPv6 erläutert, sind Schichtenmodelle wie das OSI-Modell und das TCP/IP-Modell grundlegend für das Verständnis der Netzwerkkommunikation. Die MAC-Adresse (Media Access Control Address) spielt eine entscheidende Rolle in den unteren Schichten dieser Modelle und ermöglicht die Kommunikation innerhalb eines lokalen Netzwerks (LAN).

## Grundlagen: OSI- und TCP/IP-Modell (Wiederholung relevanter Schichten)

**Das OSI-Modell (7 Schichten):**

1.  Anwendungsschicht (Application Layer)
2.  Darstellungsschicht (Presentation Layer)
3.  Sitzungsschicht (Session Layer)
4.  Transportschicht (Transport Layer)
5.  Netzwerkschicht (Network Layer)
6.  **Sicherungsschicht (Data Link Layer):** Stellt die physische Verbindung zwischen benachbarten Netzwerkknoten her und kümmert sich um die Fehlererkennung innerhalb eines lokalen Netzwerks. **Die MAC-Adresse ist in dieser Schicht relevant.**
7.  Physikalische Schicht (Physical Layer)

**Das TCP/IP-Modell (4 Schichten):**

1.  Anwendungsschicht (Application Layer)
2.  Transportschicht (Transport Layer)
3.  Internetschicht (Internet Layer)
4.  **Netzzugangsschicht (Network Access Layer):** Vereint die Funktionalitäten der OSI-Schichten 1 und 2. **Die MAC-Adresse ist in dieser Schicht relevant.**

## Die MAC-Adresse: Media Access Control Address

Die MAC-Adresse ist eine eindeutige, physische Adresse, die jedem Netzwerkadapter (z.B. Ethernet-Karte, WLAN-Adapter) fest zugewiesen ist. Sie dient zur Identifizierung eines Geräts innerhalb eines lokalen Netzwerks.

**Zuordnung zum Schichtenmodell:**

-   **OSI-Modell:** Sicherungsschicht (Data Link Layer - Schicht 2)
-   **TCP/IP-Modell:** Netzzugangsschicht (Network Access Layer - Schicht 1 & 2)

Genauer gesagt, die MAC-Adresse operiert primär in der **Subschicht Media Access Control (MAC)** der Sicherungsschicht (im OSI-Modell) bzw. innerhalb der Netzzugangsschicht (im TCP/IP-Modell). Die Sicherungsschicht ist oft in zwei Unterschichten unterteilt:

* **Logical Link Control (LLC):** Kümmert sich um die logische Verbindung und Protokollmultiplexing.
* **Media Access Control (MAC):** Steuert den Zugriff auf das physische Übertragungsmedium und implementiert die physische Adressierung (MAC-Adresse).

**Wichtige Eigenschaften der MAC-Adresse:**

-   **Physische Adresse:** Die MAC-Adresse ist fest in die Hardware des Netzwerkadapters eingebrannt und wird in der Regel vom Hersteller vergeben. Sie ist somit an das physische Gerät gebunden.
-   **48-Bit-Adresse:** Eine MAC-Adresse besteht aus 48 Bit, die üblicherweise in hexadezimaler Notation mit Doppelpunkten oder Bindestrichen dargestellt werden (z.B. 00:1A:2B:3C:4D:5E oder 00-1A-2B-3C-4D-5E).
-   **OUI (Organizationally Unique Identifier):** Die ersten 24 Bit (die ersten drei Oktette) der MAC-Adresse identifizieren den Hersteller des Netzwerkadapters und werden als OUI bezeichnet.
-   **Gerätespezifischer Teil:** Die letzten 24 Bit sind eine vom Hersteller eindeutig vergebene Seriennummer für den jeweiligen Netzwerkadapter.
-   **Eindeutigkeit (theoretisch):** Aufgrund der Struktur mit dem herstellerspezifischen OUI und der eindeutigen Seriennummer soll jede MAC-Adresse weltweit einzigartig sein. In der Praxis gibt es jedoch Möglichkeiten, die MAC-Adresse eines Geräts zu ändern (MAC-Spoofing).
-   **Layer-2-Adresse:** Die MAC-Adresse ist eine Adresse der Sicherungsschicht (Layer 2) und wird für die Kommunikation innerhalb eines lokalen Netzwerks verwendet. Router verwenden die MAC-Adresse, um Datenpakete an das korrekte Gerät im lokalen Segment weiterzuleiten.
-   **Kein Routing über Netzwerkgrenzen:** MAC-Adressen sind nicht routingfähig. Router verwenden IP-Adressen (Layer 3) für die Weiterleitung von Datenpaketen zwischen verschiedenen Netzwerken. Wenn ein Paket ein lokales Netzwerk verlässt, wird die Quell-MAC-Adresse des sendenden Geräts und die Ziel-MAC-Adresse des Standard-Gateways (Routers) verwendet. Sobald das Paket das Zielnetzwerk erreicht, werden neue MAC-Adressen für die Kommunikation innerhalb dieses lokalen Netzwerks verwendet.

**Verwendung der MAC-Adresse:**

-   **Ethernet:** In Ethernet-Netzwerken wird die MAC-Adresse verwendet, um Datenframes an das korrekte Zielgerät im lokalen Netzwerksegment zu senden. Das Address Resolution Protocol (ARP) wird verwendet, um die IP-Adresse einer Ziel-MAC-Adresse innerhalb des lokalen Netzwerks zuzuordnen.
-   **WLAN (Wi-Fi):** Auch in WLAN-Netzwerken werden MAC-Adressen zur Identifizierung von Geräten und zur Steuerung des Zugriffs auf das drahtlose Medium verwendet.
-   **MAC-Filterung:** In WLAN-Routern kann die MAC-Filterung eingesetzt werden, um den Zugriff auf das Netzwerk auf Geräte mit bestimmten MAC-Adressen zu beschränken (obwohl dies keine absolute Sicherheitsmaßnahme darstellt, da MAC-Adressen gespooft werden können).

## Fazit

Die MAC-Adresse ist eine physische Adresse, die in der Sicherungsschicht (OSI) bzw. der Netzzugangsschicht (TCP/IP) angesiedelt ist und die eindeutige Identifizierung von Netzwerkadaptern innerhalb eines lokalen Netzwerks ermöglicht. Sie ist essenziell für die Layer-2-Kommunikation und die Weiterleitung von Datenframes innerhalb eines LANs. Im Gegensatz zu IP-Adressen (Layer 3) sind MAC-Adressen nicht routingfähig und spielen keine direkte Rolle bei der Kommunikation über Netzwerkgrenzen hinweg. Das Verständnis der Funktion und Verortung der MAC-Adresse in den Schichtenmodellen ist grundlegend für das Verständnis der Netzwerkarchitektur.

## Links und Quellen

* **Wikipedia - MAC-Adresse:** [https://de.wikipedia.org/wiki/MAC-Adresse](https://de.wikipedia.org/wiki/MAC-Adresse)
* **IEEE - OUI Public Listing:** [https://standards.ieee.org/ieee-standards-association/resource-center/oui/](https://standards.ieee.org/ieee-standards-association/resource-center/oui/) (Offizielle Liste der OUIs - Englischsprachig)
* **Cloudflare - What is a MAC address?** [https://www.cloudflare.com/learning/network-layer/what-is-a-mac-address/](https://www.cloudflare.com/learning/network-layer/what-is-a-mac-address/) (Englischsprachig)
* **Cisco - Understanding Ethernet MAC Address:** [https://www.cisco.com/c/en/us/support/docs/lan-switching/integrated-routing-bridging-irb/10579-61.html](https://www.cisco.com/c/en/us/support/docs/lan-switching/integrated-routing-bridging-irb/10579-61.html) (Englischsprachig)
* **GeeksforGeeks - MAC Address in Computer Network:** [https://www.geeksforgeeks.org/mac-address-computer-network/](https://www.geeksforgeeks.org/mac-address-computer-network/) (Englischsprachig)
