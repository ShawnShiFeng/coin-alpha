import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import Header from './Header';
import Login from './Login';
import { sampleAction } from '../actions';
import Satori from './Satori';
import Portfolio from './Portfolio';
import Funds from './Funds';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange() {
  }

  handleSubmit() {
    // this.props.sampleAction();
  }

  render() {
    return (
      <div>
        <Header />
        <div className="below-header">
          <Login />
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
    sampleAction,
  }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Landing);
