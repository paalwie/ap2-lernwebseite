# ER-Modell: Attribute, Beziehungen, Kardinalitäten, referenzielle Integrität, Schlüssel und Weitergaben

## Einführung

Das Entity-Relationship-Modell (ER-Modell) ist ein konzeptionelles Datenmodellierungswerkzeug, das verwendet wird, um die Struktur einer Datenbank zu visualisieren und zu organisieren. Es identifiziert die wichtigsten Entitäten (Objekte oder Konzepte), ihre Attribute (Eigenschaften) und die Beziehungen zwischen diesen Entitäten. Das ER-Modell ist ein wichtiger Schritt vor der eigentlichen Erstellung einer relationalen Datenbank.

## Grundlagen

**1. Entität (Entity):**

- Repräsentiert ein reales Objekt, eine Person, einen Ort, ein Ereignis oder ein Konzept, über das Informationen gespeichert werden sollen (z.B. Kunde, Produkt, Bestellung).
- Wird in einem ER-Diagramm als Rechteck dargestellt.

**2. Attribut (Attribute):**

- Eine Eigenschaft einer Entität, die diese beschreibt (z.B. für die Entität "Kunde": KundenID, Name, Adresse).
- Wird in einem ER-Diagramm als Ellipse dargestellt und mit einer Linie zur zugehörigen Entität verbunden.
- **Primärschlüssel (Primary Key):** Ein Attribut oder eine Kombination von Attributen, das jede Instanz einer Entität eindeutig identifiziert (z.B. KundenID für die Entität "Kunde"). Wird oft unterstrichen.

**3. Beziehung (Relationship):**

- Eine Verbindung zwischen zwei oder mehr Entitäten, die eine Interaktion oder Abhängigkeit darstellt (z.B. ein "Kunde" gibt eine "Bestellung" auf).
- Wird in einem ER-Diagramm als Raute dargestellt und durch Linien mit den beteiligten Entitäten verbunden. Die Beziehung kann einen Namen haben, der die Art der Verbindung beschreibt.

**4. Kardinalität (Cardinality):**

- Gibt die Anzahl der Instanzen einer Entität an, die mit einer Instanz einer anderen Entität in einer Beziehung stehen können.
- Wird auf den Verbindungslinien zwischen Entitäten und Beziehung angegeben:
    - **1:1 (Eins-zu-Eins):** Eine Instanz der ersten Entität ist mit höchstens einer Instanz der zweiten Entität verbunden und umgekehrt.
    - **1:n (Eins-zu-Viele):** Eine Instanz der ersten Entität kann mit null, einer oder mehreren Instanzen der zweiten Entität verbunden sein, aber eine Instanz der zweiten Entität ist mit genau einer Instanz der ersten Entität verbunden.
    - **n:m (Viele-zu-Viele):** Eine Instanz der ersten Entität kann mit null, einer oder mehreren Instanzen der zweiten Entität verbunden sein, und eine Instanz der zweiten Entität kann ebenfalls mit null, einer oder mehreren Instanzen der ersten Entität verbunden sein. Diese Beziehung wird in relationalen Datenbanken typischerweise durch eine **Verbindungstabelle** (auch Junction Table oder Bridge Table genannt) implementiert, die zwei 1:n-Beziehungen zu den ursprünglichen Entitäten aufweist.

**5. Fremdschlüssel (Foreign Key):**

- Ein Attribut (oder eine Kombination von Attributen) in einer Tabelle, das auf den Primärschlüssel einer anderen Tabelle verweist. Fremdschlüssel werden verwendet, um Beziehungen zwischen Tabellen in einer relationalen Datenbank herzustellen und die referenzielle Integrität zu gewährleisten.

**6. Referenzielle Integrität (Referential Integrity):**

- Ein Datenbankkonzept, das sicherstellt, dass die Beziehungen zwischen Tabellen gültig bleiben. Dies bedeutet, dass der Wert eines Fremdschlüssels in einer Tabelle entweder auf einen existierenden Primärschlüsselwert in der referenzierten Tabelle verweisen muss oder NULL sein darf (wenn die Beziehung optional ist).

**7. Aktualisierungsweitergabe (Update Propagation):**

