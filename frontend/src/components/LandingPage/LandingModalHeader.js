import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const LandingModalHeader = ({ handleClose }) => {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}></Col>
        <Col xs={6} md={4} className="modal-header-logo">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </Col>
        <Col xs={6} md={4}>
          <Button
            variant="primary"
            className="modalButton"
            onClick={handleClose}
          >
            Next
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingModalHeader;
