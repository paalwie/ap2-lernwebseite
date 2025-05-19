# Sicherstellen der Qualität von Softwareanwendungen: Anwendungen unter Berücksichtigung von Datenschutz und Datensicherheit erstellen können - Datensicherheit (Authentifizierung, Autorisierung, Verschlüsselung)

## Einführung

**Datensicherheit** umfasst eine Reihe von Maßnahmen und Praktiken, die darauf abzielen, Daten vor unbefugtem Zugriff, Verwendung, Offenlegung, Änderung oder Zerstörung zu schützen. Die drei Säulen der Datensicherheit sind **Authentifizierung**, **Autorisierung** und **Verschlüsselung**. Diese Konzepte arbeiten zusammen, um sicherzustellen, dass nur berechtigte Benutzer auf die benötigten Daten zugreifen und diese sicher verarbeiten können.

## 1. Authentifizierung

**Authentifizierung** ist der Prozess der Überprüfung der Identität eines Benutzers, Geräts oder einer Anwendung. Es geht darum sicherzustellen, *wer* oder *was* auf das System zugreifen möchte.

### Methoden der Authentifizierung

-   **Passwortbasierte Authentifizierung:** Die gebräuchlichste Methode, bei der Benutzer eine Kombination aus Benutzername und Passwort eingeben. Sichere Passwörter und geeignete Passwortrichtlinien (z.B. Mindestlänge, Komplexität, regelmäßige Änderung) sind entscheidend.
-   **Multi-Faktor-Authentifizierung (MFA):** Kombiniert zwei oder mehr unabhängige Authentifizierungsfaktoren, um die Sicherheit zu erhöhen. Gängige Faktoren sind:
    -   **Wissen (Something you know):** Passwort, PIN, Sicherheitsfragen.
    -   **Besitz (Something you have):** Smartphone mit OTP-App, Hardware-Token, Smartcard.
    -   **Sein (Something you are):** Biometrische Merkmale wie Fingerabdruck, Gesichtserkennung, Iris-Scan.
-   **Zertifikatsbasierte Authentifizierung:** Verwendet digitale Zertifikate zur Identifizierung von Benutzern oder Geräten.
-   **Biometrische Authentifizierung:** Nutzt einzigartige biologische Merkmale zur Identifizierung.
-   **Tokenbasierte Authentifizierung:** Nach erfolgreicher Authentifizierung erhält der Benutzer ein temporäres Sicherheitstoken (z.B. JWT - JSON Web Token), das für nachfolgende Anfragen verwendet wird, ohne dass die Anmeldedaten erneut übermittelt werden müssen.
-   **OAuth und OpenID Connect:** Offene Standards für die Autorisierung und Authentifizierung, die es Anwendungen ermöglichen, im Namen eines Benutzers auf Ressourcen zuzugreifen, ohne dessen Anmeldedaten zu kennen.

### Best Practices für die Authentifizierung

-   Starke Passwortrichtlinien erzwingen.
-   Implementierung von Multi-Faktor-Authentifizierung, wo immer möglich und sinnvoll.
-   Sichere Speicherung von Passwörtern (z.B. als Hash mit Salt).
-   Regelmäßige Überprüfung und Aktualisierung der Authentifizierungsmechanismen.
-   Schutz vor Brute-Force-Angriffen (z.B. durch Kontosperrung nach fehlgeschlagenen Anmeldeversuchen).
-   Sichere Übertragung von Anmeldedaten (z.B. über HTTPS).

## 2. Autorisierung

**Autorisierung** ist der Prozess, der nach erfolgreicher Authentifizierung festlegt, welche Ressourcen (z.B. Daten, Funktionen, Systemressourcen) ein authentifizierter Benutzer, Gerät oder eine Anwendung verwenden darf. Es geht darum sicherzustellen, *was* die authentifizierte Entität tun darf.

### Methoden der Autorisierung

