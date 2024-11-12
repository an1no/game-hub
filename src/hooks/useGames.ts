import useData from "./useData.ts";
import {GameQuery} from "../App.tsx";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

const useGames = (query: GameQuery) => useData<Game>('/games',
    {
        params:
            {
                genres: query.genre?.id,
                platforms: query.platform?.id,
                ordering: query.order,
                search: query.searchText
            }
    }, [query]);

export default useGames;