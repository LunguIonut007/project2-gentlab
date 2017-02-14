import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Main from './containers/Main';
import Suppliers from './containers/Suppliers';
import configureStore from './stores';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={Main} />
        <Route path="/products" component={Main} />
        <Route path="/suppliers" component={Suppliers} />
      </Router>
    </Provider>
  </AppContainer>,
  document.getElementById('app')
);
