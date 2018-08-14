
// imports
import React, { Component } from 'react';

import { Form, FormGroup, Col, ControlLabel, Checkbox, Button, FormControl } from 'react-bootstrap'

import './Login.css';

// Login Page
class LoginPage extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
    };
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    if (!this.state.username) {
      return this.setState({ error: 'Username is required' });
    }
    if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
    }
    return this.setState({ error: '' });
  }
  
  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  };
  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  render() {
    // NOTE: I use data-attributes for easier E2E testing
    // but you don't need to target those (any css-selector will work)

    return (
      <div className="Login">
        <div id="login-form">
          <Form horizontal>

            <div id="form-groups">
              <FormGroup controlId="formHorizontalEmail">

                <Col componentClass={ControlLabel} sm={2}>
                  Username
                </Col>
                <Col sm={10}>
                  <FormControl type="username" placeholder="Username" />
                </Col>

              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Password
                </Col>
                <Col sm={10}>
                  <FormControl type="password" placeholder="Password" />
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Checkbox>Remember me</Checkbox>
                </Col>
              </FormGroup>  

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button bsStyle="primary" type="submit">Sign in</Button>
                </Col>
              </FormGroup>
            </div>

          </Form>
        </div>
      </div>
    );
  }
}

export default LoginPage;