import React, { useState, useEffect } from "react";
import Modal from "../../components/Modal";
import LandingPageLeft from "../../components/LandingPage/LandingPageLeft";
import LandingPageRight from "../../components/LandingPage/LandingPageRight";
import LandingNavbar from "../../components/LandingPage/LandingNavbar";
import ModalHeader from "../../components/LandingPage/LandingModalHeader";
import ModalBody from "../../components/LandingPage/LandingModalBody";
import UserModel from "../../models/user";
import { Container, Row } from "react-bootstrap";

import "./LandingPage.css";

const LandingPage = ({ history }) => {
  const [state, setState] = useState("");
  const [firstname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [birthYear, setBirthYear] = useState("");
  console.log(month);
  console.log(day);
  console.log(birthYear);

  useEffect(() => {
    setDateOfBirth(month, day, birthYear);
  }, [month, day, birthYear]);

  const [show, setShow] = useState(false);
  const handleClose = (e) => {
    e.preventDefault();
    setShow(false);
    submitHandler();
  };
  const handleShow = () => setShow(true);

  const submitHandler = () => {
    console.log(dateOfBirth);
    UserModel.create({
      firstname: firstname,
      email: email,
      // ANCHOR This isnt working need to get it in a number format
      dateOfBirth: dateOfBirth,
    });
    history.push("/login");
  };

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
            firstNameValue={firstname}
            email={(e) => setEmail(e.target.value)}
            emailValue={email}
            day={(e) => setDay(e.target.value)}
            month={(e) => setMonth(e.target.value)}
            birthYear={(e) => setBirthYear(e.target.value)}
          />
        }
        footer=""
        className="LandingModal"
      />
    </>
  );
};

export default LandingPage;
