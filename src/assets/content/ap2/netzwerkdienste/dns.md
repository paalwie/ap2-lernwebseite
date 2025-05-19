# Netzwerkrelevante Dienste beschreiben können: DNS (Domain Name System)

## Einführung

Das Domain Name System (DNS) ist ein hierarchisches und verteiltes Namensauflösungssystem für Computer, Dienste oder andere Ressourcen, die mit dem Internet oder einem privaten Netzwerk verbunden sind. Es übersetzt menschenlesbare Domainnamen (z.B. www.beispiel.de) in die numerischen IP-Adressen (z.B. 192.0.2.1), die Computer benötigen, um miteinander zu kommunizieren. DNS ist ein fundamentaler Dienst des Internets und vieler privater Netzwerke, ohne den das Surfen im Web oder der Versand von E-Mails über Domainnamen nicht möglich wäre.

## Charakterisierung des DNS

**1. Grundlegendes Konzept:**

-   DNS funktioniert wie ein Telefonbuch für das Internet. Anstatt sich numerische IP-Adressen merken zu müssen, können Benutzer leicht zu merkende Domainnamen verwenden. DNS sorgt dann im Hintergrund dafür, dass der richtige Server unter der entsprechenden IP-Adresse gefunden wird.
-   Das DNS ist ein verteiltes System, das aus vielen verschiedenen DNS-Servern weltweit besteht, die zusammenarbeiten, um die Namensauflösung zu ermöglichen.

**2. Hierarchische Struktur:**

-   Das DNS ist hierarchisch aufgebaut, ähnlich einem umgekehrten Baum. Die Wurzel des Baumes wird durch die Root-DNS-Server repräsentiert (es gibt 13 logische Root-Server, die von verschiedenen Organisationen verwaltet werden).
-   Unterhalb der Root-Ebene befinden sich die Top-Level-Domains (TLDs) wie .com, .org, .de, .fr usw. Diese werden von ICANN (Internet Corporation for Assigned Names and Numbers) und anderen zuständigen Organisationen verwaltet.
-   Unterhalb der TLDs folgen die Second-Level-Domains (SLDs) wie "beispiel" in "beispiel.de". Diese werden in der Regel von Registraren vergeben.
-   Darunter können weitere Subdomains (z.B. "www" in "www.beispiel.de" oder "mail" in "mail.beispiel.de") eingerichtet werden.

**3. Funktionsweise der Namensauflösung:**

-   Wenn ein Benutzer in seinem Webbrowser einen Domainnamen eingibt, startet der Computer (der DNS-Client oder Resolver) eine DNS-Abfrage.
-   **Rekursiver Resolver:** In den meisten Fällen sendet der Client die Anfrage an einen rekursiven DNS-Resolver (oft der DNS-Server des Internetproviders oder ein öffentlicher DNS-Server wie Google DNS oder Cloudflare DNS).
-   **Iterative Abfrage:** Der rekursive Resolver fragt dann nacheinander verschiedene DNS-Server ab, beginnend bei den Root-Servern, um die IP-Adresse für den angefragten Domainnamen zu finden.
    1.  Der Root-Server leitet die Anfrage an einen zuständigen TLD-Server weiter (z.B. für .de).
    2.  Der TLD-Server leitet die Anfrage an den zuständigen autoritativen Namensserver für die Domain (z.B. beispiel.de) weiter.
    3.  Der autoritative Namensserver enthält die DNS-Einträge für die Domain und sendet die entsprechende IP-Adresse (den A-Record für IPv4 oder den AAAA-Record für IPv6) zurück an den rekursiven Resolver.
-   **Caching:** Um die Belastung der DNS-Server zu reduzieren und die Antwortzeiten zu verbessern, speichern rekursive Resolver und auch die Clients die erhaltenen DNS-Informationen für eine bestimmte Zeit (die im Time-to-Live - TTL - Wert des DNS-Eintrags festgelegt ist).

**4. Wichtige DNS-Record-Typen:**

