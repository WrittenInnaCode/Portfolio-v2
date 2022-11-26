import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contact() {
    return (
        <section>
            <h2>Contact</h2>
            <div>
                <Form className='bg-light bg-opacity-50 rounded-4 m-5 p-5 shadow'>

                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="name" placeholder="Full Name" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Your Message</Form.Label>
                        <Form.Control as="textarea" placeholder="Type your message here" rows={3} />
                    </Form.Group>
                    <Button variant="primary">Send</Button>
                </Form>
            </div>
        </section>
    )
}

export default Contact;