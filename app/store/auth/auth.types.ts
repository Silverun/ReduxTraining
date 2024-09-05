export interface User {
  name: string;
  email: string;
  password: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

// export const authActions = {
//   LOG_IN: 'LOG_IN',
//   LOG_OUT: 'LOG_OUT',
// } as const;

// export interface LoginAction {
//   type: typeof authActions.LOG_IN;
//   payload: User;
// }

// export interface LogoutAction {
//   type: typeof authActions.LOG_OUT;
// }

// export type AuthActionTypes = LoginAction | LogoutAction;
