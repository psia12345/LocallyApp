export const GET_EVENTS = 'GET_EVENTS';
export const GET_EVENT = 'GET_EVENT';
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const UPDATE_EVENT = 'UPDATE_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CREATE_EVENT = 'CREATE_EVENT'; 

export const getEvents = () => ({
  type: GET_EVENTS
});

export const getEvent = (id) => ({
  type: GET_EVENT,
  id
});

export const receiveEvent = (event) => ({
  type: RECEIVE_EVENT,
  event
});

export const receiveEvents = (events) => ({
  type: RECEIVE_EVENTS,
  events
});

export const updateEvent = (event) => ({
  type: UPDATE_EVENT,
  event
});

export const createEvent = (event) => ({
  type: CREATE_EVENT,
  event
});

export const deleteEvent = (id) => ({
  type: DELETE_EVENT,
  id
})

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
})
