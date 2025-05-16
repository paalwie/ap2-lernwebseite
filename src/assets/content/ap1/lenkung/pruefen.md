# Verschiedene Prüfverfahren: Parität, Redundanz

## Einführung

Im Rahmen der Qualitätslenkung sind verschiedene Prüfverfahren unerlässlich, um die Korrektheit und Zuverlässigkeit von Daten und Systemen sicherzustellen. Diese Verfahren helfen, Fehler während der Übertragung, Speicherung oder Verarbeitung zu erkennen. Zwei grundlegende und häufig eingesetzte Prüfverfahren sind die Paritätsprüfung und der Einsatz von Redundanz.

## Grundlagen

**Qualitätslenkung:**

Qualitätslenkung umfasst die operativen Techniken und Aktivitäten, die eingesetzt werden, um die Anforderungen an die Qualität zu erfüllen. Prüfverfahren sind ein wichtiger Bestandteil davon, da sie dazu dienen, Abweichungen von den erwarteten Ergebnissen frühzeitig zu erkennen und Korrekturmaßnahmen einzuleiten.

**Fehlererkennung und Fehlerkorrektur:**

Prüfverfahren zielen primär auf die Fehlererkennung ab. Einige fortgeschrittenere Methoden können jedoch auch die Fehlerkorrektur ermöglichen. Die Wahl des geeigneten Prüfverfahrens hängt von verschiedenen Faktoren ab, wie der Art der Daten, der Wahrscheinlichkeit von Fehlern und den Anforderungen an die Zuverlässigkeit.

## Verschiedene Prüfverfahren

**1. Paritätsprüfung (Parity Check):**

- **Beschreibung:** Ein einfaches Verfahren zur Fehlererkennung bei der Datenübertragung. Ein zusätzliches Bit (das Paritätsbit) wird zu einer Dateneinheit (z.B. einem Byte) hinzugefügt, um sicherzustellen, dass die Anzahl der Einsen (oder Nullen) in der Dateneinheit und dem Paritätsbit entweder gerade (gerade Parität) oder ungerade (ungerade Parität) ist.
- **Funktionsweise:**
    - **Gerade Parität:** Das Paritätsbit wird so gesetzt (0 oder 1), dass die Gesamtzahl der Einsen in der Dateneinheit inklusive des Paritätsbits gerade ist.
    - **Ungerade Parität:** Das Paritätsbit wird so gesetzt, dass die Gesamtzahl der Einsen ungerade ist.
- **Fehlererkennung:** Beim Empfang der Daten wird die Parität erneut überprüft. Wenn die Parität nicht mit der erwarteten Parität übereinstimmt, wurde ein Fehler während der Übertragung erkannt (eine ungerade Anzahl von Bitfehlern).
- **Einschränkungen:** Die Paritätsprüfung kann nur eine ungerade Anzahl von Bitfehlern pro Dateneinheit erkennen. Eine gerade Anzahl von Bitfehlern führt zu einer korrekten Parität und bleibt unentdeckt. Sie kann Fehler nicht korrigieren.
- **Anwendungsbeispiele:** Serielle Datenübertragung (z.B. RS-232), Speicherchips (in einfacher Form).

**2. Redundanz (Redundancy):**

- **Beschreibung:** Ein allgemeines Prinzip zur Verbesserung der Zuverlässigkeit und Fehlerresistenz von Systemen durch das Hinzufügen von zusätzlichen Informationen oder Komponenten, die nicht unbedingt für die normale Funktion erforderlich sind, aber im Fehlerfall zur Erkennung oder Korrektur von Problemen dienen können.
- **Formen der Redundanz:**
    - **Datenredundanz:** Zusätzliche Daten werden gespeichert oder übertragen, um Fehler zu erkennen oder zu korrigieren. Beispiele hierfür sind Prüfsummen, zyklische Redundanzprüfung (CRC) und Fehlerkorrekturcodes (ECC).
    - **Hardware-Redundanz:** Zusätzliche Hardwarekomponenten werden eingesetzt, die im Fehlerfall die Funktion der ausgefallenen Komponente übernehmen können (z.B. redundante Netzteile, RAID-Systeme für Festplatten).
    - **Software-Redundanz:** Mehrere Versionen einer Software oder unterschiedliche Algorithmen werden parallel eingesetzt, um Fehler in einer Version durch die Ergebnisse einer anderen zu erkennen oder zu kompensieren (z.B. N-Version-Programmierung).

**a) Prüfsummen (Checksums):**

