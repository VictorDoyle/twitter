import React from "react";
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
import "./TweetShow.css";
import moment from "moment";

function TweetShow(props) {
  const createdDate = props.tweet.updatedAt;
  console.log(props.tweet.createdAt);

  console.log(moment(createdDate).format("hA MMM D, YYYY"));
  return (
    <>
      {props ? (
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
                  <Card.Title className="username">
                    {props.tweet.author.firstname} {props.tweet.author.lastname}
                  </Card.Title>
                  <Card.Subtitle className=" mb-2 text-muted">
                    {props.tweet.author.username}
                  </Card.Subtitle>
                </Card.Body>
              </Col>
            </Row>
            <Row>
              <Card.Body>
                <Card.Title className="text-left">
                  {props.tweet.description}
                </Card.Title>
              </Card.Body>
            </Row>
            <Row>
              <Card.Body>
                <Card.Subtitle className="tweet-title mb-2 text-muted">
                  {moment(createdDate).format("hA MMM D, YYYY")}
                </Card.Subtitle>
              </Card.Body>
            </Row>
            <hr></hr>
            <Card.Body>
              <Row>
                <Col>
                  <Card.Subtitle>2,234 Retweets</Card.Subtitle>
                </Col>
                <Col>
                  <Card.Subtitle>2,234 Quote Tweets</Card.Subtitle>
                </Col>
                <Col>
                  <Card.Subtitle>2,234 Likes</Card.Subtitle>
                </Col>
              </Row>
            </Card.Body>
            <hr></hr>
            <Card.Body>
              <Row>
                <Col className="d-flex justify-content-center">
                  <Card.Link className="text-muted" href="#">
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
                <Col className="d-flex justify-content-center">
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
                <Col className="d-flex justify-content-center">
                  <Card.Link className="text-muted" href="#">
                    <FontAwesomeIcon
                      className="image-icon"
                      icon={faHeart}
                      size="1x"
                    />
                  </Card.Link>
                </Col>
                <Col className="d-flex justify-content-center">
                  <Card.Link className="text-muted" href="#">
                    <FontAwesomeIcon
                      className="image-icon"
                      icon={faShareSquare}
                      size="1x"
                    />
                  </Card.Link>
                </Col>
              </Row>
            </Card.Body>
          </Container>
        </Card>
      ) : (
        <h1>hello</h1>
      )}
    </>
  );
}

export default TweetShow;
