import React, {PropTypes} from 'react';
import {Button} from 'semantic-ui-react';


export default class EditButton extends React.Component {
  onEditClick = () => {
    this.props.onClick(this.props.id);
  }

  render() {
    return (
      <div>
        <Button size="mini" compact fluid color="yellow" onClick={this.onEditClick}>Edit</Button>
      </div>
    );
  }
}

EditButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};

