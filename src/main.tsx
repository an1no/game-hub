import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {ChakraProvider, ColorModeScript} from '@chakra-ui/react';
import './index.css'
import App from './App.tsx'

import theme from './theme'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ChakraProvider>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <App/>
        </ChakraProvider>
    </StrictMode>,
)