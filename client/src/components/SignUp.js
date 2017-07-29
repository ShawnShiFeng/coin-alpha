import axios from 'axios';
import React, { Component } from 'react';
import { RaisedButton, TextField, Card } from 'material-ui';

class SignUp extends Component {
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
    axios.post('/signup', this.state)
    .then(() => {
      // save login info to store
    })
    .catch((e) => {
      console.log(e);
      // TODO: add error handling
    });
  }

  render() {
    return (
      <Card>
        <TextField
          name="email"
          floatingLabelText="Email"
          onChange={this.handleChange}
        />
        <br />
        <TextField
          name="passoword"
          floatingLabelText="Password"
          onChange={this.handleChange}
        />
        <br />
        <TextField
          name="ethWallet"
          floatingLabelText="Ethereum Wallet"
          onChange={this.handleChange}
        />
        <br />
        <RaisedButton label="sign up" onTouchTap={this.handleSubmit} />
      </Card>
    );
  }
}

export default SignUp;
