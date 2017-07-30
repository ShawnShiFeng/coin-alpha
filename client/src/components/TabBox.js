import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import renderif from 'render-if';
import { sampleAction, togglePortfolio, toggleActions, toggleFunds, toggleMarket } from '../actions';

// Component
import Portfolio from './Portfolio';
import Actions from './Actions';
import Funds from './Funds';
import Market from './Market';

class TabBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {renderif(this.props.showPortfolio === true)(
          <Portfolio />,
        )}
        {renderif(this.props.showActions === true)(
          <Actions />,
        )}
        {renderif(this.props.showFunds === true)(
          <Funds />,
        )}
        {renderif(this.props.showMarket === true)(
          <Market />,
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sample: state.sample.sample,
    showPortfolio: state.tab.showPortfolio,
    showActions: state.tab.showActions,
    showFunds: state.tab.showFunds,
    showMarket: state.tab.showMarket,
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    sampleAction,
  }, dispatch);
};


export default connect(mapStateToProps, matchDispatchToProps)(TabBox);
