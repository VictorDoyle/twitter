import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Login = ({ submitHandler, phone, password }) => {
  return (
    <Container className="loginContainer" style={{ marginTop: 20 }}>
      <FontAwesomeIcon icon={faTwitter} size="2x" />
      <h3 style={{ marginTop: 30 }}>Log in to Twitter</h3>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Control type="phone" placeholder="Phone" onChange={phone} />
          <Form.Text className="text-muted">Phone</Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={password}
          />
        </Form.Group>
        <Button type="submit" variant="primary" className="loginButton" block>
          Log In
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
