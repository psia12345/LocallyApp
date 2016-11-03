export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SIGNUP = 'SIGNUP';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const FETCH_USER = 'FETCH_USER';
export const CLEAR_ERROR = 'CLEAR_ERROR';

export const login = user => ({
  type: LOGIN,
  user
});

export const logout = () => ({
  type: LOGOUT
});

export const signup = (user) => ({
  type: SIGNUP,
  user
});

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const fetchUser = (id) => ({
  type: FETCH_USER,
  id
});

export const clearError = () => ({
  type: CLEAR_ERROR,
});
