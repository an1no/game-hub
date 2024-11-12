import useGenres, {Genre} from "../hooks/useGenres.ts";
import {HStack, List, Button, Image, ListItem, Heading} from "@chakra-ui/react";
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
        <>
            <Heading fontSize='2xl' marginBottom={2}>Genres</Heading>
            <List>
                {data.map(genre =>
                    <ListItem key={genre.id} paddingY='5px'>
                        <HStack>
                            <Image objectFit='cover' boxSize='32px' borderRadius={8}
                                   src={getCroppedImageUrl(genre.image_background)}/>
                            <Button whiteSpace={'normal'} textAlign='left'
                                    fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
                                    onClick={() => onSelectGenre(genre)} fontSize='lg'
                                    variant='link'>{genre.name}</Button>
                        </HStack>
                    </ListItem>)}
            </List>
        </>
    );
};

export default GenreList;