/* base */
import react, {useEffect, useState, useReducer} from 'react'
import './Feed.css'
import RecommendationLoader from '../Loaders/RecommendationLoader';
import TweetCard from '../TweetCard/TweetCard';




function FeedLikes  (props) {
    console.log("props of feedlikes", props)

    let authoredLikes = props.likes.map((like, index) => {
        if (props.likes.authorId === props.user[0].id) {

        return <>
        
         <TweetCard {...like} key={ like.id }  {...props.user}/>
        </>
        }
    })
    


/*     let tweetsLiked = props.likes.map((like, index) =>{
           {
            return <>
        <TweetCard {...like} key={ like.id }  {...props.user} />
              
               <h1> hello </h1>
      </>
        } 
    }) */




    return (
        <>

 {props.likes ? authoredLikes : <RecommendationLoader/>}
{/*  {props.tweets ? authoredLikes : <RecommendationLoader/>}
 */}
 <h1> hello </h1>
  
  
    
</>
    )
}

export default FeedLikes