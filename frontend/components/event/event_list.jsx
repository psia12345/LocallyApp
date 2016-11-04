import React from 'react';
import EventIndexItem from './event_index_item';
import Sidebar from './sidebar';
import {Link} from 'react-router';
const EventList = (props) => (
  <div>
    <div className="extra clearfix"></div>

    <div className="main-content">
      <Sidebar />
      <section className="event-list-section">
        <div className="description clearfix">
          <h2>Displaying All Events For You</h2>
          <p>Whether you’re a local, new in town, or just passing through, you’ll find something here that piques your interest. Browse below to see what’s happening in the area.</p>
        </div>
        <div className="event-listing">
          {props.events.map( (event, idx) => (
            <Link to={`/events/${event.id}`} key={idx}><EventIndexItem event={event}/></Link>
          ))}
        </div>
      </section>
    </div>
  </div>
)

export default EventList;
