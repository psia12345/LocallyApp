import { RECEIVE_EVENTS, RECEIVE_EVENT,
         RECEIVE_ERRORS, REMOVE_EVENT } from '../actions/event_actions';
import merge from 'lodash/merge';

const EventReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch(action.type){
    case RECEIVE_EVENTS:
      return action.events;
    case REMOVE_EVENT:
      return oldState;
    default:
    return oldState;
  };
};

export default EventReducer;
