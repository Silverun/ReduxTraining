import {cartActions} from './actions';
import {CartActionsTypes, CartState} from './types';

const initialState: CartState = {
  items: [],
};

export const cartReducer = (
  state = initialState,
  action: CartActionsTypes,
): CartState => {
  switch (action.type) {
    case cartActions.addItemToCart:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case cartActions.removeItemFromCart:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};
