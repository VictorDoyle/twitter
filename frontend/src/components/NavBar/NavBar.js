import React, { useState } from "react";
/* user state import */
import { userState } from "../../recoil/atoms";
import { useRecoilState } from "recoil";
/*  */
import { Link } from 'react-router-dom'
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
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
  const user = useRecoilState(userState);
  return (
    <Container className="navbar-body">
      <Nav.Link id="twitter" eventKey="link-1">
        <Row>
          <Col xs={5}>
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </Col>
          <Col></Col>
        </Row>
      </Nav.Link>
      <Nav.Link className="link" eventKey="link-2">
        <Link to={'/feed'}>
        <Row>
          <Col xs={5}>
            <FontAwesomeIcon icon={faHome} size="2x" />
          </Col>
          <Col className="d-none d-lg-block">
            <span className="description">Home</span>
          </Col>
        </Row>
        </Link>
      </Nav.Link>
      <Nav.Link className="link" eventKey="link-2">
        <Row>
          <Col xs={5}>
            <FontAwesomeIcon icon={faHashtag} size="2x" />
          </Col>
          <Col className="d-none d-lg-block">
            <span className="description">Explore</span>
          </Col>
        </Row>
      </Nav.Link>
      <Nav.Link className="link" eventKey="link-3">
        <Row>
          <Col xs={5}>
            <FontAwesomeIcon icon={faSearch} size="2x" />
          </Col>
          <Col className="d-none d-lg-block">
            <span className="description">Search</span>
          </Col>
        </Row>
      </Nav.Link>
      <Nav.Link className="link" eventKey="link-4">
        <Row>
          <Col xs={5}>
            <FontAwesomeIcon icon={faBell} size="2x" />
          </Col>
          <Col className="d-none d-lg-block">
            <span className="description">Notifications</span>
          </Col>
        </Row>
      </Nav.Link>
      <Nav.Link className="link" eventKey="link-5">
        <Row>
          <Col xs={5}>
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </Col>
          <Col className="d-none d-lg-block">
            <span className="description">Messages</span>
          </Col>
        </Row>
      </Nav.Link>
      <Nav.Link className="link" eventKey="link-6">
        <Row>
          <Col xs={5}>
            <FontAwesomeIcon icon={faBookmark} size="2x" />
          </Col>
          <Col className="d-none d-lg-block">
            <span className="description">Bookmark</span>
          </Col>
        </Row>
      </Nav.Link>
      <Nav.Link className="link" eventKey="link-7">
        <Row>
          <Col xs={5}>
            <FontAwesomeIcon icon={faListUl} size="2x" />
          </Col>
          <Col className="d-none d-lg-block">
            <span className="description">Lists</span>
          </Col>
        </Row>
      </Nav.Link>
      <Nav.Link className="link" eventKey="link-8">
        <Row>
          <Col xs={5}>
            <FontAwesomeIcon icon={faAt} size="2x" />
          </Col>
          <Col className="d-none d-lg-block">
            <span className="description">Connect</span>
          </Col>
        </Row>
      </Nav.Link>

      <Nav.Link className="link" eventKey="link-9">
        <Link to ={`/tweets/profile/${user && user[0].id }`}>
        <Row>
          <Col xs={5}>
            <FontAwesomeIcon icon={faUser} size="2x" />
          </Col>
          <Col className="d-none d-lg-block">
            <span className="description">Profile</span>
          </Col>
        </Row>
      </Link>
      </Nav.Link>

    </Container>
  );
}

export default NavBar;
