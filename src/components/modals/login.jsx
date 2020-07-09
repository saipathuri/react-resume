import React, { Component } from "react";
import { login } from '../../util/api';

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", errorTextDisplay: "none" }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hideError = this.hideError.bind(this);
    this.showError = this.showError.bind(this);
  }

  handleChange(event) {
    if (event.target.id === 'signInUsername') {
      this.setState({ username: event.target.value });
    } else {
      this.setState({ password: event.target.value });
    }
  }

  handleSubmit = async () => {
    this.hideError();
    try {
      const { accessToken, refreshToken } = await login(this.state.username, this.state.password).data;
    } catch (e) {
      this.showError();
    }
  }

  showError() {
    this.setState({ errorTextDisplay: "block" })
  }

  hideError() {
    this.setState({ errorTextDisplay: "none" })
  }

  render() {
    return (
      <div className="modal" tabIndex="-1" role="dialog" id="loginModal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Sign In</h5>
              <h5 id="errorText" className="modal-title text-danger" style={{ display: this.state.errorTextDisplay }}>Incorrect username or password.</h5>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="signInUsername">Username</label>
                  <input value={this.state.username} onChange={this.handleChange} type="username" className="form-control" id="signInUsername" aria-describedby="usernameHelp" placeholder="Enter username" required />
                  <small id="usernameHelp" className="form-text text-muted">We'll never share your username with anyone else.</small>
                </div>
                <div className="form-group">
                  <label htmlFor="signInPassword">Password</label>
                  <input value={this.state.password} onChange={this.handleChange} type="password" className="form-control" id="signInPassword" placeholder="Password" minLength='1' required />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Sign In</button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginModal;
