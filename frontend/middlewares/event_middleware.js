import { index, show, create,
  update, remove, attending, cancelAttending, interested, cancelSave } from '../util/event_api_util';
//some actions import here
import { GET_EVENT, receiveErrors,
         receiveEvent, removeEvent,
         receiveEvents, GET_EVENTS, UPDATE_EVENT,
         CREATE_EVENT, DELETE_EVENT, ADD_ATTENDEE,
         REMOVE_ATTENDEE, ADD_INTERESTED, REMOVE_INTERESTED, getEvent
      } from '../actions/event_actions';
import { FILTER_BY_CATEGORY } from '../actions/category_actions';
import { filter } from '../util/category_api_utils';


import {hashHistory} from 'react-router';

export default ({getState, dispatch}) => next => action => {
  const successEventCallback = event => dispatch(receiveEvent(event));
  const successEventsCallback = events => dispatch(receiveEvents(events));
  const errorCallback = errors => dispatch(receiveErrors(errors.responseJSON));
  const successDeleteCallback = () => dispatch(removeEvent(event));
  const successCreatedEventCallback = event => {
    dispatch(receiveEvent);
    hashHistory.push(`/events/${event.id}`)
  }
  const successAddAttendeeCallback = event => dispatch(getEvent(event.id));
  const successCategoryFilterCallback = events => dispatch(receiveEvents(events.events));

  switch(action.type){
    case GET_EVENT:
      show(action.id, successEventCallback, errorCallback);
      return next(action);
    case GET_EVENTS:
      index(successEventsCallback, errorCallback);
      return next(action);
    case UPDATE_EVENT:
      update(action.event, successEventCallback, errorCallback);
      return next(action);
    case CREATE_EVENT:
      create(action.event, successEventCallback, errorCallback);
      return next(action);
    case DELETE_EVENT:
      remove(action.id, successEventsCallback, errorCallback);
      return next(action);
    case ADD_ATTENDEE:
      attending(action.ids, successAddAttendeeCallback, errorCallback);
      return next(action);
    case REMOVE_ATTENDEE:
      cancelAttending(action.id, successAddAttendeeCallback, errorCallback);
      return next(action);
    case ADD_INTERESTED:
      interested(action.ids, successAddAttendeeCallback, errorCallback);
      return next(action);
    case REMOVE_INTERESTED:
      cancelSave(action.id, successAddAttendeeCallback, errorCallback);
      return next(action);
    case FILTER_BY_CATEGORY:
      filter(action.id, successCategoryFilterCallback, errorCallback);
      return next(action);
    default:
      return next(action);

  }
};

// how does delete logic work??
