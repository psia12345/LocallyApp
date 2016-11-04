import React from 'react';
import Modal from 'react-modal';
import ModalStyle from './modal_style';
import SessionFormContainer from '../session_form/session_form_container';
import {Link} from 'react-router'

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modalOpen: false,
      signIn: ""
    };
    this.onModalClose = this.onModalClose.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleClick(string){
    this.setState({
      modalOpen: true,
      signIn: string
    })
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
    if (this.props.currentUser){
      return(
        <div className="right-nav">
          <Link id="user">{this.props.currentUser.email}</Link>
          <Link id="logout"
            onClick={this.handleLogout}>Logout</Link>
        </div>
      )
    } else {
        return (
          <div className="right-nav">
            <Link id="sign-up"
              onClick={this.handleClick.bind(this, "Sign Up")}>SIGN UP</Link>
            <Link id="login"
              onClick={this.handleClick.bind(this, "Login") }>LOG IN</Link>
            <Link id="guest" onClick={this.handleGuest.bind(this)}>GUEST </Link>
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
            <Link to="/new_event">CREATE EVENT</Link>
          </div>
        </div>
      </nav>
    )
  }


}
export default Header;
