import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const LandingModalHeader = ({ handleClose }) => {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}></Col>
        <Col xs={6} md={4}>
          Logo
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
