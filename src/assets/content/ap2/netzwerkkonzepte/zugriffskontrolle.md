# Netzwerkkonzepte (-topologien, -infrastrukturen) benennen und charakterisieren: Zugriffskontrolle im Netzwerk (RADIUS, Kerberos,...)

## Einführung

Die Zugriffskontrolle ist ein fundamentales Sicherheitskonzept in Netzwerken, das sicherstellt, dass nur autorisierte Benutzer und Geräte auf Netzwerkressourcen zugreifen können. Es umfasst die Prozesse der Identifizierung (Wer sind Sie?), Authentifizierung (Nachweis Ihrer Identität?) und Autorisierung (Was dürfen Sie tun?). Verschiedene Protokolle und Systeme werden eingesetzt, um diese Prozesse im Netzwerk zu implementieren. Zwei prominente Beispiele sind RADIUS und Kerberos.

## Charakterisierung von Zugriffskontrollkonzepten im Netzwerk

**1. RADIUS (Remote Authentication Dial-In User Service):**

-   **Konzept:** RADIUS ist ein zentralisiertes Authentifizierungs-, Autorisierungs- und Accounting-Protokoll (AAA-Protokoll), das häufig für den Netzwerkzugriff verwendet wird. Es ermöglicht Netzwerkgeräten (RADIUS-Clients) wie WLAN-Access Points, VPN-Gateways und Netzwerk-Switches, Authentifizierungs- und Autorisierungsanfragen an einen zentralen RADIUS-Server weiterzuleiten.
-   **Funktionsweise:**
    1.  Ein Benutzer versucht, auf eine Netzwerkressource zuzugreifen (z.B. sich mit einem WLAN verbinden).
    2.  Das Netzwerkgerät (RADIUS-Client) sendet die Anmeldeinformationen des Benutzers (z.B. Benutzername und Passwort) in einer Zugriffsanfrage an den RADIUS-Server.
    3.  Der RADIUS-Server überprüft die Anmeldeinformationen anhand einer Benutzerdatenbank (z.B. LDAP, Active Directory oder einer lokalen Datenbank).
    4.  Der RADIUS-Server sendet eine Zugriffsbestätigung (Access-Accept) oder eine Zugriffsabweisung (Access-Reject) an den RADIUS-Client zurück. Die Zugriffsbestätigung kann auch Autorisierungsinformationen enthalten (z.B. VLAN-Zuweisung, Zugriffsberechtigungen).
    5.  Während der Sitzung kann der RADIUS-Client Accounting-Informationen (z.B. Start- und Endzeit der Sitzung, übertragene Datenmenge) an den RADIUS-Server senden.
-   **Charakteristische Merkmale:**
    -   Zentralisierte Verwaltung von Benutzerkonten und Zugriffsberechtigungen.
    -   Unterstützung verschiedener Authentifizierungsmethoden (z.B. PAP, CHAP, EAP).
    -   Skalierbarkeit für große Netzwerke.
    -   Trennung der Authentifizierungs-, Autorisierungs- und Accounting-Funktionen.
    -   Weit verbreitet für WLAN-Authentifizierung (802.1X), VPN-Zugang und Netzwerkgeräteverwaltung.

**2. Kerberos:**

-   **Konzept:** Kerberos ist ein Netzwerk-Authentifizierungsprotokoll, das eine sichere Authentifizierung in unsicheren Netzwerken ermöglicht, ohne dass Kennwörter im Klartext über das Netzwerk übertragen werden müssen. Es basiert auf Tickets, die von einem zentralen Key Distribution Center (KDC) ausgestellt werden.
-   **Funktionsweise:**
    1.  Ein Benutzer authentifiziert sich einmalig beim Authentication Server (AS) des KDC und erhält ein Ticket-Granting Ticket (TGT).
    2.  Wenn der Benutzer auf einen Netzwerkdienst (z.B. einen Dateiserver) zugreifen möchte, verwendet er sein TGT, um ein Service Ticket vom Ticket-Granting Server (TGS) des KDC für diesen spezifischen Dienst anzufordern.
    3.  Das Service Ticket enthält Informationen über den Benutzer und den angeforderten Dienst und ist für eine begrenzte Zeit gültig.
    4.  Der Benutzer präsentiert das Service Ticket dem gewünschten Dienst zur Authentifizierung. Der Dienst kann das Ticket anhand eines geheimen Schlüssels verifizieren, den er mit dem KDC teilt.
-   **Charakteristische Merkmale:**
    -   Starke Authentifizierung ohne Übertragung von Kennwörtern im Klartext.
    -   Verwendung von Tickets mit begrenzter Gültigkeit.
    -   Zentrale Verwaltung der Benutzeridentitäten und Dienstprinzipale durch das KDC.
    -   Gegenseitige Authentifizierung (Client und Server können sich gegenseitig authentifizieren).
    -   Zeitabhängigkeit (Tickets haben eine Gültigkeitsdauer, um Replay-Angriffe zu verhindern).
    -   Häufig in Unternehmensnetzwerken eingesetzt, insbesondere in Windows-Domänen (Active Directory).

