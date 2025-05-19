# Netzwerkkonzepte (-topologien, -infrastrukturen) benennen und charakterisieren: Ausdehnung (LAN/WAN/MAN/GAN)

## Einführung

Die Ausdehnung eines Netzwerks ist ein grundlegendes Konzept, um seine Größe und den geografischen Bereich zu charakterisieren, den es abdeckt. Die gängigsten Kategorien zur Beschreibung der Netzwerkausdehnung sind LAN (Local Area Network), WAN (Wide Area Network), MAN (Metropolitan Area Network) und GAN (Global Area Network). Jede dieser Kategorien weist spezifische Merkmale hinsichtlich ihrer Größe, Technologie, Kosten und typischen Anwendungsfälle auf.

## Charakterisierung der Netzwerktypen nach Ausdehnung

**1. LAN (Local Area Network) - Lokales Netzwerk:**

-   **Ausdehnung:** Ein LAN erstreckt sich über einen begrenzten geografischen Bereich, typischerweise ein einzelnes Gebäude, ein Büro, ein Zuhause oder einen Campus.
-   **Infrastruktur:** LANs verwenden in der Regel Technologien wie Ethernet (kabelgebunden) oder WLAN (drahtlos) für die Verbindung von Geräten. Die Übertragungsgeschwindigkeiten sind in der Regel hoch.
-   **Eigentümer und Verwaltung:** LANs werden üblicherweise von einer einzelnen Organisation oder Person betrieben und verwaltet.
-   **Kosten:** Die Kosten für die Einrichtung und den Betrieb eines LANs sind im Allgemeinen relativ niedrig.
-   **Beispiele:** Heimnetzwerke, Büronetzwerke, Schulnetzwerke, Netzwerke in Produktionshallen.
-   **Charakteristische Merkmale:**
    -   Hohe Übertragungsgeschwindigkeiten.
    -   Geringe Latenzzeiten.
    -   Relativ einfache Topologien (z.B. Stern, Bus (historisch), Ring (historisch), Mesh).
    -   Direkte Verbindung der Endgeräte über Switches oder Hubs (historisch).
    -   Begrenzte geografische Ausdehnung.

**2. WAN (Wide Area Network) - Weitverkehrsnetz:**

-   **Ausdehnung:** Ein WAN erstreckt sich über einen großen geografischen Bereich, der Städte, Länder oder sogar Kontinente umfassen kann.
-   **Infrastruktur:** WANs verwenden verschiedene Technologien, um Verbindungen über große Distanzen herzustellen, darunter dedizierte Leitungen (z.B. gemietete Leitungen), paketvermittelte Netze (z.B. Frame Relay, ATM), Mobilfunknetze (z.B. 4G, 5G) und das Internet selbst (z.B. VPNs). Die Übertragungsgeschwindigkeiten können variieren und sind oft niedriger als in LANs.
-   **Eigentümer und Verwaltung:** Die Infrastruktur von WANs gehört und wird oft von Telekommunikationsunternehmen oder Internetdienstanbietern (ISPs) betrieben. Organisationen mieten oder nutzen diese Infrastruktur, um ihre eigenen WANs zu realisieren.
-   **Kosten:** Die Kosten für die Einrichtung und den Betrieb eines WANs sind in der Regel deutlich höher als bei LANs, insbesondere bei dedizierten Verbindungen über große Distanzen.
-   **Beispiele:** Das Internet, Unternehmensnetzwerke mit Niederlassungen in verschiedenen Städten oder Ländern, Mobilfunknetze.
-   **Charakteristische Merkmale:**
    -   Große geografische Ausdehnung.
    -   Niedrigere Übertragungsgeschwindigkeiten und höhere Latenzzeiten im Vergleich zu LANs.
    -   Komplexe Topologien und Technologien.
    -   Verbindung von mehreren LANs oder einzelnen Geräten über große Distanzen.
    -   Nutzung der Infrastruktur externer Dienstleister.

**3. MAN (Metropolitan Area Network) - Stadtnetz:**

