import React from 'react';

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
  }
  handleSubmit(e){
    e.preventDefault();
    const event = this.state
    this.props.createEvent(event);
  };

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

export default EventForm;
