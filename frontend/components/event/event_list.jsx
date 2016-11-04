import React from 'react';
import EventIndexItem from './event_index_item';
import Sidebar from './sidebar';

const EventList = (props) => (
  <div>
    <div className="extra clearfix"></div>

    <div className="main-content">
      <Sidebar />
      <section className="event-list-section">
        <div className="description">
          <h2>Displaying All Events For You</h2>
          <p>Whether you’re a local, new in town, or just passing through, you’ll find something here that piques your interest. Browse below to see what’s happening in the area.</p>
        </div>
        <ul className="event-listing">
          {props.events.map( (event, idx) => (
            <li key={idx}><EventIndexItem event={event}/></li>
          ))}
        </ul>
      </section>
    </div>
  </div>
)

export default EventList;
