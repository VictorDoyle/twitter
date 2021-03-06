/* base */
import React from "react";
import "./Happening.css";
import { Link } from "react-router-dom";
/* vendor modules */
import { Card, Container, Row } from "react-bootstrap";

function Happening() {
  return (
    <>
      <Container className="happeningContainer">
        <div className="happeningEvent">
          <Row className="header">
            <h5>Whats Happening</h5>
          </Row>
          <Row>
            <span className="divider"></span>
          </Row>
          <Row>
            <Card.Body>
              {/* if posted by user show below */}
              <p className="text-muted eventDetail">
                logo <b> US NEWS</b> {/* add DOT here */} 5 hours ago
              </p>
              {/* if posted by DB as Trending category  show below */}
              {/*  <p className="text-muted eventDetail">
            Trending in United States
          </p> */}
              <Card.Title className="eventTweetNum">#danztitz</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                92.4k Tweets
              </Card.Subtitle>
            </Card.Body>
          </Row>
          <Row>
            <span className="divider"></span>
            <Card.Body className="showHappening">
              <Link to={"/explore"}>
                <p>Show More</p>
              </Link>
            </Card.Body>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default Happening;
