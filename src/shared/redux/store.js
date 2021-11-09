import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import apiMiddleware from "./middleware";

const fakereducer = (state = { name: "mohammad" }) => {
  return state;
};

const store = createStore(fakereducer, applyMiddleware(apiMiddleware, thunk));

export default store;
