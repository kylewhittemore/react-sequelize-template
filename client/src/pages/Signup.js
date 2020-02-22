import React from 'react'
import "../App.css";
import SignupForm from "../components/SignupForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Signup(props) {
  return (
    <Container className="signup">
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <SignupForm {...props} />
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
