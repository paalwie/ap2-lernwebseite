/*
  Öffne ein Terminal im Projektordner und führe aus:

    node generateMarkdownStructure.js
*/

const fs = require('fs');
const path = require('path');

const content = require('./src/assets/data/content.json');

function createMdFile(filePath) {
  const fullPath = path.join(__dirname, 'src', filePath);
  const dir = path.dirname(fullPath);
  fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(fullPath)) {
    fs.writeFileSync(fullPath, `# ${path.basename(fullPath, '.md')}\n\nInhalt folgt...`);
    console.log('✓ Datei erstellt:', fullPath);
  }
}

content.pruefungen.forEach(pruefung => {
  pruefung.unterthemen.forEach(ut => {
    ut.themen.forEach(thema => {
      thema.unterpunkte.forEach(punkt => {
        createMdFile(punkt.markdown);
      });
    });
  });
});

console.log('\nAlle Dateien wurden erstellt!');
