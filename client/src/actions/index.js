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

<<<<<<< HEAD
// user actions
=======
<<<<<<< HEAD
>>>>>>> Working on Redux for Market Chart
export const updateUser = (user) => {
  return {
    type: 'CLOSE_FUNDS',
    user,
  };
};
<<<<<<< HEAD

// funds actions
export const updateFunds = (userFunds) => {
  return {
    type: 'UPDATE_FUNDS',
    funds: userFunds,
  };
};
=======
=======
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
>>>>>>> Working on Redux for Market Chart
>>>>>>> Working on Redux for Market Chart
