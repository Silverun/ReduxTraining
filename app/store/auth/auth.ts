import {makeAutoObservable, reaction} from 'mobx';
import {AuthState, AuthActions, User} from './auth.types';

export class AuthSlice implements AuthState, AuthActions {
  user: User | null = null;
  isAuthenticated: boolean = false;

  constructor() {
    makeAutoObservable(this, {}, {autoBind: true});
    reaction(
      () => this.isAuthenticated,
      isAuthenticated => {
        console.log('REACTION: auth changed', isAuthenticated);
      },
    );
  }

  login(user: User) {
    console.log('User inside login action:', user);
    this.user = user;
    this.isAuthenticated = true;
    console.log('User state after login:', this.isAuthenticated, this.user);
  }

  logout() {
    this.user = null;
    this.isAuthenticated = false;
  }
}

export const AuthStore = new AuthSlice();
