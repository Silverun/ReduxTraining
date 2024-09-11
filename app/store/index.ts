import {autorun, IReactionDisposer, makeAutoObservable, reaction} from 'mobx';

export class Store {
  slices = {};

  reactionDisposer: IReactionDisposer;

  constructor() {
    this;
    makeAutoObservable(this);
    autorun(() => {
      console.log();
    });
    this.reactionDisposer = reaction(
      () => {},
      () => {
        console.log(this.slices);
      },
    );
  }

  destroy() {
    this.reactionDisposer();
  }
}

export const createStore = () => new Store();
