import React from "react";
import Head from "next/head";
import App from "../App";

import { store } from "../store/store";
import { Provider } from "react-redux";

const Index = () => (
  <div>
    <Head>
      <title>420 Countdown - BETA</title>
      <meta name="title" content="420 Countdown - BETA" />
      <meta
        name="description"
        content="Countdown clock displaying the remaining time until upcoming 4:20. The goal is to make this a perfect place for waiting until next 420."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://420-countdown.com/" />
      <meta property="og:title" content="420 Countdown - BETA" />
      <meta
        property="og:description"
        content="Countdown clock displaying the remaining time until upcoming 4:20. The goal is to make this a perfect place for waiting until next 420."
      />
      <meta property="og:image" content="" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://420-countdown.com/" />
      <meta property="twitter:title" content="420 Countdown - BETA" />
      <meta
        property="twitter:description"
        content="Countdown clock displaying the remaining time until upcoming 4:20. The goal is to make this a perfect place for waiting until next 420."
      />
      <meta property="twitter:image" content="" />
      <meta name="google" content="notranslate" />
      <meta name="google-site-verification" content="Wo-hAYg20yw3v_YVaHuG-Ywq9UHnzePgeHjQyormbSU" />
      <link rel="canonical" href="https://420-countdown.com/" />
    </Head>
    <Provider store={store}>
      <App />
    </Provider>
  </div>
);

export default Index;
