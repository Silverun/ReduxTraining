import {makeAutoObservable} from 'mobx';
import {AuthState, AuthActions, User} from './auth.types';

export class AuthSlice implements AuthState, AuthActions {
  user: User | null = null;
  isAuthenticated: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  login(user: User) {
    this.user = user;
    this.isAuthenticated = true;
  }

  logout() {
    this.user = null;
    this.isAuthenticated = false;
  }
}
