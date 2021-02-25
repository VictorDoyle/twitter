import React, { useState } from "react";
import Modal from "../../components/Modal";
import LandingPageLeft from "../../components/LandingPage/LandingPageLeft";
import LandingPageRight from "../../components/LandingPage/LandingPageRight";
import LandingNavbar from "../../components/LandingPage/LandingNavbar";
import ModalHeader from "../../components/LandingPage/LandingModalHeader";
import ModalBody from "../../components/LandingPage/LandingModalBody";
import userModel from "../../models/user";
import { Container, Row } from "react-bootstrap";

import "./LandingPage.css";

const LandingPage = () => {
  const [state, setState] = useState("");
  const [firstname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = (e) => {
    e.preventDefault();
    setDateOfBirth(month, day, birthYear);
    userModel.create({ firstname, email, dateOfBirth });
    setShow(false);
    submitHandler();
  };
  const handleShow = () => setShow(true);

  const submitHandler = () => {
    console.log("Hello for now");
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
            firstname={(e) => setName(e.target.value)}
            email={(e) => setEmail(e.target.value)}
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
