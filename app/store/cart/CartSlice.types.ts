import {Item} from '../items/items.types';

export interface CartState {
  items: Item[];
}
export interface CartActions {
  addItemToCart(item: Item): void;
  removeItemFromCart(id: number): void;
}
