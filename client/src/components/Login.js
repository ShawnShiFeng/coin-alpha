import axios from 'axios';
import React, { Component } from 'react';
import { RaisedButton, TextField, Card } from 'material-ui';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      ethWallet: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  handleSubmit() {
    axios.post('/login', this.state)
    .then((user) => {
      this.props.updateUser(user);
      window.location = '/dashboard';
    })
    .catch((e) => {
      console.log(e);
      // TODO: add error handling
    });
  }

  render() {
    const styles = {
      container: {
        backgroundColor: 'rgba(51, 63, 81, 0.6)',
      },
    };

    return (
      <Card className="login-container" style={styles.container}>
        <h2>Login</h2>
        <TextField
          name="email"
          floatingLabelText="Email"
          onChange={this.handleChange}
        />
        <br />
        <TextField
          name="password"
          floatingLabelText="Password"
          type="password"
          onChange={this.handleChange}
        />
        <br />
        <br />
        <RaisedButton label="login" onTouchTap={this.handleSubmit} />
        <br />
        <br />
        <RaisedButton label="Create Account" onTouchTap={() => { window.location += 'signup'; }} />
      </Card>
    );
  }
}

export default Login;
