import EventForm from './event_form';
import {connect} from 'react-redux';
import {createEvent, updateEvent} from '../../actions/event_actions';

const mapStateToProps = ({events}) => ({
  newEvent: Boolean(events.event),
  errors: events.errors
});

const mapDispatchToProps = dispatch => ({
  createEvent: (event) => dispatch(createEvent(event)),
  updateEvent: (event) => dispatch(updateEvent(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