-   **Ausdehnung:** Ein MAN erstreckt sich über eine größere geografische Region als ein LAN, typischerweise eine Stadt oder eine Metropolregion.
-   **Infrastruktur:** MANs können verschiedene Technologien verwenden, darunter Glasfaserkabel, drahtlose Technologien (z.B. Mikrowelle, Richtfunk) und ältere Technologien wie ATM oder SMDS. Die Übertragungsgeschwindigkeiten sind in der Regel höher als in WANs, aber möglicherweise niedriger als in LANs.
-   **Eigentümer und Verwaltung:** MANs können von einer einzelnen Organisation (z.B. eine städtische Behörde, ein Energieversorger) oder von Konsortien mehrerer Organisationen betrieben werden. Auch Telekommunikationsunternehmen können MAN-Infrastrukturen bereitstellen.
-   **Kosten:** Die Kosten für MANs liegen in der Regel zwischen denen von LANs und WANs.
-   **Beispiele:** Städtische Glasfasernetze, Universitätsnetzwerke über mehrere Campusse in einer Stadt, regionale Netzwerke von Kabelanbietern.
-   **Charakteristische Merkmale:**
    -   Mittlere geografische Ausdehnung (Stadt oder Metropolregion).
    -   Höhere Übertragungsgeschwindigkeiten und geringere Latenzzeiten als WANs.
    -   Oft Verwendung von Hochgeschwindigkeitsverbindungen wie Glasfaser.
    -   Verbindung von mehreren LANs innerhalb einer Stadt oder Region.

**4. GAN (Global Area Network) - Globales Netzwerk:**

-   **Ausdehnung:** Ein GAN ist das größte Netzwerk und erstreckt sich über die gesamte Welt.
-   **Infrastruktur:** Das bekannteste Beispiel für ein GAN ist das Internet, das eine Vielzahl von Technologien und Netzwerken weltweit miteinander verbindet. Es gibt keine einzelne Technologie, die ein GAN definiert.
-   **Eigentümer und Verwaltung:** Ein GAN gehört keiner einzelnen Organisation. Es ist ein Zusammenschluss vieler verschiedener Netzwerke, die von Regierungen, Unternehmen, Bildungseinrichtungen und Privatpersonen betrieben werden. Die Verwaltung ist dezentral und basiert auf internationalen Standards und Protokollen.
-   **Kosten:** Die Kosten für die Nutzung eines GANs (z.B. Internetzugang) variieren stark. Die Kosten für den Aufbau und den Betrieb der zugrunde liegenden Infrastruktur sind enorm und werden von den beteiligten Organisationen getragen.
-   **Beispiele:** Das Internet.
-   **Charakteristische Merkmale:**
    -   Globale geografische Ausdehnung.
    -   Sehr unterschiedliche Übertragungsgeschwindigkeiten und Latenzzeiten, abhängig von den beteiligten Netzwerken und der Entfernung.
    -   Extrem komplexe und heterogene Infrastruktur.
    -   Verbindung von Milliarden von Geräten und Netzwerken weltweit.
    -   Basierend auf offenen Standards und Protokollen (z.B. TCP/IP).

## Fazit

Die Kategorisierung von Netzwerken nach ihrer Ausdehnung (LAN, WAN, MAN, GAN) hilft, ihre grundlegenden Eigenschaften hinsichtlich Größe, Technologie, Verwaltung und Kosten zu verstehen. Diese Konzepte sind wichtig für die Planung, den Aufbau und die Verwaltung von Netzwerkinfrastrukturen, die von lokalen Büronetzwerken bis hin zum globalen Internet reichen.

## Links und Quellen

* **Wikipedia - Computer network:** [https://en.wikipedia.org/wiki/Computer_network](https://en.wikipedia.org/wiki/Computer_network) (Englischsprachig - behandelt verschiedene Netzwerktypen)
* **Cisco - LAN, MAN, and WAN:** [https://www.cisco.com/c/en/us/solutions/small-business/resource-center/networking/lan-man-wan.html](https://www.cisco.com/c/en/us/solutions/small-business/resource-center/networking/lan-man-wan.html) (Englischsprachig)
* **GeeksforGeeks - Types of Computer Networks (LAN, MAN, WAN, PAN):** [https://www.geeksforgeeks.org/types-of-computer-networks-lan-man-wan-pan/](https://www.geeksforgeeks.org/types-of-computer-networks-lan-man-wan-pan/) (Englischsprachig - beachtet auch PAN)
* **IBM - What is a wide area network (WAN)?** [https://www.ibm.com/cloud/learn/wan](https://www.ibm.com/cloud/learn/wan) (Englischsprachig - fokussiert auf WAN, erwähnt aber auch LAN und MAN)
* **TechTarget - Local area network (LAN):** [https://www.techtarget.com/searchnetworking/definition/local-area-network](https://www.techtarget.com/searchnetworking/definition/local-area-network) (Englischsprachig - detaillierte Beschreibung von LANs)
