import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom'
import '../App.css';
import Axios from 'axios'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import { AuthContext } from '../AuthContext'

function Home(props) {
  const { isAuth, setIsAuth } = useContext(AuthContext)
  console.log("home auth: ", isAuth)

  return (
    isAuth ?
      <Container className="signup">
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <h1>Home Page</h1>
            <Button className='m-1' onClick={e => {
              e.preventDefault();
              props.logout();
            }}>logout</Button>
            <Button className='m-1' onClick={e => {
              e.preventDefault();
              props.history.push('/members')
            }}>members</Button>
          </Col>
        </Row>
      </Container>
      :
      <Redirect to='/login' />
  );
}

export default Home;