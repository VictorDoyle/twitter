import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./WhatsHappening.css";
function WhatsHappening() {
  return (
    <Container className="WhatsHappeningContainer">
      <Row className="header">
        <h5>Whats Happening</h5>
      </Row>
      <Row>
        <span className="divider"></span>
      </Row>
      <Row>
        <Card.Body>
          <Card.Subtitle className=" mb-2 text-muted">
            Trending in United States
          </Card.Subtitle>
          <Card.Title className="topic">#danztitz</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            92.4k Tweets
          </Card.Subtitle>
        </Card.Body>
      </Row>
      <Row>
        <span className="divider"></span>
      </Row>
    </Container>
  );
}

export default WhatsHappening;
