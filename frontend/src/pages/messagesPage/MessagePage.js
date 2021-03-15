import React, { useEffect, useState } from "react";
import MessagesContainer from "../../components/messages/MessagesContainer";
import MessageCard from "../../components/messages/components/MessageCard";
import MessagesChat from "../../components/messages/components/MessagesChat";
import { userState } from "../../recoil/atoms";
import { useRecoilState } from "recoil";
import "./MessagePage.css";
// import { useQuery, gql } from "@apollo/client";

// const MESSAGES_QUERY = gql`
//   query MessageQuery {
//     allMessages {
//       user {
//         id
//         firstname
//         lastname
//         username
//       }
//       description
//       createdAt
//     }
//   }
// `;

const MessagePage = () => {
  const [user, setUser] = useRecoilState(userState);
  const [setMessages] = useState([]);
  // this page will need auth to pervent errors
  useEffect(() => {
    if (!user) {
      setUser(JSON.parse(localStorage.getItem("userinfo")));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  // const { loading, error, data } = useQuery(MESSAGES_QUERY, {
  //   variables: { limit: 10 },
  // });

  // useEffect(() => {
  //   if (loading === false && data) {
  //     console.log(data);
  //     setMessages(data);
  //     console.log("messages set");
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [loading, data]);
  // if (loading) return "Loading...";
  // if (error) return `Error! ${error.message}`;

  return (
    <MessagesContainer
      user={user}
      body={<MessageCard />}
      messages={<MessagesChat />}
    />
  );
};

export default MessagePage;
