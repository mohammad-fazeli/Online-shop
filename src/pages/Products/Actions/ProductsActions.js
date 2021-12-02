import { Types } from "./actionTypes";

export const fetchProductsData = (category) => {
  return {
    type: Types.FETCH_PRODUCTS_DATA,
    successType: Types.FETCH_PRODUCTS_DATA_SUCCESS,
    failedType: Types.FETCH_PRODUCTS_DATA_FAILED,
    isEndpointCall: true,
    endpoint: `/${category}/data`,
    method: "GET",
  };
};

export const fetchProductsfilter = (category) => {
  return {
    type: Types.FETCH_PRODUCTS_FILTER,
    successType: Types.FETCH_PRODUCTS_FILTER_SUCCESS,
    failedType: Types.FETCH_PRODUCTS_FILTER_FAILED,
    isEndpointCall: true,
    endpoint: `/${category}/filters`,
    method: "GET",
  };
};

export const fetchProductssubdivision = (category) => {
  return {
    type: Types.FETCH_PRODUCTS_SUBIVISION,
    successType: Types.FETCH_PRODUCTS_SUBIVISION_SUCCESS,
    failedType: Types.FETCH_PRODUCTS_SUBIVISION_FAILED,
    isEndpointCall: true,
    endpoint: `/${category}/subdivision`,
    method: "GET",
  };
};
