import { Types } from "../Actions/actionTypes";

const initState = {
  amazingoffer: [],
  Bestsellers: [],
  newest: [],
  fetching: false,
  error: null,
};

const dashboardReducer = (state = initState, action) => {
  switch (action.type) {
    case Types.FETCH_AMAZINGOFFER:
      return {
        ...state,
        fetching: true,
      };
    case Types.FETCH_AMAZINGOFFER_SUCCESS:
      return {
        ...state,
        fetching: false,
        amazingoffer: action.data,
      };
    case Types.FETCH_AMAZINGOFFER_FAILED:
      return {
        ...state,
        fetching: false,
        error: action.error,
      };
    case Types.FETCH_BESTSELLERS:
      return {
        ...state,
        fetching: true,
      };
    case Types.FETCH_BESTSELLERS_SUCCESS:
      return {
        ...state,
        fetching: false,
        Bestsellers: action.data,
      };
    case Types.FETCH_BESTSELLERS_FAILED:
      return {
        ...state,
        fetching: false,
        error: action.error,
      };
    case Types.FETCH_NEWEST:
      return {
        ...state,
        fetching: true,
      };
    case Types.FETCH_NEWEST_SUCCESS:
      return {
        ...state,
        fetching: false,
        newest: action.data,
      };
    case Types.FETCH_NEWEST_FAILED:
      return {
        ...state,
        fetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default dashboardReducer;
