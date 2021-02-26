import { Navbar } from "react-bootstrap";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./StickyNav.css";

function StickyNav() {
  return (
    <Navbar
      sticky="top"
      expand="lg"
      variant="light"
      bg="light"
      className="StickyNav"
    >
      <Navbar.Brand href="#">Home</Navbar.Brand>
      <FontAwesomeIcon
        className="image-icon StickyNavIcon"
        icon={faStar}
        size="1x"
      />
    </Navbar>
  );
}

export default StickyNav;
