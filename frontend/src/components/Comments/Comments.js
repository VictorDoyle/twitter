import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { faUserCircle, faRetweet } from "@fortawesome/free-solid-svg-icons";
import {
  faComment,
  faHeart,
  faShareSquare,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Comments(props) {
  return (
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
                {props.author.username}
              </Card.Subtitle>
              <Card.Subtitle className="tweet-title mb-2 text-muted">
                7m
              </Card.Subtitle>
              <Card.Text className="text-left">{props.description}</Card.Text>
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
                    {props.comments.length}
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
  );
}

export default Comments;
