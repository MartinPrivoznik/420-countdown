import React from "react";
import App from "../App";

import { store } from "../store/store";
import { Provider } from "react-redux";

const Index = () => (
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>
);

export default Index;
