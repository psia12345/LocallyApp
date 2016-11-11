import React from 'react';
import EventIndexItem from '../event/event_index_item';
import {Link } from 'react-router';

const CategorySearch = ({events, category}) => {
  console.log(category)
  return(
  <div className="category-filtered">
    <h1>Showing Events for you!</h1>
    <button className="tagbubble">{category}</button>
    <ul className="filtered-results">
      {events.map((event, idx) => (
          <li key={idx}><Link to={`events/${event.id}`}><EventIndexItem event={event} /></Link></li>
        ))}
    </ul>
  </div>
)}



export default CategorySearch;
