import React from 'react';
import EventIndexItem from '../event/event_index_item';
import {Link } from 'react-router';

const CategorySearch = (props) => {
  const allEvents = props.events
  const category = props.category
  return(
    <div className="main-content">
      <div className="sidebar">
        <h3>Category</h3>
        <ul>
          <li className={typeof category=== "undefined" ? "clicked" : ""}><Link to='/events'>All Events
          </Link></li>
          <li className={category=== "books" ? "clicked" : ""}><Link to='/api/categories/1/books' name="1" >Books
          </Link></li>
          <li className={category === "furniture" ? "clicked" : ""}><Link to='/api/categories/2/furniture' name="2" >Furniture
          </Link></li>
          <li className={category === "clothing" ? "clicked" : ""}><Link to='/api/categories/3/clothing' name="3" >Clothing</Link></li>
          <li className={category === "food" ? "clicked" : ""}><Link to='/api/categories/4/food' name="4" >Food</Link></li>
          <li className={category=== "toys" ? "clicked" : ""}><Link to='/api/categories/5/toys' name="5" >Toys
          </Link></li>
          <li className={category === "music" ? "clicked" : ""}><Link to='/api/categories/6/music' name="6">Music</Link></li>
          <li className={category === "jewlery&accessories" ? "clicked" : ""}><Link to='/api/categories/7/jewlery&amp;accessories' name="7">Jewlery & Accessories</Link></li>
          <li className={category === "dishware" ? "clicked" : ""}><Link to='/api/categories/8/dishware' name="8">Dishware</Link></li>
          <li className={category === "art&craft" ? "clicked" : ""}><Link to='/api/categories/9/art&amp;craft' name="9">Art & Craft</Link></li>
          <li className={category === "others" ? "clicked" : ""}><Link to='/api/categories/10/others' name="10">Others</Link></li>
        </ul>
      </div>
      <section className="event-list-section">
        <div className="description clearfix">
          <h2>Showing all <span className="emphasis">{typeof category !== 'undefined' ? `${category} ` : ""}</span>events for you!</h2>
        </div>
      <div className="event-listing">
        <ul className="filtered-results">
          {allEvents.map((event, idx) => (
              <li key={idx}><Link to={`events/${event.id}`}><EventIndexItem event={event} /></Link></li>
            ))}
        </ul>
      </div>
    </section>
  </div>
)}



export default CategorySearch;


// <button className="tagbubble">{category}</button>
