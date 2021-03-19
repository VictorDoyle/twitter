import React, { useState, useEffect } from "react";
import "./LoginPage.css";
import Login from "../../components/loginPage/Login";
// import AuthModel from "../../models/auth";
import { userState } from "../../recoil/atoms";
import { useSetRecoilState } from "recoil";
import { useMutation, gql } from "@apollo/client";

const SigninMutation = gql`
  mutation SigninUserMutation(
    $signinUserEmail: String!
    $signinUserPassword: String!
  ) {
    signinUser(email: $signinUserEmail, password: $signinUserPassword) {
      id
      email
      firstname
      lastname
      username
      dateOfBirth
      token
      bio
    }
  }
`;

const LoginPage = ({ history }) => {
  const setUser = useSetRecoilState(userState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { loading, error, data }] = useMutation(SigninMutation);
  // console.log(dataU);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("you've been Clicked");
    await login({
      variables: {
        signinUserEmail: email,
        signinUserPassword: password,
      },
    });

    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;

    // AuthModel.login({ email, password }).then((json) => {
    //   localStorage.setItem("uid", json.token);
    //   localStorage.setItem("userinfo", JSON.stringify(json));
    //   if (json.status === 200) {
    //     // FIXME may need selector to get just user
    //     console.log(json, "login");
    //     setUser(json);
    //     history.push("/feed");
    //   } else {
    //     history.push("/");
    //   }
    // });
  };

  useEffect(() => {
    if (!loading && data) {
      const { signinUser } = data;
      localStorage.setItem("uid", `Bearer ${signinUser.token}`);
      localStorage.setItem("userinfo", JSON.stringify(signinUser));
      setUser(signinUser);
      history.push("/feed");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

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
