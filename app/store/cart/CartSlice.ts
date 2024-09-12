import {CartActions, CartState} from './CartSlice.types';
import {Item} from '../items/items.types';
import {makeAutoObservable} from 'mobx';

export class CartSlice implements CartState, CartActions {
  items: Item[] = [];

  constructor() {
    makeAutoObservable(this);
  }
  addItemToCart(item: Item): void {
    this.items.push(item);
  }
  removeItemFromCart(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
  }

  get cartTotal() {
    return this.items.reduce((total: number, item) => total + item.price, 0);
  }
}

// export const useCartSlice = create<CartState & CartActions>()(
//   immer(set => ({
//     ...initialCartState,
//     addItemToCart(item) {
//       set(state => state.items.push(item));
//     },
//     removeItemFromCart(id) {
//       set(state => {
//         state.items = state.items.filter(item => item.id !== id);
//       });
//     },
//   })),
// );
