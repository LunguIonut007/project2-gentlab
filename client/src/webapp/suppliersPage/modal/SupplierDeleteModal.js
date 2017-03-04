import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ConfirmModal from './../../../components/modals/ConfirmModal';
import Actions from './../../../actions/creators';

// Modal which apears when a user tries to delete a supplier

class SupplierDeleteModal extends Component {

  deleteSupplier = () => {
    const {id, deleteSupplier} = this.props;
    deleteSupplier(id);
  };

  render() {
    return (
      <ConfirmModal header="Delete supplier" confirmButtonName="Delete" confirmFunc={this.deleteSupplier}/>
    );
  }
}

SupplierDeleteModal.propTypes = {
  deleteSupplier: PropTypes.func,
  id: PropTypes.number
};

const mapStateToProps = state => ({
  isOpen: state.modal.isOpen,
  id: state.modal.idOfObject
});

const mapDispatchToProps = dispatch => ({
  close: () => dispatch(Actions.closeModal()),
  deleteSupplier: deleteSupplierId => dispatch(Actions.requestDeleteSupplier(deleteSupplierId))
});

export default connect(mapStateToProps, mapDispatchToProps)(SupplierDeleteModal);
