// sample actions
export const sampleAction = (props) => {
  return {
    type: 'SAMPLE_ACTION',
    props,
  };
};

// tap actions
export const openPortfolio = () => {
  return {
    type: 'OPEN_PORTFOLIO',
    showPortfolio: true,
  };
};

export const openActions = () => {
  return {
    type: 'OPEN_ACTIONS',
    showActions: true,
  };
};

export const openFunds = () => {
  return {
    type: 'OPEN_FUNDS',
    showFunds: true,
  };
};

export const openMarket = () => {
  return {
    type: 'OPEN_MARKET',
    showMarket: true,
  };
};

export const closePortfolio = () => {
  return {
    type: 'CLOSE_PORTFOLIO',
    showPortfolio: false,
  };
};

export const closeActions = () => {
  return {
    type: 'CLOSE_ACTIONS',
    showActions: false,
  };
};

export const closeFunds = () => {
  return {
    type: 'CLOSE_FUNDS',
    showFunds: false,
  };
};

// user actions
export const updateUser = (user) => {
  return {
    type: 'UPDATE_USER',
    user,
  };
};

// funds actions
export const updateFunds = (userFunds) => {
  return {
    type: 'UPDATE_FUNDS',
    funds: userFunds,
  };
};

export const closeMarket = () => {
  return {
    type: 'CLOSE_MARKET',
    showMarket: false,
  };
};

export const updateChart = (chartData) => {
  return {
    type: 'UPDATE_CHART',
    chartData,
  };
};
