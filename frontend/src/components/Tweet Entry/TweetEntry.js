import React, { useState } from "react";
// import tweetModel from "../../models/tweet";
import { Card, Col, Container, Row, Form, Button } from "react-bootstrap";
import {
  faUserCircle,
  faPhotoVideo,
  faPollH,
} from "@fortawesome/free-solid-svg-icons";
import { faImage, faSmile } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./TweetEntry.css";
import { useMutation, gql } from "@apollo/client";

const CREATE_TWEET = gql`
  mutation CreateTweetMutation($createTweetDescription: String!) {
    createTweet(description: $createTweetDescription) {
      id
      description
      createdAt
    }
  }
`;

function TweetEntry({ redirectToFeed }) {
  const [description, setDescription] = useState("");
  const [createTweet, { loading, error }] = useMutation(CREATE_TWEET);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("Tweet Created");
    await createTweet({
      variables: {
        createTweetDescription: description,
      },
    });
    console.log("the English are coming");
    // currently pulling in more information so this is what is needed for id
    // tweetModel.create({ description: description, authorId: user.user.id });
    redirectToFeed();
  };
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

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
