import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import DeleteModal from './../../../components/modals/DeleteModal';
import Actions from './../../../actions/creators';

class SupplierDeleteModal extends Component {

  deleteSupplier = () => {
    this.props.deleteSupplier(this.props.id);
  };

  render() {
    return (
      <DeleteModal header="Delete supplier" deleteFunc={this.deleteSupplier}/>
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
