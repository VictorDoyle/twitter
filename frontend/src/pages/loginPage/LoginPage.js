import React from "react";
import "./LoginPage.css";
import { Container, Form, Button } from "react-bootstrap";
// presently havent broken down this page remove phone and password when moving login into components
const LoginPage = ({ phone, password }) => {
  return (
    <Container className="loginContainer">
      <p>Twitter Logo</p>
      <h3>Log in to Twitter</h3>
      <Form>
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

export default LoginPage;
