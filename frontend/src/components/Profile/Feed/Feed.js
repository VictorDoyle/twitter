/* base */
// import react, { useEffect, useState, useReducer } from "react";
import "./Feed.css";
import RecommendationLoader from "../Loaders/RecommendationLoader";
import TweetCard from "../TweetCard/TweetCard";

function Feed(props) {
  let allTweets = props.tweets.map((tweet, i) => {
    return <TweetCard {...tweet} key={i + 1} user={props.user} />;
  });

  return <>{props.tweets ? allTweets : <RecommendationLoader />}</>;
}

export default Feed;