- **Beschreibung:** Ein einfacher Wert, der aus den zu übertragenden oder gespeicherten Daten berechnet wird. Beim Empfang oder Auslesen der Daten wird die Prüfsumme erneut berechnet und mit der ursprünglich übertragenen oder gespeicherten Prüfsumme verglichen. Eine Diskrepanz deutet auf einen Fehler hin.
- **Berechnung:** Es gibt verschiedene Methoden zur Berechnung von Prüfsummen, von einfachen Additionen bis zu komplexeren Algorithmen.
- **Fehlererkennung:** Die Fähigkeit, Fehler zu erkennen, hängt von der Komplexität des Prüfsummenalgorithmus ab. Einfache Prüfsummen können bestimmte Arten von Fehlern (z.B. das Vertauschen von Bits) möglicherweise nicht erkennen.
- **Anwendungsbeispiele:** Datenübertragungsprotokolle (z.B. TCP/IP), Dateiverifizierung.

**b) Zyklische Redundanzprüfung (Cyclic Redundancy Check - CRC):**

- **Beschreibung:** Ein leistungsfähigeres Verfahren zur Fehlererkennung, das auf der Polynomdivision im Binärfeld basiert. Ein CRC-Wert (einige Bits lang) wird basierend auf den Daten berechnet und an die Daten angehängt.
- **Funktionsweise:** Beim Empfang wird die gleiche CRC-Berechnung durchgeführt und mit dem angehängten CRC-Wert verglichen. Eine Nichtübereinstimmung signalisiert einen Fehler.
- **Fehlererkennung:** CRCs sind sehr effektiv bei der Erkennung einer Vielzahl von Übertragungsfehlern, einschließlich einzelner Bitfehler, Mehrfachbitfehler und Burst-Fehler (aufeinanderfolgende Bitfehler). Die Fehlererkennungsfähigkeit hängt von der Länge des CRC-Werts und dem verwendeten Generatorpolynom ab.
- **Anwendungsbeispiele:** Datenübertragung (z.B. Ethernet, WLAN), Datenspeicherung (z.B. Festplatten, DVDs).

**c) Fehlerkorrekturcodes (Error Correcting Codes - ECC):**

- **Beschreibung:** Im Gegensatz zu reinen Fehlererkennungsverfahren ermöglichen ECCs auch die Korrektur bestimmter Arten von Fehlern. Zusätzliche Redundanzbits werden den Daten hinzugefügt, die nicht nur die Erkennung, sondern auch die Lokalisierung und Korrektur von Fehlern ermöglichen.
- **Funktionsweise:** Basierend auf den empfangenen Daten und den ECC-Bits kann der Empfänger feststellen, ob Fehler aufgetreten sind und diese in bestimmten Grenzen korrigieren.
- **Beispiele:** Hamming-Codes, Reed-Solomon-Codes.
- **Anwendungsbeispiele:** Speicher (z.B. ECC-RAM), Datenübertragung in rauen Umgebungen (z.B. Satellitenkommunikation, Weltraumforschung), Datenspeicherung auf Medien, bei denen Bitfehler häufiger auftreten können (z.B. Festplatten).

> **Hinweis:** Die Wahl des geeigneten Prüfverfahrens hängt von den spezifischen Anforderungen des Systems hinsichtlich der Fehlerrate, der zulässigen Komplexität und des Overheads (zusätzliche Bits oder Ressourcen) ab.

## Anwendungsbeispiele

- **Speicher (RAM):** Einfache Paritätsprüfung kann in älteren oder kostengünstigen Speichermodulen zur Erkennung einzelner Bitfehler eingesetzt werden. Leistungsfähigere Systeme verwenden ECC-RAM, um einzelne oder sogar mehrere Bitfehler automatisch zu korrigieren und so die Datenintegrität zu erhöhen.
- **Datenübertragung im Netzwerk:** Ethernet verwendet CRC zur Fehlererkennung während der Paketübertragung. WLAN nutzt ebenfalls CRC. Bei der drahtlosen Kommunikation in störungsreichen Umgebungen können auch Fehlerkorrekturcodes eingesetzt werden.
- **Festplatten (RAID):** RAID-Konfigurationen (Redundant Array of Independent Disks) nutzen Hardware-Redundanz (mehrere Festplatten) und Paritätsinformationen oder Fehlerkorrekturcodes, um Datenverlust bei Ausfall einer oder mehrerer Festplatten zu verhindern.

## Weiterführende Links & Quellen

  - [Wikipedia: Paritätsbit](https://de.wikipedia.org/wiki/Parit%C3%A4tsbit)
  - [Wikipedia: Redundanz (Technik)](https://de.wikipedia.org/wiki/Redundanz_(Technik))
  - [Wikipedia: Prüfsumme](https://de.wikipedia.org/wiki/Pr%C3%BCfsumme)
  - [Wikipedia: Zyklische Redundanzprüfung](https://de.wikipedia.org/wiki/Zyklische_Redundanzpr%C3%BCfung)
  - [Wikipedia: Fehlerkorrekturverfahren](https://de.wikipedia.org/wiki/Fehlerkorrekturverfahren)

-----

> **Fehler gefunden?:** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
