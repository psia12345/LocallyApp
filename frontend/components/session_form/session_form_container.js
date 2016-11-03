import {connect} from 'react-redux';
import SessionForm from './session_form';
import { login, logout, signup } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
    logout: ()=> dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
