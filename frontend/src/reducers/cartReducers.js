import { CART_ADD_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const exits = state.cartItems.find((x) => x.product === item.product);
      console.log(exits);
      if (exits) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) => (x.product === item.product ? item : x)),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    default:
      return state;
  }
};
