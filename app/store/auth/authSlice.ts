import {produce} from 'immer';
import {AuthActions, AuthState} from './auth.types';
import {create} from 'zustand';

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
