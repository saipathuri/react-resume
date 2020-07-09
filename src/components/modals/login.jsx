import React, { Component } from "react";

class LoginModal extends Component {
  state = {};
  render() {
    return (
      <div className="modal" tabindex="-1" role="dialog" id="loginModal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Sign In</h5>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label for="signInEmail">Email address</label>
                  <input type="email" className="form-control" id="signInEmail" aria-describedby="emailHelp" placeholder="Enter email" required />
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                  <label for="signInPassword">Password</label>
                  <input type="password" className="form-control" id="signInPassword" placeholder="Password" minlength='1' required />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">Sign In</button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginModal;
