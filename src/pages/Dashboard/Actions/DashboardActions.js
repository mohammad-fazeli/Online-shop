import { Types } from "./actionTypes";

export const fetchAmazingOffer = () => {
  return {
    type: Types.FETCH_AMAZINGOFFER,
    successType: Types.FETCH_AMAZINGOFFER_SUCCESS,
    failedType: Types.FETCH_AMAZINGOFFER_FAILED,
    isEndpointCall: true,
    endpoint: "/dashbord/amazingoffer",
    method: "GET",
  };
};

export const fetchBestsellers = () => {
  return {
    type: Types.FETCH_BESTSELLERS,
    successType: Types.FETCH_BESTSELLERS_SUCCESS,
    failedType: Types.FETCH_BESTSELLERS_FAILED,
    isEndpointCall: true,
    endpoint: "/dashbord/Bestsellers",
    method: "GET",
  };
};

export const fetchNewest = () => {
  return {
    type: Types.FETCH_NEWEST,
    successType: Types.FETCH_NEWEST_SUCCESS,
    failedType: Types.FETCH_NEWEST_FAILED,
    isEndpointCall: true,
    endpoint: "/dashbord/newest",
    method: "GET",
  };
};
