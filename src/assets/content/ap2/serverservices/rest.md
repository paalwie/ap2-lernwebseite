# Konzipieren und Umsetzen von kundenspezifischen Softwareanwendungen: Möglichkeiten zur Nutzung von Services und Ressourcen eines Servers kennen - REST

## Einführung

REST (Representational State Transfer) ist ein architektonischer Stil, der Prinzipien und Einschränkungen für die Gestaltung von vernetzten Anwendungen beschreibt, insbesondere für Web Services. Es ist kein Protokoll oder eine Technologie an sich, sondern ein Satz von Richtlinien, die, wenn sie befolgt werden, zu skalierbaren, flexiblen und wartbaren Systemen führen können. REST wird häufig in Verbindung mit dem HTTP-Protokoll verwendet und ist die Grundlage für viele moderne Web APIs.

## Kernprinzipien von REST

Ein RESTful System zeichnet sich durch die Einhaltung der folgenden sechs Kernprinzipien aus:

1.  **Client-Server:** Es gibt eine klare Trennung zwischen dem Client (der die Ressourcen anfordert) und dem Server (der die Ressourcen bereitstellt). Dies ermöglicht die unabhängige Entwicklung und Skalierung von Client und Server.

2.  **Stateless:** Der Server speichert keinen Zustand des Clients zwischen den Anfragen. Jede Anfrage vom Client an den Server muss alle Informationen enthalten, die der Server benötigt, um die Anfrage zu verstehen. Der Zustand der Anwendung wird auf dem Client verwaltet. Dies verbessert die Skalierbarkeit des Servers, da er keinen Sitzungszustand für jeden Client verwalten muss.

3.  **Cacheable:** Antworten vom Server sollten explizit als cacheable oder nicht-cacheable gekennzeichnet werden. Clients und Zwischen-Proxys können cacheable Antworten speichern, um die Serverlast zu reduzieren und die Leistung für den Client zu verbessern.

4.  **Layered System:** Die Architektur kann aus mehreren Schichten von Servern bestehen (z.B. Load Balancer, Proxys, Anwendungsserver, Datenbankserver), die für den Client transparent sind. Der Client interagiert nicht notwendigerweise direkt mit dem Endserver und muss sich nicht darüber im Klaren sein, wie viele Zwischenschichten es gibt.

5.  **Uniform Interface:** Dies ist das wichtigste Prinzip und umfasst mehrere Aspekte:
    -   **Resource Identification:** Ressourcen werden durch eindeutige URIs (Uniform Resource Identifiers) identifiziert.
    -   **Resource Manipulation through Representations:** Clients manipulieren Ressourcen durch Repräsentationen. Der Server sendet eine Repräsentation der Ressource (z.B. im JSON- oder XML-Format), und der Client sendet eine Repräsentation zurück, um die Ressource zu ändern.
    -   **Self-descriptive Messages:** Nachrichten (Anfragen und Antworten) sollten selbstbeschreibend sein. Sie sollten genügend Informationen enthalten, damit der Empfänger die Nachricht verstehen kann. Dazu gehören z.B. der Medientyp der Repräsentation (über HTTP-Header wie `Content-Type`).
    -   **Hypermedia as the Engine of Application State (HATEOAS):** Clients sollten in der Lage sein, durch die API zu navigieren, indem sie in den Antworten bereitgestellte Hyperlinks verwenden. Dies reduziert die Notwendigkeit für Clients, alle möglichen URI-Strukturen zu kennen.

6.  **Code-on-Demand (optional):** Der Server kann optional ausführbaren Code (z.B. JavaScript) an den Client senden, der dann auf dem Client ausgeführt wird. Dieses Prinzip wird nicht immer verwendet, erhöht aber die Flexibilität des Clients.

## Interaktion mit RESTful Services

Clients interagieren mit RESTful Services in der Regel über das HTTP-Protokoll und verwenden standardmäßige HTTP-Methoden, um Operationen auf Ressourcen auszuführen:

-   **GET:** Wird verwendet, um eine Repräsentation einer Ressource abzurufen. Sollte keine Seiteneffekte haben (idempotent).
-   **POST:** Wird verwendet, um eine neue Ressource zu erstellen oder Daten an den Server zu senden, um eine bestimmte Operation auszuführen. Kann Seiteneffekte haben.
-   **PUT:** Wird verwendet, um eine vorhandene Ressource zu aktualisieren oder zu ersetzen. Sollte idempotent sein.
-   **DELETE:** Wird verwendet, um eine Ressource zu löschen. Sollte idempotent sein.

