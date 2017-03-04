import { createReducer } from 'reduxsauce';
import Types from './../actions/types';

export const INITIAL_STATE = {
  list: []
};

const receive = (state, {last5Products}) => Object.assign({}, state, { list: last5Products});

const ACTION_HANDLERS = {
  [Types.PRODUCTS_LAST5_RECEIVE]: receive
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
