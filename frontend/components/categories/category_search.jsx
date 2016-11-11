import React from 'react';
import EventIndexItem from '../event/event_index_item';

const CategorySearch = ({events}) => {
  return(
  <div className="category-filtered">
    <h1>Showing Events for you!</h1>
    <ul className="filtered-results">
      {events.map((event, idx) => (
          <li key={idx}><EventIndexItem event={event} /></li>
        ))}
    </ul>
  </div>
)}



export default CategorySearch;
