# Konzipieren und Umsetzen von kundenspezifischen Softwareanwendungen: Einfache Such- und Sortier-Algorithmen kennen - Binäre Suche

## Einführung

Die binäre Suche ist ein effizienter Algorithmus zum Finden eines bestimmten Elements in einer **sortierten** Liste oder einem **sortierten** Array. Im Gegensatz zur linearen Suche, die jedes Element sequenziell überprüft, nutzt die binäre Suche die Sortierung der Daten, um den Suchraum bei jedem Schritt exponentiell zu verkleinern. Dies führt zu einer deutlich schnelleren Suchzeit für große Datenmengen.

## Funktionsweise der binären Suche

Die binäre Suche funktioniert nach dem Prinzip "teile und herrsche" (divide and conquer):

1.  Beginne mit dem gesamten sortierten Array (oder der sortierten Liste).
2.  Bestimme den mittleren Index des aktuellen Suchbereichs.
3.  Vergleiche das Element am mittleren Index mit dem gesuchten Element (Zielwert).
4.  Es gibt drei Möglichkeiten:
    -   **Das mittlere Element ist gleich dem Zielwert:** Das Element wurde gefunden, und der Algorithmus gibt den mittleren Index zurück.
    -   **Das mittlere Element ist kleiner als der Zielwert:** Da das Array sortiert ist, muss sich der Zielwert (falls vorhanden) in der rechten Hälfte des aktuellen Suchbereichs befinden. Der linke Rand des Suchbereichs wird auf den Index direkt rechts von der Mitte gesetzt.
    -   **Das mittlere Element ist größer als der Zielwert:** Da das Array sortiert ist, muss sich der Zielwert (falls vorhanden) in der linken Hälfte des aktuellen Suchbereichs befinden. Der rechte Rand des Suchbereichs wird auf den Index direkt links von der Mitte gesetzt.
5.  Wiederhole die Schritte 2 bis 4, solange der linke Rand des Suchbereichs kleiner oder gleich dem rechten Rand ist.
6.  Wenn der Suchbereich leer wird (linker Rand > rechter Rand) und das Element nicht gefunden wurde, gibt der Algorithmus typischerweise einen speziellen Wert zurück, um anzuzeigen, dass das Element nicht vorhanden ist (z.B. -1).

## Pseudocode für die binäre Suche

```pseudocode
FUNKTION binäreSuche(sortierteListe, Zielwert)
    links ← 0
    rechts ← Länge(sortierteListe) - 1

    SOLANGE links <= rechts WIEDERHOLE
        mitte ← (links + rechts) / 2 (abgerundet)
        WENN sortierteListe[mitte] GLEICH Zielwert DANN
            RÜCKGABE mitte // Element gefunden an Position mitte
        SONST WENN sortierteListe[mitte] KLEINER ALS Zielwert DANN
            links ← mitte + 1 // Suche in der rechten Hälfte
        SONST // sortierteListe[mitte] GRÖSSER ALS Zielwert
            rechts ← mitte - 1 // Suche in der linken Hälfte
        ENDWENN
    ENDSOLANGE
    RÜCKGABE -1 // Element nicht gefunden
ENDFUNKTION

// Beispielaufruf
sortierteZahlenListe ← [1, 2, 4, 5, 8, 9]
gesuchterWert ← 5
ergebnisIndex ← binäreSuche(sortierteZahlenListe, gesuchterWert)

WENN ergebnisIndex UNGLEICH -1 DANN
    AUSGABE "Element " + gesuchterWert + " gefunden an Position: " + ergebnisIndex
SONST
    AUSGABE "Element " + gesuchterWert + " nicht gefunden."
ENDWENN
```

## Beispiel in Python

```python
def binaere_suche(sortierte_liste, zielwert):
    links = 0
    rechts = len(sortierte_liste) - 1

    while links <= rechts:
        mitte = (links + rechts) // 2
        if sortierte_liste[mitte] == zielwert:
            return mitte
        elif sortierte_liste[mitte] < zielwert:
            links = mitte + 1
        else:
            rechts = mitte - 1
    return -1

sortierte_zahlen_liste = [1, 2, 4, 5, 8, 9]
gesuchter_wert = 5
ergebnis_index = binaere_suche(sortierte_zahlen_liste, gesuchter_wert)

if ergebnis_index != -1:
    print(f"Element {gesuchter_wert} gefunden an Position: {ergebnis_index}")
else:
    print(f"Element {gesuchter_wert} nicht gefunden.")
```

## Zeitliche Komplexität der binären Suche

Die binäre Suche ist deutlich effizienter als die lineare Suche für große Datenmengen:

