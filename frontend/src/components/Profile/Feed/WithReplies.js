/* base */
// import react, { useEffect, useState, useReducer } from "react";
import "./Feed.css";
import RecommendationLoader from "../Loaders/RecommendationLoader";
import TweetCard from "../TweetCard/TweetCard";

function FeedWithReplies(props) {
  // eslint-disable-next-line
  let tweetsWithReplies = props.tweets.map((tweet, i) => {
    if (tweet.comments.length > 0) {
      return <TweetCard {...tweet} key={i + 1} {...props.user} />;
    }
  });
  // eslint-disable-next-line
  return <>{props.tweets ? tweetsWithReplies : <RecommendationLoader />}</>;
}

export default FeedWithReplies;
