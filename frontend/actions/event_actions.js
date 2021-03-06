export const GET_EVENTS = 'GET_EVENTS';
export const GET_EVENT = 'GET_EVENT';
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const UPDATE_EVENT = 'UPDATE_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CREATE_EVENT = 'CREATE_EVENT';
export const REMOVE_EVENT = 'REMOVE_EVENT';
export const ADD_ATTENDEE = 'ADD_ATTENDEE';
export const REMOVE_ATTENDEE = 'REMOVE_ATTENDEE';
export const ADD_INTERESTED = 'ADD_INTERESTED';
export const REMOVE_INTERESTED = 'REMOVE_INTERESTED';


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

export const removeEvent = (event) => ({
  type: REMOVE_EVENT,
  event
})

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
})

export const addAttendee = (ids) => ({
  type: ADD_ATTENDEE,
  ids
})
export const removeAttendee = (id) => ({
  type: REMOVE_ATTENDEE,
  id
})
export const addInterested = (ids) => ({
  type: ADD_INTERESTED,
  ids
})
export const removeInterested = (id) => ({
  type: REMOVE_INTERESTED,
  id
})
