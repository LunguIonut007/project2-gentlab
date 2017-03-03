import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Dashboard from './webapp/dashboardPage/Dashboard';
import Suppliers from './webapp/suppliersPage/Suppliers';
import Products from './webapp/productsPage/Products';
import Layout from './webapp/layout/Layout';
import configureStore from './stores/indexStore';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <Router history={history}>
        <Route component={Layout}>
          <Route path="/" component={Dashboard} />
          <Route path="/products" component={Products}/>
          <Route path="/suppliers" component={Suppliers} />
        </Route>
      </Router>
    </Provider>
  </AppContainer>,
  document.getElementById('app')
);
