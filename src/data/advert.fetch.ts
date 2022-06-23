import "@pnp/sp/items";
import "@pnp/sp/lists";
import "@pnp/sp/webs";
import { IAdvert } from "../model/advert.model";
import BulletinBoardWebPart from "../webparts/bulletin-board/bulletin-board.webpart";

export const fetchAdverts = async (): Promise<IAdvert[]> => {
    return BulletinBoardWebPart.sp.web.lists.getByTitle("Inserate").items();
};
