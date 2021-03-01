/* base */
import react, {useEffect, useState, useReducer} from 'react'
import './Feed.css'

/* vendor modules */
import { Card, Row, Col, Container, Modal, Button, Form} from 'react-bootstrap'
import {
    faComment,
    faHeart,
    faShareSquare,
  } from "@fortawesome/free-regular-svg-icons";
import { faUserCircle, faRetweet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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