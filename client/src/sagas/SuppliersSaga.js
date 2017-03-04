import { call, put } from 'redux-saga/effects';
import { startSubmit, stopSubmit } from 'redux-form';
import Actions from '../actions/creators';

export function* getSuppliers(api) {
  // make the call to the api
  const response = yield call(api.getAllSuppliers);
    // check if response is success
  if (response.ok) {
      // dispatch successful receiving children
    yield put(Actions.receiveSuppliers(response.data));
  } else {
    // dispatch failure
    yield put(Actions.receiveSuppliers({}));
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
    yield put(Actions.receiveLast5Suppliers({}));
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
    yield put(Actions.closeModal());
    yield put(Actions.requestSuppliers());

  } else {
    yield put(Actions.receiveAddSupplier({}));
    const error = response.data;

    if (error.type === 'validationError') {

      const validationError = {};
      validationError[error.field] = error.message;

      yield put(stopSubmit('supplierModalForm', validationError));
    }
  }

}

export function* editSupplier(api, action) {
  const {supplier, supplierId} = action.payload;
  yield put(startSubmit('supplierModalForm'));
  const response = yield call(api.editSupplier, supplierId, supplier);

  if (response.ok) {
    yield put(stopSubmit('supplierModalForm'));
    yield put(Actions.receiveEditSupplier(response.data));
    yield put(Actions.closeModal());
    yield put(Actions.requestSuppliers());
  } else {

    yield put(Actions.receiveEditSupplier(response.data));
    const error = response.data;
    if (error.type === 'validationError') {

      const validationError = {};
      validationError[error.field] = error.message;

      yield put(stopSubmit('supplierModalForm', validationError));
    }
  }
}

export function* deleteSupplier(api, action) {
  const {supplierId} = action;

  const response = yield call(api.deleteSupplier, supplierId);
  yield put(Actions.receiveDeleteProduct());
  if (response.ok) {
    yield put(Actions.requestSuppliers());
  }
}


