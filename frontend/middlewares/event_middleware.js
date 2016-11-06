import { index, show, create,
  update, remove } from '../util/event_api_util';
//some actions import here
import { GET_EVENT, receiveErrors,
         receiveEvent, removeEvent,
         receiveEvents, GET_EVENTS, UPDATE_EVENT,
         CREATE_EVENT, DELETE_EVENT
      } from '../actions/event_actions';

export default ({getState, dispatch}) => next => action => {
  const successEventCallback = event => {dispatch(receiveEvent(event))};
  const successEventsCallback = events => dispatch(receiveEvents(events));
  const errorCallback = errors => dispatch(receiveErrors(errors.responseJSON));
  const successDeleteCallback = () => dispatch(removeEvent(event));

  switch(action.type){
    case GET_EVENT:
      show(action.id, successEventCallback, errorCallback);
      return next(action);
    case GET_EVENTS:
      index(successEventsCallback, errorCallback);
      return next(action);
    case UPDATE_EVENT:
      update(successEventCallback, errorCallback);
      return next(action);
    case CREATE_EVENT:
      create(action.event, successEventCallback, errorCallback);
      return next(action);
    case DELETE_EVENT:
      remove(action.id, successDeleteCallback, errorCallback);
      return next(action);
    default:
      return next(action);

  }
};

// how does delete logic work??
