import React from 'react';

class EventDetail extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    const eventId = this.props.params.id
    this.props.getEvent(eventId);
  }


  render(){
    const event = this.props.event
    return(
      <section>
        <h1>{event.title}</h1>
        <img src={event.image_url} />
        <p>{event.description}</p>

      </section>

    )
  }


}
export default EventDetail;
