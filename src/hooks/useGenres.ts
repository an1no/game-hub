import {useEffect, useState} from "react";
import apiClient from "../services/api-client.ts";
import {CanceledError} from "axios";

interface Genre {
    id: number;
    name: string;
}

interface FetchGenreResponse {
    count: number;
    results: Genre[];
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
            const controller = new AbortController();

            setLoading(true);

            apiClient
                .get<FetchGenreResponse>('/genres', {signal: controller.signal})
                .then(res => {
                    setGenres(res.data.results);
                    console.log(res);
                    setLoading(false);
                })
                .catch(err => {
                    if (err instanceof CanceledError) return;
                    setLoading(false);
                    setError(err.message)
                });

            return () => controller.abort();
        }
        ,
        []
    )

    return {genres, error, isLoading}
}

export default useGenres;