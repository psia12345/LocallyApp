import React from 'react';
import {Link, withRouter} from 'react-router';
import EventIndexItem from '../event/event_index_item';


class User extends React.Component{
  constructor(props){
    super(props);
    this.redirectToEvents = this.redirectToEvents.bind(this);
    this.handleSavedEvent = this.handleSavedEvent.bind(this);
    this.handleAttendingEvent = this.handleAttendingEvent.bind(this);
    this.handleManageEvent = this.handleManageEvent.bind(this);
  }

  handleSavedEvent(e){
    e.preventDefault();
    return(
      <div className="event-lists">
        <ul>
          {this.props.currentUser.interested_events.map( (event, index) =>
            (<li key={index}><EventIndexItem event={event}/></li>))}
          </ul>
        </div>
    )
  }

  handleAttendingEvent(e){
    e.preventDefault();
    return(
      <div className="event-lists">
        <ul>
          {this.props.currentUser.attending_events.map( (event, index) =>
            (<li key={index}><EventIndexItem event={event}/></li>))}
        </ul>
      </div>
    )
  }

  handleManageEvent(e){
    e.preventDefault();
    return(
      <div className="event-lists">
        <ul>
          {this.props.currentUser.host_events.map( (event, index) =>
            (<li key={index}><EventIndexItem event={event}/></li>))}
        </ul>
      </div>
    )

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
          <Link id="upcoming-events" onClick={this.handleAttendingEvent}>Upcoming Events</Link>
          <Link id="saved-events" onClick={this.handleSavedEvent}>Saved Events</Link>
          <Link id="edit-event" onClick={this.handleManageEvent}>Edit Event</Link>
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
