# Netzwerkkonzepte (-topologien, -infrastrukturen) benennen und charakterisieren: Drahtlos (PAN/WLAN/Mesh)

## Einführung

Drahtlose Netzwerktechnologien haben in den letzten Jahrzehnten enorm an Bedeutung gewonnen und ermöglichen flexible Konnektivität ohne physische Kabel. Verschiedene Arten von drahtlosen Netzwerken existieren, die sich in ihrer Ausdehnung, den verwendeten Technologien und den typischen Anwendungsfällen unterscheiden. Die wichtigsten Kategorien sind PAN (Personal Area Network), WLAN (Wireless Local Area Network) und Mesh-Netzwerke.

## Charakterisierung der drahtlosen Netzwerktypen

**1. PAN (Personal Area Network) - Persönliches Netzwerk:**

-   **Ausdehnung:** Ein PAN erstreckt sich über einen sehr kleinen Bereich, typischerweise im Umkreis einer Person oder eines einzelnen Arbeitsplatzes (bis zu etwa 10 Metern).
-   **Technologien:** Häufig verwendete Technologien in PANs sind:
    -   **Bluetooth:** Ein Standard für die drahtlose Kommunikation über kurze Distanzen, primär für die Verbindung von Peripheriegeräten (z.B. Kopfhörer, Tastaturen, Mäuse) mit Computern oder Smartphones.
    -   **Zigbee:** Ein energiesparender Standard für drahtlose Sensornetzwerke und Smart-Home-Anwendungen.
    -   **NFC (Near-Field Communication):** Eine Technologie für die kontaktlose Kommunikation über sehr kurze Distanzen (wenige Zentimeter), z.B. für mobile Zahlungen oder das Koppeln von Geräten.
    -   **Infrarot (IR):** Eine ältere Technologie, die eine direkte Sichtverbindung für die Datenübertragung benötigt (z.B. Fernbedienungen).
-   **Eigentümer und Verwaltung:** PANs werden in der Regel von Einzelpersonen für den persönlichen Gebrauch eingerichtet und verwaltet.
-   **Kosten:** Die Kosten für die Geräte, die PAN-Technologien unterstützen, sind in der Regel gering.
-   **Beispiele:** Verbindung eines Bluetooth-Kopfhörers mit einem Smartphone, ein Zigbee-basiertes Smart-Home-System, kontaktloses Bezahlen mit NFC.
-   **Charakteristische Merkmale:**
    -   Sehr kurze Reichweite.
    -   Fokus auf die Verbindung persönlicher Geräte oder Geräte in unmittelbarer Nähe.
    -   Oft energiesparend (insbesondere Bluetooth Low Energy und Zigbee).
    -   Einfache Einrichtung und Verwendung.

**2. WLAN (Wireless Local Area Network) - Drahtloses lokales Netzwerk:**

-   **Ausdehnung:** Ein WLAN erstreckt sich über einen begrenzten geografischen Bereich, typischerweise ein Gebäude, ein Büro, ein Zuhause oder einen Campus (bis zu etwa 100 Metern, abhängig von den Bedingungen und der Hardware).
-   **Technologie:** Die vorherrschende Technologie für WLANs ist die Familie der IEEE 802.11-Standards (Wi-Fi). Diese Standards definieren verschiedene Frequenzbänder (2,4 GHz, 5 GHz, 6 GHz) und Übertragungsgeschwindigkeiten (z.B. 802.11n, 802.11ac, 802.11ax/Wi-Fi 6, 802.11be/Wi-Fi 7).
-   **Infrastruktur:** WLANs basieren in der Regel auf einem oder mehreren Access Points (APs), die als zentrale Verbindungspunkte für drahtlose Clients dienen und eine Brücke zum kabelgebundenen Netzwerk bilden.
-   **Eigentümer und Verwaltung:** WLANs werden typischerweise von Organisationen, Unternehmen oder Privatpersonen betrieben und verwaltet.
-   **Kosten:** Die Kosten für WLAN-Geräte (Router mit integriertem AP, separate APs, WLAN-Adapter) sind moderat.
-   **Beispiele:** Heimische Wi-Fi-Netzwerke, drahtlose Netzwerke in Büros, Cafés oder Universitäten.
-   **Charakteristische Merkmale:**
    -   Mittlere Reichweite.
    -   Hohe Datenübertragungsraten (abhängig vom Standard).
    -   Verbindung mehrerer Geräte mit einem zentralen Access Point.
    -   Ermöglicht Mobilität innerhalb des Abdeckungsbereichs.
    -   Sicherheitsmechanismen wie WPA2/WPA3 zur Verschlüsselung und Zugriffskontrolle.

**3. Mesh-Netzwerk (Wireless Mesh Network - WMN):**

