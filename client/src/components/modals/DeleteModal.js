import React, { Component, PropTypes } from 'react';
import { Button, Confirm } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Actions from './../../actions/creators';

class DeleteModal extends Component {

  handleConfirm = () => {
    this.props.deleteFunc();
    this.props.close();
  };

  handleCancel = () => {
    this.props.close();
  };

  render() {
    const {header, isOpen} = this.props;
    return (
      <div>
        <Button onClick={this.show}>Show</Button>
        <Confirm
          header={header}
          confirmButton="Delete"
          open={isOpen}
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
        />
      </div>
    );
  }
}

DeleteModal.propTypes = {
  header: PropTypes.string,
  isOpen: PropTypes.bool,
  close: PropTypes.func,
  deleteFunc: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isOpen: state.modal.isOpen,
  id: state.modal.id
});

const mapDispatchToProps = dispatch => ({
  close: () => dispatch(Actions.closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteModal);
