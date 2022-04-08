import React from "react";
import PropTypes from "prop-types";

import SingleSelectField from "components/Forms/SingleSelectField/SingleSelectField";
import CreatorIcon from "assets/images/creator-icon.svg";
import styles from "./SelectPersonaFormik.module.scss";
import { ErrorMessage, useField } from "formik";

const SelectPersonaFormik = ({ label, name, className, ...props }) => {
  const [field, meta, helpers] = useField(name);

  const handleOnClickCreatePersona = () => {
    console.log("Create a new Persona");
  };

  const renderFooterContentMenuList = () => (
    <button type="button" onClick={handleOnClickCreatePersona}>
      + Create a new Persona
    </button>
  );

  const changeHandler = ({ value }) => {
    helpers.setValue(value);
  };

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
      <div
        className={
          isInvalid ? `${styles.select} ${styles.invalid}` : styles.select
        }
      >
        <SingleSelectField
          inputId={field.name}
          name={field.name}
          value={props.options.find((option) => option.value === field.value)}
          onChange={changeHandler}
          onBlur={(e) => field.onBlur(e)}
          placeholder={{ label: "Choose a persona", icon: CreatorIcon }}
          footerContentMenuList={renderFooterContentMenuList()}
          {...props}
        />
      </div>
      <ErrorMessage
        name={field.name}
        className={styles.error}
        component="div"
      ></ErrorMessage>
    </div>
  );
};

SelectPersonaFormik.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.string
    })
  )
};

export default SelectPersonaFormik;
