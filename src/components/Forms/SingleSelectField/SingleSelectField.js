import React from "react";
import PropTypes from "prop-types";
import Select, { components } from "react-select";

import { stylesConfig as customStyles } from "./config";
import styles from "./SingleSelectField.module.scss";

const CustomReactSelect = ({ options, ...props }) => {
  const CustomSelectValue = (props) => (
    <div className={styles.selectValue}>
      <img src={props.data?.icon} className={styles.icon} />
      {props.data?.label}
    </div>
  );

  const CustomSelectOption = (props) => {
    return (
      <components.Option {...props}>
        <CustomSelectValue {...props} />
      </components.Option>
    );
  };

  const CustomMenuList = (props) => (
    <components.MenuList {...props} className={styles.menuListContainer}>
      {props.children}
      <div className={styles.footerMenuList}>
        {props.selectProps.footerContentMenuList}
      </div>
    </components.MenuList>
  );

  return (
    <Select
      {...props}
      inputId={props.name}
      options={options}
      components={{
        Option: CustomSelectOption,
        SingleValue: CustomSelectValue,
        MenuList: CustomMenuList
      }}
      placeholder={<CustomSelectValue data={props.placeholder} />}
      styles={customStyles}
    />
  );
};

export default CustomReactSelect;

CustomReactSelect.prototype = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.string
    })
  ),
  placeholder: PropTypes.shape({
    label: PropTypes.string,
    icon: PropTypes.string
  }),
  footerContentMenuList: PropTypes.element
};
