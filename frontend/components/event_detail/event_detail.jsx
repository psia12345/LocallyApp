import React from 'react';
import { Link, withRouter } from 'react-router';

class EventDetail extends React.Component {
  constructor(props){
    super(props)
    this.navigateToEventListing = this.navigateToEventListing.bind(this);
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

  render(){
    const event = this.props.event
    console.log(event);
    return(
      <section className="event-details">
        <div className="event-header">
            <img src={event.image_url} />
          <div className="right-element">
            <p className="date">{event.start_date}</p>
            <h2>{event.title}</h2>
            <p>by {event.email}</p>
          </div>
        </div>
        <div className="buttons">
          <button>Interested</button>
          <button>Attending</button>
        </div>
        <div className="main-content">
          <div className="event-main">
            <p className="section-header">DESCRIPTION</p>
            <p>{event.description}</p>
            <p className="section-header">CATEGORIES</p>
          </div>
          <div className="side-content">
            <p className="section-header">DATE AND TIME</p>
            <p>FROM: <br/>{event.start_date} <br/>{event.start_time} </p>
            <br />
            <p>TO: <br/>{event.end_date} <br/>{event.end_time}</p>
            {this.showUpdateDelete()}
          </div>
        </div>
      </section>
    )
  }


}
export default withRouter(EventDetail);
