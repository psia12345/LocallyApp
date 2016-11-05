import React from 'react';

class EventDetail extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    const id = this.props.params.id - 1
    this.props.getEvent(id);
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
