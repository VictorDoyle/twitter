import NavBar from "../../components/NavBar/NavBar";
import TweetShow from "../../components/TweetShow/TweetShow";
import Comments from "../../components/Comments/Comments";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import WhatsHappening from "../../components/WhatsHappening/WhatsHappening";
import WhoToFollow from "../../components/WhoToFollow/WhoToFollow";
import tweetModel from "../../models/tweet";
import CommentModel from "../../models/comment";
import StickyNav from "../../components/StickyNav/StickyNav";

import React, { useState, useEffect } from "react";

function CommentShow() {
  const [comments, setComments] = useState([]);
  const [tweet, setTweet] = useState([]);

  useEffect(function () {
    fetchData();
  }, []);

  const fetchData = () => {
    CommentModel.all().then((data) => {
      setComments(data.comments);
    });
    tweetModel.showTweet().then((data) => {
      setTweet(data.tweet);
    });
  };

  let allComments = comments.map((comment, index) => {
    return (
      <>
        <Comments {...comment} key={comment.id} />
      </>
    );
  });
  console.log(comments);

  return (
    <div className="Feed" id="feed-page">
      <Container>
        <Row>
          <Col>
            <NavBar />
          </Col>
          <Col md={6}>
            <StickyNav />
            <TweetShow />
            {comments ? allComments : <h1>No Comments</h1>}
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

export default CommentShow;
