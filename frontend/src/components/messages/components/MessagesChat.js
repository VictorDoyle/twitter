import React from "react";
import { Button } from "react-bootstrap";
import "./MessagesChat.css";

const MessagesChat = () => {
  return (
    <nonSelected className="NonSelected">
      <h4>You don’t have a message selected </h4>
      <h5>Choose one from your existing messages, or start a new one.</h5>
      <Button>This is a Button</Button>
    </nonSelected>
  );
};

export default MessagesChat;
