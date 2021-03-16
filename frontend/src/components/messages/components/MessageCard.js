import React from "react";
import image from "../../../assets/images/WebsiteSized.JPG";
import { Card, Row, Col } from "react-bootstrap";

const MessageCard = () => {
  return (
    <Card>
      <Row>
        <Col md={2} className="imageCard">
          <Card.Img variant="left" src={image} className="cardImage" />
        </Col>
        <Col md={10}>
          {/* titles too big and padding */}
          <Card.Title className="cardTitle">Sean Madzelonka</Card.Title>
          {/* need to cap so only the first few characters show on screen */}
          <Card.Text>Some quick example text to build on the card.</Card.Text>
        </Col>
      </Row>
    </Card>
  );
};

export default MessageCard;
