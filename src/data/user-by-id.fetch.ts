import "@pnp/sp/site-users/web";
import "@pnp/sp/webs";
import BulletinBoardWebPart from "../webparts/bulletin-board/bulletin-board.webpart";

export const fetchUserById = async (id: number): Promise<IUser> => {
    return await BulletinBoardWebPart.sp.web.getUserById(id)();
};