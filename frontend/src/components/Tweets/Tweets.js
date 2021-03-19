import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { faUserCircle, faRetweet } from "@fortawesome/free-solid-svg-icons";
import {
  faComment,
  faHeart,
  faShareSquare,
} from "@fortawesome/free-regular-svg-icons";
import { useMutation, gql } from "@apollo/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Elips from "./Elips";
import "./Tweets.css";

import tweetModel from "../../models/tweet";
import moment from "moment";

const DELETE_TWEET = gql`
  mutation DeleteTweetMutation($deleteTweetTweetId: ID!) {
    deleteTweet(tweetId: $deleteTweetTweetId) {
      description
    }
  }
`;

function Tweets(props) {
  // function handleDelete() {
  //   tweetModel.delete(props.tweet.id).then((data) => {
  //     console.log(data, "Tweet Deleted ");
  //   }};

  // import tweetModel from "../../models/tweet";

  // function Tweets({ id, author, description }) {
  const [deleteTweet, { loading, error }] = useMutation(DELETE_TWEET);

  async function handleDelete() {
    await deleteTweet({
      variables: {
        deleteTweetTweetId: props.id,
      },
    });
    console.log(props.id, "Tweet Deleted ");

    // tweetModel.delete(id).then((data) => {
    //   console.log(data, "Tweet Deleted ");
    // });
  }

  const created = moment.unix(props.createdAt / 1000);
  const now = moment();

  if (loading) return <p>Loading</p>;
  if (error) return <p>An error occurred</p>;

  function handleClick() {
    handleDelete();

    console.log(props);
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
                  <Card.Title className="username">
                    {props.author.firstname} {props.author.lastname}
                  </Card.Title>
                </Col>
                <Col md={4} className="miscCard">
                  <Card.Subtitle className="tweet-title mb-2 text-muted">
                    {props.author.username}
                  </Card.Subtitle>
                </Col>
                <Col md={2} className="miscCard">
                  <Card.Subtitle className="tweet-title mb-2 text-muted">
                    {created.from(now)}
                  </Card.Subtitle>
                </Col>
                <Col md={2} className="miscCard">
                  {/* took out classname tweet-title  */}
                  <Card.Subtitle className="mb-2 text-muted elips">
                    <Elips handleClick={props.handleClick} />
                  </Card.Subtitle>
                </Col>
                <Col md={12}>
                  <Card.Text className="text-left">
                    {props.description}
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>

            <Row>
              <Col>
                <Card.Link className="text-muted" href={"/tweets/" + props.id}>
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
