import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom'
import '../App.css';
import Axios from 'axios'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';

const Members = props => {

    return (
        // add context here instead of props.isAuth
        !props.isAuth ? <Redirect to={'/login'} />
            :
            <Container className="signup">
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <h1>Members Page</h1>
                    </Col>
                </Row>
            </Container>
    );
}

export default Members;