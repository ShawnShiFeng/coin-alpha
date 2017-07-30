import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import { TypeChooser } from 'react-stockcharts/lib/helper';

import { updateChart } from '../actions';

import CandleStickChartWithMACDIndicator from './CandleStickChartWithMACDIndicator';

class Market extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const start = new Date('2017-07-21T17:00:00-07:00');
    const end = new Date('2017-07-22T17:00:00-07:00');
    const granularity = (end - start) / (200 * 1000);
    const options = {
      productId: 'BTC-USD',
      start: start,
      end: end,
      granularity: granularity,
    };
    return axios.post('/gdax', options)
    .then((res) => {
      this.props.updateChart(res.data.data);
    })
    .catch((err) => {
      console.log('client gdax error': err);
    });
  }

  render() {
    const { chartData } = this.props;
    chartData.forEach((dataPoint) => {
      dataPoint.date = new Date(dataPoint.date * 1000);
    });

    if (chartData.length === 0) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          {JSON.stringify(chartData.length)}
          <TypeChooser>
            {type => <CandleStickChartWithMACDIndicator type={type} data={chartData} />}
          </TypeChooser>
        </div>
      );
    }
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