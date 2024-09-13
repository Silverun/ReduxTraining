import {autorun, IReactionDisposer, makeAutoObservable, reaction} from 'mobx';
import {AuthSlice} from './auth/auth';
import {CartSlice} from './cart/CartSlice';
import {ItemsSlice} from './items/items';

const rootStoreSlices = {
  auth: new AuthSlice(),
  items: new ItemsSlice(),
  cart: new CartSlice(),
};

export type RootStoreSlices = typeof rootStoreSlices;
// type values = RootStoreSlices[keyof RootStoreSlices];
// type keys = keyof RootStoreSlices;

// export class RootStore {
//   [key: string]: RootStoreSlices[keyof RootStoreSlices];

//   constructor(slices: RootStoreSlices) {
//     for (const key in slices) {
//       this[key as keyof RootStoreSlices] = slices[key];
//     }
//   }
// }

export class RootStore {
  private slices: RootStoreSlices;

  constructor(slices: RootStoreSlices) {
    this.slices = slices;
    makeAutoObservable(this);
    console.log('RootStore init');
  }

  get auth() {
    console.log('get auth ran');
    return this.slices.auth;
  }
  get items() {
    console.log('get items ran');
    return this.slices.items;
  }
  get cart() {
    return this.slices.cart;
  }
}

export const rootStore = new RootStore(rootStoreSlices);

// export class Store {
//   slices = {};

//   reactionDisposer: IReactionDisposer;

//   constructor() {
//     this;
//     makeAutoObservable(this);
//     autorun(() => {
//       console.log();
//     });
//     this.reactionDisposer = reaction(
//       () => {},
//       () => {
//         console.log(this.slices);
//       },
//     );
//   }

//   destroy() {
//     this.reactionDisposer();
//   }
// }

// export const createStore = () => new Store();
