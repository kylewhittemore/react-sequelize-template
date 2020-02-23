import React, { useState, useContext } from 'react';
import { AuthContext } from '../AuthContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Axios from 'axios';

const VerifyEmailForm = () => {
    const emptyForm = { code: '', email: '' }
    const [formData, setFormData] = useState(emptyForm)
    const [codeIsInvalid, setCodeIsInvalid] = useState(false)

    const handleInputChange = event => {
        event.preventDefault()
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value });
    }

    const handleFormSubmit = event => {
        event.preventDefault()
        const emailUsr = {
            email: formData.email
        } 
        Axios
        .post(`/api/auth/verify/${formData.code}`, emailUsr)
        .then(response => console.log(response))
        .catch(error => console.log(error))
        setFormData(emptyForm)
    }

    return (
        <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="emailInput">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" value={formData.email} onChange={handleInputChange} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="codeInput">
                <Form.Label>Enter you verification code</Form.Label>
                <Form.Control name="code" type="text" placeholder="code" value={formData.code} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group>
                <Form.Text className="text-danger">
                    {codeIsInvalid}
                </Form.Text>
            </Form.Group>
            <Button className='m-1' variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default VerifyEmailForm;