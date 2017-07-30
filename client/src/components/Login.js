import axios from 'axios';
import React, { Component } from 'react';
import { RaisedButton, TextField, Card } from 'material-ui';

import './css/Login.css';

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
    .then((res) => {
      this.props.updateUser(res.data);
      window.location = '/dashboard';
    })
    .catch((e) => {
      console.log(e);
    });
  }

  render() {
    const styles = {
      container: {
        backgroundColor: 'rgba(51, 63, 81, 0.6)',
      },
    };

    return (
      <div className="login-container" style={styles.container}>
        <table className="login-table">
          <tbody>
            <tr>
              <td><p className="header-signin">Sign In</p></td>
            </tr>
            <tr>
              <td className="spacing-before input-heading">Email</td>
            </tr>
            <tr>
              <td><input
                type="text"
                name="email"
                floatingLabelText="Email"
                className="login-input"
                onChange={this.handleChange}
              /></td>
            </tr>
            <tr>
              <td className="input-heading">Password</td>
            </tr>
            <tr>
              <td><input
                name="password"
                floatingLabelText="Password"
                type="password"
                className="login-input"
                onChange={this.handleChange}
              /></td>
            </tr>
            <tr>
              <td className="spacing-before"><div className="login-button" onTouchTap={this.handleSubmit} >Login</div></td>
            </tr>
            <tr>
              <td><div className="login-button" onTouchTap={() => { window.location += 'signup'; }} >Sign-Up</div></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Login;
