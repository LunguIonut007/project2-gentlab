import React, {PropTypes} from 'react';
import { Form, Input, Label } from 'semantic-ui-react';
import './../../styles/main.css';

export default class InputFormField extends React.Component {
  render() {
    const { input, meta: {touched, error}, type, label} = this.props;
    return (
      <Form.Field>
        <Input {...input} label={label} type={type} size="tiny" placeholder={label}/>
        {touched && error && <Label basic color="red" pointing >{error}</Label>}
      </Form.Field>
    );
  }
}

InputFormField.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string
};