-   **Ausdehnung:** Mesh-Netzwerke können sich über einen größeren Bereich erstrecken als herkömmliche WLANs, da sie die Reichweite durch die Vernetzung mehrerer drahtloser Knoten erweitern.
-   **Technologie:** In einem Mesh-Netzwerk kommunizieren die drahtlosen Knoten (oft als Mesh-Router oder Mesh-Points bezeichnet) nicht nur mit einem zentralen AP, sondern auch direkt miteinander. Der Datenverkehr wird dynamisch über die besten verfügbaren Pfade zwischen den Knoten weitergeleitet.
-   **Infrastruktur:** Mesh-Netzwerke bestehen aus mehreren Mesh-Knoten, von denen einige direkt mit dem kabelgebundenen Netzwerk verbunden sein können (als Gateway). Die anderen Knoten fungieren als Repeater und leiten den Datenverkehr weiter.
-   **Eigentümer und Verwaltung:** Mesh-Netzwerke werden in Privathaushalten, Unternehmen und in größeren geografischen Bereichen (z.B. städtische Mesh-Netzwerke) eingesetzt. Die Verwaltung kann zentralisiert oder dezentralisiert erfolgen.
-   **Kosten:** Die Kosten für Mesh-Systeme können höher sein als für einzelne WLAN-Router, da mehrere Knoten benötigt werden.
-   **Beispiele:** Whole-Home-Wi-Fi-Systeme, drahtlose Sensornetzwerke in großen Industrieanlagen, städtische WLAN-Initiativen.
-   **Charakteristische Merkmale:**
    -   Erweiterte Reichweite und verbesserte Abdeckung ohne lange Kabel.
    -   Selbstkonfiguration und Selbstheilung (wenn ein Knoten ausfällt, wird der Verkehr automatisch umgeleitet).
    -   Redundanz durch mehrere Pfade für die Datenübertragung.
    -   Einfache Erweiterung durch Hinzufügen weiterer Knoten.
    -   Kann in Umgebungen mit Hindernissen eine bessere Leistung bieten als ein einzelner AP.

## Vergleich der drahtlosen Netzwerktypen

| Merkmal         | PAN (Personal Area Network) | WLAN (Wireless Local Area Network) | Mesh-Netzwerk (Wireless Mesh Network) |
| :-------------- | :-------------------------- | :--------------------------------- | :------------------------------------ |
| Ausdehnung      | Sehr kurz (bis 10 m)        | Mittel (bis 100 m)                 | Groß (variabel, durch Knoten erweiterbar) |
| Haupttechnologien | Bluetooth, Zigbee, NFC, IR | Wi-Fi (IEEE 802.11)                | Wi-Fi-basierend mit Mesh-Protokollen |
| Infrastruktur   | Peer-to-Peer oder zentralisiert für kurze Verbindungen | Zentraler Access Point (AP)            | Vernetzte Knoten (APs/Router)          |
| Mobilität       | Hoch innerhalb des Bereichs | Hoch innerhalb des Abdeckungsbereichs | Hoch innerhalb des gesamten Mesh-Bereichs |
| Komplexität     | Einfach                     | Mittel                             | Mittel bis hoch                       |
| Anwendungsfälle | Peripheriegeräte, Smart Home (kurze Distanz), kontaktlose Zahlungen | Heimnetzwerke, Büros, öffentliche Hotspots | Flächendeckendes WLAN, Smart Cities, Sensornetzwerke |

## Fazit

Drahtlose Netzwerke bietenFlexibilität und Komfort in verschiedenen Anwendungsbereichen. PANs ermöglichen die Verbindung persönlicher Geräte, WLANs bieten lokalen Netzwerkzugang über Wi-Fi, und Mesh-Netzwerke erweitern die drahtlose Abdeckung und Zuverlässigkeit durch die Vernetzung mehrerer Knoten. Die Wahl des geeigneten drahtlosen Netzwerktyps hängt von den spezifischen Anforderungen hinsichtlich Reichweite, Geschwindigkeit, Anzahl der Geräte und Anwendungsfall ab.

## Links und Quellen

* **Wikipedia - Personal area network:** [https://de.wikipedia.org/wiki/Personal_Area_Network](https://de.wikipedia.org/wiki/Personal_Area_Network)
* **Wikipedia - Wireless LAN:** [https://de.wikipedia.org/wiki/Wireless_LAN](https://de.wikipedia.org/wiki/Wireless_LAN)
* **Wikipedia - Mesh-Netzwerk:** [https://de.wikipedia.org/wiki/Mesh-Netzwerk](https://de.wikipedia.org/wiki/Mesh-Netzwerk)
* **Bluetooth SIG:** [https://www.bluetooth.com/](https://www.bluetooth.com/) (Offizielle Bluetooth-Website - Englischsprachig)
* **Wi-Fi Alliance:** [https://www.wi-fi.org/](https://www.wi-fi.org/) (Offizielle Wi-Fi-Website - Englischsprachig)
* **Zigbee Alliance (jetzt Connectivity Standards Alliance - CSA):** [https://csa-iot.org/](https://csa-iot.org/) (Offizielle CSA-Website - Englischsprachig)
* **Netgear - What is a Mesh Network?** [https://www.netgear.com/landing/mesh/](https://www.netgear.com/landing/mesh/) (Englischsprachig - Informationen von einem Hersteller)
* **Linksys - What is a Mesh WiFi Network?** [https://www.linksys.com/us/resource-center/wifi-explained/what-is-mesh-wifi/](https://www.linksys.com/us/resource-center/wifi-explained/what-is-mesh-wifi/) (Englischsprachig - Informationen von einem Hersteller)
