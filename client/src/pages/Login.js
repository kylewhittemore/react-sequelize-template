import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom'
import '../App.css';
import { AuthContext } from '../AuthContext'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import LoginForm from '../components/LoginForm'

function Login (props) {
  
  const { isAuth } = useContext(AuthContext)
  console.log("INITIAL IS AUTH: ", isAuth)

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