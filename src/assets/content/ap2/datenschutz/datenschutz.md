# Sicherstellen der Qualität von Softwareanwendungen: Anwendungen unter Berücksichtigung von Datenschutz und Datensicherheit erstellen können - Datenschutz (Integrität und Authentizität von Daten, Digitale Signatur, Verschlüsselungsverfahren, Archivierung (Systeme, Fristen, Pflichten))

## Einführung

Der Schutz personenbezogener Daten und die Sicherheit von Daten insgesamt sind zentrale Anforderungen bei der Entwicklung moderner Softwareanwendungen. Dies umfasst nicht nur die Einhaltung gesetzlicher Vorgaben wie der Datenschutz-Grundverordnung (DSGVO), sondern auch die Implementierung technischer Maßnahmen, um die Integrität, Authentizität und Vertraulichkeit von Daten zu gewährleisten. Ein wichtiger Aspekt ist auch die korrekte Archivierung von Daten unter Berücksichtigung von Fristen und Pflichten.

## 1. Integrität und Authentizität von Daten

**Integrität** bedeutet, dass Daten vollständig und unverändert bleiben und vor unbefugter oder unbeabsichtigter Manipulation geschützt sind. **Authentizität** stellt sicher, dass die Herkunft der Daten und die Identität der Kommunikationspartner überprüft und nachgewiesen werden können.

### Maßnahmen zur Sicherstellung von Integrität und Authentizität

-   **Hashing-Verfahren:** Kryptografische Hashfunktionen erzeugen einen eindeutigen "Fingerabdruck" (Hashwert) einer Datenmenge. Jede Änderung an den Daten führt zu einem anderen Hashwert. Durch den Vergleich des ursprünglichen Hashwerts mit dem neu berechneten Wert kann die Integrität der Daten überprüft werden. Beispiele sind SHA-256 und SHA-3.
-   **Digitale Signaturen:** Kombinieren Hashing mit asymmetrischen Verschlüsselungsverfahren. Der Absender signiert die Daten mit seinem privaten Schlüssel, wodurch ein digitaler Fingerabdruck erzeugt wird. Jeder mit dem öffentlichen Schlüssel des Absenders kann die Signatur überprüfen und so die Authentizität und Integrität der Daten sicherstellen.
-   **Zugriffskontrollen:** Strikte Zugriffsberechtigungen (Wer darf welche Daten lesen, schreiben, ändern?) sind essenziell, um unbefugte Manipulationen zu verhindern.
-   **Transaktionsprotokollierung:** Das detaillierte Aufzeichnen aller Änderungen an Daten in Transaktionsprotokollen ermöglicht die Nachverfolgung von Modifikationen und die Wiederherstellung im Fehlerfall.
-   **Versionskontrollsysteme:** Bei der Entwicklung und Verwaltung von Dateien (z.B. Code, Dokumente) helfen Versionskontrollsysteme (wie Git), Änderungen nachzuverfolgen und bei Bedarf frühere Zustände wiederherzustellen.

## 2. Digitale Signatur

Eine **digitale Signatur** ist ein kryptografisches Verfahren, das verwendet wird, um die Authentizität und Integrität einer digitalen Nachricht oder eines Dokuments zu gewährleisten. Sie funktioniert ähnlich einer handschriftlichen Unterschrift auf einem Papierdokument, ist aber wesentlich sicherer.

### Funktionsweise

1.  Der Absender erzeugt mit einer Hashfunktion einen eindeutigen Hashwert (digitalen Fingerabdruck) der zu signierenden Daten.
2.  Der Absender verschlüsselt diesen Hashwert mit seinem privaten Schlüssel eines asymmetrischen Schlüsselpaares. Die verschlüsselte Hashwert ist die digitale Signatur.
3.  Die signierten Daten (ursprüngliche Daten plus digitale Signatur) werden an den Empfänger gesendet.
4.  Der Empfänger verwendet den öffentlichen Schlüssel des Absenders, um die digitale Signatur zu entschlüsseln und erhält so den ursprünglichen Hashwert.
5.  Der Empfänger berechnet unabhängig den Hashwert der empfangenen Daten mit derselben Hashfunktion.
6.  Der Empfänger vergleicht die beiden Hashwerte. Sind sie identisch, ist die Integrität der Daten gewährleistet (sie wurden seit der Signierung nicht verändert) und die Authentizität des Absenders ist bestätigt (da nur der Inhaber des privaten Schlüssels die korrekte Signatur erzeugen konnte).

### Anwendungsbereiche

-   Sichere E-Mail-Kommunikation
-   Elektronische Verträge und Dokumente
-   Software-Updates (um sicherzustellen, dass sie nicht manipuliert wurden)
-   Elektronische Signaturen im E-Commerce und in der Verwaltung

