import { RECEIVE_EVENT, DELETE_EVENT } from '../actions/event_actions';
import merge from 'lodash/merge';

const defaultEventDetailState = {
  id: "",
  title: "",
  image_url: "",
  description: "",
  host_id: null,
  start_date: "",
  start_time: "",
  end_date: "",
  end_time: "",
  start_date_time: "",
  end_date_time: "",
  categories: []
}

const EventDetailReducer = (oldstate = defaultEventDetailState, action) => {
  Object.freeze(oldstate);
  switch(action.type){
    case RECEIVE_EVENT:
      const requestedEvent = action.event;
      const newState = merge({}, oldstate, action.event);
      // const date = new Date(action.event.start_date_time).toString();
      // console.log("date", date);
      // newState.start_date = date.slice(0,15);
      // newState.start_time = date.slice(16,24);
      // console.log(newState);
      return requestedEvent;
    case DELETE_EVENT:
      return defaultEventDetailState;
    default:
      return oldstate;
  };
};

export default EventDetailReducer;
