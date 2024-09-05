import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthState, User} from './auth.types';

const initialAuthState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  initialState: initialAuthState,
  name: 'auth',
  reducers: {
    login(state, action: PayloadAction<User>) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
