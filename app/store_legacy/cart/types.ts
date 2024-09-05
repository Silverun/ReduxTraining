import {Item} from '../items/types';
import {addItemToCart, removeItemFromCart} from './actions';

export interface CartState {
  items: Item[];
}

export type AddItemToCartAction = ReturnType<typeof addItemToCart>;
export type RemoveItemFromCartAction = ReturnType<typeof removeItemFromCart>;

export type CartActionsTypes = AddItemToCartAction | RemoveItemFromCartAction;
