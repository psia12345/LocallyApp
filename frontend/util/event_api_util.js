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

export const attending = (ids, success, error) => {
  $.ajax({
    method: 'POST',
    url: 'api/event_attendees',
    data: {event_attendee: ids},
    success,
    error
  })
}

export const cancelAttending = (id, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `/api/events/${id}/remove_attendee`,
    success,
    error
  })
}


export const interested = (ids, success, error) => {
  $.ajax({
    method: 'POST',
    url: '/api/event_interested',
    data: {event_interested: ids},
    success,
    error
  })
}


export const cancelSave = (id, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `/api/events/${id}/remove_interested`,
    success,
    error
  })
}