-   **Rollenbasierte Zugriffskontrolle (RBAC):** Benutzer werden Rollen zugewiesen, und diesen Rollen sind bestimmte Berechtigungen zugeordnet. Dies vereinfacht die Verwaltung von Zugriffsberechtigungen, insbesondere in großen Systemen.
-   **Attributbasierte Zugriffskontrolle (ABAC):** Zugriffsberechtigungen werden basierend auf Attributen des Benutzers, der Ressource und des Kontexts (z.B. Uhrzeit, Ort) dynamisch entschieden.
-   **Zugriffskontrolllisten (ACLs):** Listen, die für jede Ressource festlegen, welche Benutzer oder Gruppen welche Zugriffsberechtigungen haben.
-   **Rechteverwaltung (Privilege Management):** Detaillierte Steuerung der Berechtigungen, die einem Benutzer oder einer Anwendung gewährt werden. Prinzip der geringsten Privilegien (Principle of Least Privilege) ist hierbei zentral: Benutzern und Anwendungen sollten nur die minimal notwendigen Berechtigungen eingeräumt werden, um ihre Aufgaben zu erfüllen.

### Best Practices für die Autorisierung

-   Implementierung des Prinzips der geringsten Privilegien.
-   Klare und gut definierte Rollen und Berechtigungen.
-   Zentrale Verwaltung der Zugriffskontrollen.
-   Regelmäßige Überprüfung und Aktualisierung der Autorisierungsrichtlinien.
-   Protokollierung von Zugriffsversuchen und Berechtigungsänderungen.
-   Vermeidung von hartkodierten Berechtigungen in der Anwendung.

## 3. Verschlüsselung (Wiederholung und Fokus auf Anwendungssicherheit)

Wie bereits im Abschnitt zum Datenschutz erwähnt, ist **Verschlüsselung** ein wesentliches Werkzeug zur Sicherung der Vertraulichkeit von Daten. Im Kontext der Datensicherheit in Anwendungen kommt der Verschlüsselung eine besondere Bedeutung zu:

### Anwendungsbereiche der Verschlüsselung in der Datensicherheit

-   **Datenübertragungssicherheit:** Einsatz von Protokollen wie HTTPS (TLS/SSL) zur Verschlüsselung der Kommunikation zwischen Client und Server.
-   **Datenspeichersicherheit (Data at Rest):** Verschlüsselung sensibler Daten, die in Datenbanken, Dateien oder auf Speichermedien gespeichert sind. Dies schützt die Daten, falls unbefugte physischen oder logischen Zugriff auf die Speichersysteme erhalten.
-   **Ende-zu-Ende-Verschlüsselung:** Sicherstellung, dass Daten vom Sender bis zum beabsichtigten Empfänger verschlüsselt bleiben und nicht von Dritten eingesehen werden können (z.B. in Messaging-Apps).
-   **Verschlüsselung von Konfigurationsdaten:** Schutz sensibler Konfigurationsinformationen wie Datenbankpasswörter oder API-Schlüssel.
-   **Verschlüsselung von Backups:** Sicherstellung, dass auch Sicherungskopien von Daten vor unbefugtem Zugriff geschützt sind.

### Auswahl geeigneter Verschlüsselungsverfahren und -schlüssel

-   Verwendung starker und etablierter kryptografischer Algorithmen (z.B. AES für symmetrische, RSA oder ECC für asymmetrische Verschlüsselung).
-   Sichere Verwaltung und Speicherung von kryptografischen Schlüsseln. Key Management Systeme (KMS) sind hierfür oft im Einsatz.
-   Regelmäßiger Schlüsselaustausch (Key Rotation), um das Risiko bei einem Schlüsselkompromiss zu minimieren.
-   Berücksichtigung der Leistungsanforderungen bei der Auswahl von Verschlüsselungsverfahren.

## Zusammenspiel von Authentifizierung, Autorisierung und Verschlüsselung

Diese drei Sicherheitsmechanismen sind eng miteinander verbunden und bilden eine Verteidigungstiefe für Anwendungen und Daten:

