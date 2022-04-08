import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

function InputField(props) {
  const { field, type, label, placeholder, disabled } = props;
  // const { errors, touched } = form;
  return (
    <Form.Group>
      {label && <Form.Label htmlFor={field.name}>{label}</Form.Label>}
      <Form.Control
        size="sm"
        id={field.name}
        {...field}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
      />
      {/* {errors[field.name] && touched[field.name] ? (
        <div className="errors">{errors[field.name]}</div>
      ) : null} */}
    </Form.Group>
  );
}

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  labal: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool
};

InputField.defaultProps = {
  type: "text",
  labal: "",
  placeholder: "",
  disabled: false
};
export default InputField;
