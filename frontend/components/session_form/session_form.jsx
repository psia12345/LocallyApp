import React from 'react';
import {Link, withRouter} from 'react-router';

class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
  }

  componentWillUnmount(){
    this.props.close();
  }
  handleSubmit(e){
    e.preventDefault();
    const user = this.state;
    if (this.props.action === "Login"){
      this.props.login(user);
    } else {
      this.props.signup(user);
    }
  }

  handleGuest(e){
    e.preventDefault();
    const user = { email: "test@gmail.com", password: "password" };
    this.props.login(user);
    this.props.close();
  }

  renderErrors(){
    return (
      <ul>
        {this.props.errors.map((error, index) => (
          <li key={index}>{error}</li>
        ))}
      </ul>
    );
  }

  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render(){
    return(
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h2 className="form-title">{this.props.action}</h2>
          {this.renderErrors()}
          <div className="login-form">
            <input type="text" placeholder="email"
                   value={this.state.email}
                   onChange={this.update("email")}
                   className="login-input"/>
            <input type="password" placeholder="password"
                   value={this.state.password}
                   onChange={this.update("password")}
                   className="login-input" />
                 <div className="buttons">
              <input type="submit" value="Submit" className="button-submit"/>
              <input type="submit" value="Guest" onClick={this.handleGuest}
                className="button-guest"/>
            </div>
          </div>
        </form>
      </div>
    )
  };

}
export default withRouter(SessionForm);
