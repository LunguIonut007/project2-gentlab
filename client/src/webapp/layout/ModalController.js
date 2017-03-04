import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import SupplierModal from './../suppliersPage/modal/SupplierModal';
import ProductModal from './../productsPage/modal/ProductModal';
import SupplierDeleteModal from './../suppliersPage/modal/SupplierDeleteModal';
import ProductDeleteModal from './../productsPage/modal/ProductDeleteModal';

// The ModalController is a component which takes care of what modal should be displayed on the screen
// It listens to the state.modal.isOpen boolean and when it's true, render a modal based on the given
// state.modal.modalType

class ModalController extends React.Component {

  getComponent = () => {
    const { modalType, isOpen } = this.props;
    if (!isOpen) return '';

    switch (modalType) {
      case 'MODAL_ADD_SUPPLIER': return <SupplierModal type="add"/>;
      case 'MODAL_EDIT_SUPPLIER': return <SupplierModal type="edit"/>;
      case 'MODAL_ADD_PRODUCT': return <ProductModal type="add"/>;
      case 'MODAL_EDIT_PRODUCT': return <ProductModal type="edit"/>;
      case 'MODAL_DELETE_SUPPLIER': return <SupplierDeleteModal/>;
      case 'MODAL_DELETE_PRODUCT': return <ProductDeleteModal/>;
      default: return '';
    }
  }

  render() {
    const component = this.getComponent();
    return (
      <div>
        {component}
      </div>
    );
  }
}

ModalController.propTypes = {
  modalType: PropTypes.string,
  isOpen: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  modalType: state.modal.modalType,
  isOpen: state.modal.isOpen
});

export default connect(mapStateToProps, null)(ModalController);
