  import React from 'react';
  import EditButton from './../components/buttons/EditButton';
  import DeleteButton from './../components/buttons/DeleteButton';

// Transforms the server model of the product object to the app model

// index = the id to be shown in the table;
// supplier = the supplier received from the server;
// onEditClick = the function that should be called when the edit button of the table is clicked;
// onDeleteClick = the function that should be called when the delete button of the table is clicked;

  function TableSupplier(index, supplier, onEditClick, onDeleteClick) {
    this.Id = index;
    this.Name = supplier.name;
    this.Address = supplier.address;
    this.Edit = <EditButton id={supplier.id} onClick={onEditClick}/>;
    this.Delete = <DeleteButton id={supplier.id} onClick={onDeleteClick}/>;
  }

  function TableDashboardSupplier(index, supplier) {
    this.Id = index;
    this.Name = supplier.name;
    this.Address = supplier.address;
  }

  export {TableSupplier, TableDashboardSupplier};
