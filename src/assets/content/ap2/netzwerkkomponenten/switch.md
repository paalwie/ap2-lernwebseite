# Netzwerkkomponenten vergleichen und beschreiben können: Switch

## Einführung

Im Bereich der Netzwerktechnik sind Switches zentrale Komponenten, die für die effiziente Kommunikation innerhalb lokaler Netzwerke (LANs) unerlässlich sind. Sie ermöglichen die Verbindung mehrerer Geräte und die gezielte Weiterleitung von Datenverkehr. Um Switches im Kontext anderer Netzwerkkomponenten zu verstehen, ist es wichtig, ihre Funktionsweise und Eigenschaften zu beschreiben und sie mit ähnlichen Geräten zu vergleichen.

## Beschreibung eines Switches

Ein **Netzwerk-Switch** ist ein intelligentes Netzwerkgerät der Sicherungsschicht (Layer 2) des OSI-Modells. Seine Hauptaufgabe besteht darin, Datenframes (die auf MAC-Adressen basieren) gezielt zwischen den verbundenen Geräten innerhalb eines LANs weiterzuleiten.

**Kernfunktionen und Eigenschaften:**

-   **Layer-2-Betrieb:** Switches arbeiten hauptsächlich auf der Sicherungsschicht und analysieren die MAC-Adressen der eingehenden Frames, um die Weiterleitungsentscheidung zu treffen.
-   **MAC-Adresstabelle (CAM-Tabelle):** Switches führen eine Tabelle, in der die MAC-Adressen der angeschlossenen Geräte und die zugehörigen Ports gespeichert sind. Diese Tabelle wird dynamisch durch das Lernen von Quell-MAC-Adressen aufgebaut.
-   **Gezielte Weiterleitung (Switching):** Im Gegensatz zu Hubs leiten Switches Frames nur an den Port weiter, der der Ziel-MAC-Adresse entspricht (Unicast). Bei unbekannten Ziel-MAC-Adressen oder Broadcasts erfolgt ein Flooding an alle Ports (außer dem Eingangsport).
-   **Vollduplex-Unterstützung:** Die meisten modernen Switches unterstützen Vollduplex-Kommunikation, was bedeutet, dass Geräte gleichzeitig senden und empfangen können, ohne dass es zu Kollisionen kommt.
-   **Eigene Kollisionsdomäne pro Port:** Jeder Port eines Switches bildet eine eigene Kollisionsdomäne, wodurch Kollisionen im Netzwerk deutlich reduziert werden (im Vergleich zu Hubs, die eine einzige große Kollisionsdomäne bilden).
-   **Eine Broadcast-Domäne (standardmäßig):** Standardmäßig gehört ein Switch zu einer einzigen Broadcast-Domäne. Broadcast-Nachrichten werden an alle angeschlossenen Geräte gesendet. VLANs (Virtual Local Area Networks) können verwendet werden, um Broadcast-Domänen zu segmentieren.
-   **Anzahl der Ports:** Switches sind mit einer unterschiedlichen Anzahl von Ports erhältlich (z.B. 8, 16, 24, 48 oder mehr), um verschiedene Netzwerkgrößen zu bedienen.
-   **Geschwindigkeit der Ports:** Die Geschwindigkeit der Ports kann variieren (z.B. Fast Ethernet (100 Mbit/s), Gigabit Ethernet (1 Gbit/s), 10 Gigabit Ethernet und höhere Geschwindigkeiten).
-   **Verwaltbarkeit (Managed vs. Unmanaged):**
    * **Unmanaged Switches:** Einfache "Plug-and-Play"-Geräte ohne Konfigurationsmöglichkeiten. Sie sind ideal für kleinere Netzwerke oder den Heimgebrauch.
    * **Managed Switches:** Bieten umfangreiche Konfigurationsmöglichkeiten über eine grafische Benutzeroberfläche (GUI) oder eine Befehlszeilenschnittstelle (CLI). Sie unterstützen Funktionen wie VLANs, QoS (Quality of Service), Port-Sicherheit, SNMP (Simple Network Management Protocol) und Link Aggregation.
-   **Layer-3-Switching:** Einige fortgeschrittene Switches (Layer-3-Switches) besitzen auch Routing-Funktionalität und können Datenverkehr basierend auf IP-Adressen (Layer 3) weiterleiten. Sie kombinieren die Funktionen von Switches und einfachen Routern.
-   **Stromversorgung (PoE):** Einige Switches unterstützen Power over Ethernet (PoE), wodurch sie Geräte wie IP-Telefone, WLAN-Access Points und IP-Kameras über das Netzwerkkabel mit Strom versorgen können.

## Vergleich mit anderen Netzwerkkomponenten