Zusätzlich zu diesen Hauptmethoden gibt es weitere HTTP-Methoden wie `PATCH` (für partielle Updates), `HEAD` (um Metadaten abzurufen, ohne den Body), `OPTIONS` (um die vom Server unterstützten Methoden abzufragen) usw.

## Ressourcen und ihre Identifikation

In einem RESTful System dreht sich alles um Ressourcen. Eine Ressource ist ein abstraktes Konzept, das eine Information oder ein Objekt repräsentiert (z.B. ein Benutzer, ein Produkt, eine Bestellung). Ressourcen werden durch eindeutige URIs identifiziert.

Beispiele für Ressourcen-URIs:

-   `/users` (Sammlung aller Benutzer)
-   `/users/123` (spezifischer Benutzer mit der ID 123)
-   `/products` (Sammlung aller Produkte)
-   `/products/456` (spezifisches Produkt mit der ID 456)
-   `/orders` (Sammlung aller Bestellungen)
-   `/orders/789/items` (die Artikel der Bestellung mit der ID 789)

## Repräsentationen von Ressourcen

Wenn ein Client eine Ressource anfordert oder ändert, tauschen Client und Server Repräsentationen dieser Ressource aus. Das Format dieser Repräsentation wird durch den `Content-Type`-Header in den HTTP-Nachrichten angegeben. Gängige Formate sind:

-   **JSON (application/json):** Sehr beliebt, insbesondere für Web APIs.
-   **XML (application/xml, text/xml):** Ein weiteres strukturiertes Format.
-   **HTML (text/html):** Kann zur Darstellung von Ressourcen im Browser verwendet werden.
-   **Plain Text (text/plain):** Für einfache Textdaten.
-   **Bilder (image/jpeg, image/png):** Für binäre Ressourcen.

Der Client kann über den `Accept`-Header in seiner Anfrage angeben, welche Repräsentationsformate er verarbeiten kann.

## Statelessness

Die Stateless-Natur von REST ist entscheidend für die Skalierbarkeit. Jede Anfrage vom Client muss alle Informationen enthalten, die der Server benötigt, um sie zu bearbeiten. Dazu gehören typischerweise Authentifizierungsinformationen (z.B. über Header wie `Authorization` mit einem Token). Der Server speichert keine Informationen über vorherige Anfragen des Clients (keine Sessions auf dem Server).

## Caching

RESTful APIs sollten Caching unterstützen, um die Leistung zu verbessern und die Serverlast zu reduzieren. Der Server gibt in seinen Antworten Cache-Direktiven (z.B. über HTTP-Header wie `Cache-Control`, `Expires`, `ETag`, `Last-Modified`) an, die Clients und Proxys anweisen, ob und wie lange die Antwort gecacht werden darf.

## HATEOAS (Hypermedia as the Engine of Application State)

HATEOAS ist ein fortgeschrittenes Prinzip von REST. Ein RESTful API, das HATEOAS implementiert, liefert in seinen Antworten Hyperlinks (URIs), die es dem Client ermöglichen, weitere Aktionen auszuführen oder auf verwandte Ressourcen zuzugreifen. Dies macht die API selbstentdeckend und reduziert die Notwendigkeit für Clients, fest codierte URIs zu verwenden.

Beispiel einer JSON-Antwort mit HATEOAS-Links:

```json
{
  "id": 123,
  "name": "Produkt A",
  "price": 25.00,
  "_links": {
    "self": { "href": "/products/123" },
    "orders": { "href": "/orders?productId=123" },
    "update": { "href": "/products/123", "method": "PUT" },
    "delete": { "href": "/products/123", "method": "DELETE" }
  }
}
```

Der Client kann nun die in `_links` bereitgestellten URIs verwenden, um das Produkt abzurufen, zugehörige Bestellungen zu finden, das Produkt zu aktualisieren oder zu löschen, ohne die genauen URI-Strukturen im Voraus kennen zu müssen.

## Vorteile von REST

