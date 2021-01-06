import { applyMiddleware, compose, createStore } from "redux";

import promiseMiddleware from "./promiseMiddleware";
import rootReducer from "./rootReducer";

export const configureStore = (initialState) => {
  const middleware = [promiseMiddleware];
  const enhancers = [];

  if (process.env.NODE_ENV === "development") {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === "function") {
      enhancers.push(devToolsExtension());
    }
  }

  const composer = compose(applyMiddleware(...middleware), ...enhancers);

  return createStore(rootReducer, initialState, composer);
};

export default configureStore;
