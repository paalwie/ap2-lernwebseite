# Programmieren von Softwarelösungen: Qualitätssicherung und Tests - Black Box / White Box Tests

## Einführung

Qualitätssicherung und Tests sind unerlässliche Bestandteile des Softwareentwicklungsprozesses, um sicherzustellen, dass die entwickelte Software den Anforderungen entspricht, zuverlässig funktioniert und frei von schwerwiegenden Fehlern ist. Eine wichtige Unterscheidung in der Testmethodik ist die zwischen Black-Box- und White-Box-Tests. Diese beiden Ansätze unterscheiden sich grundlegend in der Art und Weise, wie die Software getestet wird und welche Kenntnisse des internen Aufbaus der Software dabei eine Rolle spielen.

## Black-Box-Tests

Black-Box-Tests (auch funktionale Tests genannt) sind eine Testmethode, bei der die Software aus der Perspektive eines Endbenutzers betrachtet wird, **ohne Kenntnisse der internen Struktur, des Designs oder der Implementierung** der Software. Der Tester interagiert mit der Software über ihre Benutzeroberfläche (oder APIs) und überprüft, ob die Ausgaben für gegebene Eingaben den erwarteten Ergebnissen entsprechen.

**Merkmale von Black-Box-Tests:**

-   **Fokus auf Funktionalität:** Geprüft wird, ob die Software die spezifizierten Funktionen korrekt erfüllt.
-   **Keine Kenntnisse des Quellcodes erforderlich:** Tester benötigen keinen Einblick in den internen Aufbau der Software.
-   **Testbasis sind Spezifikationen und Anforderungen:** Die Testfälle werden auf Basis der funktionalen Anforderungen, Benutzergeschichten oder Spezifikationen der Software erstellt.
-   **Simulation der Benutzerinteraktion:** Tester agieren wie Endbenutzer und prüfen die Software aus deren Sicht.
-   **Geeignet für alle Teststufen:** Black-Box-Tests können auf allen Teststufen angewendet werden (z.B. Unit-, Integrations-, System- und Akzeptanztests).

**Vorteile von Black-Box-Tests:**

-   **Benutzerzentrierte Perspektive:** Fehler, die die Benutzererfahrung beeinträchtigen, werden leichter gefunden.
-   **Unabhängigkeit von der Implementierung:** Tests bleiben auch bei Änderungen des Quellcodes (Refactoring) gültig, solange die Funktionalität gleich bleibt.
-   **Einfache Testfallerstellung für funktionale Aspekte:** Die Erstellung von Testfällen basierend auf Anforderungen ist oft intuitiver.
-   **Geeignet für Tester ohne Programmierkenntnisse:** Funktionale Tester müssen nicht unbedingt programmieren können.

**Nachteile von Black-Box-Tests:**

-   **Mögliche unvollständige Abdeckung:** Ohne Kenntnisse des internen Aufbaus ist es schwierig sicherzustellen, dass alle Codepfade und Zustände getestet werden.
-   **Ineffizienz bei der Identifizierung der Fehlerursache:** Wenn ein Fehler gefunden wird, kann die Suche nach der Ursache im Quellcode zeitaufwendig sein.
-   **Testfallerstellung kann aufwendig sein für komplexe Funktionen:** Eine umfassende Testabdeckung komplexer Funktionen kann viele Testfälle erfordern.
-   **Verborgenes Verhalten und Edge Cases werden möglicherweise nicht getestet:** Fehler in nicht dokumentierten oder selten genutzten Bereichen können übersehen werden.

**Beispiele für Black-Box-Testtechniken:**

-   **Äquivalenzklassenanalyse:** Aufteilung der Eingabedaten in Gruppen (Äquivalenzklassen), bei denen erwartet wird, dass die Software sich gleich verhält.
-   **Grenzwertanalyse:** Testen an den Grenzen der Eingabebereiche und in deren unmittelbarer Nähe.
-   **Entscheidungstabellentests:** Geeignet für komplexe logische Bedingungen und Entscheidungen.
-   **Zustandsbasierte Tests:** Testen des Verhaltens der Software in verschiedenen Zuständen und Übergängen zwischen diesen Zuständen.
-   **Use-Case-Tests:** Testen der Software anhand von typischen Anwendungsszenarien (Use Cases).
-   **Explorative Tests:** Informelles Testen, bei dem Tester gleichzeitig lernen, testen und Testfälle entwerfen.

## White-Box-Tests

White-Box-Tests (auch strukturelle Tests oder Glasbox-Tests genannt) sind eine Testmethode, bei der die **interne Struktur, das Design und die Implementierung** der Software bekannt sind und zur Testfallerstellung genutzt werden. Ziel ist es, die interne Logik der Software zu prüfen und sicherzustellen, dass alle Codepfade, Bedingungen und Anweisungen korrekt funktionieren.

