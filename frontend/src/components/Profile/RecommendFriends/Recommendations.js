/* base */
import React, { useState, useEffect } from "react";
import "./Recommendations.css";
import { Link } from "react-router-dom";
/* vendor modules */
import { Card, Col, Container, Row } from "react-bootstrap";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/* models */
import UserModel from "../../../models/user";
/* loader */
// import RecommendationLoader from "../Loaders/RecommendationLoader";

function Recommendations() {
  // eslint-disable-next-line
  const [recommendations, setRecommendations] = useState([]);

  useEffect(function () {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = () => {
    UserModel.all().then((data) => {
      setRecommendations(data.users);
    });
  };

  return (
    <Container className="recommendationContainer">
      <Row className="header">
        <h5>You Might Like</h5>
      </Row>
      <Row>
        <span className="divider"></span>
      </Row>

      <Row>
        <Col xs={2}>
          <FontAwesomeIcon
            className="image-icon"
            icon={faUserCircle}
            size="3x"
          />
        </Col>

        <Col>
          <Card.Body>
            <Card.Title className="userName">Username Here</Card.Title>
            <Card.Subtitle className="mb-2 text-muted userName">
              @TwitterHandle
            </Card.Subtitle>
          </Card.Body>

          {/* TODO: Populate from User DB query */}
          {/*  { recommendations ? recommendations.map((recommendation, index) => {
    return (
      <>

        <Row>
      <Col xs={1}>
          <FontAwesomeIcon
            className="image-icon"
            icon={faUserCircle}
            size="3x"
          />
        </Col>

      <Card.Body {...recommendation} key={user.id}>
            <Card.Title className="userName">{user.firstname}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted userName">
              {user.username}
            </Card.Subtitle>
          </Card.Body>
  
      </Row>

      </>
    );
  }) : <RecommendationLoader/> } */}
        </Col>
      </Row>

      <Row>
        <Col xs={2}>
          <FontAwesomeIcon
            className="image-icon"
            icon={faUserCircle}
            size="3x"
          />
        </Col>

        <Card.Body>
          <Card.Title className="userName">Username Here</Card.Title>
          <Card.Subtitle className="mb-2 text-muted userName">
            @TwitterHandle
          </Card.Subtitle>
        </Card.Body>
      </Row>
      <Row>
        <span className="divider"></span>
      </Row>

      <Card.Body className="showMoreUsers">
        <Link to={"/suggestions"}>
          <p>Show More</p>
        </Link>
      </Card.Body>
    </Container>
  );
}

export default Recommendations;
