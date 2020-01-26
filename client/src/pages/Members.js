import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom'
import { AuthContext } from '../AuthContext';
import Axios from 'axios'
import {
    Button,
    Col,
    Container,
    Row
} from 'react-bootstrap';
import '../App.css';

const Members = props => {
    const { isAuth } = useContext(AuthContext)
    console.log("members auth: ", isAuth)

    const [secret, setSecret] = useState('')

    const getSecret = async () => {
        const secretResponse = await Axios.get('/api/secrets')
        console.log(secretResponse.data)
        setSecret(secretResponse.data)
    }

    return (
        isAuth ?
            <Container className="signup">
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <h1>Members Page</h1>
                        <Button className='m-1' onClick={e => {
                            e.preventDefault();
                            props.logout();
                        }}>logout</Button>
                        <Button className='m-1' onClick={e => {
                            e.preventDefault();
                            props.history.push('/')
                        }}>home</Button>
                        <Button className='m-1' onClick={e => {
                            e.preventDefault();
                            getSecret();
                        }}>show secret</Button>
                    </Col>
                </Row>
                <Row>
                    <h1>{secret}</h1>
                </Row>
            </Container>
            :
            <Redirect to='/login' />
    );
}

export default Members;