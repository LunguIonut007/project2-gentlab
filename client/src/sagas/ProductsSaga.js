import {call, put} from 'redux-saga/effects';
import { startSubmit, stopSubmit } from 'redux-form';
import Actions from './../actions/creators';

// If the response if ok, put the data in the store
// If the response is not ok, put an empty object in the store so the loading stops

const productFormName = 'productModalForm';

export function* getProducts(api) {
  const response = yield call(api.getAllProducts);

  if (response.ok) {
    yield put(Actions.receiveProducts(response.data));

  } else {
    yield put(Actions.receiveProducts({}));
  }
}


export function* getLast5Products(api) {
  const response = yield call(api.getLast5Products);

  if (response.ok) {
    yield put(Actions.receiveLast5Products(response.data));
  } else {
    yield put(Actions.receiveLast5Products({}));
  }
}

export function* addProduct(api, action) {
  const product = action.newProduct;
  yield put(startSubmit(productFormName));
  const response = yield call(api.addProduct, product);

  if (response.ok) {
    yield put(Actions.receiveAddProduct());
    yield put(Actions.closeModal());
    yield put(Actions.requestProducts());
  } else {
    yield put(Actions.receiveAddProduct());
  }

  yield put(stopSubmit(productFormName));
}

export function* editProduct(api, action) {
  const {product, productId} = action.payload;

  yield put(startSubmit(productFormName));
  const response = yield call(api.editProduct, productId, product);

  if (response.ok) {

    yield put(Actions.receiveEditProduct());
    yield put(Actions.closeModal());
    yield put(Actions.requestProducts());
  } else {
    yield put(Actions.receiveEditProduct());
  }

  yield put(stopSubmit(productFormName));
}

export function* deleteProduct(api, action) {
  const {productId} = action;

  const response = yield call(api.deleteProduct, productId);
  yield put(Actions.receiveDeleteProduct());
  if (response.ok) {
    yield put(Actions.requestProducts());
  }
}
