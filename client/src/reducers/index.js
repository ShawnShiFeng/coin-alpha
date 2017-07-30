import { combineReducers } from 'redux';
import sampleReducer from './sampleReducer';
import tabReducer from './tabReducer';
import userReducer from './userReducer';
import fundsReducer from './fundsReducer';
import chartDataReducer from './chartDataReducer';

const allReducer = combineReducers({
  funds: fundsReducer,
  sample: sampleReducer,
  tab: tabReducer,
  user: userReducer,
  chartData: chartDataReducer,
});

export default allReducer;
