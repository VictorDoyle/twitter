/* base */
import react, {useEffect, useState, useReducer} from 'react'
import './Feed.css'
import RecommendationLoader from '../Loaders/RecommendationLoader';
import TweetLikeCard from '../TweetCard/TweetLikeCard';




function FeedLikes  (props) {
    console.log("props of feedlikes", props)

    let authoredLikes = props.likes.map((like, index) => {
       

        return <>
        
    
         <TweetLikeCard {...like} key= {like.id} />
        </>
        
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

  
    
</>
    )
}

export default FeedLikes