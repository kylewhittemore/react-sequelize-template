import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom'
import '../App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import { AuthContext } from '../AuthContext'

function Home() {
  const { isAuth } = useContext(AuthContext)

  console.log("home auth: ", isAuth)

  return (
    isAuth ?
      <Container className="signup">
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <h1>Home Page</h1>
          </Col>
        </Row>
      </Container>
      :
      <Redirect to='/login'/>
  );
}

export default Home;