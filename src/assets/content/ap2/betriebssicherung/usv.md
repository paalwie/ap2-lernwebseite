# Maßnahmen zur Sicherstellung des Betriebes beurteilen können: Elektrotechnisch (USV)

## Einführung

Eine Unterbrechungsfreie Stromversorgung (USV) ist ein entscheidendes elektrotechnisches System zur Sicherstellung des Betriebs kritischer IT-Infrastruktur und anderer sensibler Geräte bei Stromausfällen, Spannungsschwankungen oder anderen Netzstörungen. Sie überbrückt kurzzeitig den Ausfall der primären Stromversorgung und ermöglicht so ein kontrolliertes Herunterfahren der Systeme oder den Weiterbetrieb bis zur Aktivierung einer резервный Stromquelle (z.B. Notstromaggregat). Die Beurteilung der Eignung und Dimensionierung einer USV ist daher essenziell für die Betriebssicherheit.

## Charakterisierung von USV-Systemen

**1. Grundlegende Funktionsweise:**

Eine USV besteht typischerweise aus folgenden Hauptkomponenten:

-   **Gleichrichter:** Wandelt den eingehenden Wechselstrom in Gleichstrom um.
-   **Batterie:** Speichert elektrische Energie für den Notfallbetrieb.
-   **Wechselrichter:** Wandelt den Gleichstrom der Batterie wieder in Wechselstrom für die angeschlossenen Geräte um.
-   **Steuerungselektronik:** Überwacht die Eingangsspannung, den Ladezustand der Batterie und steuert den Betrieb der USV.
-   **Bypass-Schalter:** Ermöglicht die direkte Versorgung der Last mit Netzstrom, z.B. bei Wartungsarbeiten oder Überlastung der USV.

Im Normalbetrieb versorgt die USV die angeschlossenen Geräte entweder direkt mit Netzstrom (ggf. gefiltert und stabilisiert) oder über den Gleichrichter-Batterie-Wechselrichter-Pfad, wodurch die Batterie gleichzeitig geladen wird. Bei einem Stromausfall schaltet die USV automatisch auf Batteriebetrieb um und versorgt die Last weiterhin mit sauberem Wechselstrom.

**2. Typen von USV-Systemen:**

Es gibt hauptsächlich drei Arten von USV-Systemen, die sich in ihrer Funktionsweise und dem Grad des Schutzes unterscheiden:

-   **Offline/Standby-USV (VFD - Voltage Frequency Dependent):** Im Normalbetrieb werden die Geräte direkt über das Netz versorgt. Bei einem Stromausfall schaltet die USV auf Batteriebetrieb um. Es kann eine kurze Umschaltzeit geben. Geeignet für weniger kritische Anwendungen wie Heim-PCs.
-   **Line-Interactive-USV (VI - Voltage Independent):** Verfügt über eine automatische Spannungsregelung (AVR), die Spannungsschwankungen ausgleicht, ohne auf Batteriebetrieb umzuschalten. Der Wechselrichter ist immer in Bereitschaft, was eine schnellere Umschaltung im Fehlerfall ermöglicht. Geeignet für Server, Workstations und Netzwerkgeräte.
-   **Online/Dauerwandler-USV (VFI - Voltage and Frequency Independent):** Die angeschlossenen Geräte werden permanent über den Gleichrichter und den Wechselrichter versorgt. Die Batterie ist immer im Ladezustand und kann ohne Unterbrechung die Stromversorgung übernehmen. Bietet den höchsten Schutz vor allen Arten von Netzstörungen. Geeignet für kritische Infrastrukturen wie Rechenzentren, medizinische Geräte und industrielle Anlagen.

**3. Beurteilungskriterien für USV-Systeme:**

Bei der Auswahl und Beurteilung einer USV sind folgende Kriterien wichtig:

-   **Leistung (VA/Watt):** Die USV muss in der Lage sein, die Gesamtleistung aller angeschlossenen Geräte zu tragen. Es sollte eine ausreichende Reserve eingeplant werden (ca. 20-30%), um Lastspitzen und zukünftige Erweiterungen zu berücksichtigen.
-   **Überbrückungszeit:** Die Zeit, die die USV die angeschlossenen Geräte bei einem Stromausfall versorgen kann, hängt von der Batteriekapazität und der Last ab. Die benötigte Überbrückungszeit richtet sich nach der Zeit bis zur Aktivierung einer резервный Stromquelle oder der Zeit, die für ein sicheres Herunterfahren der Systeme benötigt wird (üblicherweise 5-15 Minuten für Rechenzentren).
-   **Ausgangsspannung und -form:** Die USV sollte eine stabile Ausgangsspannung mit der korrekten Frequenz liefern. Für sensible Geräte ist eine reine Sinuswelle als Ausgangsform erforderlich.
-   **Umschaltzeit (bei Offline/Line-Interactive):** Für kritische Geräte sollte die Umschaltzeit so kurz wie möglich sein, um einen unterbrechungsfreien Betrieb zu gewährleisten. Online-USVs haben keine Umschaltzeit.
-   **Wirkungsgrad:** Der Wirkungsgrad gibt an, wie effizient die USV die elektrische Energie nutzt. Ein hoher Wirkungsgrad reduziert den Energieverbrauch und die Wärmeentwicklung.
-   **Kommunikationsschnittstellen:** Viele USVs verfügen über Schnittstellen (z.B. USB, seriell, Netzwerk), die die Überwachung des USV-Status, die Benachrichtigung bei Ereignissen und das kontrollierte Herunterfahren von Servern ermöglichen.
-   **Management-Software:** Eine gute Management-Software ermöglicht die zentrale Überwachung und Verwaltung mehrerer USV-Systeme.
-   **Redundanz:** Für höchste Verfügbarkeit können redundante USV-Systeme (z.B. N+1 Konfiguration) eingesetzt werden, bei denen ein резервный USV im Fehlerfall einspringt.
-   **Wartung und Austauschbarkeit der Batterien:** Batterien haben eine begrenzte Lebensdauer und müssen regelmäßig gewartet und ausgetauscht werden können. Hot-Swap-fähige Batterien ermöglichen den Austausch ohne Betriebsunterbrechung.
-   **Umgebungsbedingungen:** Temperatur und Luftfeuchtigkeit können die Leistung und Lebensdauer der USV und ihrer Batterien beeinflussen.

