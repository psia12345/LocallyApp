import { index, show, create,
  update, removeEvent } from '../util/event_api_util';
//some actions import here
import { GET_EVENT, receiveErrors, receiveEvent,
         receiveEvents, GET_EVENTS, UPDATE_EVENT
      } from '../actions/event_actions';

export default ({getState, dispatch}) => next => action => {
  const successEventCallback = event => dispatch(receiveEvent(event));
  const successEventsCallback = events => dispatch(receiveEvents(events));
  const errorCallback = errors => dispatch(receiveErrors(errors.responseJSON));

  switch(action.type){
    case GET_EVENT:
      show(id, successEventCallback, errorCallback);
      return next(action);
    case GET_EVENTS:
      index(successEventsCallback, errorCallback);
      return next(action);
    case UPDATE_EVENT:
      update(successEventCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};

// how does delete logic work??
