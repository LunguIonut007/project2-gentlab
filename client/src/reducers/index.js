/* eslint-disable import/newline-after-import */
/* Combine all available reducers to a single root reducer.
 *
 */
/* Populated by react-webpack-redux:reducer */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import SupplierReducer from './supplierReducer';
import SupplierLast5Reducer from './supplierLast5Reducer';

const combined = combineReducers(
  {
    routing: routerReducer,
    suppliers: SupplierReducer,
    last5Suppliers: SupplierLast5Reducer,
  }
);

module.exports = combined;
