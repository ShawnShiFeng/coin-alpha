import React, { Component } from 'react';
import axios from 'axios';
import { Card, RaisedButton } from 'material-ui';
import Header from './Header';

class FundDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: '',
      btc_address: '',
      eth_address: '',
      ltc_address: '',
      usd_address: '',
      gdax_access_key: '',
      launch_date: null,
    };
    this.subscribe = this.subscribe.bind(this);
  }

  componentDidMount() {
    const url = '/fundinfo/' + id;
    axios.get(url)
    .then((res) => {
      this.setState(res.data);
    })
    .catch((e) => {
      console.log(e);
    });
  }

  subscribe() {
    axios.post('/subscribe', { id: this.state.id })
    .then((res) => {
      console.log(res.data);
    })
    .catch((e) => {
      console.log(e);
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Card>
          <h1>{this.state.name}</h1>
          <div>
            BTC Address: {this.state.btc_address} <br />
            ETH Address: {this.state.eth_address} <br />
            LTC Address: {this.state.ltc_address} <br />
            USD Address: {this.state.usd_address} <br />
            Launch Date: {this.state.launch_date}
          </div>
          <br />
          <RaisedButton label="Subscribe" onTouchTap={this.subscribe} />
        </Card>
      </div>
    );
  }
}

export default FundDetails;
