import React, { useEffect, useState, useRef } from "react";
import tweetModel from "../../models/tweet";
import Tweets from "../../components/Tweets/Tweets";
import InfiniteScroll from "react-infinite-scroll-component";
import { useQuery, gql } from "@apollo/client";

const TWEETS_QUERY = gql`
  query TWEETS_QUERY {
    allUsers {
      email
      firstname
      username
      dateOfBirth
      lastname
      id
      bio
      tweets {
        id
        description
        category
      }
    }
  }
`;

const Infinite = () => {
  const [moreTweets, setMoreTweets] = useState([]);
  const [tweets, setTweets] = useState([]);
  const [lastTweetIndex, setLastTweetIndex] = useState(0);
  const [lastTweetID, setLastTweetID] = useState();
  // useEffect(function () {
  //   const fetchData = () => {
  //     tweetModel.all().then((data) => {
  //       console.log(data.tweets, "Fetch data");
  //       setTweets({ tweets: data.tweets, hasMore: true });
  //     });
  //   };
  //   fetchData();
  //   console.log("Number 2", tweets);
  // }, []);
  const { loading, error, data } = useQuery(
    TWEETS_QUERY,
    //   {
    //   variables: { limit: 10 },
    // }
  );
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  console.log(data);

  // const loader = useRef(null);

  const getLastTweet = () => {
    if (tweets.tweets) {
      setLastTweetIndex(tweets.tweets.length - 1);
    }
  };

  const Mapper = () => (
    <>
      {data?.TWEETS_QUERY?.map((tweet) => (
        <Tweets {...tweet} key {...tweet.id} />
      ))}
      {/* {tweets.tweets.map((tweet, i) => (
        <Tweets {...tweet} key={i + 1} />
      ))} */}
    </>
  );
  const fetchMoreData = () => {
    // getLastTweet();
    // setLastTweetID(tweets.tweets[lastTweetIndex].id);
    // tweetModel.feed(lastTweetID).then((data) => {
    //   setTweets({ tweets: tweets.tweets.concat(data.tweets1), hasMore: true });
    /* setMoreTweets({ tweets1: data.tweets1, hasMore: true }); */
    // });
    // =======
    /*     if (tweets.tweets.length >= 10) {
      setTweets({ hasMore: false });
      return;
    } */
    /* setTweets({
      tweets: tweets.tweets.concat(moreTweets.tweets1),
    }); */
  };
  // if (tweets.tweets) {
  //   // console.log(tweets.tweets.length - 1, "tweets length");
  // }
  /* console.log(lastTweetID); */
  return (
    <>
      <div className="container" style={{ padding: 0 }}>
        <div className="loading">
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