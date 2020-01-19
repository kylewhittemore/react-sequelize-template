import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthContext'
import { Redirect } from 'react-router-dom'
import '../App.css';
import SignupForm from '../components/SignupForm';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';

function Signup() {

  const [redirect, setRedirect] = useState(false)
  const { isAuth } = useContext(AuthContext)
  console.log("signup auth: ", isAuth)

  return (
    redirect ?
      <Redirect to='/login' />
      :
      <Container className="signup">
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <SignupForm setRedirect={setRedirect} />
          </Col>
        </Row>
      </Container>
  );
}

export default Signup;
