import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom'
import '../App.css';
import { AuthContext } from '../AuthContext'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import VerifyEmailForm from '../components/VerifyEmailForm';

function Login(props) {

  const { isAuth } = useContext(AuthContext)

  return (
      isAuth ? <Redirect to='/' />
        :
        <Container className="signup">
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <VerifyEmailForm />
            </Col>
          </Row>
        </Container>
  );
}

export default Login;