# Netzwerkkomponenten vergleichen und beschreiben können: Bridge

## Einführung

Im Bereich der Netzwerktechnik spielen Bridges eine Rolle bei der Verbindung von Netzwerksegmenten. Obwohl sie in modernen Netzwerken weniger verbreitet sind als Switches und Router, ist das Verständnis ihrer Funktionsweise und ihres Vergleichs mit anderen Netzwerkkomponenten wichtig, um die Entwicklung der Netzwerktechnologien zu verstehen.

## Beschreibung einer Bridge

Eine **Netzwerk-Bridge** ist ein Gerät der Sicherungsschicht (Layer 2) des OSI-Modells, das dazu dient, zwei oder mehr Netzwerksegmente (z.B. Ethernet-Segmente) miteinander zu verbinden. Ihr Hauptziel ist es, den Datenverkehr innerhalb der Segmente zu halten und nur den Verkehr zwischen den Segmenten weiterzuleiten, wenn dies erforderlich ist.

**Kernfunktionen und Eigenschaften:**

-   **Layer-2-Betrieb:** Bridges arbeiten auf der Sicherungsschicht und analysieren die MAC-Adressen der eingehenden Frames.
-   **MAC-Adresstabelle:** Ähnlich wie Switches führen Bridges eine MAC-Adresstabelle, in der sie die MAC-Adressen der Geräte in den verbundenen Segmenten und den zugehörigen Port speichern. Diese Tabelle wird dynamisch durch das Lernen von Quell-MAC-Adressen aufgebaut.
-   **Frame-Weiterleitung (Bridging):**
    -   Wenn die Quell- und Ziel-MAC-Adresse des Frames zum selben Segment gehören, wird der Frame nicht über die Bridge weitergeleitet.
    -   Wenn die Ziel-MAC-Adresse zu einem Gerät in einem anderen Segment gehört, leitet die Bridge den Frame an den entsprechenden Port weiter.
    -   Bei unbekannten Ziel-MAC-Adressen oder Broadcasts leitet die Bridge den Frame an alle anderen Segmente weiter (Flooding).
-   **Filterung des Datenverkehrs:** Bridges können den lokalen Datenverkehr in einem Segment halten und so die Bandbreite in anderen Segmenten schonen und die Kollisionsdomänen verkleinern (im Vergleich zu Repeatern oder Hubs).
-   **Verbindung unterschiedlicher physischer Medien (in älteren Implementierungen):** Historisch gesehen konnten Bridges auch unterschiedliche physische Medien verbinden (z.B. Ethernet und Token Ring), obwohl dies in modernen Netzwerken selten der Fall ist.
-   **Spanning Tree Protocol (STP):** In Netzwerken mit redundanten Pfaden zwischen Segmenten können Bridges das Spanning Tree Protocol verwenden, um Schleifen zu verhindern, indem sie bestimmte Pfade logisch blockieren.

## Vergleich mit anderen Netzwerkkomponenten

Um die Rolle einer Bridge zu verstehen, ist ein Vergleich mit anderen Netzwerkkomponenten aufschlussreich:

**Bridge vs. Repeater/Hub:**

| Merkmal        | Repeater/Hub                             | Bridge                                         |
| :------------- | :--------------------------------------- | :--------------------------------------------- |
| Schicht        | Physikalische Schicht (Layer 1)          | Sicherungsschicht (Layer 2)                   |
| Intelligenz     | Sehr gering (reine Signalverstärkung/Weiterleitung) | Intelligent (lernt MAC-Adressen, filtert Verkehr) |
| Kollisionsdomäne | Eine für alle verbundenen Geräte        | Reduziert die Größe der Kollisionsdomänen durch Segmentierung |
| MAC-Adressen   | Ignoriert MAC-Adressen                   | Verwendet MAC-Adresstabelle für Weiterleitung/Filterung |
| Filterung      | Keine                                    | Kann Verkehr basierend auf MAC-Adressen filtern |

**Bridge vs. Switch:**

| Merkmal        | Bridge                                         | Switch                                            |
| :------------- | :--------------------------------------------- | :------------------------------------------------ |
| Anzahl Ports   | Typischerweise wenige Ports (2 oder mehr)      | Viele Ports (8, 16, 24, 48 oder mehr)              |
| Weiterleitung  | Leitet Frames segmentweise weiter             | Leitet Frames gezielt an einzelne Ports weiter (Unicast) |
| Kollisionsdomäne | Eine Kollisionsdomäne pro Segment            | Eigene Kollisionsdomäne pro Port                    |
| Komplexität    | Einfacher in der Architektur                  | Komplexer, höhere Leistung und Funktionalität       |
| Heutige Nutzung | Weniger verbreitet in modernen LANs          | Die primäre Komponente für LAN-Verbindungen       |

**Bridge vs. Router:**

| Merkmal        | Bridge                                         | Router                                          |
| :------------- | :--------------------------------------------- | :---------------------------------------------- |
| Schicht        | Sicherungsschicht (Layer 2)                    | Netzwerkschicht (Layer 3)                      |
| Adressierung   | MAC-Adressen                                   | IP-Adressen                                     |
| Hauptfunktion  | Verbindung und Filterung von LAN-Segmenten     | Weiterleitung zwischen verschiedenen Netzwerken (Routing) |
| Broadcast-Domäne | Erweitert die Broadcast-Domäne                | Segmentiert Broadcast-Domänen                  |
| Routing-Tabellen | Keine                                          | Umfangreiche Routing-Tabellen und Routing-Protokolle |

## Fazit

Bridges waren wichtige Geräte in der Entwicklung der Netzwerktechnologie, um Netzwerksegmente zu verbinden und den Datenverkehr effizienter zu gestalten als mit einfachen Repeatern oder Hubs. Sie arbeiteten auf der Sicherungsschicht und nutzten MAC-Adressen zur Filterung und Weiterleitung von Frames. Mit der Weiterentwicklung der Technologie wurden sie jedoch weitgehend von Switches abgelöst, die eine höhere Portdichte, bessere Leistung und zusätzliche Funktionalitäten bieten. Router bleiben die primären Geräte für die Verbindung verschiedener Netzwerke und das Routing von Datenverkehr auf der Netzwerkschicht. Das Verständnis der Funktionsweise von Bridges hilft, die Evolution der Netzwerkarchitektur nachzuvollziehen.

## Links und Quellen

* **Wikipedia - Netzwerkbrücke:** [https://de.wikipedia.org/wiki/Netzwerkbr%C3%BCcke](https://de.wikipedia.org/wiki/Netzwerkbr%C3%BCcke)
* **Cisco - Bridges:** [https://www.cisco.com/c/en/us/support/docs/lan-switching/integrated-routing-bridging-irb/10579-61.html#anc4](https://www.cisco.com/c/en/us/support/docs/lan-switching/integrated-routing-bridging-irb/10579-61.html#anc4) (Englischsprachig, Abschnitt über Bridges)
* **Techopedia - Network Bridge:** [https://www.techopedia.com/definition/2419/network-bridge](https://www.techopedia.com/definition/2419/network-bridge) (Englischsprachig)
* **GeeksforGeeks - Network Devices - Hub, Switch, Router, Bridge, Gateway:** [https://www.geeksforgeeks.org/network-devices-hub-switch-router-bridge-gateway/](https://www.geeksforgeeks.org/network-devices-hub-switch-router-bridge-gateway/) (Englischsprachig)
* **Studytonight - Network Bridge:** [https://www.studytonight.com/computer-networks/network-bridge](https://www.studytonight.com/computer-networks/network-bridge) (Englischsprachig)
