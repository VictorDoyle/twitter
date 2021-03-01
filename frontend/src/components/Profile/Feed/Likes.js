/* base */
import react, {useEffect, useState, useReducer} from 'react'
import './Feed.css'
import RecommendationLoader from '../Loaders/RecommendationLoader';
import TweetCard from '../TweetCard/TweetCard';




function FeedLikes  (props) {


   /*  let authoredLikes = props.likes.map((like, index) => {
        if (props.likes.authorId === props.user[0].id) {

        return <>
         <TweetCard {...like} key={ like.id }  {...props.user}/>
        </>
        }
    }) */


    let tweetsLiked = props.tweets.map((tweet, index) =>{
        
    let authoredLikes = tweet.likes.map((like, index) => {
        return <>
        <h1> hello</h1>
        </>
    })
           {
            return <>
        <TweetCard {...tweet} key={ tweet.id }  {...props.user}/>
              
      </>
        } 
    })




    return (
        <>

 {props.tweets ? tweetsLiked : <RecommendationLoader/>}
{/*  {props.tweets ? authoredLikes : <RecommendationLoader/>}
 */}
  
  
    
</>
    )
}

export default FeedLikes