- Definiert, was geschehen soll, wenn der Primärschlüsselwert einer referenzierten Zeile geändert wird. Mögliche Optionen sind:
    - **CASCADE:** Die Änderung wird automatisch auf alle entsprechenden Fremdschlüsselwerte in den verweisenden Tabellen übertragen.
    - **RESTRICT/NO ACTION:** Die Aktualisierung des Primärschlüssels wird verhindert, wenn noch verweisende Fremdschlüsselwerte existieren.
    - **SET NULL:** Die entsprechenden Fremdschlüsselwerte in den verweisenden Tabellen werden auf NULL gesetzt.
    - **SET DEFAULT:** Die entsprechenden Fremdschlüsselwerte werden auf einen vordefinierten Standardwert gesetzt.

**8. Löschweitergabe (Delete Propagation):**

- Definiert, was geschehen soll, wenn eine Zeile mit einem referenzierten Primärschlüsselwert gelöscht wird. Mögliche Optionen sind analog zur Aktualisierungsweitergabe:
    - **CASCADE:** Die entsprechenden Zeilen mit den verweisenden Fremdschlüsselwerten in den anderen Tabellen werden ebenfalls gelöscht.
    - **RESTRICT/NO ACTION:** Das Löschen der Zeile mit dem Primärschlüssel wird verhindert, wenn noch verweisende Fremdschlüsselwerte existieren.
    - **SET NULL:** Die entsprechenden Fremdschlüsselwerte in den verweisenden Tabellen werden auf NULL gesetzt.
    - **SET DEFAULT:** Die entsprechenden Fremdschlüsselwerte werden auf einen vordefinierten Standardwert gesetzt.

> **Hinweis:** Das ER-Modell ist ein mächtiges Werkzeug für die Planung und den Entwurf von relationalen Datenbanken. Die korrekte Identifizierung von Entitäten, Attributen und Beziehungen sowie die Definition von Kardinalitäten und referenzieller Integrität sind entscheidend für eine gut strukturierte und funktionierende Datenbank.

## Beispiel oder Anwendungsfall

Betrachten wir ein einfaches Beispiel für ein Bestellsystem:

- **Entitäten:** Kunde, Bestellung, Produkt
- **Attribute:**
    - Kunde: KundenID (PK), Name, Adresse
    - Bestellung: BestellID (PK), KundenID (FK), Bestelldatum
    - Produkt: ProduktID (PK), Name, Preis
- **Beziehungen:**
    - Ein Kunde kann mehrere Bestellungen aufgeben (1:n Beziehung von Kunde zu Bestellung).
    - Eine Bestellung kann mehrere Produkte enthalten (n:m Beziehung zwischen Bestellung und Produkt, implementiert über eine Verbindungstabelle "Bestellposition").
- **Kardinalitäten:** Wie oben beschrieben (1:n, n:m).
- **Referenzielle Integrität:** Die `KundenID` in der Tabelle `Bestellung` muss auf eine existierende `KundenID` in der Tabelle `Kunde` verweisen.
- **Aktualisierungsweitergabe (Kunde.KundenID):** Bei Änderung der `KundenID` in `Kunde` könnte `CASCADE` gewählt werden, um die `KundenID` in allen zugehörigen Bestellungen zu aktualisieren.
- **Löschweitergabe (Kunde):** Beim Löschen eines Kunden könnte `RESTRICT` gewählt werden, um das Löschen zu verhindern, solange noch Bestellungen für diesen Kunden existieren.

## Weiterführende Links & Quellen

  - [Wikipedia: Entity-Relationship-Modell](https://de.wikipedia.org/wiki/Entity-Relationship-Modell)
  - [Grundlagen des ER-Modells (mit Diagrammbeispielen)](https://www.lucidchart.com/pages/de/was-ist-ein-entity-relationship-diagramm)
  - [Primär- und Fremdschlüssel in Datenbanken](https://www.w3schools.com/sql/sql_primarykey.asp) (Englischsprachige Ressource).
  - [Datenbank Grundlagen: Entity-Relationship-Modell](https://www.datenbank-grundlagen.de/entity-relationship-modell.html)

-----

> **Fehler gefunden?:** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
