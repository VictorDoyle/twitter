/* base */
import React, { useEffect, useState, useReducer } from "react";
import "./Follow.css";
import {
  Card,
  Row,
  Col,
  Container,
  Modal,
  Button,
  Form,
} from "react-bootstrap";

import FollowModel from "../../models/follow";

/* models */

function followUnfollowReducer(state, action) {
  switch (action.type) {
    case "FOLLOW_USER":
      console.log("dispatch switch FOLLOWING hit");
      return { ...state, followed: true };
    case "UNLIKE_TWEET":
      console.log("dispatch switch UNFOLLOWING hit");
      return { ...state, followed: false };
    default:
      throw new Error();
  }
}

const initialState = {
  followed: false,
};

function FollowIcon(props) {
  /* like/unlike functionality */
  const [state, dispatch] = useReducer(followUnfollowReducer, initialState);
  const { followed } = state;

  function handleFollow(event) {
    event.preventDefault();
    FollowModel.create({ userId: props.user[0].id }).then((json) => {
      console.log(json, "followed by user");
    });
  }
  /* user unfollows another user */
  function handleUnfollow(event) {
    event.preventDefault();
    FollowModel.delete().then((json) => {
      console.log(json, "unfollowed by user ");
    });
  }

  return (
    <Card.Link className="text-muted" href="#">
      {followed === false ? (
        <Button
          content="Primary"
          Follow
          onClick={(event) => {
            dispatch({ type: "FOLLOW_USER" });
            handleFollow(event);
          }}
        />
      ) : (
        <Button
          content="Primary"
          Following
          onClick={(event) => {
            dispatch({ type: "UNFOLLOW_USER" });
            handleUnfollow(event);
          }}
        />
      )}
    </Card.Link>
  );
}

export default FollowIcon;
