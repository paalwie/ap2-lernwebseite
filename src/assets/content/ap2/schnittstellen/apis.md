# Programmieren von Softwarelösungen: Festlegen von Schnittstellen und vorhandene Schnittstellen nutzen - API, z.B. REST (Application Programming Interface, Representational State Transfer)

## Einführung

Ein API (Application Programming Interface) ist eine Schnittstelle, die es verschiedenen Softwarekomponenten ermöglicht, miteinander zu kommunizieren und Daten auszutauschen, ohne die Details der internen Implementierung der anderen Komponente kennen zu müssen. APIs definieren die Methoden und Datenformate, die Anwendungen verwenden können, um auf Funktionalitäten oder Daten eines anderen Systems zuzugreifen. REST (Representational State Transfer) ist ein weit verbreiteter Architekturstil für die Gestaltung von Netzwerk-basierten APIs, insbesondere für Webdienste.

## Was ist eine API?

Im Kern ist eine API ein Vertrag zwischen zwei Softwarekomponenten. Dieser Vertrag legt fest:

-   **Welche Operationen** (Funktionen, Methoden) die eine Komponente der anderen anbieten kann.
-   **Welche Eingabeparameter** diese Operationen erwarten.
-   **Welche Ausgabewerte** (Daten) als Antwort zurückgegeben werden.
-   **Welche Protokolle** für die Kommunikation verwendet werden (z.B. HTTP, TCP/IP).
-   **Welche Datenformate** für den Austausch verwendet werden (z.B. JSON, XML).

APIs ermöglichen es Entwicklern, die Funktionalität oder Daten anderer Anwendungen oder Dienste in ihre eigenen Anwendungen zu integrieren, ohne sich um die zugrunde liegende Komplexität kümmern zu müssen. Dies fördert die Modularität, Wiederverwendbarkeit und Interoperabilität von Software.

## REST (Representational State Transfer)

REST ist ein Architekturstil, der Prinzipien und Einschränkungen für die Gestaltung von skalierbaren und robusten Netzwerk-Anwendungen, insbesondere Webdienste, definiert. RESTful APIs nutzen die Standardoperationen des HTTP-Protokolls, um Ressourcen zu manipulieren.

**Die wichtigsten Prinzipien von REST:**

1.  **Client-Server:** Eine klare Trennung zwischen dem Client, der die Ressourcen anfordert, und dem Server, der die Ressourcen bereitstellt. Dies ermöglicht eine unabhängige Entwicklung und Skalierung beider Seiten.

2.  **Stateless:** Jede Anfrage vom Client an den Server muss alle Informationen enthalten, die der Server benötigt, um die Anfrage zu verstehen. Der Server speichert keinen Client-Zustand zwischen den Anfragen. Der Zustand der Anwendung wird auf dem Client verwaltet. Dies verbessert die Skalierbarkeit und Zuverlässigkeit.

3.  **Cacheable:** Antworten vom Server sollten als cacheable deklariert werden können, um die Performance zu verbessern und die Serverlast zu reduzieren. Clients und Zwischen-Proxys können gecachte Antworten wiederverwenden.

4.  **Layered System:** Die Architektur kann aus mehreren Schichten von Servern bestehen (z.B. Load Balancer, Proxys, Anwendungsserver, Datenbankserver), die für den Client transparent sind. Der Client interagiert nicht notwendigerweise direkt mit dem Endserver.

5.  **Uniform Interface:** Die Interaktion zwischen Client und Server erfolgt über eine einheitliche Schnittstelle, die folgende Aspekte umfasst:
    -   **Resource Identification:** Ressourcen werden eindeutig über URLs (Uniform Resource Locators) identifiziert.
    -   **Resource Manipulation through Representations:** Clients manipulieren Ressourcen, indem sie Repräsentationen dieser Ressourcen austauschen. Gängige Formate sind JSON und XML.
    -   **Self-Descriptive Messages:** Nachrichten (Requests und Responses) sollten selbstbeschreibend sein, z.B. durch die Verwendung von Standard-HTTP-Methoden und Media Types (Content-Type Header).
    -   **Hypermedia as the Engine of Application State (HATEOAS):** Der Server stellt Hyperlinks in den Antworten bereit, die es dem Client ermöglichen, durch die verschiedenen Zustände und verfügbaren Aktionen der Anwendung zu navigieren. Dies reduziert die Notwendigkeit für den Client, die Struktur der API fest zu codieren.

## HTTP-Methoden in RESTful APIs

RESTful APIs verwenden die Standard-HTTP-Methoden, um Operationen auf Ressourcen auszuführen:

