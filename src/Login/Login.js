
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
    };
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleSubmit() { }

  handleChange() {
    //event.preventDefault();
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
                  <FormControl type="username" value={this.state.username} placeholder="Username" onChange={this.handleChange} />
                </Col>

              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Password
                </Col>
                <Col sm={10}>
                  <FormControl type="password" value={this.state.password} placeholder="Password" onChange={this.handleChange} />
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