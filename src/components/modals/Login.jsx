import React, { Component } from "react";
import { login } from '../../util/api';
import { Modal, Button, Form } from 'react-bootstrap';

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", errorTextDisplay: "none", show: false }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hideError = this.hideError.bind(this);
    this.showError = this.showError.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
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
      const authResponse = await login(this.state.username, this.state.password);
      const { accessToken } = authResponse.data;
      
      // Use sign in action
      this.props.signIn(accessToken);

      //Clear credentials from app state
      this.setState({ username: "", password: "" })

      // Hide modal
      this.handleClose();
    } catch (e) {
      console.error(e);
      this.showError();
    }
  }

  showError() {
    this.setState({ errorTextDisplay: "block" })
  }

  hideError() {
    this.setState({ errorTextDisplay: "none" })
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleClose() {
    this.setState({ show: false })
  }

  render() {
    return (
      <>
        <Button variant={this.props.signedIn ? "danger" : "primary"} className="float-button" onClick={this.props.signedIn ? this.props.signOut : this.handleShow}>
          {this.props.signedIn ? "Sign Out" : "Sign In"}
        </Button>
        <Modal autoFocus={true} show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title as="h4">Sign In</Modal.Title>
            <br/>
            <Modal.Title className="text-danger" style={{ display: this.state.errorTextDisplay }} as="h5">Incorrect username or password.</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group controlId="signInUsername">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={this.handleChange} type="email" placeholder="name@example.com" aria-describedby="usernameHelp" required />
                <Form.Text id="usernameHelp" muted>We'll never share your username with anyone else.</Form.Text>
              </Form.Group>
              <Form.Group controlId="signInPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={this.handleChange} type="password" placeholder="Password" required minLength={1} />
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary" onClick={this.handleSubmit}>Sign In</Button>
            <Button variant="secondary" onClick={this.handleClose}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default LoginModal;
