import React, { useState } from "react";
import tweetModel from "../../models/tweet";
import { Card, Col, Container, Row, Form, Button } from "react-bootstrap";
import {
  faUserCircle,
  faRetweet,
  faPhotoVideo,
  faPollH,
} from "@fortawesome/free-solid-svg-icons";
import {
  faComment,
  faHeart,
  faShareSquare,
  faImage,
  faSmile,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./TweetEntry.css";

function TweetEntry({ user, history, redirectToFeed }) {
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Tweet Created");
    // currently pulling in more information so this is what is needed for id
    tweetModel.create({ description: description, authorId: user.user.id });
    redirectToFeed();
  };

  return (
    <Form onSubmit={submitHandler}>
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
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label></Form.Label>
                  <Form.Control
                    as="textarea"
                    type="description"
                    rows={2.5}
                    placeholder="What's Happening?"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Form.Group>
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
          <Button variant="primary" type="submit">
            Primary
          </Button>{" "}
        </Container>
      </Card>
    </Form>
  );
}

export default TweetEntry;
