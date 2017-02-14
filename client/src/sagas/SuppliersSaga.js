import { call, put } from 'redux-saga/effects';
import Actions from '../actions/creators';


export function* getSuppliers(api) {
  // make the call to the api
  const response = yield call(api.getAllSuppliers);
    // check if response is success
  if (response.ok) {
      // dispatch successful receiving children
    yield put(Actions.receiveSuppliers(response.data.data));
  } else {
    // dispatch failure
    console.log('Error');
  }
}

export function* getLast5Suppliers(api) {
  // make the call to the api
  const response = yield call(api.getLast5Suppliers);
    // check if response is success
  if (response.ok) {
      // dispatch successful receiving children
    yield put(Actions.receiveLast5Suppliers(response.data.data));
  } else {
    // dispatch failure
    console.log('Error');
  }
}

export function* addSuppliers(api, action) {
  const { newSupplier } = action;
  // make the call to the api
  const response = yield call(api.addSuppliers, newSupplier);
    // check if response is success
  if (response.ok) {
      // dispatch successful receiving children
    yield put(Actions.receiveAddSuppliers(response.data.data));
  } else {
    // dispatch failure
    console.log('Error');
  }
}
