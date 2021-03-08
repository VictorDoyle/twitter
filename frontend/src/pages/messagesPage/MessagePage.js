import React, { useEffect } from "react";
import MessagesContainer from "../../components/messages/MessagesContainer";
import MessageCard from "../../components/messages/components/MessageCard";
import MessagesChat from "../../components/messages/components/MessagesChat";
import { userState } from "../../recoil/atoms";
import { useRecoilState } from "recoil";
import "./MessagePage.css";

const MessagePage = () => {
  const [user, setUser] = useRecoilState(userState);
  // this page will need auth to pervent errors
  useEffect(() => {
    if (!user) {
      setUser(JSON.parse(localStorage.getItem("userinfo")));
    }
  }, [user]);
  return (
    <MessagesContainer
      user={user}
      body={<MessageCard />}
      messages={<MessagesChat />}
    />
  );
};

export default MessagePage;
