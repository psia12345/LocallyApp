import {applyMiddleware} from 'redux';
import SessionMiddleware from './session_middleware';
import EventMiddleware from './event_middleware';

const RootMiddleware = applyMiddleware(SessionMiddleware, EventMiddleware);

export default RootMiddleware;
