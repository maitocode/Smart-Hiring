import React, { useState } from "react";
import PropTypes from "prop-types";

import styles from "./Switch.module.scss";

const Switch = (props) => {
  const [state, setState] = useState(props.status || false);

  const switchHandler = () => {
    setState((prevState) => {
      props.onSwitch && props.onSwitch(!prevState);
      return !prevState;
    });
  };

  return (
    <label className={styles.switch}>
      <input type="checkbox" checked={state} onChange={switchHandler} />
      <span></span>
    </label>
  );
};

Switch.propTypes = {
  status: PropTypes.bool,
  onSwitch: PropTypes.func
};

export default Switch;
