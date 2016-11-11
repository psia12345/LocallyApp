import React from 'react';
import {Link, withRouter} from 'react-router';
import EventIndexItem from '../event/event_index_item';

class User extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      displayInfo: "Upcoming Events",
      manageClick: "",
      bookmarkClick: "",
      upcomingClick: "clicked"
    }
    this.redirectToEvents = this.redirectToEvents.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderDisplayInfo = this.renderDisplayInfo.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    const name = e.currentTarget.name
    this.setState({
      displayInfo: name,
    })
    if (name=== 'Manage Events'){
      this.setState({
        manageClick: 'clicked',
        bookmarkClick: '',
        upcomingClick: ''
      })
    } else if (name === "Bookmarked Events"){
      this.setState({
        bookmarkClick: 'clicked',
        upcomingClick: '',
        manageClick: ''
      })
    } else {
      this.setState({
        upcomingClick: 'clicked',
        bookmarkClick: '',
        manageClick: ''
      })
    }
  }

  renderDisplayInfo(){
    if (this.state.displayInfo === "Manage Events"){
      return(
        <div className="event-lists">
          <ul>
            {this.props.currentUser.host_events.map( (event, index) =>
              (<li key={index}><Link to={`events/${event.id}`}><EventIndexItem event={event}/></Link></li>))}
          </ul>
        </div>
      )
    } else if (this.state.displayInfo === "Bookmarked Events"){
      return(
        <div className="event-lists">
          <ul>
            {this.props.currentUser.interested_events.map( (event, index) =>
              (<li key={index}><Link to={`events/${event.id}`}><EventIndexItem event={event}/></Link></li>))}
            </ul>
          </div>
      )
    } else {
      return(
        <div className="event-lists">
          <ul>
            {this.props.currentUser.attending_events.map( (event, index) =>
              (<li key={index}><Link to={`events/${event.id}`}><EventIndexItem event={event}/></Link></li>))}
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
        <ul className="event-links">
          <li className={this.state.upcomingClick}><Link id="upcoming-events" name="Upcoming Events" onClick={this.handleClick}>Upcoming Events</Link></li>
          <li className={this.state.bookmarkClick}><Link id="saved-events" name="Bookmarked Events"
            onClick={this.handleClick}>Saved Events</Link></li>
          <li className={this.state.manageClick}><Link id="edit-event" name="Manage Events"
            onClick={this.handleClick}>Manage Event</Link></li>
        </ul>
        <div className='user-specific-events'>
          { this.renderDisplayInfo() }
        </div>
        <button onClick={this.redirectToEvents}>Discover Events</button>
      </div>
    )
  }
}


export default withRouter(User);
