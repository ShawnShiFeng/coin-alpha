import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { sampleAction, togglePortfolio, toggleActions, toggleFunds } from '../actions';

// Component
import Header from './Header';
import Menubar from './Menubar';
import TabBox from './TabBox';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    // this.openPortfolio = this.openPortfolio.bind(this);
    // this.openActions = this.openActions.bind(this);
    // this.openFunds = this.openFunds.bind(this);
  }

  // openPortfolio() {
  //   this.props.togglePortfolio();
  // }

  // openActions() {
  //   this.props.toggleActions();
  // }

  // openFunds() {
  //   this.props.toggleFunds();
  // }

  render() {
    return (
      <div>
        <Header />
        <Menubar />
        <TabBox />
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
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    sampleAction,
    togglePortfolio,
    toggleActions,
    toggleFunds,
  }, dispatch);
};


export default connect(mapStateToProps, matchDispatchToProps)(Dashboard);

