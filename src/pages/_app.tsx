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
      <Drawer>
        <OperatingSystem>
          <ThemeProvider theme={theme}>
            {useOperatingSystem()}
            {useResponsive()}
            <Component {...pageProps} />
          </ThemeProvider>
        </OperatingSystem>
      </Drawer>
    </AuthContext>

  );
};

export default App;