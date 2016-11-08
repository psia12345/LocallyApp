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
      categories: []
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
      <div className="making-event">
        <h1>Create An Event</h1>
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
                <Datetime value={this.state.start_date} timeFormat={false} onChange={(newDate) => (this.setState({
                    start_date: newDate._d
                  })
                )}/>
                <Datetime value={this.state.start_time} dateFormat={false} onChange={(newDate) => (this.setState({
                    start_time: newDate._d
                  })
                )}/>
            </div>
            <div className="end-time">
              <label>ENDS</label>
                <Datetime value={this.state.end_date} timeFormat={false} onChange={(newDate) => (this.setState({
                    end_date: newDate._d
                  })
                )}/>
              <Datetime value={this.state.end_time} dateFormat={false} onChange={(newDate) => (this.setState({
                  end_time: newDate._d
                })
              )}/>
            </div>
          </div>
          <label>EVENT DESCRIPTION</label>
          <textarea value={this.state.description}
          onChange={this.update("description")}
          className="input-description">
          </textarea>
          <h2>2. Additional Settings</h2>
          <div className="category-buttons">
            <button type="button" onClick={this.addCategory} value="sample1">Sample 1</button>
            <button type="button" onClick={this.addCategory} value="sample2">Sample 2</button>
            <button type="button" onClick={this.addCategory} value="sample3">Sample 3</button>
            <button type="button" onClick={this.addCategory} value="sample4">Sample 4</button>
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
