import React from 'react';

const EventDetail = ({event}) => (
  <section>
    <h1>{event.title}</h1>
    <img src={event.image_url} />
    <p>{event.description}</p>


  </section>

)

export default EventDetail;
