import { Types } from "../Actions/actionTypes";

const initState = {
  cartList: [],
};

const increase = (product, array = []) => {
  const index = array.findIndex((element) => element.id === product.id);
  if (index === -1) {
    return [...array, { ...product, count: 1 }];
  } else {
    const result = array.map((element) => {
      if (element.id === product.id) {
        return { ...element, count: element.count + 1 };
      }
      return element;
    });
    return result;
  }
};

const decrease = (id, array = []) => {
  const index = array.findIndex((element) => element.id === id);
  if (array[index].count === 1) {
    return array.filter((element) => element.id !== id);
  } else {
    return array.map((element) => {
      if (element.id === id) {
        return { ...element, count: element.count - 1 };
      }
      return element;
    });
  }
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case Types.INCREASE:
      return {
        cartList: increase(action.data, state.cartList),
      };
    case Types.DECREASE:
      return {
        cartList: decrease(action.data, state.cartList),
      };
    case Types.REMOVE:
      return {
        cartList: state.cartList.filter(
          (element) => element.id !== action.data
        ),
      };
    case Types.CLEAR:
      return {
        cartList: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
