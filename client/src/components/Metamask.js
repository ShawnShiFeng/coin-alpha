import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Web3 from 'web3';
import { sampleAction, updateFunds } from '../actions';

// Component

class MetaMask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      web3Found: false,
      eth: null,
    };
  }

  componentDidMount() {
    window.addEventListener('load', () => {
      if (typeof web3 !== 'undefined') {
        const eth = new Web3(web3.currentProvider);
        this.setState({
          web3Found: true,
          eth,
        });
      } else {
        const eth = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
        this.setState({
          web3Found: false,
          eth,
        });
      }
    });
  }

  render() {
    return (
      <div>
        <button>Test</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sample: state.sample,
  showPortfolio: state.showPortfolio,
  showActions: state.showActions,
  showFunds: state.showFunds,
  showMarket: state.showMarket,
});

const matchDispatchToProps = dispatch => bindActionCreators({
  sampleAction,
  updateFunds,
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(MetaMask);
