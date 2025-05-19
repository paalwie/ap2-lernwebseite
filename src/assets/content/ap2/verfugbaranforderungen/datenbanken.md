# Anforderungen an Verfügbarkeit von Anwendungsdiensten beurteilen können: Datenbanken

## Einführung

Datenbanken sind das Rückgrat vieler moderner Anwendungen und speichern kritische Informationen, die für den Geschäftsbetrieb unerlässlich sind. Die Verfügbarkeit von Datenbanken ist daher von entscheidender Bedeutung. Ausfälle können zu Datenverlust, Anwendungsunterbrechungen, finanziellen Schäden und Reputationsverlusten führen. Die sorgfältige Beurteilung der Verfügbarkeitsanforderungen für Datenbankdienste ist unerlässlich, um einen kontinuierlichen und zuverlässigen Betrieb zu gewährleisten.

## Charakterisierung von Datenbankdiensten

**1. Grundlegende Funktionen von Datenbanken:**

-   **Datenspeicherung:** Persistente Speicherung strukturierter Daten.
-   **Datenabruf:** Ermöglichen effizienten Zugriff auf gespeicherte Daten (z.B. über SQL).
-   **Datenmanipulation:** Unterstützung von Operationen zum Einfügen, Aktualisieren und Löschen von Daten.
-   **Transaktionsmanagement:** Sicherstellung der ACID-Eigenschaften (Atomicity, Consistency, Isolation, Durability) bei Datenänderungen.
-   **Zugriffskontrolle:** Verwaltung von Benutzerrechten und Berechtigungen.
-   **Sicherheit:** Schutz der Daten vor unbefugtem Zugriff und Verlust.

**2. Bedeutung der Verfügbarkeit von Datenbanken:**

-   **Anwendungsbetrieb:** Viele Anwendungen sind direkt auf die Verfügbarkeit der Datenbank angewiesen. Ein Datenbankausfall führt in der Regel zu einem Ausfall der zugehörigen Anwendungen.
-   **Geschäftsprozesse:** Kritische Geschäftsprozesse (z.B. Auftragsabwicklung, Logistik, Finanztransaktionen) sind oft eng mit Datenbanken verbunden.
-   **Datenintegrität:** Unerwartete Ausfälle können im schlimmsten Fall zu Dateninkonsistenzen oder -verlust führen.
-   **Berichterstattung und Analyse:** Der Zugriff auf aktuelle Daten in Datenbanken ist für Business Intelligence und Entscheidungsfindung unerlässlich.
-   **Compliance:** In einigen Branchen gibt es regulatorische Anforderungen an die Verfügbarkeit und Integrität von Daten.

**3. Anforderungen an die Verfügbarkeit von Datenbanken:**

Die spezifischen Verfügbarkeitsanforderungen für Datenbanken hängen von der Kritikalität der gespeicherten Daten und der abhängigen Anwendungen ab. Allgemeine Anforderungen umfassen:

-   **Uptime:** Ein hoher Prozentsatz der Betriebszeit ist entscheidend. Für geschäftskritische Datenbanken sollten Verfügbarkeitsziele von 99,9% bis 99,999% angestrebt werden.
-   **Minimale Ausfallzeiten:** Geplante Wartungsarbeiten (z.B. Patches, Upgrades) sollten sorgfältig geplant und mit Techniken wie Rolling Updates oder Blue/Green Deployments minimiert werden.
-   **Redundanz:** Einsatz redundanter Hardware (Server, Speicher, Netzwerk) und Softwarekomponenten (Datenbankinstanzen).
-   **Failover-Mechanismen:** Automatische Umschaltung auf резервные Datenbankinstanzen im Fehlerfall. Dies kann auf verschiedenen Ebenen realisiert werden (z.B. Datenbank-Clustering, Always-On-Technologien).
-   **Replikation:** Datenreplikation zwischen mehreren Datenbankinstanzen, um Datenverlust zu verhindern und die Leselast zu verteilen.
-   **Datensicherung und -wiederherstellung:** Regelmäßige, automatisierte Backups und ein getesteter Plan zur schnellen Wiederherstellung im Falle eines Datenverlusts oder einer schwerwiegenden Störung.
-   **Transaktionsprotokollierung:** Detaillierte Protokollierung von Datenbankänderungen zur Unterstützung der Wiederherstellung und zur Gewährleistung der Datenintegrität.
-   **Überwachung:** Kontinuierliche Überwachung der Datenbankleistung (CPU, RAM, IOPS), des Speicherplatzes, der Replikationsverzögerung und des allgemeinen Zustands der Datenbank.
-   **Skalierbarkeit:** Die Datenbankarchitektur muss in der Lage sein, mit wachsenden Datenmengen und Benutzerlasten umzugehen, ohne die Verfügbarkeit zu beeinträchtigen.
-   **Netzwerkinfrastruktur:** Eine stabile und performante Netzwerkanbindung ist unerlässlich für den Zugriff auf die Datenbanken.
-   **Sicherheit:** Schutz vor Datenverlust durch Hardwareausfälle, Softwarefehler oder menschliches Versagen sowie Schutz vor unbefugtem Zugriff und Cyberangriffen.
-   **Geografische Redundanz (Disaster Recovery):** Replikation der Datenbanken in geografisch getrennten Rechenzentren zum Schutz vor lokalen Ausfällen.

**4. Beurteilung der Verfügbarkeitsanforderungen:**

