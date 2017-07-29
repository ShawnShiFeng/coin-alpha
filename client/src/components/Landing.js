import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { sampleAction } from '../actions';
import Satori from './Satori';
// import './css/App.css';

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
    // const { sample } = this.props;

    return (
      <div>
        <h2>Hello, world!</h2>
        <Satori />
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

// App.propTypes = {
//   sample: PropTypes.object.isRequired,
//   sampleAction: PropTypes.func.isRequired,
// };

export default connect(mapStateToProps, matchDispatchToProps)(Landing);
