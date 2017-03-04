import { createReducer } from 'reduxsauce';

import Types from './../actions/types';

export const INITIAL_STATE = { list: [] };

const receive = (state, {products}) => Object.assign({}, state, {list: products});

const ACTION_HANDLERS = {
  [Types.PRODUCTS_RECEIVE]: receive
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
