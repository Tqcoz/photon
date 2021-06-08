import React, { useEffect } from 'react';
import { AppComponent, AppProps } from 'next/dist/next-server/lib/router/router';
import 'tailwindcss/tailwind.css'
import '../index.css'
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../components/UI/theme';
import Drawer from '../modules/contexts/Drawer';
import OperatingSystem, { useOperatingSystem } from '../modules/contexts/OperatingSystem';
import AuthContext from '../modules/contexts/Authentication';
import { useResponsive } from '../modules/hooks/useResponsive';
import { ChakraProvider, extendTheme } from "@chakra-ui/react"

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
const chakraTheme = extendTheme({ colors })

const App = ({Component, pageProps}:{Component:AppComponent, pageProps: AppProps}) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);
  return (
    <AuthContext>
      <ChakraProvider theme={{...chakraTheme}}>
        <Drawer>
          <OperatingSystem>
            <ThemeProvider theme={theme}>
              <Component {...pageProps} />
            </ThemeProvider>
          </OperatingSystem>
        </Drawer>
      </ChakraProvider>
    </AuthContext>

  );
};

export default App;