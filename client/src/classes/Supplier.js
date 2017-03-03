  import React from 'react';
  import EditButton from './../components/buttons/EditButton';
  import DeleteButton from './../components/buttons/DeleteButton';

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
