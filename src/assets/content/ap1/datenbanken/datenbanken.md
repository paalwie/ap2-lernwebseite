# Relationale und nicht-relationale Datenbanken, NoSQL Datenbanken

## Einführung

Datenbanken sind das Rückgrat vieler IT-Lösungen und dienen der persistenten Speicherung und Verwaltung von Daten. Es gibt verschiedene Arten von Datenbankmodellen, die sich in ihrer Struktur, Organisation und den Anwendungsfällen, für die sie optimiert sind, grundlegend unterscheiden. Die zwei Hauptkategorien sind relationale und nicht-relationale Datenbanken, wobei NoSQL-Datenbanken eine wichtige Untergruppe der nicht-relationalen Datenbanken darstellen.

## Grundlagen

**1. Relationale Datenbanken:**

- **Modell:** Basieren auf dem relationalen Modell, das Daten in Tabellen (Relationen) mit Zeilen (Datensätzen) und Spalten (Attributen) organisiert. Beziehungen zwischen Tabellen werden über Schlüssel (Primär- und Fremdschlüssel) definiert.
- **Struktur:** Schema-orientiert, d.h., die Struktur der Tabellen (Spalten, Datentypen, Beziehungen) muss im Voraus definiert werden.
- **Sprache:** SQL (Structured Query Language) ist die Standardsprache für die Abfrage und Manipulation von Daten.
- **Eigenschaften (ACID):** Legen Wert auf Atomicity (Unteilbarkeit von Transaktionen), Consistency (Gültigkeit von Daten nach Transaktionen), Isolation (Unabhängigkeit paralleler Transaktionen) und Durability (Dauerhaftigkeit von Daten).
- **Vorteile:** Gut geeignet für strukturierte Daten mit klaren Beziehungen, hohe Datenintegrität und Konsistenz, ausgereifte Werkzeuge und eine breite Entwicklerbasis.
- **Nachteile:** Kann bei sehr großen Datenmengen und hochskalierbaren Anwendungen mit komplexen oder sich ändernden Datenstrukturen an ihre Grenzen stoßen (Skalierbarkeit, Performance).
- **Beispiele:** MySQL, PostgreSQL, Oracle Database, Microsoft SQL Server.

**2. Nicht-relationale Datenbanken (NoSQL):**

- **Modell:** Umfassen verschiedene Datenmodelle, die nicht auf Tabellen und SQL basieren. Sie bieten mehr Flexibilität in Bezug auf Datenstruktur und Skalierbarkeit.
- **Struktur:** Oft schemalos oder schema-flexibel, d.h., die Struktur der Daten kann sich im Laufe der Zeit ändern und ist nicht zwingend einheitlich über alle Datensätze hinweg.
- **Sprache:** Verwenden oft eigene, spezifische Abfragesprachen oder APIs.
- **Eigenschaften (BASE):** Legen Wert auf Basically Available (hohe Verfügbarkeit), Soft State (Zustand kann sich im Laufe der Zeit ändern) und Eventually Consistent (Daten werden mit der Zeit konsistent).
- **Vorteile:** Hohe Skalierbarkeit (oft horizontal), Flexibilität bei sich ändernden Datenstrukturen, gute Performance für bestimmte Anwendungsfälle (z.B. große Mengen unstrukturierter oder semistrukturierter Daten).
- **Nachteile:** Datenintegrität und Konsistenz können weniger streng sein als bei relationalen Datenbanken, weniger ausgereifte Werkzeuge und eine fragmentiertere Entwicklerbasis.
- **Kategorien (siehe unten: NoSQL Datenbanken).

**3. NoSQL Datenbanken (Untergruppe der nicht-relationalen Datenbanken):**

NoSQL ("Not Only SQL") Datenbanken sind eine Kategorie von nicht-relationalen Datenbanken, die entwickelt wurden, um die Skalierbarkeits- und Flexibilitätsanforderungen moderner Anwendungen besser zu erfüllen. Sie verwenden unterschiedliche Datenmodelle:

- **Key-Value Stores:** Speichern Daten als Schlüssel-Wert-Paare (z.B. Redis, Memcached). Sehr schnell für einfache Lese- und Schreiboperationen.
- **Dokumentenorientierte Datenbanken:** Speichern Daten als JSON-ähnliche Dokumente (z.B. MongoDB, Couchbase). Gut für flexible Schemata und komplexe Datenstrukturen.
- **Spaltenorientierte Datenbanken:** Speichern Daten in Spalten statt in Zeilen (z.B. Apache Cassandra, HBase). Optimiert für analytische Abfragen über große Datenmengen.
- **Graphenorientierte Datenbanken:** Speichern Daten als Knoten und Kanten, um Beziehungen zwischen Datenpunkten darzustellen (z.B. Neo4j). Ideal für Anwendungen mit komplexen Beziehungen (z.B. soziale Netzwerke, Empfehlungssysteme).

> **Hinweis:** Die Wahl zwischen relationalen und nicht-relationalen (NoSQL) Datenbanken hängt stark von den spezifischen Anforderungen der Anwendung ab, einschließlich der Art der Daten, der benötigten Skalierbarkeit, der Komplexität der Beziehungen und den Prioritäten in Bezug auf Konsistenz und Verfügbarkeit.

## Beispiel oder Anwendungsfall

- **Relational:** Eine Datenbank für ein Warenwirtschaftssystem, das strukturierte Daten wie Kundeninformationen, Produktkatalog und Bestellungen mit klaren Beziehungen verwaltet. SQL wird für komplexe Abfragen und Berichte verwendet.
- **Key-Value Store (NoSQL):** Eine Datenbank zum Speichern von Benutzer-Session-Informationen in einer Webanwendung, wo schnelle Lese- und Schreibzugriffe auf Basis eines eindeutigen Schlüssels erforderlich sind.
- **Dokumentenorientiert (NoSQL):** Eine Datenbank zum Speichern von Produktbeschreibungen auf einer E-Commerce-Plattform, wo die Struktur der Beschreibungen je nach Produkt variieren kann und Flexibilität im Schema wichtig ist.
- **Graphenorientiert (NoSQL):** Eine Datenbank für ein soziales Netzwerk, um die Beziehungen zwischen Nutzern (Freundschaften, Follower) und deren Interaktionen effizient abzufragen.

## Weiterführende Links & Quellen

  - [Wikipedia: Relationales Datenbankmodell](https://de.wikipedia.org/wiki/Relationales_Datenbankmodell)
  - [Wikipedia: NoSQL](https://de.wikipedia.org/wiki/NoSQL)
  - [Vergleich von relationalen und NoSQL Datenbanken](https://www.talend.com/de/resources/sql-vs-nosql/) 
  - [Überblick über verschiedene NoSQL Datenbanktypen (Amazon Web Services)](https://aws.amazon.com/de/nosql/)

-----

> **Fehler gefunden?:** Falls du hier auf dieser Seite einen inhaltlichen Fehler gefunden hast, verwende bitte unten die "Fehler melden"-Funktion.
