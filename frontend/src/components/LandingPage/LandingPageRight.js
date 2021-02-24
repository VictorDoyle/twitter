import React from "react";
import { Col, Button, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const LandingPageRight = ({ handleShow }) => {
  return (
    <Col className="LandingPageRight" xs={12} md={6}>
      <Container className="LandingPageLogin">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
        <h2>See what's Happening in the world right now</h2>
        <Button className="LandingButtonSign" block onClick={handleShow}>
          Sign up
        </Button>
        <LinkContainer to="/login">
          <Button className="LandingButtonLog" variant="outline-primary" block>
            Log in
          </Button>
        </LinkContainer>
      </Container>
    </Col>
  );
};

export default LandingPageRight;
