export const sampleAction = (props) => {
  return {
    type: 'SAMPLE_ACTION',
    props,
  };
};

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

export const updateUser = (user) => {
  return {
    type: 'CLOSE_FUNDS',
    user,
  };
};
