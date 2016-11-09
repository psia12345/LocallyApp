export const index = (success, error) => {
  $.ajax({
    method: 'GET',
    url: 'api/events',
    success,
    error
  });
};

export const show = (id, success, error) => {
  $.ajax({
    method: 'GET',
    url: `api/events/${id}`,
    success,
    error
  });
};

export const create = (event, success, error) => {
  $.ajax({
    method: 'POST',
    url: 'api/events',
    data: {event},
    success,
    error
  });
};

export const update = (event, success, error) => {
  debugger;
  $.ajax({
    method: 'PATCH',
    url: `api/events/${event.id}`,
    data: {event},
    success,
    error
  });
};

export const remove = (id, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `api/events/${id}`,
    success,
    error
  })
}

export const attending = (eventId, userId, success, error)
