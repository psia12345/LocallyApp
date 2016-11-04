import React from 'react';
import EventIndexItem from './event_index_item';


const EventList = (props) => (
  <div>
    <ul>
      {props.events.map( (event, idx) => (
          <li key={idx}><EventIndexItem event={event}/></li>
      ))}
    </ul>
  </div>
)

export default EventList;
