import { Navbar } from "react-bootstrap";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./StickyNavTweet.css";

function StickyNavTweet() {
  return (
    <Navbar
      sticky="top"
      expand="lg"
      variant="light"
      bg="light"
      className="StickyNav"
    >
      <Navbar.Brand href="/feed">
        <FontAwesomeIcon
          className="image-icon NavIcon"
          icon={faArrowLeft}
          size="1x"
        />
        Tweet
      </Navbar.Brand>
    </Navbar>
  );
}

export default StickyNavTweet;
