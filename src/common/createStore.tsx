import { createStore, applyMiddleware } from "redux";
import reduxLogger from "redux-logger";
import reducers from "../reducers";

export const createAppStore = () => createStore(
  reducers,
  applyMiddleware(reduxLogger)
);