import RegistrationSuccess from './registration_success';
import {connect} from 'react-redux';

const mapStateToProps = ({eventShow, session}) => ({
  event: eventShow,
  currentUser: session.currentUser
})

export default connect(mapStateToProps)(RegistrationSuccess);
