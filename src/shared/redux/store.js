import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import apiMiddleware from "./middleware";
import headerReducer from "../../components/Header/reducer/headerReducer";

const redusers = combineReducers({
  header: headerReducer,
});

const store = createStore(redusers, applyMiddleware(apiMiddleware, thunk));

export default store;
