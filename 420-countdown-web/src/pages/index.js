import React from "react";
import App from "../App";

import { store } from "../store/store";
import { Provider } from "react-redux";

const Index = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Index;
