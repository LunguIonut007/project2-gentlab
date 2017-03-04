/* Combine all available reducers to a single root reducer.*/

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import SupplierReducer from './supplierReducer';
import SupplierLast5Reducer from './supplierLast5Reducer';
import ProductReducer from './productReducer';
import ModalReducer from './modalReducer';
import ProductLast5Reducer from './productLast5Reducer';
import LoaderReducer from './loadingReducer';

const combined = combineReducers(
  {
    loader: LoaderReducer,
    routing: routerReducer,
    suppliers: SupplierReducer,
    last5Suppliers: SupplierLast5Reducer,
    products: ProductReducer,
    modal: ModalReducer,
    form: formReducer,
    last5Products: ProductLast5Reducer
  }
);

module.exports = combined;
