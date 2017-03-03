import React, {PropTypes} from 'react';
import {Button} from 'semantic-ui-react';


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

