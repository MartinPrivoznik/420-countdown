import React from "react";
import Head from "next/head";
import App from "../App";

import { store } from "../store/store";
import { Provider } from "react-redux";

const Index = () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="Countdown clock displaying the remaining time until upcoming 4:20. The goal is to make this a perfect place for waiting until next 420."
      />
      <meta name="google" content="notranslate" />
      <meta name="google-site-verification" content="Wo-hAYg20yw3v_YVaHuG-Ywq9UHnzePgeHjQyormbSU" />
      <link rel="icon" href="/static/img/favicon.ico" />
      <link rel="apple-touch-icon" href="/static/images/logo192.png" />
      <title>420 Countdown</title>
    </Head>
    <Provider store={store}>
      <App />
    </Provider>
  </div>
);

export default Index;
