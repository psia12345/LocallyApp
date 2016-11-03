import { RECEIVE_CURRENT_USER, LOGOUT, RECEIVE_ERRORS,
         CLEAR_ERROR } from '../actions/session_actions';
import merge from 'lodash/merge';


const nullUserState = Object.freeze({
    currentUser: null,
    errors: []
});

const SessionReducer = (oldState = nullUserState, action) => {
  Object.freeze(oldState);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      const user = merge({}, nullUserState, {currentUser});
      return user;
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, nullUserState, {errors});
    case LOGOUT:
      return merge({}, nullUserState);
    case CLEAR_ERROR:
      const newState = merge({}, oldState);
      newState.errors = [];
      return newState;
    default:
      return oldState;
  }
};

export default SessionReducer;
