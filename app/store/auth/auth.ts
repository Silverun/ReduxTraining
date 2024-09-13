import {makeAutoObservable, reaction} from 'mobx';
import {AuthState, AuthActions, User} from './auth.types';

export class AuthSlice implements AuthState, AuthActions {
  user: User | null = null;
  isAuthenticated: boolean = false;

  constructor() {
    makeAutoObservable(this);
    reaction(
      () => this.user,
      user => {
        console.log('REACTION: user changed', user);
      },
    );
  }

  login(user: User) {
    console.log('user inside login action:', user);
    this.user = user;
    this.isAuthenticated = true;
    console.log('User state after login:', this.isAuthenticated, this.user);
  }

  logout() {
    this.user = null;
    this.isAuthenticated = false;
  }
}
