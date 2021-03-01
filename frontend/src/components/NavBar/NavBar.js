import React from "react";
import { Nav, Col, Container, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faSearch,
  faListUl,
  faAt,
  faHashtag,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faEnvelope,
  faBell,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NavBar.css";

function NavBar() {
  return (
    <Container className="navbar-body">
      <Nav.Link id="twitter" eventKey="link-1">
        <Row>
          <Col xs={5}>
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </Col>
        </Row>
      </Nav.Link>
      <NavBarItem icon={faHome} route="/" name="Home" />
      <NavBarItem icon={faHashtag} route="/feed" name="Explore" />
      <NavBarItem icon={faSearch} route="/" name="Search" />
      <NavBarItem icon={faBell} route="/" name="Notifications" />
      <NavBarItem icon={faEnvelope} route="/" name="Messages" />
      <NavBarItem icon={faBookmark} route="/" name="Bookmark" />
      <NavBarItem icon={faListUl} route="/" name="Lists" />
      <NavBarItem icon={faAt} route="/" name="Connect" />
      <NavBarItem icon={faUser} route="/profile" name="Profile" />
    </Container>
  );
}

export default NavBar;
// Recycled component
export const NavBarItem = ({ icon, route, name }) => {
  return (
    <LinkContainer to={route}>
      <Nav.Link className="link" eventKey="link-2">
        <Row>
          <Col xs={5}>
            <FontAwesomeIcon icon={icon} size="2x" />
          </Col>
          <Col className="d-none d-lg-block">
            <span className="description">{name}</span>
          </Col>
        </Row>
      </Nav.Link>
    </LinkContainer>
  );
};
