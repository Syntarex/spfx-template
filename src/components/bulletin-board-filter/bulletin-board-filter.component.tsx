import { Checkbox } from "@fluentui/react";
import * as _ from "lodash";
import * as React from "react";
import { useRecoilState } from "recoil";
import { showOnlyFreeAtom } from "../../recoil/bulletin-board-filter.atoms";

const BulletinBoardFilter = () => {
    const [showOnlyFree, setShowOnlyFree] = useRecoilState(showOnlyFreeAtom);

    return (
        <Checkbox
            checked={showOnlyFree}
            onChange={(event, checked) => setShowOnlyFree(_.isUndefined(checked) ? false : checked)}
        />
    );
};

export default BulletinBoardFilter;
