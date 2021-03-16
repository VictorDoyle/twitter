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

const LASTTWEET = gql`
  query Query {
    lastTweets {
      id
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
  const [skip] = useState(0);
  const { data: dataT, loading: loadingT } = useQuery(LASTTWEET);
  const [end, setEnd] = useState(0);

  useEffect(
    function () {
      if (!user) {
        // takes user from storage and sets global again
        setUser(JSON.parse(localStorage.getItem("userinfo")));
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user],
  );

  const { loading, data, fetchMore } = useQuery(TWEETS_QUERY, {
    variables: {
      allTweetsTake: take,
      allTweetsSkip: skip,
      allTweetsMyCursor: end,
    },
  });

  useEffect(() => {
    if (loadingT === false && dataT) {
      setEnd(Number(dataT.lastTweets.id));
      console.log(
        dataT.lastTweets.id,
        "1=============DataT====================",
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingT, dataT]);

  useEffect(() => {
    if (loading === false && data) {
      console.log(data, "test");
      setTweets(data.allTweets);
      console.log("tweets set");
      // console.log(end, "2===============end==================");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, data]);
  if (loading) return "Loading...";

  //TODO refactor for authorID = user.id

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
  };

  const handleState = () => {
    console.log("handlestate");
    setInput(true);
  };
  if (tweets.allTweets) {
    console.log(tweets.allTweets.length, "I'm tweets");
  }

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
              <TweetEntry user={user} redirectToFeed={redirectToFeed} />
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
