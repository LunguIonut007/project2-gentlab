// a library to wrap and simplify api calls
import apisauce from 'apisauce';

// our "constructor"
const create = (baseURL = 'http://localhost:8080/api') => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
    },
    // 10 second timeout...
    timeout: 10240
  });

  const getAllSuppliers = () => api.get('/suppliers');

  const getAllProducts = () => api.get('/products');

  const getLast5Suppliers = () => api.get('/suppliers/getLastSuppliers?number=5');

  const getLast5Products = () => api.get('/products/getLastProducts?number=5');

  const addSupplier = newSupplier => api.post('/suppliers/add', newSupplier);

  const addProduct = newProduct => api.post('/products/add', newProduct);

  const editSupplier = (supplierId, newSupplier) => api.put(`/suppliers/${supplierId}`, newSupplier);

  const editProduct = (productId, newProduct) => api.put(`/products/${productId}`, newProduct);

  const deleteSupplier = supplierId => api.delete(`/suppliers/delete/${supplierId}`);

  const deleteProduct = productId => api.delete(`/products/delete/${productId}`);

  //
  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    // a list of the API functions from step 2
    getAllSuppliers,
    getLast5Suppliers,
    addSupplier,
    editSupplier,
    deleteSupplier,
    getAllProducts,
    getLast5Products,
    addProduct,
    editProduct,
    deleteProduct
  };
};

// let's return back our create method as the default.
export default {
  create
};
