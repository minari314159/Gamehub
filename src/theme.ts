import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode:  'dark',
    useSystemColorMode: false,
}

const theme = extendTheme({ 
    config,
    colors: {
        gray: {
            50: '#f9eef9',
            100: '#e1d1e1',
            200: '#cbb4cb',
            300: '#b596b5',
            400: '#a079a0',
            500: '#866086',
            600: '#684a68',
            700: '#4b354b',
            800: '#2e1e2e',
            900: '#130913'
        }
    }
});

export default theme;