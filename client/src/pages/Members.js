import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom'
import { AuthContext } from '../AuthContext';
import Axios from 'axios'
import { Button, Col, Container, Row } from 'react-bootstrap';
import '../App.css';

const Members = props => {
    // Below is a pattern for authenticating the client-side routing
    // We use the isAuth state provided by AuthContext to conditionally render
    // the page or Redirect to the login page depending on their login status

    // Destructure the isAuth state from AuthContext
    const { isAuth } = useContext(AuthContext)
    console.log("members auth: ", isAuth)

    // The secret is just something to demonstrate a placeholder authenticated
    // api route.  
    const [secret, setSecret] = useState('')

    // this function is duplicated in the Home page component
    const getSecret = async () => {
        const secretResponse = await Axios.get('/api/secrets')
        console.log(secretResponse.data)
        setSecret(secretResponse.data)
    }

    return (
        // isAuth ?
            <Container className="signup">
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <h1>Members Page</h1>
                        <Button className='m-1' onClick={e => {
                            e.preventDefault();
                            props.logout();
                            setSecret('not authenticated')
                        }}>Logout</Button>
                        <Button className='m-1' onClick={e => {
                            e.preventDefault();
                            props.history.push('/')
                        }}>Home</Button>
                        <Button className='m-1' onClick={e => {
                            e.preventDefault();
                            getSecret();
                        }}>Show Secret</Button>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <h1>{secret}</h1>
                    </Col>
                </Row>
            </Container>
            // :
            // <Redirect to='/login' />
    );
}

export default Members;