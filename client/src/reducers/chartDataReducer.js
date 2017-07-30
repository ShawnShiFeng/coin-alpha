const initialState = {
  chartData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_CHART':
      return Object.assign({}, state, { chartData: action.chartData });
    default:
      return state;
  }
};
