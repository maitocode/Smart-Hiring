import PropTypes from "prop-types";
import React from "react";
import { Button, Modal } from "react-bootstrap";
import "./AlertInfo.scss";

AlertInfo.propTypes = {
  show: PropTypes.bool,
  onHide: PropTypes.bool,
  textAlert: PropTypes.string
};

AlertInfo.defaultProps = {
  show: true,
  onHide: false,
  textAlert:
    "Before submitting your profile, you could add more capabilities,personas and work experiences.",
  handleClose: () => {}
};

function AlertInfo({ handleClose, textAlert }) {
  const onHide = () => {
    handleClose();
  };

  return (
    <div className="modalInfo">
      <Modal
        show={true}
        onHide={onHide}
        centered
        dialogClassName="modalInfo-box"
        size="lg"
      >
        <Modal.Body className="modalInfo-box-text">
          <p>{textAlert}</p>
        </Modal.Body>
        <Button className="modalInfo-box-button" onClick={onHide}>
          OK
        </Button>
      </Modal>
    </div>
  );
}
export default AlertInfo;
