import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom'
import '../App.css';
import Axios from 'axios'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import { AuthContext } from '../AuthContext'

function Home() {
  const { isAuth, setIsAuth } = useContext(AuthContext)
  console.log("home auth: ", isAuth)

  const logout = async () => {
    Axios.get('/api/auth/logout')
      .then(response => {
        console.log("logout response: ", response)
        setIsAuth(false)
      })
      .catch(err => console.log(err));
  }

  return (
    isAuth ?
      <Container className="signup">
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <h1>Home Page</h1>
            <Button onClick={e => {
              e.preventDefault();
              logout();
            }} />
          </Col>
        </Row>
      </Container>
      :
      <Redirect to='/login' />
  );
}

export default Home;