import { userState } from "../../recoil/atoms";
import { useRecoilState } from "recoil";
import NavBar from "../../components/NavBar/NavBar";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import TweetEntry from "../../components/Tweet Entry/TweetEntry";
import TweetEntryBefore from "../../components/Tweet Entry/TweetEntryBefore";
import WhatsHappening from "../../components/WhatsHappening/WhatsHappening";
import WhoToFollow from "../../components/WhoToFollow/WhoToFollow";
import tweetModel from "../../models/tweet";
import StickyNav from "../../components/StickyNav/StickyNav";
import Infinite from "../../components/Infinite/Infinite";

import "./MainFeed.css";
import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

const TWEETS_QUERY = gql`
  query TWEETS_QUERY {
    allTweets {
      id
      description
      category
      createdAt
      author {
        id
        firstname
        lastname
        username
      }
    }
  }
`;

function MainFeed(props) {
  const [user, setUser] = useRecoilState(userState);

  const [input, setInput] = useState(false);
  const [tweets, setTweets] = useState([]);

  useEffect(
    function () {
      if (!user) {
        // takes user from storage and sets global again
        setUser(JSON.parse(localStorage.getItem("userinfo")));

        //   AuthModel.verify().then((json) => {
        //     localStorage.setItem("uid", json.token);
        //     console.log(json.user, "login");
        //     setUser(json);
        //   });
        //   console.log(user);
      }
    },
    [user]
  );

  const { loading, error, data } = useQuery(TWEETS_QUERY, {
    variables: { limit: 10 },
  });
  console.log(data);
  useEffect(() => {
    if (loading === false && data) {
      console.log(data);
      setTweets(data);
      console.log("tweets set");
    }
  }, [loading, data]);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  //TODO refactor for authorID = user.id

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Mail Mother fucker");
    // currently pulling in more information so this is what is needed for id
    // tweetModel.create({ description: description, authorId: Number(user.id) });
    const redirectToFeed = () => {
      const { history } = props;
      if (history) history.go(0);
    };
  };

  const handleState = () => {
    console.log("handlestate");
    setInput(true);
  };

  return (
    <div className="Feed" id="feed-page">
      <Container>
        <Row>
          <Col>
            <NavBar {...user} />
          </Col>
          <Col md={6}>
            <StickyNav />
            {input === false ? (
              <TweetEntryBefore handleState={handleState} />
            ) : (
              <h1>hello</h1>
              // <TweetEntry redirectToFeed={redirectToFeed} user={user} />
            )}
            <Infinite tweets={tweets} />
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

export default MainFeed;
