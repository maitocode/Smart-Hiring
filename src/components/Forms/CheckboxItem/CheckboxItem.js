import React from "react";
import PropTypes from "prop-types";

import styles from "./CheckboxItem.module.scss";

const CheckboxItem = (props) => {
  const { name, label, value, isChecked, onChange } = props;

  return (
    <label
      htmlFor={value}
      className={`${styles.checkbox} ${isChecked ? styles.checked : ""}`}
    >
      <input
        type="checkbox"
        id={value}
        name={name}
        value={value}
        checked={isChecked}
        onChange={() => onChange && onChange(value)}
      />
      <i className={`fas fa-${isChecked ? "minus" : "plus"}`}></i>
      &nbsp;&nbsp; {label}
    </label>
  );
};

CheckboxItem.prototype = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func
};

export default CheckboxItem;
