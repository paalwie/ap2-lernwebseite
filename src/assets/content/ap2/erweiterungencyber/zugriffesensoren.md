# Programmieren von Softwarelösungen: Cyber-physische Systeme beschreiben und erweitern können - Kenntnis des Zugriffs auf Sensoren und Aktoren

## Einführung

Ein grundlegendes Verständnis dafür, wie Software auf die in Cyber-physischen Systemen (CPS) eingesetzten Sensoren und Aktoren zugreift und mit ihnen interagiert, ist unerlässlich für die Entwicklung, Fehlerbehebung und Erweiterung dieser Systeme. Die Art und Weise des Zugriffs kann stark variieren, abhängig von der Hardware, den verwendeten Schnittstellen und den Softwarearchitekturen.

## Zugriff auf Sensoren

Der Zugriff auf Sensoren umfasst das Lesen von Daten, die von den Sensoren erfasst und in elektrische Signale umgewandelt wurden. Dies kann auf verschiedenen Ebenen und über unterschiedliche Schnittstellen erfolgen:

-   **Direkte Hardware-Schnittstellen:**
    -   **Analoge Schnittstellen (z.B. Spannung, Strom):** Mikrocontroller oder andere Verarbeitungseinheiten verfügen über analog-digitale Wandler (ADCs), um analoge Signale von Sensoren zu lesen. Die Software muss die entsprechenden ADC-Kanäle konfigurieren, die Werte lesen und in physikalische Einheiten umrechnen (Kalibrierung).
    -   **Digitale Schnittstellen (z.B. GPIO, I2C, SPI, UART):** Viele moderne Sensoren kommunizieren digital.
        -   **GPIO (General Purpose Input/Output):** Einfache digitale Signale (High/Low) können über GPIO-Pins gelesen werden.
        -   **I2C (Inter-Integrated Circuit):** Ein serielles Kommunikationsprotokoll, das den bidirektionalen Datenaustausch zwischen mehreren Geräten über zwei Leitungen ermöglicht. Die Software muss das I2C-Protokoll implementieren oder eine entsprechende Bibliothek nutzen, um Daten von I2C-Sensoren zu lesen.
        -   **SPI (Serial Peripheral Interface):** Ein weiteres serielles Kommunikationsprotokoll, das höhere Datenraten als I2C ermöglicht. Die Software muss das SPI-Protokoll implementieren oder eine Bibliothek verwenden.
        -   **UART (Universal Asynchronous Receiver/Transmitter):** Eine serielle Schnittstelle für die asynchrone Datenübertragung. Die Software muss die UART-Kommunikation konfigurieren und die empfangenen Daten verarbeiten.

-   **Über Bus-Systeme und Netzwerke:**
    -   **Feldbusse (z.B. CAN, Modbus):** In industriellen CPS werden oft Feldbusse zur Vernetzung von Sensoren und Aktoren eingesetzt. Die Software muss die entsprechenden Busprotokolle implementieren oder Bibliotheken nutzen, um Daten von den Sensoren im Netzwerk abzufragen.
    -   **Ethernet und IP-basierte Protokolle (z.B. HTTP, MQTT, CoAP):** Moderne CPS können Sensoren über IP-Netzwerke anbinden. Die Software verwendet dann Protokolle wie HTTP (für RESTful APIs von Sensoren), MQTT oder CoAP (für IoT-Geräte) um Daten abzurufen.

-   **Indirekter Zugriff über Middleware und Betriebssysteme:**
    -   **Treiber:** Betriebssysteme oder spezielle Treiber abstrahieren oft die direkte Hardware-Interaktion. Die Anwendungssoftware greift dann über standardisierte APIs auf die Sensordaten zu.
    -   **Middleware (z.B. Sensorfusions-Frameworks):** Middleware kann Rohdaten von mehreren Sensoren verarbeiten und aggregierte oder gefilterte Daten bereitstellen, auf die die Anwendungssoftware zugreift.

