import React from 'react';
import {Link, withRouter} from 'react-router';


class User extends React.Component{
  constructor(props){
    super(props);
    this.redirectToEvents = this.redirectToEvents.bind(this);
  }

  handleClick(){

  }

  redirectToEvents(){
    this.props.router.push("/events")
  }

  render(){
    const currentUser = this.props.currentUser;
    return(
      <div>
        <h2>{currentUser.email}</h2>
        <div className="event-links">
          <Link id="upcoming-events">Upcoming Events</Link>
          <Link id="saved-events">Saved Events</Link>
          <Link id="edit-event">Edit Event</Link>
        </div>
        <hr />
        <button onClick={this.redirectToEvents}>Discover Events</button>
      </div>
    )
  }
}


export default withRouter(User);
