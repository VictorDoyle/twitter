import React from "react";
import { Modal } from "react-bootstrap";

const ModalComponent = ({ handleClose, show, header, body, footer }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose} className="LandingModal" centered>
        <Modal.Header>{header}</Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>{footer}</Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalComponent;
