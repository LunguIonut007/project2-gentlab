import React, { Component, PropTypes } from 'react';
import { Button, Confirm } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Actions from './../../actions/creators';

// ConfirmModal is an abstract component that confirms than a passed action takes place
// confirmFunc = function to be invoked on confirmation

class ConfirmModal extends Component {

  handleConfirm = () => {
    this.props.confirmFunc();
    this.props.closeModal();
  };

  handleCancel = () => {
    this.props.closeModal();
  };

  render() {
    const {header, isOpen, confirmButtonName} = this.props;
    return (
      <div>
        <Button onClick={this.show}>Show</Button>
        <Confirm
          header={header}
          confirmButton={confirmButtonName}
          open={isOpen}
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
        />
      </div>
    );
  }
}

ConfirmModal.propTypes = {
  header: PropTypes.string,
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func,
  confirmButtonName: PropTypes.string,
  confirmFunc: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isOpen: state.modal.isOpen
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(Actions.closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmModal);
