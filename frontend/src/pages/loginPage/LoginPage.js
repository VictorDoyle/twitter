import React, { useState } from "react";
import "./LoginPage.css";
import Login from "../../components/loginPage/Login";

const LoginPage = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = () => {
    console.log("hello!");
  };
  return (
    <Login
      onSubmit={submitHandler}
      phone={(e) => setPhone(e.target.value)}
      password={(e) => setPassword(e.target.value)}
    />
  );
};

export default LoginPage;
