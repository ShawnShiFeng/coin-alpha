const initialState = {
  showPortfolio: true,
  showActions: false,
  showFunds: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_PORTFOLIO':
      return Object.assign({}, state, { showPortfolio: action.showPortfolio });

    case 'OPEN_ACTIONS':
      return Object.assign({}, state, { showActions: action.showActions });

    case 'OPEN_FUNDS':
      return Object.assign({}, state, { showFunds: action.showFunds });

    case 'OPEN_MARKET':
      return Object.assign({}, state, { showMarket: action.showMarket });

    case 'CLOSE_PORTFOLIO':
      return Object.assign({}, state, { showPortfolio: action.showPortfolio });

    case 'CLOSE_ACTIONS':
      return Object.assign({}, state, { showActions: action.showActions });

    case 'CLOSE_FUNDS':
      return Object.assign({}, state, { showFunds: action.showFunds });

    case 'CLOSE_MARKET':
      return Object.assign({}, state, { showMarket: action.showMarket });

    default:
      return state;
  }
};