**Merkmale von White-Box-Tests:**

-   **Fokus auf interne Struktur und Logik:** Geprüft wird, wie die Software intern funktioniert.
-   **Kenntnisse des Quellcodes erforderlich:** Tester müssen den Quellcode verstehen.
-   **Testbasis ist der Quellcode:** Die Testfälle werden auf Basis der Code-Struktur, der Kontrollflüsse und der Datenflüsse erstellt.
-   **Ziel ist die Abdeckung des Codes:** Es wird versucht, einen möglichst hohen Grad an Codeabdeckung (z.B. Anweisungs-, Zweig- oder Pfadüberdeckung) zu erreichen.
-   **Primär auf den unteren Teststufen angewendet:** White-Box-Tests sind typischerweise im Unit- und Integrationstest üblich.

**Vorteile von White-Box-Tests:**

-   **Bessere Codeabdeckung:** Es ist einfacher sicherzustellen, dass alle Teile des Codes mindestens einmal ausgeführt werden.
-   **Effektive Fehlerfindung in der internen Logik:** Fehler in Kontrollstrukturen, Schleifen, Bedingungen und Berechnungen werden gut aufgedeckt.
-   **Optimierung des Codes möglich:** Durch die Analyse der Codeabdeckung können ineffiziente oder nicht erreichte Codeabschnitte identifiziert werden.
-   **Besseres Verständnis des Codes:** Tester, die White-Box-Tests durchführen, gewinnen ein tieferes Verständnis der Software.

**Nachteile von White-Box-Tests:**

-   **Komplexität und Zeitaufwand:** Die Erstellung von White-Box-Testfällen kann komplex und zeitaufwendig sein, insbesondere für große und komplexe Softwaresysteme.
-   **Fokus auf die Implementierung, nicht auf die Spezifikation:** Es besteht die Gefahr, dass nur getestet wird, was der Code tut, und nicht, ob er das Richtige tut (gemäß den Anforderungen).
-   **Änderungen im Code erfordern Anpassung der Tests:** Bei jeder Änderung des Quellcodes müssen die White-Box-Tests möglicherweise angepasst werden.
-   **Nicht immer praktikabel für alle Teststufen:** Auf höheren Teststufen (System- und Akzeptanztests) ist der White-Box-Ansatz oft nicht praktikabel oder sinnvoll.

**Beispiele für White-Box-Testtechniken:**

-   **Anweisungstest (Statement Coverage):** Sicherstellen, dass jede Anweisung im Code mindestens einmal ausgeführt wird.
-   **Zweigtest (Branch Coverage / Decision Coverage):** Sicherstellen, dass jede mögliche Ausgangsrichtung jeder Entscheidung (z.B. in `if`- oder `case`-Anweisungen) mindestens einmal ausgeführt wird.
-   **Pfadtest (Path Coverage):** Sicherstellen, dass jeder mögliche Ausführungspfad durch den Code mindestens einmal durchlaufen wird (dies kann bei komplexen Programmen sehr aufwendig sein).
-   **Bedingungstest (Condition Coverage):** Testen der einzelnen Bedingungen innerhalb von Entscheidungen auf ihre Wahr- und Falsch-Ausgänge.
-   **Datenflusstest (Data Flow Testing):** Untersuchen des Flusses von Variablenwerten durch den Code.

## Kombination von Black-Box- und White-Box-Tests

In der Praxis ist eine **Kombination aus Black-Box- und White-Box-Testmethoden** am effektivsten, um eine umfassende Qualitätssicherung zu gewährleisten.

-   **Black-Box-Tests** stellen sicher, dass die Software die funktionalen Anforderungen erfüllt und aus Benutzersicht korrekt funktioniert.
-   **White-Box-Tests** stellen sicher, dass die interne Struktur und Logik der Software korrekt implementiert sind und eine hohe Codeabdeckung erreicht wird.

Die Entscheidung, welche Testmethoden in welchem Umfang eingesetzt werden, hängt von verschiedenen Faktoren ab, wie z.B. der Kritikalität der Software, dem Budget, dem Zeitrahmen und den verfügbaren Ressourcen.

## Fazit

Black-Box- und White-Box-Tests sind zwei komplementäre Ansätze in der Softwarequalitätssicherung. Black-Box-Tests konzentrieren sich auf die Funktionalität aus Benutzersicht ohne Kenntnisse der internen Struktur, während White-Box-Tests die interne Logik und den Quellcode der Software untersuchen. Eine ausgewogene Kombination beider Testmethoden ist entscheidend, um eine hohe Softwarequalität zu erreichen und sowohl funktionale als auch strukturelle Fehler effektiv zu finden.

-----

> **Fehler gefunden?:** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.