-   **GET:** Wird verwendet, um eine Ressource oder eine Liste von Ressourcen abzurufen. Sollte keine Nebenwirkungen haben (idempotent).
-   **POST:** Wird verwendet, um eine neue Ressource zu erstellen oder Daten an den Server zu senden, um eine Aktion auszuführen. Kann Nebenwirkungen haben.
-   **PUT:** Wird verwendet, um eine vorhandene Ressource zu aktualisieren. Sollte die gesamte Ressource im Request-Body enthalten und die angegebene Ressource ersetzen (idempotent).
-   **DELETE:** Wird verwendet, um eine Ressource zu löschen. Sollte idempotent sein.
-   **PATCH:** Wird verwendet, um eine Teilmenge einer vorhandenen Ressource zu aktualisieren.

## Ressourcen und ihre Identifikation

In einer RESTful API dreht sich alles um Ressourcen. Eine Ressource ist ein abstraktes Konzept, das ein Objekt, eine Dienstleistung oder jede andere identifizierbare Einheit darstellen kann (z.B. ein Benutzer, ein Produkt, eine Bestellung). Ressourcen werden über eindeutige URLs identifiziert.

Beispiele für Ressourcen-URLs:

-   `/users` (Liste aller Benutzer)
-   `/users/123` (Der Benutzer mit der ID 123)
-   `/products` (Liste aller Produkte)
-   `/orders/456` (Die Bestellung mit der ID 456)

## Datenformate in RESTful APIs

Gängige Datenformate für den Austausch von Ressourcendarstellungen in RESTful APIs sind:

-   **JSON (JavaScript Object Notation):** Aufgrund seiner Einfachheit und guten Kompatibilität mit Webtechnologien ist JSON das am häufigsten verwendete Format.
-   **XML (Extensible Markup Language):** Wird in einigen älteren oder Enterprise-APIs immer noch verwendet.

Das Format wird in der Regel im `Content-Type`-Header des HTTP-Requests und -Response angegeben.

## Vorteile von RESTful APIs

-   **Einfachheit:** Die Verwendung von Standard-HTTP-Methoden und URLs macht RESTful APIs einfach zu verstehen und zu verwenden.
-   **Skalierbarkeit:** Die Statelessness des Servers ermöglicht eine einfache horizontale Skalierung.
-   **Flexibilität:** REST ist nicht an ein bestimmtes Datenformat gebunden.
-   **Cacheability:** HTTP-Caching-Mechanismen können effektiv genutzt werden, um die Performance zu verbessern.
-   **Interoperabilität:** RESTful APIs können von einer Vielzahl von Clients (Webbrowser, mobile Apps, andere Server) und in verschiedenen Programmiersprachen genutzt werden.
-   **Lose Kopplung:** Die Client-Server-Architektur fördert eine lose Kopplung zwischen den Systemen.

## Andere API-Stile

Obwohl REST sehr verbreitet ist, gibt es auch andere API-Stile und Technologien:

-   **SOAP (Simple Object Access Protocol):** Ein älterer, protokollgebundenerer Standard für Webdienste, der XML für Nachrichten verwendet und oft auf Protokollen wie HTTP, SMTP oder TCP basiert. SOAP ist in der Regel komplexer als REST.
-   **GraphQL:** Eine Abfragesprache für APIs, die es dem Client ermöglicht, genau die Daten anzufordern, die er benötigt, und nichts weiter. Dies kann die Effizienz bei komplexen Datenabfragen verbessern.
-   **gRPC:** Ein modernes, leistungsstarkes Open-Source-Framework für Remote Procedure Calls (RPC), das von Google entwickelt wurde. gRPC verwendet Protocol Buffers als Interface Definition Language und binäres Serialisierungsformat.

## Fazit

APIs sind entscheidend für die Interoperabilität und den Datenaustausch zwischen Softwarekomponenten und -systemen. REST hat sich als ein dominanter Architekturstil für die Gestaltung von Web-APIs etabliert, der durch seine Einfachheit, Skalierbarkeit und Flexibilität überzeugt. Das Verständnis der Prinzipien von REST und der Verwendung von HTTP-Methoden und Ressourcen ist unerlässlich für die Entwicklung und Nutzung moderner Schnittstellen. Obwohl REST weit verbreitet ist, gibt es auch andere API-Stile und Technologien, die in bestimmten Anwendungsfällen ihre Vorteile haben können.

## Links und Quellen

-   **API - Wikipedia:** [https://de.wikipedia.org/wiki/Application\_Programming\_Interface](https://de.wikipedia.org/wiki/Application_Programming_Interface)
-   **REST - Wikipedia:** [https://de.wikipedia.org/wiki/Representational\_State\_Transfer](https://de.wikipedia.org/wiki/Representational_State_Transfer)
-   **RESTful API - Wikipedia:** [https://en.wikipedia.org/wiki/RESTful\_API](https://en.wikipedia.org/wiki/RESTful_API) (Englischsprachig)
-   **HTTP Methods - MDN Web Docs:** [https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) (Englischsprachig - Detaillierte Beschreibung der HTTP-Methoden)
-   **GraphQL:** [https://graphql.org/](https://graphql.org/) (Englischsprachig - Offizielle Website)
-   **gRPC:** [https://grpc.io/](https://grpc.io/) (Englischsprachig - Offizielle Website)
