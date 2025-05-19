# Monitoringsysteme anwenden und Ergebnisse interpretieren können: Festlegen der Monitoringdaten

## Einführung

Ein effektives Monitoring ist unerlässlich für den stabilen und zuverlässigen Betrieb von IT-Systemen. Es ermöglicht die frühzeitige Erkennung von Problemen, die Analyse von Trends, die Optimierung der Leistung und die Sicherstellung der Verfügbarkeit von Anwendungsdiensten. Der erste und entscheidende Schritt bei der Implementierung eines Monitoringsystems ist die sorgfältige Festlegung der zu überwachenden Daten. Die Auswahl der richtigen Metriken und Logdaten ist entscheidend für die Aussagekraft des Monitorings und die Fähigkeit, fundierte Entscheidungen zu treffen.

## Charakterisierung von Monitoringdaten

Monitoringdaten umfassen eine breite Palette von Informationen, die den Zustand und die Leistung von IT-Systemen und Anwendungen widerspiegeln. Diese Daten können in verschiedene Kategorien eingeteilt werden:

**1. Infrastruktur-Metriken:**

-   **Server-Ressourcen:** CPU-Auslastung, Speicherauslastung (RAM, Swap), Festplattenauslastung (Speicherplatz, IOPS, Latenz), Netzwerkauslastung (Bandbreite, Paketverluste, Latenz).
-   **Netzwerkkomponenten:** Auslastung von Switches und Routern, Schnittstellenstatus, Fehlerzähler, Latenz, Jitter.
-   **Speichersysteme:** Auslastung, IOPS, Latenz, Durchsatz, Zustand der RAID-Arrays.
-   **Umgebungsparameter:** Temperatur, Luftfeuchtigkeit im Rechenzentrum.

**2. Anwendungs-Metriken:**

-   **Anwendungsleistung:** Antwortzeiten, Durchsatz (Requests pro Sekunde), Fehlerraten, Wartezeiten, Auslastung von Ressourcen (CPU, Speicher) durch die Anwendungsprozesse.
-   **Benutzererfahrung (End-User Monitoring - EUM):** Ladezeiten von Webseiten, Antwortzeiten von APIs aus Nutzersicht, Verfügbarkeit von Diensten.
-   **Transaktionsüberwachung:** Verfolgung einzelner Transaktionen über verschiedene Systemkomponenten hinweg zur Identifizierung von Engpässen.
-   **Warteschlangen:** Länge und Wartezeiten in Message Queues.
-   **Datenbank-Metriken:** Abfragezeiten, aktive Verbindungen, Cache-Trefferraten, Transaktionsraten, Sperren.

**3. Logdaten:**

-   **Systemlogs:** Betriebssystemmeldungen, Hardware-Ereignisse.
-   **Applikationslogs:** Meldungen und Fehlerprotokolle von Anwendungen.
-   **Webserver-Logs:** Zugriffsprotokolle, Fehlercodes.
-   **Security-Logs:** Anmeldeversuche, Firewall-Ereignisse, Intrusion Detection-Alarme.

**4. Synthetisches Monitoring:**

-   Simulation von Benutzerinteraktionen, um die Verfügbarkeit und Leistung von Anwendungen proaktiv zu testen.

## Festlegen der Monitoringdaten: Ein strukturierter Ansatz

Die Auswahl der relevanten Monitoringdaten sollte systematisch erfolgen und die spezifischen Anforderungen der IT-Umgebung und der Geschäftsanwendungen berücksichtigen. Ein möglicher Ansatz umfasst die folgenden Schritte:

**1. Identifizierung kritischer Systeme und Anwendungen:**

-   Welche Systeme und Anwendungen sind geschäftskritisch und haben den größten Einfluss auf den Geschäftsbetrieb, wenn sie ausfallen oder schlecht performen?
-   Welche Dienste sind für Endbenutzer am wichtigsten?

**2. Definition von Leistungszielen und Service Level Objectives (SLOs):**

-   Welche Leistungsniveaus (z.B. Antwortzeiten, Verfügbarkeit) werden für die kritischen Systeme und Anwendungen erwartet oder in SLAs (Service Level Agreements) vereinbart?
-   Diese Ziele dienen als Referenzpunkte für das Monitoring und die Alarmierung.

**3. Auswahl relevanter Metriken pro System/Anwendung:**

-   Basierend auf den kritischen Systemen, Anwendungen und Leistungszielen müssen die Metriken identifiziert werden, die Aufschluss über deren Zustand und Leistung geben.
-   **Beispiele:**
    -   Für einen Webserver: CPU-Auslastung, Speicherauslastung, Antwortzeiten, HTTP-Fehlercodes, aktive Verbindungen.
    -   Für eine Datenbank: CPU-Auslastung, Speicherauslastung, Abfragezeiten, aktive Verbindungen, Cache-Trefferrate.
    -   Für eine Anwendung: Antwortzeiten, Fehlerraten, Durchsatz, Auslastung von Ressourcen durch die Anwendungsprozesse.
-   Es ist wichtig, sowohl **Ressourcenmetriken** (die den Zustand der zugrunde liegenden Infrastruktur widerspiegeln) als auch **Anwendungsmetriken** (die die Performance aus Anwendungs- und Nutzersicht zeigen) zu berücksichtigen.

**4. Auswahl relevanter Logdaten:**

