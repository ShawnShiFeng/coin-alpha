import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Portfolio from 'material-ui/svg-icons/action/account-balance';
import Actions from 'material-ui/svg-icons/action/account-box';
import Funds from 'material-ui/svg-icons/action/assessment';
import MarketIcon from 'material-ui/svg-icons/action/trending-up';


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  sampleAction,
  openPortfolio,
  openActions,
  openFunds,
  openMarket,
  closePortfolio,
  closeActions,
  closeFunds,
  closeMarket,
} from '../actions';

const style = {
  paper: {
    // display: 'inline-block',
    float: 'left',
    // margin: '16px 32px 16px 0',
    height: '100vh',
  },
  rightIcon: {
    textAlign: 'center',
    lineHeight: '24px',
  },
};

class Menubar extends Component {
  constructor(props) {
    super(props);

    this.togglePortfolio = this.togglePortfolio.bind(this);
    this.toggleActions = this.toggleActions.bind(this);
    this.toggleFunds = this.toggleFunds.bind(this);
    this.toggleMarket = this.toggleMarket.bind(this);
  }

  togglePortfolio() {
    this.props.openPortfolio();
    this.props.closeActions();
    this.props.closeFunds();
    this.props.closeMarket();
  }

  toggleActions() {
    this.props.closePortfolio();
    this.props.openActions();
    this.props.closeFunds();
    this.props.closeMarket();
  }

  toggleFunds() {
    this.props.closePortfolio();
    this.props.closeActions();
    this.props.openFunds();
    this.props.closeMarket();
  }

  toggleMarket() {
    this.props.closePortfolio();
    this.props.closeActions();
    this.props.closeFunds();
    this.props.openMarket();
  }


  render() {
    return (
      <div>
        <Paper style={style.paper}>
          <Menu>
            <MenuItem primaryText="Welcome XXXXXX" />
            <Divider />
            <MenuItem primaryText="Portfolio" onTouchTap={this.togglePortfolio} leftIcon={<Portfolio />} />
            <MenuItem primaryText="Activate Your Account" onTouchTap={this.toggleActions} leftIcon={<Actions />} />
            <MenuItem primaryText="Funds" onTouchTap={this.toggleFunds} leftIcon={<Funds />} />
            <MenuItem primaryText="Market" onTouchTap={this.toggleMarket} leftIcon={<MarketIcon />} />
          </Menu>
        </Paper>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    sample: state.sample,
    showPortfolio: state.tab.showPortfolio,
    showActions: state.tab.showActions,
    showFunds: state.tab.showFunds,
    showMarket: state.tab.showMarket,
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    sampleAction,
    openPortfolio,
    openActions,
    openFunds,
    openMarket,
    closePortfolio,
    closeActions,
    closeFunds,
    closeMarket,
  }, dispatch);
};


export default connect(mapStateToProps, matchDispatchToProps)(Menubar);
