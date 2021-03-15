import React, { useState } from "react";
import { Col, Form } from "react-bootstrap";
//TODO Really should get a npm package for date or ask about making dates in javascript
const LandingModalBody = ({
  submitHandler,
  firstName,
  firstNameValue,
  email,
  emailValue,
  day,
  month,
  birthYear,
  password,
  passwordValue,
}) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const year = new Date().getFullYear();
  const years = Array.from(new Array(50), (val, index) =>
    Math.abs(index - year),
  );
  const days = Array.from(Array(31).keys());

  return (
    <>
      <h3>Create your account</h3>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
          <Form.Control
            type="firstname"
            placeholder="Name"
            value={firstNameValue}
            onChange={firstName}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Control
            type="email"
            placeholder="Email"
            value={emailValue}
            onChange={email}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Control
            type="password"
            placeholder="password"
            value={passwordValue}
            onChange={password}
          />
        </Form.Group>
        <p>Maybe Email?</p>
        <h6>Date of birth</h6>
        <Form.Row>
          <Col xs={6}>
            <Form.Control as="select" type="month" onChange={month}>
              {months.map((x, i) => (
                <option key={`x${i}`} value={i}>
                  {x}
                </option>
              ))}
            </Form.Control>
          </Col>
          <Col>
            <Form.Control as="select" type="day" onChange={day}>
              {days.map((d, i) => (
                <option key={`d${i}`} value={d + 1}>
                  {d + 1}
                </option>
              ))}
            </Form.Control>
          </Col>
          <Col>
            <Form.Control as="select" type="year" onChange={birthYear}>
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
