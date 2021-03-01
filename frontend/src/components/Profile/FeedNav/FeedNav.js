/* user state import */
import { userState } from "../../../recoil/atoms";
import { useRecoilState } from "recoil";
import react, {useEffect, useState} from 'react'
import { Nav, Row, Tab, Col, ListGroup } from 'react-bootstrap'
import Feed from '../Feed/Feed'
import FeedWithReplies from '../Feed/WithReplies'
import './FeedNav.css'
import tweetModel from "../../../models/tweet";

function FeedNav  () {
    const user = useRecoilState(userState);
    const [tweets, setTweets] = useState([]);


  /* base */
  useEffect(function () {
    fetchData();
  }, []);

  /* get tweets by user id */
  const fetchData = () => {
    tweetModel.showByUser(user[0].id).then((data) => {
      console.log("these are tweets fetched by data", data)
      setTweets(data.tweetsByAuthor);
    });
  };
  

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
        <h1> hello</h1>
        </Tab.Pane>

        <Tab.Pane eventKey="#likes">
        <h1> hello</h1>
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