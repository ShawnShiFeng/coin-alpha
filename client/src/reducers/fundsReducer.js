const initialState = {
  funds: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_FUNDS':
      return Object.assign({}, state, { funds: action.funds });

    default:
      return state;
  }
};
