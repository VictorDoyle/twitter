/* base */
import React, { useState, useReducer } from "react";
import "./TweetCard.css";

/* vendor modules */
import {
  Card,
  Row,
  Col,
  Container,
  Modal,
  Button,
  Form,
} from "react-bootstrap";
import {
  faComment,
  faHeart,
  faShareSquare,
} from "@fortawesome/free-regular-svg-icons";
import { faUserCircle, faRetweet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/* models */
import CommentModel from "../../../models/comment";
import LikeModel from "../../../models/likes";
import moment from "moment";

/* LIKE TWEET FUNCTION */

function likeUnlikeReducer(state, action) {
  switch (action.type) {
    case "LIKE_TWEET":
      console.log("dispatch switch LIKE hit");
      return { ...state, liked: true };
    case "UNLIKE_TWEET":
      console.log("dispatch switch UNLIKE hit");
      return { ...state, liked: false };
    default:
      throw new Error();
  }
}

const initialState = {
  liked: false,
};

function TweetCard(props) {
  const created = moment(props.createdAt);
  const now = moment();

  /* like/unlike functionality */
  const [state, dispatch] = useReducer(likeUnlikeReducer, initialState);
  const { liked } = state;

  /* commenting on a tweet functionality */
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [content, setComment] = useState("");

  /* submit comment to tweets  via profile*/
  function submitComment(event) {
    event.preventDefault();
    CommentModel.create({
      content: content,
      authorId: parseInt(props.user[0].id),
      tweetId: props.id,
    }).then((json) => {
      if (json.status === 201) {
        console.log(json, "user commented");
      }
    });
  }

  /* handle user liking a tweet */

  function handleLike(event) {
    event.preventDefault();
    LikeModel.create({
      authorId: parseInt(props.user[0].id),
      tweetId: props.id,
    }).then((json) => {
      console.log(json, "tweet liked by user");
    });
  }
  /* user dislikes a tweet */
  function handleDislike(event) {
    event.preventDefault();
    LikeModel.delete().then((json) => {
      console.log(json, "tweet unliked by user ");
    });
  }

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
                <Card.Title className="username">
                  {props.author.firstname}
                </Card.Title>
                <Card.Subtitle className="tweet-title mb-2 text-muted">
                  @{props.author.username}
                </Card.Subtitle>
                <Card.Subtitle className="tweet-title mb-2 text-muted">
                  {created.from(now)}
                </Card.Subtitle>
                <Card.Text className="text-left">
                  {" "}
                  {props.description}
                </Card.Text>
              </Card.Body>
              <Row>
                {/* commenting on a tweet Modal */}
                <Col>
                  <Card.Link className="text-muted" href="#">
                    <FontAwesomeIcon
                      onClick={handleShow}
                      className="image-icon"
                      icon={faComment}
                      size="1x"
                    />

                    <Card.Subtitle className="tweet-title mb-2 text-muted">
                      {props.comments.length}
                    </Card.Subtitle>
                  </Card.Link>
                </Col>

                <Modal show={show} onHide={handleClose} className="modalStyle">
                  <Modal.Header
                    closeButton
                    className="closeModalButton"
                  ></Modal.Header>
                  <span className="dividerModal"></span>
                  <Card.Body>
                    <FontAwesomeIcon
                      className="image-icon"
                      icon={faUserCircle}
                      size="2x"
                    />
                    <Card.Title className="username">
                      {props.author.firstname}
                    </Card.Title>

                    <Card.Subtitle className="tweet-title mb-2 text-muted">
                      @{props.author.username}
                    </Card.Subtitle>
                    <Card.Subtitle className="tweet-title mb-2 text-muted">
                      {/* {tweet.createdAt} */}
                    </Card.Subtitle>
                    <Card.Text className="text-left">
                      {" "}
                      {props.description}
                    </Card.Text>
                  </Card.Body>
                  <Modal.Body className="tweet-title text-muted">
                    {" "}
                    Replying To @{props.author.firstname}{" "}
                    {/* TODO: add Link to={'/profile/props.author.id} */}
                  </Modal.Body>

                  <Modal.Body>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Control
                        as="textarea"
                        value={content}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Tweet Your Reply"
                        rows={3}
                      />
                    </Form.Group>
                  </Modal.Body>
                  <Modal.Footer>
                    {/* TODO: if Form.Input === empty show button style 1 else if Form.Input !=== empty show style 2 */}
                    <Button
                      variant="primary"
                      className="tweetButton"
                      onClick={(event) => {
                        handleClose();
                        submitComment(event);
                      }}
                    >
                      Reply
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
                    {liked === false ? (
                      <FontAwesomeIcon
                        onClick={(event) => {
                          dispatch({ type: "LIKE_TWEET" });
                          handleLike(event);
                        }}
                        className="image-icon"
                        icon={faHeart}
                        size="1x"
                        color="grey"
                      >
                        {" "}
                        {props.likes.length}{" "}
                      </FontAwesomeIcon>
                    ) : (
                      <FontAwesomeIcon
                        onClick={(event) => {
                          dispatch({ type: "UNLIKE_TWEET" });
                          handleDislike(event);
                        }}
                        className="image-icon"
                        icon={faHeart}
                        size="1x"
                        color="red"
                      >
                        {" "}
                        {props.likes.length}{" "}
                      </FontAwesomeIcon>
                    )}
                    {props.likes.length}
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
  );
}

export default TweetCard;
