# Präventive IT-Sicherheitsmaßnahmen gegen Identitätsdiebstahl (Phishing)

## Einführung

Identitätsdiebstahl, oft eingeleitet durch Phishing-Angriffe, ist eine ernste Bedrohung, bei der Betrüger versuchen, sensible persönliche Informationen wie Benutzernamen, Passwörter, Kreditkartendaten oder Sozialversicherungsnummern zu erlangen. Diese Informationen können dann für betrügerische Aktivitäten missbraucht werden. Die Planung und Umsetzung präventiver IT-Sicherheitsmaßnahmen ist entscheidend, um sich und seine Organisation vor Phishing-Angriffen zu schützen.

## Grundlagen

**Was ist Phishing?**

Phishing ist eine Form des Social Engineering, bei der Angreifer versuchen, ihre Opfer durch gefälschte E-Mails, Nachrichten, Websites oder Anrufe dazu zu bringen, vertrauliche Informationen preiszugeben oder schädliche Aktionen auszuführen (z.B. Klicken auf bösartige Links oder Herunterladen von Malware).

**Ziele von Phishing-Angriffen:**

- **Erlangung von Zugangsdaten:** Benutzernamen und Passwörter für Online-Konten (z.B. E-Mail, Bankkonten, soziale Medien).
- **Sammeln persönlicher Informationen:** Kreditkartennummern, Bankdaten, Sozialversicherungsnummern, Adressen, Telefonnummern.
- **Verbreitung von Malware:** Opfer dazu verleiten, schädliche Software herunterzuladen und zu installieren (was zu weiteren Angriffen wie Ransomware führen kann).
- **Durchführung von Finanzbetrug:** Direkter Diebstahl von Geld oder unautorisierte Transaktionen.

**Verschiedene Formen von Phishing:**

- **E-Mail-Phishing:** Die häufigste Form, bei der gefälschte E-Mails versendet werden, die scheinbar von legitimen Organisationen stammen.
- **Spear-Phishing:** Gezielte Angriffe auf bestimmte Personen oder Organisationen, oft mit personalisierten Inhalten.
- **Whaling:** Spear-Phishing-Angriffe, die auf hochrangige Führungskräfte abzielen.
- **SMS-Phishing (Smishing):** Betrügerische Nachrichten per SMS.
- **Telefon-Phishing (Vishing):** Betrügerische Anrufe, bei denen sich die Anrufer als vertrauenswürdige Stellen ausgeben.
- **Website-Spoofing:** Erstellung gefälschter Websites, die legitimen Seiten täuschend ähnlich sehen, um Benutzer zur Eingabe ihrer Daten zu bewegen.
- **Social Media Phishing:** Angriffe über soziale Medienplattformen.

## Präventive IT-Sicherheitsmaßnahmen gegen Phishing

Ein umfassender Ansatz, der technische Maßnahmen und Benutzerschulung kombiniert, ist entscheidend, um sich vor Phishing zu schützen:

**1. Technische Maßnahmen:**

- **E-Mail-Sicherheitslösungen:**
    - **Spam- und Phishing-Filter:** Einsatz fortschrittlicher Filter, die verdächtige E-Mails erkennen und blockieren oder in den Spam-Ordner verschieben.
    - **SPF (Sender Policy Framework), DKIM (DomainKeys Identified Mail) und DMARC (Domain-based Message Authentication, Reporting & Conformance):** Technologien zur Authentifizierung von E-Mail-Absendern und zur Verhinderung von E-Mail-Spoofing.
    - **Link-Analyse und Rewrite-Funktionen:** Überprüfung von Links in E-Mails und gegebenenfalls Umschreiben, um Benutzer vor bösartigen Zielen zu schützen.
    - **Sandbox-Umgebungen:** Automatische Analyse von E-Mail-Anhängen in einer sicheren Umgebung, um Schadsoftware zu erkennen.
- **Web-Sicherheit:**
    - **Sichere Browser-Konfigurationen:** Aktivierung von Sicherheitsfunktionen im Browser, wie z.B. Warnungen vor verdächtigen Websites.
    - **URL-Filterung und Reputationsdienste:** Blockieren des Zugriffs auf bekannte bösartige oder verdächtige Websites.
    - **HTTPS erzwingen:** Sicherstellen, dass sensible Daten nur über verschlüsselte HTTPS-Verbindungen übertragen werden.
- **Multi-Faktor-Authentifizierung (MFA):** Implementierung von MFA für alle kritischen Online-Konten und Unternehmensanwendungen. Dies bietet eine zusätzliche Sicherheitsebene, selbst wenn Passwörter durch Phishing kompromittiert wurden.
- **Endpoint-Sicherheit:**
    - **Aktuelle Antiviren- und Anti-Malware-Software:** Erkennung und Blockierung von Schadsoftware, die über Phishing-Angriffe verbreitet werden kann.
    - **Endpoint Detection and Response (EDR):** Überwachung von Endgeräten auf verdächtige Aktivitäten.
- **Netzwerksicherheit:**
    - **Intrusion Detection und Prevention Systeme (IDPS):** Erkennung und Blockierung von bösartigem Netzwerkverkehr, der mit Phishing-Angriffen in Verbindung stehen könnte.
- **DNS-Filterung:** Blockieren des Zugriffs auf bekannte Phishing-Domains.

