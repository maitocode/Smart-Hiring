import React from "react";
import { Button } from "react-bootstrap";

import "./PrimaryButton.scss";

const PrimaryButton = (props) => {
  return (
    <div className="btn-custom">
      <Button variant="prim" {...props}>
        {props.children}
      </Button>
    </div>
  );
};

export default PrimaryButton;
