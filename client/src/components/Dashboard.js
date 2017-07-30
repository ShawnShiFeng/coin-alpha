import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import { sampleAction, updateFunds } from '../actions';

// Component
import Header from './Header';
import Menubar from './Menubar';
import TabBox from './TabBox';

<<<<<<< HEAD
import './css/Dashboard.css';
=======
import MetaMask from './Metamask';
>>>>>>> metamask working!

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const data = [
      {
        fundName: 'falcon',
        orderSize: 100000,
        allocation: 50000,
        transferred: false,
        token: 0,
        purchaseNAV: 0,
        currentNAV: 0,
      },
      {
        fundName: 'mocking bird',
        orderSize: 80000,
        allocation: 40000,
        transferred: false,
        token: 0,
        purchaseNAV: 0,
        currentNAV: 0,
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
          <Menubar />
          <TabBox />
        </div>
        <MetaMask />
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
