import {call, put} from 'redux-saga/effects';
import Actions from './../actions/creators';


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

  const response = yield call(api.addProduct, product);

  if (response.ok) {
    yield put(Actions.receiveAddProduct());
    yield put(Actions.closeModal());
    yield put(Actions.requestProducts());
  } else {
    yield put(Actions.receiveAddProduct());
  }
}

export function* editProduct(api, action) {
  const {product, productId} = action.payload;

  const response = yield call(api.editProduct, productId, product);

  if (response.ok) {

    yield put(Actions.receiveEditProduct());
    yield put(Actions.closeModal());
    yield put(Actions.requestProducts());
  } else {
    yield put(Actions.receiveEditProduct());
  }
}

export function* deleteProduct(api, action) {
  const {productId} = action;

  const response = yield call(api.deleteProduct, productId);
  yield put(Actions.receiveDeleteProduct());
  if (response.ok) {
    yield put(Actions.requestProducts());
  }
}
