import React from 'react';
import {Link, withRouter} from 'react-router';
import EventIndexItem from '../event/event_index_item';

class User extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      displayInfo: "Upcoming Events"
    }
    this.redirectToEvents = this.redirectToEvents.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderDisplayInfo = this.renderDisplayInfo.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    const name = e.currentTarget.name
    this.setState({
      displayInfo: name
    })
  }

  renderDisplayInfo(){
    if (this.state.displayInfo === "Manage Events"){
      return(
        <div className="event-lists">
          <ul>
            {this.props.currentUser.host_events.map( (event, index) =>
              (<li key={index}><EventIndexItem event={event}/></li>))}
          </ul>
        </div>
      )
    } else if (this.state.displayInfo === "Bookmarked Events"){
      return(
        <div className="event-lists">
          <ul>
            {this.props.currentUser.interested_events.map( (event, index) =>
              (<li key={index}><EventIndexItem event={event}/></li>))}
            </ul>
          </div>
      )
    } else {
      return(
        <div className="event-lists">
          <ul>
            {this.props.currentUser.attending_events.map( (event, index) =>
              (<li key={index}><EventIndexItem event={event}/></li>))}
          </ul>
        </div>
      )
    }
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
          <Link id="upcoming-events" name="Upcoming Events" onClick={this.handleClick}>Upcoming Events</Link>
          <Link id="saved-events" name="Bookmarked Events"
            onClick={this.handleClick}>Saved Events</Link>
          <Link id="edit-event" name="Manage Events"
            onClick={this.handleClick}>Edit Event</Link>
        </div>
        <div>
          { this.renderDisplayInfo() }
        </div>
        <button onClick={this.redirectToEvents}>Discover Events</button>
      </div>
    )
  }
}


export default withRouter(User);
