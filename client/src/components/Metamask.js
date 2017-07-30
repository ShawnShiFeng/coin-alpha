import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Eth from 'ethjs';
import Web3 from 'web3';
import { sampleAction, updateFunds } from '../actions';

// const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

// Component

class MetaMask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      web3Found: false,
      eth: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    console.log('accounts: ', window.web3.eth.accounts);
    window.web3.eth.sendTransaction({
      from: window.web3.eth.accounts[0],
      value: Eth.toWei('100', 'ether'),
      to: '0x6d99b71FB15B270fD00aE09a7218C4cab1695041',
      data: null,
    }, (error, result) => {
      if (error) {
        console.warn(error);
      } else {
        console.log(result);
      }
    });
  }

  componentDidMount() {
    window.addEventListener('load', () => {
      if (typeof web3 !== 'undefined') {
        window.web3 = new Web3(web3.currentProvider);
        console.log('CURRENT PROVIDER');
        console.log(window.web3);
        this.setState({ web3Found: true });
      } else {
        window.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
        this.setState({ web3Found: false });
      }
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleSubmit} >Test</button>
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
