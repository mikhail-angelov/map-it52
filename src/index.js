import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducers from 'reducers'
import App from 'components/app';
import './index.css';

const loggerMiddleware = createLogger()

const store = createStore(reducers,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  ))

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
