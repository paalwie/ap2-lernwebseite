# Übertragungsprotokolle und ihre Eigenschaften erläutern und zielgerichtet einsetzen können: HTTP/HTTPS

## Einführung

HTTP (Hypertext Transfer Protocol) und HTTPS (Hypertext Transfer Protocol Secure) sind die grundlegenden Protokolle für die Kommunikation im World Wide Web. Sie basieren auf dem Client-Server-Modell und ermöglichen den Austausch von Informationen zwischen Webbrowsern (Clients) und Webservern. Während HTTP die Basis für die Datenübertragung bildet, erweitert HTTPS diese um eine sichere, verschlüsselte Verbindung.

## Charakterisierung von HTTP und HTTPS

**1. HTTP (Hypertext Transfer Protocol):**

-   **Konzept:** HTTP ist ein zustandsloses Anfrage-Antwort-Protokoll, das primär für die Übertragung von Hypertext (HTML) und anderen Ressourcen (Bilder, Videos, etc.) im Web verwendet wird.
-   **Funktionsweise:**
    1.  Ein Client (z.B. ein Webbrowser) sendet eine HTTP-Anfrage an einen Server (z.B. einen Webserver). Die Anfrage enthält eine Methode (z.B. GET, POST), eine URL und optionale Header sowie einen Body.
    2.  Der Server empfängt die Anfrage, verarbeitet sie und sendet eine HTTP-Antwort zurück. Die Antwort enthält einen Statuscode, optionale Header und einen Body mit den angeforderten Daten oder einer Fehlermeldung.
-   **Eigenschaften:**
    -   **Zustandslos:** Jede HTTP-Anfrage ist unabhängig von vorherigen Anfragen. Der Server speichert keine Informationen über frühere Client-Interaktionen (dies wird durch Mechanismen wie Cookies und Sessions auf Anwendungsebene umgangen).
    -   **Verbindungsorientiert (TCP-Basis):** HTTP verwendet in der Regel TCP als Transportprotokoll, was eine zuverlässige Übertragung der Daten gewährleistet.
    -   **Klartextübertragung:** Standardmäßig werden HTTP-Daten unverschlüsselt übertragen. Dies bedeutet, dass der Datenverkehr von Dritten abgefangen und mitgelesen werden kann.
    -   **Verschiedene Methoden:** HTTP definiert verschiedene Methoden (z.B. GET zum Abrufen von Daten, POST zum Senden von Daten, PUT zum Aktualisieren von Daten, DELETE zum Löschen von Daten), um unterschiedliche Aktionen auf Ressourcen auszuführen.
-   **Anwendungsfälle:** Abrufen von Webseiten, Senden von Formulardaten, Zugriff auf Web-APIs (Application Programming Interfaces).

**2. HTTPS (Hypertext Transfer Protocol Secure):**

-   **Konzept:** HTTPS ist die sichere Version von HTTP. Es verwendet HTTP als Anwendungsprotokoll, aber die Kommunikation wird durch eine zusätzliche Sicherheitsschicht verschlüsselt.
-   **Funktionsweise:** HTTPS verwendet in der Regel TLS (Transport Layer Security) oder dessen Vorgänger SSL (Secure Sockets Layer) als Sicherheitsprotokoll unterhalb von HTTP.
    1.  Ein Client initiiert eine HTTPS-Verbindung zum Server.
    2.  Ein TLS/SSL-Handshake findet statt, bei dem der Server sein digitales Zertifikat präsentiert, der Client die Gültigkeit des Zertifikats überprüft und ein sicherer, verschlüsselter Kommunikationskanal aufgebaut wird.
    3.  Sobald die sichere Verbindung hergestellt ist, werden die HTTP-Anfragen und -Antworten über diesen verschlüsselten Kanal übertragen.
-   **Eigenschaften:**
    -   **Verschlüsselung:** Die gesamte Kommunikation zwischen Client und Server wird verschlüsselt, wodurch die Vertraulichkeit der übertragenen Daten (z.B. Passwörter, Kreditkarteninformationen) gewährleistet wird.
    -   **Authentifizierung:** Das digitale Zertifikat des Servers ermöglicht es dem Client, die Identität des Servers zu überprüfen und sicherzustellen, dass er mit dem beabsichtigten Server kommuniziert.
    -   **Datenintegrität:** TLS/SSL kann auch Mechanismen zur Sicherstellung der Datenintegrität umfassen, um Manipulationen während der Übertragung zu erkennen.
    -   **Verbindungsorientiert (TCP-Basis):** Wie HTTP basiert auch HTTPS auf TCP.
    -   **Zustandslos:** HTTPS erbt die Zustandslosigkeit von HTTP.
    -   **Höherer Overhead:** Die Verschlüsselung und der Handshake-Prozess führen zu einem etwas höheren Overhead im Vergleich zu reinem HTTP.
