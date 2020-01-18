import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import LoginForm from '../components/LoginForm'

function Login() {
  return (
    
      <Container className="signup">
        <Row>
          <Col md={{ span:8, offset:2 }}>
            <LoginForm />
          </Col>
        </Row>
      </Container>
  );
}

export default Login;