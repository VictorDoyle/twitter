/* base */
import react, {useEffect, useState, useReducer} from 'react'
import './Feed.css'
import RecommendationLoader from '../Loaders/RecommendationLoader';
import TweetCard from '../TweetCard/TweetCard';



function Feed  (props) {
   
    let allTweets = props.tweets.map((tweet, index) =>{

      return <>
        <TweetCard {...tweet} key={ tweet.id } user = {props.user}/>
              
      </>
    })




    return (
        <>

 {props.tweets ? allTweets : <RecommendationLoader/>}
  
</>
    )
}

export default Feed