1.  **Authentifizierung** stellt sicher, dass die Identität des Benutzers oder der Anwendung bekannt und verifiziert ist.
2.  **Autorisierung** stellt sicher, dass der authentifizierte Benutzer oder die Anwendung nur auf die Ressourcen und Funktionen zugreifen kann, für die sie die entsprechenden Berechtigungen besitzt.
3.  **Verschlüsselung** schützt die Vertraulichkeit der Daten sowohl bei der Übertragung als auch im Ruhezustand, sodass sie auch bei unbefugtem Zugriff nicht ohne Weiteres gelesen oder verwendet werden können.

Ein starkes Sicherheitskonzept berücksichtigt alle drei Aspekte und implementiert geeignete Maßnahmen auf jeder Ebene.

## Fazit

Authentifizierung, Autorisierung und Verschlüsselung sind die Eckpfeiler der Datensicherheit in Softwareanwendungen. Eine sorgfältige Planung und Implementierung dieser Mechanismen ist unerlässlich, um sensible Daten zu schützen, unbefugten Zugriff zu verhindern und die Integrität und Vertraulichkeit der Systeme zu gewährleisten. Entwickler müssen sich mit den verschiedenen Methoden und Best Practices in diesen Bereichen auseinandersetzen, um sichere und vertrauenswürdige Anwendungen zu entwickeln.

## Links und Quellen

-   **Authentifizierung - Wikipedia:** [https://de.wikipedia.org/wiki/Authentifizierung](https://de.wikipedia.org/wiki/Authentifizierung)
-   **Autorisierung - Wikipedia:** [https://de.wikipedia.org/wiki/Autorisierung](https://de.wikipedia.org/wiki/Autorisierung)
-   **Verschlüsselung - Wikipedia:** [https://de.wikipedia.org/wiki/Verschl%C3%BCsselung](https://de.wikipedia.org/wiki/Verschl%C3%BCsselung)
-   **Multi-Faktor-Authentifizierung - BSI:** [https://www.bsi.bund.de/DE/Themen/Verbraucher/Richtig_Handeln/Sicherheitsmassnahmen/MFA/mfa_node.html](https://www.bsi.bund.de/DE/Themen/Verbraucher/Richtig_Handeln/Sicherheitsmassnahmen/MFA/mfa_node.html)
-   **JSON Web Tokens (JWT) - jwt.io:** [https://jwt.io/](https://jwt.io/) (Englischsprachige Informationsseite)
-   **OAuth 2.0 - oauth.net:** [https://oauth.net/2/](https://oauth.net/2/) (Englischsprachige Informationsseite)
-   **OpenID Connect - openid.net:** [https://openid.net/connect/](https://openid.net/connect/) (Englischsprachige Informationsseite)
-   **Rollenbasierte Zugriffskontrolle (RBAC) - NIST:** [https://csrc.nist.gov/glossary/term/role-based-access-control](https://csrc.nist.gov/glossary/term/role-based-access-control) (Englischsprachige Informationsseite)
-   **Prinzip der geringsten Privilegien - Wikipedia:** [https://de.wikipedia.org/wiki/Prinzip_der_geringsten_Privilegien](https://de.wikipedia.org/wiki/Prinzip_der_geringsten_Privilegien)
-   **Technische Richtlinien des BSI (Bundesamt für Sicherheit in der Informationstechnik) zum Thema sichere Authentifizierung und Verschlüsselung:** [https://www.bsi.bund.de/DE/Themen/Sicherheitstechnologien/Kryptographie/kryptographie_node.html](https://www.bsi.bund.de/DE/Themen/Sicherheitstechnologien/Kryptographie/kryptographie_node.html) und [https://www.bsi.bund.de/DE/Themen/Cybersicherheit/Sicherheitsgrundlagen/Sichere_Authentisierung/sichere_authentisierung_node.html](https://www.bsi.bund.de/DE/Themen/Cybersicherheit/Sicherheitsgrundlagen/Sichere_Authentisierung/sichere_authentisierung_node.html)
-   **OWASP (Open Web Application Security Project) - Ressourcen zu Authentifizierung, Autorisierung und Kryptographie:** [https://owasp.org/](https://owasp.org/) (Englischsprachige Projektseite)
-   **Artikel und Leitfäden zum Thema Datensicherheit in der Softwareentwicklung.**

-----

> **Fehler gefunden?** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