Um die Rolle eines Switches besser zu verstehen, ist ein Vergleich mit anderen gängigen Netzwerkkomponenten hilfreich:

**Switch vs. Hub:**

| Merkmal        | Hub                                      | Switch                                         |
| :------------- | :--------------------------------------- | :--------------------------------------------- |
| Schicht        | Physikalische Schicht (Layer 1)          | Sicherungsschicht (Layer 2)                   |
| Intelligenz     | Dumm (leitet alles an alle weiter)       | Intelligent (lernt MAC-Adressen, gezielte Weiterleitung) |
| Kollisionsdomäne | Eine für alle Ports                     | Eigene Kollisionsdomäne pro Port               |
| Bandbreite     | Geteilte Bandbreite für alle Ports       | Dedizierte Bandbreite pro Port (Vollduplex)     |
| Effizienz      | Ineffizient, hohe Kollisionsrate         | Effizient, geringe Kollisionsrate             |
| MAC-Adressen   | Ignoriert MAC-Adressen                   | Verwendet MAC-Adresstabelle für Weiterleitung |

**Switch vs. Router:**

| Merkmal        | Switch                                     | Router                                          |
| :------------- | :----------------------------------------- | :---------------------------------------------- |
| Schicht        | Sicherungsschicht (Layer 2)                | Netzwerkschicht (Layer 3)                      |
| Adressierung   | MAC-Adressen                               | IP-Adressen                                     |
| Hauptfunktion  | Weiterleitung innerhalb eines LANs         | Weiterleitung zwischen verschiedenen Netzwerken (Routing) |
| Broadcast-Domäne | Eine (standardmäßig)                     | Segmentiert Broadcast-Domänen                  |
| Routing-Tabellen | Keine (Layer-2-Switches) oder einfach (Layer-3-Switches) | Umfangreiche Routing-Tabellen und Routing-Protokolle |
| Einsatzbereich | Lokale Netzwerke (LANs)                    | Verbindung von LANs, Internetzugang            |

**Switch vs. Access Point (WLAN AP):**

| Merkmal        | Switch                                     | Access Point (WLAN AP)                         |
| :------------- | :----------------------------------------- | :--------------------------------------------- |
| Medium         | Kabelgebunden (Ethernet)                   | Drahtlos (Wi-Fi)                               |
| Hauptfunktion  | Verbindung kabelgebundener Geräte         | Ermöglicht drahtlosen Netzwerkzugang           |
| Schicht        | Sicherungsschicht (Layer 2)                | Sicherungsschicht (Layer 2)                    |
| MAC-Adressen   | Weiterleitung basierend auf MAC-Adressen     | Verwaltung von MAC-Adressen drahtloser Clients |
| Integration    | Oft separate Geräte                       | Kann in Router oder andere Geräte integriert sein |

## Fazit

Switches sind unverzichtbare Netzwerkkomponenten für den Aufbau effizienter und performanter lokaler Netzwerke. Sie arbeiten auf der Sicherungsschicht und ermöglichen die gezielte Weiterleitung von Datenframes basierend auf MAC-Adressen. Im Vergleich zu Hubs bieten sie eine deutlich höhere Effizienz durch die Reduzierung von Kollisionen und die Unterstützung von Vollduplex. Router hingegen arbeiten auf der Netzwerkschicht und ermöglichen die Kommunikation zwischen verschiedenen Netzwerken. Access Points ermöglichen drahtlosen Geräten den Zugriff auf das kabelgebundene Netzwerk, das oft durch Switches aufgebaut ist. Das Verständnis der Unterschiede und Funktionen dieser Komponenten ist entscheidend für die Planung und den Betrieb moderner Netzwerke.

## Links und Quellen

* **Wikipedia - Netzwerk-Switch:** [https://de.wikipedia.org/wiki/Netzwerk-Switch](https://de.wikipedia.org/wiki/Netzwerk-Switch)
* **Cisco - What is a Network Switch?:** [https://www.cisco.com/c/en/us/solutions/small-business/resource-center/networking/what-is-a-network-switch.html](https://www.cisco.com/c/en/us/solutions/small-business/resource-center/networking/what-is-a-network-switch.html)
* **Cloudflare - What is a network switch?:** [https://www.cloudflare.com/learning/network-layer/what-is-a-network-switch/](https://www.cloudflare.com/learning/network-layer/what-is-a-network-switch/)
* **GeeksforGeeks - Network Devices - Hub, Switch, Router, Bridge, Gateway:** [https://www.geeksforgeeks.org/network-devices-hub-switch-router-bridge-gateway/](https://www.geeksforgeeks.org/network-devices-hub-switch-router-bridge-gateway/)
* **IBM - What is a network switch?** [https://www.ibm.com/cloud/learn/network-switch](https://www.ibm.com/cloud/learn/network-switch)
