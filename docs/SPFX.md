# SPFx

Dieses Dokument soll einen Überblick darüber geben, was SPFx ist, wie es sich im Ökosystem einfügt und welche Möglichkeiten SPFx während der Entwicklung gibt.

## Entwickler-Features

### Theming

`Fluent UI`-Komponenten werden automatisch nach dem aktuellen ausgewählten SharePoint-Design gethemed. Hier ist keine weitere Konfiguration nötig.

Möchte man selbst Komponenten stylen, hat man im `scss` die Möglichkeit die eingestellten SharePoint-Farben zu nutzen. Hierfür muss folgende Direktive an den Anfang der eigenen `.scss`-Datei gesetzt werden:

```
@import "~@microsoft/sp-office-ui-fabric-core/dist/sass/ThemeOverrides"
```

Anschließend können die Variablen in `ThemeOverrides.scss` genutzt werden um die gesetzten Farben zu nutzen.

### Lokalisierung

Das SharePoint Framework bietet die Möglichkeit lokalisierte Strings zu hinterlegen.
Der WebPart ermittelt die vom Benutzer bevorzugte Sprache selbst und zeigt Texte an.

1. Füge den Pfad der Lokalisierungsdateien zu `/config/config.json` unter dem Feld `localizedResources` hinzu. Achtung: Der Pfad ist relativ zum Build- und nicht dem Source-Verzeichnis. Orientiere dich am Besten am Beispiel
2. Füge den Namen eines Strings der `mystrings.d.ts` hinzu
3. Füge die tatsächlichen Texte der jeweiligen Sprach-Datei hinzu. `en-us.js` ist die Fallback-Sprache, falls die bevorzugte Sprache des Benutzers nicht gefunden wurde

### WebPart Properties

TODO
