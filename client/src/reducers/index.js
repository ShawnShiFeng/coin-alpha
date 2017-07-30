import { combineReducers } from 'redux';
import sampleReducer from './sampleReducer';
import tabReducer from './tabReducer';

const allReducer = combineReducers({
  sample: sampleReducer,
  tab: tabReducer,
});

export default allReducer;
