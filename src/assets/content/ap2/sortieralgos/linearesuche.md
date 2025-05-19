# Konzipieren und Umsetzen von kundenspezifischen Softwareanwendungen: Einfache Such- und Sortier-Algorithmen kennen - Lineare Suche

## Einführung

Die lineare Suche (auch bekannt als sequenzielle Suche) ist ein einfacher Algorithmus zum Finden eines bestimmten Elements in einer Liste oder einem Array. Dabei wird jedes Element der Liste nacheinander überprüft, bis das gesuchte Element gefunden wird oder das Ende der Liste erreicht ist. Die lineare Suche ist intuitiv und einfach zu implementieren, aber für große Datenmengen kann sie ineffizient sein.

## Funktionsweise der linearen Suche

Die lineare Suche funktioniert wie folgt:

1.  Beginne am Anfang der Liste (oder des Arrays).
2.  Vergleiche das aktuelle Element mit dem gesuchten Element.
3.  Wenn das aktuelle Element mit dem gesuchten Element übereinstimmt, ist das Element gefunden und der Algorithmus gibt die Position (den Index) des Elements zurück.
4.  Wenn keine Übereinstimmung vorliegt, gehe zum nächsten Element in der Liste und wiederhole Schritt 2 und 3.
5.  Wenn das Ende der Liste erreicht ist und das gesuchte Element nicht gefunden wurde, gibt der Algorithmus typischerweise einen speziellen Wert zurück, um anzuzeigen, dass das Element nicht vorhanden ist (z.B. -1).

## Pseudocode für die lineare Suche

```pseudocode
FUNKTION lineareSuche(Liste, Zielwert)
    FÜR Index VON 0 BIS Länge(Liste) - 1 WIEDERHOLE
        WENN Liste[Index] GLEICH Zielwert DANN
            RÜCKGABE Index // Element gefunden an Position Index
        ENDWENN
    ENDFÜR
    RÜCKGABE -1 // Element nicht gefunden
ENDFUNKTION

// Beispielaufruf
zahlenListe ← [5, 2, 8, 1, 9, 4]
gesuchterWert ← 8
ergebnisIndex ← lineareSuche(zahlenListe, gesuchterWert)

WENN ergebnisIndex UNGLEICH -1 DANN
    AUSGABE "Element " + gesuchterWert + " gefunden an Position: " + ergebnisIndex
SONST
    AUSGABE "Element " + gesuchterWert + " nicht gefunden."
ENDWENN
```

## Beispiel in Python

```python
def lineare_suche(liste, zielwert):
    for index in range(len(liste)):
        if liste[index] == zielwert:
            return index
    return -1

zahlen_liste = [5, 2, 8, 1, 9, 4]
gesuchter_wert = 8
ergebnis_index = lineare_suche(zahlen_liste, gesuchter_wert)

if ergebnis_index != -1:
    print(f"Element {gesuchter_wert} gefunden an Position: {ergebnis_index}")
else:
    print(f"Element {gesuchter_wert} nicht gefunden.")
```

## Zeitliche Komplexität der linearen Suche

Die zeitliche Komplexität eines Algorithmus beschreibt, wie die Laufzeit des Algorithmus mit der Größe der Eingabe skaliert. Im Fall der linearen Suche:

-   **Best Case:** Das gesuchte Element befindet sich am Anfang der Liste. In diesem Fall ist nur ein Vergleich erforderlich. Die zeitliche Komplexität im besten Fall ist O(1) (konstante Zeit).

-   **Worst Case:** Das gesuchte Element befindet sich am Ende der Liste oder ist nicht in der Liste vorhanden. In diesem Fall müssen alle n Elemente der Liste überprüft werden (wobei n die Anzahl der Elemente in der Liste ist). Die zeitliche Komplexität im schlechtesten Fall ist O(n) (lineare Zeit).

-   **Average Case:** Im Durchschnitt muss die Hälfte der Elemente der Liste überprüft werden. Die zeitliche Komplexität im durchschnittlichen Fall ist ebenfalls O(n).

## Räumliche Komplexität der linearen Suche

Die räumliche Komplexität beschreibt den Speicherplatz, den der Algorithmus zusätzlich zum Speicherplatz der Eingabe benötigt. Die lineare Suche benötigt nur eine konstante Menge an zusätzlichem Speicherplatz für Variablen wie den Index und das gesuchte Element. Daher beträgt die räumliche Komplexität der linearen Suche O(1) (konstante Zeit).

## Anwendungsbereiche der linearen Suche

Obwohl die lineare Suche für große, unsortierte Datenmengen ineffizient sein kann, wird sie in folgenden Szenarien immer noch verwendet:

-   **Kleine Datenmengen:** Bei kleinen Listen oder Arrays ist der Overhead komplexerer Suchalgorithmen möglicherweise nicht gerechtfertigt, und die lineare Suche kann ausreichend schnell sein.
-   **Unsortierte Daten:** Die lineare Suche funktioniert sowohl bei sortierten als auch bei unsortierten Daten.
-   **Einfachheit der Implementierung:** Wenn die Entwicklungszeit kritisch ist und die Datenmenge klein bleibt, kann die einfache Implementierung der linearen Suche von Vorteil sein.
-   **Suche nach dem ersten Vorkommen:** Die lineare Suche findet auf natürliche Weise das erste Vorkommen eines Elements in der Liste.

## Vergleich mit anderen Suchalgorithmen

Für größere und sortierte Datenmengen sind effizientere Suchalgorithmen wie die binäre Suche (O(log n) zeitliche Komplexität) in der Regel vorzuziehen. Die binäre Suche erfordert jedoch, dass die Daten sortiert sind.

## Fazit

Die lineare Suche ist ein grundlegender und einfacher Suchalgorithmus, der eine Liste oder ein Array sequenziell durchsucht, um ein bestimmtes Element zu finden. Obwohl sie für große Datenmengen ineffizient sein kann, ist sie für kleine oder unsortierte Datenmengen sowie aufgrund ihrer einfachen Implementierung in bestimmten Situationen nützlich. Das Verständnis der linearen Suche ist ein wichtiger erster Schritt beim Erlernen von Suchalgorithmen.

## Links und Quellen

-   **Linear search - Wikipedia (Deutsch):** [https://de.wikipedia.org/wiki/Lineare_Suche](https://de.wikipedia.org/wiki/Lineare_Suche)
-   **Linear search - Wikipedia (Englischsprachig):** [https://en.wikipedia.org/wiki/Linear_search](https://en.wikipedia.org/wiki/Linear_search)
-   **Linear Search Algorithm - GeeksforGeeks:** [https://www.geeksforgeeks.org/linear-search/](https://www.geeksforgeeks.org/linear-search/) (Englischsprachig)
-   **Linear Search - Khan Academy:** [https://www.khanacademy.org/computing/computer-science/algorithms/search-algorithms/a/linear-search](https://www.khanacademy.org/computing/computer-science/algorithms/search-algorithms/a/linear-search) (Englischsprachig)
-   **Tutorials und Beispiele zur linearen Suche in verschiedenen Programmiersprachen (z.B. auf TutorialsPoint).**

-----

> **Fehler gefunden?** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
