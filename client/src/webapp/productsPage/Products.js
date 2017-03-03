import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import TableWithSearch from './../../components/tables/TableWithSearch';
import Actions from './../../actions/creators';
import {TableProduct} from './../../classes/Product';

import './../../styles/main.css';

class Products extends React.Component {
  componentDidMount() {
    this.props.requestProducts();
  }

  onAddClick = () => {
    this.props.openModal('MODAL_ADD_PRODUCT');
  }

  onEditClick = (id) => {
    const product = this.props.products.filter(productItem => productItem.id === id)[0];
    this.props.openModal('MODAL_EDIT_PRODUCT', id, product);
  }

  onDeleteClick = (id) => {
    this.props.openModal('MODAL_DELETE_PRODUCT', id);
  }

  render() {
    const {products} = this.props;
    const configuredProducts = products.map((product, index) => new TableProduct(index + 1, product, this.onEditClick, this.onDeleteClick));
    return (
      <div className="container">
        <Button className="addButton" onClick={this.onAddClick} color="green"> Add product</Button>
        <TableWithSearch
          data={configuredProducts} title="Products"
          columns={['Name', 'Description', 'Quantity', 'Supplier']} color="green"/>
      </div>
    );
  }
}

Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  requestProducts: PropTypes.func.isRequired,
  openModal: PropTypes.func
};

const mapStateToProps = state => ({
  pathname: state.routing.locationBeforeTransitions.pathname,
  products: state.products.list
});

const mapDispatchToProps = dispatch => ({
  requestProducts: () => dispatch(Actions.requestProducts()),
  openModal: (modalType, id, product) => dispatch(Actions.openModal(modalType, id, product)),
  deleteProduct: id => dispatch(Actions.requestDeleteProduct(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
