import {makeAutoObservable, reaction} from 'mobx';

class Counter {
  count = 0;

  constructor() {
    makeAutoObservable(this);
    reaction(
      () => this.count,
      (arg, prev) => {
        console.log('arg: ', arg, 'prev: ', prev);
      },
    );
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}

// export const counter = () => new Counter();
export const counterStore = new Counter();
