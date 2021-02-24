import React from "react";
import { Col, Form } from "react-bootstrap";
// Really should get a npm package for date or ask about making dates in javascript
// TODO Need state
const LandingModalBody = () => {
  const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  const year = new Date().getFullYear();
  const years = Array.from(new Array(50), (val, index) =>
    Math.abs(index - year),
  );
  const days = Array.from(Array(31).keys());

  // belongs in main module
  const submitHandler = () => {
    console.log("Hello for now");
  };
  return (
    <>
      <h3>Create your account</h3>
      <Form onSubmit={submitHandler}>
        <Form.Control
          type="name"
          placeholder="Name"
          // onChange={(e) => setName(e.target.value)}
        />
        <Form.Control
          type="phone"
          placeholder="Phone"
          // onChange={(e) => setPhone(e.target.value)}
        />
        <p>Maybe Email?</p>
        <h6>Date of birth</h6>
        <Form.Row>
          <Col xs={6}>
            <Form.Control
              as="select"
              type="month"
              // onChange={(e) => setMonth(e.target.value)}
            >
              {months.map((x, i) => (
                <option key={`x${i}`} value={x}>
                  {x}
                </option>
              ))}
            </Form.Control>
          </Col>
          <Col>
            <Form.Control
              as="select"
              type="day"
              // onChange={(e) => setDay(e.target.value)}
            >
              {days.map((d, i) => (
                <option key={`d${i}`} value={d + 1}>
                  {d + 1}
                </option>
              ))}
            </Form.Control>
          </Col>
          <Col>
            <Form.Control
              as="select"
              type="year"
              // onChange={(e) => setYear(e.target.value)}
            >
              {years.map((y, i) => (
                <option key={`y${i}`} value={y}>
                  {y}
                </option>
              ))}
            </Form.Control>
          </Col>
        </Form.Row>
      </Form>
    </>
  );
};

export default LandingModalBody;
