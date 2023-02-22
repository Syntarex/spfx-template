import * as React from "react";

interface ExampleProps {
    text?: string;
    hidden?: boolean;
}

export const Example = (props: ExampleProps) => {
    const { text = "Hallo Welt", hidden = false } = props;

    if (hidden) {
        return null;
    }

    // Returned JSX
    return (
        <div onClick={() => alert(text)}>
            <h1>Überschrift</h1>
            <p>{text}</p>
        </div>
    );
};
