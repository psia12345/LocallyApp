import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';
import ModalStyle from '../header/modal_style';
import SessionFormContainer from '../session_form/session_form_container';

class EventDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modalOpen: false
    };
    this.navigateToEventListing = this.navigateToEventListing.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
  }
  componentDidMount(){
    const eventId = this.props.params.id;
    this.props.getEvent(eventId);
  }

  onModalClose(){
    // this.props.clearError();
    this.setState({modalOpen: false});
  }

  showUpdateDelete(){
    const eventId = this.props.params.id;
    if (this.props.currentUser !== null && this.props.currentUser.id === this.props.event.host_id) {
      // if user is logged in and user is the owner of the event
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

  handleClick(e){
    e.preventDefault();
    if (this.props.currentUser === null){
      this.setState({
        modalOpen: true
      })
    } else if ( !this.props.event.interested_ids.includes(this.props.currentUser.id) && e.target.value === "Interested"
    ){
      this.props.addInterested({
        event_id: this.props.event.id,
        user_id: this.props.currentUser.id
      })
    } else {
      this.props.router.push(`/events/${this.props.event.id}/register`)
    }
  }

  checkForAttendingUser(){
    let attendee_ids = this.props.event.attendee_ids;
    return this.props.currentUser !== null && typeof attendee_ids !== 'undefined' &&  attendee_ids.includes(this.props.currentUser.id)
  }

  checkForInterestedUser(){
    let interested_ids = this.props.event.interested_ids;
    return this.props.currentUser !== null && typeof interested_ids !== 'undefined' &&  interested_ids.includes(this.props.currentUser.id)
  }

  handleCancel(e){
    e.preventDefault();
    if (e.currentTarget.value === "Cancel Reservation"){
      this.props.removeAttendee(this.props.event.id);
    } else {
      this.props.removeInterested(this.props.event.id)
    }
  }

  displaybuttons(){
    if (this.checkForAttendingUser() && this.checkForInterestedUser()) {
      return (<div className="event-buttons">
        <button className="interested" onClick={this.handleCancel}
          value="Interested">
          <div className="bookmarked"></div>Cancel Bookmarked</button>
          <button onClick={this.handleCancel}
          value="Cancel Reservation">Cancel Reservation</button>
      </div>)

    } else if(this.checkForAttendingUser()){
      return (<div className="event-buttons">
        <button className="interested" onClick={this.handleClick}
          value="Interested">
          <div className="bookmark"></div>Interested</button>
          <button onClick={this.handleCancel}
          value="Cancel Reservation">Cancel Reservation</button>
      </div>)
    } else if (this.checkForInterestedUser()){
      return (<div className="event-buttons">
        <button className="interested" onClick={this.handleCancel}
          value="Interested"><div className="bookmarked"></div>Cancel Bookmarked</button>
        <button onClick={this.handleClick}
          value="Attending">Attending</button>
      </div>)
    } else {
      return (<div className="event-buttons">
        <button className="interested" onClick={this.handleClick}
          value="Interested"><div className="bookmark"></div>Interested</button>
        <button onClick={this.handleClick}
          value="Attending">Attending</button>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          style={ModalStyle}>
          <SessionFormContainer close={this.onModalClose} action={this.state.signIn} loginlink={<Link id="login"
            onClick={this.handleClick.bind(this, "Login") }>LOG IN</Link>}/>
        </Modal>
      </div>)

    }
  }

  render(){
    const event = this.props.event;
    const currentUser = this.props.currentUser;

    return(
      <section className="event-details">
        { this.checkForAttendingUser() ? (<h3>You are going to this event! <Link to={`users/${currentUser.id}`}>View your Upcoming Events.</Link></h3>) : (<div></div>)}
        <div className="event-header">
            <img src={event.image_url} />
          <div className="right-element">
            <p className="date">{event.start_date}</p>
            <h2>{event.title}</h2>
            <p>by {event.email}</p>
            {this.displaybuttons()}
          </div>
        </div>
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
