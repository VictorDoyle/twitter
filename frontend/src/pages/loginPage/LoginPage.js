import React, { useState } from "react";
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

  const submitHandler = async (e) => {
    e.preventDefault();
    await login({
      variables: {
        signinUserEmail: email,
        signinUserPassword: password,
      },
    });
    if (!loading && data) {
      const { signinUser } = data;
      //FIXME having issues with auth on token
      localStorage.setItem("uid", JSON.stringify(`Bearer ${signinUser.token}`));
      localStorage.setItem("userinfo", JSON.stringify(signinUser));
      setUser(signinUser);
      history.push("/feed");
    }
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
