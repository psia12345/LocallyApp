import SessionReducer from './session_reducer';
import {combineReducers} from 'redux';
import EventReducer from './event_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  events: EventReducer
});

export default RootReducer;
