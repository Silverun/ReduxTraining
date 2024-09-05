import {User, AuthActionTypes, authActions} from './types';

export const login = (user: User): AuthActionTypes => {
  return {
    type: authActions.LOG_IN,
    payload: user,
  };
};

export const logout = (): AuthActionTypes => {
  return {
    type: authActions.LOG_OUT,
  };
};
