import React, { Component } from 'react';
import axios from 'axios';
import { Card, RaisedButton } from 'material-ui';
import Header from './Header';
import { Pie } from 'react-chartjs-2';

class FundDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: '',
      description: '',
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
    const pieData = {
      labels: ['BTC', 'ETH', 'LTC', 'Ripple', 'Dash'],
      datasets: [{
        label: 'Scrooge McDuck Investment Fund',
        data: [
          0.25,
          0.1,
          0.15,
          0.4,
          0.1,
        ],
        backgroundColor: [
          'rgba(252, 61, 57, 1)',
          'rgba(254, 203, 46, 1)',
          'rgba(83, 215, 105, 1)',
          'rgba(20, 126, 251, 1)',
          'rgba(193, 53, 132, 1)',
        ],
        borderColor: [
          'rgba(252, 61, 57, 1)',
          'rgba(254, 203, 46, 1)',
          'rgba(83, 215, 105, 1)',
          'rgba(20, 126, 251, 1)',
          'rgba(193, 53, 132, 1)',
        ],
        borderWidth: 3,
      }],
    };

    return (
      <div>
        <Header />
        <Card>
          <h1>{this.state.name}</h1>
          <div>
            <h3>Description</h3>
            <p>{this.state.description}</p>
            <h3>Summary Statistics</h3>
            <table>
              <tr>
                <td>Launch Date:</td>
                <td>{this.state.launch_date}</td>
              </tr>
              <tr>
                <td>Annualized Return</td>
                <td>169.3%</td>
              </tr>
              <tr>
                <td>Annualized Volatility</td>
                <td>56.4%</td>
              </tr>
              <tr>
                <td>Sharpe Ratio</td>
                <td>2.04</td>
              </tr>
            </table>
          </div>
          <br />
          <h3>Asset Mix</h3>
          <Pie data={pieData} width={500} />
          <table>
            <tbody>
              <tr>
                <td><h3>Historical Fund Price</h3></td>
                <td><h3>Performance vs. CryptoCurrencies</h3></td>
              </tr>
              <tr>
                <td><Pie data={pieData} width={500} /></td>
                <td><Pie data={pieData} width={500} /></td>
              </tr>
            </tbody>
          </table>
          <RaisedButton label="Subscribe" onTouchTap={this.subscribe} />
        </Card>
      </div>
    );
  }
}

export default FundDetails;
