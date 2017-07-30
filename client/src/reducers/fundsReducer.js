const initialState = {
  funds: [],
  key: -1,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_FUNDS':
      return Object.assign({}, state, { funds: action.funds });
    case 'GET_KEY':
      return Object.assign({}, state, { key: action.key });
    default:
      return state;
  }
};
