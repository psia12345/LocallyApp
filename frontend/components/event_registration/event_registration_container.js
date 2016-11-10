import EventRegistrationForm from './event_registration_form';
import {connect} from 'react-redux';
import {addAttendee} from '../../actions/event_actions';

const mapStateToProps = ({eventShow, session}) => ({
  event: eventShow,
  currentUser: session.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  addAttendee: (id) => dispatch(addAttendee(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EventRegistrationForm)
