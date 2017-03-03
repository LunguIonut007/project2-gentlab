import { takeLatest } from 'redux-saga/effects';
import API from './/../services/api';
import Types from './../actions/types';

import { getSuppliers, getLast5Suppliers, addSupplier, deleteSupplier, editSupplier } from './SuppliersSaga';
import { getProducts, getLast5Products, addProduct, editProduct, deleteProduct } from './ProductsSaga';

// Create our API at this level and feed it into
// the sagas that are expected to make API calls
// so there's only 1 copy app-wide!
// const api = API.create()
const api = API.create();

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
  yield [
    // some sagas only receive an action
    takeLatest(Types.SUPPLIERS_REQUEST, getSuppliers, api),
    takeLatest(Types.SUPPLIERS_LAST5_REQUEST, getLast5Suppliers, api),
    takeLatest(Types.SUPPLIER_ADD_REQUEST, addSupplier, api),
    takeLatest(Types.PRODUCTS_REQUEST, getProducts, api),
    takeLatest(Types.PRODUCTS_LAST5_REQUEST, getLast5Products, api),
    takeLatest(Types.SUPPLIER_DELETE_REQUEST, deleteSupplier, api),
    takeLatest(Types.SUPPLIER_EDIT_REQUEST, editSupplier, api),
    takeLatest(Types.PRODUCT_ADD_REQUEST, addProduct, api),
    takeLatest(Types.PRODUCT_EDIT_REQUEST, editProduct, api),
    takeLatest(Types.PRODUCT_DELETE_REQUEST, deleteProduct, api)
  ];
}
