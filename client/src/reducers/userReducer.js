const initialState = {
  id: null,
  first_name: '',
  last_name: '',
  email: '',
  eth_wallet: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return Object.assign({}, state, action.user);

    default:
      return state;
  }
};
