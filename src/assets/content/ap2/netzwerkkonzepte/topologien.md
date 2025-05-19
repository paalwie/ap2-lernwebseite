# Netzwerkkonzepte (-topologien, -infrastrukturen) benennen und charakterisieren: Netzwerktopologie (FI DV/FI SI)

## Einführung

Die Netzwerktopologie beschreibt die physische oder logische Anordnung von Netzwerkkomponenten (z.B. Computer, Server, Switches, Router) und deren Verbindungen. Sie ist ein grundlegendes Konzept für das Verständnis und die Planung von Netzwerkinfrastrukturen. Die Wahl der geeigneten Topologie beeinflusst die Leistung, Zuverlässigkeit, Skalierbarkeit und Kosten eines Netzwerks.

## Charakterisierung verschiedener Netzwerktopologien

**1. Physische Topologie:**

Die physische Topologie beschreibt die tatsächliche Anordnung der Kabel und Geräte.

-   **Bus-Topologie:**
    -   **Beschreibung:** Alle Geräte sind über ein gemeinsames Übertragungsmedium (den "Bus") verbunden.
    -   **Vorteile:** Einfach und kostengünstig zu implementieren (für kleine Netzwerke).
    -   **Nachteile:** Bei Ausfall des Busses fällt das gesamte Netzwerk aus. Kollisionen können auftreten, wenn mehrere Geräte gleichzeitig senden. Schlechte Skalierbarkeit. Veraltet.
-   **Stern-Topologie:**
    -   **Beschreibung:** Alle Geräte sind mit einem zentralen Knoten (Hub oder Switch) verbunden.
    -   **Vorteile:** Einfache Fehlersuche. Ausfall eines einzelnen Geräts beeinträchtigt das Netzwerk nicht. Gute Skalierbarkeit.
    -   **Nachteile:** Ausfall des zentralen Knotens führt zum Ausfall des gesamten Netzwerks. Höhere Kosten als Bus-Topologie (durch den zentralen Knoten).
-   **Ring-Topologie:**
    -   **Beschreibung:** Geräte sind in einem geschlossenen Kreis verbunden. Daten werden von Gerät zu Gerät weitergeleitet.
    -   **Vorteile:** Geringe Kollisionswahrscheinlichkeit.
    -   **Nachteile:** Ausfall eines Geräts kann das gesamte Netzwerk beeinträchtigen. Schwierige Fehlersuche. Veraltet.
-   **Mesh-Topologie:**
    -   **Beschreibung:** Jedes Gerät ist mit mehreren anderen Geräten verbunden.
    -   **Vorteile:** Hohe Ausfallsicherheit und Redundanz.
    -   **Nachteile:** Hohe Kosten und Komplexität.
-   **Baum-Topologie:**
    -   **Beschreibung:** Eine hierarchische Topologie, die mehrere Stern-Topologien miteinander verbindet.
    -   **Vorteile:** Gute Skalierbarkeit.
    -   **Nachteile:** Ausfall eines Knotens in höheren Ebenen kann größere Teile des Netzwerks beeinträchtigen.
-    **Hybrid-Topologie:**
         -    **Beschreibung:** Eine Kombination aus zwei oder mehr Topologien.
         -    **Vorteile:** Flexibilität, die Vorteile verschiedener Topologien zu nutzen.
         -    **Nachteile:** Kann komplex zu verwalten sein.

**2. Logische Topologie:**

Die logische Topologie beschreibt den Datenfluss im Netzwerk, unabhängig von der physischen Anordnung.

-   **Broadcast-Topologie:** Daten werden an alle Geräte im Netzwerk gesendet (z.B. Hub-basierte Netzwerke).
-   **Punkt-zu-Punkt-Topologie:** Direkte Verbindung zwischen zwei Geräten.
-   **Punkt-zu-Mehrpunkt-Topologie:** Ein zentrales Gerät kommuniziert mit mehreren anderen Geräten (z.B. WLAN mit einem Access Point).

**3. Netzwerktopologien im Kontext von FI DV/FI SI (Fachinformatiker Datenverarbeitung/Systemintegration):**

