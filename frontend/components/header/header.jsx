import React from 'react';
import Modal from 'react-modal';
import ModalStyle from './modal_style';
import SessionFormContainer from '../session_form/session_form_container';
import {Link} from 'react-router';
// import LoginModal from './modal_logic';

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modalOpen: false,
      signIn: ""
    };
    this.onModalClose = this.onModalClose.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.checkforUser = this.checkforUser.bind(this);
    this.checkLoggedInUser = this.checkLoggedInUser.bind(this);
  }

  componentDidUpdate(){
    this.checkLoggedInUser();
  }

  handleClick(string){
    this.setState({
      modalOpen: true,
      signIn: string
    });
  }

  handleGuest(e){
    e.preventDefault();
    const user = { email: "test@gmail.com", password: "password" };
    this.props.login(user);
  }

  handleLogout(e){
    e.preventDefault();
    this.props.logout();
  }

  onModalClose(){
    this.props.clearError();
    this.setState({modalOpen: false})
  }

  checkLoggedInUser(){
    const currentUser = this.props.currentUser;
    if (currentUser !== null){
      return(
        <div className="login-signup">
          <div className="right-nav">
            <Link id="user" to={`/users/${currentUser.id}`}>{currentUser.email}</Link>
          </div>
          <div className="right-nav">
            <Link id="logout"
              onClick={this.handleLogout}>Logout</Link>
          </div>
        </div>
      )
    } else {
        return (
          <div className="login-signup">
            <div className="right-nav">
              <Link id="sign-up"
                onClick={this.handleClick.bind(this, "Sign Up")}>SIGN UP</Link>
            </div>
            <div className="right-nav">
              <Link id="login"
                onClick={this.handleClick.bind(this, "Login") }>LOG IN
              </Link>
            </div>
            <div className="right-nav">
              <Link id="guest" onClick={this.handleGuest.bind(this)}>GUEST
              </Link>
            </div>
            <Modal
              isOpen={this.state.modalOpen}
              onRequestClose={this.onModalClose}
              style={ModalStyle}>
              <SessionFormContainer close={this.onModalClose} action={this.state.signIn} loginlink={<Link id="login"
                onClick={this.handleClick.bind(this, "Login") }>LOG IN</Link>}/>
            </Modal>
          </div>
        )
      }
    }

  checkforUser(){
    if (this.props.currentUser === null){
      this.setState({
        modalOpen: true,
        signIn: "Login"
      })
    }
  }

  render(){
    return(
      <nav className="navbar">
        <div className="logo">
          <Link to="/">LOCALLY</Link>
        </div>
        <div className="right">
          <div className="right-nav">
            <Link to="/events">BROWSE EVENTS</Link>
          </div>
          {this.checkLoggedInUser()}
          <div className="right-nav">
            <Link id="create_event" to="/new_event" onClick={this.checkforUser}>CREATE EVENT</Link>
          </div>
        </div>
      </nav>
    )
  }


}
export default Header;
