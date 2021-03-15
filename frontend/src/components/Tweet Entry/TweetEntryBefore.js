import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import {
  faUserCircle,
  faPhotoVideo,
  faPollH,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import { faShareSquare, faImage } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./TweetEntryBefore.css";

function TweetEntryBefore({ handleState }) {
  return (
    <Card onClick={handleState}>
      <Container>
        <Row>
          <Col xs={2}>
            <FontAwesomeIcon
              className="image-icon image"
              icon={faUserCircle}
              size="4x"
            />
          </Col>
          <Col>
            <Card.Body>
              <Card.Text className="text-left">What's Happening?</Card.Text>
            </Card.Body>
            <Col>
              <Row>
                <Col>
                  <Card.Link className="text-muted" href="#">
                    <FontAwesomeIcon
                      className="image-icon"
                      icon={faImage}
                      size="1x"
                    />
                    {/* TODO Comment counter */}
                    <Card.Subtitle className="tweet-title mb-2 text-muted"></Card.Subtitle>
                  </Card.Link>
                </Col>
                <Col>
                  <Card.Link className="text-muted" href="#">
                    <FontAwesomeIcon
                      className="image-icon"
                      icon={faPhotoVideo}
                      size="1x"
                    />
                    {/* TODO Retweet Counter */}
                    <Card.Subtitle className="tweet-title mb-2 text-muted"></Card.Subtitle>
                  </Card.Link>
                </Col>
                <Col>
                  <Card.Link className="text-muted" href="#">
                    <FontAwesomeIcon
                      className="image-icon"
                      icon={faPollH}
                      size="1x"
                    />
                  </Card.Link>
                </Col>
                <Col>
                  <Card.Link className="text-muted" href="#">
                    <FontAwesomeIcon
                      className="image-icon"
                      icon={faSmile}
                      size="1x"
                    />
                  </Card.Link>
                </Col>
              </Row>
            </Col>
          </Col>
        </Row>
      </Container>
    </Card>
  );
}

export default TweetEntryBefore;
