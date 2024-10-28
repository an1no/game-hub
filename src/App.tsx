import {useState} from 'react'
import './App.css'
import {Grid, GridItem, Show, useColorMode} from "@chakra-ui/react";
import NavBar from "./components/NavBar.tsx";
import GameGrid from './components/GameGrid.tsx'

function App() {
    const [count, setCount] = useState(0);

    return (
        <Grid templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "main aside"`
        }}>
            <GridItem area='nav'>
                <NavBar/>
            </GridItem>
            <Show above="lg">
                <GridItem area='aside'>
                    <GameGrid/>
                </GridItem>
            </Show>
            <GridItem area='main'>
            </GridItem>
        </Grid>
    )
}

export default App
