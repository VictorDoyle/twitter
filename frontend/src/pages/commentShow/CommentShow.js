import NavBar from "../../components/NavBar/NavBar";
import TweetShow from "../../components/TweetShow/TweetShow";
import Comments from "../../components/Comments/Comments";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import WhatsHappening from "../../components/WhatsHappening/WhatsHappening";
import WhoToFollow from "../../components/WhoToFollow/WhoToFollow";
import tweetModel from "../../models/tweet";
// import CommentModel from "../../models/comment";
import StickyNavTweet from "../../components/StickyNavTweet/StickyNavTweet";

import React, { useState, useEffect } from "react";

function CommentShow({ match }) {
  const [tweet, setTweet] = useState([]);

  useEffect(function () {
    fetchTweet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchTweet = () => {
    tweetModel.showTweet(match.params.id).then((data) => {
      console.log("second");
      setTweet(data.tweet);
    });
  };

  console.log("tweets", tweet);
  return (
    <div className="Feed" id="feed-page">
      <Container>
        <Row>
          <Col>
            <NavBar />
          </Col>
          <Col md={6}>
            <StickyNavTweet />
            {/* <TweetShow tweet={tweet} /> */}
            {tweet.author ? <TweetShow tweet={tweet} /> : <h1>Loading</h1>}
            {tweet.comments ? (
              tweet.comments.map((comment) => {
                return (
                  <>
                    <Comments {...comment} key={comment.id} />
                  </>
                );
              })
            ) : (
              <h1>No Comments</h1>
            )}
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
