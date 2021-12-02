import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import apiMiddleware from "./middleware";

import headerReducer from "../../components/Header/reducer/headerReducer";
import dashboardReducer from "../../pages/Dashboard/reducer/dashboardReducer";
import productsReducer from "../../pages/Products/reducer/productsReducer";

const redusers = combineReducers({
  products: productsReducer,
  header: headerReducer,
  dashboard: dashboardReducer,
});

const store = createStore(redusers, applyMiddleware(apiMiddleware, thunk));

export default store;
