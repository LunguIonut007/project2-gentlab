import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Form } from 'semantic-ui-react';
import {Field, reduxForm} from 'redux-form';
import Actions from './../../../actions/creators';
import InputFormField from './../../../components/reduxFormWrappers/InputFormField';
import DropDownField from './../../../components/reduxFormWrappers/DropDownField';


class ProductModalComponent extends React.Component {


  componentWillMount() {
    const {type, initialProductData, initialize, suppliers} = this.props;

    if (suppliers.length === 0) {
      this.props.requestSuppliers();
    }

    const header = type === 'add' ? 'Add product' : 'Edit product';
    const confirmButtonText = this.props.type === 'add' ? 'Save' : 'Edit';
    this.state = {header, confirmButtonText };

    if (initialProductData != null) {
      const productData = {name: initialProductData.name, description: initialProductData.description, supplier: initialProductData.supplierLightDto.name, quantity: initialProductData.quantity };
      initialize(productData);

    }
    //
  }

  onSubmit = (formData) => {
    const {type, requestAddProduct, requestEditProduct, closeModal, id} = this.props;
    const data = this.convertData(formData);
    if (type === 'add') {
      requestAddProduct(data);
      closeModal();
    } else {
      requestEditProduct(id, data);
      closeModal();
    }
  };

  getOptionsFromObject() {
    const { suppliers } = this.props;
    const options = suppliers.map(supplier => ({key: supplier.id, text: supplier.name, value: supplier.name }));
    return options;
  }

  convertData(formData) {
    const {name, description, quantity} = formData;
    const supplier = this.props.suppliers.filter(mapSupplier => (formData.supplier === mapSupplier.name))[0];

    return ({ name, description, quantity, supplierLightDto: {id: supplier.id} });
  }

  render() {

    const options = this.getOptionsFromObject();
    const { handleSubmit, closeModal, pristine } = this.props;
    return (
      <Modal open={this.props.isOpen} onClose={closeModal}>
        <Modal.Header>{this.state.header}</Modal.Header>
        <Modal.Content>
          <Form onSubmit={handleSubmit(this.onSubmit)}>
            <Field name="name" label="Name" component={InputFormField} type="text"/>
            <Field name="description" label="Description" component={InputFormField} type="text"/>
            <Field name="quantity" label="Quantity" component={InputFormField} type="number"/>
            <Field name="supplier" label="Supplier" component={DropDownField} options={options}/>

          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button type="submit" onClick={handleSubmit(this.onSubmit)} disabled={pristine}> {this.state.confirmButtonText} </Button>
          <Button onClick={this.props.closeModal} > Cancel </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

ProductModalComponent.propTypes = {
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func,
  handleSubmit: PropTypes.func,
  type: PropTypes.string,
  requestAddProduct: PropTypes.func,
  requestEditProduct: PropTypes.func,
  id: PropTypes.number,
  initialize: PropTypes.func,
  suppliers: PropTypes.arrayOf(PropTypes.object),
  initialProductData: PropTypes.object
};

const mapStateToProps = state => ({
  isOpen: state.modal.isOpen,
  id: state.modal.idOfObject,
  initialProductData: state.modal.object,
  suppliers: state.suppliers.list,
  isAnyTouched: state.form.productModalForm.anyTouched,
  errors: state.form.productModalForm.syncErrors
});

const mapDispatchToProps = dispatch => ({
  requestProducts: () => dispatch(Actions.requestProducts()),
  requestSuppliers: () => dispatch(Actions.requestSuppliers()),
  closeModal: () => dispatch(Actions.closeModal()),
  requestAddProduct: supplier => dispatch(Actions.requestAddProduct(supplier)),
  requestEditProduct: (editSupplierId, supplier) => dispatch(Actions.requestEditProduct(editSupplierId, supplier))
});


const ProductModalExport = connect(mapStateToProps, mapDispatchToProps)(ProductModalComponent);

function validate(values) {
  const {name, quantity, description, supplier} = values;
  const errors = {};

  if (name == null || name.trim() === '') errors.name = 'Please enter a name!';
  if (quantity < 0) errors.quantity = 'Please put only positive numbers!';
  if (quantity == null) errors.quantity = 'Quantity can\'t be empty!';
  if (supplier == null) errors.supplier = 'Please select a supplier!';

  return errors;
}

export default reduxForm({ form: 'productModalForm', validate})(ProductModalExport);
