import {Item} from '../items/types';

export const cartActions = {
  addItemToCart: 'ADD_ITEM_TO_CART',
  removeItemFromCart: 'REMOVE_ITEM_FROM_CART',
} as const;

export const addItemToCart = (item: Item) => ({
  type: cartActions.addItemToCart,
  payload: item,
});

export const removeItemFromCart = (itemId: number) => ({
  type: cartActions.removeItemFromCart,
  payload: itemId,
});
