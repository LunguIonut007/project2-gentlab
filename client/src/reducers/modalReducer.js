import { createReducer } from 'reduxsauce';

import Types from './../actions/types';

export const INITIAL_STATE = { isOpen: true, modalType: null, object: null };

const open = (state, {payload}) => Object.assign({}, state, {isOpen: true, ...payload});

const close = (state, {payload}) => Object.assign({}, state, {isOpen: false, modalType: payload.modalType});

const setObject = (state, {payload}) => Object.assign({}, state, {object: payload.object});

const ACTION_HANDLERS = {
  [Types.MODAL_OPEN]: open,
  [Types.MODAL_CLOSE]: close,
  [Types.MODAL_SET_OBJECT]: setObject
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
