import {useState} from 'react'
import './App.css'
import {Grid, GridItem, Show, useColorMode} from "@chakra-ui/react";
import NavBar from "./components/NavBar.tsx";
import GameGrid from './components/GameGrid.tsx'
import GenreList from "./components/GenreList.tsx";

function App() {
    const [count, setCount] = useState(0);

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
                    <GenreList/>
                </GridItem>
            </Show>
            <GridItem area='main'>
                <GridItem area='aside'>
                    <GameGrid/>
                </GridItem>
            </GridItem>
        </Grid>
    )
}

export default App
