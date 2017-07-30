import React from 'react';
import ReactDOM from 'react-dom';

// Redux config
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

// End Redux
import reducers from './reducers';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import SignUp from './components/SignUp';

// createLogger can be turned off for product
const middleware = [thunk, createLogger()];

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

let compName = 'landing';

const element = () => {
  if (document.getElementById('landing')) {
    compName = 'landing';
    return (<Landing />);
  } else if (document.getElementById('dashboard')) {
    compName = 'dashboard';
    return (<Dashboard />);
  } else if (document.getElementById('signup')) {
    compName = 'signup';
    return (<SignUp />);
  }
  // else if (document.getElementById('signup')) return (<SignUp />);
};

const muiTheme = getMuiTheme({
  fontFamily: "'Lato', sans-serif",
});

injectTapEventPlugin();
ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      {element()}
    </Provider>
  </MuiThemeProvider>,
  document.getElementById(compName),
);
