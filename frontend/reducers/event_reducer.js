import { RECEIVE_EVENTS, RECEIVE_EVENT,
         RECEIVE_ERRORS, DELETE_EVENT } from '../actions/event_actions';

const EventReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch(action.type){
    case RECEIVE_EVENTS:
      return action.events;
    default:
    return oldState;
  };
};

export default EventReducer;
