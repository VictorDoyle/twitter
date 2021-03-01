/* base */
import react, {useEffect, useState, useReducer} from 'react'
import './Feed.css'
import RecommendationLoader from '../Loaders/RecommendationLoader';
import TweetCard from '../TweetCard/TweetCard';




function FeedWithReplies  (props) {
    const [tweets, setTweets] = useState([]);

    let tweetsWithReplies = props.tweets.map((tweet, index) =>{
        if (tweet.comments.length > 0) {
            return <>
        <TweetCard {...tweet} key={ tweet.id }  {...props.user}/>
              
      </>
        } 
    })




    return (
        <>

 {props.tweets ? tweetsWithReplies : <RecommendationLoader/>}

  
    
</>
    )
}

export default FeedWithReplies