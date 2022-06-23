# Bereitstellungsmöglichkeiten

## Testing

```
npm run serve
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
npm run ship
```

In diesem Lösungspaket befindet sich alles für die produktive Nutzung.

Das Lösungspaket muss nur im App-Catalog der Site Collection hochgeladen und eingecheckt werden.
