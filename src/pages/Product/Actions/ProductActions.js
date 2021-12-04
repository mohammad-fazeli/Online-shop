import { Types } from "./actionTypes";

export const fetchProduct = (category, id) => {
  return {
    type: Types.FETCH_PRODUCT_DATA,
    successType: Types.FETCH_PRODUCT_DATA_SUCCESS,
    failedType: Types.FETCH_PRODUCT_DATA_FAILED,
    isEndpointCall: true,
    endpoint: `/${category}products/${id}`,
    method: "GET",
  };
};
