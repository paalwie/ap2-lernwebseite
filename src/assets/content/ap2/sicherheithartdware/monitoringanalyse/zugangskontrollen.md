# Inbetriebnehmen von Speicherlösungen: Möglichkeiten der physischen/hardwaretechnischen Absicherung benennen - Zugangskontrollen (Gebäude, Serverraum, Schrank ...)

## Einführung

Die physische Sicherheit von Speicherlösungen ist ein fundamentaler Aspekt des Datenschutzes und der Systemverfügbarkeit. Unbefugter physischer Zugriff auf die Hardware kann zu Datenverlust, Manipulation, Diebstahl oder Beschädigung führen. Daher ist die Implementierung effektiver Zugangskontrollen auf verschiedenen Ebenen (Gebäude, Serverraum, Schrank) unerlässlich. Diese Kontrollen umfassen sowohl organisatorische Maßnahmen als auch spezifische Sicherheitstechnologien.

## Zugangskontrollen auf verschiedenen Ebenen

Die physische Sicherheit sollte in Schichten aufgebaut sein, wobei jede Schicht zusätzlichen Schutz bietet. Typische Ebenen sind:

**1. Gebäudeebene:**

Ziel ist es, unbefugten Zutritt zum gesamten Gebäude zu verhindern, in dem sich die Speicherlösung befindet.

-   **Organisatorische Maßnahmen:**
    -   **Perimeter Security:** Zäune, Mauern oder andere Barrieren, um das Gelände zu sichern.
    -   **Empfang und Besucherkontrolle:** Registrierungspflicht für Besucher, Ausweisprüfung, Begleitung durch autorisiertes Personal.
    -   **Sicherheitsrichtlinien:** Klare Regeln für Mitarbeiter und Besucher bezüglich des Zutritts und des Verhaltens im Gebäude.
    -   **Schulung der Mitarbeiter:** Sensibilisierung für Sicherheitsrisiken und Meldeverfahren bei verdächtigen Aktivitäten.
    -   **Regelmäßige Überprüfung der Sicherheitsmaßnahmen:** Anpassung der Maßnahmen an neue Bedrohungen.
-   **Technische Maßnahmen:**
    -   **Überwachungskameras (CCTV):** Aufzeichnung von Aktivitäten im Außen- und Innenbereich.
    -   **Einbruchmeldeanlagen:** Alarmierung bei unbefugtem Eindringen.
    -   **Zutrittskontrollsysteme:** Elektronische Schlösser, Chipkartenleser, biometrische Scanner an Haupteingängen.
    -   **Sicherheitspersonal:** Wachdienst zur Überwachung und Intervention.
    -   **Beleuchtung:** Ausreichende Beleuchtung des Außengeländes zur Abschreckung.

**2. Serverraumebene:**

Der Serverraum beherbergt die kritische IT-Infrastruktur, einschließlich der Speicherlösungen. Der Zugang muss streng kontrolliert werden.

-   **Organisatorische Maßnahmen:**
    -   **Zutrittsberechtigung:** Beschränkung des Zutritts auf autorisiertes IT-Personal.
    -   **Protokollierung des Zutritts:** Führen eines detaillierten Protokolls aller Zutritte (Wer, Wann, Warum).
    -   **Schleusen (Mantraps):** Zwei in Serie geschaltete Türen, bei denen immer nur eine geöffnet sein kann, um das Einschleusen Unbefugter zu verhindern.
    -   **Klare Richtlinien für den Aufenthalt im Serverraum:** Verbot von nicht-betriebsnotwendigen Gegenständen, Verhaltensregeln.
    -   **Regelmäßige Überprüfung der Zutrittsberechtigungen:** Anpassung bei Personaländerungen.
-   **Technische Maßnahmen:**
    -   **Starke Türen und Schlösser:** Einbruchsichere Türen mit Mehrfachverriegelung.
    -   **Elektronische Zutrittskontrollsysteme:** Chipkartenleser, PIN-Eingabe, biometrische Scanner mit detaillierter Zugriffsprotokollierung.
    -   **Überwachungskameras (CCTV) im Innen- und Außenbereich des Serverraums:** Aufzeichnung aller Aktivitäten.
    -   **Bewegungsmelder:** Alarmierung bei unbefugter Bewegung im Raum.
    -   **Alarmierung bei Türöffnung:** Benachrichtigung bei unbefugtem Öffnen der Tür.
    -   **Umweltüberwachungssysteme:** Temperatur-, Feuchtigkeits- und Rauchmelder zur frühzeitigen Erkennung von Gefahren.

**3. Schrankebene (Racks):**

Innerhalb des Serverraums können die Speicherlösungen zusätzlich in gesicherten Racks untergebracht werden.

