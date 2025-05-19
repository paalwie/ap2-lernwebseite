# Netzwerkkonzepte (-topologien, -infrastrukturen) benennen und charakterisieren: Datenübertragungsrate

## Einführung

Die Datenübertragungsrate, oft auch als Bandbreite oder Durchsatz bezeichnet, ist ein zentrales Konzept zur Charakterisierung der Leistungsfähigkeit von Netzwerken und Netzwerkverbindungen. Sie gibt an, wie viele Daten in einer bestimmten Zeiteinheit über eine Netzwerkverbindung übertragen werden können. Das Verständnis der Datenübertragungsrate ist entscheidend für die Bewertung der Netzwerkperformance, die Planung von Netzwerkinfrastrukturen und die Auswahl geeigneter Technologien.

## Charakterisierung der Datenübertragungsrate

Die Datenübertragungsrate wird üblicherweise in Bits pro Sekunde (bps) oder Vielfachen davon angegeben. Die gebräuchlichsten Einheiten sind:

-   **bps:** Bits pro Sekunde (die Grundeinheit)
-   **kbps:** Kilobits pro Sekunde ($10^3$ bps)
-   **Mbps:** Megabits pro Sekunde ($10^6$ bps)
-   **Gbps:** Gigabit pro Sekunde ($10^9$ bps)
-   **Tbps:** Terabit pro Sekunde ($10^{12}$ bps)

**Wichtige Aspekte der Datenübertragungsrate:**

-   **Theoretische vs. Tatsächliche Rate:** Die von Herstellern oder Standardspezifikationen angegebenen Datenübertragungsraten sind oft theoretische Maximalwerte. Die tatsächlich erreichbare Übertragungsrate kann durch verschiedene Faktoren beeinflusst werden, wie z.B.:
    -   Netzwerküberlastung
    -   Hardwarebegrenzungen (z.B. Leistung von Netzwerkadaptern, Routern, Switches)
    -   Entfernung und Qualität der Übertragungsmedien (z.B. Kabel, Funkwellen)
    -   Interferenzen (bei drahtlosen Netzwerken)
    -   Protokoll-Overhead
    -   Anzahl der gleichzeitig aktiven Benutzer
-   **Bandbreite vs. Durchsatz:**
    -   **Bandbreite:** Die maximale theoretische Datenübertragungsrate einer Verbindung oder eines Netzwerks. Sie ist eine Eigenschaft der physikalischen oder logischen Verbindung.
    -   **Durchsatz:** Die tatsächlich gemessene Datenübertragungsrate, die zu einem bestimmten Zeitpunkt erreicht wird. Der Durchsatz ist oft niedriger als die Bandbreite aufgrund der oben genannten Faktoren.
-   **Upstream vs. Downstream:** Bei asymmetrischen Verbindungen (z.B. viele Internetanschlüsse) unterscheidet man zwischen der Upstream-Rate (Geschwindigkeit des Datenverkehrs vom Benutzer zum Netzwerk) und der Downstream-Rate (Geschwindigkeit des Datenverkehrs vom Netzwerk zum Benutzer). Diese Raten können unterschiedlich sein.
-   **Faktoren, die die Datenübertragungsrate beeinflussen:**
    -   **Netzwerktechnologie:** Unterschiedliche Technologien (z.B. Ethernet, WLAN, Glasfaser) bieten unterschiedliche maximale Datenübertragungsraten.
    -   **Netzwerkgeräte:** Die Leistungsfähigkeit von Switches, Routern und anderen Netzwerkgeräten begrenzt die maximal mögliche Datenübertragungsrate.
    -   **Verkabelung und Infrastruktur:** Die Qualität und Kategorie der verwendeten Kabel (z.B. Cat 5e, Cat 6) und die zugrunde liegende Infrastruktur beeinflussen die erreichbare Geschwindigkeit.
    -   **Funkfrequenzen und Standards:** Bei WLAN spielen die verwendeten Frequenzbänder (2,4 GHz, 5 GHz) und die WLAN-Standards (z.B. 802.11ac, 802.11ax) eine entscheidende Rolle für die Datenübertragungsrate.

## Bedeutung der Datenübertragungsrate für Netzwerkkonzepte und -infrastrukturen

