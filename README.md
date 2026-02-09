# AP2-Lernwebseite

> Lernplattform zur Vorbereitung auf die AP2-Prüfung für Fachinformatiker Anwendungsentwicklung <br>
> Link: https://ap2-lernwebseite.netlify.app/content

## 📚 Über das Projekt

Eine Angular-basierte Webseite mit strukturierten Lernmaterialien für die Abschlussprüfung Teil 2 (AP2) der FIAE-Ausbildung. Die Seite ist auf [Netlify](https://www.netlify.com/) gehostet und bietet eine übersichtliche Navigation durch verschiedene Themenbereiche.

## 🛠️ Technologien

- **Angular** 19.2.3
- **TypeScript** (~50%)
- **CSS** (~36%)
- **HTML** (~12%)
- **Netlify** für Hosting

## 🚀 Installation & Entwicklung

### Voraussetzungen
- Node.js (LTS-Version empfohlen)
- npm oder yarn
- Angular CLI: `npm install -g @angular/cli`

### Lokale Entwicklung

```bash
# Repository klonen
git clone https://github.com/paalwie/ap2-lernwebseite.git
cd ap2-lernwebseite

# Dependencies installieren
npm install

# Development Server starten
ng serve
```

Die Anwendung läuft dann auf `http://localhost:4200/` und lädt automatisch neu bei Änderungen.

## 📦 Deployment auf Netlify

### Automatisches Deployment via Git

```bash
# Änderungen committen
git add .
git commit -m "Deine Commit-Nachricht"

# Zu GitHub pushen
git push
```

📦 **Netlify deployt automatisch nach 1–2 Minuten.**

### Seite öffnen

```bash
netlify open:site
```

Führe diesen Befehl in der Konsole aus und klicke auf den generierten Link.

## ✅ Todo-Liste

- [ ] "Fehler melden"-Funktion implementieren
- [ ] Optische Anpassung: Aktive Links hervorheben
- [ ] Routing-Pfad für `/content` anpassen (Reload-Fix)
- [ ] Mehr Lerninhalte hinzufügen

## 📂 Projektstruktur

```
ap2-lernwebseite/
├── src/
│   ├── app/              # Angular Components
│   ├── assets/           # Statische Dateien
│   └── environments/     # Umgebungskonfigurationen
├── public/               # Öffentliche Dateien
├── netlify.toml          # Netlify-Konfiguration
├── angular.json          # Angular-Projektkonfiguration
└── package.json          # Dependencies
```

## 🔧 Nützliche Befehle

```bash
# Build für Produktion
ng build

# Tests ausführen
ng test

# Code-Qualität prüfen
ng lint

# Markdown-Struktur generieren (Custom Script)
node generateMarkdownStructure.js
```

## 📝 Weitere Informationen

Für detaillierte Infos zur Angular CLI:
- [Angular CLI Dokumentation](https://angular.dev/tools/cli)
- [Angular CLI Command Reference](https://angular.dev/cli)

## 🤝 Beitragen

Issues und Pull Requests sind willkommen!
