/* base */
import react, {useEffect, useState, useReducer} from 'react'
import './Feed.css'

/* vendor modules */
import { Card, Row, Col, Container, Form } from 'react-bootstrap'
import {
    faComment,
    faHeart,
    faShareSquare,
  } from "@fortawesome/free-regular-svg-icons";
import { faUserCircle, faRetweet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




/* LIKE TWEET FUNCTION */

function likeUnlikeReducer(state, action) {
    switch (action.type) {
      case 'LIKE_TWEET':
        console.log("liked")
        return {  ...state, liked: true }
      case 'UNLIKE_TWEET':
        console.log("unliked")
        return { ...state, liked: false }
      default:
        throw new Error()
    }
  }

  const initialState = {
    liked: false
  };

function Feed  () {
    /* like/unlike functionality */
    const [state, dispatch] = useReducer(likeUnlikeReducer, initialState);
    const { liked } = state
    


    return (
        <>
 
 <Card>
      <Container>
        <Row>
          <Col xs={2}>
            <FontAwesomeIcon
              className="image-icon"
              icon={faUserCircle}
              size="4x"
            />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title className="username">Elon Musk</Card.Title>
              <Card.Subtitle className="tweet-title mb-2 text-muted">
                username here
              </Card.Subtitle>
              <Card.Subtitle className="tweet-title mb-2 text-muted">
                7m
              </Card.Subtitle>
              <Card.Text className="text-left"> description here</Card.Text>
            </Card.Body>
            <Row>
              <Col>
                <Card.Link className="text-muted" href="#">
                  <FontAwesomeIcon
                    className="image-icon"
                    icon={faComment}
                    size="1x"
                  />
                  
                  <Card.Subtitle className="tweet-title mb-2 text-muted">
                    {/* {props.comments.length} */}
                  </Card.Subtitle>
                </Card.Link>
              </Col>
              <Col>
                <Card.Link className="text-muted" href="#">
                  <FontAwesomeIcon
                    className="image-icon"
                    icon={faRetweet}
                    size="1x"
                  />
                  
                  <Card.Subtitle className="tweet-title mb-2 text-muted">
                    3
                  </Card.Subtitle>
                </Card.Link>
              </Col>
              <Col>
                <Card.Link className="text-muted" href="#">
                    {/* LIKE TWEET FUNCTION */}

                    
      {liked === false ? <FontAwesomeIcon  onClick={() => dispatch({ type: 'LIKE_TWEET' })} className="image-icon" icon={faHeart} size="1x" color="grey"/> 
      : <FontAwesomeIcon onClick={() => dispatch({ type: 'UNLIKE_TWEET' })} className="image-icon" icon={faHeart} size="1x" color="red"/>}

                
                </Card.Link>
              </Col>
              <Col>
                <Card.Link className="text-muted" href="#">
                  <FontAwesomeIcon
                    className="image-icon"
                    icon={faShareSquare}
                    size="1x"
                  />
                </Card.Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Card>
    
</>
    )
}

export default Feed