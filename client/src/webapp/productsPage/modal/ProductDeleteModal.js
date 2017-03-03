import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import DeleteModal from './../../../components/modals/DeleteModal';
import Actions from './../../../actions/creators';

class ProductDeleteModal extends Component {

  deleteProduct = () => {
    this.props.deleteProduct(this.props.id);
  };

  render() {
    return (
      <DeleteModal header="Delete product" deleteFunc={this.deleteProduct}/>
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
