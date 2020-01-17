import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

const Signup = () => {
    const emptyUser = { emailInput: '', passwordInput: '' } 
    const [formData, setFormData] = useState(emptyUser)

    const handleInputChange = event => {
        event.preventDefault()
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value });
    }

    const handleFormSubmit = event => {
        event.preventDefault()
        const newUser = {
            email: formData.emailInput,
            password: formData.passwordInput
        }
        postNewUser(newUser)
        setFormData(emptyUser)
    }
    
    const postNewUser = newUser => {
        console.log(newUser)
    }

    return (
        <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="emailInput">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="emailInput" type="email" placeholder="Enter email" value={formData.emailInput} onChange={handleInputChange}/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="inputPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="passwordInput" type="password" placeholder="Password" value={formData.passwordInput} onChange={handleInputChange}/>
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

export default Signup;