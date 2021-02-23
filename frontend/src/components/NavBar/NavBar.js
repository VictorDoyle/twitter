import React, { useState } from "react";
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
  return (
    //     <Nav defaultActiveKey="/home" className="flex-column">
    //     <Nav.Link id='twitter' eventKey="link-1"><FontAwesomeIcon icon={faTwitter} size="4x" /></Nav.Link>
    //     <Nav.Link class='link' eventKey="link-2"><FontAwesomeIcon icon={faHome} size="2x" /><span class="description">Home</span></Nav.Link>
    //     <Nav.Link class='link' eventKey="link-2"><FontAwesomeIcon icon={faHashtag} size="2x" /><span class="description">Explore</span></Nav.Link>
    //     <Nav.Link class='link' eventKey="link-3"><FontAwesomeIcon icon={faSearch} size="2x"  /><span class="description">Search</span></Nav.Link>
    //     <Nav.Link class='link' eventKey="link-4"><FontAwesomeIcon icon={faBell} size="2x"  /><span class="description">Notifications</span></Nav.Link>
    //     <Nav.Link class='link' eventKey="link-5"><FontAwesomeIcon icon={faEnvelope} size="2x"  /><span class="description">Messages</span></Nav.Link>
    //     <Nav.Link class='link' eventKey="link-6"><FontAwesomeIcon icon={faBookmark} size="2x"  /><span class="description">Bookmark</span></Nav.Link>
    //     <Nav.Link class='link' eventKey="link-7"><FontAwesomeIcon icon={faListUl} size="2x"  /><span class="description">Lists</span></Nav.Link>
    //     <Nav.Link class='link' eventKey="link-8"><FontAwesomeIcon icon={faAt} size="2x"  /><span class="description">Connect</span></Nav.Link>
    //     <Nav.Link class='link' eventKey="link-9"><FontAwesomeIcon icon={faUser} size="2x"  /><span class="description">Profile</span></Nav.Link>
    //   </Nav>

    <Container>
      <Row>
        <Col>
          <Nav.Link id="twitter" eventKey="link-1">
            <FontAwesomeIcon icon={faTwitter} size="4x" />
          </Nav.Link>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col>
          <Nav.Link class="link" eventKey="link-2">
            <FontAwesomeIcon icon={faHome} size="2x" />
          </Nav.Link>
        </Col>
        <Col>
          <span class="description">Home</span>
        </Col>
      </Row>
      <Row>
        <Col>
          <Nav.Link class="link" eventKey="link-2">
            <FontAwesomeIcon icon={faHashtag} size="2x" />
          </Nav.Link>
        </Col>
        <Col>
          <span class="description">Explore</span>
        </Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default NavBar;

/* function NavBar () {
    

    return(
        <div className="nav" id="nav">
        <Container>
        <Row>
        <Nav defaultActiveKey="/home" className="flex-column">
        <Col>
        
        
        
        <Nav.Link id='twitter' eventKey="link-1"><FontAwesomeIcon icon={faTwitter} size="4x" /></Nav.Link>
        <Nav.Link class='link' eventKey="link-2"><FontAwesomeIcon icon={faHome} size="2x" /></Nav.Link>
        <Nav.Link class='link' eventKey="link-2"><FontAwesomeIcon icon={faHashtag} size="2x" /></Nav.Link>
        <Nav.Link class='link' eventKey="link-3"><FontAwesomeIcon icon={faSearch} size="2x"  /></Nav.Link>
        <Nav.Link class='link' eventKey="link-4"><FontAwesomeIcon icon={faBell} size="2x"  /></Nav.Link>
        <Nav.Link class='link' eventKey="link-5"><FontAwesomeIcon icon={faEnvelope} size="2x"  /></Nav.Link>
        <Nav.Link class='link' eventKey="link-6"><FontAwesomeIcon icon={faBookmark} size="2x"  /></Nav.Link>
        <Nav.Link class='link' eventKey="link-7"><FontAwesomeIcon icon={faListUl} size="2x"  /></Nav.Link>
        <Nav.Link class='link' eventKey="link-8"><FontAwesomeIcon icon={faAt} size="2x"  /></Nav.Link>
        <Nav.Link class='link' eventKey="link-9"><FontAwesomeIcon icon={faUser} size="2x"  /></Nav.Link>
    
        </Col>
        
        
        <Col>
        <span class="description">Home</span>
        <span class="description">Explore</span>
        <span class="description">Search</span>
        <span class="description">Notifications</span>
        <span class="description">Messages</span>
        <span class="description">Bookmark</span>
        <span class="description">Lists</span>
        <span class="description">Connect</span>
        <span class="description">Profile</span>
        </Col>
        </Nav>
        
        
        
        
        </Row>
        </Container>
        </div>
        

    ) 
} */
