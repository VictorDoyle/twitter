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
// import tweetModel from "../../models/tweet";
import StickyNav from "../../components/StickyNav/StickyNav";
import Infinite from "../../components/Infinite/Infinite";

import "./MainFeed.css";
import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

const TWEETS_QUERY = gql`
  query Query(
    $allTweetsTake: Int
    $allTweetsSkip: Int
    $allTweetsMyCursor: Int
  ) {
    allTweets(
      take: $allTweetsTake
      skip: $allTweetsSkip
      myCursor: $allTweetsMyCursor
    ) {
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
  // const [limit, setLimit] = useState(10);
  const [take] = useState(10);
  // FIXME this need to be dynamic
  const [end, setEnd] = useState(54);
  const [skip] = useState(0);

  useEffect(
    function () {
      if (!user) {
        // takes user from storage and sets global again
        setUser(JSON.parse(localStorage.getItem("userinfo")));
      }
    },
<<<<<<< HEAD
    [user]
=======
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user],
>>>>>>> 97d2e266a7a3ea65a979821772d94638dde98aff
  );

  const { loading, data, fetchMore } = useQuery(TWEETS_QUERY, {
    variables: {
      allTweetsTake: take,
      allTweetsSkip: skip,
      allTweetsMyCursor: end,
    },
  });

  useEffect(() => {
    if (loading === false && data) {
      console.log(data);
      setTweets(data.allTweets);
      console.log("tweets set");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, data]);
  if (loading) return "Loading...";

  //TODO refactor for authorID = user.id

<<<<<<< HEAD
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Mail Mother fucker");
    // currently pulling in more information so this is what is needed for id
    // tweetModel.create({ description: description, authorId: Number(user.id) });
    const redirectToFeed = () => {
      const { history } = props;
      if (history) history.go(0);
    };
=======
  /*   const submitHandler = (e) => {
      e.preventDefault();
      console.log("Mail Mother fucker");
      // currently pulling in more information so this is what is needed for id
      tweetModel.create({
        description: description,
        authorId: Number(user.id),
      }); */
  const redirectToFeed = () => {
    const { history } = props;
    if (history) history.go(0);
>>>>>>> b5a806d38f9a685f197511b0ec39a19537321853
  };

  const handleState = () => {
    console.log("handlestate");
    setInput(true);
  };
  if (tweets.allTweets) {
    console.log(tweets.allTweets.length, "I'm tweets");
  }
  // console.log(data.allTweets.length, "hiiii");
  // console.log(tweets[0].id, "hiiii");
  // console.log(end);
  const bigFetch = () => {
    fetchMore(
      {
        variables: {
          allTweetsMyCursor: end - take,
        },
      },
      setEnd(tweets[tweets.length - 1].id),
    );
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
<<<<<<< HEAD
              <h1>hello</h1>
              // <TweetEntry redirectToFeed={redirectToFeed} user={user} />
=======
              <TweetEntry user={user} redirectToFeed={redirectToFeed} />
>>>>>>> b5a806d38f9a685f197511b0ec39a19537321853
            )}
            <Infinite tweets={tweets} onLoadMore={bigFetch} />
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
