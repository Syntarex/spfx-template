import { Stack } from "@fluentui/react";
import * as _ from "lodash";
import * as React from "react";
import { useRecoilState } from "recoil";
import { fetchAdverts } from "../../data/advert.fetch";
import { IAdvert } from "../../model/advert.model";
import { showOnlyFreeAtom } from "../../recoil/bulletin-board-filter.atoms";
import BulletinBoardFilter from "../bulletin-board-filter/bulletin-board-filter.component";
import BulletinBoardItem from "../bulletin-board-item/bulletin-board-item.component";
import FullscreenHelper from "../fullscreen-helper/fullscreen-helper.component";

interface IBulletinBoardProps {
    showInFullScreen: boolean;
}

const BulletinBoard = (props: IBulletinBoardProps) => {
    // Dekonstruieren der Properties
    const { showInFullScreen } = props;

    // Zum Speichern der Inserate
    const [adverts, setAdverts] = React.useState<IAdvert[] | null>(null);

    // Zum Speichern ob gefiltert werden soll
    const [showOnlyFree] = useRecoilState(showOnlyFreeAtom);

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
        <>
            {showInFullScreen ? <FullscreenHelper /> : null}

            <BulletinBoardFilter />

            <Stack horizontal wrap tokens={{ childrenGap: 15 }}>
                {adverts
                    .filter((each) => !showOnlyFree || each.Preis === 0)
                    .map((each, index) => (
                        <BulletinBoardItem value={each} />
                    ))}
            </Stack>
        </>
    );
};

export default BulletinBoard;
