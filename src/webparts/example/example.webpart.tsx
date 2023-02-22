import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { SPFI, spfi, SPFx } from "@pnp/sp";
import * as React from "react";
import { createRoot, Root } from "react-dom/client";
import { RecoilRoot } from "recoil";

// Die WebPart-Properties können im WebPart-Manifest erweitert werden
// https://learn.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/basics/integrate-with-property-pane
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ExampleWebPartProps {}

export default class ExampleWebPart extends BaseClientSideWebPart<ExampleWebPartProps> {
    // Erstelle Klassenvariable für globale Verfügbarkeit von sp-Objekt
    // Das sp-Objekt kann zur Kommunikation mit der SharePoint-Api genutzt werden
    public static sp: SPFI = spfi();

    // Bereitet vom WebPart vorgegebenes DOM-Element für React-Rendering vor
    private reactRoot: Root = createRoot(this.domElement);

    protected async onInit(): Promise<void> {
        await super.onInit();

        // Initialisiere global erreichbare Klassenvariable
        // Nutzt den SPFx-Kontext um das sp-Objekt von PnPJS zu initialisieren
        ExampleWebPart.sp = spfi().using(
            SPFx({
                pageContext: this.context.pageContext,
            }),
        );
    }

    // Rendert Komponente
    public render(): void {
        const isTeamsApp = !!this.context.sdks.microsoftTeams;

        // Rendere React-Komponenten
        this.reactRoot.render(
            <RecoilRoot>
                <div>WebPart lives in {isTeamsApp ? "Teams App" : "SharePoint WebPart"}</div>
            </RecoilRoot>,
        );
    }

    // Unterbreche React-Rendering, wenn WebPart nicht mehr angezeigt wird
    protected onDispose(): void {
        this.reactRoot.unmount();
    }
}
