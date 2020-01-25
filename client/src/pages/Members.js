import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom'
import { AuthContext } from '../AuthContext';
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
                            // return <Redirect to='/members' />
                            props.history.push('/')
                        }}>home</Button>
                    </Col>
                </Row>
            </Container>
            :
            <Redirect to='/login' />
    );
}

export default Members;