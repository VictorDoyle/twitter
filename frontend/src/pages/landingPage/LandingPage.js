import React, { useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import Modal from "../../components/Modal";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Button,
  Form,
} from "react-bootstrap";
import "./LandingPage.css";

const LandingPage = () => {
  const [state, setState] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = (e) => {
    e.preventDefault();
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  const year = new Date().getFullYear();
  const years = Array.from(new Array(50), (val, index) => index - year);
  const days = Array.from(Array(31 + 1).keys());
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
      {/* modal */}
      <Modal
        show={show}
        handleClose={handleShow}
        header={
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
        }
        body={
          <>
            <h3>Create your account</h3>
            <Form>
              <Form.Control type="name" placeholder="Name" />
              <Form.Control type="phone" placeholder="Phone" />
              <p>Maybe Email?</p>
              <h6>Date of birth</h6>
              <Form.Row>
                <Col xs={6}>
                  <Form.Control as="select" type="month">
                    {months.map((x, i) => (
                      <option key={`x${i}`} value={x}>
                        {x}
                      </option>
                    ))}
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Control as="select" type="day">
                    {days.map((d, i) => (
                      <option key={`d${i}`} value={d}>
                        {d}
                      </option>
                    ))}
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Control as="select" type="year">
                    {years.map((y, i) => (
                      <option key={`y${i}`} value={y}>
                        {y}
                      </option>
                    ))}
                  </Form.Control>
                </Col>
              </Form.Row>
            </Form>
          </>
        }
        footer=""
      />
    </>
  );
};

export default LandingPage;
