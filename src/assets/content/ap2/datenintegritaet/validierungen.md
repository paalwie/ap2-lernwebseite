# Sicherstellen der Qualität von Softwareanwendungen: Datenintegrität mithilfe von technischen Maßnahmen beurteilen und sicherstellen können - Validierungen

## Einführung

**Validierungen** sind Prozesse, die sicherstellen, dass die eingegebenen oder verarbeiteten Daten bestimmten vordefinierten Regeln und Kriterien entsprechen, bevor sie in das System gelangen oder weiterverarbeitet werden. Sie ergänzen die durch Constraints auf Datenbankebene erzwungene Datenintegrität, indem sie spezifischere Geschäftsregeln und Formatvorgaben überprüfen. Validierungen können auf verschiedenen Ebenen einer Anwendung implementiert werden und sind entscheidend für die Verhinderung fehlerhafter oder inkonsistenter Daten.

## Ebenen der Validierung

Validierungen können auf verschiedenen Schichten einer Softwareanwendung stattfinden:

1.  **Clientseitige Validierung (Frontend):** Erfolgt im Browser des Benutzers, bevor die Daten an den Server gesendet werden. Sie bietet sofortiges Feedback für den Benutzer und kann die Last auf dem Server reduzieren. Allerdings ist sie weniger sicher, da sie vom Benutzer umgangen werden kann.
    -   **Beispiele:** Überprüfung des Formats von E-Mail-Adressen, Telefonnummern, Postleitzahlen, obligatorische Felder, Längenbeschränkungen.

2.  **Serverseitige Validierung (Backend):** Erfolgt auf dem Server, nachdem die Daten vom Client empfangen wurden. Sie ist unerlässlich für die Datensicherheit und -integrität, da sie nicht vom Client umgangen werden kann.
    -   **Beispiele:** Überprüfung der Eindeutigkeit von Benutzernamen, Konsistenz von Bestellmengen mit Lagerbestand, Einhaltung von Geschäftsregeln (z.B. Mindestbestellwert).

3.  **Datenbankseitige Validierung:** Wird durch Constraints (wie im vorherigen Thema besprochen) und Trigger auf der Datenbankebene durchgeführt. Sie stellt die strukturelle Integrität und Beziehungen der Daten sicher.
    -   **Beispiele:** `NOT NULL`, `UNIQUE`, `FOREIGN KEY`, `CHECK`-Constraints.

## Arten von Validierungen

Validierungen können verschiedene Aspekte der Daten überprüfen:

-   **Formatvalidierung:** Überprüfung, ob die Daten einem bestimmten Format entsprechen (z.B. Datumsformat, E-Mail-Format, numerischer Bereich). Reguläre Ausdrücke (`Regex`) sind hierfür oft nützlich.
-   **Längenvalidierung:** Überprüfung, ob die Länge einer Zeichenkette innerhalb eines bestimmten Bereichs liegt (Minimum, Maximum).
-   **Bereichsvalidierung:** Überprüfung, ob ein numerischer Wert innerhalb eines zulässigen Bereichs liegt (Minimum, Maximum).
-   **Vorhandenseinsvalidierung:** Überprüfung, ob ein erforderliches Feld ausgefüllt wurde (oft in Kombination mit `NOT NULL` im Datenbankmodell).
-   **Eindeutigkeitsvalidierung:** Überprüfung, ob ein Wert eindeutig ist (oft durch `UNIQUE`-Constraints auf Datenbankebene unterstützt, aber auch in der Anwendungslogik implementiert, um dem Benutzer frühzeitig Feedback zu geben).
-   **Referenzielle Integritätsvalidierung:** Überprüfung, ob Fremdschlüsselwerte auf existierende Primärschlüsselwerte in anderen Tabellen verweisen (durch `FOREIGN KEY`-Constraints auf Datenbankebene erzwungen, kann aber auch in der Anwendungslogik vor dem Einfügen überprüft werden).
-   **Benutzerdefinierte Validierungen:** Überprüfung spezifischer Geschäftsregeln, die nicht durch Standard-Constraints abgedeckt werden können (z.B. ein Kunde muss mindestens 18 Jahre alt sein, um bestimmte Produkte zu bestellen).

## Implementierung von Validierungen

Validierungen können auf verschiedene Weisen implementiert werden:

-   **Direkt im Code der Anwendung:** Dies kann in den Controllern oder Service-Schichten des Backends erfolgen. Es bietet Flexibilität für komplexe Validierungslogik.
-   **Durch Framework-Funktionen:** Viele Webentwicklungs-Frameworks (z.B. Spring Boot, Django, Ruby on Rails) bieten eingebaute Mechanismen für die Validierung von Eingabedaten. Diese Frameworks erleichtern oft die Definition von Validierungsregeln (z.B. durch Annotationen oder Konfigurationsdateien) und die Anzeige von Fehlermeldungen für den Benutzer.
-   **Mit Validierungsbibliotheken:** Es gibt spezielle Bibliotheken, die die Implementierung von Validierungen erleichtern und eine Vielzahl von vordefinierten Validierungsregeln anbieten (z.B. Bean Validation API in Java).
-   **Datenbank-Trigger:** Können verwendet werden, um komplexe Validierungen auf Datenbankebene durchzuführen, die über Standard-Constraints hinausgehen. Trigger werden automatisch ausgelöst, wenn bestimmte Ereignisse in der Datenbank auftreten (z.B. Einfügen, Aktualisieren).

