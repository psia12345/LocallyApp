import { RECEIVE_EVENT, DELETE_EVENT } from '../actions/event_actions';
import merge from 'lodash/merge';
import dateFormat from 'dateformat';

const defaultEventDetailState = {
  id: "",
  title: "",
  image_url: "",
  description: "",
  host_id: null,
  start_date: "",
  start_time: "",
  start_date_time: "",
  end_date_time: "",
  end_date: "",
  end_time: "",
  categories: []
}

const EventDetailReducer = (oldstate = defaultEventDetailState, action) => {
  Object.freeze(oldstate);
  switch(action.type){
    case RECEIVE_EVENT:

      const start_date = dateFormat(action.event.start_date_time, "dddd, mmmm dS, yyyy");
      const start_time = dateFormat(action.event.start_date_time, "h:MM:ss TT");
      const end_date = dateFormat(action.event.end_date_time, "dddd, mmmm dS, yyyy");
      const end_time = dateFormat(action.event.end_date_time, "h:MM:ss TT");

      const requestedEvent = action.event;
      const newState = merge({}, oldstate, action.event, {start_time, start_date, end_time, end_date});

      return newState;
    case DELETE_EVENT:
      return defaultEventDetailState;
    default:
      return oldstate;
  };
};

export default EventDetailReducer;
