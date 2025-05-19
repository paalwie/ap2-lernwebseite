# Netzwerkkonzepte (-topologien, -infrastrukturen) benennen und charakterisieren: Sicherheit in Drahtlosnetzen

## Einführung

Drahtlose Netzwerke (WLANs) bieten Flexibilität und Komfort, bringen aber auch spezifische Sicherheitsherausforderungen mit sich, da die Übertragung über Funkwellen erfolgt und somit potenziell für unbefugte Dritte abfangbar ist. Um die Vertraulichkeit, Integrität und Verfügbarkeit von Daten in Drahtlosnetzen zu gewährleisten, sind verschiedene Sicherheitsmechanismen und -konzepte unerlässlich.

## Charakterisierung der Sicherheitsaspekte in Drahtlosnetzen

**1. Bedrohungen in Drahtlosnetzen:**

-   **Abhören (Eavesdropping):** Unbefugte können den drahtlosen Datenverkehr abfangen und potenziell sensible Informationen einsehen.
-   **Unbefugter Zugriff (Unauthorized Access):** Nicht autorisierte Benutzer können sich mit dem WLAN verbinden und Netzwerkressourcen nutzen oder schädliche Aktivitäten durchführen.
-   **Man-in-the-Middle-Angriffe:** Ein Angreifer kann sich zwischen den Client und den Access Point (AP) schalten, um Daten abzufangen oder zu manipulieren.
-   **Denial-of-Service (DoS)-Angriffe:** Angreifer können das WLAN stören und die Verfügbarkeit für legitime Benutzer beeinträchtigen (z.B. durch Überlastung des Netzwerks mit Störsignalen).
-   **Rogue Access Points:** Nicht autorisierte APs, die im Netzwerk installiert werden und Angreifern ermöglichen können, den Datenverkehr abzufangen oder in das Netzwerk einzudringen.
-   **MAC-Spoofing:** Angreifer können die MAC-Adresse eines autorisierten Geräts verwenden, um Zugriff auf das Netzwerk zu erhalten (insbesondere bei älteren oder schlecht konfigurierten Systemen).
-   **War Driving/War Chalking:** Das Suchen nach ungesicherten oder schlecht gesicherten WLANs (War Driving) und das Markieren dieser Standorte (War Chalking).

**2. Sicherheitsmechanismen und -protokolle:**

-   **WEP (Wired Equivalent Privacy):** Ein älterer Verschlüsselungsstandard für WLANs. WEP gilt aufgrund bekannter Schwachstellen (z.B. schwache Schlüsselgenerierung, IV-Wiederholung) als unsicher und sollte nicht mehr verwendet werden.
-   **WPA (Wi-Fi Protected Access):** Ein als Übergangslösung entwickelter Sicherheitsstandard, der einige Schwachstellen von WEP behob. Verwendet TKIP (Temporal Key Integrity Protocol) für die Verschlüsselung und RC4 als Verschlüsselungsalgorithmus. WPA gilt heute ebenfalls als nicht mehr ausreichend sicher.
-   **WPA2 (Wi-Fi Protected Access 2):** Ein deutlich sichererer Standard als WEP und WPA. Er verwendet AES (Advanced Encryption Standard) mit CCMP (Counter Cipher Mode with Block Chaining Message Authentication Code Protocol) für die Verschlüsselung. WPA2 wird in den meisten modernen WLANs eingesetzt, es gibt jedoch auch hier bekannte Schwachstellen (z.B. KRACK-Angriff).
-   **WPA3 (Wi-Fi Protected Access 3):** Der neueste Sicherheitsstandard für WLANs, der zusätzliche Sicherheitsverbesserungen bietet, darunter:
    -   **SAE (Simultaneous Authentication of Equals):** Ein robusterer Handshake-Mechanismus, der weniger anfällig für Wörterbuchangriffe ist.
    -   **Individuelle Datenverschlüsselung:** Jeder Client erhält einen eigenen Verschlüsselungsschlüssel, was die Sicherheit in offenen Netzwerken erhöht.
    -   **192-Bit-Verschlüsselung:** Optionale Unterstützung für höhere Verschlüsselungsstärken in Unternehmensnetzwerken.
