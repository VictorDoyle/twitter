import React, { useState, useEffect } from "react";
import Modal from "../../components/Modal";
import LandingPageLeft from "../../components/LandingPage/LandingPageLeft";
import LandingPageRight from "../../components/LandingPage/LandingPageRight";
import LandingNavbar from "../../components/LandingPage/LandingNavbar";
import ModalHeader from "../../components/LandingPage/LandingModalHeader";
import ModalBody from "../../components/LandingPage/LandingModalBody";
// import UserModel from "../../models/user";
import { Container, Row } from "react-bootstrap";
import { useMutation, gql } from "@apollo/client";

import "./LandingPage.css";

const SignupMutation = gql`
  mutation Mutation(
    $email: String!
    $firstname: String!
    $password: String!
    $lastname: String
    $dateOfBirth: String
  ) {
    signupUser(
      email: $email
      firstname: $firstname
      password: $password
      lastname: $lastname
      dateOfBirth: $dateOfBirth
    ) {
      id
      email
      firstname
      password
      lastname
      username
      bio
      dateOfBirth
    }
  }
`;

const LandingPage = ({ history }) => {
  const [firstname, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [signup, { loading, error }] = useMutation(SignupMutation);

  useEffect(() => {
    /* FIXME: EST -- Date.UTC(birthYear, month, day, 22, 0, 0)) */
    /* FIXME: PST -- Date.UTC(birthYear, month, day, 19, 0, 0)) */
    let date = new Date(Date.UTC(birthYear, month, day, 19, 0, 0));
    setDateOfBirth(date);
  }, [month, day, birthYear]);
  // ANCHOR
  // console.log(dateOfBirth);

  const [show, setShow] = useState(false);
  const handleClose = (e) => {
    e.preventDefault();
    setShow(false);
    submitHandler();
  };
  const handleShow = () => setShow(true);

  const submitHandler = async () => {
    await signup({
      variables: {
        firstname: firstname,
        email: email,
        password: password,
        dateOfBirth: dateOfBirth,
      },
    });
    // UserModel.create({
    //   firstname: firstname,
    //   email: email,
    //   password: password,
    //   dateOfBirth: dateOfBirth,
    // });
    history.push("/login");
  };
  if (loading) return <p>Loading </p>;
  if (error) return <p>An error occurred</p>;

  return (
    <>
      <Container
        className="LandingPageContainer"
        styles={{
          backgroundImage: `url("/images/LandingImage.png");`,
        }}
      >
        <Row className="LandingPageRow">
          <LandingPageLeft />
          <LandingPageRight handleShow={handleShow} />
        </Row>
        <LandingNavbar />
      </Container>
      <Modal
        show={show}
        handleClose={handleShow}
        contentClassName="LandingModalContent"
        header={<ModalHeader handleClose={handleClose} />}
        body={
          <ModalBody
            submitHandler={submitHandler}
            firstName={(e) => setName(e.target.value)}
            email={(e) => setEmail(e.target.value)}
            day={(e) => setDay(e.target.value)}
            month={(e) => setMonth(e.target.value)}
            birthYear={(e) => setBirthYear(e.target.value)}
            password={(e) => setPassword(e.target.value)}
          />
        }
        className="LandingModal"
      />
    </>
  );
};

export default LandingPage;
