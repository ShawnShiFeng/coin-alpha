import React from 'react';
import ReactDOM from 'react-dom';

// Redux config
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducers from './reducers';

// End Redux
import Landing from './components/Landing';

const middleware = [thunk, createLogger()];
// createLogger can be turned off for product

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      name: 'app', actionBlacklist: ['REDUX_STORAGE_SAVE'],
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
  );

const store = createStore(reducers, enhancer);

const element = () => {
  if (document.getElementById('landing')) return (<Landing />);
  // else if (document.getElementById('dashboard')) return (<Dashboard />);
  // else if (document.getElementById('login')) return (<Login />);
  // else if (document.getElementById('signup')) return (<SignUp />);
};

ReactDOM.render(
  <Provider store={store}>
    {element()}
  </Provider>,
  document.getElementById('landing')
);