-   **SSID-Verbergung (Service Set Identifier Hiding):** Das Deaktivieren der SSID-Broadcast kann das Auffinden des Netzwerks für Gelegenheitsnutzer erschweren, bietet aber keine echte Sicherheit, da die SSID weiterhin passiv abgefangen werden kann.
-   **MAC-Adressen-Filterung:** Ermöglicht die Beschränkung des Zugriffs auf Geräte mit bekannten MAC-Adressen. Bietet jedoch nur begrenzten Schutz, da MAC-Adressen leicht gespooft werden können.
-   **802.1X-Authentifizierung:** Ein Standard für die portbasierte Netzwerkzugriffskontrolle, der häufig in Unternehmensnetzwerken verwendet wird. Benutzer oder Geräte müssen sich über ein Authentifizierungsprotokoll (z.B. EAP-TLS, PEAP) bei einem Authentifizierungsserver (z.B. RADIUS) authentifizieren, bevor sie Netzwerkzugriff erhalten.
-   **Gastnetzwerke:** Ermöglichen eingeschränkten Internetzugang für Gäste, ohne Zugriff auf das interne Netzwerk zu gewähren.
-   **Firewall:** Integrierte Firewalls in WLAN-Routern können eingehenden und ausgehenden Netzwerkverkehr basierend auf Regeln filtern und so vor unbefugtem Zugriff schützen.
-   **VPN (Virtual Private Network):** Die Verwendung eines VPN über eine WLAN-Verbindung verschlüsselt den gesamten Datenverkehr zwischen dem Client und dem VPN-Server und bietet so zusätzlichen Schutz, insbesondere in öffentlichen WLANs.

**3. Best Practices für die Sicherheit in Drahtlosnetzen:**

-   **Verwendung starker Passwörter:** Komplexe Passwörter für das WLAN sind unerlässlich.
-   **Aktivierung von WPA3 (wenn möglich):** WPA3 bietet den besten verfügbaren Schutz für moderne WLANs.
-   **Regelmäßige Firmware-Updates:** Halten Sie die Firmware von WLAN-Routern und Access Points auf dem neuesten Stand, um bekannte Sicherheitslücken zu schließen.
-   **Änderung der Standard-SSID und des Standard-Admin-Passworts:** Standardeinstellungen sind bekannte Ziele für Angreifer.
-   **Aktivierung der Verschlüsselung:** Stellen Sie sicher, dass WPA2 oder WPA3 aktiviert ist.
-   **Deaktivierung der SSID-Broadcast (optional, als zusätzliche Hürde).**
-   **Verwendung der MAC-Adressen-Filterung (als zusätzliche, aber nicht alleinige Sicherheitsmaßnahme).**
-   **Implementierung von 802.1X-Authentifizierung in Unternehmensnetzwerken.**
-   **Einrichtung eines separaten Gastnetzwerks.**
-   **Aktivierung der Firewall im WLAN-Router.**
-   **Sensibilisierung der Benutzer für Sicherheitsrisiken bei der Nutzung öffentlicher WLANs und die Empfehlung der Verwendung von VPNs.**
-   **Regelmäßige Überprüfung der verbundenen Geräte im WLAN.**
-   **Physische Sicherheit der WLAN-Geräte:** Verhindern Sie unbefugten physischen Zugriff auf Router und Access Points.

## Fazit

Die Sicherheit in Drahtlosnetzen ist ein fortlaufender Prozess, der eine sorgfältige Konfiguration und die Implementierung geeigneter Sicherheitsmechanismen erfordert. Durch die Verwendung starker Verschlüsselungsprotokolle wie WPA3, die Implementierung von Zugriffskontrollen wie 802.1X und die Einhaltung von Best Practices können Unternehmen und Privatpersonen das Risiko von Sicherheitsverletzungen in ihren WLANs erheblich reduzieren.

## Links und Quellen

* **Wikipedia - Wi-Fi security:** [https://en.wikipedia.org/wiki/Wi-Fi_security](https://en.wikipedia.org/wiki/Wi-Fi_security) (Englischsprachig)
* **Wi-Fi Alliance - Security:** [https://www.wi-fi.org/discover-wi-fi/security](https://www.wi-fi.org/discover-wi-fi/security) (Offizielle Wi-Fi-Sicherheitsinformationen - Englischsprachig)
* **National Institute of Standards and Technology (NIST) - Guide to Securing Wireless Networks:** [https://csrc.nist.gov/publications/detail/sp/800-48/rev-2/final](https://csrc.nist.gov/publications/detail/sp/800-48/rev-2/final) (Umfassender Leitfaden - Englischsprachig)
* **Federal Communications Commission (FCC) - Wireless Security:** [https://www.fcc.gov/consumers/guides/wireless-security](https://www.fcc.gov/consumers/guides/wireless-security) (Englischsprachig)
* **SANS Institute - Wireless Security Overview:** [https://www.sans.org/reading-room/whitepapers/wireless/wireless-security-overview-33997](https://www.sans.org/reading-room/whitepapers/wireless/wireless-security-overview-33997) (Technisches Whitepaper - Englischsprachig)
* **OWASP (Open Web Application Security Project) - Wi-Fi Security:** [https://owasp.org/www-project-top-ten/](https://owasp.org/www-project-top-ten/) (Obwohl OWASP sich hauptsächlich auf Webanwendungen konzentriert, gibt es auch relevante Informationen zur WLAN-Sicherheit - Englischsprachig)
