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
        <div>
          <Link to={`events/${eventId}/update`}>Update</Link>
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
    debugger;
    return(
      <section>
        <div className="event-header">
          <img src={event.image_url} />
          <p>{event.start_date_time.slice(10)}</p>
          <p>{console.log(event.start_date_time)}</p>
          <h2>{event.title}</h2>
          <p>by {event.email}</p>
        </div>
        <div className="buttons">
          <button>Interested</button>
          <button>Attending</button>
        </div>
        <div className="main-content">
          <p>DESCRIPTION</p>
          <p>{event.description}</p>
          <p>CATEGORIES</p>
        </div>
        <div className="side-content">
          <p>DATE AND TIME</p>
          <p>FROM: {event.start_date_time}</p>
          <p>TO: {event.end_date_time}</p>
        </div>
        {this.showUpdateDelete()}
      </section>
    )
  }


}
export default withRouter(EventDetail);