## Best Practices für Validierungen

-   **Sowohl client- als auch serverseitige Validierung implementieren:** Clientseitige Validierung verbessert die Benutzererfahrung, während serverseitige Validierung die Datenintegrität und Sicherheit gewährleistet.
-   **Klare und informative Fehlermeldungen anzeigen:** Benutzer sollten genau verstehen, welche Regeln verletzt wurden und wie sie die Eingabefehler korrigieren können.
-   **Validierungsregeln zentral definieren und wiederverwenden:** Dies erleichtert die Wartung und Konsistenz der Validierungen.
-   **Umgang mit Validierungsfehlern protokollieren:** Dies kann bei der Fehlersuche und der Überwachung der Datenqualität hilfreich sein.
-   **Die Validierungslogik sollte die Geschäftsregeln widerspiegeln:** Sie sollte nicht nur technische Formate überprüfen, sondern auch die semantische Gültigkeit der Daten im Kontext der Anwendung sicherstellen.
-   **Sicherheitsaspekte berücksichtigen:** Validierungen können auch dazu beitragen, Sicherheitslücken zu schließen, indem z.B. Eingaben auf schädliche Zeichen oder übermäßige Längen überprüft werden, um Injection-Angriffe zu verhindern.

## Zusammenspiel von Constraints und Validierungen

Constraints und Validierungen arbeiten zusammen, um die Datenintegrität zu gewährleisten, haben aber unterschiedliche Schwerpunkte:

-   **Constraints (Datenbankebene):** Erzwingen strukturelle Integrität und Beziehungen. Sie sind deklarativ und werden vom DBMS durchgesetzt.
-   **Validierungen (Anwendungsebene):** Überprüfen spezifische Geschäftsregeln und Formate, bevor die Daten in die Datenbank gelangen. Sie sind oft imperativ (im Code implementiert) und bieten flexiblere Fehlermeldungen und Benutzerinteraktion.

Eine robuste Anwendung verwendet beide Mechanismen, um ein hohes Maß an Datenqualität sicherzustellen.

## Fazit

Validierungen sind ein wesentlicher Bestandteil der Softwareentwicklung, um die Integrität und Qualität der Daten zu gewährleisten. Durch die Implementierung von Validierungen auf verschiedenen Ebenen der Anwendung und die Überprüfung verschiedener Aspekte der Daten können Entwickler verhindern, dass fehlerhafte oder inkonsistente Informationen in das System gelangen. In Kombination mit den auf Datenbankebene definierten Constraints bilden Validierungen ein umfassendes System zur Sicherstellung der Datenintegrität.

## Links und Quellen

-   **Data Validation - Wikipedia:** [https://de.wikipedia.org/wiki/Datenvalidierung](https://de.wikipedia.org/wiki/Datenvalidierung)
-   **Client-side validation - MDN Web Docs:** [https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) (Englischsprachige Ressource)
-   **Server-side validation - OWASP:** [https://owasp.org/www-project-top-ten/2017/a7_security_misconfiguration](https://owasp.org/www-project-top-ten/2017/a7_security_misconfiguration) (Englischsprachige Ressource, behandelt auch Sicherheitsaspekte)
-   **Bean Validation API (Java) - Bean Validation:** [https://beanvalidation.org/](https://beanvalidation.org/) (Englischsprachige Projektseite)
-   **Dokumentation der Validierungsmechanismen der verwendeten Webentwicklungs-Frameworks (z.B. Spring Validation, Django Forms, Ruby on Rails Active Record Validations).**
    -   **Spring Framework Validation:** Suche nach "Spring Boot Data Validation"
    -   **Django Form Validation:** [https://docs.djangoproject.com/en/dev/ref/forms/validation/](https://docs.djangoproject.com/en/dev/ref/forms/validation/) (Englischsprachig)
    -   **Ruby on Rails Active Record Validations:** [https://guides.rubyonrails.org/active_record_validations.html](https://guides.rubyonrails.org/active_record_validations.html) (Englischsprachig)
-   **Reguläre Ausdrücke (Regex) - verschiedene Online-Ressourcen und Tutorials.**
    -   **RegexOne:** [https://regexone.com/](https://regexone.com/) (Interaktives Englischsprachiges Tutorial)
    -   **Regular Expressions - MDN Web Docs:** [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions) (Englischsprachige Ressource)
-   **Artikel und Blogbeiträge zum Thema "Datenvalidierung in Softwareanwendungen".**

-----

> **Fehler gefunden?** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte bitte unten die "Fehler melden"-Funktion.