## Zugriff auf Aktoren

Der Zugriff auf Aktoren umfasst das Senden von Steuerungssignalen, um physikalische Aktionen auszulösen. Ähnlich wie bei Sensoren gibt es verschiedene Wege, dies zu tun:

-   **Direkte Hardware-Schnittstellen:**
    -   **Analoge Schnittstellen (z.B. PWM, Spannung, Strom):** Mikrocontroller können analoge Steuersignale über Digital-Analog-Wandler (DACs) oder Pulsweitenmodulation (PWM) erzeugen, um Aktoren wie Motoren (Geschwindigkeit), Ventile (Öffnungsgrad) oder Heizelemente (Leistung) zu steuern. Die Software muss die DACs oder PWM-Module konfigurieren und die entsprechenden Steuerungswerte ausgeben.
    -   **Digitale Schnittstellen (z.B. GPIO, I2C, SPI, UART):** Digitale Signale über GPIO-Pins können einfache Aktoren (z.B. Relais, LEDs) steuern. Komplexere Aktoren können über serielle Protokolle wie I2C, SPI oder UART gesteuert werden. Die Software muss die entsprechenden Protokolle implementieren oder Bibliotheken verwenden, um Steuerungskommandos zu senden.

-   **Über Bus-Systeme und Netzwerke:**
    -   **Feldbusse (z.B. CAN, Modbus):** Ähnlich wie bei Sensoren können Aktoren über Feldbusse gesteuert werden. Die Software muss die Busprotokolle beherrschen, um Steuerungskommandos an die Aktoren im Netzwerk zu senden.
    -   **Ethernet und IP-basierte Protokolle (z.B. HTTP, MQTT, CoAP):** Aktoren können auch über IP-Netzwerke gesteuert werden, indem Steuerungskommandos über Protokolle wie HTTP (RESTful APIs von Aktoren) oder MQTT/CoAP gesendet werden.

-   **Indirekter Zugriff über Middleware und Betriebssysteme:**
    -   **Treiber:** Betriebssysteme oder Treiber können eine Abstraktionsschicht für Aktoren bereitstellen, sodass die Anwendungssoftware über standardisierte APIs Steuerungssignale senden kann.
    -   **Middleware (z.B. Robotik-Frameworks):** Middleware kann komplexe Bewegungsplanung und Steuerung übernehmen und der Anwendungssoftware eineHigh-Level-Schnittstelle zur Verfügung stellen, um Aktoren zu beeinflussen.

## Kenntnisse für den Zugriff auf Sensoren und Aktoren

Um effektiv auf Sensoren und Aktoren in CPS zuzugreifen, sind folgende Kenntnisse wichtig:

-   **Grundlagen der Elektrotechnik und Elektronik:** Verständnis von Spannung, Strom, digitalen und analogen Signalen.

-   **Kenntnisse der Hardware-Schnittstellen:** Detailliertes Wissen über die Funktionsweise und Programmierung von Schnittstellen wie GPIO, ADC, DAC, PWM, I2C, SPI und UART.

-   **Kenntnisse der Kommunikationsprotokolle:** Verständnis der Protokolle, die für die Datenübertragung über Bus-Systeme und Netzwerke verwendet werden (z.B. CAN, Modbus, Ethernet, TCP/IP, HTTP, MQTT, CoAP).

-   **Programmierung von eingebetteten Systemen:** Erfahrung in der Programmierung von Mikrocontrollern und der Interaktion mit Hardware über Register und Treiber.

-   **Verständnis von Betriebssystemen und Treibermodellen:** Wissen darüber, wie Betriebssysteme Hardware abstrahieren und wie Treiber entwickelt und genutzt werden.

-   **Nutzung von Bibliotheken und Frameworks:** Fähigkeit, vorhandene Bibliotheken und Frameworks zu nutzen, um die Interaktion mit Sensoren und Aktoren zu vereinfachen.

