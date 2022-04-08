import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage, useField } from "formik";
import NumberFormat from "react-number-format";

import styles from "./InputNumberFormik.module.scss";

const InputNumberFormik = ({ label, name, className, percent, ...props }) => {
  const [field, meta, helpers] = useField(name);

  const changeHandler = (val) => {
    if (percent) {
      helpers.setValue(val.floatValue / 100);
    } else {
      helpers.setValue(val.floatValue);
    }
  };

  const valueConverter = (val) => (percent ? parseInt(val * 100) : val);

  let isInvalid = meta.touched && meta.error;
  return (
    <div
      className={
        className ? `${styles.formControl} ${className}` : styles.formControl
      }
    >
      <label htmlFor={field.name} className={styles.label}>
        {label}
      </label>
      <br />
      <NumberFormat
        id={field.name}
        className={
          isInvalid ? `${styles.input} ${styles.invalid}` : styles.input
        }
        name={field.name}
        suffix={percent && "%"}
        decimalSeparator={false}
        displayType="input"
        type="text"
        allowLeadingZeros={true}
        value={valueConverter(field.value)}
        onValueChange={changeHandler}
        onBlur={(e) => field.onBlur(e)}
        {...props}
      />
      <ErrorMessage
        name={field.name}
        component="div"
        className={styles.error}
      ></ErrorMessage>
    </div>
  );
};

InputNumberFormik.prototype = {
  label: PropTypes.string,
  type: PropTypes.oneOf(["text", "number", "password", "url", "percent", "tel"])
};

export default InputNumberFormik;
