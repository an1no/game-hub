import {extendTheme, ThemeConfig} from "@chakra-ui/react";
import {ThemeContext} from "@emotion/react";

const config: ThemeContext = {
    initialColorMode: 'dark'
};

const theme = extendTheme({config});

export default theme;