# Netzwerkkonzepte (-topologien, -infrastrukturen) benennen und charakterisieren: VLAN (Virtual LAN)

## Einführung

VLANs (Virtual Local Area Networks) sind eine grundlegende Technologie in modernen Netzwerken, um logische Netzwerksegmente innerhalb eines physischen LANs zu erstellen. Sie ermöglichen die Flexibilität, Geräte und Benutzer in Gruppen zusammenzufassen, unabhängig von ihrer physischen Position im Netzwerk. VLANs verbessern die Sicherheit, die Leistung und die Verwaltbarkeit von Netzwerken.

## Charakterisierung von VLANs

**1. Konzept:**

-   Ein VLAN ist ein logisches Netzwerk, das unabhängig von der physischen Topologie des Netzwerks erstellt wird. Geräte in demselben VLAN können miteinander kommunizieren, als wären sie im selben physischen LAN, auch wenn sie an unterschiedliche Switches angeschlossen sind. Der Datenverkehr zwischen verschiedenen VLANs muss über Router oder Layer-3-Switches geleitet werden.

**2. Funktionsweise:**

-   VLANs werden typischerweise auf Switches konfiguriert. Jeder Switch-Port kann einem oder mehreren VLANs zugewiesen werden.
-   Frames, die über einen Port in ein VLAN gelangen, werden mit einer VLAN-Kennung (VLAN-ID) versehen. Diese Kennung wird im 802.1Q-Header des Ethernet-Frames gespeichert.
-   Switches verwenden die VLAN-ID, um zu bestimmen, an welche Ports ein Frame weitergeleitet werden soll. Frames werden nur an Ports weitergeleitet, die demselben VLAN angehören.
-   Ports, die mehrere VLANs übertragen (z.B. Verbindungen zwischen Switches), werden als Trunk-Ports bezeichnet. Trunk-Ports verwenden 802.1Q-Tagging, um die VLAN-Zugehörigkeit der Frames zu kennzeichnen.
-   Ports, die nur einem VLAN angehören (z.B. Ports, an denen Endgeräte angeschlossen sind), werden als Access-Ports bezeichnet. Access-Ports senden und empfangen Frames ohne 802.1Q-Tagging.

**3. Vorteile von VLANs:**

-   **Sicherheit:** VLANs segmentieren das Netzwerk und begrenzen die Broadcast-Domänen. Dies bedeutet, dass Broadcast-Nachrichten (z.B. ARP-Anfragen) nur an Geräte im selben VLAN gesendet werden, wodurch die potenzielle Angriffsfläche reduziert wird.
-   **Leistung:** Durch die Verkleinerung der Broadcast-Domänen wird der Netzwerkverkehr reduziert und die Leistung verbessert.
-   **Flexibilität:** VLANs ermöglichen die einfache Gruppierung von Benutzern und Geräten basierend auf organisatorischen oder funktionalen Kriterien, unabhängig von ihrer physischen Position. Dies erleichtert die Verwaltung und Konfiguration des Netzwerks.
-   **Verwaltbarkeit:** VLANs vereinfachen die Netzwerkverwaltung, da Änderungen an der Netzwerkkonfiguration (z.B. das Hinzufügen oder Entfernen von Benutzern) oft nur an wenigen Stellen (z.B. auf den Switches) vorgenommen werden müssen.
-   **Kosteneffizienz:** VLANs können die Notwendigkeit teurer Hardware-Upgrades reduzieren, da sie die vorhandene Infrastruktur effizienter nutzen.

**4. Typen von VLANs:**

-   **Port-basiertes VLAN:** Die häufigste Art von VLAN, bei der die VLAN-Zugehörigkeit auf der Grundlage der Switch-Ports festgelegt wird.
-   **MAC-Adressen-basiertes VLAN:** Geräte werden VLANs basierend auf ihren MAC-Adressen zugewiesen. Dies ist flexibler als portbasierte VLANs, aber komplexer zu konfigurieren.
-   **Protokoll-basiertes VLAN:** Der Datenverkehr wird VLANs basierend auf dem verwendeten Netzwerkprotokoll (z.B. IP, IPX) zugewiesen.
-   **Authentifizierungs-basiertes VLAN:** Geräte werden VLANs basierend auf ihrer Authentifizierung (z.B. 802.1X) zugewiesen.

**5. 802.1Q-Tagging:**

-   802.1Q ist ein Standard, der definiert, wie VLAN-Informationen in Ethernet-Frames eingefügt werden.
-   Ein 802.1Q-Tag ist ein 4-Byte-Feld, das dem Ethernet-Header hinzugefügt wird. Es enthält die VLAN-ID (12 Bit), die Priority Code Point (PCP) für QoS und den Drop Eligible Indicator (DEI).
-   Trunk-Ports verwenden 802.1Q-Tagging, um Frames aus verschiedenen VLANs über dieselbe physische Verbindung zu übertragen.

**6. Inter-VLAN-Routing:**

-   Die Kommunikation zwischen Geräten in verschiedenen VLANs erfordert ein Layer-3-Gerät (Router oder Layer-3-Switch).
-   Ein Router oder Layer-3-Switch verfügt über Schnittstellen in mehreren VLANs und leitet den Datenverkehr zwischen ihnen basierend auf IP-Adressen.
-   "Router-on-a-stick" ist eine gängige Methode für Inter-VLAN-Routing, bei der ein Router über einen einzelnen physischen Link (Trunk-Port) mit dem Switch verbunden ist und Subinterfaces für jedes VLAN verwendet.

**7. VLAN-Trunking-Protokoll (VTP):**

-   VTP (Cisco-spezifisch) ist ein Protokoll, das die VLAN-Konfiguration über mehrere Switches hinweg synchronisiert.
-   Es hilft, die VLAN-Verwaltung zu vereinfachen, insbesondere in großen Netzwerken.

## Fazit

VLANs sind ein wesentliches Werkzeug für die Gestaltung effizienter, sicherer und flexibler Netzwerke. Sie ermöglichen die logische Segmentierung von Netzwerken, verbessern die Leistung und vereinfachen die Verwaltung. Das Verständnis von VLANs und ihrer Funktionsweise ist für jeden Netzwerkadministrator unerlässlich.

## Links und Quellen

* **Wikipedia - Virtual LAN:** [https://de.wikipedia.org/wiki/Virtual_LAN](https://de.wikipedia.org/wiki/Virtual_LAN)
* **IEEE 802.1Q:** [https://ieeexplore.ieee.org/document/829133](https://ieeexplore.ieee.org/document/829133) (Offizielle Seite des Standards - Englischsprachig, kostenpflichtig)
* **Cisco - VLAN:** [https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3850/software/release/3se/configuration/guide/b_cg_3850_16se/b_cg_3850_16se_chapter_025.html](https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3850/software/release/3se/configuration/guide/b_cg_3850_16se/b_cg_3850_16se_chapter_025.html) (Englischsprachig - Cisco-spezifische Informationen)
* **Cloudflare - What is a VLAN?** [https://www.cloudflare.com/learning/network-layer/what-is-a-vlan/](https://www.cloudflare.com/learning/network-layer/what-is-a-vlan/) (Englischsprachig)
* **Juniper Networks - Understanding VLANs:** [https://www.juniper.net/documentation/en_US/junos/topics/concept/vlans-understanding.html](https://www.juniper.net/documentation/en_US/junos/topics/concept/vlans-understanding.html) (Englischsprachig - Juniper-spezifische Informationen)
