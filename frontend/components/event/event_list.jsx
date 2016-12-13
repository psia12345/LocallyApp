import React from 'react';
import EventIndexItem from './event_index_item';
import Sidebar from './sidebar';
import {Link} from 'react-router';
const EventList = (props) => (
  <div>
    <div className="extra clearfix"></div>
    <div className="main-content">
      <div className="sidebar">
        <h3>Category</h3>
        <ul>
          <li>Book</li>
          <li>Furniture</li>
          <li>Clothing</li>
          <li>Food</li>
          <li>Toy</li>
          <li>Music</li>
          <li>Jewlery & Accessories</li>
          <li>Dishware</li>
          <li>Art & Craft</li>
          <li>Others</li>
        </ul>
      </div>
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
