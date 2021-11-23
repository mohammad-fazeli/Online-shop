import { Types } from "../Actions/actionTypes";

const initState = {
  category: [],
  fetching: false,
  eroor: null,
};
const headerReducer = (state = initState, action) => {
  switch (action.type) {
    case Types.FETCH_CATEGORY:
      return {
        ...state,
        fetching: true,
      };
    case Types.FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        fetching: false,
        category: action.data,
      };
    case Types.FETCH_CATEGORY_FAILED:
      return {
        ...state,
        fetching: false,
        error: action.error,
      };

    default:
      return state;
  }
};
export default headerReducer;