-   Welche Logdateien enthalten wichtige Informationen über Fehler, Warnungen oder ungewöhnliche Ereignisse, die auf potenzielle Probleme hindeuten könnten?
-   Die Korrelation von Metriken und Logdaten kann bei der Fehleranalyse sehr hilfreich sein.
-   **Beispiele:**
    -   Systemlogs auf Servern zur Erkennung von Hardwarefehlern oder Betriebssystemproblemen.
    -   Applikationslogs zur Identifizierung von Softwarefehlern oder Ausnahmen.
    -   Webserver-Logs zur Analyse von HTTP-Fehlercodes oder verdächtigen Zugriffsmustern.

**5. Definition von Schwellwerten (Thresholds) für Alarme:**

-   Für jede überwachte Metrik müssen realistische Schwellwerte festgelegt werden, bei deren Überschreitung oder Unterschreitung Alarme ausgelöst werden sollen.
-   Es ist wichtig, zwischen Warnschwellwerten (die auf potenzielle Probleme hindeuten) und kritischen Schwellwerten (die auf akute Probleme hinweisen) zu unterscheiden.
-   Die Festlegung der Schwellwerte erfordert oft ein gewisses Maß an Erfahrung und kann im Laufe der Zeit basierend auf den gesammelten Daten und den beobachteten Mustern angepasst werden.

**6. Planung der Datenerfassung und -speicherung:**

-   Wie oft sollen die Monitoringdaten erfasst werden (Granularität)? Eine höhere Granularität liefert detailliertere Informationen, erzeugt aber auch mehr Daten.
-   Wie lange sollen die Monitoringdaten aufbewahrt werden (Retention)? Dies hängt von den Anforderungen an die Fehleranalyse, die Trendanalyse und die Compliance ab.

**7. Auswahl der Monitoring-Tools:**

-   Es gibt eine Vielzahl von Monitoring-Tools (z.B. Prometheus, Grafana, Nagios, Zabbix, kommerzielle Lösungen wie Datadog, New Relic, Dynatrace). Die Auswahl sollte auf den spezifischen Anforderungen, der Größe der Umgebung und dem Budget basieren.

**8. Kontinuierliche Überprüfung und Anpassung:**

-   Die festgelegten Monitoringdaten und Schwellwerte sollten regelmäßig überprüft und an Veränderungen in der IT-Umgebung, den Anwendungen und den Geschäftsanforderungen angepasst werden.
-   Das Monitoring sollte ein lebendiger Prozess sein, der sich kontinuierlich weiterentwickelt.

## Best Practices bei der Festlegung von Monitoringdaten

-   **Business-Relevanz:** Konzentrieren Sie sich auf Metriken, die einen direkten Bezug zu den Geschäftszielen und den Benutzererwartungen haben.
-   **Vollständigkeit:** Überwachen Sie sowohl die Infrastruktur als auch die Anwendungen, um ein umfassendes Bild des Systemzustands zu erhalten.
-   **Frühzeitige Erkennung:** Wählen Sie Metriken, die frühzeitig Anzeichen für potenzielle Probleme liefern können (z.B. steigende Latenz, zunehmende Fehlerraten).
-   **Korrelation ermöglichen:** Wählen Sie Metriken und Logs, die miteinander in Beziehung gesetzt werden können, um die Ursachen von Problemen schneller zu identifizieren.
-   **Redundanz vermeiden:** Überwachen Sie nicht unnötig viele ähnliche Metriken. Konzentrieren Sie sich auf die aussagekräftigsten.
-   **Klare Benennung:** Verwenden Sie konsistente und aussagekräftige Namen für Metriken und Alarme.
-   **Dokumentation:** Dokumentieren Sie, welche Metriken überwacht werden, welche Schwellwerte festgelegt sind und warum.

## Fazit

Die sorgfältige Festlegung der Monitoringdaten ist ein entscheidender Schritt für ein effektives Monitoring von IT-Systemen und Anwendungen. Durch die Auswahl relevanter Infrastruktur- und Anwendungsmetriken sowie wichtiger Logdaten, die auf die Geschäftsziele und Leistungsanforderungen abgestimmt sind, können Organisationen die Grundlage für eine proaktive Problembehandlung, Leistungsoptimierung und die Sicherstellung der Verfügbarkeit schaffen. Ein strukturierter Ansatz und die kontinuierliche Überprüfung und Anpassung der Monitoringdaten sind dabei unerlässlich.

## Links und Quellen

-   **Wikipedia - Systemüberwachung:** [https://de.wikipedia.org/wiki/System%C3%BCberwachung](https://de.wikipedia.org/wiki/System%C3%BCberwachung)
-   **Datadog - The Metrics That Matter:** [https://www.datadoghq.com/guides/metrics/](https://www.datadoghq.com/guides/metrics/) (Englischsprachig)
-   **New Relic - What metrics should I monitor?:** [https://newrelic.com/resources/guides/what-metrics-should-i-monitor](https://newrelic.com/resources/guides/what-metrics-should-i-monitor) (Englischsprachig)
-   **Prometheus - Docs / Concepts / Metrics and labels:** [https://prometheus.io/docs/concepts/metric_types/](https://prometheus.io/docs/concepts/metric_types/) (Englischsprachig)
-   **Grafana Labs - What to monitor: The most important infrastructure metrics:** [https://grafana.com/blog/2021/03/08/what-to-monitor-the-most-important-infrastructure-metrics/](https://grafana.com/blog/2021/03/08/what-to-monitor-the-most-important-infrastructure-metrics/) (Englischsprachig)
