import { connect } from 'react-redux';
import EventDetail from './event_detail';
import { getEvent, deleteEvent, addAttendee } from '../../actions/event_actions';

const mapStateToProps = (state, ownprops) => ({
  event: state.eventShow,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  getEvent: (id) => dispatch(getEvent(id)),
  deleteEvent: (id) => dispatch(deleteEvent(id)),
  addAttendee: (id) => dispatch(addAttendee(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventDetail);
