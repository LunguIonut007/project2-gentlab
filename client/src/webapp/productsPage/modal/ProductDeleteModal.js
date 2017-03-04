import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ConfirmModal from './../../../components/modals/ConfirmModal';
import Actions from './../../../actions/creators';

// Modal which appears when a user tries to delete a product

class ProductDeleteModal extends Component {

  deleteProduct = () => {
    const { id, deleteProduct } = this.props;
    deleteProduct(id);
  };

  render() {
    return (
      <ConfirmModal confirmButtonName="Delete" header="Delete product" confirmFunc={this.deleteProduct}/>
    );
  }
}

ProductDeleteModal.propTypes = {
  id: PropTypes.number,
  deleteProduct: PropTypes.func
};

const mapStateToProps = state => ({
  isOpen: state.modal.isOpen,
  id: state.modal.idOfObject
});

const mapDispatchToProps = dispatch => ({
  close: () => dispatch(Actions.closeModal()),
  deleteProduct: deleteProductId => dispatch(Actions.requestDeleteProduct(deleteProductId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDeleteModal);
