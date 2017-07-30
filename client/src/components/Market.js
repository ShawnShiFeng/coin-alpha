import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';

import { TypeChooser } from 'react-stockcharts/lib/helper';
import Paper from 'material-ui/Paper';
import DatePicker from 'material-ui/DatePicker';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import {
  updateChart,
  updateStartDate,
  updateEndDate,
  updateGranularity,
  updateDateRange,
  updateProductId,
} from '../actions';

import CandleStickChartWithMACDIndicator from './CandleStickChartWithMACDIndicator';

const style = {
  paper: {
    display: 'inline-block',
    float: 'left',
    margin: '0 0 0 2vw',
    width: '70vw',
  },
  button: {
    // margin: 12,
  },
  table: {
    margin: '0 0 0 2vw',
    width: '70vw',
    display: 'table-cell',
  },
  col: {
    textAlign: 'right',
  }
};

class Market extends Component {
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
    this.handleDateRangeChange = this.handleDateRangeChange.bind(this);
    this.handleProductIdChange = this.handleProductIdChange.bind(this);
  }

  getData() {
    const { updateChart, productId, start, end, granularity } = this.props;
    const options = {
      productId,
      start,
      end,
      granularity,
    };
    return axios.post('/gdax', options)
    .then((res) => {
      updateChart(res.data.data);
    })
    .catch((err) => {
      console.log('client gdax error: ', err);
    });
  }

  handleDateRangeChange(event, index, value) {
    const {
      updateEndDate,
      updateStartDate,
      updateGranularity,
      updateDateRange,
    } = this.props;
    updateDateRange(value);
    const endDate = new Date();
    updateEndDate(endDate);
    const startDate = new Date();
    if (value === '1 Day') {
      startDate.setDate(startDate.getDate() - 1);
    } else if (value === '1 Week') {
      startDate.setDate(startDate.getDate() - 7);
    } else if (value === '1 Month') {
      startDate.setMonth(startDate.getMonth() - 1);
    } else if (value === '6 Month') {
      startDate.setMonth(startDate.getMonth() - 6);
    } else if (value === 'YTD') {
      startDate.setDate(startDate.getDate() - 1);
    } else if (value === '1 Year') {
      startDate.setDate(startDate.getDate() - 365);
    } else if (value === 'Max') {
      startDate.setDate(startDate.getDate() - (365 * 2));
    }
    updateStartDate(startDate);
    const granularity = (endDate - startDate) / (200 * 1000); // # of data points * 1000 ms
    updateGranularity(granularity);
  }

  handleProductIdChange(event, index, value) {
    const { updateProductId } = this.props;
    updateProductId(value);
  }

  componentDidMount() {
    const {
      updateChart,
      updateEndDate,
      updateStartDate,
      updateGranularity,
      updateDateRange,
      productId,
    } = this.props;
    const end = new Date();
    const start = new Date();
    start.setDate(start.getDate() - 1);
    const granularity = (end - start) / (200 * 1000);
    updateEndDate(end);
    updateStartDate(start);
    updateGranularity(granularity);
    const options = {
      productId,
      start,
      end,
      granularity,
    };
    return axios.post('/gdax', options)
    .then((res) => {
      updateChart(res.data.data);
    })
    .catch((err) => {
      console.log('client gdax error: ', err);
    });
  }

  render() {
    const { chartData, dateRange, productId } = this.props;
    chartData.forEach((dataPoint) => {
      dataPoint.date = new Date(dataPoint.date * 1000);
    });
    if (chartData.length === 0) {
      return <div>Loading...</div>;
    }
    const pieData = {
      labels: ['BTC', 'ETH', 'LTC', 'Ripple', 'Dash'],
      datasets: [{
        label: 'Scrooge McDuck Investment Fund',
        data: [
          0.25,
          0.1,
          0.15,
          0.4,
          0.1,
        ],
        backgroundColor: [
          'rgba(252, 61, 57, 1)',
          'rgba(254, 203, 46, 1)',
          'rgba(83, 215, 105, 1)',
          'rgba(20, 126, 251, 1)',
          'rgba(193, 53, 132, 1)',
        ],
        borderColor: [
          'rgba(252, 61, 57, 1)',
          'rgba(254, 203, 46, 1)',
          'rgba(83, 215, 105, 1)',
          'rgba(20, 126, 251, 1)',
          'rgba(193, 53, 132, 1)',
        ],
        borderWidth: 3,
      }],
    };
    return (
      <div>
        <Pie data={pieData} width={500} />
        <table style={style.table}>
          <tr>
            <td>
              <DropDownMenu value={productId} onChange={this.handleProductIdChange}>
                <MenuItem value={'BTC-USD'} primaryText="Bitcoin" />
                <MenuItem value={'ETH-USD'} primaryText="Ethereum" />
                <MenuItem value={'LTC-USD'} primaryText="Litecoin" />
              </DropDownMenu>
            </td>
            <td style={style.col}>
              <DropDownMenu value={dateRange} onChange={this.handleDateRangeChange}>
                <MenuItem value={'1 Day'} primaryText="1 Day" />
                <MenuItem value={'1 Week'} primaryText="1 Week" />
                <MenuItem value={'1 Month'} primaryText="1 Month" />
                <MenuItem value={'6 Month'} primaryText="6 Month" />
                <MenuItem value={'YTD'} primaryText="YTD" />
                <MenuItem value={'1 Year'} primaryText="1 Year" />
                <MenuItem value={'Max'} primaryText="Max" />
              </DropDownMenu>
            </td>
            <td style={style.col}>
              <RaisedButton label="SEARCH" primary style={style.button} onClick={this.getData} />
            </td>
          </tr>
        </table>

        <Paper style={style.paper} zDepth={2}>
          <TypeChooser>
            {type => <CandleStickChartWithMACDIndicator type={type} data={chartData} />}
          </TypeChooser>
        </Paper>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    chartData: state.chartData.chartData,
    start: state.chartData.start,
    end: state.chartData.end,
    granularity: state.chartData.granularity,
    dateRange: state.chartData.dateRange,
    productId: state.chartData.productId,
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateChart,
    updateStartDate,
    updateEndDate,
    updateGranularity,
    updateDateRange,
    updateProductId,
  }, dispatch);
};


export default connect(mapStateToProps, matchDispatchToProps)(Market);