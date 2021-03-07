import React from "react";
/* user state import */
import { userState } from "../../recoil/atoms";
import { useRecoilState } from "recoil";
import { Nav, Col, Container, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {
  faHome,
  faListUl,
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
  const user = useRecoilState(userState);
  return (
    <>
      <Container className="navbar-body">
        <NavBarItem icon={faHome} route="/feed" name="Home" />
        <NavBarItem icon={faHashtag} route="/feed" name="Explore" />

        <NavBarItem icon={faBell} route="/" name="Notifications" />
        <NavBarItem icon={faEnvelope} route="/" name="Messages" />
        <NavBarItem icon={faBookmark} route="/" name="Bookmark" />
        <NavBarItem icon={faListUl} route="/" name="Lists" />

        <NavBarItem
          icon={faUser}
          route={`/tweets/profile/${user[0] && user[0].id}`}
          name="Profile"
        />
      </Container>
    </>
  );
}

export default NavBar;
// Recycled component
export const NavBarItem = ({ icon, route, name }) => {
  return (
    <>
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
    </>
  );
};
