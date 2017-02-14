// a library to wrap and simplify api calls
import apisauce from 'apisauce';

// our "constructor"
const create = (baseURL = 'http://localhost:3000') => {
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

  // Get all suppliers
  // http://localhost:3000/supplier
  const getAllSuppliers = () => api.get('/supplier');

  // Get last 5 suppliers
  // http://localhost:3000/supplier?_sort=views&_order=DESC&_limit=5
  const getlast5Suppliers = () => api.get('/supplier?_sort=views&_order=DESC&_limit=5');

  // Add supplier
  // http://localhost:3000/supplier
  const addSupplier = newSupplier => api.post('/supplier', newSupplier);

  // Update supplier
  // http://localhost:3000/supplier
  const updateSupplier = (newSupplier, supplierId) => api.put(`/supplier/' ${supplierId}`, newSupplier);

  // Delete supplier
  // http://localhost:3000/supplier
  const deleteSupplier = supplierId => api.delete(`/supplier/' ${supplierId}`);

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
    getlast5Suppliers,
    addSupplier,
    updateSupplier,
    deleteSupplier,
  };
};

// let's return back our create method as the default.
export default {
  create
};
