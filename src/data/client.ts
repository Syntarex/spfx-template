import { spfi } from "@pnp/sp";

// Benutze dieses sp-Objekt um Anfragen an den SharePoint zu schicken.
// Wird in der WebPart-Klasse im SPFx-Kontext initialisiert.
export let sp = spfi();