**2. Mitarbeiterschulung und Sensibilisierung:**

- **Regelmäßige Schulungen zu Phishing-Erkennung:** Vermittlung von Wissen über die verschiedenen Arten von Phishing-Angriffen, typische Merkmale verdächtiger Nachrichten und Websites.
- **Erkennung von verdächtigen E-Mails:** Schulung, aufmerksam auf Absenderadressen, Betreffzeilen, Grammatik- und Rechtschreibfehler, ungewöhnliche Anhänge oder dringende Handlungsaufforderungen zu achten.
- **Überprüfung von Links:** Anweisung, Links in E-Mails oder Nachrichten nicht direkt anzuklicken, sondern den Mauszeiger darüber zu bewegen, um die tatsächliche Ziel-URL zu überprüfen. Bei Unsicherheit sollte die Website direkt im Browser aufgerufen werden.
- **Vorsicht bei der Preisgabe persönlicher Informationen:** Sensibilisierung, niemals sensible Informationen (Passwörter, Kreditkartendaten etc.) über E-Mail oder auf unbekannten Websites preiszugeben.
- **Umgang mit unerwarteten Anfragen:** Mitarbeiter sollten angewiesen werden, skeptisch gegenüber unerwarteten Anfragen nach persönlichen oder geschäftlichen Informationen per Telefon oder E-Mail zu sein und die Identität des Anfragenden unabhängig zu überprüfen.
- **Meldung verdächtiger Aktivitäten:** Schulung der Mitarbeiter, wie verdächtige E-Mails, Nachrichten oder Anrufe gemeldet werden können.
- **Durchführung simulierter Phishing-Angriffe:** Regelmäßige, unangekündigte Simulationen, um das Bewusstsein der Mitarbeiter zu testen und zu verbessern.

**3. Prozesse und Richtlinien:**

- **Klare Richtlinien für die Kommunikation sensibler Informationen:** Festlegung sicherer Kommunikationswege für den Austausch vertraulicher Daten.
- **Verifizierung von Anfragen:** Etablierung von Prozessen zur Überprüfung der Legitimität von Anfragen nach sensiblen Informationen, insbesondere wenn diese per E-Mail oder Telefon eingehen.
- **Notfallplan für Phishing-Vorfälle:** Festlegung von Schritten, die im Falle eines erfolgreichen Phishing-Angriffs unternommen werden müssen (z.B. Passwortänderung, Kontosperrung, Meldung an die IT-Abteilung).

**4. Öffentliche Sensibilisierung:**

- **Informationen für Kunden und Nutzer:** Bereitstellung von Informationen auf der eigenen Website und über andere Kanäle, wie legitime Kommunikation aussieht und wie Phishing-Versuche erkannt werden können.

> **Hinweis:** Die Kombination aus technischen Sicherheitsmaßnahmen und einem gut geschulten und sensibilisierten Personal ist der effektivste Schutz gegen Identitätsdiebstahl durch Phishing. Da Phishing-Taktiken sich ständig weiterentwickeln, ist eine kontinuierliche Anpassung der Präventionsmaßnahmen und eine regelmäßige Schulung unerlässlich.

## Beispiel oder Anwendungsfall

Ein Unternehmen implementiert folgende präventive Maßnahmen gegen Phishing:

- **Technisch:** Einsatz einer E-Mail-Sicherheitslösung mit fortschrittlicher Phishing-Erkennung, SPF, DKIM und DMARC. Erzwingung von MFA für alle Cloud-Anwendungen und VPN-Zugänge. Implementierung von URL-Filterung und DNS-Sperrlisten.
- **Schulung:** Durchführung vierteljährlicher Schulungen für alle Mitarbeiter, die verschiedene Phishing-Techniken und Erkennungsmerkmale behandeln. Regelmäßige Versendung von internen Newslettern mit Sicherheitstipps.
- **Prozesse:** Einführung einer Richtlinie, dass Passwörter niemals per E-Mail angefordert werden. Etablierung eines Prozesses zur telefonischen Rückbestätigung bei ungewöhnlichen Finanztransaktionsanfragen per E-Mail.
- **Tests:** Durchführung monatlicher simulierter Phishing-Angriffe, um die Wachsamkeit der Mitarbeiter zu testen und Bereiche mit Verbesserungsbedarf zu identifizieren.

Durch diese Maßnahmen reduziert das Unternehmen das Risiko, Opfer von Phishing-Angriffen zu werden und sensible Informationen zu verlieren, erheblich.

## Weiterführende Links & Quellen

  - [Wikipedia: Phishing](https://de.wikipedia.org/wiki/Phishing)
  - [Identitätsdiebstahl/Phishing](https://www.bka.de/DE/IhreSicherheit/RichtigesVerhalten/StraftatenImInternet/Identitaetsdiebstahl/identitaetsdiebstahl_node.html)
  - [So schützen Sie sich vor digitalem Identitätsdiebstahl und gehackten Accounts](https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Cyber-Sicherheitslage/Methoden-der-Cyber-Kriminalitaet/Identitaetsdiebstahl/Schutzmassnahmen/schutzmassnahmen_node.html)
  - [Anti-Phishing Working Group (APWG)](https://apwg.org/) (Englischsprachige Ressource mit aktuellen Informationen und Statistiken)

-----

> **Fehler gefunden?:** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
