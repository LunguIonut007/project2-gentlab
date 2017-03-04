import { createReducer } from 'reduxsauce';

import Types from './../actions/types';

export const INITIAL_STATE = { loading: false};

// All request to the REST api should show a loading icon

// There is only one global loading which is set to activate when state.loader.loading is true
// A global loader (present in Layout) was chosen because we would not want multiple showed at once

// Because multiple request can be sent at the same time we need to show the loading if there's at least
// one request pending (a true/false aproach would result in the termination of the loading at the first "receive")
const request = state => Object.assign({}, state, { loading: state.loading + 1 }); //
const receive = state => Object.assign({}, state, {loading: state.loading - 1 });

const ACTION_HANDLERS = {
  [Types.PRODUCTS_REQUEST]: request,
  [Types.PRODUCTS_RECEIVE]: receive,

  [Types.SUPPLIERS_REQUEST]: request,
  [Types.SUPPLIERS_RECEIVE]: receive,

  [Types.SUPPLIERS_LAST5_REQUEST]: request,
  [Types.SUPPLIERS_LAST5_RECEIVE]: receive,

  [Types.PRODUCTS_LAST5_REQUEST]: request,
  [Types.PRODUCTS_LAST5_RECEIVE]: receive,

  [Types.SUPPLIER_ADD_REQUEST]: request,
  [Types.SUPPLIER_ADD_RECEIVE]: receive,

  [Types.SUPPLIER_EDIT_REQUEST]: request,
  [Types.SUPPLIER_EDIT_RECEIVE]: receive,

  [Types.PRODUCT_ADD_REQUEST]: request,
  [Types.PRODUCT_ADD_RECEIVE]: receive,

  [Types.PRODUCT_EDIT_REQUEST]: request,
  [Types.PRODUCT_EDIT_RECEIVE]: receive,

  [Types.PRODUCT_DELETE_REQUEST]: request,
  [Types.PRODUCT_DELETE_RECEIVE]: receive,

  [Types.SUPPLIER_DELETE_REQUEST]: request,
  [Types.SUPPLIER_DELETE_RECEIVE]: receive
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