Im Kontext der Ausbildung zum Fachinformatiker für Datenverarbeitung oder Systemintegration sind Kenntnisse über Netzwerktopologien essentiell.

-   **FI DV (Fachinformatiker Datenverarbeitung):**
    -   Datenverarbeitungssysteme sind oft in Client-Server-Architekturen organisiert, die typischerweise eine Stern- oder Baumtopologie verwenden.
    -   Die logische Topologie kann je nach Anwendung variieren (z.B. Client-Server, Peer-to-Peer).
    -   Kenntnisse über Netzwerkprotokolle (TCP/IP) und Dienste (DNS, DHCP) sind wichtig.
-   **FI SI (Fachinformatiker Systemintegration):**
    -   Systemintegratoren planen und installieren Netzwerkinfrastrukturen, wobei die Wahl der Topologie eine zentrale Rolle spielt.
    -   Sie müssen die Anforderungen des Kunden (z.B. Anzahl der Benutzer, Bandbreitenbedarf, Ausfallsicherheit) berücksichtigen.
    -   Kenntnisse über verschiedene Netzwerkgeräte (Switches, Router, Firewalls) und Verkabelungstechniken sind erforderlich.
    -   Häufig eingesetzte Topologien sind Stern, Baum und Mesh (insbesondere in drahtlosen Netzwerken).
    -   Auch Hybridtopologien können zum Einsatz kommen, um spezifische Anforderungen zu erfüllen.

**4. Auswahl der geeigneten Topologie:**

Die Wahl der geeigneten Topologie hängt von verschiedenen Faktoren ab:

-   **Kosten:** Bus-Topologien sind in der Regel kostengünstiger als Stern- oder Mesh-Topologien.
-   **Leistung:** Stern- und Mesh-Topologien bieten in der Regel eine bessere Leistung als Bus- oder Ring-Topologien.
-   **Zuverlässigkeit:** Mesh-Topologien bieten die höchste Ausfallsicherheit.
-   **Skalierbarkeit:** Stern- und Baum-Topologien sind gut skalierbar.
-   **Anforderungen der Anwendungen:** Anwendungen mit hohen Bandbreitenanforderungen erfordern möglicherweise eine andere Topologie als Anwendungen mit geringen Anforderungen.
-   **Budget:** Das verfügbare Budget beeinflusst die Auswahl der Komponenten und der Topologie.

## Fazit

Die Netzwerktopologie ist ein grundlegendes Konzept für das Verständnis und die Planung von Netzwerken. Die Wahl der geeigneten Topologie ist entscheidend für die Leistung, Zuverlässigkeit und Kosten des Netzwerks. Fachinformatiker, sowohl in der Datenverarbeitung als auch in der Systemintegration, benötigen fundierte Kenntnisse über verschiedene Topologien, um effiziente und sichere Netzwerkinfrastrukturen zu planen und zu betreiben.

## Links und Quellen

* **Wikipedia - Netzwerktopologie:** [https://de.wikipedia.org/wiki/Netzwerktopologie](https://de.wikipedia.org/wiki/Netzwerktopologie)
* **Cisco - Network Topology:** [https://www.cisco.com/c/en/us/td/docs/solutions/CVD/Aug2014/DESIGN-GUIDE/CVD-14-DG-CHAP_03.html](https://www.cisco.com/c/en/us/td/docs/solutions/CVD/Aug2014/DESIGN-GUIDE/CVD-14-DG-CHAP_03.html) (Englischsprachig)
* **Techopedia - Network Topology:** [https://www.techopedia.com/definition/1881/network-topology](https://www.techopedia.com/definition/1881/network-topology) (Englischsprachig)
* **GeeksforGeeks - Types of Network Topology:** [https://www.geeksforgeeks.org/types-of-network-topology/](https://www.geeksforgeeks.org/types-of-network-topology/) (Englischsprachig)
* **IBM - Network topology:** [https://www.ibm.com/docs/en/network-performance-mon/3.1.0?topic=concepts-network-topology](https://www.ibm.com/docs/en/network-performance-mon/3.1.0?topic=concepts-network-topology) (Englischsprachig)
