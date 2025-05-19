# Monitoringsysteme anwenden und Ergebnisse interpretieren können: Festlegen von Schwellwerten

## Einführung

Das Festlegen von Schwellwerten (Thresholds) ist ein zentraler Aspekt bei der Konfiguration von Monitoringsystemen. Schwellwerte definieren die Grenzwerte für überwachte Metriken, bei deren Über- oder Unterschreitung Alarme ausgelöst werden. Richtig definierte Schwellwerte ermöglichen die frühzeitige Erkennung von Problemen, bevor diese zu spürbaren Ausfällen oder Leistungseinbußen führen. Falsch konfigurierte Schwellwerte hingegen können zu einer Flut irrelevanter Alarme (False Positives) führen, die die Aufmerksamkeit von echten Problemen ablenken, oder kritische Zustände übersehen (False Negatives). Daher ist die sorgfältige Festlegung von Schwellwerten entscheidend für die Effektivität eines Monitoringsystems.

## Charakterisierung von Schwellwerten

Schwellwerte sind vordefinierte Werte für überwachte Metriken, die verwendet werden, um den Zustand eines Systems oder einer Anwendung zu beurteilen. Wenn der aktuelle Wert einer Metrik einen konfigurierten Schwellwert überschreitet oder unterschreitet, wird in der Regel ein Alarm ausgelöst.

**Wichtige Aspekte beim Festlegen von Schwellwerten:**

**1. Arten von Schwellwerten:**

-   **Statische Schwellwerte:** Feste Werte, die für eine Metrik definiert werden (z.B. CPU-Auslastung > 90%).
-   **Dynamische Schwellwerte (Adaptive Thresholds):** Schwellwerte, die sich im Laufe der Zeit basierend auf historischen Daten und erwarteten Mustern anpassen (z.B. eine Abweichung um mehr als drei Standardabweichungen vom gleitenden Durchschnitt).

**2. Schwellwerttypen (Severity Levels):**

-   **Warnung (Warning):** Ein Schwellwert, der auf ein potenzielles Problem oder eine sich verschlechternde Situation hinweist und Aufmerksamkeit erfordert.
-   **Kritisch (Critical):** Ein Schwellwert, der auf ein akutes Problem hinweist, das sofortige Maßnahmen erfordert.
-   Zusätzlich können weitere Severity Levels wie "Informationell" oder "Minor" verwendet werden.

**3. Richtung der Schwellwertverletzung:**

-   **Überschreiten (Above):** Alarm wird ausgelöst, wenn der Metrikwert einen oberen Schwellwert übersteigt (z.B. CPU-Auslastung > 90%).
-   **Unterschreiten (Below):** Alarm wird ausgelöst, wenn der Metrikwert einen unteren Schwellwert unterschreitet (z.B. freier Speicher < 10%).
-   **Innerhalb/Außerhalb eines Bereichs:** Alarm wird ausgelöst, wenn der Metrikwert innerhalb oder außerhalb eines definierten Wertebereichs liegt.

**4. Berücksichtigung von Zeitintervallen:**

-   Ein Schwellwert kann für eine bestimmte Dauer überschritten oder unterschritten werden, bevor ein Alarm ausgelöst wird (z.B. CPU-Auslastung > 95% für 5 Minuten). Dies hilft, kurzzeitige Spitzen zu ignorieren.

## Vorgehensweise beim Festlegen von Schwellwerten

Die Festlegung sinnvoller Schwellwerte erfordert ein Verständnis der überwachten Systeme und Anwendungen sowie ihrer typischen Verhaltensmuster. Ein strukturierter Ansatz umfasst die folgenden Schritte:

**1. Baseline-Erfassung und -Analyse:**

-   Sammeln Sie historische Daten über die Leistung der Systeme und Anwendungen unter normalen Betriebsbedingungen.
-   Analysieren Sie diese Daten, um typische Wertebereiche, Spitzenlastzeiten und saisonale Schwankungen zu verstehen.
-   Identifizieren Sie Metriken, die stark mit der Leistung und Verfügbarkeit korrelieren.

**2. Definition von Leistungszielen und SLAs:**

-   Berücksichtigen Sie die definierten Leistungsziele (Performance Targets) und Service Level Agreements (SLAs) für die überwachten Dienste.
-   Die Schwellwerte sollten so gesetzt werden, dass Abweichungen von diesen Zielen frühzeitig erkannt werden.

**3. Berücksichtigung der Kritikalität von Systemen und Anwendungen:**

-   Für geschäftskritische Systeme sollten aggressivere (niedrigere für Warnungen, höhere für Kritisch bei Unterschreitungen und umgekehrt bei Überschreitungen) Schwellwerte in Betracht gezogen werden, um Probleme so früh wie möglich zu erkennen.
-   Weniger kritische Systeme können tolerantere Schwellwerte haben.

**4. Festlegung erster Schwellwerte:**

-   Basierend auf der Baseline-Analyse und den Leistungszielen legen Sie erste Schwellwerte für die wichtigsten Metriken fest.
-   Beginnen Sie mit konservativen Werten und passen Sie diese später bei Bedarf an.
-   Berücksichtigen Sie sowohl Warn- als auch kritische Schwellwerte.

**5. Testen und Feinjustierung:**

