import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import renderif from 'render-if';
import { sampleAction, togglePortfolio, toggleActions, toggleFunds } from '../actions';

// Component
import Portfolio from './Portfolio';
import Actions from './Actions';
import Funds from './Funds';

class TabBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>from tabbox</p>
        <p>hello{this.props.showPortfolio}</p>

        {renderif(this.props.showPortfolio === true)(
          <Portfolio />,
        )}
        {renderif(this.props.showActions === true)(
          <Actions />,
        )}
        {renderif(this.props.showFunds === true)(
          <Funds />,
        )}
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
    togglePortfolio,
    toggleActions,
    toggleFunds,
  }, dispatch);
};


export default connect(mapStateToProps, matchDispatchToProps)(TabBox);
