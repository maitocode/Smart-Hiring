import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { components } from "react-select";
import Select from "react-select";

import { stylesConfig as customStyles } from "./config";
import CheckboxItem from "../CheckboxItem/CheckboxItem";
import styles from "./MultiSelectField.module.scss";

const MultiSelectField = (props) => {
  const {
    name,
    value,
    limitResults = 5,
    limitSelected = 3,
    onChange,
    onInputChange
  } = props;
  const [lengthOfResults, setLengthOfResults] = useState(limitResults);
  const [inputValue, setInputValue] = useState("");

  const handleRemoveSelected = (checkboxValue) => {
    if (!onChange) return;
    const removedValue = value.find((val) => val.value === checkboxValue);
    if (!removedValue) return;
    const newValue = value.filter((val) => val.value !== checkboxValue);
    onChange(newValue, { action: "remove-value", option: removedValue, name });
  };

  const handleInputChange = (newInputValue, actionMeta) => {
    onInputChange && onInputChange(newInputValue, actionMeta);
    actionMeta.action === "input-change" && setLengthOfResults(limitResults);
    actionMeta.action !== "set-value" && setInputValue(newInputValue);
  };

  const selectedRender = () => (
    <>
      {value?.map(({ label, value }) => (
        <CheckboxItem
          key={`checkbox-${value}`}
          name={name}
          label={label}
          value={value}
          isChecked={true}
          onChange={handleRemoveSelected}
        />
      ))}
    </>
  );

  const Option = (props) => {
    const { label, value } = props;
    return (
      <components.Option {...props}>
        <CheckboxItem
          key={`checkbox-${value}`}
          name={name}
          label={label}
          value={value}
          isChecked={false}
        />
      </components.Option>
    );
  };

  const Menu = (props) => (
    <Fragment>
      {value?.length > 0 && (
        <div className={styles.selectedContainer}>{selectedRender()}</div>
      )}
      <components.Menu {...props} />
    </Fragment>
  );

  const MenuList = ({ children, ...rest }) => {
    const tooLong = children?.length > lengthOfResults;
    return (
      <components.MenuList {...rest}>
        {tooLong ? children?.slice(0, lengthOfResults) : children}
        {tooLong && (
          <span
            className={styles.seeMoreBtn}
            onClick={() => setLengthOfResults(children?.length)}
          >
            See more
          </span>
        )}
      </components.MenuList>
    );
  };

  const DropdownIndicator = (props) => (
    <components.DropdownIndicator {...props}>
      <i className="fas fa-search"></i>
    </components.DropdownIndicator>
  );

  return (
    <div>
      <Select
        {...props}
        isMulti
        components={{
          Option,
          Menu,
          MenuList,
          DropdownIndicator
        }}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        controlShouldRenderValue={false}
        backspaceRemovesValue={false}
        menuIsOpen={true}
        isClearable={false}
        isOptionDisabled={() => value.length >= limitSelected}
        closeMenuOnSelect={false}
        tabSelectsValue={false}
        styles={customStyles}
      />
    </div>
  );
};

MultiSelectField.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.string
    })
  ),
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  limitSelected: PropTypes.number,
  limitResults: PropTypes.number
};

export default MultiSelectField;
