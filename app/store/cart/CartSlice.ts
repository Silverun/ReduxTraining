import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CartState} from './CartSlice.types';
import {Item} from '../items/items.types';

const initialCartState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  initialState: initialCartState,
  name: 'cart',
  reducers: {
    addItemToCart(state, action: PayloadAction<Item>) {
      state.items.push(action.payload);
    },
    removeItemFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
