import {call, put} from 'redux-saga/effects';
import Actions from './../actions/creators';


export function* getProducts(api) {
  const response = yield call(api.getAllProducts);

  if (response.ok) {
    yield put(Actions.recieveProducts(response.data));

  } else {
    console.log('Error');
  }
}


export function* getLast5Products(api) {
  const response = yield call(api.getLast5Products);

  if (response.ok) {
    yield put(Actions.receiveLast5Products(response.data));
  } else {
    console.log('Error');
  }
}

export function* addProduct(api, action) {
  const product = action.newProduct;

  const response = yield call(api.addProduct, product);

  if (response.ok) {
    yield put(Actions.receiveAddProduct());
    yield put(Actions.requestProducts());
  }
}

export function* editProduct(api, action) {
  const {product, productId} = action.payload;

  const response = yield call(api.editProduct, productId, product);

  if (response.ok) {

    yield put(Actions.receiveEditProduct());
    yield put(Actions.requestProducts());
  }
}

export function* deleteProduct(api, action) {
  const {productId} = action;

  const response = yield call(api.deleteProduct, productId);

  if (response.ok) {
    yield put(Actions.receiveDeleteProduct());
    yield put(Actions.requestProducts());
  }
}
