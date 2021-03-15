import React from "react";
import { Button } from "react-bootstrap";
import "./MessagesChat.css";
// import { useQuery, gql } from "@apollo/client";

// const MESSAGES_QUERY = gql`
//   query MESSAGES_QUERY {
//     messages {
//       id
//       description
//       user
//       createdAt
//     }
//   }
// `;

// const POST_MESSAGE = gql `
// mutation ($user:String!, $description:String!) {
//   createMessage(user: $user, description: $description)
// }`;

// const Messages = ({ user }) => {
//   const { data } = useQuery(MESSAGES_QUERY);
//   if (!data) {
//     return null;
//   }
//   return JSON.stringify(data);
// };

const MessagesChat = () => {
  // const [createMessage] = useMutation(POST_MESSAGE);
  return (
    <nonSelected className="NonSelected">
      <h4>You don’t have a message selected </h4>
      <h5>Choose one from your existing messages, or start a new one.</h5>
      <Button>This is a Button</Button>
    </nonSelected>
  );
};

export default MessagesChat;
