import {authActions, AuthActionTypes, AuthState} from './types';

const initialAuthState: AuthState = {
  isAuthenticated: false,
  user: null,
};

export const authReducer = (
  state = initialAuthState,
  action: AuthActionTypes,
): AuthState => {
  switch (action.type) {
    case authActions.LOG_IN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case authActions.LOG_OUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};