-   **Anwendungsfälle:** Übertragung sensibler Daten (z.B. Login-Formulare, Online-Banking, E-Commerce), alle modernen Webseiten, die die Sicherheit der Benutzerdaten gewährleisten wollen.

**3. Gegenüberstellung von HTTP und HTTPS:**

| Eigenschaft         | HTTP                                  | HTTPS                                     |
| :------------------ | :------------------------------------ | :---------------------------------------- |
| Sicherheit          | Unverschlüsselt                       | Verschlüsselt (durch TLS/SSL)              |
| Vertraulichkeit     | Gering                                | Hoch                                      |
| Datenintegrität     | Keine inhärente Sicherstellung        | Kann durch TLS/SSL gewährleistet werden    |
| Authentifizierung   | Keine inhärente Serverauthentifizierung | Serverauthentifizierung durch Zertifikate |
| Port (Standard)     | 80                                    | 443                                       |
| Performance         | Geringerer Overhead                     | Höherer Overhead (durch Verschlüsselung)   |
| Anwendungsfälle     | Nicht-sensible Datenübertragung, ältere Webseiten | Übertragung sensibler Daten, moderne Webseiten |
| SEO (Suchmaschinenoptimierung) | Kann negativ beeinflusst werden (im Vergleich zu HTTPS) | Positiver Faktor                               |
| Vertrauen der Nutzer | Geringer bei sensiblen Daten            | Hoch                                      |

**4. Zielgerichteter Einsatz von HTTP und HTTPS:**

-   **HTTP sollte verwendet werden, wenn:**
    -   Die übertragenen Daten öffentlich sind und keine sensiblen Informationen enthalten.
    -   Die Sicherheit der Daten keine hohe Priorität hat (was heutzutage selten der Fall sein sollte).
    -   In sehr isolierten oder internen Netzwerken, in denen die Sicherheitsrisiken als gering eingeschätzt werden.
    -   Für einfache Testzwecke oder in Entwicklungsumgebungen ohne sensible Daten.

-   **HTTPS sollte verwendet werden, wenn:**
    -   Jegliche Art von sensiblen Daten übertragen wird (Passwörter, Kreditkarteninformationen, persönliche Daten).
    -   Die Integrität der übertragenen Daten gewährleistet werden muss.
    -   Die Identität des Servers für den Client wichtig ist.
    -   Für alle modernen Webseiten und Webanwendungen, um das Vertrauen der Benutzer zu gewinnen und die Sicherheit zu gewährleisten.
    -   Aus SEO-Sicht (Suchmaschinen bevorzugen HTTPS-Webseiten).

**Heutzutage ist der Einsatz von HTTPS die klare Empfehlung und der Standard für nahezu alle Webanwendungen und Websites.** Browser weisen HTTP-Verbindungen oft als "nicht sicher" aus, was das Vertrauen der Benutzer erheblich beeinträchtigen kann.

## Fazit

HTTP und HTTPS sind essenzielle Protokolle für die Webkommunikation. Während HTTP die Grundlage für den Datenaustausch bildet, bietet HTTPS eine entscheidende Sicherheitsebene durch Verschlüsselung und Authentifizierung. Der zielgerichtete Einsatz von HTTPS ist heutzutage unerlässlich, um die Sicherheit und das Vertrauen der Benutzer im Web zu gewährleisten. HTTP sollte nur in sehr spezifischen und nicht-sensiblen Szenarien in Betracht gezogen werden.

## Links und Quellen

-   **Wikipedia - Hypertext Transfer Protocol:** [https://de.wikipedia.org/wiki/Hypertext\_Transfer\_Protocol](https://de.wikipedia.org/wiki/Hypertext_Transfer_Protocol)
-   **Wikipedia - HTTPS:** [https://de.wikipedia.org/wiki/HTTPS](https://de.wikipedia.org/wiki/HTTPS)
-   **MDN Web Docs - HTTP:** [https://developer.mozilla.org/de/docs/Web/HTTP](https://developer.mozilla.org/de/docs/Web/HTTP)
-   **MDN Web Docs - HTTPS:** [https://developer.mozilla.org/de/docs/Web/HTTP/HTTPS](https://developer.mozilla.org/de/docs/Web/HTTP/HTTPS)
-   **Cloudflare - What is HTTPS?** [https://www.cloudflare.com/learning/ssl/what-is-https/](https://www.cloudflare.com/learning/ssl/what-is-https/) (Englischsprachig)
-   **Let's Encrypt - What is HTTPS?:** [https://letsencrypt.org/de/what-is-https/](https://letsencrypt.org/de/what-is-https/)
-   **Google Developers - Why HTTPS?:** [https://developers.google.com/web/fundamentals/security/encrypt-in-transit/why-https](https://developers.google.com/web/fundamentals/security/encrypt-in-transit/why-https) (Englischsprachig)
