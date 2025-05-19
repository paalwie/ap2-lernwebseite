# Schichtenmodelle, z.B. OSI, TCP/IP benennen und zuordnen können: Routing

## Einführung

Im Kontext von Netzwerken und den Schichtenmodellen OSI und TCP/IP ist das Routing ein fundamentaler Prozess, der die Weiterleitung von Datenpaketen von einem Netzwerk zu einem anderen ermöglicht. Ohne Routing wäre die Kommunikation über lokale Netzwerke hinaus, wie wir sie im Internet kennen, nicht möglich.

## Grundlagen: OSI- und TCP/IP-Modell (Relevante Schichten)

**Das OSI-Modell (7 Schichten):**

1.  Anwendungsschicht (Application Layer)
2.  Darstellungsschicht (Presentation Layer)
3.  Sitzungsschicht (Session Layer)
4.  Transportschicht (Transport Layer)
5.  **Netzwerkschicht (Network Layer):** Verantwortlich für die logische Adressierung (IP-Adressen) und das **Routing** von Datenpaketen über Netzwerke hinweg.
6.  Sicherungsschicht (Data Link Layer)
7.  Physikalische Schicht (Physical Layer)

**Das TCP/IP-Modell (4 Schichten):**

1.  Anwendungsschicht (Application Layer)
2.  Transportschicht (Transport Layer)
3.  **Internetschicht (Internet Layer):** Entspricht der OSI-Netzwerkschicht. Verantwortlich für die logische Adressierung (IP-Adressen) und das **Routing** von Datenpaketen.
4.  Netzzugangsschicht (Network Access Layer)

## Routing: Der Wegweiser im Netzwerk

Routing ist der Prozess der Auswahl von Pfaden in einem Netzwerk, über die Datenpakete von einem Quellnetzwerk zu einem Zielnetzwerk weitergeleitet werden. Diese Aufgabe wird hauptsächlich von Netzwerkgeräten der Netzwerkschicht (Layer 3) übernommen, den sogenannten **Routern**.

**Zuordnung zum Schichtenmodell:**

-   **OSI-Modell:** Netzwerkschicht (Network Layer - Schicht 3)
-   **TCP/IP-Modell:** Internetschicht (Internet Layer - Schicht 3)

**Wichtige Aspekte des Routings:**

-   **Logische Adressierung (IP-Adressen):** Router verwenden IP-Adressen (IPv4 oder IPv6), um das Zielnetzwerk eines Datenpakets zu bestimmen und den besten Weg dorthin zu finden.
-   **Routing-Tabellen:** Router pflegen Routing-Tabellen, die Informationen über bekannte Netzwerke und die besten Pfade zu diesen Netzwerken enthalten. Diese Tabellen werden dynamisch durch Routing-Protokolle aktualisiert oder statisch vom Administrator konfiguriert.
-   **Routing-Protokolle:** Verschiedene Routing-Protokolle werden verwendet, um Informationen über die Netzwerktopologie auszutauschen und die besten Pfade zu bestimmen. Beispiele sind:
    * **RIP (Routing Information Protocol):** Ein älteres Distance-Vector-Protokoll.
    * **OSPF (Open Shortest Path First):** Ein Link-State-Protokoll, das auf dem Dijkstra-Algorithmus basiert.
    * **BGP (Border Gateway Protocol):** Ein Path-Vector-Protokoll, das hauptsächlich für das Routing zwischen autonomen Systemen (AS) im Internet verwendet wird.
-   **Statische vs. Dynamische Routen:**
    * **Statische Routen:** Werden manuell vom Netzwerkadministrator in die Routing-Tabelle eingetragen. Sie sind einfach zu konfigurieren, aber unflexibel bei Topologieänderungen.
    * **Dynamische Routen:** Werden automatisch von Routing-Protokollen gelernt und angepasst, wenn sich die Netzwerktopologie ändert. Sie sind flexibler, aber komplexer zu konfigurieren.
-   **Metrik:** Routing-Protokolle verwenden Metriken (z.B. Hop-Count, Bandbreite, Verzögerung, Kosten), um den "besten" Pfad zu einem Zielnetzwerk zu bestimmen. Der Pfad mit der niedrigsten Metrik wird in der Regel bevorzugt.
-   **Nächster Hop (Next Hop):** Die Routing-Tabelle enthält für jedes Zielnetzwerk die IP-Adresse des nächsten Routers (Next Hop), an den das Paket weitergeleitet werden soll, um sein Ziel zu erreichen.
-   **Routing-Entscheidung:** Wenn ein Router ein Datenpaket empfängt, untersucht er die Ziel-IP-Adresse und konsultiert seine Routing-Tabelle, um den nächsten Hop für dieses Ziel zu bestimmen. Das Paket wird dann an den nächsten Hop weitergeleitet. Dieser Prozess wiederholt sich, bis das Paket sein Zielnetzwerk erreicht hat.

**Der Unterschied zur Weiterleitung (Forwarding):**

Obwohl die Begriffe oft synonym verwendet werden, gibt es einen feinen Unterschied:

* **Routing:** Der Prozess der Bestimmung der besten Pfade zu Zielnetzwerken und des Aufbaus der Routing-Tabelle.
* **Weiterleitung (Forwarding):** Der tatsächliche Akt des Sendens eines Datenpakets von einer Schnittstelle eines Routers zur nächsten basierend auf den Informationen in der Routing-Tabelle.

## Fazit

Routing ist ein essenzieller Prozess in der Netzwerkschicht (OSI) bzw. der Internetschicht (TCP/IP), der die Kommunikation über verschiedene Netzwerke hinweg ermöglicht. Router verwenden IP-Adressen und Routing-Tabellen, die durch statische Konfiguration oder dynamische Routing-Protokolle erstellt werden, um die besten Pfade für die Weiterleitung von Datenpaketen zu bestimmen. Das Verständnis des Routings ist entscheidend für das Verständnis der Funktionsweise moderner Netzwerke, insbesondere des Internets.

## Links und Quellen

* **Wikipedia - Routing:** [https://de.wikipedia.org/wiki/Routing](https://de.wikipedia.org/wiki/Routing)
* **Cisco - How Routers Work:** [https://www.cisco.com/c/en/us/solutions/small-business/resource-center/networking/how-routers-work.html](https://www.cisco.com/c/en/us/solutions/small-business/resource-center/networking/how-routers-work.html) (Englischsprachig)
* **Cloudflare - What is routing?** [https://www.cloudflare.com/learning/network-layer/what-is-routing/](https://www.cloudflare.com/learning/network-layer/what-is-routing/) (Englischsprachig)
* **GeeksforGeeks - Introduction to Routing in Computer Networks:** [https://www.geeksforgeeks.org/introduction-to-routing-in-computer-networks/](https://www.geeksforgeeks.org/introduction-to-routing-in-computer-networks/)(Englischsprachig)
* **IBM - What is network routing?** [https://www.ibm.com/cloud/learn/routing](https://www.ibm.com/cloud/learn/routing) (Englischsprachig)