-   **Organisatorische Maßnahmen:**
    -   **Zuweisung von Verantwortlichkeiten:** Klare Zuständigkeiten für die Wartung und den Zugriff auf die in den jeweiligen Schränken befindlichen Geräte.
    -   **Kennzeichnung der Schränke:** Eindeutige Beschriftung der Schränke und deren Inhalt.
    -   **Richtlinien für das Öffnen und Schließen von Schränken:** Anweisung, Schränke immer verschlossen zu halten.
-   **Technische Maßnahmen:**
    -   **Abschließbare Schränke:** Robuste Racks mit sicheren Schlössern (z.B. mit Zahlencode oder Schlüssel).
    -   **Manipulationssichere Schlösser:** Schlösser, die ein unbefugtes Öffnen erschweren und Spuren hinterlassen.
    -   **Protokollierung von Schranköffnungen (optional):** Elektronische Schlösser, die Öffnungszeiten protokollieren können.
    -   **Einbruchskontakte (optional):** Sensoren, die Alarm auslösen, wenn ein Schrank unbefugt geöffnet wird.
    -   **Sichtschutz (optional):** Blenden an den Schranktüren, um die Sicht auf die Geräte zu erschweren.

## Zusätzliche physische Sicherheitsmaßnahmen für Speicherlösungen

Über die genannten Zugangskontrollen hinaus gibt es weitere wichtige Aspekte der physischen Sicherheit für Speicherlösungen:

-   **Redundante Stromversorgung (USV):** Schutz vor Stromausfällen, um die Verfügbarkeit der Speicherlösung zu gewährleisten und Datenverlust zu verhindern.
-   **Klimatisierung:** Aufrechterhaltung einer optimalen Betriebstemperatur und Luftfeuchtigkeit im Serverraum, um Hardwareausfälle zu vermeiden.
-   **Brandschutz:** Installation von Brandmelde- und Löschanlagen (z.B. Gaslöschanlagen, die keine elektronischen Geräte beschädigen).
-   **Schutz vor Umwelteinflüssen:** Schutz vor Staub, Wasser und anderen schädlichen Umwelteinflüssen.
-   **Sichere Verkabelung:** Ordnungsgemäße und sichere Verlegung von Kabeln, um Stolperfallen und Beschädigungen zu vermeiden.
-   **Verankerung der Geräte:** Befestigung von Servern und Storage-Einheiten in den Racks, um Diebstahl zu erschweren und Stabilität zu gewährleisten.

## Organisatorische Aspekte der physischen Sicherheit

Die technischen Maßnahmen müssen durch entsprechende organisatorische Richtlinien und Prozesse ergänzt werden:

-   **Klare Verantwortlichkeiten:** Zuweisung der Verantwortung für die physische Sicherheit an bestimmte Personen oder Teams.
-   **Regelmäßige Schulungen:** Sensibilisierung der Mitarbeiter für die Bedeutung der physischen Sicherheit und die korrekte Anwendung der Kontrollen.
-   **Notfallpläne:** Verfahren für den Umgang mit Sicherheitsvorfällen, Stromausfällen, Bränden usw.
-   **Überprüfung und Auditierung:** Regelmäßige Überprüfung der Wirksamkeit der physischen Sicherheitsmaßnahmen und Anpassung bei Bedarf.

## Fazit

Effektive Zugangskontrollen auf Gebäude-, Serverraum- und Schrankebene sind unerlässlich für die physische Sicherheit von Speicherlösungen. Eine Kombination aus organisatorischen Richtlinien und robusten technischen Maßnahmen bildet die Grundlage für den Schutz vor unbefugtem physischen Zugriff. Darüber hinaus müssen weitere Aspekte wie Stromversorgung, Klimatisierung und Brandschutz berücksichtigt werden, um die Verfügbarkeit und Integrität der Speicherlösung umfassend zu gewährleisten. Regelmäßige Überprüfungen und Anpassungen sind notwendig, um die Sicherheit langfristig aufrechtzuerhalten.

## Links und Quellen

-   **Wikipedia - Physische Sicherheit:** [https://de.wikipedia.org/wiki/Physische_Sicherheit](https://de.wikipedia.org/wiki/Physische_Sicherheit)
-   **BSI - Physische Sicherheit und Umweltsicherheit:** [https://www.bsi.bund.de/DE/Themen/ITGrundschutz/Bausteine/B/B0.html](https://www.bsi.bund.de/DE/Themen/ITGrundschutz/Bausteine/B/B0.html) (IT-Grundschutz-Bausteine)
-   **ISO/IEC 27001 - Informationssicherheitsmanagement:** (Norm, die auch Aspekte der physischen Sicherheit behandelt)
-   **TechTarget - Physical security:** [https://www.techtarget.com/searchsecurity/definition/physical-security](https://www.techtarget.com/searchsecurity/definition/physical-security) (Englischsprachig)
-   **ASIS International:** [https://www.asisonline.org/](https://www.asisonline.org/) (Englischsprachige Organisation für Sicherheitsexperten)
