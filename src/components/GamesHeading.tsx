import {GameQuery} from "../App.tsx";

interface Props {
    query: GameQuery
}

function GamesHeading({query}: Props) {
    return (
        <h1>{`${query.platform?.name || ''} ${query.genre?.name || ''} Games`}</h1>
    );
}

export default GamesHeading;