import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Portfolio from 'material-ui/svg-icons/action/account-balance';
import Actions from 'material-ui/svg-icons/action/account-box';
import Funds from 'material-ui/svg-icons/action/assessment';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { sampleAction, openPortfolio, openActions, openFunds, closePortfolio, closeActions, closeFunds } from '../actions';

const style = {
  paper: {
    display: 'inline-block',
    float: 'left',
    margin: '16px 32px 16px 0',
  },
  rightIcon: {
    textAlign: 'center',
    lineHeight: '24px',
  },
};

class Menubar extends Component{
  constructor(props) {
    super(props);

    this.togglePortfolio = this.togglePortfolio.bind(this);
    this.toggleActions = this.toggleActions.bind(this);
    this.toggleFunds = this.toggleFunds.bind(this);
  }

  togglePortfolio() {
    this.props.openPortfolio();
    this.props.closeActions();
    this.props.closeFunds();
  }

  toggleActions() {
    this.props.closePortfolio();
    this.props.openActions();
    this.props.closeFunds();
  }

  toggleFunds() {
    this.props.closePortfolio();
    this.props.closeActions();
    this.props.openFunds();
  }


  render() {
    return (
      <div>
        <Paper style={style.paper}>
          <Menu>
            <MenuItem primaryText="Welcome XXXXXX" />
            <Divider />
            <MenuItem primaryText="Portfolio" onTouchTap={this.togglePortfolio} leftIcon={<ContentCopy />} />
            <MenuItem primaryText="Actions" onTouchTap={this.toggleActions} leftIcon={<Download />} />
            <MenuItem primaryText="Funds" onTouchTap={this.toggleFunds} leftIcon={<Delete />} />
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
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    sampleAction,
    openPortfolio,
    openActions,
    openFunds,
    closePortfolio,
    closeActions,
    closeFunds,
  }, dispatch);
};


export default connect(mapStateToProps, matchDispatchToProps)(Menubar);

