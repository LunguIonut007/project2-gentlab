import Types from './types';

const requestSuppliers = () => ({ type: Types.SUPPLIERS_REQUEST });
const receiveSuppliers = suppliers => ({ type: Types.SUPPLIERS_RECEIVE, suppliers });

const requestProducts = () => ({ type: Types.PRODUCTS_REQUEST });
const recieveProducts = products => ({ type: Types.PRODUCTS_RECIEVE, products });


const requestLast5Suppliers = () => ({ type: Types.SUPPLIERS_LAST5_REQUEST });
const receiveLast5Suppliers = last5Suppliers => ({ type: Types.SUPPLIERS_LAST5_RECEIVE, last5Suppliers });

const requestLast5Products = () => ({type: Types.PRODUCTS_LAST5_REQUEST });
const receiveLast5Products = last5Products => ({type: Types.PRODUCTS_LAST5_RECEIVE, last5Products });


const requestAddSupplier = newSupplier => ({ type: Types.SUPPLIER_ADD_REQUEST, newSupplier });
const receiveAddSupplier = addedSupplier => ({ type: Types.SUPPLIER_ADD_RECEIVE, addedSupplier });

const requestAddProduct = newProduct => ({type: Types.PRODUCT_ADD_REQUEST, newProduct});
const receiveAddProduct = addedProduct => ({type: Types.PRODUCT_ADD_RECEIVE, addedProduct});


const requestDeleteSupplier = supplierId => ({type: Types.SUPPLIER_DELETE_REQUEST, supplierId});
const receiveDeleteSupplier = () => ({type: Types.SUPPLIER_DELETE_RECEIVE});

const requestDeleteProduct = productId => ({type: Types.PRODUCT_DELETE_REQUEST, productId});
const receiveDeleteProduct = () => ({type: Types.PRODUCT_DELETE_RECEIVE});


const requestEditSupplier = (supplierId, supplier) => ({type: Types.SUPPLIER_EDIT_REQUEST, payload: {supplierId, supplier}});
const receiveEditSupplier = supplier => ({type: Types.SUPPLIER_EDIT_RECEIVE, supplier});

const requestEditProduct = (productId, product) => ({type: Types.PRODUCT_EDIT_REQUEST, payload: {productId, product}});
const receiveEditProduct = product => ({type: Types.PRODUCT_EDIT_RECEIVE, product});

// A modal, in the state the app is now, needs three objects: the modalType which tells the ModalController which modal
// to render, the (database) id of the object that we are performing edit/delete and the object we send to the server to
// be editted/added

const openModal = (modalType, idOfObject, object) => ({type: Types.MODAL_OPEN, payload: {modalType, idOfObject, object}});
const closeModal = () => ({type: Types.MODAL_CLOSE});

/**
 Makes available all the action creators we've created.
 */
export default {
  requestSuppliers,
  receiveSuppliers,
  requestProducts,
  recieveProducts,
  requestLast5Suppliers,
  receiveLast5Suppliers,
  requestLast5Products,
  receiveLast5Products,
  requestAddSupplier,
  receiveAddSupplier,
  requestAddProduct,
  receiveAddProduct,
  openModal,
  closeModal,
  requestDeleteSupplier,
  receiveDeleteSupplier,
  requestDeleteProduct,
  receiveDeleteProduct,
  requestEditSupplier,
  receiveEditSupplier,
  requestEditProduct,
  receiveEditProduct
};

