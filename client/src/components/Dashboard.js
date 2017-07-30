import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { sampleAction } from '../actions';

// Component
import Header from './Header';
import Menubar from './Menubar';
import TabBox from './TabBox';

class Dashboard extends Component {
  constructor(props) {
    super(props);

  }



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
  }, dispatch);
};


export default connect(mapStateToProps, matchDispatchToProps)(Dashboard);

