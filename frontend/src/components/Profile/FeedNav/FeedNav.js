/* user state import */
import { userState } from "../../../recoil/atoms";
import { useRecoilState } from "recoil";
import react, {useEffect, useState} from 'react'
import { Nav, Tab, Col } from 'react-bootstrap'
import Feed from '../Feed/Feed'
import FeedWithReplies from '../Feed/WithReplies'
import './FeedNav.css'
import tweetModel from "../../../models/tweet";
import FeedLikes from "../Feed/Likes";
import likeModel from "../../../models/likes";

function FeedNav  () {
    const user = useRecoilState(userState);
    const [tweets, setTweets] = useState([]);
    const [likes, setLikes] = useState([]);

  /* base */
  useEffect(function () {
    fetchData();
    fetchLikes();
  }, []);

  /* get tweets by user id */
  const fetchData = () => {
    tweetModel.showByUser(user[0].id).then((data) => {
      console.log("these are tweets fetched by data", data)
      setTweets(data.tweetsByAuthor);
    });
  };

  /* get likes by user id */
  /* FIXME: refactor route */
 /*  const fetchLikes = () => {
    likeModel.showByAuthor(user[0].id).then((data) => {
        console.log("fetched likes by this user", data)
        setLikes(data.like)
    })
  } */

  const fetchLikes = () => {
    likeModel.all().then((data) => {
        console.log("fetched all likes", data)
        setLikes(data.likes)
    })
  }


 

 
  

    return (
        <>
 <Tab.Container  defaultActiveKey="#link1">
 
  <Nav variant="tabs" className="mr-auto profileNavBar" fill justify defaultActiveKey="link-1">
      <Nav.Link eventKey="#tweets"href="#tweets">Tweets</Nav.Link>
      
      <Nav.Link eventKey="#with_replies" >Tweets &amp; Replies </Nav.Link>
      <Nav.Link eventKey="#media" >Media</Nav.Link>
      <Nav.Link eventKey="#likes" >Likes</Nav.Link>
    </Nav>
    <Col sm={16}>
      <Tab.Content>

        <Tab.Pane eventKey="#tweets">
          <Feed tweets = {tweets} user = {user} />
        </Tab.Pane>

        <Tab.Pane eventKey="#with_replies">
        <FeedWithReplies user ={user} tweets = {tweets}/>
        </Tab.Pane>

        <Tab.Pane eventKey="#media">
        <h1> add aws or image upload here</h1>
        </Tab.Pane>

        <Tab.Pane eventKey="#likes">
        <FeedLikes user = {user} likes = {likes} />
        </Tab.Pane>

      </Tab.Content>
    </Col>
  
</Tab.Container>

  {/*   <Nav variant="tabs" className="mr-auto profileNavBar" fill justify defaultActiveKey="link-1">
      <Nav.Link eventKey="link-1"href="#tweets">Tweets</Nav.Link>
      
      <Nav.Link eventKey="link-2" component={FeedWithReplies}>Tweets &amp; Replies </Nav.Link>
      <Nav.Link eventKey="link-3" href="#media">Media</Nav.Link>
      <Nav.Link eventKey="link-4" href="#likes">Likes</Nav.Link>
    </Nav> */}
    
</>
    )
}

export default FeedNav


/*  <Tab.Container  defaultActiveKey="#link1">
  <Row>
    <Col sm={4}>
      <ListGroup>
        <ListGroup.Item action href="#link1">
          Link 13
        </ListGroup.Item>
        <ListGroup.Item action href="#link2">
          Link 2
        </ListGroup.Item>
      </ListGroup>
    </Col>
    <Col sm={8}>
      <Tab.Content>
        <Tab.Pane eventKey="#link1">
          <p> test 1</p>
        </Tab.Pane>
        <Tab.Pane eventKey="#link2">
        <p> test 2</p>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container> */