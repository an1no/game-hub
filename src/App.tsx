import {useState} from 'react'
import './App.css'
import {Grid, GridItem, Show, useColorMode} from "@chakra-ui/react";
import NavBar from "./components/NavBar.tsx";

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
                <GridItem area='aside'>Aside</GridItem>
            </Show>
            <GridItem area='main'>Main</GridItem>
        </Grid>
    )
}

export default App