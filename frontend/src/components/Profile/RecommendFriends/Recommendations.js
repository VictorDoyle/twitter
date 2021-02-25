import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Recommendations.css";

function Recommendations() {
  return (
    <Container className="FollowContainer">
      <Row className="header">
        <h5>You Might Like</h5>
      </Row>
      <Row>
        <span className="divider"></span>
      </Row>
      <Row>
        <Col xs={3}>
          <FontAwesomeIcon
            className="image-icon"
            icon={faUserCircle}
            size="3x"
          />
        </Col>
        <Col>
          <Card.Body>
            <Card.Title className="userName">Elon Musk</Card.Title>
            <Card.Subtitle className="mb-2 text-muted userName">
              @ElonMusk 
            </Card.Subtitle>
          </Card.Body>
        </Col>
      </Row>
      <Row>
        <span className="divider"></span>
      </Row>
    </Container>
  );
}

export default Recommendations;
