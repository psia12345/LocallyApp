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
    if (this.props.currentUser.id === this.props.event.host_id) {
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
    return(
      <section>
        <h1>{event.title}</h1>
        <img src={event.image_url} />
        <p>{event.description}</p>
        {this.showUpdateDelete()}
      </section>
    )
  }


}
export default withRouter(EventDetail);