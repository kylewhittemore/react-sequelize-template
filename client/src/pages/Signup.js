import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import '../App.css';
import SignupForm from '../components/SignupForm';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';

function Signup(props) {

  const [redirect, setRedirect] = useState(false)
  
  // We are using redirect here because we do not want to allow the user
  // to navigate back in their browser, unlike when we push the page change
  // onto props.history.  
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
