# Konzipieren und Umsetzen von kundenspezifischen Softwareanwendungen: Einfache Such- und Sortier-Algorithmen kennen - Elementares Sortieren (Bubble Sort, Selection Sort, Insertion Sort)

## Einführung

Elementare Sortieralgorithmen sind einfache, intuitive Methoden, um eine Liste oder ein Array von Elementen in einer bestimmten Reihenfolge (z.B. aufsteigend oder absteigend) zu sortieren. Obwohl sie für große Datenmengen im Allgemeinen nicht effizient sind, sind sie nützlich zum Erlernen der Grundlagen des Sortierens und für kleinere Datensätze. Wir werden uns hier Bubble Sort, Selection Sort und Insertion Sort genauer ansehen.

## 1. Bubble Sort (Blasensortierung)

### Funktionsweise

Bubble Sort funktioniert, indem es wiederholt durch die Liste iteriert, benachbarte Elemente vergleicht und sie vertauscht, wenn sie in der falschen Reihenfolge sind. Größere Elemente "blubbern" dadurch langsam ans Ende der Liste, ähnlich wie Blasen im Wasser aufsteigen. Dieser Vorgang wird so lange wiederholt, bis die gesamte Liste sortiert ist.

### Pseudocode für Bubble Sort

```pseudocode
FUNKTION bubbleSort(Liste)
    n ← Länge(Liste)
    für i von 0 bis n-2 wiederhole
        // Letzte i Elemente sind bereits sortiert
        für j von 0 bis n-i-2 wiederhole
            wenn Liste[j] > Liste[j+1] dann
                vertausche Liste[j] und Liste[j+1]
            endewenn
        ende für
    ende für
END FUNKTION

// Beispielaufruf
zahlenListe ← [5, 1, 4, 2, 8]
bubbleSort(zahlenListe)
AUSGABE zahlenListe // [1, 2, 4, 5, 8]
```

### Zeitliche Komplexität

-   **Best Case:** O(n) - Wenn die Liste bereits sortiert ist, wird nur ein Durchlauf benötigt, um dies festzustellen (mit einer optimierten Implementierung, die prüft, ob in einem Durchlauf Vertauschungen stattgefunden haben).
-   **Average Case:** O(n²)
-   **Worst Case:** O(n²) - Wenn die Liste umgekehrt sortiert ist.

### Räumliche Komplexität

O(1) - Bubble Sort sortiert die Liste "in-place", d.h., es benötigt nur eine konstante Menge an zusätzlichem Speicherplatz für temporäre Variablen (z.B. zum Vertauschen von Elementen).

## 2. Selection Sort (Auswahlsortierung)

### Funktionsweise

Selection Sort funktioniert, indem es die unsortierte Liste wiederholt durchläuft, das kleinste (oder größte) Element findet und es an die korrekte Position am Anfang der unsortierten Teilliste setzt. Dieser Vorgang wird für den verbleibenden unsortierten Teil der Liste wiederholt, bis die gesamte Liste sortiert ist.

### Pseudocode für Selection Sort

```pseudocode
FUNKTION selectionSort(Liste)
    n ← Länge(Liste)
    für i von 0 bis n-2 wiederhole
        min_index ← i
        für j von i+1 bis n-1 wiederhole
            wenn Liste[j] < Liste[min_index] dann
                min_index ← j
            endewenn
        ende für
        // Vertausche das gefundene Minimum mit dem Element an der aktuellen Position i
        wenn min_index ≠ i dann
            vertausche Liste[i] und Liste[min_index]
        endewenn
    ende für
END FUNKTION

// Beispielaufruf
zahlenListe ← [5, 1, 4, 2, 8]
selectionSort(zahlenListe)
AUSGABE zahlenListe // [1, 2, 4, 5, 8]
```

### Zeitliche Komplexität

-   **Best Case:** O(n²)
-   **Average Case:** O(n²)
-   **Worst Case:** O(n²) - Selection Sort führt immer etwa n²/2 Vergleiche durch, unabhängig von der anfänglichen Sortierung der Liste.

### Räumliche Komplexität

O(1) - Selection Sort sortiert ebenfalls "in-place".

## 3. Insertion Sort (Einfügungssortierung)

### Funktionsweise

Insertion Sort funktioniert, indem es die Liste Element für Element aufbaut. Es betrachtet jeweils ein Element und fügt es an der richtigen Position in den bereits sortierten Teil der Liste ein. Man kann es sich vorstellen, wie das Sortieren von Spielkarten in der Hand.

### Pseudocode für Insertion Sort

