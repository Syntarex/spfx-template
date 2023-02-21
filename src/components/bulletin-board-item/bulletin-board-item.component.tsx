import { DefaultButton, Stack, Text } from "@fluentui/react";
import * as strings from "BulletinBoardWebPartStrings";
import * as _ from "lodash";
import * as React from "react";
import { fetchUserById } from "../../data/user-by-id.fetch";
import { IAdvert } from "../../model/advert.model";
import { IUser } from "../../model/user.model";
import styles from "./bulletin-board-item.module.scss";

interface IBulletinBoardItemProps {
    value: IAdvert;
}

const BulletinBoardItem = (props: IBulletinBoardItemProps) => {
    const { value } = props;

    // Zum Speichern des Autors des Inserats
    const [author, setAuthor] = React.useState<IUser | null>(null);

    // Fetche Inserat und speichere in State
    React.useEffect(() => {
        fetchUserById(value.AuthorId).then((response) => {
            setAuthor(response);
        });
    }, [value.AuthorId]);

    // Beim ersten Rendern der Komponente ist der Autor noch nicht gefetched
    // Rendert "nichts"
    if (_.isNull(author)) {
        return null;
    }

    return (
        <Stack
            className={styles.item}
            tokens={{
                padding: 15,
                childrenGap: 15,
            }}
        >
            <Text block variant={"large"} className={styles.text}>
                {value.Title} ({value.Preis}€{!value.Verhandlungsbasis ? null : ` ${strings.BasisOfNegotiation}`})
            </Text>

            <Text block className={styles.text}>
                {value.Beschreibung}
            </Text>

            <hr />

            <Text block variant={"small"} className={styles.text}>
                {strings.CreatedBy}: {author.Title}
            </Text>

            <DefaultButton href={`mailto:${author.Email}`}>{strings.ContactPerson}</DefaultButton>
        </Stack>
    );
};

export default BulletinBoardItem;
