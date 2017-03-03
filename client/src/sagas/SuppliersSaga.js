import { call, put } from 'redux-saga/effects';
import Actions from '../actions/creators';


export function* getSuppliers(api) {
  // make the call to the api
  const response = yield call(() => api.getAllSuppliers());
    // check if response is success
  if (response.ok) {
      // dispatch successful receiving children
    yield put(Actions.receiveSuppliers(response.data));
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
    yield put(Actions.receiveLast5Suppliers(response.data));
  } else {
    // dispatch failure
    console.log('Error');
  }
}

export function* addSupplier(api, action) {
  const supplier = action.newSupplier;

  // make the call to the api
  const response = yield call(api.addSupplier, supplier);
    // check if response is success

  if (response.ok) {
      // dispatch successful receiving children
    yield put(Actions.receiveAddSupplier(response.data));
    yield put(Actions.requestSuppliers());
  } else {
    // dispatch failure
    console.log('Error');
  }
}

export function* editSupplier(api, action) {
  const {supplier, supplierId} = action.payload;

  const response = yield call(api.editSupplier, supplierId, supplier);

  if (response.ok) {
    yield put(Actions.receiveEditSupplier(response.data));
    yield put(Actions.requestSuppliers());
  }
}

export function* deleteSupplier(api, action) {
  const {supplierId} = action;

  const response = yield call(api.deleteSupplier, supplierId);

  if (response.ok) {
    yield put(Actions.requestSuppliers());
  }
}


