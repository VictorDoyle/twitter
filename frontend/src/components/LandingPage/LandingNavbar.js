import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const LandingNavbar = () => {
  return (
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
  );
};

export default LandingNavbar;
