import { Types } from "../Actions/actionTypes";

const initState = {
  product: {},
  fetching: false,
  error: null,
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case Types.FETCH_PRODUCT_DATA:
      return {
        ...state,
        product: {},
        fetching: true,
      };
    case Types.FETCH_PRODUCT_DATA_SUCCESS:
      return {
        ...state,
        fetching: false,
        product: action.data,
      };
    case Types.FETCH_PRODUCT_DATA_FAILED:
      return {
        ...state,
        fetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default productReducer;
