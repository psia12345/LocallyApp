import EventForm from './event_form';
import {connect} from 'react-redux';
import {createEvent, updateEvent} from '../../actions/event_actions';

const mapStateToProps = ({events, session}) => ({
  event: events.event,
  currentUser: session.currentUser,
  errors: events.errors
});

const mapDispatchToProps = (dispatch, {location}) => ({
  createEvent: (event) => dispatch(createEvent(event)),
  updateEvent: (event) => dispatch(updateEvent(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