-   **A (Address Record):** Ordnet einen Domainnamen einer IPv4-Adresse zu.
-   **AAAA (IPv6 Address Record):** Ordnet einen Domainnamen einer IPv6-Adresse zu.
-   **CNAME (Canonical Name Record):** Erstellt einen Alias für einen anderen Domainnamen.
-   **MX (Mail Exchanger Record):** Gibt die Mailserver an, die für den Empfang von E-Mails für eine Domain zuständig sind.
-   **NS (Name Server Record):** Gibt die autoritativen Namensserver für eine Domain an.
-   **SOA (Start of Authority Record):** Enthält administrative Informationen über eine DNS-Zone.
-   **TXT (Text Record):** Ermöglicht das Hinterlegen von beliebigen Textinformationen, wird oft für Verifizierungszwecke (z.B. SPF, DKIM) verwendet.
-   **SRV (Service Record):** Gibt Informationen über verfügbare Dienste (z.B. Protokoll, Port, Host) für eine Domain an.
-   **PTR (Pointer Record):** Ordnet eine IP-Adresse einem Domainnamen zu (Reverse DNS Lookup).

**5. Bedeutung und Relevanz des DNS:**

-   **Grundlage des Internets:** Ermöglicht die Nutzung von menschenlesbaren Domainnamen anstelle von komplexen IP-Adressen.
-   **Ermöglicht Web-Browsing:** Ohne DNS könnten wir nicht einfach Webadressen eingeben und auf Websites zugreifen.
-   **Funktionieren von E-Mail:** MX-Records stellen sicher, dass E-Mails an die richtigen Mailserver zugestellt werden.
-   **Lastverteilung:** DNS kann verwendet werden, um Anfragen auf mehrere Server zu verteilen (z.B. durch Round-Robin DNS).
-   **Dienstfindung:** SRV-Records erleichtern die Auffindung von Netzwerkdiensten.
-   **Sicherheit:** DNS spielt auch eine Rolle bei Sicherheitsmechanismen (z.B. DNSSEC).

**6. Sicherheitsaspekte des DNS:**

-   **DNS-Spoofing/DNS-Cache-Poisoning:** Angreifer versuchen, gefälschte DNS-Einträge in den Cache von DNS-Resolvern einzuschleusen, um Benutzer auf bösartige Websites umzuleiten.
-   **DNS-Hijacking:** Angreifer übernehmen die Kontrolle über die DNS-Einstellungen einer Domain, um den Traffic umzuleiten.
-   **DNS-basiertes Malware-Command-and-Control:** Malware kann DNS verwenden, um mit ihren Command-and-Control-Servern zu kommunizieren.
-   **DNSSEC (DNS Security Extensions):** Ein Satz von DNS-Sicherheitsprotokollen, die kryptografische Signaturen verwenden, um die Integrität und Authentizität von DNS-Daten zu gewährleisten und so vor bestimmten Angriffen zu schützen.

## Fazit

Das Domain Name System (DNS) ist ein unverzichtbarer Dienst für das Funktionieren des Internets und vieler privater Netzwerke. Es ermöglicht die einfache Zuordnung von Domainnamen zu IP-Adressen und umgekehrt. Das Verständnis seiner hierarchischen Struktur, der Funktionsweise der Namensauflösung und der verschiedenen Record-Typen ist für jeden IT-Experten von grundlegender Bedeutung. Darüber hinaus ist die Kenntnis der Sicherheitsrisiken und der Schutzmaßnahmen im Zusammenhang mit DNS unerlässlich für den Betrieb sicherer Netzwerke.

## Links und Quellen

-   **Wikipedia - Domain Name System:** [https://de.wikipedia.org/wiki/Domain\_Name\_System](https://de.wikipedia.org/wiki/Domain_Name_System)
-   **Cloudflare - Was ist DNS? Wie das Domain Name System funktioniert:** [https://www.cloudflare.com/de-de/learning/dns/what-is-dns/](https://www.cloudflare.com/de-de/learning/dns/what-is-dns/)
-   **IONOS by 1&1 - Was ist DNS? Die Funktionsweise des Domain Name Systems:** [https://www.ionos.de/digitalguide/domains/domain-wissen/was-ist-dns-die-funktionsweise-des-domain-name-systems/](https://www.ionos.de/digitalguide/domains/domain-wissen/was-ist-dns-die-funktionsweise-des-domain-name-systems/)
-   **Google Cloud - DNS-Übersicht:** [https://cloud.google.com/dns/docs/overview?hl=de](https://cloud.google.com/dns/docs/overview?hl=de)
-   **ISC (Internet Systems Consortium) - Understanding DNS:** [https://www.isc.org/blogs/understanding-dns/](https://www.isc.org/blogs/understanding-dns/) (Englischsprachig)
-   **ICANN - DNS Explained:** [https://www.icann.org/resources/pages/dns-explained-2017-10-06-en](https://www.icann.org/resources/pages/dns-explained-2017-10-06-en) (Englischsprachig)
