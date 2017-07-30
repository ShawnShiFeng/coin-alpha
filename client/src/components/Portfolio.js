import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './css/Portfolio.css';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.test = this.test.bind(this);
  }


  test() {
    console.log(this.props.funds);
  }

  render() {
    return (
      <div>
        <div>
          <table>
            {
              this.props.funds.map((item) => {
                this.test();
                if (item) {
                  if (item.transferred === false) {
                    return (
                      <div className="subscription-box">
                        <tr>
                          <td className="item-spacing subscription-text outstanding-subscription">
                            Outstanding Subscription: </td>
                          <td className="item-spacing subscription-text text-box">
                            {item.fundName}</td>
                          <td className="item-spacing subscription-text text-box">
                            {item.allocation}</td>
                          <td><button>Transfer</button></td>
                        </tr>
                      </div>
                    );
                  }
                }
              })
            }
          </table>
        </div>
        <div>
          <table>
            <tr>
              <td>Fund Name</td>
              <td>Tokens</td>
              <td>Purchase NAV</td>
              <td>Initial Investment</td>
              <td>Current NAV</td>
              <td>Current Market Value</td>
              <td>Total Gain $</td>
              <td>Total Gain %</td>
            </tr>
            {
              this.props.funds.map((item) => {
                if (item) {
                  if (item.transferred === true) {
                    return (
                      <tr>
                        <td>{item.fundName}</td>
                        <td>{item.token}</td>
                        <td>{item.purchaseNAV}</td>
                        <td>{item.token * item.purchaseNAV}</td>
                        <td>{item.currentNAV}</td>
                        <td>{item.token * item.currentNAV}</td>
                        <td>{(item.token * item.currentNAV) - (item.token * item.purchaseNAV)}</td>
                        <td>{(((item.token * item.currentNAV) - (item.token * item.purchaseNAV))
                          / ((item.token * item.purchaseNAV) / 100))}%</td>
                      </tr>
                    );
                  }
                }
              })
            }
          </table>
          <button type="button">Redeem</button>
        </div>
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
  }, dispatch);
};


export default connect(mapStateToProps, matchDispatchToProps)(Portfolio);
