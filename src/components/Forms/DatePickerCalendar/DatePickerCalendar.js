import React from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePickerCalendar.scss";

export const DatePickerCalendar = (props) => {
  const { field, form, displayIcon } = props;
  const { name, value, onBlur } = field;
  const handleChange = (date) => {
    form.setFieldValue(name, date);
  };

  return (
    <div className="date-picker-calendar">
      <DatePicker
        name={name}
        selected={value ? new Date(value) : null}
        placeholderText="mm/dd/yy"
        onBlur={onBlur}
        onChange={handleChange}
      />
      {displayIcon && <i className="icon-calendar" />}
    </div>
  );
};

DatePickerCalendar.proptypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired
};
