import React, { useEffect, useState, useRef } from "react";
import tweetModel from "../../models/tweet";
import Tweets from "../../components/Tweets/Tweets";
import InfiniteScroll from "react-infinite-scroll-component";
import { useQuery, gql } from "@apollo/client";

const TWEETS_QUERY = gql`
  query allTweets {
    Tweet {
      id
      description
    }
  }
`;

const Infinite = () => {
  const [moreTweets, setMoreTweets] = useState([]);
  const [tweets, setTweets] = useState([]);
  const [lastTweetIndex, setLastTweetIndex] = useState(0);
  const [lastTweetID, setLastTweetID] = useState();
  const { loading, error, data } = useQuery(TWEETS_QUERY, {
    variables: { limit: 10 },
  });
  // if (loading) return "Loading...";
  // if (error) return `Error! ${error.message}`;
  console.log(data);

  // const loader = useRef(null);

  const getLastTweet = () => {
    if (tweets.tweets) {
      setLastTweetIndex(tweets.tweets.length - 1);
    }
  };

  useEffect(function () {
    const fetchData = () => {
      tweetModel.all().then((data) => {
        console.log(data.tweets, "Fetch data");
        setTweets({ tweets: data.tweets, hasMore: true });
      });
    };
    fetchData();
    console.log("Number 2", tweets);
  }, []);

  const Mapper = () => (
    <>
      {tweets.tweets.map((tweet, i) => (
        <Tweets {...tweet} key={i + 1} />
      ))}
    </>
  );

  const fetchMoreData = () => {
    getLastTweet();
    setLastTweetID(tweets.tweets[lastTweetIndex].id);

    tweetModel.feed(lastTweetID).then((data) => {
      console.log(data, "data1");
      setTweets({ tweets: tweets.tweets.concat(data.tweets1), hasMore: true });
      /* setMoreTweets({ tweets1: data.tweets1, hasMore: true }); */
      console.log(data.tweets1, "data2");
    });
    /*     if (tweets.tweets.length >= 10) {
      setTweets({ hasMore: false });
      return;
    } */
    console.log(moreTweets.tweets1);

    /* setTweets({
      tweets: tweets.tweets.concat(moreTweets.tweets1),
    }); */
    console.log(tweets, "running");
  };
  console.log(moreTweets.tweets1, "moreTweets");
  console.log(tweets, "tweets");
  if (tweets.tweets) {
    console.log(tweets.tweets.length - 1, "tweets length");
  }
  /* console.log(lastTweetID); */
  console.log(tweets, tweets.tweets, "--------------");
  return (
    <>
      <div className="container" style={{ padding: 0 }}>
        <div className="loading" ref={loader}>
          {tweets.tweets ? (
            <InfiniteScroll
              dataLength={tweets.tweets.length}
              next={fetchMoreData}
              hasMore={tweets.hasMore}
              className="scroll"
              loader={<h4>Loading...</h4>}
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
            >
              <Mapper />
            </InfiniteScroll>
          ) : (
            <></>
          )}

          {/* {tweets ? (
            <>
              {postList.map((tweet) => {
                return (
                  <>
                    <Tweets {...tweet} key={tweet.id} />
                  </>
                );
              })}
            </>
          ) : null} */}
          <h2>Load More</h2>
        </div>
      </div>
    </>
  );
};

export default Infinite;
