import EventForm from './event_form';
import {connect} from 'react-redux';
import {createEvent, updateEvent, getEvent} from '../../actions/event_actions';

const mapStateToProps = ({events, session, eventShow}, ownProps) => ({
  eventShow: eventShow,
  currentUser: session.currentUser,
  errors: events.errors,
  id: ownProps.params.id
});

const mapDispatchToProps = (dispatch, {location}) => {
  const formType = location.pathname.slice(1);
  return ({
    createEvent: (event) => dispatch(createEvent(event)),
    updateEvent: (event) => dispatch(updateEvent(event)),
    getEvent: (id) => dispatch(getEvent(id)),
    formType
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