Die Datenübertragungsrate ist ein wesentlicher Faktor bei der Planung und Charakterisierung von Netzwerkkonzepten und -infrastrukturen:

-   **Auswahl der Netzwerktechnologie:** Die benötigte Datenübertragungsrate für die geplanten Anwendungen (z.B. Videokonferenzen, Cloud-Dienste, große Datenübertragungen) bestimmt die Auswahl der geeigneten Netzwerktechnologien (z.B. Gigabit Ethernet statt Fast Ethernet, Glasfaser statt Kupfer).
-   **Dimensionierung der Netzwerkinfrastruktur:** Die erwartete Anzahl von Benutzern und deren Bandbreitenbedarf beeinflussen die Dimensionierung der Netzwerkgeräte (z.B. Anzahl und Geschwindigkeit der Ports an Switches und Routern) und der Verbindungen.
-   **Qualität der Dienste (QoS):** In Netzwerken, die verschiedene Arten von Datenverkehr mit unterschiedlichen Anforderungen an die Datenübertragungsrate unterstützen (z.B. Sprache, Video, Daten), sind Mechanismen zur Quality of Service (QoS) wichtig, um eine ausreichende Bandbreite für zeitkritische Anwendungen sicherzustellen.
-   **Leistungsbewertung und -optimierung:** Die Messung der tatsächlichen Datenübertragungsrate (Durchsatz) ist entscheidend für die Bewertung der Netzwerkleistung und die Identifizierung von Engpässen oder Optimierungspotenzialen.
-   **Zukünftige Anforderungen:** Bei der Planung von Netzwerkinfrastrukturen müssen auch zukünftige Bandbreitenanforderungen berücksichtigt werden, um sicherzustellen, dass das Netzwerk skalierbar ist und neue Technologien und Anwendungen unterstützen kann.

## Beispiele für typische Datenübertragungsraten

-   **Heimnetzwerk (WLAN):** 54 Mbps (802.11g) bis mehrere Gbps (802.11ax/Wi-Fi 6 oder höher)
-   **Lokales Büronetzwerk (Ethernet):** 100 Mbps (Fast Ethernet) bis 10 Gbps (und mehr)
-   **Internetanschluss (Breitband):** 16 Mbps bis 1 Gbps (oder mehr) Downstream
-   **Mobilfunknetz (LTE/5G):** Bis zu mehrere hundert Mbps oder sogar Gbps (theoretisch)
-   **Rechenzentrumsverbindungen:** 10 Gbps, 40 Gbps, 100 Gbps und mehr

## Fazit

Die Datenübertragungsrate ist ein fundamentaler Parameter zur Charakterisierung von Netzwerken. Sie bestimmt die Leistungsfähigkeit und die Eignung eines Netzwerks für bestimmte Anwendungen und Benutzeranforderungen. Bei der Planung und dem Betrieb von Netzwerkinfrastrukturen ist es entscheidend, die theoretischen und tatsächlichen Datenübertragungsraten zu verstehen und die Infrastruktur entsprechend zu dimensionieren und zu optimieren.

## Links und Quellen

* **Wikipedia - Datenübertragungsrate:** [https://de.wikipedia.org/wiki/Daten%C3%BCbertragungsrate](https://de.wikipedia.org/wiki/Daten%C3%BCbertragungsrate)
* **Techopedia - Data Transfer Rate:** [https://www.techopedia.com/definition/5784/data-transfer-rate](https://www.techopedia.com/definition/5784/data-transfer-rate) (Englischsprachig)
* **Speedtest by Ookla - What is bandwidth?** [https://www.speedtest.net/insights/what-is-bandwidth/](https://www.speedtest.net/insights/what-is-bandwidth/) (Englischsprachig - erklärt Bandbreite im Kontext der Datenübertragungsrate)
* **Federal Communications Commission (FCC) - Understanding Broadband Speed:** [https://www.fcc.gov/consumers/guides/understanding-broadband-speed](https://www.fcc.gov/consumers/guides/understanding-broadband-speed) (Englischsprachig - Fokus auf Breitbandgeschwindigkeiten)
* **Lifewire - What Is Data Transfer Rate?** [https://www.lifewire.com/data-transfer-rate-817789](https://www.lifewire.com/lifewire/what-is-data-transfer-rate-817789) (Englischsprachig)
