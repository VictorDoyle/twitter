import React, { useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import "./LandingPage.css";

const LandingPage = () => {
  const [state, setState] = useState("");
  return (
    <>
      <Container
        className="LandingPageContainer"
        styles={{ backgroundImage: `url("/images/LandingImage.png");` }}
      >
        <Row className="LandingPageRow">
          <Col className="LandingPageLeft">
            <Container>
              <h2>Follow your interests</h2>
              <h2>Follow your interests</h2>
              <h2>Follow your interests</h2>
            </Container>
          </Col>
          <Col className="LandingPageRight">
            <Container>
              <h2>See what's Happening in the world right now</h2>
            </Container>
          </Col>
        </Row>
        <Navbar fixed="bottom" className="LandingPageNav">
          <Nav>
            <Nav.Link href="#features" className="LandingPageLink">
              Features
            </Nav.Link>
            <Nav.Link href="#features" className="LandingPageLink">
              Features
            </Nav.Link>
            <Nav.Link href="#features" className="LandingPageLink">
              Features
            </Nav.Link>
            <Nav.Link href="#features" className="LandingPageLink">
              Features
            </Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </>
  );
};

export default LandingPage;
