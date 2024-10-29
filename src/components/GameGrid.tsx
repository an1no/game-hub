import React from 'react';
import {SimpleGrid, Text} from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import GameCardContainer from "./GameCardContainer.tsx";

const GameGrid = () => {
    const {games, error, isLoading} = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6];
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} padding={10} spacing={10}>
                {isLoading && skeletons.map(skeleton => <GameCardContainer>
                    <GameCardSkeleton/>
                </GameCardContainer>)}
                {games.map(game => <GameCardContainer>
                    <GameCard game={game}/>
                </GameCardContainer>)}
            </SimpleGrid>
        </>
    );
};

export default GameGrid;