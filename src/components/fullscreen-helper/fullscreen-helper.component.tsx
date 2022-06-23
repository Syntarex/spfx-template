import { MessageBar, MessageBarType } from "@fluentui/react";
import * as React from "react";

const FullscreenHelper = () => {
    return (
        <>
            <style>
                {`
                    div[class^="headerRow"] {
                        display: none;
                    }
                `}
            </style>
            <MessageBar messageBarType={MessageBarType.info}>Die Seite wird im Fullscreen angezeigt!</MessageBar>
        </>
    );
};

export default FullscreenHelper;
