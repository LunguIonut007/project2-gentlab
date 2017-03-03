import React, {PropTypes} from 'react';
import {Dropdown, Label} from 'semantic-ui-react';
import './../../styles/main.css';

export default class DropDownField extends React.Component {

  render() {
    const { input, options, meta: {touched, error}} = this.props;
    return (
      <div>
        <Dropdown
          fluid selection
          placeholder="Select a supplier"
          options={options}
          value={input.value}
          onChange={(param, data) => this.props.input.onChange(data.value)}/>
        {touched && error && <Label basic color="red" pointing >{error}</Label>}
      </div>
    );
  }
}

DropDownField.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  options: PropTypes.arrayOf(PropTypes.object)
};
