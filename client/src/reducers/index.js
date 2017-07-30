import { combineReducers } from 'redux';
import sampleReducer from './sampleReducer';
import tabReducer from './tabReducer';
import userReducer from './userReducer';

const allReducer = combineReducers({
  sample: sampleReducer,
  tab: tabReducer,
  user: userReducer,
});

export default allReducer;