-   **Skalierbarkeit:** Die Stateless-Natur und die Unterstützung für Caching verbessern die Skalierbarkeit von RESTful Anwendungen.
-   **Flexibilität:** Die Entkopplung von Client und Server und die Verwendung standardisierter Schnittstellen ermöglichen eine größere Flexibilität in der Entwicklung und Evolution der Systeme.
-   **Interoperabilität:** REST basiert auf offenen Standards (HTTP, URIs, gängige Datenformate), was die Interoperabilität zwischen verschiedenen Technologien und Plattformen erleichtert.
-   **Einfachheit:** Im Vergleich zu komplexeren Architekturen wie SOAP ist REST oft einfacher zu verstehen und zu implementieren.
-   **Sichtbarkeit:** Die Verwendung von Standard-HTTP-Methoden und URIs macht die Interaktionen zwischen Client und Server transparent und leicht zu überwachen.

## Nachteile von REST

-   **Over- und Under-Fetching:** Clients erhalten möglicherweise mehr Daten als sie benötigen (Over-Fetching) oder müssen mehrere Anfragen senden, um alle benötigten Daten zu erhalten (Under-Fetching). GraphQL ist eine Alternative, die dieses Problem adressiert.
-   **Statelessness kann komplex sein:** Die Verwaltung des Anwendungszustands auf dem Client kann in komplexen Anwendungen aufwendig sein.
-   **HATEOAS-Implementierung:** Die korrekte Implementierung von HATEOAS kann komplex sein und wird nicht immer vollständig umgesetzt.

## Nutzung von RESTful Services

Um die Services und Ressourcen eines Servers über eine RESTful API zu nutzen, führt ein Client typischerweise folgende Schritte aus:

1.  **Erstellen einer HTTP-Anfrage:** Der Client erstellt eine HTTP-Anfrage, die die gewünschte Aktion (Methode wie GET, POST, PUT, DELETE) und die URI der Zielressource enthält.
2.  **Senden der Anfrage:** Die Anfrage wird an den Server gesendet.
3.  **Verarbeiten der Antwort:** Der Server verarbeitet die Anfrage und sendet eine HTTP-Antwort zurück, die einen Statuscode (z.B. 200 OK, 404 Not Found, 500 Internal Server Error) und optional eine Repräsentation der angeforderten oder geänderten Ressource im Body der Antwort enthält.
4.  **Client-seitige Verarbeitung:** Der Client interpretiert den Statuscode und verarbeitet den Body der Antwort (z.B. Anzeige von Daten, Aktualisierung der Benutzeroberfläche).

Viele Programmiersprachen und Frameworks bieten Bibliotheken und Tools, um die Interaktion mit RESTful APIs zu vereinfachen (z.B. `requests` in Python, `fetch` API im Browser, `RestTemplate` in Spring).

## Fazit

REST ist ein weit verbreiteter und wichtiger architektonischer Stil für die Entwicklung von Web Services. Seine Prinzipien fördern die Erstellung von skalierbaren, flexiblen und interoperablen Anwendungen. Das Verständnis der Kernprinzipien von REST und der Art und Weise, wie Clients mit RESTful APIs interagieren, ist eine grundlegende Fähigkeit für die Entwicklung moderner Softwareanwendungen, die auf Serverressourcen zugreifen müssen.

## Links und Quellen

-   **Representational state transfer - Wikipedia (Deutsch):** [https://de.wikipedia.org/wiki/Representational_State_Transfer](https://de.wikipedia.org/wiki/Representational_State_Transfer)
-   **Representational state transfer - Wikipedia (Englischsprachig):** [https://en.wikipedia.org/wiki/Representational_state_transfer](https://en.wikipedia.org/wiki/Representational_state_transfer)
-   **Architectural Styles and the Design of Network-based Software Architectures (Roy Fielding's Dissertation):** [https://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm](https://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm) (Die ursprüngliche Beschreibung von REST)
-   **REST API Tutorial - RESTful.io:** [https://restfulapi.net/](https://restfulapi.net/) (Englischsprachiges Tutorial)
-   **HTTP Methods - MDN Web Docs:** [https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
-   **HTTP Status Codes - MDN Web Docs:** [https://developer.mozilla.org/en-US/docs/Web/HTTP/Status](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
-   **Tutorials und Dokumentationen zur Nutzung von RESTful APIs in verschiedenen Programmiersprachen und Frameworks.**
    -   **Python Requests Library:** [https://requests.readthedocs.io/en/latest/](https://requests.readthedocs.io/en/latest/)
    -   **Fetch API (JavaScript):** [https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
-   **Artikel und Blogbeiträge zum Thema "Best Practices für die Entwicklung und Nutzung von RESTful APIs".**

-----

> **Fehler gefunden?** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
