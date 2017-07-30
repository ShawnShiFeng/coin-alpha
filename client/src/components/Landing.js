import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import Header from './Header';
import Login from './Login';
import { updateUser } from '../actions';

class Landing extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="below-header">
          <Login {...this.props} />
        </div>
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
  return bindActionCreators({
    updateUser,
  }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Landing);
