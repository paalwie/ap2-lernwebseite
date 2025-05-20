# Sicherheit und Gesundheitsschutz bei der Arbeit: Grundlagen der IT-Sicherheit kennen und umsetzen - Die Verfügbarkeit, Integrität, Vertraulichkeit und Authentizität von Daten berücksichtigen

## Einführung

Im Zeitalter der Digitalisierung sind Daten ein zentrales Gut für Unternehmen. Der Schutz dieser Daten ist von entscheidender Bedeutung, um Geschäftsabläufe sicherzustellen, Wettbewerbsvorteile zu wahren und gesetzliche Anforderungen zu erfüllen. Die vier Kernziele der Informationssicherheit – Verfügbarkeit, Integrität, Vertraulichkeit und Authentizität – bilden das Fundament für den Schutz von Daten und Informationssystemen. Auch für Auszubildende ist es wichtig, diese Prinzipien zu verstehen und in ihrer täglichen Arbeit zu berücksichtigen.

## Die vier Kernziele der Informationssicherheit

**1. Verfügbarkeit (Availability)**

* **Ziel:** Sicherstellen, dass autorisierte Benutzer und Prozesse jederzeit auf die benötigten Daten und IT-Systeme zugreifen können.
* **Bedeutung:** Wenn Daten oder Systeme nicht verfügbar sind, können Geschäftsprozesse gestört oder sogar zum Erliegen gebracht werden.
* **Maßnahmen zur Gewährleistung der Verfügbarkeit:**
    * **Redundante Systeme:** Einsatz von Ausfallsystemen (Failover-Systemen), um bei einem Ausfall die Funktionalität aufrechtzuerhalten.
    * **Datensicherungen (Backups):** Regelmäßige Sicherung von Daten, um sie im Falle eines Datenverlusts wiederherstellen zu können.
    * **Notfallpläne und Wiederherstellungsverfahren:** Definierte Prozesse für den Umgang mit Störungen und den Wiederaufbau von Systemen.
    * **Schutz vor Denial-of-Service-Angriffen (DoS/DDoS):** Maßnahmen zur Abwehr von Angriffen, die darauf abzielen, die Verfügbarkeit von Diensten zu beeinträchtigen.
    * **Wartung und Überwachung:** Regelmäßige Wartung der Systeme und Überwachung der Systemleistung, um Ausfälle frühzeitig zu erkennen und zu verhindern.
    * **Stromausfallsicherungen (USV):** Unterbrechungsfreie Stromversorgungen, um bei Stromausfällen einen kurzzeitigen Weiterbetrieb zu ermöglichen und ein kontrolliertes Herunterfahren zu gewährleisten.

**2. Integrität (Integrity)**

* **Ziel:** Gewährleisten, dass Daten korrekt und vollständig sind und vor unbefugten oder unbeabsichtigten Veränderungen geschützt werden.
* **Bedeutung:** Wenn die Integrität von Daten beeinträchtigt ist, können falsche Entscheidungen getroffen werden, rechtliche Konsequenzen drohen oder die Qualität von Produkten und Dienstleistungen leiden.
* **Maßnahmen zur Gewährleistung der Integrität:**
    * **Zugriffskontrollen mit Schreibrechten:** Beschränkung der Berechtigung zum Ändern von Daten auf autorisierte Personen und Prozesse.
    * **Protokollierung von Änderungen (Audit Trails):** Aufzeichnung, wer wann welche Daten geändert hat.
    * **Prüfsummen und kryptografische Hashfunktionen:** Verfahren zur Erkennung von Datenmanipulationen.
    * **Versionskontrolle:** Verwaltung verschiedener Versionen von Dokumenten und Daten, um Änderungen nachvollziehen und gegebenenfalls rückgängig machen zu können.
    * **Eingabevalidierung:** Überprüfung von Eingabedaten auf Plausibilität und Korrektheit.
    * **Regelmäßige Datenintegritätsprüfungen:** Automatisierte oder manuelle Überprüfung der Daten auf Konsistenz und Fehler.

**3. Vertraulichkeit (Confidentiality)**

