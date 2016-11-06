import EventForm from './event_form';
import {connect} from 'react-redux';
import {createEvent, updateEvent} from '../../actions/event_actions';

const mapStateToProps = ({events, session, eventShow}) => ({
  event: eventShow,
  currentUser: session.currentUser,
  errors: events.errors
});

const mapDispatchToProps = (dispatch, {location}) => {
  const formType = location.pathname.slice(1);
  return ({
    createEvent: (event) => dispatch(createEvent(event)),
    updateEvent: (event) => dispatch(updateEvent(event)),
    formType
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
