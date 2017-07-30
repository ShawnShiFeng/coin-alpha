import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import { sampleAction, updateFunds } from '../actions';

// Component
import Header from './Header';
import Menubar from './Menubar';
import TabBox from './TabBox';

import './css/Dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const data = [
      {
        fundName: 'Falcon',
        orderSize: 5000,
        allocation: 1000,
        transferred: false,
        token: 0,
        purchaseNAV: 0,
        currentNAV: 0,
      },
      {
        fundName: 'CryptoCurrency Index',
        orderSize: 5000,
        allocation: 1000,
        transferred: false,
        token: 0,
        purchaseNAV: 0,
        currentNAV: 0,
      },
      {
        fundName: 'ICO Fund',
        orderSize: 5000,
        allocation: 2500,
        transferred: true,
        token: 70,
        purchaseNAV: 1000,
        currentNAV: 1100,
      },
            {
        fundName: 'falcon',
        orderSize: 70000,
        allocation: 0,
        transferred: true,
        token: 70,
        purchaseNAV: 1000,
        currentNAV: 1100,
      },
            {
        fundName: 'falcon',
        orderSize: 70000,
        allocation: 0,
        transferred: true,
        token: 70,
        purchaseNAV: 1000,
        currentNAV: 1100,
      },
            {
        fundName: 'falcon',
        orderSize: 70000,
        allocation: 0,
        transferred: true,
        token: 70,
        purchaseNAV: 1000,
        currentNAV: 1100,
      },
    ];
    this.props.updateFunds(data);
    // axios.get('/getUserFunds')
    // .then((response) => {
    //   // update user funds array
    //   console.log(response.data);
    //   this.props.updateFunds(data);
    // })
    // .catch((err) => {
    //   console.error('failed to get user funds, ', err);
    // });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <h3>Current Allocations</h3>
          <Menubar />
          <h3>Holdings</h3>
          <TabBox />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sample: state.sample,
    showPortfolio: state.showPortfolio,
    showActions: state.showActions,
    showFunds: state.showFunds,
    showMarket: state.showMarket,
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    sampleAction,
    updateFunds,
  }, dispatch);
};


export default connect(mapStateToProps, matchDispatchToProps)(Dashboard);