## 3. Verschlüsselungsverfahren

**Verschlüsselung** ist der Prozess, bei dem Daten in eine unleserliche Form (Chiffretext) umgewandelt werden, um sie vor unbefugtem Zugriff zu schützen. Nur mit dem entsprechenden Schlüssel kann der Chiffretext wieder in die ursprüngliche Form (Klartext) entschlüsselt werden.

### Arten von Verschlüsselungsverfahren

-   **Symmetrische Verschlüsselung:** Verwendet denselben Schlüssel sowohl für die Ver- als auch für die Entschlüsselung. Beispiele sind AES (Advanced Encryption Standard) und DES (Data Encryption Standard). Sie ist in der Regel schneller als asymmetrische Verschlüsselung, erfordert aber einen sicheren Schlüsselaustausch.
-   **Asymmetrische Verschlüsselung:** Verwendet ein Paar aus einem öffentlichen und einem privaten Schlüssel. Daten, die mit dem öffentlichen Schlüssel verschlüsselt wurden, können nur mit dem zugehörigen privaten Schlüssel entschlüsselt werden und umgekehrt. Beispiele sind RSA und ECC (Elliptic Curve Cryptography). Sie ermöglicht einen sicheren Schlüsselaustausch, ist aber rechenintensiver.
-   **Hybride Verschlüsselung:** Kombiniert die Vorteile der symmetrischen und asymmetrischen Verschlüsselung. Typischerweise wird ein Sitzungsschlüssel symmetrisch erzeugt, dieser Schlüssel wird dann asymmetrisch verschlüsselt und zusammen mit den symmetrisch verschlüsselten Daten übertragen.

### Anwendungsbereiche

-   **Datenbankverschlüsselung:** Schutz sensibler Daten in Datenbanken (sowohl bei der Übertragung als auch im Ruhezustand).
-   **Festplattenverschlüsselung:** Schutz aller Daten auf einer Festplatte.
-   **Datei- und Ordnerverschlüsselung:** Schutz einzelner Dateien oder Ordner.
-   **SSL/TLS-Verschlüsselung:** Sichere Übertragung von Daten im Internet (z.B. bei HTTPS).
-   **E-Mail-Verschlüsselung:** Schutz des Inhalts von E-Mails.

## 4. Archivierung (Systeme, Fristen, Pflichten)

**Archivierung** bezeichnet die langfristige Aufbewahrung von Daten und Dokumenten, um gesetzliche Anforderungen zu erfüllen, Beweismittel zu sichern oder historische Informationen zu erhalten.

### Archivierungssysteme

-   **Digitale Archivierungssysteme:** Software und Hardware zur langfristigen Speicherung und Verwaltung elektronischer Dokumente und Daten. Diese Systeme müssen die Integrität, Authentizität, Lesbarkeit und Nachvollziehbarkeit der archivierten Daten gewährleisten.
-   **Physische Archive:** Für Papierdokumente und andere nicht-digitale Medien.

### Fristen

Gesetzliche und unternehmensinterne Aufbewahrungsfristen legen fest, wie lange bestimmte Arten von Daten und Dokumenten aufbewahrt werden müssen. Beispiele für gesetzliche Fristen in Deutschland sind:

-   **Handels- und steuerrechtliche Aufbewahrungsfristen:** In der Regel 6 oder 10 Jahre für bestimmte Geschäftsdokumente (§§ 147 AO, 257 HGB).
-   **Spezifische Fristen in anderen Gesetzen:** Z.B. im Sozialgesetzbuch oder in branchenspezifischen Regelungen.
-   **Datenschutzrechtliche Pflichten:** Daten dürfen nicht länger als für den Zweck ihrer Verarbeitung erforderlich gespeichert werden (Art. 5 Abs. 1 lit. e DSGVO).

### Pflichten

-   **Identifizierung archivierungspflichtiger Daten:** Festlegung, welche Daten und Dokumente archiviert werden müssen.
-   **Auswahl eines geeigneten Archivierungssystems:** Sicherstellung, dass das System die Anforderungen an Integrität, Authentizität, Lesbarkeit und langfristige Verfügbarkeit erfüllt.
-   **Festlegung von Aufbewahrungsfristen:** Berücksichtigung gesetzlicher und interner Vorgaben.
-   **Implementierung von Prozessen für die Archivierung und das Auffinden von Daten:** Sicherstellung, dass Daten ordnungsgemäß archiviert und bei Bedarf wiedergefunden werden können.
-   **Regelmäßige Überprüfung und Wartung des Archivierungssystems:** Sicherstellung der Funktionsfähigkeit und Datenintegrität über die lange Aufbewahrungsdauer.
-   **Vernichtung von Daten nach Ablauf der Aufbewahrungsfristen:** Sichere Löschung von Daten, die nicht mehr benötigt werden oder deren Aufbewahrungsfrist abgelaufen ist.

