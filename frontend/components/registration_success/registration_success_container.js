import RegistrationSuccess from './registration_success';
import {connect} from 'react-redux';

const mapStateToProps = ({eventShow}) => ({
  event: eventShow
})

export default connect(mapStateToProps)(RegistrationSuccess);
