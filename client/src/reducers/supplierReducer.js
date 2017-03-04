import { createReducer } from 'reduxsauce';
import Types from './../actions/types';

export const INITIAL_STATE = { fetching: false, list: [] };

const request = state => Object.assign({}, state, { fetching: true, saving: false });

const receive = (state, { suppliers }) => Object.assign({}, state, { fetching: false, list: suppliers });

const saveRequest = state => Object.assign({}, state, {saving: true});

const saveReceive = state => Object.assign({}, state, {saving: false});

const ACTION_HANDLERS = {
  [Types.SUPPLIERS_REQUEST]: request,
  [Types.SUPPLIERS_RECEIVE]: receive,
  [Types.SUPPLIER_ADD_REQUEST]: saveRequest,
  [Types.SUPPLIER_ADD_RECEIVE]: saveReceive
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);

