import { createReducer } from 'reduxsauce';
import Types from './../actions/types';

export const INITIAL_STATE = {
  fetching: false,
  list: []
};

const request = state => Object.assign({}, state, {fetching: true});

const receive = (state, {last5Products}) => Object.assign({}, state, {fetching: false, list: last5Products});

const ACTION_HANDLERS = {
  [Types.PRODUCTS_LAST5_REQUEST]: request,
  [Types.PRODUCTS_LAST5_RECEIVE]: receive
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
