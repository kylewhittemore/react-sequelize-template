import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext'
import '../App.css';
import { Container, Row, Button, Col } from 'react-bootstrap';

function Home(props) {
  const { isAuth } = useContext(AuthContext)
  console.log("home auth: ", isAuth)

  return (
    <Container className="signup">
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <h1>Home Page</h1>
          {isAuth ?
            <>
              <Button className='m-1' onClick={e => {
                e.preventDefault();
                props.logout();
              }}>logout</Button>
              <Button className='m-1' onClick={e => {
                e.preventDefault();
                props.history.push('/members')
              }}>members</Button>
            </>
            :
            <>
              <Button className='m-1' onClick={e => {
                e.preventDefault();
                props.history.push('/login');
              }}>login</Button>
              <Button className='m-1' onClick={e => {
                e.preventDefault();
                props.history.push('/signup');
              }}>signup</Button>
            </>}
          </Col>
      </Row>
    </Container>
  );
}

export default Home;