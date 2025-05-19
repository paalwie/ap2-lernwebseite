# Netzwerkkonzepte (-topologien, -infrastrukturen) benennen und charakterisieren: Verschlüsselung auf Netzwerkebene, VPN

## Einführung

Die Verschlüsselung auf Netzwerkebene ist ein entscheidendes Sicherheitskonzept, um die Vertraulichkeit und Integrität von Daten zu gewährleisten, die über Netzwerke übertragen werden. Virtual Private Networks (VPNs) sind eine gängige Technologie, die Verschlüsselung auf Netzwerkebene nutzt, um sichere Verbindungen über unsichere Netzwerke wie das öffentliche Internet zu erstellen.

## Charakterisierung von Verschlüsselung auf Netzwerkebene und VPNs

**1. Verschlüsselung auf Netzwerkebene:**

-   **Konzept:** Verschlüsselung auf Netzwerkebene bezieht sich auf die Anwendung kryptografischer Verfahren auf Datenpakete, die auf der Netzwerkschicht (Layer 3 des OSI-Modells) oder darunter übertragen werden. Ziel ist es, den Inhalt der Pakete vor unbefugtem Zugriff während der Übertragung zu schützen.
-   **Protokolle:** Das primäre Protokoll für die Verschlüsselung auf Netzwerkebene ist **IPsec (Internet Protocol Security)**.
    -   **IPsec:** Eine Suite von Protokollen zur Sicherung der IP-Kommunikation durch Authentifizierung und/oder Verschlüsselung jedes einzelnen IP-Pakets. IPsec kann im Transportmodus (Ende-zu-Ende-Sicherheit) oder im Tunnelmodus (Sicherheit für den gesamten IP-Tunnel) betrieben werden.
        -   **Authentifizierungs-Header (AH):** Bietet Datenintegrität und Authentifizierung des Absenders, aber keine Verschlüsselung des Paketinhalts.
        -   **Encapsulating Security Payload (ESP):** Bietet sowohl Datenintegrität und Authentifizierung (optional) als auch Verschlüsselung des Paketinhalts.
    -   **Anwendung:** IPsec wird häufig für die Implementierung von VPNs verwendet, insbesondere für Site-to-Site-Verbindungen zwischen Unternehmensnetzwerken oder für den sicheren Remote-Zugriff von Mitarbeitern.
-   **Charakteristische Merkmale:**
    -   Transparente Verschlüsselung für Anwendungen (die Anwendungen selbst müssen keine spezielle Verschlüsselung implementieren).
    -   Schutz des gesamten IP-Pakets (Header und Nutzdaten im Tunnelmodus).
    -   Starke Sicherheitsmechanismen durch moderne kryptografische Algorithmen.
    -   Interoperabilität zwischen verschiedenen Herstellern durch Standardisierung.

**2. VPN (Virtual Private Network):**

-   **Konzept:** Ein VPN erstellt eine sichere, verschlüsselte Verbindung (einen "Tunnel") über ein unsicheres Netzwerk (z.B. das Internet). Dadurch können Benutzer Daten sicher übertragen, als wären sie direkt mit einem privaten Netzwerk verbunden.
-   **Funktionsweise:**
    1.  Ein Benutzer oder ein Netzwerkgerät stellt eine Verbindung zu einem VPN-Server her.
    2.  Die Authentifizierung des Benutzers oder des Geräts erfolgt in der Regel über Benutzername/Passwort, Zertifikate oder andere Methoden.
    3.  Nach erfolgreicher Authentifizierung wird ein verschlüsselter Tunnel zwischen dem Client und dem VPN-Server aufgebaut.
    4.  Der gesamte Netzwerkverkehr, der über diesen Tunnel gesendet wird, wird verschlüsselt, so dass er für Dritte, die den Verkehr abfangen, unlesbar ist.
    5.  Am VPN-Server wird der Verkehr entschlüsselt und an das Zielnetzwerk weitergeleitet. Eingehender Verkehr wird auf ähnliche Weise verschlüsselt an den Client zurückgesendet.
