import React from 'react';
import { withRouter } from 'react-router';

class EventForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: "",
      description: "",
      host_id: props.currentUser.id,
      start_date: "",
      start_time: "",
      end_date: "",
      end_time: "",
      image_url: "",
      categories: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToCreatedEvent = this.navigateToCreatedEvent.bind(this);
    this.navLink = this.navLink.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    const event = this.state
    this.props.createEvent(event);
    this.navigateToCreatedEvent();
  };

  navigateToCreatedEvent() {
    this.props.router.push("/events");
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

  navLink() {
    if(this.props.formType !== 'new_event'){
      const event = this.props.event;
      this.setState({
        title: event.title,
        description: event.description,
        host_id: props.currentUser.id,
        start_date: event.start_date,
        start_time: event.start_time,
        end_date: event.end_date,
        end_time: event.end_time,
        image_url: event.image_url,
        categories: event.categories
      })
    }
  }

  render(){
    {this.navLink()}
    return(
      <form onSubmit={this.handleSubmit} className="event-form">        <label>Title</label>
        <input type="text"
                value={this.state.title}
                onChange={this.update("title")}/>
        <label>Description</label>
        <input type="text"
                value={this.state.description}
                onChange={this.update("description")}/>
        <label>Start Date</label>
        <input type="date"
                value={this.state.start_date}
                onChange={this.update("start_date")}/>
        <label>Start Time</label>
        <input type="time"
                value={this.state.start_time}
                onChange={this.update("start_time")}/>
        <label>End Date</label>
        <input type="date"
                value={this.state.end_date}
                onChange={this.update("end_date")}/>
        <label>End Time</label>
        <input type="time"
                value={this.state.end_time}
                onChange={this.update("end_time")}/>
              <button type="button" onClick={this.addCategory} value="sample1">Sample 1</button>
              <button type="button" onClick={this.addCategory} value="sample2">Sample 2</button>
              <button type="button" onClick={this.addCategory} value="sample3">Sample 3</button>
              <button type="button" onClick={this.addCategory} value="sample4">Sample 4</button>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

export default withRouter(EventForm);
