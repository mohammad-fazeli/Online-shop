import { Types } from "../Actions/actionTypes";

const initState = {
  products: [],
  filters: [],
  subdivision: [],
  fetching: false,
  error: null,
};

const productsReducer = (state = initState, action) => {
  switch (action.type) {
    case Types.FETCH_PRODUCTS_DATA:
      return {
        ...state,
        fetching: true,
      };
    case Types.FETCH_PRODUCTS_DATA_SUCCESS:
      return {
        ...state,
        fetching: false,
        products: action.data,
      };
    case Types.FETCH_PRODUCTS_DATA_FAILED:
      return {
        ...state,
        fetching: false,
        error: action.error,
      };

    case Types.FETCH_PRODUCTS_FILTER:
      return {
        ...state,
        filters: [],
        fetching: true,
      };
    case Types.FETCH_PRODUCTS_FILTER_SUCCESS:
      return {
        ...state,
        fetching: false,
        filters: action.data,
      };
    case Types.FETCH_PRODUCTS_FILTER_FAILED:
      return {
        ...state,
        fetching: false,
        error: action.error,
      };

    case Types.FETCH_PRODUCTS_SUBIVISION:
      return {
        ...state,
        subdivision: [],
        fetching: true,
      };
    case Types.FETCH_PRODUCTS_SUBIVISION_SUCCESS:
      return {
        ...state,
        fetching: false,
        subdivision: action.data,
      };
    case Types.FETCH_PRODUCTS_SUBIVISION_FAILED:
      return {
        ...state,
        fetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default productsReducer;
