import React, { useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Button,
  Modal,
} from "react-bootstrap";
import "./LandingPage.css";

const LandingPage = () => {
  const [state, setState] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Container
        className="LandingPageContainer"
        styles={{ backgroundImage: `url("/images/LandingImage.png");` }}
      >
        <Row className="LandingPageRow">
          <Col className="LandingPageLeft" xs={12} md={6}>
            <Container>
              <h4>Follow your interests</h4>
              <h4>Follow your interests</h4>
              <h4>Follow your interests</h4>
            </Container>
          </Col>
          <Col className="LandingPageRight" xs={12} md={6}>
            <Container className="LandingPageLogin">
              <p>Twitter Logo</p>
              <h2>See what's Happening in the world right now</h2>
              <Button className="LandingButtonSign" block onClick={handleShow}>
                Sign up
              </Button>
              <LinkContainer to="/login">
                <Button
                  className="LandingButtonLog"
                  variant="outline-primary"
                  block
                >
                  Log in
                </Button>
              </LinkContainer>
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
      <Modal show={show} onHide={handleClose} className="LandingModal" centered>
        <Modal.Header>
          <Container>
            <Row>
              <Col xs={6} md={4}></Col>
              <Col xs={6} md={4}></Col>
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
        </Modal.Header>
        <Modal.Body>
          <Modal.Title>Hello World</Modal.Title>
        </Modal.Body>
        <Modal.Footer>
          Woohoo, you're reading this text in a modal!
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LandingPage;
