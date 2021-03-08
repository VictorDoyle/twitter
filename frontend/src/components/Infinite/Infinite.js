import React, { useEffect, useState, useRef } from "react";
import tweetModel from "../../models/tweet";
import Tweets from "../../components/Tweets/Tweets";
import InfiniteScroll from "react-infinite-scroll-component";
import { useQuery, gql } from "@apollo/client";

const TWEETS_QUERY = gql`
  query TWEETS_QUERY {
    allTweets {
      id
      description
      category
      author {
        id
        firstname
        lastname
        username
      }
    }
  }
`;

const Infinite = (props) => {
  console.log(props.tweets);

  // const loader = useRef(null);

  const Mapper = () => (
    <>
      {props.tweets.allTweets.map((tweet) => (
        <>
          <Tweets {...tweet} key = {tweet.id} />
          {console.log(tweet)}
        </>
      ))}
    </>
  );
  const fetchMoreData = () => {
    console.log("fetching data");
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
          {props.tweets.allTweets ? (
            <InfiniteScroll
              dataLength={props.tweets.allTweets.length}
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
          <h2>Load More</h2>
        </div>
      </div>
    </>
  );
};
export default Infinite;