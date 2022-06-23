# SPFx Template

## Vorbereitungen

1. Installiere [Node v16](https://nodejs.org/dist/v16.15.1)
2. Installiere [Python 2](https://www.python.org/downloads/windows)
3. Installiere [Visual Studio Code](https://code.visualstudio.com/download)
4. Installiere yarn: `npm install -g yarn`

## Verwenden der Projektvorlage

Um die Projektvorlage zu verwenden, muss das Repository geklont und anschließend neu initialisiert werden.

##### Klonen

```
$ git clone git@github.com:Syntarex/spfx-template.git
```

##### Neu initialisieren

```
$ rmdir .git
$ git init
```

##### IDs ändern

Jede Lösung und jeder WebPart muss eine eindeutige UUID besitzen.
Diese findet man unter:

-   `/src/webparts/bulletin-board.manifest.json`
-   `/config/package-solution.json`

##### Installieren

1. Installiere alle Projekt-Abhängigkeiten: `yarn install`
2. Erstelle SSL-Zertifikat: `yarn trust-dev-cert`

## Scripts

Die folgenden Skripte können im Terminal ausgeführt werden.

### build

Nutzt die SPFx Buildchain um TypeScript- und SCSS-Code zu kompilieren.

```
yarn build
```

### ship

Nutzt die SPFx Buildchain um TypeScript- und SCSS-Code optimiert zu kompilieren und führt alle Projekt-Assets zu einer bereitstellbaren SharePoint-Lösung zusammen.

```
yarn ship
```

### clean

Löscht cache- und alte build-Dateien.

```
yarn clean
```

### serve

Startet einen Test-Server und ein bereitstellbares Lösungspaket, welches auf den Test-Server zeigt.

```
yarn serve
```

## Projektstruktur

Die folgende Ordnerstruktur wird standardmäßig von der Projektvorlage verwendet:

-   `/.vscode`: Verzeichnis für Konfiguration der Entwicklungsumgebung
-   `/config`: Konfiguration von SPFx und des Lösungspaketes
-   `/docs`: Weiterführende Informationen
-   `/node_modules`: Ein Verzeichnis mit allen installierten Abhängigkeiten
-   `/src`: Beinhaltet den Quellcode
-   `/src/components`: Beinhaltet alle React-Komponenten
-   `/src/data`: Beinhaltet Datenlogik (Abfragen, Filterungen etc.)
-   `/src/model`: Beinhaltet Typen bzw. Datenmodelle
-   `/src/webparts`: Beinhaltet WebPart-Klassen
-   `/src/webparts/loc`: Beinhaltet Lokalisierungsdateien
-   `/teams`: Metadaten und Assets, falls die Lösung auch als Teams-App ausgerollt werden soll

Zusätzlich gibt es im Root-Verzeichnis Dateien:

-   `/.editorconfig`: Konfiguriere Visual Studio Code Editor
-   `/.gitattributes`: Forciere Metadaten bei Git-Commit
-   `/.gitignore`: Erlaubt das Exkludieren von Dateien und Ordnern für Git
-   `/.prettierrc`: Konfiguriert das Prettier-Plugin
-   `/gulpfile.js`: Steuert verschiedene Aspekte der SPFx-Buildchain. **Achtung: Bearbeite diese Datei nur, wenn du weißt was du tust.**
-   `/package.json`: Metadaten zum Projekt, sowie eine Liste der Abhängigkeiten
-   `/tsconfig.json`: Konfiguriert den TypeScript-Compiler
