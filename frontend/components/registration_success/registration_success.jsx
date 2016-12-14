import React from 'react';
import {Link, route} from 'react-router';

const RegistrationSuccess = ({event, currentUser}) => {
  debugger;
  return(
  <div className="registration-success">
    <Link to={`/events/${event.id}`}>Back to {event.title}</Link>
    <div className="register-event-box">
      <h2>You're going to {event.title}!</h2>
      <p>Your order has been saved to
        <br/>'My Upcoming Events'.</p>
      <button><Link to={`/users/${currentUser.id}`}>Go To My Upcoming Events</Link></button>
    </div>
    <div className="organize-own-event">
      <h3>Organize Your Own Event</h3>
      <p>Millions of people have hosted events on Locally.<br/> You can too!</p>
      <button><Link to="/new_event">TRY IT NOW</Link></button>
    </div>
  </div>
)}
export default RegistrationSuccess;
