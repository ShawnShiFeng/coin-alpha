import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

import { updateChart } from '../actions';

import CandleStickChartWithMACDIndicator from './CandleStickChartWithMACDIndicator';

class Market extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const options = {
      productId: 'BTC-USD',
      start: '2017-07-21T17:00:00-07:00',
      end: '2017-07-28T17:00:00-07:00',
      granularity: 86400,
    };
    return axios.post('/gdax', options)
    .then((res) => {
      this.props.updateChart(res.data.data);
    })
    .catch((err) => {
      
    });
  }

  render() {
    const { chartData } = this.props;
    if (chartData.length === 0) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        {JSON.stringify(chartData)}
        <CandleStickChartWithMACDIndicator data={chartData} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    sample: state.sample,
    chartData: state.chartData.chartData,
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateChart,
  }, dispatch);
};


export default connect(mapStateToProps, matchDispatchToProps)(Market);