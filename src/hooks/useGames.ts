import useData from "./useData.ts";
import {Genre} from "./useGenres.ts";

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

const useGames = (selectedGenre: Genre | null, selectedPlatrofm: Platform | null) => useData<Game>('/games', {params: {genres: selectedGenre?.id, platforms: selectedPlatrofm?.id}}, [selectedGenre?.id, selectedPlatrofm?.id])

export default useGames;