import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom'
import '../App.css';
import Axios from 'axios'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';

function Members(props) {

    // // const [user, setUser] = useState()

    // useEffect(() => {
    //     // Axios.get('/api/auth/user_data')
    //     //     .then(response => {
    //     //         console.log('user_data: ', response.data)
    //     //         setUser(response.data)
    //     //     })
    //     if (props.isAuth === true)
    //     {
    //         console.log("TRUUUUUUUUEEEEE")
    //     }
    // }, [])

    return (
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