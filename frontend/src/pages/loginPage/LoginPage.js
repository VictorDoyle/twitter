import React, { useState } from "react";
import "./LoginPage.css";
import Login from "../../components/loginPage/Login";
import AuthModel from "../../models/auth";
import { userState } from "../../recoil/atoms";
import { useSetRecoilState } from "recoil";

const LoginPage = ({ history }) => {
  const setUser = useSetRecoilState(userState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    AuthModel.login({ email, password }).then((json) => {
      localStorage.setItem("uid", json.token);
      if (json.status === 200) {
        setUser(json);
        history.push("/feed");
      } else {
        history.push("/");
      }
    });
  };
  return (
    <Login
      submitHandler={submitHandler}
      email={(e) => setEmail(e.target.value)}
      emailValue={email}
      password={(e) => setPassword(e.target.value)}
    />
  );
};

export default LoginPage;
