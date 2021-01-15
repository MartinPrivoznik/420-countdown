import React from "react";
import Head from "next/head";
import App from "../App";

import { store } from "../store/store";
import { Provider } from "react-redux";

const Index = () => (
  <div>
    <Head>
      <title>420 Countdown - BETA</title>
    </Head>
    <Provider store={store}>
      <App />
    </Provider>
  </div>
);

export default Index;
