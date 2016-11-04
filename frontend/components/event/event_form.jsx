import React from 'react';

class EventForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: "",
      description: "",
      host_id: props.currentUser,
      start_date: "",
      start_time: "",
      end_date_time: "2016-11-11 16:00"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    const event = this.state
    if (this.props.location.hash === '#/new_event' ){
      createEvent(event)
    } else{
    }
  };

  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }


  render(){
    return(
      <form onSubmit={this.handleSubmit} className="event-form">
        <label>Title</label>
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
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

export default EventForm;
