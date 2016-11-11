import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import EventReducer from './event_reducer';
import EventDetailReducer from './event_detail_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  events: EventReducer,
  eventShow: EventDetailReducer,
});

export default RootReducer;