* **Ziel:** Sicherstellen, dass Informationen nur für autorisierte Personen, Prozesse oder Systeme zugänglich sind und vor unbefugter Offenlegung geschützt werden.
* **Bedeutung:** Der Verlust vertraulicher Daten kann zu Wettbewerbsnachteilen, Imageschäden, rechtlichen Konsequenzen oder sogar zu Gefahren für Personen führen (z.B. bei Offenlegung von Patientendaten).
* **Maßnahmen zur Gewährleistung der Vertraulichkeit:**
    * **Zugriffskontrollen (Authentifizierung und Autorisierung):** Identifizierung und Überprüfung der Identität von Benutzern und Beschränkung ihrer Zugriffsrechte auf die für ihre Aufgaben erforderlichen Daten und Funktionen.
    * **Verschlüsselung (Kryptographie):** Umwandlung von Daten in eine unlesbare Form (Chiffretext), um sie vor unbefugtem Zugriff während der Übertragung (z.B. im Netzwerk, Internet) oder der Speicherung zu schützen.
    * **Physische Sicherheit:** Schutz von Räumlichkeiten, Datenträgern und Geräten vor unbefugtem Zugriff (z.B. verschlossene Büros, Alarmanlagen, sichere Entsorgung von Datenträgern).
    * **Datenschutzrichtlinien und -schulungen:** Sensibilisierung der Mitarbeiter für den Schutz vertraulicher Informationen.
    * **Need-to-know-Prinzip:** Zugriff auf Informationen nur gewähren, wenn dieser für die Erfüllung der jeweiligen Aufgabe unbedingt erforderlich ist.

**4. Authentizität (Authenticity)**

* **Ziel:** Sicherstellen, dass die Identität von Benutzern, Prozessen, Systemen und Datenquellen eindeutig nachgewiesen werden kann und die Herkunft und Integrität der Daten gewährleistet ist.
* **Bedeutung:** Wenn die Authentizität nicht gewährleistet ist, können sich unbefugte Personen als andere ausgeben, manipulierte Daten in Umlauf bringen oder Handlungen fälschlicherweise anderen zuordnen.
* **Maßnahmen zur Gewährleistung der Authentizität:**
    * **Starke Authentifizierung (Mehrfaktorauthentifizierung):** Verwendung von mindestens zwei verschiedenen Faktoren zur Überprüfung der Identität (z.B. Passwort + Fingerabdruck, Smartcard + PIN).
    * **Digitale Signaturen:** Elektronische Unterschriften, die die Integrität und Authentizität von digitalen Dokumenten und Daten gewährleisten.
    * **Zertifikate:** Elektronische Ausweise zur Identifizierung von Benutzern, Servern oder Geräten.
    * **Protokollierung (Logging):** Aufzeichnung von Benutzeraktivitäten und Systemereignissen zur Nachverfolgung von Handlungen.
    * **Herkunftsüberprüfung von Daten:** Mechanismen zur Überprüfung der Quelle von Daten.

## Die Bedeutung der Prinzipien im Arbeitsalltag

Auszubildende sollten diese vier Prinzipien im täglichen Umgang mit IT-Systemen und Daten berücksichtigen:

* **Verfügbarkeit:** Daten und Systeme nur so nutzen, dass die Verfügbarkeit für andere nicht beeinträchtigt wird (z.B. keine unnötig großen Downloads während der Arbeitszeit).
* **Integrität:** Daten sorgfältig und korrekt bearbeiten und keine unbefugten Änderungen vornehmen. Auffälligkeiten oder Fehler melden.
* **Vertraulichkeit:** Passwörter geheim halten, Bildschirme sperren, vertrauliche Informationen nicht unachtsam herumliegen lassen oder per ungesicherter E-Mail versenden.
* **Authentizität:** Eigene Benutzerkonten und Zugangsdaten schützen und keine Zugangsdaten anderer verwenden.

## Bedeutung für die Ausbildung im Bereich Arbeits- und Tarifrecht

Für Auszubildende im Bereich Arbeits- und Tarifrecht ist das Verständnis dieser vier Kernziele der Informationssicherheit wichtig, da sie die Grundlage für viele rechtliche und betriebliche Regelungen im Umgang mit Daten und IT-Systemen bilden (z.B. Datenschutzrichtlinien, IT-Nutzungsordnungen, Beweismittel in Rechtsstreitigkeiten).

## Weiterführende Links & Quellen

* [Bundesamt für Sicherheit in der Informationstechnik (BSI): IT-Grundschutz](https://www.bsi.bund.de/DE/Themen/ITGrundschutz/itgrundschutz_node.html)
* [ISO/IEC 27001: Informationssicherheitsmanagementsysteme](Internationale Norm für Informationssicherheit)
* [Lehrbücher und Fachartikel zur IT-Sicherheit]

---

> **Fehler gefunden?** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
