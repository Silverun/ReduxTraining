import {makeAutoObservable} from 'mobx';

export class Auth {
  constructor() {
    makeAutoObservable(this);
  }
}
