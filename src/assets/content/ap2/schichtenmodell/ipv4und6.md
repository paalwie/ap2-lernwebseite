# Schichtenmodelle, z.B. OSI, TCP/IP benennen und zuordnen können: IPv4/IPv6

## Einführung

Um die Funktionsweise von Netzwerken und die Kommunikation zwischen verschiedenen Geräten zu verstehen, sind Schichtenmodelle unerlässlich. Zwei der wichtigsten Modelle sind das OSI-Modell (Open Systems Interconnection) und das TCP/IP-Modell (Transmission Control Protocol/Internet Protocol). IPv4 (Internet Protocol Version 4) und IPv6 (Internet Protocol Version 6) sind die grundlegenden Netzwerkprotokolle, die in der Netzwerkschicht (Schicht 3) beider Modelle eine zentrale Rolle spielen. Sie ermöglichen die Adressierung und Weiterleitung von Datenpaketen über Netzwerkgrenzen hinweg.

## Grundlagen: OSI- und TCP/IP-Modell

**Das OSI-Modell (7 Schichten):**

1.  **Anwendungsschicht (Application Layer):** Stellt Netzwerkdienste für Endbenutzeranwendungen bereit (z.B. HTTP, SMTP, DNS).
2.  **Darstellungsschicht (Presentation Layer):** Kümmert sich um die Datenformatierung, Verschlüsselung und Komprimierung.
3.  **Sitzungsschicht (Session Layer):** Verwaltet Verbindungen und Sitzungen zwischen Anwendungen.
4.  **Transportschicht (Transport Layer):** Stellt zuverlässige oder unzuverlässige Ende-zu-Ende-Datenübertragung sicher (z.B. TCP, UDP).
5.  **Netzwerkschicht (Network Layer):** Verantwortlich für die logische Adressierung (z.B. IP-Adressen) und das Routing von Datenpaketen über Netzwerke hinweg. **Hier sind IPv4 und IPv6 verortet.**
6.  **Sicherungsschicht (Data Link Layer):** Stellt die physische Verbindung zwischen benachbarten Netzwerkknoten her und kümmert sich um die Fehlererkennung innerhalb eines lokalen Netzwerks (z.B. Ethernet, WLAN).
7.  **Physikalische Schicht (Physical Layer):** Definiert die physikalischen und elektrischen Spezifikationen für die Datenübertragung (z.B. Kabel, Funkfrequenzen).

**Das TCP/IP-Modell (4 Schichten):**

1.  **Anwendungsschicht (Application Layer):** Vereint die Funktionalitäten der OSI-Schichten 5, 6 und 7 (z.B. HTTP, SMTP, DNS, FTP).
2.  **Transportschicht (Transport Layer):** Entspricht der OSI-Transportschicht (TCP, UDP).
3.  **Internetschicht (Internet Layer):** Entspricht der OSI-Netzwerkschicht. **Hier sind IPv4 und IPv6 verortet.** Verantwortlich für die logische Adressierung und das Routing von Datenpaketen.
4.  **Netzzugangsschicht (Network Access Layer):** Vereint die Funktionalitäten der OSI-Schichten 1 und 2 (z.B. Ethernet, WLAN, PPP).

## IPv4: Internet Protocol Version 4

IPv4 ist die vierte Version des Internetprotokolls und bildet das Fundament der heutigen Internetkommunikation.

**Zuordnung zum Schichtenmodell:**

-   **OSI-Modell:** Netzwerkschicht (Schicht 3)
-   **TCP/IP-Modell:** Internetschicht (Schicht 3)

**Wichtige Eigenschaften von IPv4:**

-   **32-Bit-Adressraum:** Ermöglicht theoretisch bis zu $2^{32}$ (ca. 4,3 Milliarden) eindeutige IP-Adressen. Aufgrund verschiedener Faktoren wie reservierter Adressbereiche und der ursprünglichen Netzwerkarchitektur stehen jedoch weniger nutzbare Adressen zur Verfügung.
-   **Punkt-Dezimal-Notation:** IP-Adressen werden in vier durch Punkte getrennten Dezimalzahlen dargestellt (z.B. 192.168.1.1). Jeder Oktett (8 Bit) kann einen Wert zwischen 0 und 255 annehmen.
-   **Verbindungslos:** IPv4 ist ein verbindungsloses Protokoll. Das bedeutet, dass vor der Datenübertragung keine dedizierte Verbindung zwischen Sender und Empfänger aufgebaut wird. Die Pakete werden unabhängig voneinander versendet und können unterschiedliche Wege nehmen. Die Zuverlässigkeit der Übertragung muss von höheren Schichten (z.B. TCP) gewährleistet werden.
-   **Best-Effort-Zustellung:** IPv4 garantiert keine Zustellung der Pakete. Es unternimmt jedoch die besten Anstrengungen, um die Pakete an ihr Ziel zu leiten. Pakete können verloren gehen, dupliziert oder in falscher Reihenfolge ankommen.
-   **Header-Struktur:** Der IPv4-Header enthält wichtige Informationen wie Quell- und Ziel-IP-Adresse, Header-Prüfsumme, Time to Live (TTL) und Protokoll (für die Nutzdaten der nächsthöheren Schicht, z.B. TCP oder UDP).

**Probleme mit IPv4:**

Der begrenzte 32-Bit-Adressraum von IPv4 führt zu einer Adressknappheit, die durch Techniken wie NAT (Network Address Translation) und CIDR (Classless Inter-Domain Routing) gemildert wurde, aber keine endgültige Lösung darstellt.

## IPv6: Internet Protocol Version 6

