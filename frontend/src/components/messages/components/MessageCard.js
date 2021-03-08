import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const MessageCard = () => {
  return (
    <Card>
      <Row>
        <Col md={2}>
          <Card.Img variant="left" src="#" cap />
        </Col>
        <Col md={10}>
          {/* titles too big and padding */}
          <Card.Title>Card Title</Card.Title>
          {/* need to cap so only the first few characters show on screen */}
          <Card.Text>Some quick example text to build on the card.</Card.Text>
        </Col>
      </Row>
    </Card>
  );
};

export default MessageCard;
