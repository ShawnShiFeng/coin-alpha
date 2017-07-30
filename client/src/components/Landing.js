import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import Header from './Header';
import Login from './Login';
import { updateUser } from '../actions';

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
