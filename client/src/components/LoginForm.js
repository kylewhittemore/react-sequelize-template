import React, { useState, useContext } from 'react';
import { AuthContext } from '../AuthContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Axios from 'axios';

const LoginForm = props => {

    const { setIsAuth } = useContext(AuthContext)
    const emptyCreds = { emailInput: '', passwordInput: '' }
    const [formData, setFormData] = useState(emptyCreds)

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
            .catch(err => console.log(err))
    }

    return (
        <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="emailInput">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="emailInput" type="email" placeholder="Enter email" value={formData.emailInput} onChange={handleInputChange} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="inputPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="passwordInput" type="password" placeholder="Password" value={formData.passwordInput} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="optionalCheck">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default LoginForm;