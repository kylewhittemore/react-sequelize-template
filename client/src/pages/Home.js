import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';

function Home() {
  
  return (
    
      <Container className="signup">
        <Row>
          <Col md={{ span:8, offset:2 }}>
            <h1>Home Page</h1>
          </Col>
        </Row>
      </Container>
  );
}

export default Home;