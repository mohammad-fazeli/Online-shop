import { Types } from "./actionTypes";

export const fetchCategory = () => {
  return {
    type: Types.FETCH_CATEGORY,
    successType: Types.FETCH_CATEGORY_SUCCESS,
    failedType: Types.FETCH_CATEGORY_FAILED,
    isEndpointCall: true,
    endpoint: "/dashbord/category",
    method: "GET",
  };
};
