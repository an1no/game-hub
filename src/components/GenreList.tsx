import React from 'react';
import useGenres, {Genre} from "../hooks/useGenres.ts";
import {HStack, List, Button, Image, ListItem} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";
import GenreListSkeleton from "./GenreListSkeleton.tsx";

interface Props {
    selectedGenre: Genre | null;
    onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({selectedGenre, onSelectGenre}: Props) => {
    const {data, isLoading, error} = useGenres();
    if (error) return;
    if (isLoading) return <GenreListSkeleton/>
    return (
        <List>
            {data.map(genre =>
                <ListItem key={genre.id} paddingY='5px'>
                    <HStack>
                        <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
                        <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
                                onClick={() => onSelectGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
                    </HStack>
                </ListItem>)}
        </List>
    );
};

export default GenreList;