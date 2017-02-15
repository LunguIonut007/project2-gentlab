import Types from './types';

const requestSuppliers = () => ({ type: Types.SUPPLIERS_REQUEST });
const receiveSuppliers = suppliers => ({ type: Types.SUPPLIERS_RECEIVE, suppliers });

const requestLast5Suppliers = () => ({ type: Types.SUPPLIERS_LAST5_REQUEST });
const receiveLast5Suppliers = last5Suppliers => ({ type: Types.SUPPLIERS_LAST5_RECEIVE, last5Suppliers });

const requestAddSuppliers = newSupplier => ({ type: Types.SUPPLIERS_ADD_REQUEST, newSupplier });
const receiveAddSuppliers = addedSupplier => ({ type: Types.SUPPLIERS_ADD_RECEIVE, addedSupplier });

const requestUpdateSuppliers = (updateSupplier, supplierId) => ({ type: Types.SUPPLIERS_ADD_REQUEST, updateSupplier, supplierId });
const receiveUpdateSuppliers = updatedSupplier => ({ type: Types.SUPPLIERS_ADD_RECEIVE, updatedSupplier });


/**
 Makes available all the action creators we've created.
 */
export default {
  requestSuppliers,
  receiveSuppliers,
  requestLast5Suppliers,
  receiveLast5Suppliers,
  requestAddSuppliers,
  receiveAddSuppliers,
  requestUpdateSuppliers,
  receiveUpdateSuppliers,
};

