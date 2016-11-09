import { receiveCurrentUser,
         receiveSessionErrors,
         FETCH_USER,
         LOGIN,
         LOGOUT,
         SIGNUP } from '../actions/session_actions';
import { login, logout, signup } from '../util/session_api_util';
import { fetchUser } from '../util/user_api_util'; 

export default ({getState, dispatch}) => next => action => {
  const successCallback = user => dispatch(receiveCurrentUser(user));
  const errorCallback = errors => dispatch(receiveSessionErrors(errors.responseJSON));
  const errorUserCallback = errors => console.log(errors);

  switch(action.type){
    case LOGIN:
      login(action.user, successCallback, errorCallback);
      return next(action);
    case LOGOUT:
      logout(() => next(action));
      break;
    case SIGNUP:
      signup(action.user, successCallback, errorCallback);
      return next(action);
    case FETCH_USER:
      fetchUser(action.id, successCallback, errorUserCallback);

    default:
      return next(action);
  }
};
