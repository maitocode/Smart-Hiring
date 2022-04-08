import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

function TimeZoneField(props) {
  const { field, name, type, label, placeholder, disabled } = props;

  return (
    <Form.Group>
      {label && <Form.Label htmlFor={name}>{label}</Form.Label>}
      <Form.Control
        size="sm"
        id={name}
        {...field}
        value={field.value}
        // value={props.value}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
      />
    </Form.Group>
  );
}

TimeZoneField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  labal: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool
};

TimeZoneField.defaultProps = {
  type: "text",
  labal: "timeZone",
  placeholder: "",
  disabled: true,
  name: "timezone"
};
export default TimeZoneField;
