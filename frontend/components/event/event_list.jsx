import React from 'react';
import EventIndexItem from './event_index_item';


const EventList = (props) => (
  <section className="event-list-section">

    <h2>Displaying All Events For You</h2>
    <p>Whether you’re a local, new in town, or just passing through, you’ll find something here that piques your interest. Browse below to see what’s happening in the area.</p>
    <ul className="event-listing">
      {props.events.map( (event, idx) => (
          <li key={idx}><EventIndexItem event={event}/></li>
      ))}
    </ul>
  </section>
)

export default EventList;