## Datenschutzrechtliche Aspekte

Die Archivierung personenbezogener Daten muss stets im Einklang mit den Datenschutzgesetzen erfolgen. Dies bedeutet insbesondere:

-   **Rechtmäßige Grundlage für die Archivierung:** Die Archivierung muss auf einer Rechtsgrundlage gemäß Art. 6 DSGVO beruhen (z.B. zur Erfüllung einer rechtlichen Verpflichtung oder aufgrund eines berechtigten Interesses).
-   **Zweckbindung:** Personenbezogene Daten dürfen nur für den ursprünglichen Zweck der Erhebung oder für damit kompatible Archivierungszwecke verarbeitet werden.
-   **Datenminimierung:** Es dürfen nur die Daten archiviert werden, die für den jeweiligen Zweck erforderlich sind.
-   **Speicherbegrenzung:** Personenbezogene Daten dürfen nicht länger als notwendig aufbewahrt werden. Nach Ablauf der Aufbewahrungsfrist müssen sie gelöscht oder anonymisiert werden.
-   **Sicherheit der Verarbeitung:** Geeignete technische und organisatorische Maßnahmen müssen getroffen werden, um die Sicherheit der archivierten Daten zu gewährleisten (Art. 32 DSGVO).

## Fazit

Der Schutz von Daten durch Integritätssicherungsmaßnahmen, Authentifizierung, Verschlüsselung und eine datenschutzkonforme Archivierung ist ein integraler Bestandteil der Entwicklung sicherer und gesetzeskonformer Softwareanwendungen. Entwickler müssen die verschiedenen Verfahren und gesetzlichen Anforderungen verstehen und in ihre Anwendungen implementieren, um die Vertraulichkeit, Integrität und Verfügbarkeit von Daten über ihren gesamten Lebenszyklus zu gewährleisten.

## Links und Quellen

-   **Datenschutz-Grundverordnung (DSGVO):** [https://dsgvo-gesetz.de/](https://dsgvo-gesetz.de/)
-   **Bundesdatenschutzgesetz (BDSG):** [https://www.gesetze-im-internet.de/bdsg_2018/index.html](https://www.gesetze-im-internet.de/bdsg_2018/index.html)
-   **Kryptografische Hashfunktion - Wikipedia:** [https://de.wikipedia.org/wiki/Kryptografische_Hashfunktion](https://de.wikipedia.org/wiki/Kryptografische_Hashfunktion)
-   **Digitale Signatur - Wikipedia:** [https://de.wikipedia.org/wiki/Digitale_Signatur](https://de.wikipedia.org/wiki/Digitale_Signatur)
-   **Verschlüsselung - Wikipedia:** [https://de.wikipedia.org/wiki/Verschl%C3%BCsselung](https://de.wikipedia.org/wiki/Verschl%C3%BCsselung)
-   **Advanced Encryption Standard (AES) - Wikipedia:** [https://de.wikipedia.org/wiki/Advanced_Encryption_Standard](https://de.wikipedia.org/wiki/Advanced_Encryption_Standard)
-   **RSA-Kryptosystem - Wikipedia:** [https://de.wikipedia.org/wiki/RSA-Kryptosystem](https://de.wikipedia.org/wiki/RSA-Kryptosystem)
-   **Archivierung - Wikipedia:** [https://de.wikipedia.org/wiki/Archivierung](https://de.wikipedia.org/wiki/Archivierung)
-   **GoBD - Grundsätze zur ordnungsmäßigen Führung und Aufbewahrung von Büchern, Aufzeichnungen und Unterlagen in elektronischer Form sowie zum Datenzugriff:** Suche nach "GoBD BMF"
-   **Technische Richtlinien des BSI (Bundesamt für Sicherheit in der Informationstechnik) zum Thema Kryptographie und sichere Archivierung:** [https://www.bsi.bund.de/DE/Themen/Kryptographie/kryptographie_node.html](https://www.bsi.bund.de/DE/Themen/Kryptographie/kryptographie_node.html) und [https://www.bsi.bund.de/DE/Themen/Digitale_Verwaltung/E-Akte/Langzeitarchivierung/langzeitarchivierung_node.html](https://www.bsi.bund.de/DE/Themen/Digitale_Verwaltung/E-Akte/Langzeitarchivierung/langzeitarchivierung_node.html)
-   **Artikel und Leitfäden zum Thema Datenschutz und Datensicherheit in der Softwareentwicklung.**

-----

> **Fehler gefunden?** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
