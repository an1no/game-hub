import {useEffect, useState} from "react";
import apiClient from "../services/api-client.ts";
import {CanceledError} from "axios";

export interface Games {
    id: number;
    name: string;
}

export interface FetchGamesResponse {
    count: number;
    results: Games[];
}

const useGames = () => {
    const [games, setGames] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {

        const controller = new AbortController();
        apiClient
            .get<FetchGamesResponse>('/games', { signal: controller.signal })
            .then(res => setGames(res.data.results))
            .catch(error => {
                if(error instanceof CanceledError) return
                setError(error.message)
            });

        return () => controller.abort();
    }, []);

    return {games, error};
}

export default useGames;