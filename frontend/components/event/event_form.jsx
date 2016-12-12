import React from 'react';
import { withRouter } from 'react-router';
import Datetime from 'react-datetime';
import dateFormat from 'dateformat'

class EventForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: "",
      description: "",
      host_id: this.props.currentUser.id,
      start_date: "",
      start_time: "",
      start_date_time: "",
      end_date_time: "",
      end_date: "",
      end_time: "",
      image_url: "",
      categories: []
    };
    this.emptyState = this.state;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToCreatedEvent = this.navigateToCreatedEvent.bind(this);
    this.navLink = this.navLink.bind(this);
    this.addCategory = this.addCategory.bind(this);
    this.setTime = this.setTime.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    this.setTime();
  };

  setTime(){

    this.setState({
      start_date_time: (this.state.start_date + " " + this.state.start_time),
      end_date_time: (this.state.end_date + " " + this.state.end_time)
    }, ()=> {
      const event = this.state;
      if(this.props.formType === 'new_event'){
        this.props.createEvent(event);
      } else {
        this.props.updateEvent(event);b
      }
      this.navigateToCreatedEvent();
    }
  )}


  navigateToCreatedEvent() {
    this.props.router.push(`/events/${this.props.eventShow.id}`);
  }

  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  addCategory(e){
    e.preventDefault();
    this.setState({
      categories: this.state.categories.concat([e.currentTarget.value])
    })
  }

  componentDidMount(){
    if (typeof this.props.id !== 'undefined' && this.props.formType !== 'new_event'){
      this.props.getEvent(this.props.id);
    } else {
      this.clearForm();
    }
  }

  clearForm(){
    if(this.props.formType === 'new_event'){
      this.setState(this.emptyState);
    }
  }

  componentWillReceiveProps(){
    this.navLink();
    if (this.props.formType === 'new_event'){
      this.clearForm();
    }
  }

  navLink() {
    if(this.props.eventShow && this.props.formType !== 'new_event'){
      const event = this.props.eventShow;
      this.setState({
        id: event.id,
        title: event.title,
        description: event.description,
        host_id: this.props.currentUser.id,
        start_date_time: event.start_date_time,
        end_date_time: event.end_date_time,
        image_url: event.image_url,
        categories: event.categories,
        end_time: event.end_time,
        start_time: event.start_time,
        end_date: event.end_date,
        start_date: event.start_date
      })
    }
  }

  formHeader(){
    if (this.props.formType === 'new_event'){
      return(<h1>Create An Event</h1>)
    } else {
      return(<h1>Update Event</h1>)
    }
  }
  render(){
    return(
      <div className="making-event">
        {this.formHeader()}
        <form onSubmit={this.handleSubmit} className="event-form">
          <h2>1. Event Details</h2>
          <label>EVENT TITLE</label>
          <input type="text" placeholder="Give it a short distict name"
            value={this.state.title}
            onChange={this.update("title")}
            className="input-title"/>
          <div className="time">
            <div className="start-time">
              <label>STARTS</label>
                <div className="start-date-timepicker">
                  <Datetime value={this.state.start_date} timeFormat={false}
                    inputProps={{readOnly:true, placeholder: "Start Date"}}
                    closeOnSelect={true}
                    onChange={(newDate) => (this.setState({
                      start_date: newDate._d.toDateString()
                    })
                  )}/>
                <Datetime value={this.state.start_time} dateFormat={false}
                  inputProps={{readOnly:true, placeholder: "Start Time"}}
                  closeOnSelect={true} strictParsing={false}
                  onChange={(newDate) => {
                    return (this.setState({
                    start_time: newDate._d.toLocaleTimeString()
                  }))}
                }/>
              </div>
            </div>

            <div className="end-time">
              <label>ENDS</label>
                <div className="start-date-timepicker">
                  <Datetime value={this.state.end_date} timeFormat={false}
                    inputProps={{readOnly:true, placeholder: "End Date"}}
                    closeOnSelect={true}
                    onChange={(newDate) => {
                      return (this.setState({
                      end_date: newDate._d.toDateString()
                    }))}
                  }/>
                <Datetime value={this.state.end_time} dateFormat={false}
                  inputProps={{readOnly:true, placeholder: "End Time"}}
                  closeOnSelect={true} strictParsing={false}
                  onChange={(newDate) => {
                    return (this.setState({
                    end_time: newDate._d.toLocaleTimeString()
                  }))}
                }/>
              </div>
            </div>
          </div>
          <label>EVENT DESCRIPTION</label>
          <textarea value={this.state.description}
          onChange={this.update("description")}
          className="input-description">
          </textarea>
          <h2>2. Additional Settings</h2>
          <div className="category-buttons">
            <button type="button" onClick={this.addCategory} value="Books">Books</button>
            <button type="button" onClick={this.addCategory} value="Electronic">Electronic</button>
            <button type="button" onClick={this.addCategory} value="Furniture">Furniture</button>
            <button type="button" onClick={this.addCategory} value="Clothing">Clothing</button>
          </div>
          <div className="last-part">
            <h3>Nice job! You're almost done.</h3>
            <input type="submit" value="MAKE YOUR EVENT LIVE" className="submit-button"/>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(EventForm);
