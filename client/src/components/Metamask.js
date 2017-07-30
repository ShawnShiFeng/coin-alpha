import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Eth from 'ethjs';
import Web3 from 'web3';
import { sampleAction, updateFunds, getKey } from '../actions';

import './css/Portfolio.css';
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
      value: Eth.toWei(this.props.amount / 10000, 'ether'),
      to: '0x6d99b71FB15B270fD00aE09a7218C4cab1695041',
    }, (error, result) => {
      if (error) {
        console.warn(error);
      } else {
        let oldArray = this.props.funds;
        oldArray = oldArray.filter(() => {
          return true;
        });
        oldArray[this.props.index].transferred = true;
        oldArray[this.props.index].purchaseNAV = Math.random() * 500;
        oldArray[this.props.index].token = Math.floor(oldArray[this.props.index].allocation / oldArray[this.props.index].purchaseNAV);
        oldArray[this.props.index].currentNAV = Math.random() * 500;
        this.props.updateFunds(oldArray);
        console.log('SUCCESSFUL PAYMENT: ENTER ACTION HERE');
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
        <button className="transfer-button" onClick={this.handleSubmit} >Transfer</button>
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
  funds: state.funds.funds,
  key: state.funds.key,
});

const matchDispatchToProps = dispatch => bindActionCreators({
  sampleAction,
  updateFunds,
  getKey,
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(MetaMask);
