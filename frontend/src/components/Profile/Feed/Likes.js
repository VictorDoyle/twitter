/* base */
// import react, { useEffect, useState, useReducer } from "react";
import "./Feed.css";
import RecommendationLoader from "../Loaders/RecommendationLoader";
import TweetLikeCard from "../TweetCard/TweetLikeCard";

function FeedLikes(props) {
  let authoredLikes = props.likes.map((like, i) => {
    return (
      <>
        <TweetLikeCard {...like} key={i + 1} />
      </>
    );
  });

  /*     let tweetsLiked = props.likes.map((like, index) =>{
           {
            return <>
        <TweetCard {...like} key={ like.id }  {...props.user} />
              
               <h1> hello </h1>
      </>
        } 
    }) */

  return <>{props.likes ? authoredLikes : <RecommendationLoader />}</>;
}

export default FeedLikes;
