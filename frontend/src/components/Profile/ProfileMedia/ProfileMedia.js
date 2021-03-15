import React, { useState } from "react";
import { Image, Col, Container, Row } from "react-bootstrap";

import "./ProfileMedia.css";
import { faUserCircle, faRetweet } from "@fortawesome/free-solid-svg-icons";
import {
  faComment,
  faHeart,
  faShareSquare,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function ProfileMedia() {

  return (
    <Container className="mediaContainer">
      <Container className="imageContainer">
  <Row className="imageContainer">
    <Col xs={6} lg={4}>
      <Image src="https://picsum.photos/300/300" rounded />
    </Col>
    <Col xs={6} md={4}>
      <Image src="https://picsum.photos/300/300" rounded />
    </Col>
    <Col xs={6} md={4}>
      <Image src="https://picsum.photos/300/300" rounded />
    </Col>
    
  </Row>

  <Row className="imageContainer">
    <Col xs={6} lg={4}>
      <Image src="https://picsum.photos/300/300" rounded />
    </Col>
    <Col xs={6} md={4}>
      <Image src="https://picsum.photos/300/300" rounded />
    </Col>
    <Col xs={6} md={4}>
      <Image src="https://picsum.photos/300/300" rounded />
    </Col>
    
  </Row>
</Container>
    </Container>
  );
}

export default ProfileMedia;
