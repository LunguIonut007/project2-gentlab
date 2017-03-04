 import React from 'react';
 import EditButton from './../components/buttons/EditButton';
 import DeleteButton from './../components/buttons/DeleteButton';

// Transforms the server model of the product object to the app model

// index = the id to be shown in the table;
// product = the product received from the server;
// onEditClick = the function that should be called when the edit button of the table is clicked;
// onDeleteClick = the function that should be called when the delete button of the table is clicked;

 function TableProduct(index, product, onEditClick, onDeleteClick) {
   this.Id = index;
   this.Name = product.name;
   this.Description = product.description;
   this.Quantity = product.quantity;
   this.Supplier = product.supplierLightDto ? product.supplierLightDto.name : '';
   this.Edit = <EditButton id={product.id} onClick={onEditClick}/>;
   this.Delete = <DeleteButton id={product.id} onClick={onDeleteClick}/>;
 }

 function TableDashboardProduct(index, product) {
   this.Id = index;
   this.Name = product.name;
   this.Description = product.description;
   this.Quantity = product.quantity;
   this.Supplier = product.supplierLightDto ? product.supplierLightDto.name : '';
 }


 export {TableProduct, TableDashboardProduct};
