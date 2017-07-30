import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RaisedButton, TextField, Card } from 'material-ui';
import Header from './Header';
import { updateUser } from '../actions';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
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
    .then((user) => {
      this.props.updateUser(user);
      this.setState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        ethWallet: '',
      });
      window.location = '/dashboard';
    })
    .catch(() => {
      // TODO: add error handling
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Card>
          <TextField
            name="firstName"
            floatingLabelText="First Name"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <br />
          <TextField
            name="lastName"
            floatingLabelText="Last Name"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <br />
          <TextField
            name="email"
            floatingLabelText="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <TextField
            name="password"
            floatingLabelText="Password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br />
          <TextField
            name="ethWallet"
            floatingLabelText="Ethereum Wallet"
            value={this.state.ethWallet}
            onChange={this.handleChange}
          />
          <br />
          <RaisedButton label="sign up" onTouchTap={this.handleSubmit} />
        </Card>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { sample } = state;
  return {
    sample,
  };
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateUser,
  }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(SignUp);