```pseudocode
FUNKTION insertionSort(Liste)
    n ← Länge(Liste)
    für i von 1 bis n-1 wiederhole
        aktuelles_element ← Liste[i]
        j ← i - 1
        // Verschiebe Elemente des sortierten Teils, die größer als das aktuelle Element sind, nach rechts
        solange j >= 0 und Liste[j] > aktuelles_element wiederhole
            Liste[j+1] ← Liste[j]
            j ← j - 1
        ende solange
        // Füge das aktuelle Element an der richtigen Position ein
        Liste[j+1] ← aktuelles_element
    ende für
END FUNKTION

// Beispielaufruf
zahlenListe ← [5, 1, 4, 2, 8]
insertionSort(zahlenListe)
AUSGABE zahlenListe // [1, 2, 4, 5, 8]
```

### Zeitliche Komplexität

-   **Best Case:** O(n) - Wenn die Liste bereits sortiert ist, ist nur ein Durchlauf erforderlich.
-   **Average Case:** O(n²)
-   **Worst Case:** O(n²) - Wenn die Liste umgekehrt sortiert ist.

### Räumliche Komplexität

O(1) - Insertion Sort sortiert ebenfalls "in-place".

## Zusammenfassende Vergleichstabelle

| Algorithmus     | Best Case | Average Case | Worst Case | Räumliche Komplexität | Stabil    |
| --------------- | --------- | ------------ | ---------- | --------------------- | --------- |
| Bubble Sort     | O(n)      | O(n²)        | O(n²)      | O(1)                  | Ja        |
| Selection Sort  | O(n²)     | O(n²)        | O(n²)      | O(1)                  | Nein      |
| Insertion Sort  | O(n)      | O(n²)        | O(n²)      | O(1)                  | Ja        |

**Stabil:** Ein Sortieralgorithmus ist stabil, wenn Elemente mit gleichem Wert ihre relative Reihenfolge im sortierten Array beibehalten. Bubble Sort und Insertion Sort sind stabil, Selection Sort ist es im Allgemeinen nicht.

## Anwendungsbereiche elementarer Sortieralgorithmen

Obwohl diese Algorithmen für große Datenmengen ineffizient sind, können sie in folgenden Situationen nützlich sein:

-   **Kleine Datenmengen:** Für sehr kleine Listen oder Arrays ist die Einfachheit dieser Algorithmen oft wichtiger als die marginale Leistungsverbesserung komplexerer Algorithmen.
-   **Fast sortierte Daten (Insertion Sort):** Insertion Sort ist besonders effizient, wenn die Eingabeliste bereits fast sortiert ist.
-   **Lehrzwecke:** Diese Algorithmen sind hervorragend geeignet, um die Grundlagen des Sortierens zu verstehen.

## Fazit

Bubble Sort, Selection Sort und Insertion Sort sind elementare Sortieralgorithmen, die relativ einfach zu verstehen und zu implementieren sind. Sie haben jedoch eine quadratische zeitliche Komplexität im durchschnittlichen und schlechtesten Fall (O(n²)), was sie für große Datenmengen ineffizient macht. Für größere Datensätze sollten effizientere Algorithmen wie Merge Sort, Quick Sort oder Heap Sort verwendet werden. Das Verständnis dieser elementaren Algorithmen ist jedoch eine wichtige Grundlage für das Studium komplexerer Sortierverfahren.

## Links und Quellen

-   **Bubble sort - Wikipedia (Deutsch):** [https://de.wikipedia.org/wiki/Bubblesort](https://de.wikipedia.org/wiki/Bubblesort)
-   **Bubble Sort Algorithm - GeeksforGeeks:** [https://www.geeksforgeeks.org/bubble-sort/](https://www.geeksforgeeks.org/bubble-sort/) (Englischsprachig)
-   **Selection sort - Wikipedia (Deutsch):** [https://de.wikipedia.org/wiki/Selectionsort](https://de.wikipedia.org/wiki/Selectionsort)
-   **Selection Sort Algorithm - GeeksforGeeks:** [https://www.geeksforgeeks.org/selection-sort/](https://www.geeksforgeeks.org/selection-sort/) (Englischsprachig)
-   **Insertion sort - Wikipedia (Deutsch):** [https://de.wikipedia.org/wiki/Insertionsort](https://de.wikipedia.org/wiki/Insertionsort)
-   **Insertion Sort Algorithm - GeeksforGeeks:** [https://www.geeksforgeeks.org/insertion-sort/](https://www.geeksforgeeks.org/insertion-sort/) (Englischsprachig)
-   **Visualisierungen von Sortieralgorithmen:** Websites wie VisuAlgo ([https://visualgo.net/en/sorting](https://visualgo.net/en/sorting)) und Sorting.at ([https://www.sorting-algorithms.com/](https://www.sorting-algorithms.com/)) bieten anschauliche Darstellungen der Funktionsweise dieser Algorithmen.
-   **Tutorials und Beispiele zu diesen Sortieralgorithmen in verschiedenen Programmiersprachen (z.B. auf TutorialsPoint).**

-----

> **Fehler gefunden?** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
