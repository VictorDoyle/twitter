import React, { useState } from "react";
import Modal from "../../components/Modal";
import LandingPageLeft from "../../components/LandingPage/LandingPageLeft";
import LandingPageRight from "../../components/LandingPage/LandingPageRight";
import LandingNavbar from "../../components/LandingPage/LandingNavbar";
import ModalHeader from "../../components/LandingPage/LandingModalHeader";
import ModalBody from "../../components/LandingPage/LandingModalBody";
import { Container, Row } from "react-bootstrap";

import "./LandingPage.css";

const LandingPage = () => {
  const [state, setState] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = (e) => {
    e.preventDefault();
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
        // styles={{ backgroundImage: `url("/images/LandingImage.png");` }}
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
            name={(e) => setName(e.target.value)}
            phone={(e) => setPhone(e.target.value)}
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
