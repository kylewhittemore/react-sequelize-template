import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom'
import { AuthContext } from '../AuthContext'
import '../App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';

const Members = props => {
    const { isAuth } = useContext(AuthContext)

    console.log("members auth: ", isAuth)
    return (
        isAuth ?
        <Container className="signup">
            <Row>
                <Col md={{ span: 8, offset: 2 }}>
                    <h1>Members Page</h1>
                </Col>
            </Row>
        </Container>
        :
        <Redirect to='/login'/>
    );
}

export default Members;