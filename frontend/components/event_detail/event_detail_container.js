import { connect } from 'react-redux';
import EventDetail from './event_detail';
import { getEvent, deleteEvent, addAttendee,
        addInterested, removeInterested,
        removeAttendee
        } from '../../actions/event_actions';

const mapStateToProps = (state, ownprops) => ({
  event: state.eventShow,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  getEvent: (id) => dispatch(getEvent(id)),
  deleteEvent: (id) => dispatch(deleteEvent(id)),
  addAttendee: (ids) => dispatch(addAttendee(ids)),
  addInterested: (ids) => dispatch(addInterested(ids)),
  removeAttendee: (id) => dispatch(removeAttendee(id)),
  removeInterested: (id) => dispatch(removeInterested(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventDetail);
