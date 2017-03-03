import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import TableWithSearch from './../../components/tables/TableWithSearch';
import Actions from './../../actions/creators';
import {TableSupplier} from './../../classes/Supplier';

import './../../styles/main.css';

class Suppliers extends React.Component {

  componentDidMount() {
    this.props.requestSuppliers();
  }

  onAddClick = () => {
    this.props.openModal('MODAL_ADD_SUPPLIER');
  }

  onEditClick = (id) => {
    const supplier = this.props.suppliers.filter(supplierItem => supplierItem.id === id)[0];
    this.props.openModal('MODAL_EDIT_SUPPLIER', id, supplier);
  }

  onDeleteClick = (id) => {
    this.props.openModal('MODAL_DELETE_SUPPLIER', id);
  }

  render() {

    const { suppliers } = this.props;
    const modSuppliers = suppliers.map((supplier, index) => new TableSupplier(index + 1, supplier, this.onEditClick, this.onDeleteClick));
    return (
      <div className="container">
        <Button className="addButton" onClick={this.onAddClick} color="green"> Add supplier</Button>
        <TableWithSearch data={modSuppliers} title="Suppliers" columns={['Name', 'Address']} color="green"/>
      </div>
    );
  }
}

Suppliers.propTypes = {
  suppliers: PropTypes.arrayOf(PropTypes.object).isRequired,
  requestSuppliers: PropTypes.func.isRequired,
  openModal: PropTypes.func
};

const mapStateToProps = state => ({
  pathname: state.routing.locationBeforeTransitions.pathname,
  suppliers: state.suppliers.list
});

const mapDispatchToProps = dispatch => ({
  requestSuppliers: () => dispatch(Actions.requestSuppliers()),
  openModal: (modalType, id, supplier) => dispatch(Actions.openModal(modalType, id, supplier)),
  deleteSupplier: deleteSupplierId => dispatch(Actions.requestDeleteSupplier(deleteSupplierId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Suppliers);

