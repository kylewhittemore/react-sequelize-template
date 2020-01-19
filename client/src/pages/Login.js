import React, { useContext, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom'
import '../App.css';
import { AuthContext } from '../AuthContext'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import LoginForm from '../components/LoginForm'

function Login(props) {

  const [redirect, setRedirect] = useState(false)
  const { isAuth, checkAuth } = useContext(AuthContext)

  console.log("login auth: ", isAuth)

  return (
      isAuth ? <Redirect to='/' />
        :
        <Container className="signup">
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <LoginForm setRedirect={setRedirect} />
            </Col>
          </Row>
        </Container>
  );
}

export default Login;