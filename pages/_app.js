import '../styles/globals.css';
import {createTheme, NextUIProvider} from '@nextui-org/react';
import {ThemeProvider as NextThemesProvider} from 'next-themes';

const darkTheme = createTheme({
    type: 'dark',
    theme: {
        // colors: {background: '#131313'}
        colors: {background: 'hotpink'}
    }
});

function MyApp({Component, pageProps}) {
    return (
        <NextThemesProvider
            theme={darkTheme}
            attribute="class"
            value={{dark: darkTheme.className}}
        >
            <NextUIProvider>
                <Component {...pageProps}/>
            </NextUIProvider>
        </NextThemesProvider>
    );
}

export default MyApp;
