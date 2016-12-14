import Modal from 'react-modal';
import ModalStyle from './modal_style';
import SessionFormContainer from '../session_form/session_form_container';

class LoginModal extends React.Component {
  constructor(){
    super();
    this.state = {
      modalOpen: false,
      signIn: ""
    }
    this.onModalClose = this.onModalClose.bind(this);
  }

  handleClick(string){
    this.setState({
      modalOpen: true,
      signIn: string
    });
  }

  onModalClose(){
    // this.props.clearError();
    this.setState({modalOpen: false})
  }

  render(){
    return(
      <Modal
      isOpen={this.state.modalOpen}
      onRequestClose={this.onModalClose}
      style={ModalStyle}>
      <SessionFormContainer close={this.onModalClose} action={this.state.signIn} loginlink={<Link id="login"
      onClick={this.handleClick.bind(this, "Login") }>LOG IN</Link>}/>
      </Modal>

    )
  }

}
export default LoginModal;
