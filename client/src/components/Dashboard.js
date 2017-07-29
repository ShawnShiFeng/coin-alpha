import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { sampleAction } from '../actions';

// Component
import Header from './Header';
import Menubar from './Menubar';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Menubar />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { sample } = state;
  return {
    sample,
  };
}

const matchDispatchToProps = (dispatch) => {
  bindActionCreators({
    sampleAction,
  }, dispatch);
};


export default connect(mapStateToProps, matchDispatchToProps)(Dashboard);