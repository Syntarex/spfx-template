# Bereitstellungsmöglichkeiten

## Testing

```
yarn serve
```

Startet man den Test-Server, packt das SharePoint Framework ein Lösungspaket (`/sharepoint/solution/<name>.sppkg`), welches in SharePoint bereitgestellt werden kann. Anschließend kann man den WebPart, so wie jeden anderen WebPart, einfach auf einer Seite einbinden und anzeigen lassen.

Der WebPart bezieht seinen Code allerdings vom lokal gehosteten Test-Server, sprich der Code ist nicht in der Lösung selbst.

Dies bringt einige Vorteile mit:

-   Der WebPart ist nur für einen selbst sichtbar
-   Eine Änderung am Code hat eine sofortige Änderung am WebPart zur Folge
-   Man befindet sich im SharePoint-Kontext und kann dessen Features nutzen

Das Lösungspaket muss nur im App-Catalog der Site Collection hochgeladen und eingecheckt werden.

## Produktiv

Ein produktiv verwendbares Lösungspaket (`/sharepoint/solution/<name>.sppkg`) lässt sich mit diesem Kommando erstellen:

```
yarn ship
```

In diesem Lösungspaket befindet sich alles für die produktive Nutzung.

Das Lösungspaket muss nur im App-Catalog der Site Collection hochgeladen und eingecheckt werden.

## Microsoft Teams App

Um einen WebPart als Microsoft Teams App zu deployen, muss das Projekt folgende Voraussetzungen erfüllen:

-   Unter `/config/package-solution.json` müssen die Werte `skipFeatureDeployment` und `includeClientSideAssets` beide `true` sein
-   Unter `/webparts/<webpart-name>/<webpart-name>.manifest.json` muss unter `supportedHosts` entweder `TeamsPersonalApp` und/oder `TeamsTab` vorhanden sein
-   Die Lösung muss im SharePoint App Katalog "tenantweit" deployed sein (Haken "Make this solution available to all sites in the organization" beim Hochladen setzen)
-   Klicke im App Katalog "Sync to Teams" um die Lösung als Teams App im Tenant bereitzustellen (optional können App-Metadaten auch [manuell](https://learn.microsoft.com/en-us/sharepoint/dev/spfx/deployment-spfx-teams-solutions#developer-provided-microsoft-teams-app-manifest--package) erstellt werden)
