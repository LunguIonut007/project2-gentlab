import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {Modal, Button, Form } from 'semantic-ui-react';
import {Field, reduxForm} from 'redux-form';
import Actions from './../../../actions/creators';
import InputFormField from './../../../components/reduxFormWrappers/InputFormField';

class SupplierModalComponent extends React.Component {


  componentWillMount() {
    const {type, initialSupplierData, initialize} = this.props;
    const header = type === 'add' ? 'Add supplier' : 'Edit supplier';
    const confirmButtonText = this.props.type === 'add' ? 'Save' : 'Edit';
    this.state = {header, confirmButtonText };
    initialize(initialSupplierData);
  }

  onSubmit = (formData) => {
    const {type, requestAddSupplier, requestEditSupplier, closeModal, id} = this.props;
    if (type === 'add') {
      requestAddSupplier(formData);
      closeModal();
    } else {
      requestEditSupplier(id, formData);
      closeModal();
    }
  };

  render() {
    const { handleSubmit, closeModal, pristine } = this.props;
    return (
      <Modal open={this.props.isOpen} onClose={closeModal}>
        <Modal.Header>{this.state.header}</Modal.Header>
        <Modal.Content>
          <Form onSubmit={handleSubmit(this.onSubmit)}>
            <label htmlFor="name">First Name</label>
            <Field name="name" label="Name" component={InputFormField} type="text"/>
            <Field name="address" label="Address" component={InputFormField} type="text"/>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button type="submit" onClick={handleSubmit(this.onSubmit)} disabled={pristine}> {this.state.confirmButtonText} </Button>
          <Button onClick={this.props.closeModal}> Cancel </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

SupplierModalComponent.propTypes = {
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func,
  handleSubmit: PropTypes.func,
  type: PropTypes.string,
  requestAddSupplier: PropTypes.func,
  requestEditSupplier: PropTypes.func,
  id: PropTypes.number,
  initialize: PropTypes.func,
  initialSupplierData: PropTypes.object
};

const mapStateToProps = state => ({
  isOpen: state.modal.isOpen,
  id: state.modal.idOfObject,
  initialSupplierData: state.modal.object
});

const mapDispatchToProps = dispatch => ({
  requestSuppliers: () => dispatch(Actions.requestSuppliers()),
  closeModal: () => dispatch(Actions.closeModal()),
  requestAddSupplier: supplier => dispatch(Actions.requestAddSupplier(supplier)),
  requestEditSupplier: (editSupplierId, supplier) => dispatch(Actions.requestEditSupplier(editSupplierId, supplier))
});


const SupplierModalExport = connect(mapStateToProps, mapDispatchToProps)(SupplierModalComponent);

function validate(values) {
  const {name, address} = values;
  const errors = {};

  if (name == null || name.trim() === '') errors.name = 'Name can\'t be empty!';
  if (address == null || address.trim === '') errors.address = 'Address can\'t be empty!';

  return errors;
}

export default reduxForm({ form: 'supplierModalForm', validate})(SupplierModalExport);
