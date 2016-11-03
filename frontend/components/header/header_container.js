import { connect } from 'react-redux';
import { logout, clearError, login } from '../../actions/session_actions';
import Header from './header';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser,
  errors: session.errors
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  clearError: () => dispatch(clearError()),
  login: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
