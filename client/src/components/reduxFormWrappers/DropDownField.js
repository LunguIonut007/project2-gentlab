import React, {PropTypes} from 'react';
import {Dropdown, Label} from 'semantic-ui-react';
import './../../styles/main.css';

// Abstract component which can be passed to a Field type (redux-form component)
// Also shows validation errors

export default class DropDownField extends React.Component {

  render() {
    const { input, options, disabled, meta: {touched, error}} = this.props;
    return (
      <div>
        <Dropdown
          fluid selection
          placeholder="Select a supplier"
          options={options}
          disabled={disabled}
          value={input.value}
          onChange={(param, data) => this.props.input.onChange(data.value)}/>
        {/* error handling -- redux form package */}
        {touched && error && <Label basic color="red" pointing >{error}</Label>}
      </div>
    );
  }
}

DropDownField.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.object)
};
