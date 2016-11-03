import {createStore} from 'redux';
import RootMiddleware from '../middlewares/root_middleware';
import RootReducer from '../reducers/root_reducer';

const configStore = (preloadedState = {}) => (
  createStore(RootReducer, preloadedState, RootMiddleware)
);

export default configStore;
