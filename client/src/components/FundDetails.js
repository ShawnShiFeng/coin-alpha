import React, { Component } from 'react';
import axios from 'axios';
import { Card, RaisedButton } from 'material-ui';
import Header from './Header';
import { Pie, Bar, Line } from 'react-chartjs-2';

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
    const barData = {
      labels: ['SEP 16', 'OCT 16', 'NOV 16', 'DEC 16', 'JAN 17', 'FEB 17', 'MAR 17', 'APR 17', 'MAY 17', 'JUN 17', 'JUL 17'],
      datasets: [{
        label: 'Scrooge McDuck Investment Fund',
        data: [
          101,
          103,
          102,
          104,
          105,
          104,
          106,
          109,
          109.5,
          108.5,
          107,
        ],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      }],
    };
    const lineData = {
      labels: ['SEP 16', 'OCT 16', 'NOV 16', 'DEC 16', 'JAN 17', 'FEB 17', 'MAR 17', 'APR 17', 'MAY 17', 'JUN 17', 'JUL 17'],
      datasets: [{
        label: 'BTC',
        fill: false,
        data: [
          101,
          103,
          102,
          104,
          105,
          104,
          106,
          109,
          109.5,
          108.5,
          107,
        ],
        backgroundColor: [
          'rgba(252, 61, 57, 1)',
          'rgba(252, 61, 57, 1)',
          'rgba(252, 61, 57, 1)',
          'rgba(252, 61, 57, 1)',
          'rgba(252, 61, 57, 1)',
          'rgba(252, 61, 57, 1)',
          'rgba(252, 61, 57, 1)',
          'rgba(252, 61, 57, 1)',
          'rgba(252, 61, 57, 1)',
          'rgba(252, 61, 57, 1)',
          'rgba(252, 61, 57, 1)',
        ],
        borderColor: [
          'rgba(252, 61, 57, 0.2)',
          'rgba(252, 61, 57, 0.2)',
          'rgba(252, 61, 57, 0.2)',
          'rgba(252, 61, 57, 0.2)',
          'rgba(252, 61, 57, 0.2)',
          'rgba(252, 61, 57, 0.2)',
          'rgba(252, 61, 57, 0.2)',
          'rgba(252, 61, 57, 0.2)',
          'rgba(252, 61, 57, 0.2)',
          'rgba(252, 61, 57, 0.2)',
          'rgba(252, 61, 57, 0.2)',
        ],
        borderWidth: 1,
      },
      {
        label: 'ETH',
        fill: false,
        data: [
          101,
          102,
          104,
          98,
          94,
          99,
          110,
          112,
          107,
          108.5,
          106,
        ],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
      {
        label: 'LTC',
        fill: false,
        data: [
          58,
          60,
          61,
          54,
          55,
          53,
          51,
          47,
          50,
          52,
          49,
        ],
        backgroundColor: [
          'rgba(20, 126, 251, 1)',
          'rgba(20, 126, 251, 1)',
          'rgba(20, 126, 251, 1)',
          'rgba(20, 126, 251, 1)',
          'rgba(20, 126, 251, 1)',
          'rgba(20, 126, 251, 1)',
          'rgba(20, 126, 251, 1)',
          'rgba(20, 126, 251, 1)',
          'rgba(20, 126, 251, 1)',
          'rgba(20, 126, 251, 1)',
          'rgba(20, 126, 251, 1)',
        ],
        borderColor: [
          'rgba(20, 126, 251, 1)',
          'rgba(20, 126, 251, 1)',
          'rgba(20, 126, 251, 1)',
          'rgba(20, 126, 251, 1)',
          'rgba(20, 126, 251, 1)',
          'rgba(20, 126, 251, 1)',
          'rgba(20, 126, 251, 1)',
          'rgba(20, 126, 251, 1)',
          'rgba(20, 126, 251, 1)',
          'rgba(20, 126, 251, 1)',
          'rgba(20, 126, 251, 1)',
        ],
        borderWidth: 1,
      },
      ],
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
                <td><Bar data={barData} width={500} height={400} /></td>
                <td><Line data={lineData} width={500} height={400} /></td>
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
