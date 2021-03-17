import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { faUserCircle, faRetweet } from "@fortawesome/free-solid-svg-icons";
import {
  faComment,
  faHeart,
  faShareSquare,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Elips from "./Elips";
import "./Tweets.css";
import tweetModel from "../../models/tweet";

function Tweets({ id, author, description }) {
  function handleDelete() {
    tweetModel.delete(id).then((data) => {
      console.log(data, "Tweet Deleted ");
    });
  }

  function handleClick() {
    handleDelete();
  }
  return (
    <Card>
      <Container className="containerTweet" href="/tweet/{props.id}">
        <Row>
          <Col md={3} className="miscCardImage">
            <FontAwesomeIcon
              className="image-icon"
              icon={faUserCircle}
              size="4x"
            />
          </Col>
          <Col md={9}>
            <Card.Body>
              <Row>
                <Col md={4} className="miscCard">
                  <Card.Title className="username">Elon Musk</Card.Title>
                </Col>
                <Col md={4} className="miscCard">
                  <Card.Subtitle className="tweet-title mb-2 text-muted">
                    {author.username}
                  </Card.Subtitle>
                </Col>
                <Col md={2} className="miscCard">
                  <Card.Subtitle className="tweet-title mb-2 text-muted">
                    7m
                  </Card.Subtitle>
                </Col>
                <Col md={2} className="miscCard">
                  {/* took out classname tweet-title  */}
                  <Card.Subtitle className="mb-2 text-muted elips">
                    <Elips handleClick={handleClick} />
                  </Card.Subtitle>
                </Col>
                <Col md={12}>
                  <Card.Text className="text-left">{description}</Card.Text>
                </Col>
              </Row>
            </Card.Body>

            <Row>
              <Col>
                <Card.Link className="text-muted" href={"/tweets/" + id}>
                  <FontAwesomeIcon
                    className="image-icon"
                    icon={faComment}
                    size="1x"
                  />
                  {/* TODO Comment counter */}
                  <Card.Subtitle className="tweet-title mb-2 text-muted">
                    {/* {props.comments.length} */}
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

export default Tweets;
