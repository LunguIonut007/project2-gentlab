import { createReducer } from 'reduxsauce';

import Types from './../actions/types';

export const INITIAL_STATE = { isOpen: true, modalType: null, id: null, object: null };

const open = (state, {payload}) => Object.assign({}, state, {isOpen: true, ...payload});

const close = state => Object.assign({}, state, {isOpen: false});

const ACTION_HANDLERS = {
  [Types.MODAL_OPEN]: open,
  [Types.MODAL_CLOSE]: close
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
