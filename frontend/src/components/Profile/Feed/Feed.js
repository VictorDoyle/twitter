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
    /* commenting on a tweet functionality */
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    


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

                {/* commenting on a tweet Modal */}
              <Col>
                <Card.Link className="text-muted" href="#">
                  <FontAwesomeIcon onClick={handleShow} className="image-icon" icon={faComment} size="1x"/>
                  
                  <Card.Subtitle className="tweet-title mb-2 text-muted">
                    {/* {props.comments.length} */}
                  </Card.Subtitle>
                </Card.Link>
              </Col>
                
                <Modal show={show} onHide={handleClose} className="modalStyle">
                    <Modal.Header closeButton className="closeModalButton">
                    </Modal.Header>
                        <span className="dividerModal"></span>
                    <Modal.Body> original tweet content here{/* {tweet.content} */}</Modal.Body>
                    <Modal.Body> 
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" placeholder="Add Another Tweet " rows={3} />
                    </Form.Group>
                        
                        
                        
                    </Modal.Body>
                    <Modal.Footer>
                    {/* TODO: if Form.Input === empty show button style 1 else if Form.Input !=== empty show style 2 */}
                    <Button variant="primary" className="tweetButton" onClick={handleClose}>
                        Tweet
                    </Button>
                    </Modal.Footer>
                </Modal>














              {/* END OF COMMENTING FUNCTION MODAL */}



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


                    {/* LIKE TWEET FUNCTION */}
                <Card.Link className="text-muted" href="#">
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