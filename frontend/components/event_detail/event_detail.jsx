import React from 'react';
import { Link, withRouter } from 'react-router';

class EventDetail extends React.Component {
  constructor(props){
    super(props)
    this.navigateToEventListing = this.navigateToEventListing.bind(this);
    this.handleAttendingClick = this.handleAttendingClick.bind(this);
    this.checkForAttendingUser = this.checkForAttendingUser.bind(this);
  }
  componentDidMount(){
    const eventId = this.props.params.id
    this.props.getEvent(eventId);
  }

  showUpdateDelete(){
    const eventId = this.props.params.id;
    if (this.props.currentUser !== null && this.props.currentUser.id === this.props.event.host_id) {
      return(
        <div className="event-control">
          <button><Link to={`events/${eventId}/update`}>Update</Link></button>
          <button
            onClick={this.triggerDelete.bind(this, eventId)}>Delete Event</button>
        </div>
      )
    }
  }

  triggerDelete(id){
    this.props.deleteEvent(id);
    this.navigateToEventListing();
  }

  navigateToEventListing(){
    this.props.router.push("/events");
  }

  handleAttendingClick(e){
    e.preventDefault();
    this.checkForAttendingUser();
    this.props.router.push(`/events/${this.props.event.id}/register`)
  }

  handleInterestedClick(e){
    e.preventDefault();

  }

  checkForAttendingUser(){
    const attendee_ids = this.props.event.attendee_ids
    if (attendee_ids !== undefined && attendee_ids.includes(this.props.currentUser.id)){
      return (true)
    }
  }

  checkForInterestedUser(){
    const interested_ids = this.props.event.interested_ids
    if (interested_ids !== undefined && interested_ids.includes(this.props.currentUser.id)){
      return (true)
    }
  }

  handleInterestedClick(){

  }

  handleCancelReservation(){
    
  }

  displaybuttons(){
    if (this.checkForAttendingUser() && this.checkForInterestedUser()) {
      return (<div className="event-buttons">
        <button onClick={this.handleInterestedClick}
          value="Interested">
          <img
            src="/assets/bookmark-icon.png"
            />Interested</button>
        <button onClick={this.handleCancelReservation}
          value="Cancel Reservation">Cancel Reservation</button>
      </div>)

    } else if(this.checkForAttendingUser()){
      return (<div className="event-buttons">
        <button onClick={this.handleInterestedClick}
          value="Interested">
          <img
            src="/assets/bookmark-icon.png"
            className="bookmark-icon"
            />Interested</button>
        <button onClick={this.handleCancelReservation}
          value="Cancel Reservation">Cancel Reservation</button>
      </div>)
    } else if (this.checkForInterestedUser()){
      return (<div className="event-buttons">
        <button onClick={this.handleInterestedClick}
          value="Interested">Cancel Bookmarked</button>
        <button onClick={this.handleCancelReservation}
          value="Attending">Attending</button>
      </div>)
    } else {
      return (<div className="event-buttons">
        <button onClick={this.handleInterestedClick}
          value="Interested">Interested</button>
        <button onClick={this.handleAttendingClick}
          value="Attending">Attending</button>
      </div>)

    }
  }

  render(){
    const event = this.props.event;
    const currentUser = this.props.currentUser;

    return(
      <section className="event-details">
        { this.checkForAttendingUser() ? (<h3>You're going to this event! View your reservation.</h3>) : (<div></div>)}
        <div className="event-header">
            <img src={event.image_url} />
          <div className="right-element">
            <p className="date">{event.start_date}</p>
            <h2>{event.title}</h2>
            <p>by {event.email}</p>
          </div>
        </div>
        {this.displaybuttons()}
        <div className="main-content">
          <div className="event-main">
            <p className="section-header">DESCRIPTION</p>
            <pre>{event.description}</pre>
            <p className="section-header">CATEGORIES</p>
          </div>
          <div className="side-content">
            <p className="section-header">DATE AND TIME</p>
            <p>{event.start_date} {event.start_time} - </p>
            <br />
            <p>{event.end_date} {event.end_time}</p>
            {this.showUpdateDelete()}
          </div>
        </div>
      </section>
    )
  }


}
export default withRouter(EventDetail);
