import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { SPFI, spfi, SPFx } from "@pnp/sp";
import * as React from "react";
import * as ReactDOM from "react-dom";
import BulletinBoard from "../../components/bulletin-board/bulletin-board.component";

export interface IBulletinBoardWebPartProps {}

export default class BulletinBoardWebPart extends BaseClientSideWebPart<IBulletinBoardWebPartProps> {
    // Erstelle Klassenvariable für globale Verfügbarkeit von sp-Objekt
    // Das sp-Objekt kann zur Kommunikation mit dem SharePoint genutzt werden
    public static sp: SPFI = spfi();

    // Rendert Komponente
    public render(): void {
        ReactDOM.render(<BulletinBoard />, this.domElement);
    }

    protected async onInit(): Promise<void> {
        await super.onInit();

        // Initialisiere global erreichbare Klassenvariable
        // Nutzt den SPFx-Kontext um das sp-Objekt von PnPJS zu initialisieren
        BulletinBoardWebPart.sp = spfi().using(
            SPFx({
                pageContext: this.context.pageContext,
            }),
        );
    }

    // React-Rendering unterbrechen, wenn WebPart nicht mehr verfügbar ist
    protected onDispose(): void {
        ReactDOM.unmountComponentAtNode(this.domElement);
    }
}