## Maßnahmen zur Sicherstellung des Betriebs durch USV

Eine korrekt dimensionierte und gewartete USV trägt maßgeblich zur Sicherstellung des Betriebs kritischer IT-Systeme bei:

-   **Überbrückung von Stromausfällen:** Ermöglicht den Weiterbetrieb oder das kontrollierte Herunterfahren bei kurzzeitigen oder längeren Stromausfällen.
-   **Schutz vor Spannungsschwankungen:** Stabilisiert die Eingangsspannung und schützt die angeschlossenen Geräte vor Über- und Unterspannung.
-   **Filterung von Netzstörungen:** Reduziert oder eliminiert Störungen wie Rauschen, Transienten und Oberwellen, die die Funktion empfindlicher Elektronik beeinträchtigen können.
-   **Verhinderung von Datenverlust:** Durch die Aufrechterhaltung der Stromversorgung bei Ausfällen können Datenverluste vermieden werden.
-   **Erhöhung der Systemverfügbarkeit:** Eine zuverlässige Stromversorgung ist eine Grundvoraussetzung für die hohe Verfügbarkeit von IT-Diensten.

## Beurteilung der Eignung von USV-Maßnahmen

Bei der Beurteilung der Eignung von USV-Maßnahmen sind folgende Fragen relevant:

-   **Sind alle kritischen Geräte durch eine USV geschützt?**
-   **Ist die Leistung der USV ausreichend für die angeschlossene Last und zukünftige Erweiterungen?**
-   **Ist die Überbrückungszeit der USV angemessen für die Anforderungen des Betriebs (z.B. Zeit bis zum Start des Notstromaggregats oder für ein geordnetes Herunterfahren)?**
-   **Entspricht die Ausgangsspannung und -form der USV den Anforderungen der angeschlossenen Geräte?**
-   **Sind die Batterien der USV in gutem Zustand und werden sie regelmäßig gewartet und bei Bedarf ausgetauscht?**
-   **Gibt es eine Überwachung der USV und eine Benachrichtigung bei Störungen?**
-   **Sind redundante USV-Systeme für besonders kritische Anwendungen im Einsatz?**
-   **Ist der Bypass-Schalter funktionsfähig und bekannt?**
-   **Sind die Umgebungsbedingungen für die USV optimal?**

## Fazit

Die elektrotechnische Maßnahme der Unterbrechungsfreien Stromversorgung (USV) ist ein unverzichtbarer Bestandteil der Betriebssicherheit kritischer IT-Systeme. Eine sorgfältige Auswahl, korrekte Dimensionierung, regelmäßige Wartung und Überwachung der USV sind entscheidend, um die Verfügbarkeit von Anwendungsdiensten zu gewährleisten und die Risiken von Stromausfällen und Netzstörungen zu minimieren. Die Beurteilung der Eignung von USV-Maßnahmen erfordert eine detaillierte Analyse der Anforderungen der angeschlossenen Geräte und der spezifischen Betriebsbedingungen.

## Links und Quellen

-   **Wikipedia - Unterbrechungsfreie Stromversorgung:** [https://de.wikipedia.org/wiki/Unterbrechungsfreie_Stromversorgung](https://de.wikipedia.org/wiki/Unterbrechungsfreie_Stromversorgung)
-   **Schneider Electric - Wie funktioniert ein USV-System?:** [https://www.se.com/de/de/faqs/FAQ000254784/](https://www.se.com/de/de/faqs/FAQ000254784/)
-   **Vertiv - Welche verschiedenen Arten von USV-Systemen gibt es?:** [https://www.vertiv.com/de-emea/about/news-and-insights/articles/educational-articles/what-are-the-different-types-of-ups-systems/](https://www.vertiv.com/de-emea/about/news-and-insights/articles/educational-articles/what-are-the-different-types-of-ups-systems/)
-   **Thiele KG - USV Wartung & Reparatur:** [https://www.thiele-kg.de/service-support/wartung-reparatur.html](https://www.thiele-kg.de/service-support/wartung-reparatur.html)
-   **Delta Power Solutions - Wie lässt sich durch USV-Design oder -Konfiguration eine hohe Zuverlässigkeit und Verfügbarkeit in Rechenzentren erreichen?:** [https://www.deltapowersolutions.com/de-de/mcis/news-2013-ups-design-help-achieve-high-reliability-and-availability-in-datacenter.php](https://www.deltapowersolutions.com/de-de/mcis/news-2013-ups-design-help-achieve-high-reliability-and-availability-in-datacenter.php)
