# Konzipieren und Umsetzen von kundenspezifischen Softwareanwendungen: Möglichkeiten zur Nutzung von Services und Ressourcen eines Servers kennen - SOAP

## Einführung

SOAP (Simple Object Access Protocol) ist ein Netzwerkprotokollstandard, der für den strukturierten Austausch von Informationen in dezentralen, verteilten Umgebungen entwickelt wurde. Im Gegensatz zu REST, das ein architektonischer Stil ist, ist SOAP ein präzises Protokoll mit festen Regeln und Spezifikationen. SOAP-Nachrichten werden in der Regel über HTTP (oder manchmal andere Transportprotokolle wie SMTP oder TCP) übertragen und verwenden XML als Nachrichtenformat.

## Kernkonzepte von SOAP

1.  **SOAP-Nachricht:** Eine SOAP-Nachricht ist ein XML-Dokument, das aus folgenden Hauptbestandteilen besteht:
    -   **Envelope (Umschlag):** Das Wurzelelement der SOAP-Nachricht, das den gesamten Inhalt der Nachricht definiert. Es enthält optionale Header- und obligatorische Body-Elemente.
    -   **Header (Kopfzeile) (optional):** Enthält anwendungsspezifische Informationen wie Authentifizierungsdaten, Transaktionsinformationen oder Routing-Details. Header-Blöcke können für die Verarbeitung durch Zwischenknoten bestimmt sein.
    -   **Body (Nachrichtenkörper):** Enthält die eigentlichen Nutzdaten der Nachricht, d.h. die Aufrufinformationen (z.B. Name der aufzurufenden Methode und ihre Parameter) oder die Antwortdaten.
    -   **Fault (Fehler) (im Body):** Wenn ein Fehler auftritt, enthält der Body ein `Fault`-Element mit Informationen über den Fehler.

    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <soap:Envelope xmlns:soap="[http://schemas.xmlsoap.org/soap/envelope/](http://schemas.xmlsoap.org/soap/envelope/)">
      <soap:Header>
        <auth:Credentials xmlns:auth="[http://example.org/auth](http://example.org/auth)">
          <auth:Username>Benutzername</auth:Username>
          <auth:Password>Passwort</auth:Password>
        </auth:Credentials>
      </soap:Header>
      <soap:Body>
        <m:GetPrice xmlns:m="[http://example.org/stockquote](http://example.org/stockquote)">
          <m:TickerSymbol>XYZ</m:TickerSymbol>
        </m:GetPrice>
      </soap:Body>
    </soap:Envelope>
    ```

2.  **WSDL (Web Services Description Language):** Eine XML-basierte Sprache zur Beschreibung der Funktionalität eines SOAP-basierten Webdienstes. Eine WSDL-Datei definiert:
    -   Die Operationen (Methoden), die der Dienst anbietet.
    -   Die Nachrichtenformate (Anfrage- und Antwortstrukturen) für jede Operation (unter Verwendung von XML Schema).
    -   Die Endpunkte (URLs), an denen der Dienst erreichbar ist.
    -   Das verwendete Protokoll (z.B. SOAP über HTTP).

    Clients verwenden die WSDL-Datei, um zu verstehen, wie sie den Webdienst aufrufen und die empfangenen Daten interpretieren können.

3.  **UDDI (Universal Description, Discovery, and Integration):** Ein plattformunabhängiges, XML-basiertes Verzeichnis, mit dem Unternehmen ihre Webdienste auflisten und entdecken können. UDDI war als zentraler Mechanismus für die Dienstentdeckung gedacht, hat aber in der Praxis nicht die breite Akzeptanz gefunden wie ursprünglich erwartet. Oft werden andere Mechanismen zur Dienstentdeckung verwendet.

## Interaktion mit SOAP-basierten Services

Die Interaktion mit einem SOAP-basierten Webdienst erfolgt typischerweise in folgenden Schritten:

1.  **Abrufen der WSDL-Datei:** Der Client ruft die WSDL-Datei des gewünschten Webdienstes ab (in der Regel über eine URL, die auf `.wsdl` endet).
2.  **Verstehen des Dienstes:** Der Client analysiert die WSDL-Datei, um die verfügbaren Operationen, die erwarteten Nachrichtenformate und den Endpunkt des Dienstes zu verstehen.
3.  **Erstellen der SOAP-Anfrage:** Der Client erstellt eine SOAP-Nachricht (ein XML-Dokument), die den Aufruf der gewünschten Operation und die entsprechenden Parameter im Body enthält. Optional können im Header zusätzliche Informationen hinzugefügt werden.
4.  **Senden der Anfrage:** Die SOAP-Nachricht wird in der Regel über eine HTTP POST-Anfrage an den in der WSDL-Datei angegebenen Endpunkt des Servers gesendet. Der `Content-Type`-Header der HTTP-Anfrage ist typischerweise `application/soap+xml`.
5.  **Verarbeiten der SOAP-Antwort:** Der Server verarbeitet die Anfrage und sendet eine SOAP-Antwort zurück (ebenfalls ein XML-Dokument im HTTP-Response-Body). Die Antwort enthält entweder das Ergebnis der Operation im Body oder ein `Fault`-Element, wenn ein Fehler aufgetreten ist.
6.  **Client-seitige Verarbeitung:** Der Client parst die SOAP-Antwort und extrahiert die gewünschten Daten oder Fehlerinformationen.

Viele Programmiersprachen und Entwicklungsumgebungen bieten Tools und Bibliotheken (oft als "SOAP Toolkits" oder "Web Services Stacks" bezeichnet), die die Erstellung und Verarbeitung von SOAP-Nachrichten sowie die Interaktion mit WSDL-Dateien erleichtern (z.B. Apache Axis, .NET WCF, Java JAX-WS).

## Vorteile von SOAP

-   **Standardisierung:** SOAP ist ein streng standardisiertes Protokoll, was die Interoperabilität zwischen verschiedenen Plattformen und Technologien erleichtern kann.
-   **Verträge (WSDL):** WSDL bietet eine formale Beschreibung des Dienstes, was das Verständnis und die Integration für Clients erleichtert.
-   **Unterstützung für komplexe Operationen:** SOAP ist gut geeignet für die Implementierung komplexer, zustandsbehafteter Operationen.
-   **Integrierte Fehlerbehandlung:** Das `Fault`-Element in SOAP bietet einen standardisierten Weg, Fehlerinformationen zu übermitteln.
-   **Erweiterbarkeit:** Der SOAP-Header ermöglicht das Hinzufügen von Metadaten und zusätzlichen Funktionalitäten (z.B. Sicherheit, Transaktionen) auf standardisierte Weise.
-   **Transportsicherheit:** SOAP kann über verschiedene sichere Transportprotokolle wie HTTPS (SOAP über SSL/TLS) übertragen werden.

## Nachteile von SOAP

-   **Komplexität:** SOAP ist im Vergleich zu REST komplexer, sowohl in Bezug auf die Nachrichtenstruktur (XML-basiert) als auch auf die Konzepte (WSDL, UDDI).
-   **Overhead:** Die XML-basierten SOAP-Nachrichten sind oft größer als z.B. JSON-basierte Nachrichten in REST, was zu einem höheren Bandbreitenverbrauch und einer langsameren Übertragung führen kann.
-   **Schwieriger zu parsen (manuell):** Das manuelle Parsen und Erstellen von SOAP-Nachrichten kann aufwendig sein.
-   **Weniger "Web-freundlich":** SOAP ist weniger eng an die Prinzipien des World Wide Web (wie sie von REST genutzt werden) angelehnt.
-   **Geringere Performance:** Die XML-Verarbeitung und die größere Nachrichten können zu einer geringeren Performance im Vergleich zu REST führen.
-   **UDDI-Akzeptanz:** UDDI hat sich nicht als der allgegenwärtige Mechanismus zur Dienstentdeckung durchgesetzt, wie ursprünglich erwartet.

## Einsatzbereiche von SOAP

Obwohl REST in vielen Bereichen, insbesondere bei öffentlichen Web APIs, populärer geworden ist, wird SOAP immer noch in bestimmten Unternehmensumgebungen eingesetzt, insbesondere in Szenarien, die folgende Aspekte betonen:

-   **Starke Standardisierung und formale Verträge (WSDL).**
-   **Komplexe Transaktionen und zustandsbehaftete Interaktionen.**
-   **Integrierte Sicherheitsfunktionen (z.B. WS-Security-Standards).**
-   **Unternehmensweite Integration von Legacy-Systemen.**
-   **Umgebungen, in denen die Vorteile der Standardisierung und der erweiterten Funktionen die Nachteile der Komplexität und des Overheads überwiegen.**

## Fazit

SOAP ist ein standardisiertes Protokoll für den Austausch strukturierter Informationen in Web Services. Es bietet eine reiche Menge an Funktionen wie formale Vertragsdefinitionen (WSDL), integrierte Fehlerbehandlung und Erweiterbarkeitsmechanismen. Obwohl es im Vergleich zu REST komplexer und oft mit mehr Overhead verbunden ist, bleibt SOAP in bestimmten Unternehmensszenarien relevant, insbesondere dort, wo starke Standardisierung und erweiterte Funktionen erforderlich sind. Das Verständnis der Funktionsweise von SOAP und seiner Kernkonzepte ist wichtig für die Integration mit solchen Systemen.

## Links und Quellen

-   **SOAP - Wikipedia (Deutsch):** [https://de.wikipedia.org/wiki/Simple_Object_Access_Protocol](https://de.wikipedia.org/wiki/Simple_Object_Access_Protocol)
-   **SOAP - Wikipedia (Englischsprachig):** [https://en.wikipedia.org/wiki/SOAP](https://en.wikipedia.org/wiki/SOAP)
-   **SOAP Version 1.2 (W3C Recommendation):** [https://www.w3.org/TR/soap12/](https://www.w3.org/TR/soap12/) (Englischsprachige Spezifikation)
-   **WSDL 2.0 (W3C Recommendation):** [https://www.w3.org/TR/wsdl20/](https://www.w3.org/TR/wsdl20/) (Englischsprachige Spezifikation)
-   **UDDI - Wikipedia (Deutsch):** [https://de.wikipedia.org/wiki/Universal_Description,_Discovery_and_Integration](https://de.wikipedia.org/wiki/Universal_Description,_Discovery_and_Integration)
-   **UDDI - Wikipedia (Englischsprachig):** [https://en.wikipedia.org/wiki/UDDI](https://en.wikipedia.org/wiki/UDDI)
-   **Tutorials und Dokumentationen zur Verwendung von SOAP in verschiedenen Programmiersprachen und Frameworks.**
    -   **Apache Axis:** [http://axis.apache.org/axis2/java/core/](http://axis.apache.org/axis2/java/core/) (Java)
    -   **.NET WCF (Windows Communication Foundation):** [https://learn.microsoft.com/en-us/dotnet/framework/wcf/](https://learn.microsoft.com/en-us/dotnet/framework/wcf/) (C#)
    -   **Java JAX-WS (Java API for XML Web Services):** Suche nach "Java JAX-WS tutorial"
-   **Artikel und Blogbeiträge zum Thema "SOAP Web Services" und "Vergleich von REST und SOAP".**

-----

> **Fehler gefunden?** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