-   Überwachen Sie das System mit den initialen Schwellwerten und beobachten Sie, ob Alarme ausgelöst werden.
-   Analysieren Sie die ausgelösten Alarme:
    -   **False Positives:** Alarme ohne tatsächliches Problem. Die Schwellwerte müssen möglicherweise angepasst (erhöht oder gesenkt) oder die Bedingungen für die Alarmauslösung verfeinert werden (z.B. längere Überschreitungsdauer).
    -   **False Negatives:** Probleme treten auf, ohne dass ein Alarm ausgelöst wird. Die Schwellwerte müssen möglicherweise aggressiver (niedriger oder höher) gesetzt werden.
-   Dieser iterative Prozess des Testens und Feinjustierens ist entscheidend, um optimale Schwellwerte zu finden.

**6. Dokumentation der Schwellwerte:**

-   Dokumentieren Sie die festgelegten Schwellwerte, die Gründe für ihre Wahl und die erwarteten Reaktionen auf die Alarme.
-   Dies erleichtert das Verständnis und die zukünftige Wartung des Monitoringsystems.

**7. Regelmäßige Überprüfung und Anpassung:**

-   Die IT-Umgebung und die Anwendungen entwickeln sich ständig weiter. Die Schwellwerte sollten daher regelmäßig überprüft und an Veränderungen in der Infrastruktur, den Anwendungen, den Lastmustern und den Geschäftsanforderungen angepasst werden.
-   Neue Metriken oder veränderte Leistungsziele können ebenfalls Anpassungen erforderlich machen.

## Beispiele für Schwellwerte

-   **CPU-Auslastung:** Warnung > 80% für 5 Minuten, Kritisch > 95% für 1 Minute.
-   **Speicherauslastung (RAM):** Warnung > 85%, Kritisch > 95%.
-   **Freier Festplattenspeicher:** Warnung < 20%, Kritisch < 10%.
-   **Antwortzeit einer Webanwendung:** Warnung > 2 Sekunden (durchschnittlich über 5 Minuten), Kritisch > 5 Sekunden (durchschnittlich über 1 Minute).
-   **Netzwerk-Paketverluste:** Warnung > 1% über 1 Minute, Kritisch > 5% über 1 Minute.
-   **S.M.A.R.T.-Wert "Reallocated Sector Count":** Warnung > 5, Kritisch > 20.

## Best Practices beim Festlegen von Schwellwerten

-   **Business-Relevanz:** Konzentrieren Sie sich auf Metriken, die sich direkt auf die Verfügbarkeit und Leistung kritischer Geschäftsdienste auswirken.
-   **Mehrere Schwellwerte:** Verwenden Sie Warn- und kritische Schwellwerte, um Eskalationsprozesse zu unterstützen.
-   **Berücksichtigung von Kontext:** Der Kontext der Metrik ist wichtig. Eine hohe CPU-Auslastung kann in einem Batch-Verarbeitungssystem normal sein, aber in einem interaktiven Webserver kritisch.
-   **Vermeidung von Alarmfluten:** Setzen Sie Schwellwerte nicht zu niedrig oder zu aggressiv, um eine Flut irrelevanter Alarme zu vermeiden.
-   **Korrelation berücksichtigen:** Manchmal ist eine Kombination von Metriken, die bestimmte Schwellwerte überschreiten, aussagekräftiger als eine einzelne Metrik.
-   **Dynamische Schwellwerte in Betracht ziehen:** Für stark schwankende Metriken können dynamische Schwellwerte effektiver sein als statische.
-   **Klare Alarmmeldungen:** Stellen Sie sicher, dass Alarmmeldungen klar und verständlich sind und Informationen zur Ursachenanalyse und möglichen Behebungsmaßnahmen enthalten.

## Fazit

Das Festlegen sinnvoller Schwellwerte ist eine kontinuierliche Aufgabe, die ein tiefes Verständnis der überwachten Systeme und Anwendungen erfordert. Durch einen systematischen Ansatz, der Baseline-Analyse, Berücksichtigung von Leistungszielen und Kritikalität, sorgfältiges Testen und regelmäßige Überprüfung umfasst, können Organisationen effektive Schwellwerte definieren, die eine frühzeitige Erkennung von Problemen ermöglichen und die Zuverlässigkeit ihrer IT-Systeme verbessern.

## Links und Quellen

-   **Catchpoint - Alerting Thresholds: Finding the Right Balance:** [https://www.catchpoint.com/blog/alerting-thresholds](https://www.catchpoint.com/blog/alerting-thresholds) (Englischsprachig)
-   **PagerDuty - Alert Grouping and Thresholds:** [https://www.pagerduty.com/docs/en/alerting/03-alert-grouping-and-thresholds](https://www.pagerduty.com/docs/en/alerting/03-alert-grouping-and-thresholds) (Englischsprachig)
-   **Sentry - Configuring Alerts:** [https://docs.sentry.io/product/alerts/](https://docs.sentry.io/product/alerts/) (Englischsprachig)
-   **Dynatrace - Alerting and problem detection:** [https://www.dynatrace.com/platform/cloud-monitoring/alerting/](https://www.dynatrace.com/platform/cloud-monitoring/alerting/) (Englischsprachig)
-   **Zabbix - Defining thresholds:** [https://www.zabbix.com/documentation/current/en/config/items/triggers/defining_thresholds](https://www.zabbix.com/documentation/current/en/config/items/triggers/defining_thresholds) (Englischsprachig)
