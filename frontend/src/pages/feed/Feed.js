import NavBar from "../../components/NavBar/NavBar";
import Tweets from "../../components/Tweets/Tweets";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import TweetEntry from "../../components/Tweet Entry/TweetEntry";
import TweetEntryBefore from "../../components/Tweet Entry/TweetEntryBefore";
import WhatsHappening from "../../components/WhatsHappening/WhatsHappening";
import WhoToFollow from "../../components/WhoToFollow/WhoToFollow";
import tweetModel from "../../models/tweet";
import StickyNav from "../../components/StickyNav/StickyNav";

import "./Feed.css";
import React, { useState, useEffect } from "react";

function Feed() {
  const [input, setInput] = useState(false);
  const [tweets, setTweets] = useState([]);

  const submitHandler = () => {
    console.log("Hello for now");
  };

  const handleState = () => {
    console.log("handlestate");
    setInput(true);
  };

  useEffect(function () {
    fetchData();
  }, []);

  const fetchData = () => {
    tweetModel.all().then((data) => {
      setTweets(data.tweets);
    });
  };

  let allTweets = tweets.map((tweet, index) => {
    return (
      <>
        <Tweets {...tweet} key={tweet.id} />
      </>
    );
  });
  console.log(tweets);

  return (
    <div className="Feed" id="feed-page">
      <Container>
        <Row>
          <Col>
            <NavBar />
          </Col>
          <Col md={6}>
            <StickyNav />
            {input === false ? (
              <TweetEntryBefore handleState={handleState} />
            ) : (
              <TweetEntry submitHandler={submitHandler} />
            )}
            {tweets ? allTweets : <h1>No Tweets</h1>}
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

export default Feed;
