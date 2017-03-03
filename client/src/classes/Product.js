 import React from 'react';
 import EditButton from './../components/buttons/EditButton';
 import DeleteButton from './../components/buttons/DeleteButton';

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
