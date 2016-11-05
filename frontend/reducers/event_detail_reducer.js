import { RECEIVE_EVENT } from '../actions/event_actions';

const defaultEventDetailState = {
  title: "",
  image_url: "",
  description: "",
  host_id: null,
  start_date: "",
  start_time: "",
  end_date: "",
  end_time: "",
  categories: []
}

const EventDetailReducer = (oldstate = defaultEventDetailState, action) => {
  Object.freeze(oldstate);
  switch(action.type){
    case RECEIVE_EVENT:
      const requestedEvent = action.event;
      return requestedEvent;
    default:
      return oldstate;
  };
};

export default EventDetailReducer;
