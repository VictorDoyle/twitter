import React, { useEffect } from "react";
import MessagesContainer from "../../components/messages/MessagesContainer";
import { userState } from "../../recoil/atoms";
import { useRecoilState } from "recoil";
import "./MessagePage.css";

const MessagePage = ({ body, message }) => {
  // body and messages do not belong in propsa
  const [user, setUser] = useRecoilState(userState);
  // this page will need auth to pervent errors
  useEffect(
    function () {
      if (!user) {
        setUser(JSON.parse(localStorage.getItem("userinfo")));
      }
    },
    [user],
  );
  return <MessagesContainer user={user} body={body} message={message} />;
};

export default MessagePage;
