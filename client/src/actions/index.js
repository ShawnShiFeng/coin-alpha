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
    type: 'CLOSE_FUNDS',
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
