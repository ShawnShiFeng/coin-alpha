import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import { updateFunds } from '../actions';
import './css/Portfolio.css';

import Metamask from './Metamask';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.test = this.test.bind(this);
    this.sendMail = this.sendMail.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }


  test() {
    console.log(this.props.funds);
  }

  sendMail() {
    axios.post('/sendmail')
    .then((data) => {
      console.log('you have successfully sent mails!');
    })
    .catch((err) => {
      console.error(err);
    });
  }

  removeItem(num) {
    let temp = this.props.funds;
    temp = temp.filter((item) => {
      return temp.indexOf(item) !== num;
    });
    this.props.updateFunds(temp);
  }


  render() {
    return (
      <div>
        <table className="table-top-spacing">
          {
            this.props.funds.map((item, index) => {
              this.test();
              if (item) {
                if (item.transferred === false) {
                  return (
                    <div className="subscription-box">
                      <tr>
                        <td className="item-spacing subscription-text outstanding-subscription">
                          Outstanding Subscription: </td>
                        <td className="item-spacing subscription-text text-box">
                          {item.name}</td>
                        <td className="item-spacing subscription-text text-box">
                          {item.allocation}</td>
                        <td><Metamask index={index} amount={item.allocation} /></td>
                      </tr>
                    </div>
                  );
                }
              }
            })
          }
        </table>
        <br />
        <table>
          <div className="holding-container">
            <tr>
              <td className="holding-title-text holding-title-text-spacing outstanding-subscription">Fund Name</td>
              <td className="holding-title-text holding-title-text-spacing">Tokens</td>
              <td className="holding-title-text holding-title-text-spacing">Purchase NAV</td>
              <td className="holding-title-text holding-title-text-spacing">Initial Investment</td>
              <td className="holding-title-text holding-title-text-spacing">Current NAV</td>
              <td className="holding-title-text holding-title-text-spacing">Current Market Value</td>
              <td className="holding-title-text holding-title-text-spacing">Total Gain $</td>
              <td className="holding-title-text holding-title-text-spacing">Total Gain %</td>
            </tr>
            {
              this.props.funds.map((item, index) => {
                if (item) {
                  if (item.transferred === true) {
                    return (
                      <tr>
                        <td className="outstanding-subscription">{item.name}</td>
                        <td>{item.token}</td>
                        <td>{item.purchaseNAV}</td>
                        <td>{item.token * item.purchaseNAV}</td>
                        <td>{item.currentNAV}</td>
                        <td>{item.token * item.currentNAV}</td>
                        <td>{(item.token * item.currentNAV) - (item.token * item.purchaseNAV)}</td>
                        <td>{(((item.token * item.currentNAV) - (item.token * item.purchaseNAV))
                          / ((item.token * item.purchaseNAV) / 100))}%</td>
                        {/*<td><button onClick={this.sendMail} className="button"type="button">Redeem</button></td>*/}
                        <td><button onClick={() => this.removeItem(index)} className="button"type="button">Redeem</button></td>
                      </tr>
                    );
                  }
                }
              })
            }
          </div>
        </table>
      </div>
    );
  }

}


const mapStateToProps = (state) => {
  return {
    funds: state.funds.funds,
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateFunds,
  }, dispatch);
};


export default connect(mapStateToProps, matchDispatchToProps)(Portfolio);
