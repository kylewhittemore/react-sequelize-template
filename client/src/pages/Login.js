import React from 'react';
import { Redirect } from 'react-router-dom'
import '../App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import LoginForm from '../components/LoginForm'

function Login (props) {
  console.log("login props: ", props)
  return (
      !props.isAuth ? 
      <Container className="signup">
        <Row>
          <Col md={{ span:8, offset:2 }}>
            <LoginForm />
          </Col>
        </Row>
      </Container>
      :
      <Redirect to={'/members'} />
  );
}

export default Login;