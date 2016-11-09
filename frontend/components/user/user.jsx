import React from 'react';
import {Link, withRouter} from 'react-router';
import EventIndexItem from '../event/event_index_item';


class User extends React.Component{
  constructor(props){
    super(props);
    this.redirectToEvents = this.redirectToEvents.bind(this);
    this.handleSavedEvent = this.handleSavedEvent.bind(this);
  }

  handleSavedEvent(e){
    e.preventDefault();
  }

  redirectToEvents(){
    this.props.router.push("/events")
  }

  render(){
    const currentUser = this.props.currentUser;
    const attending_events = currentUser.attending_events || []
    return(
      <div>
        <h2 className="user-info">{currentUser.email}</h2>
        <div className="event-links">
          <Link id="upcoming-events">Upcoming Events</Link>
          <Link id="saved-events" onClick={this.handleSavedEvent}>Saved Events</Link>
          <Link id="edit-event">Edit Event</Link>
        </div>
        <div className="event-lists">
          <ul>
            {attending_events.map( (event, index) =>
              (<li key={index}><EventIndexItem event={event}/></li>))}
            </ul>
        </div>
        <button onClick={this.redirectToEvents}>Discover Events</button>
      </div>
    )
  }
}


export default withRouter(User);
