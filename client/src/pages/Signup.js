import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import '../App.css';
import SignupForm from '../components/SignupForm';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';

function Signup(props) {

  const [redirect, setRedirect] = useState(false)

  return (
    redirect ?
      <Redirect to='/login' />
      :
      <Container className="signup">
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <SignupForm {...props} setRedirect={setRedirect} />
          </Col>
        </Row>
      </Container>
  );
}

export default Signup;
