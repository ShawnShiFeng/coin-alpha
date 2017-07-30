import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card } from 'material-ui';
import axios from 'axios';

// Component
import Header from './Header';

class FundList extends Component {
  // componentDidMount() {
  //
  // }

  render() {
    const data = [
      {
        id: 1,
        fundName: 'falcon',
        orderSize: 100000,
        allocation: 50000,
        transferred: false,
        token: 0,
        purchaseNAV: 0,
        currentNAV: 0,
      },
      {
        id: 2,
        fundName: 'mocking bird',
        orderSize: 80000,
        allocation: 40000,
        transferred: false,
        token: 0,
        purchaseNAV: 0,
        currentNAV: 0,
      },
      {
        id: 3,
        fundName: 'falcon',
        orderSize: 70000,
        allocation: 0,
        transferred: true,
        token: 70,
        purchaseNAV: 1000,
        currentNAV: 1100,
      },
    ];

    return (
      <div>
        <Header />
        {data.map((fund) => {
          let link = '/funddetails/' + fund.id;
          return (
            <Card>
              <a href={link}>
                <h2>{fund.fundName}</h2>
              </a>
              <div>
                currentNAV: {fund.currentNAV} purchaseNAV: {fund.purchaseNAV}
              </div>
            </Card>
          );
        })}
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     showPortfolio: state.showPortfolio,
//     showActions: state.showActions,
//     showFunds: state.showFunds,
//     showMarket: state.showMarket,
//   };
// };

// const matchDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//     updateFunds,
//   }, dispatch);
// };


export default FundList;