IPv6 wurde als Nachfolger von IPv4 entwickelt, um die Adressknappheit zu beheben und zusätzliche Verbesserungen zu bieten.

**Zuordnung zum Schichtenmodell:**

-   **OSI-Modell:** Netzwerkschicht (Schicht 3)
-   **TCP/IP-Modell:** Internetschicht (Schicht 3)

**Wichtige Eigenschaften von IPv6:**

-   **128-Bit-Adressraum:** Ermöglicht theoretisch bis zu $2^{128}$ (ca. 340 Sextillionen) eindeutige IP-Adressen. Dies stellt einen enormen Adressraum dar, der die Adressknappheitsprobleme von IPv4 löst.
-   **Hexadezimale Notation:** IPv6-Adressen werden in acht durch Doppelpunkte getrennten Blöcken von je vier hexadezimalen Ziffern dargestellt (z.B. 2001:0db8:85a3:0000:0000:8a2e:0370:7334). Führende Nullen in einem Block können weggelassen werden, und aufeinanderfolgende Blöcke von Nullen können durch einen doppelten Doppelpunkt (::) ersetzt werden (jedoch nur einmal pro Adresse).
-   **Verbindungslos:** Wie IPv4 ist auch IPv6 ein verbindungsloses Protokoll mit Best-Effort-Zustellung.
-   **Vereinfachter Header:** Der IPv6-Header ist im Vergleich zu IPv4 vereinfacht und effizienter gestaltet. Viele optionale Felder von IPv4 wurden in optionale Erweiterungsheader ausgelagert.
-   **Integrierte Sicherheitsfunktionen (IPsec):** IPv6 unterstützt optional IPsec (Internet Protocol Security) für die Verschlüsselung und Authentifizierung des Datenverkehrs auf der Netzwerkebene.
-   **Autokonfiguration:** IPv6 unterstützt verschiedene Mechanismen zur automatischen Konfiguration von IP-Adressen (z.B. Stateless Address Autoconfiguration - SLAAC), was die Netzwerkadministration vereinfacht.
-   **Kein natives NAT benötigt:** Der riesige Adressraum von IPv6 macht NAT in vielen Fällen überflüssig, da jedem Gerät eine global eindeutige IP-Adresse zugewiesen werden kann.

**Zusammenfassende Gegenüberstellung:**

| Merkmal           | IPv4                                  | IPv6                                      |
| :---------------- | :------------------------------------ | :---------------------------------------- |
| Adressraum        | 32 Bit (ca. 4,3 Milliarden Adressen) | 128 Bit (ca. 340 Sextillionen Adressen) |
| Notation          | Punkt-Dezimal                         | Hexadezimal mit Doppelpunkten             |
| Header-Größe      | Variabel (20 Bytes + Optionen)        | Fix (40 Bytes + optionale Erweiterungen) |
| Fragmentierung    | Kann von Routern und Hosts durchgeführt werden | Nur vom Sender durchgeführt                 |
| IPsec             | Optional                              | Optional, aber stärker integriert          |
| Autokonfiguration | DHCP                                  | SLAAC, DHCPv6                             |
| NAT               | Häufig verwendet                       | In den meisten Fällen nicht notwendig      |

## Fazit

IPv4 und IPv6 sind die zentralen Protokolle der Netzwerkschicht (OSI) bzw. der Internetschicht (TCP/IP), die die logische Adressierung und das Routing von Datenpaketen im Internet ermöglichen. Während IPv4 aufgrund seines begrenzten Adressraums an seine Grenzen stößt, bietet IPv6 mit seinem enormen Adressraum und zusätzlichen Verbesserungen die Grundlage für die zukünftige Entwicklung des Internets. Das Verständnis ihrer Positionierung innerhalb der Schichtenmodelle ist essenziell für das Verständnis der Netzwerkkommunikation.

## Links und Quellen

**Allgemein zu Schichtenmodellen (OSI und TCP/IP):**

* [BSI - Schichtenmodelle](https://www.bsi.bund.de/DE/Themen/Cyber-Sicherheit/Sicherheit-fuer-Unternehmen/Grundlagen/Netzwerkmodelle/netzwerkmodelle_node.html)
* [Wikipedia - OSI-Modell](https://de.wikipedia.org/wiki/OSI-Modell)
* [Wikipedia - TCP/IP-Modell](https://de.wikipedia.org/wiki/TCP/IP-Modell)
* [Cisco - The OSI Model's Seven Layers](https://www.cisco.com/c/en/us/support/docs/ip/routing/10558-21.html)
* [Cloudflare - What is the OSI model?](https://www.cloudflare.com/learning/network-layer/what-is-the-osi-model/)

**Spezifisch zu IPv4:**

* [Wikipedia - IPv4](https://de.wikipedia.org/wiki/IPv4)
* [RFC 791 - Internet Protocol](https://datatracker.ietf.org/doc/html/rfc791)
* [Cloudflare - What is IPv4?](https://www.cloudflare.com/learning/network-layer/what-is-ipv4/)

**Spezifisch zu IPv6:**

* [Wikipedia - IPv6](https://de.wikipedia.org/wiki/IPv6)
* [RFC 8200 - Internet Protocol, Version 6 (IPv6) Specification](https://datatracker.ietf.org/doc/html/rfc8200)
* [BSI - IPv6](https://www.bsi.bund.de/DE/Themen/Cyber-Sicherheit/Sicherheit-fuer-Unternehmen/Grundlagen/IPv6/ipv6_node.html)
* [Google - Learn about IPv6](https://ipv6.google.com/learn-more.html)
* [Cloudflare - What is IPv6?](https://www.cloudflare.com/learning/network-layer/what-is-ipv6/)
