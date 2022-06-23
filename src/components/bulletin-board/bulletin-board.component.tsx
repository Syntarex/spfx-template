import { Stack } from "@fluentui/react";
import * as _ from "lodash";
import * as React from "react";
import { fetchAdverts } from "../../data/advert.fetch";
import { IAdvert } from "../../model/advert.model";
import BulletinBoardItem from "../bulletin-board-item/bulletin-board-item.component";

const BulletinBoard = () => {
    // Zum Speichern der Inserate
    const [adverts, setAdverts] = React.useState<IAdvert[] | null>(null);

    // Führe einmalig aus wenn Komponente das erste mal gerendert wird
    // Fetched Inserate und speichert sie in den State
    React.useEffect(() => {
        fetchAdverts()
            .then((response) => setAdverts(response))
            .catch((e) => console.error(e));
    }, []);

    // Beim ersten Rendern der Komponente sind die Inserate noch nicht gefetched
    // Rendert "nichts"
    if (_.isNull(adverts)) {
        return null;
    }

    // Rendere für jedes Inserat ein BulletinBoardItem
    return (
        <Stack horizontal wrap tokens={{ childrenGap: 15 }}>
            {adverts.map((each, index) => (
                <BulletinBoardItem value={each} />
            ))}
        </Stack>
    );
};

export default BulletinBoard;