-   **VPN-Protokolle:** Verschiedene Protokolle werden verwendet, um VPN-Verbindungen zu implementieren, darunter:
    -   **IPsec:** Wie oben erwähnt, ein häufig verwendetes Protokoll für VPNs.
    -   **OpenVPN:** Ein Open-Source-VPN-Protokoll, das sowohl TCP als auch UDP unterstützt und als sehr sicher gilt.
    -   **WireGuard:** Ein modernes, schnelles und schlankes VPN-Protokoll, das auf starken kryptografischen Primitiven basiert.
    -   **PPTP (Point-to-Point Tunneling Protocol):** Ein älteres Protokoll, das als weniger sicher gilt und heute kaum noch eingesetzt wird.
    -   **L2TP (Layer 2 Tunneling Protocol):** Oft in Kombination mit IPsec (L2TP/IPsec) verwendet, da L2TP selbst keine Verschlüsselung bietet.
    -   **SSTP (Secure Socket Tunneling Protocol):** Ein von Microsoft entwickeltes VPN-Protokoll, das über HTTPS (Port 443) tunnelt und daher Firewalls oft problemlos passieren kann.
-   **Anwendungsfälle:**
    -   **Remote-Zugriff:** Ermöglicht Mitarbeitern, sicher von zu Hause oder unterwegs auf Unternehmensressourcen zuzugreifen.
    -   **Site-to-Site-VPN:** Verbindet zwei oder mehr geografisch getrennte Unternehmensnetzwerke sicher miteinander.
    -   **Sichere Nutzung öffentlicher WLANs:** Schützt die Datenübertragung bei der Nutzung unsicherer öffentlicher Netzwerke.
    -   **Umgehung von geografischen Beschränkungen:** In einigen Fällen können VPNs verwendet werden, um geografische Inhaltsbeschränkungen zu umgehen (dies kann jedoch gegen die Nutzungsbedingungen von Diensten verstoßen).
-   **Charakteristische Merkmale:**
    -   Erstellung sicherer, verschlüsselter Verbindungen über unsichere Netzwerke.
    -   Schutz der Vertraulichkeit und Integrität der übertragenen Daten.
    -   Ermöglichung von sicherem Remote-Zugriff und Site-to-Site-Konnektivität.
    -   Verwendung verschiedener VPN-Protokolle mit unterschiedlichen Sicherheitsmerkmalen und Geschwindigkeiten.
    -   Kann die IP-Adresse des Benutzers verbergen (je nach VPN-Anbieter und Konfiguration).

## Zusammenspiel von Verschlüsselung auf Netzwerkebene und VPNs

VPNs nutzen typischerweise die Verschlüsselung auf Netzwerkebene (hauptsächlich durch IPsec oder andere VPN-Protokolle) als Kernmechanismus, um die Sicherheit des Tunnels zu gewährleisten. Die VPN-Protokolle definieren, wie die Verschlüsselung, Authentifizierung und der Tunnelaufbau erfolgen.

## Fazit

Die Verschlüsselung auf Netzwerkebene, insbesondere durch IPsec, ist eine grundlegende Technologie, um die Sicherheit der Datenübertragung in Netzwerken zu verbessern. VPNs nutzen diese Verschlüsselung, um sichere, virtuelle Verbindungen über öffentliche Netzwerke zu schaffen und ermöglichen so sicheren Remote-Zugriff und die Verbindung von Unternehmensstandorten. Das Verständnis der Funktionsweise von Verschlüsselungsprotokollen wie IPsec und der verschiedenen VPN-Protokolle ist entscheidend für die Implementierung sicherer Netzwerkinfrastrukturen.

## Links und Quellen

* **Wikipedia - IPsec:** [https://de.wikipedia.org/wiki/IPsec](https://de.wikipedia.org/wiki/IPsec)
* **Wikipedia - Virtual Private Network:** [https://de.wikipedia.org/wiki/Virtual_Private_Network](https://de.wikipedia.org/wiki/Virtual_Private_Network)
* **RFC 4301 - Security Architecture for the Internet Protocol:** [https://datatracker.ietf.org/doc/html/rfc4301](https://datatracker.ietf.org/doc/html/rfc4301) (Grundlegende IPsec-Architektur - Englischsprachig)
* **OpenVPN:** [https://openvpn.net/](https://openvpn.net/) (Offizielle OpenVPN-Website - Englischsprachig)
* **WireGuard:** [https://www.wireguard.com/](https://www.wireguard.com/) (Offizielle WireGuard-Website - Englischsprachig)
* **Cisco - Understanding IPsec:** [https://www.cisco.com/c/en/us/support/docs/security-vpn/ipsec-negotiation-ike-protocols/111583-ipsec-negotiation.html](https://www.cisco.com/c/en/us/support/docs/security-vpn/ipsec-negotiation-ike-protocols/111583-ipsec-negotiation.html) (Englischsprachig)
* **Cloudflare - What is a VPN?** [https://www.cloudflare.com/learning/security/glossary/what-is-vpn/](https://www.cloudflare.com/learning/security/glossary/what-is-vpn/) (Englischsprachig)
