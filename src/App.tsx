import {useState} from 'react'
import './App.css'
import {Grid, GridItem, HStack, Show} from "@chakra-ui/react";
import NavBar from "./components/NavBar.tsx";
import GameGrid from './components/GameGrid.tsx'
import GenreList from "./components/GenreList.tsx";
import {Genre} from "./hooks/useGenres.ts";
import PlatformSelector from "./components/PlatformSelector.tsx";
import {Platform} from "./hooks/useGames.ts";
import SortSelector from "./components/SortSelector.tsx";

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
    order: string | null;
}

function App() {
    const [query, setQuery] = useState<GameQuery>({genre: null, platform: null, order: null});

    return (
        <Grid
            templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`
            }}
            templateColumns={{
                base: '1fr',
                lg: '200px 1fr'
            }}
        >
            <GridItem area='nav'>
                <NavBar/>
            </GridItem>
            <Show above="lg">
                <GridItem area='aside' paddingX={5}>
                    <GenreList selectedGenre={query.genre} onSelectGenre={(genre) => setQuery({...query, genre})}/>
                </GridItem>
            </Show>
            <GridItem area='main'>
                <GridItem area='aside'>
                    <HStack marginLeft={10}>
                        <PlatformSelector selectedPlatform={query.platform}
                                          onSelectPlatform={(platform) => setQuery({...query, platform})}/>
                        <SortSelector selectedSortOrder={query.order} onSelectSortOrder={(order)=>setQuery({...query, order})}/>
                    </HStack>
                    <GameGrid gameQuery={query}/>
                </GridItem>
            </GridItem>
        </Grid>
    )
}

export default App
