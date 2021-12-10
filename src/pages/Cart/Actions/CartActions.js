import { Types } from "./actionTypes";

export const increase = (product) => {
  return {
    type: Types.INCREASE,
    isEndpointCall: false,
    data: product,
  };
};

export const decrease = (id) => {
  return {
    type: Types.DECREASE,
    isEndpointCall: false,
    data: id,
  };
};

export const remove = (id) => {
  return {
    type: Types.REMOVE,
    isEndpointCall: false,
    data: id,
  };
};
