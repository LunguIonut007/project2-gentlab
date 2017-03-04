import React, {PropTypes} from 'react';
import {Button} from 'semantic-ui-react';

// A button component which takes an id and a function and on click calls the function with the id as parameter

export default class DeleteButton extends React.Component {
  onDeleteClick = () => {
    this.props.onClick(this.props.id);
  }

  render() {
    return (
      <div>
        <Button size="mini" compact fluid color="red" onClick={this.onDeleteClick}>Delete</Button>
      </div>
    );
  }
}

DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};

