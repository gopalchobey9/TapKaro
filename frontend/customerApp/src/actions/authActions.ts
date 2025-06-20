import AppDispatcher from '../dispatcher/AppDispatcher';

export const AuthActionTypes = {
  SIGNUP: 'SIGNUP',
  SIGNIN: 'SIGNIN',
  SIGNOUT: 'SIGNOUT',
};

export const signup = (userData: { email: string; password: string }) => {
  AppDispatcher.dispatch({
    type: AuthActionTypes.SIGNUP,
    payload: userData,
  });
};

export const signin = (userData: { email: string; password: string }) => {
  AppDispatcher.dispatch({
    type: AuthActionTypes.SIGNIN,
    payload: userData,
  });
};

export const signout = () => {
  AppDispatcher.dispatch({
    type: AuthActionTypes.SIGNOUT,
  });
}; 