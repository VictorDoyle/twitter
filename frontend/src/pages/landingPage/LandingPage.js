import React, { useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import Modal from "../../components/Modal";
import ModalHeader from "../../components/LandingPage/LandingModalHeader";
import ModalBody from "../../components/LandingPage/LandingModalBody";
import { Container, Row, Col, Navbar, Nav, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faSearch,
  faUserFriends,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

import "./LandingPage.css";

const LandingPage = () => {
  const [state, setState] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = (e) => {
    e.preventDefault();
    setShow(false);
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <Container
        className="LandingPageContainer"
        styles={{ backgroundImage: `url("/images/LandingImage.png");` }}
      >
        <Row className="LandingPageRow">
          <Col className="LandingPageLeft" xs={12} md={6}>
            <Container className="LandingLeftContainer">
              <h4>
                <FontAwesomeIcon icon={faSearch} />
                Follow your interests
              </h4>
              <h4>
                <FontAwesomeIcon icon={faUserFriends} />
                Hear what people are talking about.
              </h4>
              <h4>
                <FontAwesomeIcon icon={faComment} />
                Join the conversation.
              </h4>
            </Container>
          </Col>
          <Col className="LandingPageRight" xs={12} md={6}>
            <Container className="LandingPageLogin">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
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
            <Nav.Link href="/feed" className="LandingPageLink">
              Feed
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
      <Modal
        show={show}
        handleClose={handleShow}
        header={<ModalHeader handleClose={handleClose} />}
        body={<ModalBody />}
        footer=""
      />
    </>
  );
};

export default LandingPage;
