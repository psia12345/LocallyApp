import React from 'react';
import { withRouter } from 'react-router';
import Datetime from 'react-datetime';

class EventForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: "",
      description: "",
      host_id: this.props.currentUser.id,
      start_date: "",
      start_time: "",
      end_date: "",
      end_time: "",
      image_url: "",
      start_date_time: "",
      end_date_time: "", 
      categories: [],
      submitted: false
    };
    this.emptyState = this.state;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToCreatedEvent = this.navigateToCreatedEvent.bind(this);
    this.navLink = this.navLink.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    const event = this.state;
    if(this.props.formType === 'new_event'){
      this.props.createEvent(event);
    } else {
      this.props.updateEvent(event);
    }
    this.navigateToCreatedEvent();
  };

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

  handleDateChange(newDate){
    this.setState({
      start_date_time: newDate
    });
  }

  handleEndDateChange(newDate){
    this.setState({
      end_date_time: newDate
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
        categories: event.categories
      })
    }
  }

  // upload(e){
  //   e.preventDefault();
  //   cloudinary.openUploadWidget(
  //     window.cloudinary_options, (error, images) => {
  //       if (error === null){
  //         this.props.postImage(images[0].url);
  //     }
  //   });
  // }

  // postImage(url){
  //   let img = {url};
  //   $.ajax({
  //     url: "/api/images"
  //     method: "POST",
  //     data: {image: img},
  //     success: (image)=>{
  //       let images = this.state.images;
  //       images.push(image);
  //       this.setState({images});
  //     }
  //   })
  // }

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
        <label>Start Time</label>
        <Datetime value={this.state.start_date_time} onChange={(newDate) => this.handleDateChange(newDate._d)} />
        <label>End Time</label>
        <Datetime value={this.state.end_date_time} onChange={(newDate) => this.handleEndDateChange(newDate._d)} />
        <div className="category-buttons">
          <button type="button" onClick={this.addCategory} value="sample1">Sample 1</button>
          <button type="button" onClick={this.addCategory} value="sample2">Sample 2</button>
          <button type="button" onClick={this.addCategory} value="sample3">Sample 3</button>
          <button type="button" onClick={this.addCategory} value="sample4">Sample 4</button>
        </div>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

export default withRouter(EventForm);