Die Beurteilung der spezifischen Verfügbarkeitsanforderungen für Datenbanken sollte folgende Aspekte berücksichtigen:

-   **Kritikalität der Daten:** Welche Auswirkungen hätte der Verlust oder die Unzugänglichkeit der in der Datenbank gespeicherten Informationen auf das Geschäft?
-   **Abhängigkeit von Anwendungen:** Welche Anwendungen sind auf die Verfügbarkeit dieser Datenbank angewiesen und wie kritisch sind diese Anwendungen?
-   **Toleranz gegenüber Ausfallzeiten:** Wie lange können die abhängigen Anwendungen ohne die Datenbank auskommen, ohne erhebliche Schäden zu verursachen?
-   **Finanzielle Auswirkungen von Ausfällen:** Welche Kosten entstehen durch Ausfallzeiten (z.B. entgangene Umsätze, Strafzahlungen, Produktivitätsverluste)?
-   **Service Level Agreements (SLAs):** Gibt es interne oder externe SLAs bezüglich der Verfügbarkeit der Datenbanken?
-   **Recovery Time Objective (RTO):** Wie schnell muss die Datenbank nach einem Ausfall wiederhergestellt sein?
-   **Recovery Point Objective (RPO):** Wie viele Datenverluste sind im Falle eines Ausfalls tolerierbar?
-   **Gesetzliche und regulatorische Anforderungen:** Gibt es spezifische Verfügbarkeits- oder Datenhaltungsvorschriften?

**5. Maßnahmen zur Erhöhung der Verfügbarkeit von Datenbanken:**

-   **Datenbank-Clustering:** Einsatz von Technologien wie Oracle RAC, SQL Server Always On Availability Groups oder PostgreSQL Streaming Replication für automatischen Failover und Lastverteilung.
-   **Replikation (synchron und asynchron):** Einrichtung von Replikationsmechanismen zur Datenredundanz und zur Verteilung der Lesezugriffe.
-   **Log Shipping:** Übertragen und Anwenden von Transaktionsprotokollen auf eine резервные Datenbank.
-   **Spiegelung (Mirroring):** Echtzeit-Synchronisation von Daten zwischen zwei Datenbankinstanzen.
-   **RAID (Redundant Array of Independent Disks):** Schutz vor Festplattenausfällen.
-   **Unterbrechungsfreie Stromversorgung (USV):** Schutz vor Stromausfällen.
-   **Automatisierte Backup- und Wiederherstellungsprozesse:** Regelmäßige Backups und schnelle Wiederherstellung im Notfall.
-   **Umfassendes Monitoring und Alerting:** Frühzeitige Erkennung und Benachrichtigung bei Leistungsproblemen oder potenziellen Ausfällen.
-   **Testen von Failover- und Wiederherstellungsszenarien:** Regelmäßige Überprüfung der Notfallpläne.
-   **Einsatz von Cloud-basierten Datenbankdiensten:** Viele Cloud-Anbieter (z.B. AWS RDS, Azure SQL Database, Google Cloud SQL) bieten integrierte Hochverfügbarkeitsfunktionen.

## Fazit

Die Verfügbarkeit von Datenbanken ist ein kritischer Faktor für den zuverlässigen Betrieb moderner IT-Systeme. Die Beurteilung der spezifischen Anforderungen erfordert eine detaillierte Analyse der Geschäftsprozesse, der Datenkritikalität und der potenziellen Auswirkungen von Ausfällen. Durch die Implementierung geeigneter Hochverfügbarkeitsstrategien und -technologien können Unternehmen sicherstellen, dass ihre Datenbanken jederzeit verfügbar sind und die Kontinuität der Geschäftsprozesse gewährleistet ist.

## Links und Quellen

-   **Wikipedia - High availability:** [https://de.wikipedia.org/wiki/Hochverf%C3%BCgbarkeit](https://de.wikipedia.org/wiki/Hochverf%C3%BCgbarkeit)
-   **Amazon Web Services (AWS) - Datenbank-Hochverfügbarkeit:** [https://aws.amazon.com/de/database/high-availability/](https://aws.amazon.com/de/database/high-availability/)
-   **Microsoft Azure - Datenbank-Hochverfügbarkeit:** [https://azure.microsoft.com/de-de/solutions/databases/#high-availability](https://azure.microsoft.com/de-de/solutions/databases/#high-availability)
-   **Google Cloud - Datenbank-Hochverfügbarkeit:** [https://cloud.google.com/solutions/database/high-availability](https://cloud.google.com/solutions/database/high-availability) (Englischsprachig)
-   **Oracle - Maximum Availability Architecture (MAA):** [https://www.oracle.com/de/database/technologies/high-availability/maa.html](https://www.oracle.com/de/database/technologies/high-availability/maa.html)
-   **SQL Server Always On Availability Groups:** [https://learn.microsoft.com/en-us/sql/database-engine/availability-groups/windows/always-on-availability-groups-sql-server?view=sql-server-ver16](https://learn.microsoft.com/en-us/sql/database-engine/availability-groups/windows/always-on-availability-groups-sql-server?view=sql-server-ver16) (Englischsprachig)
-   **PostgreSQL - High Availability, Load Balancing, and Replication:** [https://www.postgresql.org/docs/current/different-replication-solutions.html](https://www.postgresql.org/docs/current/different-replication-solutions.html) (Englischsprachig)
