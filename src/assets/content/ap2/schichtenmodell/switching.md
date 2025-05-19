# Schichtenmodelle, z.B. OSI, TCP/IP benennen und zuordnen können: Switching

## Einführung

Im Kontext von Netzwerken und den Schichtenmodellen OSI und TCP/IP ist Switching ein fundamentaler Prozess, der die effiziente Weiterleitung von Datenframes innerhalb eines lokalen Netzwerks (LAN) ermöglicht. Switches sind Netzwerkgeräte der Sicherungsschicht (Layer 2) im OSI-Modell und spielen eine zentrale Rolle bei der Verbindung von Geräten innerhalb eines LANs.

## Grundlagen: OSI- und TCP/IP-Modell (Relevante Schichten)

**Das OSI-Modell (7 Schichten):**

1.  Anwendungsschicht (Application Layer)
2.  Darstellungsschicht (Presentation Layer)
3.  Sitzungsschicht (Session Layer)
4.  Transportschicht (Transport Layer)
5.  Netzwerkschicht (Network Layer)
6.  **Sicherungsschicht (Data Link Layer):** Verantwortlich für die physische Adressierung (MAC-Adressen) und die Weiterleitung von Datenframes innerhalb eines lokalen Netzwerks (**Switching** findet hier statt).
7.  Physikalische Schicht (Physical Layer)

**Das TCP/IP-Modell (4 Schichten):**

1.  Anwendungsschicht (Application Layer)
2.  Transportschicht (Transport Layer)
3.  Internetschicht (Internet Layer)
4.  **Netzzugangsschicht (Network Access Layer):** Vereint die Funktionalitäten der OSI-Schichten 1 und 2. **Switching** ist eine Kernfunktion dieser Schicht im LAN-Umfeld.

## Switching: Intelligente Weiterleitung im LAN

Switching ist der Prozess der Weiterleitung von Datenframes zwischen den Ports eines Netzwerk-Switches basierend auf der Ziel-MAC-Adresse. Switches arbeiten auf der Sicherungsschicht (Layer 2) des OSI-Modells und verwenden MAC-Adressen, um den Bestimmungsort eines Frames innerhalb des lokalen Netzwerks zu ermitteln.

**Zuordnung zum Schichtenmodell:**

-   **OSI-Modell:** Sicherungsschicht (Data Link Layer - Schicht 2)
-   **TCP/IP-Modell:** Netzzugangsschicht (Network Access Layer - Schicht 1 & 2)

**Wichtige Aspekte des Switching:**

-   **MAC-Adresstabellen (CAM-Tabellen):** Switches führen MAC-Adresstabellen (Content Addressable Memory), in denen die MAC-Adressen der mit ihren Ports verbundenen Geräte und der zugehörige Port gespeichert werden.
-   **Lernen von MAC-Adressen:** Wenn ein Switch einen Frame von einem Gerät empfängt, lernt er die Quell-MAC-Adresse und den Port, über den der Frame eingegangen ist, und trägt diese Information in seine MAC-Adresstabelle ein.
-   **Frame-Weiterleitung:** Wenn ein Switch einen Frame mit einer Ziel-MAC-Adresse empfängt, sucht er in seiner MAC-Adresstabelle nach dem zugehörigen Port.
    * **Bekannte Ziel-MAC-Adresse:** Wenn der Switch den Port für die Ziel-MAC-Adresse kennt, leitet er den Frame nur an diesen spezifischen Port weiter (Unicast).
    * **Unbekannte Ziel-MAC-Adresse:** Wenn der Switch den Port für die Ziel-MAC-Adresse nicht kennt, leitet er den Frame an alle Ports außer dem Empfangsport weiter (Flooding). Das Zielgerät antwortet in der Regel, wodurch der Switch die MAC-Adresse und den zugehörigen Port lernt.
    * **Broadcast-Adresse:** Frames mit einer Broadcast-Ziel-MAC-Adresse (FF:FF:FF:FF:FF:FF) werden an alle Ports im LAN weitergeleitet.
    * **Multicast-Adresse:** Frames mit einer Multicast-Ziel-MAC-Adresse werden an eine bestimmte Gruppe von Geräten weitergeleitet, die sich für diese Multicast-Gruppe registriert haben.
-   **Vollduplex-Betrieb:** Switches ermöglichen in der Regel Vollduplex-Kommunikation, bei der Geräte gleichzeitig senden und empfangen können, was die Effizienz im Vergleich zu Hubs (die Halbduplex verwenden) deutlich erhöht.
-   **Kollisionsdomänen:** Jeder Port an einem Switch bildet eine eigene Kollisionsdomäne. Dies bedeutet, dass Kollisionen (die auftreten können, wenn mehrere Geräte gleichzeitig versuchen zu senden) auf den jeweiligen Port beschränkt bleiben und nicht das gesamte LAN beeinträchtigen.
-   **Broadcast-Domänen:** Ein Switch erzeugt eine einzige Broadcast-Domäne. Broadcast-Nachrichten werden an alle Geräte im LAN gesendet. Router werden verwendet, um Broadcast-Domänen zu segmentieren.
-   **Layer-3-Switching:** Einige fortgeschrittene Switches (Layer-3-Switches) verfügen über Routing-Funktionalität und können auch auf der Netzwerkschicht (Layer 3) basierend auf IP-Adressen routen.

**Der Unterschied zu Hubs:**

Im Gegensatz zu Switches arbeiten Hubs auf der physikalischen Schicht (Layer 1). Sie leiten alle empfangenen Daten einfach an alle anderen Ports weiter, ohne die MAC-Adressen zu analysieren. Dies führt zu Kollisionen und einer ineffizienten Nutzung der Bandbreite. Switches sind intelligenter und leiten Daten gezielt weiter.

## Fazit

Switching ist ein entscheidender Prozess in der Sicherungsschicht (OSI) bzw. der Netzzugangsschicht (TCP/IP), der die effiziente und gezielte Weiterleitung von Datenframes innerhalb eines lokalen Netzwerks ermöglicht. Switches verwenden MAC-Adresstabellen, um den Bestimmungsort von Frames zu ermitteln und sie nur an den entsprechenden Port weiterzuleiten. Dies verbessert die Netzwerkeffizienz und reduziert Kollisionen im Vergleich zu älteren Technologien wie Hubs. Das Verständnis des Switching ist grundlegend für das Verständnis der Funktionsweise moderner LANs.

## Links und Quellen

* **Wikipedia - Netzwerk-Switch:** [https://de.wikipedia.org/wiki/Netzwerk-Switch](https://de.wikipedia.org/wiki/Netzwerk-Switch)
* **Cisco - What is a Network Switch?:** [https://www.cisco.com/c/en/us/solutions/small-business/resource-center/networking/what-is-a-network-switch.html](https://www.cisco.com/c/en/us/solutions/small-business/resource-center/networking/what-is-a-network-switch.html) (Englischsprachig)
* **Cloudflare - What is a network switch?:** [https://www.cloudflare.com/learning/network-layer/what-is-a-network-switch/](https://www.cloudflare.com/learning/network-layer/what-is-a-network-switch/) (Englischsprachig)
* **GeeksforGeeks - Working of Switch in Computer Network:** [https://www.geeksforgeeks.org/working-of-switch-in-computer-network/](https://www.geeksforgeeks.org/working-of-switch-in-computer-network/) (Englischsprachig)
* **IBM - What is a network switch?** [https://www.ibm.com/cloud/learn/network-switch](https://www.ibm.com/cloud/learn/network-switch) (Englischsprachig)
