import React from 'react';

const Sidebar = () => (
  <div className="sidebar">
    <img src="https://images.unsplash.com/photo-1461183479101-6c14cd5299c4?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=3dd207972d41260cab63811848a3ead0" alt="map"/>
    <ul className="sidebar-content">
      <li>Category</li>
        <ul className="sub-category">
          <li>All Categories</li>
          <li>PlaceHolder</li>
          <li>PlaceHolder</li>
        </ul>
      <li>Event Type</li>
        <ul className="sub-event-type">
          <li>PlaceHolder</li>
          <li>PlaceHolder</li>
          <li>PlaceHolder</li>
          <li>PlaceHolder</li>
        </ul>
      <li>Date</li>
        <ul className="sub-date">
          <li>All Dates</li>
          <li>Today</li>
          <li>Tomorrow</li>
          <li>This Week</li>
          <li>This Weekend</li>
          <li>Next Week</li>
          <li>This Month</li>
          <li>Custom Date</li>
        </ul>
      <li>Price</li>
        <ul className="sub-price">
          <li>PlaceHolder</li>
          <li>PlaceHolder</li>
          <li>PlaceHolder</li>
          <li>PlaceHolder</li>
        </ul>
    </ul>
  </div>
);

export default Sidebar;
