import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import { theme } from '../components/UI/theme';
import React from 'react';
import { ColorModeScript } from '@chakra-ui/color-mode';
export default class Photon extends Document {
  render() {
    return (
      <Html lang="en" className="dark">
        <Head>
          {/* PWA primary color */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link rel="shortcut icon" href="screenLogo.png" />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-MNJ8HRXJ0K`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MNJ8HRXJ0K', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body className="chakra-ui-dark">
          <ColorModeScript initialColorMode="dark" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
Photon.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};