**Weitere Konzepte und Protokolle zur Zugriffskontrolle im Netzwerk:**

-   **TACACS+ (Terminal Access Controller Access-Control System Plus):** Ein weiteres AAA-Protokoll, das von Cisco entwickelt wurde und ähnliche Funktionen wie RADIUS bietet, aber oft eine stärkere Trennung der AAA-Funktionen und mehr Flexibilität bei der Autorisierung bietet.
-   **LDAP (Lightweight Directory Access Protocol):** Ein Protokoll für den Zugriff auf und die Verwaltung von Verzeichnisdiensten, die Benutzerkonten und Zugriffsinformationen enthalten können. RADIUS und Kerberos können LDAP zur Benutzerdatenbankanbindung nutzen.
-   **SAML (Security Assertion Markup Language):** Ein XML-basierter offener Standard für den Austausch von Authentifizierungs- und Autorisierungsinformationen zwischen Sicherheitsparteien, insbesondere im Kontext von Single Sign-On (SSO) für Webanwendungen.
-   **OAuth 2.0 und OpenID Connect:** Moderne Autorisierungs- und Authentifizierungsframeworks, die häufig für Web- und mobile Anwendungen verwendet werden und die Delegation von Zugriffsberechtigungen ermöglichen, ohne dass Benutzer ihre Anmeldeinformationen direkt an die Anwendung weitergeben müssen.
-   **MAC-Adressen-Filterung:** Eine einfache Form der Zugriffskontrolle auf der Sicherungsschicht, bei der nur Geräte mit bestimmten MAC-Adressen Zugriff auf das Netzwerk erhalten. Bietet jedoch nur begrenzten Schutz, da MAC-Adressen gespooft werden können.
-   **Port-Sicherheit:** Eine Funktion in Netzwerk-Switches, die den Zugriff auf einen Port auf eine bestimmte Anzahl von MAC-Adressen beschränkt und bei Verstößen Aktionen (z.B. Blockieren des Ports) auslösen kann.
-   **802.1X:** Ein Standard für die portbasierte Netzwerkzugriffskontrolle, der häufig in Verbindung mit RADIUS verwendet wird, um die Authentifizierung von Benutzern oder Geräten zu erzwingen, bevor sie Netzwerkzugriff erhalten.

## Fazit

Die Zugriffskontrolle im Netzwerk ist ein vielschichtiges Thema, das verschiedene Protokolle und Systeme umfasst, um die Sicherheit und Integrität von Netzwerkressourcen zu gewährleisten. RADIUS und Kerberos sind zwei etablierte und weit verbreitete Technologien für die zentrale Authentifizierung und Autorisierung. Daneben existieren weitere Protokolle und Mechanismen, die je nach den spezifischen Anforderungen und der Netzwerkumgebung eingesetzt werden, um einen umfassenden Schutz vor unbefugtem Zugriff zu bieten.

## Links und Quellen

* **Wikipedia - RADIUS:** [https://de.wikipedia.org/wiki/RADIUS](https://de.wikipedia.org/wiki/RADIUS)
* **Wikipedia - Kerberos (Protokoll):** [https://de.wikipedia.org/wiki/Kerberos_(Protokoll)](https://de.wikipedia.org/wiki/Kerberos_(Protokoll))
* **RFC 2865 - Remote Authentication Dial In User Service (RADIUS):** [https://datatracker.ietf.org/doc/html/rfc2865](https://datatracker.ietf.org/doc/html/rfc2865) (Die grundlegende RADIUS-Spezifikation - Englischsprachig)
* **RFC 4120 - The Kerberos Network Authentication Service (V5):** [https://datatracker.ietf.org/doc/html/rfc4120](https://datatracker.ietf.org/doc/html/rfc4120) (Die aktuelle Kerberos V5-Spezifikation - Englischsprachig)
* **Cisco - Understanding RADIUS:** [https://www.cisco.com/c/en/us/support/docs/security-vpn/remote-authentication-dial-in-user-service-radius/116449-technote-radius-00.html](https://www.cisco.com/c/en/us/support/docs/security-vpn/remote-authentication-dial-in-user-service-radius/116449-technote-radius-00.html) (Englischsprachig)
* **Microsoft - Kerberos authentication overview:** [https://learn.microsoft.com/en-us/windows-server/security/kerberos/kerberos-authentication-overview](https://learn.microsoft.com/en-us/windows-server/security/kerberos/kerberos-authentication-overview) (Englischsprachig - Fokus auf die Windows-Implementierung)
* **Cloudflare - What is RADIUS?** [https://www.cloudflare.com/learning/access-management/glossary/radius/](https://www.cloudflare.com/learning/access-management/glossary/radius/) (Englischsprachig)
