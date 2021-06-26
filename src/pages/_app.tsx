import React, { useEffect } from 'react';
import { AppComponent, AppProps } from 'next/dist/next-server/lib/router/router';
import 'tailwindcss/tailwind.css'
import '../index.css'
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../components/UI/theme';
import Drawer from '../modules/contexts/Drawer';
import AuthContext from '../modules/contexts/Authentication';
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import clearStyles from '../modules/functions/clearStyles';
import { AscentProvider } from '../modules/contexts/WebSocket';

const colors = {
  brand: {
    900: "#111827",
    800: "#161c2a",
    700: "#f06375",
    600: "#ef637f",
    500: "#ec6594",
    400: "#e867ad"
  },
}
const chakraTheme = extendTheme({ colors, config:{useSystemColorMode: false,initialColorMode: "dark"} })

const App = ({Component, pageProps}:{Component:AppComponent, pageProps: AppProps}) => {
  useEffect(() => {
    clearStyles()
  }, []);
  return (
    <AuthContext>
        <ChakraProvider theme={{...chakraTheme}}>
          <Drawer>
            <ThemeProvider theme={theme}>
              <AscentProvider>
                {/* <UserContext> */}
                <Component {...pageProps} />
                {/* </UserContext> */}
              </AscentProvider>
            </ThemeProvider>
          </Drawer>
        </ChakraProvider>
      </AuthContext>

  );
};

export default App;