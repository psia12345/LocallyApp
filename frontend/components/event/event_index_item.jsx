import React from 'react';
import dateFormat from 'dateformat';

const EventIndexItem = ({event}) =>(
  <div className="single-event">
    <img src={event.image_url} className="event-image-icon"/>
    <div className="event-info">
      <h2>{event.title}</h2>
      <span>{dateFormat(event.start_date, "dddd, mmmm dS, yyyy")}</span>
    </div>
  </div>
)

export default EventIndexItem;
