import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import { sampleAction, updateFunds } from '../actions';

// Component
import Header from './Header';
import Menubar from './Menubar';
import TabBox from './TabBox';
import MessageBox from './MessageBox';

import './css/Dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: ['Shawn', 'Ryan', 'Yvonne', 'Carlo', 'Karel'][Math.round(Math.random() * 4)],
    };
  }

  componentDidMount() {
    axios.get('/fundlist')
    .then((response) => {
      this.props.updateFunds(response.data);
    })
    .catch((err) => {
      console.error('failed to get user funds, ', err);
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="bot">
          <MessageBox firstName={this.state.firstName}/>
        </div>
        <div className="container">
          <Menubar firstName={this.state.firstName}/>
          <TabBox />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    sample: state.sample,
    showPortfolio: state.showPortfolio,
    showActions: state.showActions,
    showFunds: state.showFunds,
    showMarket: state.showMarket,
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    sampleAction,
    updateFunds,
  }, dispatch);
};


export default connect(mapStateToProps, matchDispatchToProps)(Dashboard);
