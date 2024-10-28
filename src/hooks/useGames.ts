import {useEffect, useState} from "react";
import apiClient from "../services/api-client.ts";
import {CanceledError} from "axios";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
}

export interface FetchGamesResponse {
    count: number;
    results: Game[];
}

const useGames = () => {
    const [games, setGames] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const controller = new AbortController();
        apiClient
            .get<FetchGamesResponse>('/games', { signal: controller.signal })
            .then(res => {
                setGames(res.data.results);
                setLoading(false);
            })
            .catch(error => {
                if(error instanceof CanceledError) return
                setError(error.message);
                setLoading(false);
            });

        return () => controller.abort();
    }, []);

    return {games, error, isLoading};
}

export default useGames;