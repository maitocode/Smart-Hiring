import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";
import Select from "react-select";

function SelectField(props) {
  const { field, form, label, placeholder, disabled, options } = props;
  const { errors, touched } = form;
  // const selectedOption = options.find((option) => option.value === field.value);

  const handleSelectedOptionChange = (selectedOption) => {
    form.setFieldValue(field.name, selectedOption);
    props.handleChange && props.handleChange(selectedOption);
  };

  return (
    <Form.Group>
      {label && <Form.Label htmlFor={field.name}>{label}</Form.Label>}
      <Select
        className="custom-select-wrapper"
        classNamePrefix="custom-select"
        id={field.name}
        {...field}
        // value={selectedOption}
        value={field.value}
        onChange={handleSelectedOptionChange}
        placeholder={placeholder}
        disabled={disabled}
        options={options}
      />
      {errors[field.name] && touched[field.name] ? (
        <div className="errors">{errors[field.name]}</div>
      ) : null}
    </Form.Group>
  );
}

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  labal: PropTypes.string,
  placeholder: PropTypes.any,
  disabled: PropTypes.bool,
  options: PropTypes.array
};

SelectField.defaultProps = {
  labal: "",
  placeholder: "",
  disabled: false,
  options: []
};
export default SelectField;
