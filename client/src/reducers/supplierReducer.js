import { createReducer } from 'reduxsauce';
import Types from './../actions/types';

export const INITIAL_STATE = { list: [] };

const receive = (state, { suppliers }) => Object.assign({}, state, { list: suppliers });

const ACTION_HANDLERS = {
  [Types.SUPPLIERS_RECEIVE]: receive
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);

