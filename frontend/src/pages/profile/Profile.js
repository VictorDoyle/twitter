import NavBar from "../../components/NavBar/NavBar";
import Tweets from "../../components/Tweets/Tweets";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import WhatsHappening from "../../components/WhatsHappening/WhatsHappening";
import WhoToFollow from "../../components/WhoToFollow/WhoToFollow";

import "./Profile.css";
import React, { useState } from "react";

function Profile() {
  return (
    <div className="Feed" id="feed-page">
      <Container>
        <Row>
          <Col>
            <NavBar />
          </Col>
          <Col md={6}>
        

          <Card>
      <Container>
        <Row>
          <Col xs={2}>
            <FontAwesomeIcon
              className="image-icon"
              icon={faUserCircle}
              size="4x"
            />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title className="username">Elon Musk</Card.Title>
              <Card.Subtitle className="tweet-title mb-2 text-muted">
                {/* {props.tweet.author} */}
              </Card.Subtitle>
              <Card.Subtitle className="tweet-title mb-2 text-muted">
                7m
              </Card.Subtitle>
              <Card.Text className="text-left">
                {/* {props.tweet.description} */}
              </Card.Text>
            </Card.Body>
            <Row>
              <Col>
                <Card.Link className="text-muted" href="#">
                  <FontAwesomeIcon
                    className="image-icon"
                    icon={faComment}
                    size="1x"
                  />
                  {/* TODO Comment counter */}
                  <Card.Subtitle className="tweet-title mb-2 text-muted">
                    7
                  </Card.Subtitle>
                </Card.Link>
              </Col>
              <Col>
                <Card.Link className="text-muted" href="#">
                  <FontAwesomeIcon
                    className="image-icon"
                    icon={faRetweet}
                    size="1x"
                  />
                  {/* TODO Retweet Counter */}
                  <Card.Subtitle className="tweet-title mb-2 text-muted">
                    3
                  </Card.Subtitle>
                </Card.Link>
              </Col>
              <Col>
                <Card.Link className="text-muted" href="#">
                  <FontAwesomeIcon
                    className="image-icon"
                    icon={faHeart}
                    size="1x"
                  />
                </Card.Link>
              </Col>
              <Col>
                <Card.Link className="text-muted" href="#">
                  <FontAwesomeIcon
                    className="image-icon"
                    icon={faShareSquare}
                    size="1x"
                  />
                </Card.Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Card>
          </Col>
          <Col>
            <WhatsHappening />
            <WhoToFollow />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Profile;
