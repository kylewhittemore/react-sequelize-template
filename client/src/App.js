import React from 'react';
import './App.css';
import Signup from './components/signup';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';

function App() {
  return (
    
      <Container className="signup">
        <Row>
          <Col md={{ span:8, offset:2 }}>
            <Signup />
          </Col>
        </Row>
      </Container>

  );
}

export default App;
