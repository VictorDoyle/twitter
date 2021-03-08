import React from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Form,
  FormControl,
} from "react-bootstrap";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBar from "../../components/NavBar/NavBar";
import "./MessagesContainer.css";

const MessagesContainer = ({ user, body, messages }) => {
  return (
    <Container>
      <Row>
        <Col>
          <NavBar {...user} />
        </Col>
        <Col>
          <Navbar
            sticky="top"
            expand="lg"
            variant="light"
            bg="light"
            className="StickyNav"
          >
            <Navbar.Brand href="#">Messages</Navbar.Brand>
            <FontAwesomeIcon
              className="image-icon StickyNavIcon messagesIcon"
              icon={faEnvelope}
              size="1x"
            />
          </Navbar>
          {/* Search Bar */}
          {/* <div className="scroll"> */}
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="searchBarMessages"
            />
            {/* will need to have a search either with state and useEffect or with key binding */}
            {/* <Button variant="outline-info">Search</Button> */}
          </Form>
          {body}
          {/* </div> */}
        </Col>
        <Col md={6}>{messages}</Col>
      </Row>
    </Container>
  );
};

export default MessagesContainer;
