import React, { useState, useContext } from 'react';
import { AuthContext } from '../AuthContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Axios from 'axios';

const LoginForm = props => {

    const { setIsAuth } = useContext(AuthContext)
    const emptyCreds = { emailInput: '', passwordInput: '' }
    const errorMessage = 'invalid credentials'
    const [formData, setFormData] = useState(emptyCreds)
    const [credsAreInvalid, setCredsAreInvalid] = useState('')

    const handleInputChange = event => {
        event.preventDefault()
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value });
    }

    const handleFormSubmit = event => {
        event.preventDefault()
        const inputCreds = {
            email: formData.emailInput,
            password: formData.passwordInput
        }
        login(inputCreds)
        setFormData(emptyCreds)
    }

    const login = loginCreds => {
        Axios.post('/api/auth/login', loginCreds)
            .then(user => {
                console.log("login response ", user)
                setIsAuth(true)
            })
            .catch(err => {
                setCredsAreInvalid(errorMessage)
                console.log(err)
            })
    }

    return (
        <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="emailInput">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="emailInput" type="email" placeholder="Enter email" value={formData.emailInput} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="inputPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="passwordInput" type="password" placeholder="Password" value={formData.passwordInput} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group>
                <Form.Text className="text-danger">
                    {credsAreInvalid}
                </Form.Text>
            </Form.Group>
            <Button className='m-1' variant="primary" type="submit">
                Submit
            </Button>
            <Button className='m-1' onClick={e => {
                e.preventDefault();
                props.history.push('/signup')
            }}>Signup</Button>
            <Button className='m-1' onClick={e => {
                e.preventDefault();
                props.history.push('/')
            }}>Home</Button>
        </Form>
    )
}

export default LoginForm;