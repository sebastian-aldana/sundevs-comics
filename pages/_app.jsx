import React from "react";
import NextApp from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "@material-ui/core";
import FeedbackProvider from "_providers_/FeedbackProvider/FeedbackProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "_theme_";
import { store, persistor } from "_store_";

const App = class extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Sundevs Comics</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <ThemeProvider theme={theme}>
              <FeedbackProvider>
                <CssBaseline />
                <Component {...pageProps} />
              </FeedbackProvider>
            </ThemeProvider>
          </PersistGate>
        </Provider>
      </>
    );
  }
};

export default App;
