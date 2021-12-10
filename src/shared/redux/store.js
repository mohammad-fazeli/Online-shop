import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import apiMiddleware from "./middleware";

import headerReducer from "../../components/Header/reducer/headerReducer";
import dashboardReducer from "../../pages/Dashboard/reducer/dashboardReducer";
import productsReducer from "../../pages/Products/reducer/productsReducer";
import productReducer from "../../pages/Product/reducer/productReducer";
import cartReducer from "../../pages/Cart/reducer/cartReducer";

const loadCart = () => {
  const cart = localStorage.getItem("cart");
  if (localStorage.getItem("cart")) {
    return JSON.parse(cart);
  } else {
    localStorage.setItem("cart", JSON.stringify([]));
    return [];
  }
};

const saveCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const initialValue = () => {
  const result = {
    cart: {
      cartList: loadCart(),
    },
    dashboard: {
      amazingoffer: [],
      Bestsellers: [],
      newest: [],
      fetching: false,
      error: null,
    },
    header: { category: [], fetching: false, eroor: null },
    product: { product: {}, fetching: false, error: null },
    products: {
      products: [],
      filters: [],
      subdivision: [],
      fetching: false,
      error: null,
    },
  };
  return result;
};
const redusers = combineReducers({
  products: productsReducer,
  product: productReducer,
  header: headerReducer,
  dashboard: dashboardReducer,
  cart: cartReducer,
});

const store = createStore(
  redusers,
  initialValue(),
  applyMiddleware(apiMiddleware, thunk)
);

store.subscribe(() => {
  saveCart(store.getState().cart.cartList);
});

export default store;
