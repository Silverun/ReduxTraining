import {CartActions, CartState} from './CartSlice.types';
import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer';

const initialCartState: CartState = {
  items: [],
};

export const useCartSlice = create<CartState & CartActions>()(
  immer(set => ({
    ...initialCartState,
    addItemToCart(item) {
      set(state => state.items.push(item));
    },
    removeItemFromCart(id) {
      set(state => {
        state.items = state.items.filter(item => item.id !== id);
      });
    },
  })),
);
