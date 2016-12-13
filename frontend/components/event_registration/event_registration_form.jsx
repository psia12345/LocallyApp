import React from 'react';
import RegistrationSuccess from './event_registration_form';
import {withRouter} from 'react-router';

class EventRegistrationForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sameDateEvent = this.sameDateEvent.bind(this);
  }

  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    if (this.props.currentUser !== null &&
      !this.props.event.attendee_ids.includes(this.props.currentUser.id)
    ){
      this.props.addAttendee({
        event_id: this.props.event.id,
        attendee_id: this.props.currentUser.id
      })
    }
    this.navigateToRegistrationConfirmation();
  }

  navigateToRegistrationConfirmation(){
    this.props.router.push(`/events/${this.props.event.id}/confirmation`)
  }

  sameDateEvent(){
    const event = this.props.event
    if (event.start_date === event.end_date){
      return (<p>{event.start_date}<br/>{event.start_time} - {event.end_time}</p>)
    } else {
      return (<p>{event.start_date} {event.start_time} <br/>- <br/>{event.end_date} {event.end_time}</p>)
    }
  }

  componentDidMount(){
    if (this.props.currentUser !== null){
      this.setState({
        email: this.props.currentUser.email
      })
    }
  }

  displayCurrentUserInfo(){
    if (this.props.currentUser !== null){
      return(<p className="form-text">Hi, {this.props.currentUser.email}. Not you? Sign Out</p>)
    }
  }

  render(){
    const event = this.props.event;
    const currentUser = this.props.currentUser || "";

    return(
      <div className="event-registration">
        <div className="left-side-panel">
        <div className="header-content">
          <h1 className="event-registration-header">{event.title}</h1>
          <p>Host person information here.... </p>
          {this.sameDateEvent()}
        </div>
        <div className="order-summary">
          <p className="order-summary-header">Order Summary</p>
          <table>
            <tbody>
            <tr>
              <th>TYPE</th>
              <th>QUANTITY</th>
            </tr>
              <tr>
                <td>RSVP</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <form className="registration-form clearfix" onSubmit={this.handleSubmit} >
          <p className="registration-header">Registration Information</p>
          <p className="form-banner">Please complete registration.</p>
          <h3>Your Information</h3>
          {this.displayCurrentUserInfo()}
          <div className="form-field">
          <label>First Name:</label>
          <input type="text"
            value={this.state.fname}
            onChange={this.update("fname")}
            className="input-fname"/>
          </div>
          <div className="form-field">
          <label>Last Name:</label>
          <input type="text"
            value={this.state.lname}
            onChange={this.update("lname")}
            className="input-lname"/>
          </div>
          <div className="form-field">
          <label>Email Address:</label>
          <input type="text"
            value={this.state.email}
            onChange={this.update("email")}
            className="input-email"/>
          </div>
          <p className="form-text">I agree that Locally may share my information wtih the event organizer.</p>
          <button className="form-button">Complete Registration</button>
        </form>
        </div>
        <div className="right-side-panel">
          <img src={this.props.event.image_url} />
          <div className="time-location">
            {this.sameDateEvent()}
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(EventRegistrationForm);
