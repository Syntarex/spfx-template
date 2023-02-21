# Entwicklung

## yarn

SPFx-Lösungen nutzen standardmäßig `npm` als Paket-Manager.

`yarn` ist optionaler Paket-Manager, welcher `npm` komplett ersetzen kann. Dieser bietet bessere Performance, Optimierung des lokalen Speicherbedarfs und eine bessere Darstellung von Skript-Ausgaben.

Es ergeben sich keine Nachteile `yarn` statt `npm` zu nutzen. Wenn dies dennoch nicht erwünscht ist, kann `npm`, nach einer Neuinstallation der Abhängigkeiten, genutzt werden.

##### Skript ausführen

Skripte können in der `/package.json` definiert werden und mittels `yarn` ausgeführt werden.

```
yarn <SCRIPT_NAME>
```

Beispiel: `yarn build`

##### Alle Pakete installieren

Mithilfe diesen Befehls können alle in der `/package.json` referenzierten Abhängigkeiten installiert werden.

```
yarn install
```

##### Paket hinzufügen

```
yarn add <PACKAGE>
```

##### Paket entfernen

```
yarn remove <PACKAGE>
```

## Bibliotheken

Eine Übersicht über die wichtigsten verwendeten Bibliotheken.

### React

Für die Frontend-Entwicklung wird das UI-Framework [`react`](https://reactjs.org) genutzt.
React hat einen komponentenbasierten Ansatz und integriert sich sehr gut mit dem SharePoint Framework (`spfx`).

### Office UI Fabric (aka Fluent UI)

[`office-ui-fabric-react`](https://developer.microsoft.com/en-us/fluentui?fabricVer=7#/controls/web) ist eine Bibliothek welche fertige `react`-Komponenten bereitstellt. Diese sind im von Microsoft etablierten Fluent UI-Design und fügen sich optisch sehr gut in den modernen SharePoint ein.

### Lodash

[`lodash`](https://lodash.com/docs) ist eine Hilfsbibliothek mit vielen verschiedenen Hilfsfunktionen. Funktioniert dank seiner makellosen Typsicherheit sehr gut in TypeScript Projekten.

### Recoil

[`recoil`](https://recoiljs.org) wird genutzt um Daten zwischen Komponenten einfacher zu kommunizieren. Recoil reduziert das Rerendering von `react`-Komponenten auf ein Minimum und erhöht so die Performance.

### PnPJS

[`PnPJS`](https://pnp.github.io/pnpjs/) ist eine von der Community erstellte Bibliothek, welche genutzt wird um Daten von Graph und SharePoint anzufragen.

## Build-Chain

**ACHTUNG:** Dieses Kapitel ist 100% optional und nicht notwendig um mit SharePoint Framework (SPFx) zu entwickeln.

Die Build-Chain beschreibt das Verwenden verschiedener Tools in Kombination um das Projekt zu bauen und für das Zielsystem verwendbar zu machen.

Unser Zielsystem ist der SharePoint Online. Die Build-Chain die verwendet wird, stellt das SharePoint Framework (SPFx) für uns bereit. Wir haben allerdings die Möglichkeit an einigen Stellen über Konfiguration oder sogar selbstgeschriebenen Code einzugreifen.

Dieses Dokument soll Aufschluss darüber geben, welche Tools SPFx nutzt und an welchen Stellen wir eingreifen können bzw. sollten.

### TypeScript

**Der TypeScript-Compiler kann unter `/tsconfig.json` konfiguriert werden.**

SPFx-Lösungen werden mit der Programmiersprache [TypeScript](https://www.typescriptlang.org) gebaut. Der TypeScript Compiler wird genutzt um geschriebenen TypeScript-Code zu, für den Browser interpretierbaren, JavaScript-Code zu kompilieren.

### Gulp

**Gulp-Prozesse können in der `/gulpfile.js` bearbeitet und hinzugefügt werden.**

`gulp` wird genutzt um Prozesse vom SharePoint Framework (`spfx`) abzubilden. Diese Prozesse können konfiguriert werden. Auch können eigene Prozesse geschrieben werden.

Beispiele für wichtige `gulp`-Prozesse:

-   `gulp clean`: Wird genutzt um cache-Dateien und alte Builds zu löschen
-   `gulp build`: Wird genutzt um mithilfe von WebPack den Code zu kompilieren
-   `gulp package-solution`: Wird genutzt um den kompilierten Code zu einer Paketlösung zusammenzufassen
-   `gulp serve`: Wird genutzt um einen lokalen Test-Server zu starten

### WebPack

**Von einem Eingreifen in WebPack wird stark abgeraten und wird hier auch nicht weiter erklärt.**

`WebPack` wird genutzt um verschiedene Lösungs-Komponenten zu einem Lösungspaket zusammenzuführen. Hierzu zählt das Zusammenführen von mehreren JavaScript-Dateien, dem Hinzufügen von Verwendeten Assets oder dem Kompilieren und Zusammenführen von Styling-Dateien (`scss`).

WebPack führt also viele verschiedene und verteilte Dateien und Formatte zu einem bereitstellbaren Lösungspaket zusammen.

### ESLint

**ESLint ist standardmäßig SEHR restriktiv konfiguriert und ist deshalb in der Projektvorlage komplett deaktiviert. Code-Konventionen werden mithilfe von Prettier automatisch erzwungen.**

ESLint wird vor dem eigentlichen TypeScript-Kompilierungsprozess verwendet um den Code auf bestimmte Regeln zu prüfen und ggf. Fehler zu werfen. Wird verwendet um Code-Konventionen zu erzwingen. Beispielhaft kann festgelegt werden, wie viele Zeichen eine Code-Zeile lang sein darf.

Die Standard-Einstellungen die das SharePoint Framework mitliefert, sind allerdings eher restriktiv und halten den Progress des Projektes oft stark auf. Es wurde deshalb bewusst auf die Verwendung von ESLint verzichtet.
