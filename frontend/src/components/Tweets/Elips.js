import React from "react";
import { NavDropdown } from "react-bootstrap";

const Elips = ({ handleClick }) => {
  return (
    <NavDropdown title="..." id="nav-dropdown">
      <NavDropdown.Item eventKey="4.1" onClick={handleClick}>
        Delete
      </NavDropdown.Item>
      <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
      <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
    </NavDropdown>
  );
};

export default Elips;
