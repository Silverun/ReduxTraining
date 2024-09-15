import {produce} from 'immer';
import {AuthActions, AuthState, User} from './auth.types';
import {create} from 'zustand';
import {makeAutoObservable} from 'mobx';

export const useAuthSlice = create<AuthState & AuthActions>(set => ({
  user: null,
  isAuthenticated: false,
  login: user =>
    set(
      produce((state: AuthState) => {
        state.user = user;
        state.isAuthenticated = true;
      }),
    ),
  logout: () =>
    set(() => ({
      user: null,
      isAuthenticated: false,
    })),
}));

class Auth implements AuthState, AuthActions {
  user: User | null = null;
  isAuthenticated = false;

  constructor() {
    makeAutoObservable(this);
  }

  login(user: User) {
    console.log('login');
    this.user = user;
    this.isAuthenticated = true;
  }
  logout() {
    this.user = null;
    this.isAuthenticated = false;
  }
}

export const auth = new Auth();