-   **Best Case:** Das gesuchte Element befindet sich in der Mitte des Arrays. In diesem Fall ist nur ein Vergleich erforderlich. Die zeitliche Komplexität im besten Fall ist O(1).

-   **Worst Case:** Das gesuchte Element befindet sich nicht im Array oder am äußersten Ende, sodass der Suchbereich so lange halbiert wird, bis er leer ist. Die Anzahl der Schritte, die erforderlich sind, um ein Array der Größe n auf 1 zu reduzieren, ist logarithmisch zur Basis 2 (log₂(n)). Die zeitliche Komplexität im schlechtesten Fall ist O(log n).

-   **Average Case:** Die durchschnittliche Anzahl der Vergleiche ist ebenfalls logarithmisch. Die zeitliche Komplexität im durchschnittlichen Fall ist O(log n).

## Räumliche Komplexität der binären Suche

Die iterative Implementierung der binären Suche (wie im obigen Pseudocode und Python-Beispiel) benötigt nur eine konstante Menge an zusätzlichem Speicherplatz für Variablen wie `links`, `rechts` und `mitte`. Daher beträgt die räumliche Komplexität O(1).

Eine rekursive Implementierung der binären Suche hätte eine räumliche Komplexität von O(log n) aufgrund des Speicherbedarfs für den Aufrufstapel der rekursiven Funktionen. Die iterative Version ist in Bezug auf den Speicherplatz effizienter.

## Voraussetzungen für die binäre Suche

Der entscheidende Nachteil der binären Suche im Vergleich zur linearen Suche ist, dass die **Datenmenge sortiert sein muss**. Wenn die Daten nicht sortiert sind, muss ein Sortieralgorithmus angewendet werden, bevor die binäre Suche durchgeführt werden kann, was die Gesamteffizienz in bestimmten Fällen beeinträchtigen kann.

## Anwendungsbereiche der binären Suche

Die binäre Suche wird häufig in folgenden Szenarien eingesetzt:

-   **Suche in sortierten Arrays oder Listen:** Dies ist der primäre Anwendungsfall.
-   **Suche in Datenbanken:** Viele Datenbankindizes basieren auf ähnlichen Prinzipien wie die binäre Suche, um schnelle Suchvorgänge zu ermöglichen.
-   **Suche in Wörterbüchern und Lexika:** Da diese in alphabetischer Reihenfolge sortiert sind, kann die binäre Suche verwendet werden, um Wörter effizient zu finden.
-   **Numerische Algorithmen:** Die binäre Suche kann auch in numerischen Algorithmen verwendet werden, um in einem sortierten Bereich von Werten nach einer Lösung zu suchen (z.B. bei der Suche nach der Wurzel einer Funktion).

## Vergleich mit der linearen Suche

| Merkmal             | Lineare Suche | Binäre Suche |
| ------------------- | ------------- | ------------- |
| Daten müssen sortiert sein | Nein          | Ja            |
| Zeitliche Komplexität (Best Case) | O(1)          | O(1)          |
| Zeitliche Komplexität (Worst Case) | O(n)          | O(log n)      |
| Räumliche Komplexität (iterativ) | O(1)          | O(1)          |
| Räumliche Komplexität (rekursiv) | O(1)          | O(log n)      |
| Implementierung     | Einfach       | Moderat       |
| Effizienz bei großen Datenmengen | Ineffizient   | Effizient     |

## Fazit

Die binäre Suche ist ein sehr effizienter Suchalgorithmus für **sortierte** Datenmengen. Ihre logarithmische zeitliche Komplexität macht sie für große Datenmengen der linearen Suche deutlich überlegen. Es ist jedoch entscheidend zu beachten, dass die binäre Suche eine sortierte Eingabe erfordert. Das Verständnis und die Anwendung der binären Suche sind wichtige Fähigkeiten für jeden Softwareentwickler.

## Links und Quellen

-   **Binary search algorithm - Wikipedia (Deutsch):** [https://de.wikipedia.org/wiki/Bin%C3%A4re_Suche](https://de.wikipedia.org/wiki/Bin%C3%A4re_Suche)
-   **Binary search algorithm - Wikipedia (Englischsprachig):** [https://en.wikipedia.org/wiki/Binary_search_algorithm](https://en.wikipedia.org/wiki/Binary_search_algorithm)
-   **Binary Search Algorithm - GeeksforGeeks:** [https://www.geeksforgeeks.org/binary-search/](https://www.geeksforgeeks.org/binary-search/) (Englischsprachig)
-   **Binary Search - Khan Academy:** [https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search](https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search) (Englischsprachig)
-   **Tutorials und Beispiele zur binären Suche in verschiedenen Programmiersprachen (z.B. auf TutorialsPoint).**

-----

> **Fehler gefunden?** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