-   **Datenformate und -protokolle:** Kenntnisse über die Formate, in denen Sensordaten übertragen werden (z.B. Rohwerte, kalibrierte Werte, strukturierte Daten wie JSON oder XML) und die Protokolle, die für den Datenaustausch verwendet werden.

-   **Sicherheitsaspekte:** Bewusstsein für Sicherheitsrisiken beim Zugriff auf Sensoren und Aktoren, insbesondere in vernetzten CPS, und Kenntnisse über Maßnahmen zur Absicherung der Kommunikation und Steuerung.

## Erweiterung von CPS und der Zugriff auf neue Komponenten

Bei der Erweiterung eines CPS um neue Sensoren und Aktoren müssen Entwickler in der Lage sein, auf diese Komponenten zuzugreifen:

-   **Identifizierung der Hardware-Schnittstelle:** Welche Schnittstelle verwenden die neuen Sensoren und Aktoren?

-   **Auswahl geeigneter Software-Tools und Bibliotheken:** Gibt es vorhandene Bibliotheken oder Treiber für die neuen Komponenten oder müssen diese neu entwickelt werden?

-   **Implementierung der Zugriffslogik:** Entwicklung des Codes, der die Daten von den neuen Sensoren liest und Steuerungssignale an die neuen Aktoren sendet.

-   **Integration in die bestehende Softwarearchitektur:** Wie fügt sich der Zugriff auf die neuen Komponenten in die Gesamtstruktur der CPS-Software ein?

-   **Test und Kalibrierung:** Überprüfung der korrekten Datenübertragung und Ansteuerung sowie Kalibrierung der neuen Sensoren und Aktoren, falls erforderlich.

## Fazit

Die Kenntnis des Zugriffs auf Sensoren und Aktoren ist eine Kernkompetenz für die Entwicklung und Erweiterung von Cyber-physischen Systemen. Dies umfasst ein breites Spektrum an Wissen über Hardware-Schnittstellen, Kommunikationsprotokolle, eingebettete Programmierung und die Nutzung von Software-Tools und Bibliotheken. Ein fundiertes Verständnis dieser Aspekte ermöglicht es Entwicklern, effektiv mit der physischen Welt zu interagieren, die Fähigkeiten von CPS zu erweitern und robuste und zuverlässige Lösungen zu schaffen.

## Links und Quellen

-   **Embedded system - Wikipedia:** [https://de.wikipedia.org/wiki/Eingebettetes\_System](https://de.wikipedia.org/wiki/Eingebettetes_System)
-   **Mikrocontroller - Wikipedia:** [https://de.wikipedia.org/wiki/Mikrocontroller](https://de.wikipedia.org/wiki/Mikrocontroller)
-   **Übersichten über Hardware-Schnittstellen:**
    -   **Serial communication - Wikipedia:** [https://de.wikipedia.org/wiki/Serielle\_Schnittstelle](https://de.wikipedia.org/wiki/Serielle_Schnittstelle)
    -   **I²C - Wikipedia:** [https://de.wikipedia.org/wiki/I%C2%B2C](https://de.wikipedia.org/wiki/I%C2%B2C)
    -   **SPI - Wikipedia:** [https://de.wikipedia.org/wiki/Serial\_Peripheral\_Interface](https://de.wikipedia.org/wiki/Serial_Peripheral_Interface)
    -   **GPIO - Wikipedia:** [https://de.wikipedia.org/wiki/General\_Purpose\_Input/Output](https://de.wikipedia.org/wiki/General_Purpose_Input/Output)
-   **Dokumentationen und Tutorials zu den verwendeten Mikrocontrollern und deren Peripherie (z.B. Datenblätter, Application Notes von Herstellern wie STMicroelectronics, NXP, Raspberry Pi Foundation).**
-   **Beispiele für Codebibliotheken für den Zugriff auf Sensoren und Aktoren in verschiedenen Programmiersprachen (z.B. WiringPi für Raspberry Pi, Arduino Libraries).**
